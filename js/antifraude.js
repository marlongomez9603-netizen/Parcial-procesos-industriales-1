// ============================================================
// SISTEMA ANTIFRAUDE – PROCESOS INDUSTRIALES 1
// Compatible con escritorio y dispositivos móviles
// Bloqueo PERSISTENTE: usa localStorage para que cerrar el
// navegador NO permita reingresar al examen.
// ============================================================

const Antifraude = (() => {

  // ── Estado interno ────────────────────────────────────────
  let _examenActivo   = false;
  let _strikesTab     = 0;
  let _strikesResize  = 0;
  let _anulado        = false;
  let _callbackAnular = null;
  let _callbackWarn   = null;
  const MAX_STRIKES   = 2;
  const MIN_WIDTH_PCT = 0.80; // 80% del ancho de pantalla

  // ── Detección de móvil ────────────────────────────────────
  const _esMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                    || ('ontouchstart' in window && window.innerWidth < 1024);

  // ── Constantes de almacenamiento ─────────────────────────
  // TODO: Todos los bloqueos críticos ahora usan localStorage
  // para que sobrevivan al cierre de pestaña/navegador
  const KEY_PRESENTADO    = 'pi1_presentado';     // localStorage – lista de códigos que ya presentaron
  const KEY_DISPOSITIVO   = 'pi1_dispositivo_uso'; // localStorage – marca que ESTE dispositivo ya fue usado
  const KEY_EXAMEN_ACTIVO = 'pi1_examen_activo';   // localStorage – hay un examen en progreso
  const KEY_ANULADO       = 'pi1_anulado';         // localStorage – el examen fue anulado
  const KEY_COMPLETADO    = 'pi1_completado';      // localStorage – el examen fue completado
  const KEY_STRIKES       = 'pi1_strikes_tab';     // localStorage – strikes de cambio de pestaña

  let _callbackBloqueado = null;

  // ── Inicializar (llamar antes del login) ─────────────────
  function init(onAnular, onWarn, onBloqueado) {
    _callbackAnular    = onAnular;
    _callbackWarn      = onWarn;
    _callbackBloqueado = onBloqueado;

    _strikesTab = parseInt(localStorage.getItem(KEY_STRIKES) || '0', 10);

    // 1. Verificar si el examen ya fue completado en ESTE dispositivo
    const completado = localStorage.getItem(KEY_COMPLETADO);
    if (completado) {
      const datosComp = JSON.parse(completado);
      setTimeout(() => {
        _callbackBloqueado && _callbackBloqueado(
          `Ya presentaste este examen. Código: ${datosComp.codigo || 'N/A'}. No es posible volver a intentarlo.`
        );
      }, 0);
      return false;
    }

    // 2. Verificar si el examen fue anulado en ESTE dispositivo
    const anulado = localStorage.getItem(KEY_ANULADO);
    if (anulado) {
      const datos = JSON.parse(anulado);
      _anularDirecto(datos.motivo, datos.estudiantil || '');
      return false;
    }

    // 3. Verificar si ESTE dispositivo ya fue usado para un examen (aunque no haya terminado)
    //    Esto cubre el caso de cerrar navegador durante el examen
    const dispositivoUsado = localStorage.getItem(KEY_DISPOSITIVO);
    if (dispositivoUsado) {
      const datosDisp = JSON.parse(dispositivoUsado);
      // Si hay un examen activo marcado, el estudiante cerró/recargó durante el examen → ANULAR
      const examenActivo = localStorage.getItem(KEY_EXAMEN_ACTIVO);
      if (examenActivo) {
        _registrarAnulado('Cerraste o recargaste la página durante el examen.');
        return false;
      }
      // Si no hay examen activo pero el dispositivo ya fue usado, bloquear
      setTimeout(() => {
        _callbackBloqueado && _callbackBloqueado(
          `Este dispositivo ya fue usado para presentar el examen. Código: ${datosDisp.codigo || 'N/A'}. No es posible volver a intentarlo.`
        );
      }, 0);
      return false;
    }

    return true; // sesión limpia, dispositivo nuevo
  }

  // ── Verificar si el estudiante ya presentó (por código) ──
  function yaPresento(codigo) {
    const lista = JSON.parse(localStorage.getItem(KEY_PRESENTADO) || '[]');
    return lista.some(e => e.codigo === codigo);
  }

  // ── Registrar estudiante como ya presentado ──────────────
  function marcarPresentado(codigo, nombre) {
    const lista = JSON.parse(localStorage.getItem(KEY_PRESENTADO) || '[]');
    lista.push({ codigo, nombre, fecha: new Date().toISOString() });
    localStorage.setItem(KEY_PRESENTADO, JSON.stringify(lista));
  }

  // ── Activar vigilancia (llamar al iniciar el examen) ─────
  function activar(codigo) {
    _examenActivo = true;

    // Marcar dispositivo como usado (PERSISTENTE - sobrevive cierre de navegador)
    localStorage.setItem(KEY_DISPOSITIVO, JSON.stringify({
      codigo,
      nombre: sessionStorage.getItem('pi1_nombre') || '',
      timestamp: Date.now()
    }));

    // Marcar que hay un examen activo en curso
    localStorage.setItem(KEY_EXAMEN_ACTIVO, JSON.stringify({
      codigo,
      t: Date.now()
    }));

    _vigilarVisibilidad();
    _vigilarTeclado();
    _vigilarContextMenu();

    // Solo activar en escritorio (en móviles causan falsos positivos)
    if (!_esMobile) {
      _vigilarTamano();
      _vigilarDevTools();
    }
  }

  // ── Marcar examen como completado ─────────────────────────
  function marcarCompletado() {
    localStorage.setItem(KEY_COMPLETADO, JSON.stringify({
      codigo: sessionStorage.getItem('pi1_codigo') || '',
      nombre: sessionStorage.getItem('pi1_nombre') || '',
      timestamp: Date.now()
    }));
    // Limpiar flag de examen activo (ya terminó correctamente)
    localStorage.removeItem(KEY_EXAMEN_ACTIVO);
  }

  // ── Desactivar al finalizar correctamente ────────────────
  function desactivar() {
    _examenActivo = false;
    localStorage.removeItem(KEY_EXAMEN_ACTIVO);
    // KEY_COMPLETADO y KEY_DISPOSITIVO se mantienen para bloquear futuros intentos
  }

  // ══════════════════════════════════════════════════════════
  // VIGILANCIAS INDIVIDUALES
  // ══════════════════════════════════════════════════════════

  // Periodo de gracia: el estudiante tiene N segundos para regresar
  // antes de que se cuente como strike
  const GRACIA_SEGUNDOS = 10;
  let _timerGracia      = null;
  let _timerBlur        = null;

  // 1. Cambio de pestaña / minimizar / cambiar app
  function _vigilarVisibilidad() {
    document.addEventListener('visibilitychange', () => {
      if (!_examenActivo || _anulado) return;

      if (document.hidden) {
        // Inicia periodo de gracia: si regresa antes de GRACIA_SEGUNDOS, no pasa nada
        _timerGracia = setTimeout(() => {
          _strikesTab++;
          localStorage.setItem(KEY_STRIKES, String(_strikesTab));

          if (_strikesTab >= MAX_STRIKES) {
            _registrarAnulado('Abandonaste la ventana del examen 2 veces por más de 10 segundos. Examen anulado automáticamente.');
          } else {
            _callbackWarn && _callbackWarn(
              'Advertencia de Seguridad',
              `Saliste de la ventana del examen por más de 10 segundos. Esta es la advertencia ${_strikesTab} de ${MAX_STRIKES}. La próxima vez, el examen será anulado automáticamente.`,
              _strikesTab
            );
          }
        }, GRACIA_SEGUNDOS * 1000);
      } else {
        // El estudiante regresó: cancelar el timer de gracia si existe
        if (_timerGracia) {
          clearTimeout(_timerGracia);
          _timerGracia = null;
        }
      }
    });

    // blur = cambiar de aplicación (SOLO escritorio, con misma gracia)
    if (!_esMobile) {
      window.addEventListener('blur', () => {
        if (!_examenActivo || _anulado) return;
        if (!document.hidden) {
          _timerBlur = setTimeout(() => {
            _strikesTab++;
            localStorage.setItem(KEY_STRIKES, String(_strikesTab));

            if (_strikesTab >= MAX_STRIKES) {
              _registrarAnulado('Cambiaste de aplicación por más de 10 segundos 2 veces. Examen anulado.');
            } else {
              _callbackWarn && _callbackWarn(
                'Advertencia de Seguridad',
                `Cambiaste de ventana por más de 10 segundos. Advertencia ${_strikesTab} de ${MAX_STRIKES}. La próxima vez el examen será anulado.`,
                _strikesTab
              );
            }
          }, GRACIA_SEGUNDOS * 1000);
        }
      });

      window.addEventListener('focus', () => {
        if (_timerBlur) {
          clearTimeout(_timerBlur);
          _timerBlur = null;
        }
      });
    }
  }

  // 2. Reducción de ventana / pantalla dividida (SOLO ESCRITORIO)
  function _vigilarTamano() {
    let timeoutResize = null;

    window.addEventListener('resize', () => {
      if (!_examenActivo || _anulado) return;
      clearTimeout(timeoutResize);
      timeoutResize = setTimeout(() => {
        const anchoActual  = window.innerWidth;
        const anchoPantalla = window.screen.width;
        const altoActual   = window.innerHeight;
        const altoPantalla = window.screen.height;

        const esSplit = (anchoActual < anchoPantalla * MIN_WIDTH_PCT) ||
                        (altoActual  < altoPantalla * 0.65);

        if (esSplit) {
          _strikesResize++;
          if (_strikesResize >= 2) {
            _registrarAnulado('Dividiste la pantalla o redujiste la ventana del examen. Examen anulado.');
          } else {
            _callbackWarn && _callbackWarn(
              'División de Pantalla Detectada',
              `No está permitido dividir la pantalla ni reducir la ventana durante el examen. Restaura la ventana a pantalla completa de inmediato. Próxima vez: anulación automática.`,
              _strikesTab
            );
          }
        }
      }, 800);
    });
  }

  // 3. Bloquear atajos de teclado peligrosos
  function _vigilarTeclado() {
    document.addEventListener('keydown', (e) => {
      if (!_examenActivo || _anulado) return;

      const ctrl  = e.ctrlKey  || e.metaKey;
      const shift = e.shiftKey;
      const key   = e.key;

      const bloqueados = [
        ctrl && key === 'p',
        ctrl && shift && key === 'S',
        key === 'PrintScreen',
        key === 'F12',
        ctrl && shift && key === 'I',
        ctrl && shift && key === 'J',
        ctrl && shift && key === 'C',
        ctrl && key === 'u',
        ctrl && key === 's',
        ctrl && key === 'a',
        ctrl && key === 'c',
        e.altKey && key === 'Tab',
      ];

      if (bloqueados.some(Boolean)) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    }, true);
  }

  // 4. Detectar apertura de DevTools (SOLO ESCRITORIO)
  function _vigilarDevTools() {
    let devToolsOpen = false;

    const check = () => {
      if (!_examenActivo || _anulado) return;
      const diff = window.outerHeight - window.innerHeight;
      if (diff > 160 && !devToolsOpen) {
        devToolsOpen = true;
        _registrarAnulado('Se detectó la apertura de herramientas de desarrollo del navegador.');
      } else if (diff <= 160) {
        devToolsOpen = false;
      }
    };

    setInterval(check, 1500);
  }

  // 5. Bloquear menú contextual (clic derecho / long press)
  function _vigilarContextMenu() {
    document.addEventListener('contextmenu', (e) => {
      if (_examenActivo) e.preventDefault();
    });
  }

  // ══════════════════════════════════════════════════════════
  // ANULACIÓN
  // ══════════════════════════════════════════════════════════

  function _registrarAnulado(motivo) {
    if (_anulado) return;
    _anulado = true;
    _examenActivo = false;

    const datos = {
      motivo,
      estudiantil: sessionStorage.getItem('pi1_codigo') || '',
      nombre: sessionStorage.getItem('pi1_nombre') || '',
      timestamp: new Date().toISOString()
    };

    // Guardar en localStorage (PERSISTENTE - sobrevive cierre de navegador)
    localStorage.setItem(KEY_ANULADO, JSON.stringify(datos));
    // Limpiar flag de examen activo
    localStorage.removeItem(KEY_EXAMEN_ACTIVO);

    // Notificar al controlador del examen
    _callbackAnular && _callbackAnular(motivo, datos);
  }

  function _anularDirecto(motivo, codigo) {
    _anulado = true;
    _callbackAnular && _callbackAnular(motivo, {
      motivo,
      estudiantil: codigo,
      nombre: sessionStorage.getItem('pi1_nombre') || '',
      timestamp: localStorage.getItem(KEY_ANULADO)
        ? JSON.parse(localStorage.getItem(KEY_ANULADO)).timestamp
        : new Date().toISOString()
    });
  }

  // ── Función para limpiar bloqueos (solo para el docente) ──
  // Ejecutar en la consola del navegador: Antifraude.resetear()
  function resetear() {
    localStorage.removeItem(KEY_PRESENTADO);
    localStorage.removeItem(KEY_DISPOSITIVO);
    localStorage.removeItem(KEY_EXAMEN_ACTIVO);
    localStorage.removeItem(KEY_ANULADO);
    localStorage.removeItem(KEY_COMPLETADO);
    localStorage.removeItem(KEY_STRIKES);
    sessionStorage.clear();
    console.log('✅ Todos los bloqueos han sido eliminados. Recarga la página.');
    location.reload();
  }

  // ── API pública ───────────────────────────────────────────
  return {
    init,
    activar,
    desactivar,
    marcarCompletado,
    yaPresento,
    marcarPresentado,
    getStrikes:  () => _strikesTab,
    estaAnulado: () => _anulado,
    esMobile:    () => _esMobile,
    resetear,  // Solo para uso del docente
  };

})();
