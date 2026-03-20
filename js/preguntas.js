// ============================================================
// BANCO DE PREGUNTAS – VERSIÓN A (Grupo A)
// 25 preguntas × 0.20 pts = 5.0 puntos
// Patrón de intercalación por fase: A,A,B,B,A
// ============================================================

const FASES = [
  { id:1, titulo:"Fase I: Cadena de Valor del Gas Natural",
    descripcion:"Exploración, producción, transporte, procesamiento y distribución del gas natural.",
    puntosPorPregunta:0.20, preguntas:[1,2,3,4,5] },
  { id:2, titulo:"Fase II: Cadena de Valor del Petróleo",
    descripcion:"Upstream, midstream, downstream, refinación y derivados del crudo.",
    puntosPorPregunta:0.20, preguntas:[6,7,8,9,10] },
  { id:3, titulo:"Fase III: Procesos Técnicos con Apoyo Gráfico",
    descripcion:"Análisis de diagramas de perforación, separación trifásica y exploración sísmica.",
    puntosPorPregunta:0.20, preguntas:[11,12,13,14,15] },
  { id:4, titulo:"Fase IV: Toma de Decisiones – Energías Renovables",
    descripcion:"Escenarios reales para seleccionar, evaluar e implementar proyectos de energía renovable.",
    puntosPorPregunta:0.20, preguntas:[16,17,18,19,20] },
  { id:5, titulo:"Fase V: Toma de Decisiones – Explotación Petrolera",
    descripcion:"Escenarios técnicos para decidir viabilidad, método de recuperación y cumplimiento ambiental.",
    puntosPorPregunta:0.20, preguntas:[21,22,23,24,25] }
];

