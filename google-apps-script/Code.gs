// ============================================================
// GOOGLE APPS SCRIPT – RECEPTOR DE NOTAS
// Procesos Industriales 1 | UNIPAZ
//
// INSTRUCCIONES DE INSTALACIÓN:
//   1. Abre tu Google Sheet de calificaciones.
//   2. Ve a Extensiones → Apps Script.
//   3. Borra el contenido existente y pega TODO este código.
//   4. Guarda (Ctrl+S) → ponle nombre "Parcial PI1".
//   5. Haz clic en "Implementar" → "Nueva implementación".
//   6. Tipo: "Aplicación web".
//   7. Ejecutar como: "Yo (tu cuenta)".
//   8. Quién tiene acceso: "Cualquier usuario".
//   9. Clic en "Implementar" y copia la URL generada.
//  10. Pega esa URL en js/googleSheets.js en la variable WEBAPP_URL.
//
// ESTRUCTURA DEL SHEET:
//   El script crea automáticamente los encabezados en la primera fila.
// ============================================================

// Nombre de la hoja dentro del Google Sheet
const NOMBRE_HOJA = 'Resultados Parcial';

// Encabezados de columnas
const ENCABEZADOS = [
  'Timestamp',
  'Nombre Estudiante',
  'Código',
  'Grupo',
  'Nota Fase 1\n(Gas Natural)',
  'Nota Fase 2\n(Petróleo)',
  'Nota Fase 3\n(Procesos)',
  'Nota Fase 4\n(Renovables)',
  'Nota Fase 5\n(Explotación)',
  'NOTA FINAL\n(/ 5.0)',
  'Estado',
  'Hora Inicio',
  'Hora Fin',
  'Tiempo Total',
];

// ── Punto de entrada HTTP POST ─────────────────────────────
function doPost(e) {
  try {
    let datos;

    // Soportar Content-Type: text/plain (fetch no-cors) o application/json
    if (e.postData && e.postData.contents) {
      datos = JSON.parse(e.postData.contents);
    } else if (e.parameter) {
      datos = e.parameter;
    } else {
      throw new Error('Sin datos en la solicitud');
    }

    const hoja = obtenerOCrearHoja_();
    const fila = construirFila_(datos);
    hoja.appendRow(fila);

    // Formato de la fila recién agregada
    aplicarFormato_(hoja);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true, mensaje: 'Datos registrados.' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    Logger.log('Error en doPost: ' + err.message);
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ── GET para verificar que el script funciona ──────────────
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      ok: true,
      mensaje: 'Script de Procesos Industriales 1 activo.',
      hoja: NOMBRE_HOJA
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

// ── Obtener o crear la hoja ────────────────────────────────
function obtenerOCrearHoja_() {
  const ss   = SpreadsheetApp.getActiveSpreadsheet();
  let hoja   = ss.getSheetByName(NOMBRE_HOJA);

  if (!hoja) {
    hoja = ss.insertSheet(NOMBRE_HOJA);
    // Crear encabezados
    hoja.getRange(1, 1, 1, ENCABEZADOS.length).setValues([ENCABEZADOS]);

    // Formato encabezados
    const rngHeader = hoja.getRange(1, 1, 1, ENCABEZADOS.length);
    rngHeader.setBackground('#1a3a5c');
    rngHeader.setFontColor('#ffffff');
    rngHeader.setFontWeight('bold');
    rngHeader.setFontSize(10);
    rngHeader.setWrap(true);
    rngHeader.setHorizontalAlignment('center');
    rngHeader.setVerticalAlignment('middle');
    hoja.setRowHeight(1, 48);

    // Anchos de columna
    hoja.setColumnWidth(1,  155); // Timestamp
    hoja.setColumnWidth(2,  200); // Nombre
    hoja.setColumnWidth(3,  100); // Código
    hoja.setColumnWidth(4,   70); // Grupo
    hoja.setColumnWidth(5,   80); // Nota 1
    hoja.setColumnWidth(6,   80); // Nota 2
    hoja.setColumnWidth(7,   80); // Nota 3
    hoja.setColumnWidth(8,   80); // Nota 4
    hoja.setColumnWidth(9,   80); // Nota 5
    hoja.setColumnWidth(10,  90); // Nota Final
    hoja.setColumnWidth(11, 180); // Estado
    hoja.setColumnWidth(12, 155); // Hora inicio
    hoja.setColumnWidth(13, 155); // Hora fin
    hoja.setColumnWidth(14,  90); // Tiempo

    // Fijar la fila de encabezados
    hoja.setFrozenRows(1);
  }

  return hoja;
}

// ── Construir fila de datos ────────────────────────────────
function construirFila_(d) {
  return [
    d.timestamp   || new Date().toISOString(),
    d.nombre      || '',
    d.codigo      || '',
    d.grupo       || '',
    parseFloat(d.notaFase1 || 0),
    parseFloat(d.notaFase2 || 0),
    parseFloat(d.notaFase3 || 0),
    parseFloat(d.notaFase4 || 0),
    parseFloat(d.notaFase5 || 0),
    parseFloat(d.notaTotal || 0),
    d.estado      || 'COMPLETADO',
    d.horaInicio  || '',
    d.horaFin     || '',
    d.tiempoTotal || '',
  ];
}

// ── Aplicar formato a la última fila ──────────────────────
function aplicarFormato_(hoja) {
  const ultima = hoja.getLastRow();
  if (ultima < 2) return;

  // Alinear centro para notas
  hoja.getRange(ultima, 5, 1, 6).setHorizontalAlignment('center');

  // Color de la nota final según aprobado/reprobado
  const notaFinal = hoja.getRange(ultima, 10).getValue();
  const colorNota = notaFinal >= 3.0 ? '#d5f5e3' : '#fadbd8';
  hoja.getRange(ultima, 10).setBackground(colorNota).setFontWeight('bold');

  // Estado: color según tipo
  const estadoCell = hoja.getRange(ultima, 11);
  const estadoVal  = estadoCell.getValue();
  if (estadoVal.includes('ANULADO')) {
    estadoCell.setBackground('#fadbd8').setFontColor('#c0392b').setFontWeight('bold');
  } else {
    estadoCell.setBackground('#d5f5e3').setFontColor('#1e8449');
  }

  // Alternar color de fila para legibilidad
  const colorFila = (ultima % 2 === 0) ? '#f8f9fa' : '#ffffff';
  hoja.getRange(ultima, 1, 1, ENCABEZADOS.length).setBackground(colorFila);
  // La nota final tiene su propio color, reaplicar
  hoja.getRange(ultima, 10).setBackground(colorNota);
  // El estado también
  if (estadoVal.includes('ANULADO')) {
    estadoCell.setBackground('#fadbd8');
  } else {
    estadoCell.setBackground('#d5f5e3');
  }
}
