// ============================================================
// INTEGRACIÓN GOOGLE SHEETS – PROCESOS INDUSTRIALES 1
// Envía resultados en tiempo real al Google Sheet del docente
//
// CONFIGURACIÓN:
//   1. Despliega el script de google-apps-script/Code.gs
//      como Web App en tu Google Sheets.
//   2. Copia la URL del despliegue y pégala en WEBAPP_URL.
// ============================================================

const GoogleSheets = (() => {

  // ── ⚙ CONFIGURA ESTA URL ────────────────────────────────
  // Reemplaza con la URL de tu Google Apps Script Web App desplegado
  const WEBAPP_URL = 'https://script.google.com/macros/s/AKfycbx4vjkUGEW5hY2u_eKmhFq9BUvcApPxhwnBu6RH7vRm_LtW9cvDokIJMwmS97ot-5jk/exec';
  // ────────────────────────────────────────────────────────

  const MAX_REINTENTOS = 2;
  const TIMEOUT_MS     = 10000; // 10 segundos

  // ── Enviar resultados ─────────────────────────────────────
  async function enviarResultados(datos, intento = 1) {
    // Si la URL no está configurada, solo log y salir
    if (WEBAPP_URL.includes('TU_DEPLOYMENT_ID_AQUI')) {
      console.warn('[GoogleSheets] URL no configurada. Datos NO enviados:', datos);
      return;
    }

    const payload = {
      timestamp:   new Date().toISOString(),
      nombre:      datos.nombre      || '',
      codigo:      datos.codigo      || '',
      grupo:       datos.grupo       || '',
      notaFase1:   _fmt(datos.notasPorFase?.[1]),
      notaFase2:   _fmt(datos.notasPorFase?.[2]),
      notaFase3:   _fmt(datos.notasPorFase?.[3]),
      notaFase4:   _fmt(datos.notasPorFase?.[4]),
      notaFase5:   _fmt(datos.notasPorFase?.[5]),
      notaTotal:   _fmt(datos.notaTotal),
      estado:      datos.estado      || 'COMPLETADO',
      horaInicio:  datos.horaInicio  || '',
      horaFin:     datos.horaFin     || new Date().toISOString(),
      tiempoTotal: datos.tiempoTotal || '',
    };

    try {
      const controller = new AbortController();
      const timeoutId  = setTimeout(() => controller.abort(), TIMEOUT_MS);

      // Google Apps Script requiere no-cors para evitar bloqueo de CORS
      const response = await fetch(WEBAPP_URL, {
        method:  'POST',
        mode:    'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body:    JSON.stringify(payload),
        signal:  controller.signal,
      });

      clearTimeout(timeoutId);
      console.log(`[GoogleSheets] Datos enviados (intento ${intento}).`);

    } catch (err) {
      console.warn(`[GoogleSheets] Error en intento ${intento}:`, err.message);
      if (intento < MAX_REINTENTOS) {
        // Reintento con delay
        await _esperar(2000);
        return enviarResultados(datos, intento + 1);
      } else {
        console.error('[GoogleSheets] No se pudo enviar después de', MAX_REINTENTOS, 'intentos.');
        // Guardar localmente como respaldo
        _guardarLocal(payload);
      }
    }
  }

  // ── Formato de número ─────────────────────────────────────
  function _fmt(val) {
    if (val === undefined || val === null) return '0.00';
    return parseFloat(val).toFixed(2);
  }

  // ── Esperar N ms ──────────────────────────────────────────
  function _esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // ── Guardar en localStorage como respaldo ─────────────────
  function _guardarLocal(payload) {
    try {
      const respaldos = JSON.parse(localStorage.getItem('pi1_respaldos') || '[]');
      respaldos.push(payload);
      localStorage.setItem('pi1_respaldos', JSON.stringify(respaldos));
      console.info('[GoogleSheets] Datos guardados localmente como respaldo.');
    } catch (e) {
      console.error('[GoogleSheets] No se pudo guardar localmente:', e);
    }
  }

  // ── API pública ───────────────────────────────────────────
  return { enviarResultados };

})();