const PREGUNTAS = {

  // ═══ FASE 1 — GAS NATURAL ═══
  // Patrón: A, A, B, B, A

  // [A] Pregunta 1
  1: { id:1, fase:1,
    enunciado: "¿Cuál es el orden correcto de las etapas en la cadena de valor del gas natural?",
    tipo:"opcion_multiple",
    opciones: [
      { id:"a", texto:"Exploración → Producción → Tratamiento → Transporte → Distribución → Comercialización" },
      { id:"b", texto:"Producción → Exploración → Transporte → Tratamiento → Distribución → Comercialización" },
      { id:"c", texto:"Exploración → Transporte → Producción → Distribución → Tratamiento → Comercialización" },
      { id:"d", texto:"Tratamiento → Exploración → Producción → Transporte → Comercialización → Distribución" }
    ],
    respuestaCorrecta:"a",
    explicacion:"La cadena inicia con exploración, producción, tratamiento (deshidratación, endulzamiento), transporte por gasoductos, distribución local y comercialización."
  },

  // [A] Pregunta 2
  2: { id:2, fase:1,
    enunciado: "El gas crudo contiene 3% de H₂S y 8% de CO₂, haciéndolo corrosivo y tóxico. ¿Cuál proceso elimina estos componentes ácidos?",
    tipo:"opcion_multiple",
    opciones: [
      { id:"a", texto:"Deshidratación con glicol (TEG)" },
      { id:"b", texto:"Endulzamiento con aminas (MEA/DEA/MDEA)" },
      { id:"c", texto:"Proceso criogénico (turboexpansión)" },
      { id:"d", texto:"Adsorción con tamices moleculares" }
    ],
    respuestaCorrecta:"b",
    explicacion:"El endulzamiento elimina gases ácidos (H₂S y CO₂) con aminas. El resultado es 'gas dulce'."
  },

  // [B] Pregunta 3
  3: { id:3, fase:1,
    enunciado: "El gas natural crudo contiene una mezcla de hidrocarburos y contaminantes. ¿Cuál es la composición principal del gas natural comercial después de ser procesado?",
    tipo:"opcion_multiple",
    opciones: [
      { id:"a", texto:"Principalmente propano y butano con trazas de metano" },
      { id:"b", texto:"Una mezcla equitativa de metano, etano, propano y butano" },
      { id:"c", texto:"Principalmente metano (CH₄), con pequeñas cantidades de etano y propano" },
      { id:"d", texto:"Principalmente hidrógeno y nitrógeno con algo de metano" }
    ],
    respuestaCorrecta:"c",
    explicacion:"El gas natural comercial (gas seco) está compuesto principalmente por metano (85-95%)."
  },

  // [B] Pregunta 4
  4: { id:4, fase:1,
    enunciado: "Una planta recibe gas crudo saturado con vapor de agua. Si se transporta sin tratar por el gasoducto, ¿cuál es el principal riesgo operativo?",
    tipo:"opcion_multiple",
    opciones: [
      { id:"a", texto:"El gas se licúa completamente dentro de la tubería" },
      { id:"b", texto:"Se forman hidratos (cristales sólidos) que pueden bloquear la tubería y las válvulas" },
      { id:"c", texto:"El vapor de agua reacciona con el metano generando una explosión" },
      { id:"d", texto:"La presión del gasoducto se duplica por la expansión del vapor" }
    ],
    respuestaCorrecta:"b",
    explicacion:"Los hidratos de gas son cristales sólidos que bloquean tuberías y equipos. Se previene con deshidratación (TEG o tamices)."
  },

  // [A] Pregunta 5
  5: { id:5, fase:1,
    enunciado: "Una planta de fraccionamiento de líquidos del gas natural (LGN) recibe una mezcla de hidrocarburos líquidos. ¿Cuál es su función principal?",
    tipo:"opcion_multiple",
    opciones: [
      { id:"a", texto:"Comprimir el gas seco para gasoductos de alta presión" },
      { id:"b", texto:"Separar la mezcla de LGN en fracciones: etano, propano, butano y gasolina natural" },
      { id:"c", texto:"Convertir el gas natural en metanol líquido" },
      { id:"d", texto:"Eliminar el nitrógeno y el helio del gas crudo" }
    ],
    respuestaCorrecta:"b",
    explicacion:"La planta de fraccionamiento separa LGN en componentes comercializables mediante destilación fraccionada."
  },

  // ═══ FASE 2 — PETRÓLEO ═══
  // Patrón: A, A, B, B, A

  // [A] Pregunta 6
  6: { id:6, fase:2,
    enunciado: "Una multinacional realiza exploración y producción de crudo, opera un oleoducto y una refinería. ¿Cómo se clasifican estas actividades?",
    tipo:"opcion_multiple",
    opciones: [
      { id:"a", texto:"Exploración y producción = Upstream; Oleoducto = Midstream; Refinería = Downstream" },
      { id:"b", texto:"Exploración = Upstream; Perforación = Midstream; Refinería = Downstream" },
      { id:"c", texto:"Todo extracción = Upstream; Todo lo demás = Downstream" },
      { id:"d", texto:"Exploración = Midstream; Producción = Upstream; Comercialización = Downstream" }
    ],
    respuestaCorrecta:"a",
    explicacion:"Upstream = E&P. Midstream = transporte y almacenamiento. Downstream = refinación y venta."
  },

  // [A] Pregunta 7
  7: { id:7, fase:2,
    enunciado: "Tres muestras de crudo miden 12°, 28° y 42° API. ¿Cómo se clasifican y cuál tiene mayor valor?",
    tipo:"opcion_multiple",
    opciones: [
      { id:"a", texto:"12° = Liviano (mayor valor); 28° = Mediano; 42° = Pesado (menor valor)" },
      { id:"b", texto:"12° = Pesado (menor valor); 28° = Mediano; 42° = Liviano (mayor valor)" },
      { id:"c", texto:"Los tres son medianos; API no determina valor" },
      { id:"d", texto:"12° = Extra pesado; 28° = Liviano; 42° = Condensado" }
    ],
    respuestaCorrecta:"b",
    explicacion:"Mayor API = más ligero = mayor valor comercial. API < 20° pesado; 20-31° mediano; > 31° liviano."
  },

  // [B] Pregunta 8
  8: { id:8, fase:2,
    enunciado: "En una refinería, el crudo entra a la torre de destilación atmosférica y se separa en fracciones. Ordene desde la parte MÁS ALTA de la torre hasta el FONDO:",
    tipo:"opcion_multiple",
    opciones: [
      { id:"a", texto:"Fondo: Gases ligeros → Medio: Diésel → Arriba: Residuo pesado" },
      { id:"b", texto:"Arriba: Residuo pesado → Medio: Gasolina → Fondo: Gases ligeros" },
      { id:"c", texto:"Arriba: Gases ligeros (GLP) → Gasolina → Queroseno → Diésel → Fondo: Residuo pesado" },
      { id:"d", texto:"Arriba: Diésel → Medio: Queroseno → Fondo: Gasolina y gases" }
    ],
    respuestaCorrecta:"c",
    explicacion:"Los más livianos (gases, GLP) salen por arriba. Luego: gasolina, queroseno, diésel. Fondo: residuo pesado (asfalto)."
  },

  // [B] Pregunta 9
  9: { id:9, fase:2,
    enunciado: "La refinería necesita producir más gasolina de la que obtiene por destilación directa. ¿Cuál proceso permite TRANSFORMAR fracciones pesadas en más livianas?",
    tipo:"opcion_multiple",
    opciones: [
      { id:"a", texto:"Destilación al vacío" },
      { id:"b", texto:"Mezcla con solventes (blending)" },
      { id:"c", texto:"Cracking (rompimiento de moléculas grandes en más pequeñas)" },
      { id:"d", texto:"Filtración molecular" }
    ],
    respuestaCorrecta:"c",
    explicacion:"El cracking rompe moléculas pesadas en livianas y valiosas. La destilación solo separa, no transforma."
  },

  // [A] Pregunta 10
  10: { id:10, fase:2,
    enunciado: "La torre de destilación atmosférica separa el petróleo en derivados. ¿Qué principio físico-químico permite la separación?",
    tipo:"opcion_multiple",
    opciones: [
      { id:"a", texto:"Diferencias en punto de ebullición de los hidrocarburos" },
      { id:"b", texto:"Diferencias en densidad" },
      { id:"c", texto:"Diferencias en solubilidad" },
      { id:"d", texto:"Diferencias en tamaño molecular" }
    ],
    respuestaCorrecta:"a",
    explicacion:"La destilación fraccionada aprovecha diferencias de puntos de ebullición. Más livianos suben, más pesados quedan abajo."
  },

  // ═══ FASE 3 — PROCESOS TÉCNICOS ═══
  // Patrón: A, A, B, B, A

  // [A] Pregunta 11
  11: { id:11, fase:3,
    enunciado: "Observe el diagrama de la torre de perforación. El sistema que circula fluido desde la superficie al fondo del pozo, manteniendo presión y limpiando ripios, se llama:",
    tipo:"opcion_multiple", grafico:"perforacion",
    opciones: [
      { id:"a", texto:"Sistema de potencia (motores y generadores)" },
      { id:"b", texto:"Sistema de circulación de lodo (bombas, líneas de descarga, BOP y tanques)" },
      { id:"c", texto:"Sistema de izaje (crown block, travelling block, gancho y malacate)" },
      { id:"d", texto:"Sistema de rotación (mesa rotaria, top drive y sarta)" }
    ],
    respuestaCorrecta:"b",
    explicacion:"El sistema de circulación de lodo impulsa el fluido por la sarta hasta la broca, recoge ripios y los transporta a superficie."
  },

  // [A] Pregunta 12
  12: { id:12, fase:3,
    enunciado: "En el separador trifásico horizontal, la mezcla de petróleo, gas y agua se separa. ¿Cuál es el principio y orden de salida?",
    tipo:"opcion_multiple", grafico:"separador",
    opciones: [
      { id:"a", texto:"Temperatura diferencial – Gas caliente arriba, agua tibia medio, crudo frío abajo" },
      { id:"b", texto:"Diferencia de densidades y gravedad – Gas arriba, crudo medio, agua por el fondo" },
      { id:"c", texto:"Presión diferencial – El de mayor presión se separa primero" },
      { id:"d", texto:"Solubilidad – El gas se disuelve en agua, crudo flota" }
    ],
    respuestaCorrecta:"b",
    explicacion:"El separador aprovecha diferencia de densidades: gas sube (más liviano), crudo queda en el medio, agua baja (más densa)."
  },

  // [B] Pregunta 13
  13: { id:13, fase:3,
    enunciado: "Observe el diagrama de la torre de perforación. Durante la perforación se bombea un fluido especial ('lodo'). ¿Cuáles son las funciones principales de este lodo?",
    tipo:"opcion_multiple", grafico:"perforacion",
    opciones: [
      { id:"a", texto:"Solo sirve para enfriar la broca" },
      { id:"b", texto:"Enfriar y lubricar la broca, transportar los ripios a superficie, mantener presión del pozo y estabilizar paredes" },
      { id:"c", texto:"Disolver la roca del subsuelo químicamente" },
      { id:"d", texto:"Generar energía eléctrica para los motores de la torre" }
    ],
    respuestaCorrecta:"b",
    explicacion:"El lodo enfría/lubrica la broca, transporta ripios, controla presión hidrostática y estabiliza las paredes del pozo."
  },

  // [B] Pregunta 14
  14: { id:14, fase:3,
    enunciado: "En el diagrama del separador trifásico, ¿por qué el GAS sale siempre por la parte SUPERIOR del separador?",
    tipo:"opcion_multiple", grafico:"separador",
    opciones: [
      { id:"a", texto:"Porque un campo eléctrico empuja el gas hacia arriba" },
      { id:"b", texto:"Porque el gas tiene menor densidad que el petróleo y el agua, y por gravedad asciende naturalmente" },
      { id:"c", texto:"Porque un ventilador interno aspira el gas hacia la salida superior" },
      { id:"d", texto:"Porque el gas se calienta más que los líquidos y sube por convección" }
    ],
    respuestaCorrecta:"b",
    explicacion:"El gas es más liviano (menor densidad). Por gravedad, asciende naturalmente sin necesidad de equipos adicionales."
  },

  // [A] Pregunta 15
  15: { id:15, fase:3,
    enunciado: "Observe el diagrama de exploración sísmica. ¿Cuál es el propósito de los geófonos dispuestos en superficie?",
    tipo:"opcion_multiple", grafico:"exploracion",
    opciones: [
      { id:"a", texto:"Medir la temperatura del subsuelo" },
      { id:"b", texto:"Registrar el tiempo de llegada de las ondas sísmicas reflejadas para construir un modelo del subsuelo" },
      { id:"c", texto:"Detectar la presencia de hidrocarburos directamente" },
      { id:"d", texto:"Medir la permeabilidad y porosidad del suelo" }
    ],
    respuestaCorrecta:"b",
    explicacion:"Los geófonos registran ondas reflejadas. El tiempo de llegada permite construir imagen sísmica 2D/3D del subsuelo."
  },

  // ═══ FASE 4 — ENERGÍAS RENOVABLES ═══
  // Patrón: A, A, B, B, A

  // [A] Pregunta 16
  16: { id:16, fase:4,
    enunciado: `ESCENARIO: Uribia (La Guajira):\n• Irradiación solar: 6.2 kWh/m²/día\n• Viento: 9.5 m/s a 80m\n• Precipitación: 300 mm/año (zona árida)\n• Demanda: 15 MW\n• Conexión a red: muy limitada\n\n¿Cuál combinación de energías renovables es la mejor?`,
    tipo:"opcion_multiple",
    opciones: [
      { id:"a", texto:"Solo energía hidroeléctrica" },
      { id:"b", texto:"Combinación solar fotovoltaica + eólica con almacenamiento en baterías" },
      { id:"c", texto:"Biomasa de residuos agrícolas" },
      { id:"d", texto:"Geotérmica" }
    ],
    respuestaCorrecta:"b",
    explicacion:"La Guajira tiene el mayor potencial eólico y solar de Colombia. Solar+eólica+baterías es óptimo para zona no interconectada."
  },

  // [A] Pregunta 17
  17: { id:17, fase:4,
    enunciado: `ESCENARIO: Se evalúan dos proyectos para Boyacá:\n\nSolar FV 10 MW: Inversión USD 8M, LCOE $45/MWh, Factor cap. 18%\nEólica 10 MW: Inversión USD 14M, LCOE $62/MWh, Factor cap. 28%\n\n¿Cuál seleccionar?`,
    tipo:"opcion_multiple",
    opciones: [
      { id:"a", texto:"Eólica – Mayor factor de capacidad (28% vs 18%)" },
      { id:"b", texto:"Solar – Menor inversión (USD 8M) y menor LCOE (USD 45 vs 62), más rentable" },
      { id:"c", texto:"Ninguna – Boyacá tiene alto potencial hidráulico" },
      { id:"d", texto:"Solar solo si no hay conexión a red" }
    ],
    respuestaCorrecta:"b",
    explicacion:"Solar FV: menor LCOE y menor inversión = más rentable, menor riesgo financiero."
  },

  // [B] Pregunta 18
  18: { id:18, fase:4,
    enunciado: `ESCENARIO: Comunidad Wayúu en Manaure (La Guajira), sin red eléctrica:\n• 2.500 personas en rancherías dispersas\n• Irradiación: 6.0 kWh/m²/día\n• Sin ríos ni fuentes hídricas\n• Presupuesto: USD 1.5 millones\n\n¿Cuál solución energética es más adecuada?`,
    tipo:"opcion_multiple",
    opciones: [
      { id:"a", texto:"Extender la red eléctrica nacional desde Riohacha (90 km)" },
      { id:"b", texto:"Planta termoeléctrica a diésel" },
      { id:"c", texto:"Sistemas solares FV individuales con baterías + bombeo solar comunitario" },
      { id:"d", texto:"Pequeña central hidroeléctrica aprovechando lluvias" }
    ],
    respuestaCorrecta:"c",
    explicacion:"Para comunidades dispersas sin red, los sistemas FV individuales con baterías son la solución más costo-efectiva."
  },

  // [B] Pregunta 19
  19: { id:19, fase:4,
    enunciado: `ESCENARIO: Huila quiere reemplazar una termoeléctrica a carbón (50 MW):\n\nOpción A – Solar flotante en embalse de Betania (50 MW, solo de día)\nOpción B – Repotenciar la hidroeléctrica de Betania (+50 MW, genera 24h)\n\n¿Decisión más estratégica?`,
    tipo:"opcion_multiple",
    opciones: [
      { id:"a", texto:"Solo solar flotante, porque es 100% limpia y moderna" },
      { id:"b", texto:"Combinar ambas: repotenciar Betania para base + solar flotante para pico diurno" },
      { id:"c", texto:"Solo repotenciar, porque la solar es experimental" },
      { id:"d", texto:"Mantener la termoeléctrica con filtros de aire" }
    ],
    respuestaCorrecta:"b",
    explicacion:"Combinación óptima: hidroeléctrica da base 24/7 y solar flotante aprovecha embalse para pico diurno."
  },

  // [A] Pregunta 20
  20: { id:20, fase:4,
    enunciado: `ESCENARIO ESG: Proyecto de 50 MW solar en el Cesar. Comunidad indígena Yukpa habita en la zona. La ANLA exige consulta previa. ¿Decisión correcta bajo criterios ESG?`,
    tipo:"opcion_multiple",
    opciones: [
      { id:"a", texto:"Avanzar sin consulta previa, la solar no genera impacto ambiental" },
      { id:"b", texto:"Reubicar en zona sin comunidades indígenas" },
      { id:"c", texto:"Realizar consulta previa libre e informada, incorporar observaciones y beneficios compartidos" },
      { id:"d", texto:"Pagar compensación económica a los líderes comunitarios" }
    ],
    respuestaCorrecta:"c",
    explicacion:"La consulta previa es un derecho fundamental (Convenio 169 OIT). Evadir genera riesgo legal y reputacional."
  },

  // ═══ FASE 5 — EXPLOTACIÓN PETROLERA ═══
  // Patrón: A, A, B, B, A

  // [A] Pregunta 21
  21: { id:21, fase:5,
    enunciado: `ESCENARIO: "Campo Esperanza" en los Llanos Orientales:\n• Reservas probadas: 45 MMBBL\n• Gravedad API: 27°\n• Precio WTI: USD 65/bbl\n• Costo producción: USD 22/bbl\n• Inversión requerida: USD 380 millones\n\n¿Cuál es la conclusión sobre viabilidad?`,
    tipo:"opcion_multiple",
    opciones: [
      { id:"a", texto:"No viable – 45 MMBBL son insuficientes" },
      { id:"b", texto:"Viable – Margen de USD 43/bbl × 45M = USD 1.935M, supera la inversión ampliamente" },
      { id:"c", texto:"Viable solo si el WTI sube a USD 90" },
      { id:"d", texto:"No viable – Crudo de 27° API es pesado sin mercado" }
    ],
    respuestaCorrecta:"b",
    explicacion:"Ingreso neto = 45M × (65-22) = USD 1.935M vs inversión USD 380M. ROI muy positivo. 27° API es mediano (aceptable)."
  },

  // [A] Pregunta 22
  22: { id:22, fase:5,
    enunciado: `ESCENARIO: "Campo Jaguar" produce crudo extrapesado de 8° API con altísima viscosidad. El crudo casi no fluye a temperatura ambiente. Yacimiento somero (800 m). ¿Tecnología más adecuada?`,
    tipo:"opcion_multiple",
    opciones: [
      { id:"a", texto:"Inyección de agua fría (waterflood convencional)" },
      { id:"b", texto:"Inyección de vapor o SAGD para calentar el crudo y reducir su viscosidad" },
      { id:"c", texto:"Inyección de CO₂ miscible a alta presión" },
      { id:"d", texto:"Bombeo mecánico convencional sin tratamiento" }
    ],
    respuestaCorrecta:"b",
    explicacion:"Métodos térmicos (vapor/SAGD) calientan crudos extrapesados, reducen viscosidad y permiten que fluyan."
  },

  // [B] Pregunta 23
  23: { id:23, fase:5,
    enunciado: `ESCENARIO: Se descubre el "Campo Aurora" en los Llanos:\n• Reservas: 12 MMBBL\n• API: 22°\n• WTI: USD 70/bbl\n• Costo producción: USD 55/bbl\n• Inversión: USD 250 millones\n• Margen: USD 15/bbl\n\n¿Conclusión de viabilidad?`,
    tipo:"opcion_multiple",
    opciones: [
      { id:"a", texto:"Altamente viable – Con 12 MMBBL se recupera la inversión" },
      { id:"b", texto:"Riesgoso – Ingreso neto 12M × USD 15 = USD 180M, NO cubre la inversión de USD 250M" },
      { id:"c", texto:"Viable si se duplica la producción diaria" },
      { id:"d", texto:"No se puede determinar sin conocer el tipo de roca" }
    ],
    respuestaCorrecta:"b",
    explicacion:"Ingreso neto USD 180M < inversión USD 250M. Proyecto destruye valor. VPN negativo."
  },

  // [B] Pregunta 24
  24: { id:24, fase:5,
    enunciado: `ESCENARIO: "Campo Venado" – 15 años de producción:\n• Recobro primario: 22%\n• Presión actual: 850 PSI (original: 2.400 PSI)\n• Crudo: 35° API, baja viscosidad\n\n¿Método de recuperación más adecuado?`,
    tipo:"opcion_multiple",
    opciones: [
      { id:"a", texto:"Inyección de vapor (térmica) – Para crudos pesados" },
      { id:"b", texto:"Inyección de agua (waterflood) – Restaura presión y desplaza crudo residual" },
      { id:"c", texto:"Inyección de polímeros – Para crudos muy viscosos" },
      { id:"d", texto:"SAGD – Para crudos extrapesados en yacimientos someros" }
    ],
    respuestaCorrecta:"b",
    explicacion:"Para crudo liviano (35° API) con presión depleta, el waterflood restaura presión y aumenta recobro de 22% a 35-45%."
  },

  // [A] Pregunta 25
  25: { id:25, fase:5,
    enunciado: `ESCENARIO: Un reservorio tiene 8 m de espesor neto, se extiende 3,5 km lateralmente, a 4.100 m de profundidad, con 12 mD de permeabilidad. ¿Qué tipo de perforación maximiza el contacto?`,
    tipo:"opcion_multiple",
    opciones: [
      { id:"a", texto:"Perforación vertical convencional" },
      { id:"b", texto:"Multipozo vertical (cluster drilling)" },
      { id:"c", texto:"Perforación horizontal – Recorre 2.000-3.500 m dentro de los 8 m de espesor" },
      { id:"d", texto:"Vertical con fracturamiento hidráulico masivo" }
    ],
    respuestaCorrecta:"c",
    explicacion:"La perforación horizontal multiplica el área de contacto 250-400 veces en un reservorio delgado pero extenso."
  }
};

// ── Funciones utilitarias ───────────────────────────────────
function obtenerPreguntasFase(faseId, banco) {
  banco = banco || PREGUNTAS;
  const fase = FASES.find(f => f.id === faseId);
  if (!fase) return [];
  return fase.preguntas.map(id => banco[id]);
}
function calcularPuntaje(preguntaId, respuestaEstudiante, banco) {
  banco = banco || PREGUNTAS;
  const pregunta = banco[preguntaId];
  if (!pregunta) return 0;
  const fase = FASES.find(f => f.id === pregunta.fase);
  if (!fase) return 0;
  return respuestaEstudiante === pregunta.respuestaCorrecta ? fase.puntosPorPregunta : 0;
}
function calcularNotaFinal(respuestas, banco) {
  banco = banco || PREGUNTAS;
  let notaTotal = 0;
  const notasPorFase = {};
  FASES.forEach(fase => {
    let notaFase = 0;
    fase.preguntas.forEach(id => { notaFase += calcularPuntaje(id, respuestas[id], banco); });
    notasPorFase[fase.id] = parseFloat(notaFase.toFixed(4));
    notaTotal += notaFase;
  });
  return { notaTotal: parseFloat(Math.min(notaTotal, 5.0).toFixed(2)), notasPorFase };
}
