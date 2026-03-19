// ============================================================
// CONTROLADOR DEL EXAMEN – PROCESOS INDUSTRIALES 1
// ============================================================

(function () {
  'use strict';

  // ── Constante de tiempo total del examen ──────────────────
  const TIEMPO_EXAMEN_SEG  = 150 * 60;   // 150 minutos = 9000 segundos
  const UMBRAL_URGENTE_SEG = 10 * 60;    // Alerta roja en los últimos 10 minutos

  // ── Referencias DOM ───────────────────────────────────────
  const $ = id => document.getElementById(id);

  const UI = {
    bloqueado:       $('pantalla-bloqueado'),
    login:           $('pantalla-login'),
    examen:          $('pantalla-examen'),
    anulado:         $('pantalla-anulado'),
    resultados:      $('pantalla-resultados'),
    formLogin:       $('form-login'),
    nombre:          $('nombre'),
    codigo:          $('codigo'),
    grupo:           $('grupo'),
    acepto:          $('acepto'),
    // Examen
    faseLabel:       $('fase-label'),
    faseTitulo:      $('fase-titulo'),
    temporizador:    $('temporizador'),
    strikesCount:    $('strikes-count'),
    barraProgreso:   $('barra-progreso'),
    progresoTexto:   $('progreso-texto'),
    fasesBtns:       document.querySelectorAll('.fase-btn'),
    areaGrafico:     $('area-grafico'),
    pregNumero:      $('pregunta-numero'),
    pregEnunciado:   $('pregunta-enunciado'),
    opcionesContenedor: $('opciones-container'),
    indicadores:     $('indicadores-preguntas'),
    btnAnterior:     $('btn-anterior'),
    btnSiguiente:    $('btn-siguiente'),
    btnFinalizarFase: $('btn-finalizar-fase'),
    btnEnviar:       $('btn-enviar-examen'),
    overlayWarning:  $('overlay-warning'),
    warningTitulo:   $('warning-titulo'),
    warningMensaje:  $('warning-mensaje'),
    btnWarningOk:    $('btn-warning-ok'),
    // Anulado
    anuladoMotivo:   $('anulado-motivo'),
    anuladoDatos:    $('anulado-datos'),
    // Resultados
    estudianteInfo:  $('estudiante-info'),
    notaPrincipal:   $('nota-principal'),
    notaValor:       $('nota-valor'),
    notaEstado:      $('nota-estado'),
    desgloseGrid:    $('desglose-grid'),
    resultTimestamp: $('resultado-timestamp'),
    bloqueoDet:      $('bloqueo-detalle'),
    bloqueoMsg:      $('bloqueo-mensaje'),
  };

  // ── Estado del examen ─────────────────────────────────────
  const Estado = {
    nombre:        '',
    codigo:        '',
    grupo:         '',
    horaInicio:    null,
    faseActual:    1,
    pregActual:    0,
    respuestas:    {},
    timerInterval: null,
    tiempoRestante: TIEMPO_EXAMEN_SEG,
  };

  // Total de preguntas
  const TOTAL_PREGUNTAS = Object.keys(PREGUNTAS).length; // 22

  // ── Inicialización ────────────────────────────────────────
  function init() {
    const ok = Antifraude.init(onAnular, onWarning, onBloqueado);

    if (!ok) return; // anulado, completado o bloqueado — antifraude ya actuó

    mostrar(UI.login);

    UI.formLogin.addEventListener('submit', onSubmitLogin);
    UI.btnAnterior.addEventListener('click', () => navegarPregunta(-1));
    UI.btnSiguiente.addEventListener('click', () => navegarPregunta(1));
    UI.btnFinalizarFase.addEventListener('click', finalizarFase);
    UI.btnEnviar.addEventListener('click', confirmarEnvio);
    UI.btnWarningOk.addEventListener('click', cerrarWarning);
    UI.overlayWarning.addEventListener('click', (e) => {
      if (e.target === UI.overlayWarning) cerrarWarning();
    });
  }

  // ── Pantallas ─────────────────────────────────────────────
  function mostrar(pantalla) {
    [UI.bloqueado, UI.login, UI.examen, UI.anulado, UI.resultados].forEach(p => {
      p.classList.add('oculto');
    });
    pantalla.classList.remove('oculto');
  }

  // ── Login ─────────────────────────────────────────────────
  function onSubmitLogin(e) {
    e.preventDefault();

    const nombre = UI.nombre.value.trim();
    const codigo = UI.codigo.value.trim().toUpperCase();
    const grupo  = UI.grupo.value;

    if (!nombre || !codigo || !grupo) return;

    if (Antifraude.yaPresento(codigo)) {
      UI.bloqueoMsg.textContent = 'Este código estudiantil ya presentó el examen. No es posible volver a intentarlo.';
      UI.bloqueoDet.textContent = `Código registrado: ${codigo}`;
      mostrar(UI.bloqueado);
      return;
    }

    sessionStorage.setItem('pi1_nombre', nombre);
    sessionStorage.setItem('pi1_codigo', codigo);

    Estado.nombre     = nombre;
    Estado.codigo     = codigo;
    Estado.grupo      = grupo;
    Estado.horaInicio = new Date();

    Antifraude.activar(codigo);
    iniciarExamen();
  }

  // ── Iniciar examen ────────────────────────────────────────
  function iniciarExamen() {
    mostrar(UI.examen);
    Estado.tiempoRestante = TIEMPO_EXAMEN_SEG;
    iniciarTimer();   // ← Un único timer para todo el examen (150 min)
    cargarFase(1);
  }

  // ── Cargar fase ───────────────────────────────────────────
  function cargarFase(faseId) {
    Estado.faseActual = faseId;
    Estado.pregActual = 0;

    const fase = FASES.find(f => f.id === faseId);

    UI.faseLabel.textContent  = `Fase ${faseId} de ${FASES.length}`;
    UI.faseTitulo.textContent = fase.titulo;

    UI.fasesBtns.forEach(btn => {
      const n = parseInt(btn.dataset.fase, 10);
      btn.classList.remove('activa', 'completada');
      if (n === faseId) btn.classList.add('activa');
      if (n < faseId)  btn.classList.add('completada');
    });

    renderizarIndicadores(fase);

    UI.areaGrafico.classList.add('oculto');
    if (faseId === 3) UI.areaGrafico.classList.remove('oculto');

    cargarPregunta(0);
    actualizarNavFase();
  }

  // ── Cargar pregunta ───────────────────────────────────────
  function cargarPregunta(indice) {
    const fase    = FASES.find(f => f.id === Estado.faseActual);
    const pregsIds = fase.preguntas;

    if (indice < 0 || indice >= pregsIds.length) return;

    Estado.pregActual = indice;

    const pregId   = pregsIds[indice];
    const pregunta = PREGUNTAS[pregId];
    const numGlobal = calcularNumeroGlobal(Estado.faseActual, indice);

    UI.pregNumero.textContent = `Pregunta ${numGlobal} de ${TOTAL_PREGUNTAS}  ·  Fase ${Estado.faseActual} – Pregunta ${indice + 1} de ${pregsIds.length}`;
    UI.pregEnunciado.textContent = pregunta.enunciado;

    if (Estado.faseActual === 3) mostrarGrafico(pregunta);

    UI.opcionesContenedor.innerHTML = '';
    pregunta.opciones.forEach(op => {
      const div = document.createElement('div');
      div.className = 'opcion-item';
      if (Estado.respuestas[pregId] === op.id) div.classList.add('seleccionada');

      div.innerHTML = `
        <div class="opcion-letra">${op.id.toUpperCase()}</div>
        <div class="opcion-texto">${op.texto}</div>
      `;
      div.addEventListener('click', () => seleccionarOpcion(pregId, op.id, div));
      UI.opcionesContenedor.appendChild(div);
    });

    actualizarProgreso(numGlobal);
    UI.btnAnterior.disabled  = (indice === 0);
    UI.btnSiguiente.disabled = (indice === pregsIds.length - 1);
    actualizarIndicadores(indice);
    actualizarNavFase();
  }

  // ── Seleccionar opción ────────────────────────────────────
  function seleccionarOpcion(pregId, opcionId, divClicado) {
    Estado.respuestas[pregId] = opcionId;
    UI.opcionesContenedor.querySelectorAll('.opcion-item').forEach(d => d.classList.remove('seleccionada'));
    divClicado.classList.add('seleccionada');
    actualizarIndicadores(Estado.pregActual);
    actualizarNavFase();
  }

  // ── Gráficos ──────────────────────────────────────────────
  function mostrarGrafico(pregunta) {
    document.querySelectorAll('.grafico-svg').forEach(g => g.classList.add('oculto'));
    if (!pregunta.grafico) return;
    const mapa = {
      perforacion: 'grafico-perforacion',
      separador:   'grafico-separador',
      exploracion: 'grafico-exploracion'
    };
    const id = mapa[pregunta.grafico];
    if (id) $(id).classList.remove('oculto');
  }

  // ── Navegación preguntas ───────────────────────────────────
  function navegarPregunta(delta) {
    cargarPregunta(Estado.pregActual + delta);
  }

  // ── Indicadores ───────────────────────────────────────────
  function renderizarIndicadores(fase) {
    UI.indicadores.innerHTML = '';
    fase.preguntas.forEach((id, idx) => {
      const span = document.createElement('span');
      span.className = 'indicador';
      span.textContent = idx + 1;
      span.dataset.idx = idx;
      span.addEventListener('click', () => cargarPregunta(idx));
      UI.indicadores.appendChild(span);
    });
  }

  function actualizarIndicadores(indiceActual) {
    const fase = FASES.find(f => f.id === Estado.faseActual);
    UI.indicadores.querySelectorAll('.indicador').forEach((span, idx) => {
      span.classList.remove('actual', 'respondida');
      if (idx === indiceActual) span.classList.add('actual');
      const pregId = fase.preguntas[idx];
      if (Estado.respuestas[pregId] !== undefined) span.classList.add('respondida');
    });
  }

  // ── Progreso global ───────────────────────────────────────
  function calcularNumeroGlobal(faseId, indiceEnFase) {
    let suma = 0;
    for (let f of FASES) {
      if (f.id < faseId) suma += f.preguntas.length;
      else break;
    }
    return suma + indiceEnFase + 1;
  }

  function actualizarProgreso(numGlobal) {
    const pct = ((numGlobal - 1) / TOTAL_PREGUNTAS) * 100;
    UI.barraProgreso.style.width = pct + '%';
    UI.progresoTexto.textContent = `Pregunta ${numGlobal} de ${TOTAL_PREGUNTAS}`;
  }

  // ── Botones de fase ───────────────────────────────────────
  function actualizarNavFase() {
    const fase = FASES.find(f => f.id === Estado.faseActual);
    const pregsIds = fase.preguntas;
    const enUltimaPregunta = Estado.pregActual === pregsIds.length - 1;
    const esUltimaFase     = Estado.faseActual === FASES.length;

    UI.btnFinalizarFase.classList.add('oculto');
    UI.btnEnviar.classList.add('oculto');

    if (enUltimaPregunta && !esUltimaFase) UI.btnFinalizarFase.classList.remove('oculto');
    if (enUltimaPregunta && esUltimaFase)  UI.btnEnviar.classList.remove('oculto');
  }

  // ── Finalizar fase ────────────────────────────────────────
  function finalizarFase() {
    const fase = FASES.find(f => f.id === Estado.faseActual);
    const respondidas = fase.preguntas.filter(id => Estado.respuestas[id] !== undefined).length;
    const faltantes   = fase.preguntas.length - respondidas;

    if (faltantes > 0) {
      if (!confirm(`Tienes ${faltantes} pregunta(s) sin responder en esta fase. ¿Deseas continuar de todas formas?`)) return;
    }

    // El timer NO se reinicia — continúa el conteo general de 150 min
    const siguienteFase = Estado.faseActual + 1;
    if (siguienteFase <= FASES.length) cargarFase(siguienteFase);
  }

  // ── Confirmar envío ───────────────────────────────────────
  function confirmarEnvio() {
    const faltantes = TOTAL_PREGUNTAS - Object.keys(Estado.respuestas).length;
    let msg = '¿Estás seguro de que deseas enviar el examen?';
    if (faltantes > 0) {
      msg = `Tienes ${faltantes} pregunta(s) sin responder. Contarán como incorrectas.\n\n¿Deseas enviar de todas formas?`;
    }
    if (confirm(msg)) enviarExamen();
  }

  // ── Enviar examen ─────────────────────────────────────────
  function enviarExamen() {
    clearInterval(Estado.timerInterval);

    // Marcar como completado ANTES de desactivar para proteger contra reload post-envío
    Antifraude.marcarCompletado();
    Antifraude.desactivar();

    const { notaTotal, notasPorFase } = calcularNotaFinal(Estado.respuestas);

    const tiempoMs  = new Date() - Estado.horaInicio;
    const tiempoMin = Math.floor(tiempoMs / 60000);
    const tiempoSeg = Math.floor((tiempoMs % 60000) / 1000);

    const datos = {
      nombre:       Estado.nombre,
      codigo:       Estado.codigo,
      grupo:        Estado.grupo,
      notaTotal,
      notasPorFase,
      estado:       'COMPLETADO',
      horaInicio:   Estado.horaInicio.toISOString(),
      horaFin:      new Date().toISOString(),
      tiempoTotal:  `${tiempoMin}m ${tiempoSeg}s`,
      respuestas:   Estado.respuestas
    };

    Antifraude.marcarPresentado(Estado.codigo, Estado.nombre);
    GoogleSheets.enviarResultados(datos);
    mostrarResultados(datos);
  }

  // ── Mostrar resultados ────────────────────────────────────
  function mostrarResultados(datos) {
    mostrar(UI.resultados);

    UI.estudianteInfo.innerHTML = `
      <strong>Estudiante:</strong> ${datos.nombre}<br>
      <strong>Código:</strong> ${datos.codigo} &nbsp;|&nbsp; <strong>Grupo:</strong> ${datos.grupo}<br>
      <strong>Inicio:</strong> ${new Date(datos.horaInicio).toLocaleString('es-CO')} &nbsp;|&nbsp;
      <strong>Duración:</strong> ${datos.tiempoTotal}
    `;

    const nota     = datos.notaTotal;
    const aprobado = nota >= 3.0;

    UI.notaValor.textContent = nota.toFixed(1);
    UI.notaEstado.textContent = aprobado ? '✓ APROBADO' : '✗ REPROBADO';
    UI.notaEstado.className   = `nota-estado ${aprobado ? 'aprobado' : 'reprobado'}`;
    UI.notaPrincipal.querySelector('.nota-circulo').className = `nota-circulo ${aprobado ? 'aprobado' : 'reprobado'}`;

    UI.desgloseGrid.innerHTML = '';
    FASES.forEach(f => {
      const notaFase = datos.notasPorFase[f.id] || 0;
      const maxFase  = f.preguntas.length * f.puntosPorPregunta;
      const fila = document.createElement('div');
      fila.className = 'desglose-fila';
      fila.innerHTML = `
        <div class="desglose-nombre">${f.titulo.split('–')[0].trim()}<br>
          <small style="color:#7f8c8d;font-weight:400">${f.titulo.split('–')[1]?.trim() || ''}</small>
        </div>
        <div class="desglose-valor">${notaFase.toFixed(2)} / ${maxFase.toFixed(2)}</div>
      `;
      UI.desgloseGrid.appendChild(fila);
    });

    UI.resultTimestamp.textContent = `Fecha y hora de entrega: ${new Date().toLocaleString('es-CO')}`;
  }

  // ── Temporizador único (150 minutos) ─────────────────────
  function iniciarTimer() {
    clearInterval(Estado.timerInterval);
    actualizarDisplayTimer();

    Estado.timerInterval = setInterval(() => {
      Estado.tiempoRestante--;
      actualizarDisplayTimer();

      if (Estado.tiempoRestante <= UMBRAL_URGENTE_SEG) {
        UI.temporizador.classList.add('urgente');
      }

      if (Estado.tiempoRestante <= 0) {
        clearInterval(Estado.timerInterval);
        alert('⏱ Tiempo agotado (150 minutos). El examen será enviado automáticamente.');
        enviarExamen();
      }
    }, 1000);
  }

  function actualizarDisplayTimer() {
    const h = Math.floor(Estado.tiempoRestante / 3600);
    const m = Math.floor((Estado.tiempoRestante % 3600) / 60);
    const s = Estado.tiempoRestante % 60;

    // Mostrar H:MM:SS cuando quedan más de 59 min, MM:SS cuando menos
    if (h > 0) {
      UI.temporizador.textContent = `${h}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    } else {
      UI.temporizador.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    }

    if (Estado.tiempoRestante > UMBRAL_URGENTE_SEG) {
      UI.temporizador.classList.remove('urgente');
    }
  }

  // ── Callbacks antifraude ──────────────────────────────────
  function onAnular(motivo, datos) {
    clearInterval(Estado.timerInterval);

    GoogleSheets.enviarResultados({
      nombre:       datos.nombre || Estado.nombre,
      codigo:       datos.estudiantil || Estado.codigo,
      grupo:        Estado.grupo || '',
      notaTotal:    0.0,
      notasPorFase: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
      estado:       `ANULADO – ${motivo}`,
      horaInicio:   Estado.horaInicio ? Estado.horaInicio.toISOString() : new Date().toISOString(),
      horaFin:      new Date().toISOString(),
      tiempoTotal:  'N/A',
      respuestas:   {}
    });

    UI.anuladoMotivo.textContent = motivo;
    UI.anuladoDatos.innerHTML = `
      <strong>Estudiante:</strong> ${datos.nombre || Estado.nombre || 'No registrado'}<br>
      <strong>Código:</strong> ${datos.estudiantil || Estado.codigo || 'N/A'}<br>
      <strong>Momento:</strong> ${new Date().toLocaleString('es-CO')}
    `;
    mostrar(UI.anulado);
  }

  function onWarning(titulo, mensaje, strikes) {
    UI.warningTitulo.textContent  = titulo;
    UI.warningMensaje.textContent = mensaje;
    UI.strikesCount.textContent   = strikes;
    UI.overlayWarning.classList.remove('oculto');
  }

  // Callback: examen ya completado en esta sesión (reload post-envío)
  function onBloqueado(mensaje) {
    UI.bloqueoMsg.textContent  = mensaje || 'Ya completaste este examen. No puedes volver a presentarlo.';
    UI.bloqueoDet.textContent  = `Sesión: ${sessionStorage.getItem('pi1_nombre') || ''} | ${new Date().toLocaleString('es-CO')}`;
    mostrar(UI.bloqueado);
  }

  function cerrarWarning() {
    UI.overlayWarning.classList.add('oculto');
  }

  // ── Arranque ──────────────────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
