// ============================================================
// SISTEMA ANTIFRAUDE – PROCESOS INDUSTRIALES 1
// Ejecutar ANTES de iniciar el examen, escuchar durante todo
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

  // ── Constantes de almacenamiento ─────────────────────────
  const KEY_PRESENTADO  = 'pi1_presentado';   // localStorage – permanente
  const KEY_RECARGADO   = 'pi1_recargado';    // sessionStorage – temporal
  const KEY_ANULADO     = 'pi1_anulado';      // sessionStorage – temporal
  const KEY_STRIKES     = 'pi1_strikes_tab';  // sessionStorage
  const KEY_COMPLETADO  = 'pi1_completado';   // sessionStorage – bloqueo post-envío

  let _callbackBloqueado = null;

  // ── Inicializar (llamar antes del login) ─────────────────
  function init(onAnular, onWarn, onBloqueado) {
    _callbackAnular    = onAnular;
    _callbackWarn      = onWarn;
    _callbackBloqueado = onBloqueado;

    _strikesTab = parseInt(sessionStorage.getItem(KEY_STRIKES) || '0', 10);

    // 1. Verificar si el examen ya fue completado en esta sesión (reload post-envío)
    const completado = sessionStorage.getItem(KEY_COMPLETADO);
    if (completado) {
      setTimeout(() => {
        _callbackBloqueado && _callbackBloqueado(
          'Ya enviaste tu examen en esta sesión. No es posible volver a presentarlo.'
        );
      }, 0);
      return false;
    }

    // 2. Verificar si ya fue anulado en esta sesión (tras reload durante examen)
    const anulado = sessionStorage.getItem(KEY_ANULADO);
    if (anulado) {
      const datos = JSON.parse(anulado);
      _anularDirecto(datos.motivo, datos.estudiantil || '');
      return false;
    }

    // 3. Detectar recarga mientras el examen estaba activo → ANULAR
    const yaInicio = sessionStorage.getItem(KEY_RECARGADO);
    if (yaInicio) {
      _registrarAnulado('Recargaste la página durante el examen.');
      return false;
    }

    return true; // sesión limpia
  }

  // ── Verificar si el estudiante ya presentó ───────────────
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
    // Marcar que hay examen activo para detectar recarga
    sessionStorage.setItem(KEY_RECARGADO, JSON.stringify({ codigo, t: Date.now() }));

    _vigilarVisibilidad();
    _vigilarTamano();
    _vigilarTeclado();
    _vigilarDevTools();
    _vigilarContextMenu();
  }

  // ── Marcar examen como completado (bloquea reload post-envío) ──
  function marcarCompletado() {
    sessionStorage.setItem(KEY_COMPLETADO, Date.now().toString());
  }

  // ── Desactivar al finalizar correctamente ────────────────
  function desactivar() {
    _examenActivo = false;
    sessionStorage.removeItem(KEY_RECARGADO);
    // KEY_COMPLETADO y KEY_ANULADO se mantienen para bloquear recargas
  }

  // ══════════════════════════════════════════════════════════
  // VIGILANCIAS INDIVIDUALES
  // ══════════════════════════════════════════════════════════

  // 1. Cambio de pestaña / minimizar / cambiar app
  function _vigilarVisibilidad() {
    document.addEventListener('visibilitychange', () => {
      if (!_examenActivo || _anulado) return;
      if (document.hidden) {
        _strikesTab++;
        sessionStorage.setItem(KEY_STRIKES, String(_strikesTab));

        if (_strikesTab >= MAX_STRIKES) {
          _registrarAnulado('Abandonaste la ventana del examen 2 veces. Examen anulado automáticamente.');
        } else {
          _callbackWarn && _callbackWarn(
            'Advertencia de Seguridad',
            `Saliste de la ventana del examen. Esta es la advertencia ${_strikesTab} de ${MAX_STRIKES}. Al salir nuevamente, el examen será anulado automáticamente.`,
            _strikesTab
          );
        }
      }
    });

    // blur = cambiar de aplicación o abrir otra pestaña
    window.addEventListener('blur', () => {
      if (!_examenActivo || _anulado) return;
      // Solo contar si la página ya está oculta (para no duplicar con visibilitychange)
      if (!document.hidden) {
        _strikesTab++;
        sessionStorage.setItem(KEY_STRIKES, String(_strikesTab));

        if (_strikesTab >= MAX_STRIKES) {
          _registrarAnulado('Cambiaste de aplicación o abriste otra ventana 2 veces. Examen anulado.');
        } else {
          _callbackWarn && _callbackWarn(
            'Advertencia de Seguridad',
            `Cambiaste de ventana. Advertencia ${_strikesTab} de ${MAX_STRIKES}. La próxima vez el examen será anulado.`,
            _strikesTab
          );
        }
      }
    });
  }

  // 2. Reducción de ventana / pantalla dividida
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

        // Detectar pantalla dividida horizontalmente o verticalmente
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
      }, 600);
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
        // Screenshot / Impresión
        ctrl && key === 'p',                    // Ctrl+P (imprimir)
        ctrl && shift && key === 'S',           // Ctrl+Shift+S (guardar como)
        key === 'PrintScreen',                  // PrtScn
        // DevTools
        key === 'F12',
        ctrl && shift && key === 'I',           // Ctrl+Shift+I
        ctrl && shift && key === 'J',           // Ctrl+Shift+J
        ctrl && shift && key === 'C',           // Ctrl+Shift+C
        // Otras navegaciones peligrosas
        ctrl && key === 'u',                    // Ver código fuente
        ctrl && key === 's',                    // Guardar página
        ctrl && key === 'a',                    // Seleccionar todo (en examen)
        ctrl && key === 'c',                    // Copiar
        // Alt+Tab (cambiar ventana en Windows) – limitado pero intenta capturarse
        e.altKey && key === 'Tab',
      ];

      if (bloqueados.some(Boolean)) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    }, true); // capture phase para mayor prioridad
  }

  // 4. Detectar apertura de DevTools
  function _vigilarDevTools() {
    let devToolsOpen = false;

    const check = () => {
      if (!_examenActivo || _anulado) return;
      const diff = window.outerHeight - window.innerHeight;
      // DevTools abierto verticalmente agrega ~150px o más
      if (diff > 160 && !devToolsOpen) {
        devToolsOpen = true;
        _registrarAnulado('Se detectó la apertura de herramientas de desarrollo del navegador.');
      } else if (diff <= 160) {
        devToolsOpen = false;
      }
    };

    setInterval(check, 1500);

    // Técnica adicional: console.log con getter
    const el = new Image();
    Object.defineProperty(el, 'id', {
      get: () => {
        if (_examenActivo && !_anulado) {
          _registrarAnulado('Se detectaron herramientas de desarrollo del navegador (console).');
        }
        return '';
      }
    });
    // No llamar console.log directamente para no activar en producción
  }

  // 5. Bloquear menú contextual (clic derecho)
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

    // Guardar en sessionStorage para persistir si recarga
    sessionStorage.setItem(KEY_ANULADO, JSON.stringify(datos));
    // Limpiar flag de recarga para no re-detectar
    sessionStorage.removeItem(KEY_RECARGADO);

    // Notificar al controlador del examen
    _callbackAnular && _callbackAnular(motivo, datos);
  }

  function _anularDirecto(motivo, codigo) {
    // Llamado cuando se detecta anulación en sessionStorage al cargar
    _anulado = true;
    _callbackAnular && _callbackAnular(motivo, {
      motivo,
      estudiantil: codigo,
      nombre: sessionStorage.getItem('pi1_nombre') || '',
      timestamp: sessionStorage.getItem(KEY_ANULADO)
        ? JSON.parse(sessionStorage.getItem(KEY_ANULADO)).timestamp
        : new Date().toISOString()
    });
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
  };

})();
