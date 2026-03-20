// ============================================================
// BANCO DE PREGUNTAS – VERSIÓN A (Grupo A)
// 25 preguntas × 0.20 pts = 5.0 puntos | 5 fases × 5 preguntas
// Preguntas intercaladas: mezcla de pool A y pool B
// ============================================================

const FASES = [
  { id: 1, titulo: "Fase I: Cadena de Valor del Gas Natural",
    descripcion: "Exploración, producción, transporte, procesamiento y distribución del gas natural.",
    puntosPorPregunta: 0.20, preguntas: [1, 2, 3, 4, 5] },
  { id: 2, titulo: "Fase II: Cadena de Valor del Petróleo",
    descripcion: "Upstream, midstream, downstream, refinación y derivados del crudo.",
    puntosPorPregunta: 0.20, preguntas: [6, 7, 8, 9, 10] },
  { id: 3, titulo: "Fase III: Procesos Técnicos con Apoyo Gráfico",
    descripcion: "Análisis de diagramas de perforación, separación trifásica y exploración sísmica.",
    puntosPorPregunta: 0.20, preguntas: [11, 12, 13, 14, 15] },
  { id: 4, titulo: "Fase IV: Toma de Decisiones – Energías Renovables",
    descripcion: "Escenarios reales para seleccionar, evaluar e implementar proyectos de energía renovable.",
    puntosPorPregunta: 0.20, preguntas: [16, 17, 18, 19, 20] },
  { id: 5, titulo: "Fase V: Toma de Decisiones – Explotación Petrolera",
    descripcion: "Escenarios técnicos para decidir viabilidad, método de recuperación y cumplimiento ambiental.",
    puntosPorPregunta: 0.20, preguntas: [21, 22, 23, 24, 25] }
];

const PREGUNTAS = {

  // ══════════════ FASE 1 — GAS NATURAL ══════════════

  1: { id:1, fase:1,
    enunciado: "¿Cuál es el orden correcto de las etapas en la cadena de valor del gas natural, desde su origen hasta el usuario final?",
    tipo: "opcion_multiple",
    opciones: [
      { id:"a", texto:"Exploración → Producción → Tratamiento → Transporte → Distribución → Comercialización" },
      { id:"b", texto:"Producción → Exploración → Transporte → Tratamiento → Distribución → Comercialización" },
      { id:"c", texto:"Exploración → Transporte → Producción → Distribución → Tratamiento → Comercialización" },
      { id:"d", texto:"Tratamiento → Exploración → Producción → Transporte → Comercialización → Distribución" }
    ],
    respuestaCorrecta: "a",
    explicacion: "La cadena inicia con exploración geológica, producción, tratamiento (deshidratación, endulzamiento), transporte por gasoductos, distribución local y comercialización al usuario final."
  },

  2: { id:2, fase:1,
    enunciado: "Una planta de procesamiento de gas natural recibe gas crudo saturado con vapor de agua. Si este gas se transporta sin tratar por el gasoducto, ¿cuál es el principal riesgo operativo?",
    tipo: "opcion_multiple",
    opciones: [
      { id:"a", texto:"El gas se licúa completamente dentro de la tubería" },
      { id:"b", texto:"Se forman hidratos (cristales sólidos similares al hielo) que pueden bloquear la tubería y las válvulas" },
      { id:"c", texto:"El vapor de agua reacciona con el metano generando una explosión espontánea" },
      { id:"d", texto:"La presión del gasoducto se duplica por la expansión del vapor" }
    ],
    respuestaCorrecta: "b",
    explicacion: "Los hidratos de gas son cristales sólidos que se forman cuando el gas natural húmedo se enfría a alta presión. Pueden bloquear tuberías, válvulas y equipos. Por eso el gas se deshidrata (con TEG o tamices moleculares) antes de transportarse."
  },

  3: { id:3, fase:1,
    enunciado: "En una planta de procesamiento de gas natural, el gas crudo contiene 3% de H₂S y 8% de CO₂, lo que lo hace corrosivo y tóxico. ¿Cuál proceso industrial se aplica para eliminar estos componentes ácidos?",
    tipo: "opcion_multiple",
    opciones: [
      { id:"a", texto:"Deshidratación con glicol (TEG)" },
      { id:"b", texto:"Endulzamiento con aminas (MEA/DEA/MDEA)" },
      { id:"c", texto:"Proceso criogénico (turboexpansión)" },
      { id:"d", texto:"Adsorción con tamices moleculares" }
    ],
    respuestaCorrecta: "b",
    explicacion: "El endulzamiento elimina gases ácidos (H₂S y CO₂) mediante absorción química con aminas. El gas resultante se llama 'gas dulce'."
  },

  4: { id:4, fase:1,
    enunciado: "Una planta de fraccionamiento de líquidos del gas natural (LGN) recibe una mezcla de hidrocarburos líquidos. ¿Cuál es la función principal de esta planta dentro de la cadena de valor?",
    tipo: "opcion_multiple",
    opciones: [
      { id:"a", texto:"Comprimir el gas seco para inyectarlo en gasoductos de alta presión" },
      { id:"b", texto:"Separar la mezcla de LGN en fracciones individuales: etano, propano, butano y gasolina natural" },
      { id:"c", texto:"Convertir el gas natural en metanol líquido para uso como combustible vehicular" },
      { id:"d", texto:"Eliminar el nitrógeno y el helio presentes en el gas crudo de pozo" }
    ],
    respuestaCorrecta: "b",
    explicacion: "La planta de fraccionamiento separa los LGN en componentes comercializables mediante destilación fraccionada a diferentes temperaturas y presiones."
  },

  5: { id:5, fase:1,
    enunciado: "En Colombia, el gas natural tiene múltiples usos en diferentes sectores. ¿Cuál de las siguientes aplicaciones del gas natural es la que representa el MAYOR porcentaje de consumo a nivel nacional?",
    tipo: "opcion_multiple",
    opciones: [
      { id:"a", texto:"Como combustible vehicular (GNV) en el transporte público" },
      { id:"b", texto:"Como materia prima para fabricar fertilizantes y productos químicos" },
      { id:"c", texto:"Generación de energía eléctrica en centrales termoeléctricas" },
      { id:"d", texto:"Uso recreativo en calefacción de piscinas y parques acuáticos" }
    ],
    respuestaCorrecta: "c",
    explicacion: "En Colombia, el mayor consumo de gas natural corresponde a la generación termoeléctrica, especialmente como respaldo cuando los embalses tienen bajos niveles."
  },

  // ══════════════ FASE 2 — PETRÓLEO ══════════════

  6: { id:6, fase:2,
    enunciado: "Una multinacional petrolera realiza exploración sísmica, perforación de pozos y producción de crudo. También opera un oleoducto y una refinería que produce gasolina y diésel. ¿Cómo se clasifican estas actividades?",
    tipo: "opcion_multiple",
    opciones: [
      { id:"a", texto:"Exploración y perforación = Upstream; Oleoducto = Midstream; Refinería = Downstream" },
      { id:"b", texto:"Exploración = Upstream; Perforación/producción = Midstream; Refinería/oleoducto = Downstream" },
      { id:"c", texto:"Todas las actividades de extracción = Upstream; Todo lo demás = Downstream" },
      { id:"d", texto:"Exploración = Midstream; Producción/refinería = Upstream; Comercialización = Downstream" }
    ],
    respuestaCorrecta: "a",
    explicacion: "Upstream = exploración y producción. Midstream = transporte y almacenamiento. Downstream = refinación, distribución y venta."
  },

  7: { id:7, fase:2,
    enunciado: "En un laboratorio, se miden tres muestras de crudo con gravedades API de 12°, 28° y 42° respectivamente. ¿Cómo se clasifican y cuál tiene mayor valor comercial?",
    tipo: "opcion_multiple",
    opciones: [
      { id:"a", texto:"12° API = Liviano (mayor valor); 28° = Mediano; 42° = Pesado (menor valor)" },
      { id:"b", texto:"12° API = Pesado (menor valor); 28° = Mediano; 42° = Liviano (mayor valor)" },
      { id:"c", texto:"Los tres son crudos medianos; la gravedad API no determina el valor comercial" },
      { id:"d", texto:"12° = Extra pesado; 28° = Liviano; 42° = Condensado de gas" }
    ],
    respuestaCorrecta: "b",
    explicacion: "Mayor API = más ligero = mayor rendimiento en productos valiosos. API < 20° = pesado; 20-31° = mediano; > 31° = liviano."
  },

  8: { id:8, fase:2,
    enunciado: "En una refinería, el crudo entra a la torre de destilación atmosférica y se separa en varias fracciones. Ordene las fracciones desde la que sale por la parte MÁS ALTA de la torre hasta la que queda en el FONDO:",
    tipo: "opcion_multiple",
    opciones: [
      { id:"a", texto:"Fondo: Gases ligeros → Medio: Diésel → Arriba: Residuo pesado (asfalto)" },
      { id:"b", texto:"Arriba: Residuo pesado → Medio: Gasolina → Fondo: Gases ligeros (GLP)" },
      { id:"c", texto:"Arriba: Gases ligeros (GLP) → Gasolina → Queroseno → Diésel → Fondo: Residuo pesado" },
      { id:"d", texto:"Arriba: Diésel → Medio: Queroseno → Fondo: Gasolina y gases" }
    ],
    respuestaCorrecta: "c",
    explicacion: "Los componentes más livianos (gases, GLP) salen por arriba. Luego bajan: gasolina, queroseno, diésel, y en el fondo queda el residuo pesado."
  },

  9: { id:9, fase:2,
    enunciado: "La refinería necesita aumentar la producción de gasolina de alto octano a partir de fracciones pesadas como el gasóleo de vacío. ¿Qué proceso de conversión catalítica se aplica?",
    tipo: "opcion_multiple",
    opciones: [
      { id:"a", texto:"Reformación catalítica" },
      { id:"b", texto:"Cracking catalítico fluido (FCC)" },
      { id:"c", texto:"Alquilación" },
      { id:"d", texto:"Hidrodesulfuración (HDS)" }
    ],
    respuestaCorrecta: "b",
    explicacion: "El FCC rompe moléculas pesadas en más livianas y valiosas usando catalizadores zeolíticos a ~500°C."
  },

  10: { id:10, fase:2,
    enunciado: "Un barril de petróleo (159 litros) se refina y produce múltiples derivados. ¿Cuál de los siguientes productos NO se obtiene del petróleo?",
    tipo: "opcion_multiple",
    opciones: [
      { id:"a", texto:"Gasolina para vehículos" },
      { id:"b", texto:"Asfalto para carreteras" },
      { id:"c", texto:"Cemento Portland para construcción" },
      { id:"d", texto:"Plásticos y fibras sintéticas (a partir de nafta petroquímica)" }
    ],
    respuestaCorrecta: "c",
    explicacion: "El cemento Portland se fabrica de caliza, arcilla y yeso, NO del petróleo."
  },

  // ══════════════ FASE 3 — PROCESOS TÉCNICOS ══════════════

  11: { id:11, fase:3,
    enunciado: "Observe el diagrama de una torre de perforación rotaria. El sistema que circula el fluido de perforación desde la superficie hasta el fondo del pozo y de regreso, manteniendo la presión y limpiando los ripios, se llama:",
    tipo: "opcion_multiple", grafico: "perforacion",
    opciones: [
      { id:"a", texto:"Sistema de potencia (motores y generadores eléctricos de la plataforma)" },
      { id:"b", texto:"Sistema de circulación de lodo (bombas, líneas de descarga, BOP y tanques de lodo)" },
      { id:"c", texto:"Sistema de izaje (crown block, travelling block, gancho y malacate)" },
      { id:"d", texto:"Sistema de rotación (mesa rotaria, top drive y sarta de perforación)" }
    ],
    respuestaCorrecta: "b",
    explicacion: "El sistema de circulación de lodo impulsa el fluido por la sarta hasta la broca, recoge los ripios y los transporta a superficie."
  },

  12: { id:12, fase:3,
    enunciado: "En el diagrama del separador trifásico, el fluido que sale del pozo (mezcla de petróleo, gas y agua) debe separarse. ¿Por qué el GAS sale siempre por la parte SUPERIOR del separador?",
    tipo: "opcion_multiple", grafico: "separador",
    opciones: [
      { id:"a", texto:"Porque se aplica un campo eléctrico que empuja el gas hacia arriba" },
      { id:"b", texto:"Porque el gas tiene menor densidad que el petróleo y el agua, y por gravedad asciende naturalmente" },
      { id:"c", texto:"Porque un ventilador interno aspira el gas hacia la salida superior" },
      { id:"d", texto:"Porque el gas se calienta más que los líquidos y sube por convección térmica" }
    ],
    respuestaCorrecta: "b",
    explicacion: "El separador trifásico funciona por diferencia de densidades: el gas (más liviano) asciende, el petróleo queda en la capa media y el agua se deposita en el fondo."
  },

  13: { id:13, fase:3,
    enunciado: "Observe el diagrama de exploración sísmica. Antes de perforar un pozo exploratorio, los geólogos necesitan 'ver' lo que hay debajo del suelo. ¿Cuál técnica les permite crear una imagen del subsuelo sin excavar?",
    tipo: "opcion_multiple", grafico: "exploracion",
    opciones: [
      { id:"a", texto:"Rayos X del subsuelo desde un satélite espacial" },
      { id:"b", texto:"Sísmica de reflexión: se generan ondas en superficie que rebotan en las capas rocosas y se registran con geófonos" },
      { id:"c", texto:"Excavación de trincheras de 100 metros de profundidad para observar directamente las rocas" },
      { id:"d", texto:"Análisis químico del aire superficial para detectar vapores de petróleo" }
    ],
    respuestaCorrecta: "b",
    explicacion: "La sísmica de reflexión genera ondas que viajan al subsuelo, rebotan en las interfaces rocosas y regresan a superficie donde son captadas por geófonos."
  },

  14: { id:14, fase:3,
    enunciado: "Al finalizar la perforación de un pozo y confirmar la presencia de hidrocarburos, se instala en la boca del pozo un conjunto de válvulas que permite controlar el flujo. Este equipo es conocido como:",
    tipo: "opcion_multiple",
    opciones: [
      { id:"a", texto:"BOP (Blow Out Preventer)" },
      { id:"b", texto:"Árbol de navidad (Christmas Tree)" },
      { id:"c", texto:"Separador trifásico" },
      { id:"d", texto:"Manifold de producción" }
    ],
    respuestaCorrecta: "b",
    explicacion: "El 'árbol de navidad' es el conjunto de válvulas, bridas y conexiones en la cabeza del pozo para controlar la producción."
  },

  15: { id:15, fase:3,
    enunciado: "Un pozo petrolero que inicialmente producía crudo por flujo natural deja de hacerlo después de varios años porque la presión del yacimiento ha disminuido. ¿Cuál es la función principal de los sistemas de levantamiento artificial?",
    tipo: "opcion_multiple",
    opciones: [
      { id:"a", texto:"Aumentar la presión del yacimiento inyectando fluidos desde la superficie" },
      { id:"b", texto:"Proporcionar energía adicional para llevar el crudo desde el fondo del pozo hasta la superficie" },
      { id:"c", texto:"Calentar el crudo en el fondo del pozo para reducir su viscosidad" },
      { id:"d", texto:"Separar el gas, el agua y el petróleo directamente dentro del pozo" }
    ],
    respuestaCorrecta: "b",
    explicacion: "Los sistemas de levantamiento artificial suministran energía adicional al fluido para transportarlo a superficie cuando la presión natural ya no alcanza."
  },

  // ══════════════ FASE 4 — ENERGÍAS RENOVABLES ══════════════

  16: { id:16, fase:4,
    enunciado: `ESCENARIO DE DECISIÓN: El municipio de Uribia (La Guajira) tiene las siguientes condiciones:\n\n• Irradiación solar: 6.2 kWh/m²/día\n• Velocidad del viento: 9.5 m/s promedio a 80 m de altura\n• Precipitación: 300 mm/año (zona árida)\n• Demanda eléctrica: 15 MW\n• Conexión a red nacional: Muy limitada\n\n¿Cuál combinación de energías renovables es la más justificada?`,
    tipo: "opcion_multiple",
    opciones: [
      { id:"a", texto:"Solo energía hidroeléctrica – La precipitación garantiza caudal suficiente" },
      { id:"b", texto:"Combinación solar fotovoltaica + eólica con almacenamiento en baterías" },
      { id:"c", texto:"Biomasa a partir de residuos agrícolas – La Guajira tiene alta producción de caña" },
      { id:"d", texto:"Geotérmica – La Sierra Nevada indica actividad volcánica explotable" }
    ],
    respuestaCorrecta: "b",
    explicacion: "La Guajira tiene el mayor potencial eólico y solar de Colombia. La combinación solar+eólica con baterías es óptima para zona no interconectada."
  },

  17: { id:17, fase:4,
    enunciado: `ESCENARIO: El departamento del Huila quiere reemplazar una vieja central termoeléctrica a carbón (50 MW). Evalúan:\n\nOPCIÓN A – Parque solar flotante en embalse de Betania (50 MW, factor cap. 20%, solo de día)\nOPCIÓN B – Repotenciar la hidroeléctrica de Betania (+50 MW, factor cap. 55%, genera 24h)\n\n¿Cuál decisión es más estratégica?`,
    tipo: "opcion_multiple",
    opciones: [
      { id:"a", texto:"Solo Opción A (solar flotante), porque es 100% limpia y moderna" },
      { id:"b", texto:"Combinar ambas: repotenciar Betania para base + solar flotante para pico diurno, eliminando la termoeléctrica" },
      { id:"c", texto:"Solo Opción B (repotenciar hidroeléctrica), porque la solar es experimental" },
      { id:"d", texto:"Mantener la termoeléctrica con filtros de aire" }
    ],
    respuestaCorrecta: "b",
    explicacion: "La combinación es óptima: hidroeléctrica da base 24/7 y solar flotante aprovecha el embalse existente sin ocupar tierra agrícola."
  },

  18: { id:18, fase:4,
    enunciado: `ESCENARIO ESG: Una empresa quiere instalar 50 MW de energía solar en el Cesar. La comunidad indígena Yukpa habita en la zona de influencia. La ANLA exige consulta previa. ¿Cuál es la decisión más adecuada bajo criterios ESG?`,
    tipo: "opcion_multiple",
    opciones: [
      { id:"a", texto:"Avanzar sin consulta previa, la energía solar no genera impacto ambiental" },
      { id:"b", texto:"Reubicar el proyecto en zona sin comunidades indígenas" },
      { id:"c", texto:"Realizar consulta previa libre e informada con la comunidad Yukpa, incorporar observaciones y establecer beneficios compartidos" },
      { id:"d", texto:"Pagar compensación económica individual a los líderes comunitarios" }
    ],
    respuestaCorrecta: "c",
    explicacion: "La consulta previa es un derecho fundamental (Convenio 169 OIT, Constitución colombiana). Evadir genera riesgo legal y reputacional."
  },

  19: { id:19, fase:4,
    enunciado: `ESCENARIO: Colombia evalúa instalar su primer parque eólico marino (offshore) frente a las costas de La Guajira. Los datos son:\n\n• Velocidad del viento a 100m: 11.2 m/s\n• Profundidad del mar: 25-40 metros\n• Capacidad propuesta: 200 MW\n• Inversión: USD 800 millones\n• LCOE estimado: USD 85/MWh\n\nComparado con eólica terrestre (LCOE USD 45/MWh), ¿cuál es la principal ventaja que justificaría la mayor inversión del proyecto offshore?`,
    tipo: "opcion_multiple",
    opciones: [
      { id:"a", texto:"Los aerogeneradores marinos son más pequeños y baratos que los terrestres" },
      { id:"b", texto:"El viento en el mar es más constante, fuerte y predecible, lo que aumenta el factor de capacidad y la generación anual de energía" },
      { id:"c", texto:"No se necesitan permisos ambientales porque el mar no pertenece a ningún municipio" },
      { id:"d", texto:"La sal del mar lubrica las turbinas y elimina el mantenimiento" }
    ],
    respuestaCorrecta: "b",
    explicacion: "La eólica offshore tiene vientos más fuertes, constantes y sin obstáculos, logrando factores de capacidad de 40-50% vs 25-35% en tierra. Esto compensa parcialmente el mayor costo de inversión."
  },

  20: { id:20, fase:4,
    enunciado: `ESCENARIO REGULATORIO: Una empresa de energía solar contrata trabajadores para instalar 10.000 paneles en un terreno rural del Meta. Los trabajadores laboran bajo sol intenso, sin agua potable, sin EPP y dormidos en cambuches. ¿Qué aspecto ESG incumple?`,
    tipo: "opcion_multiple",
    opciones: [
      { id:"a", texto:"Solo Ambiental (E), porque los paneles podrían afectar la fauna" },
      { id:"b", texto:"Solo Gobernanza (G), porque la empresa no tiene junta directiva" },
      { id:"c", texto:"Social (S): está vulnerando derechos laborales, salud y seguridad de trabajadores" },
      { id:"d", texto:"Ninguno, la energía solar es limpia y cualquier proyecto renovable es ESG" }
    ],
    respuestaCorrecta: "c",
    explicacion: "La 'S' de ESG incluye condiciones laborales dignas, salud ocupacional y seguridad industrial. Que sea energía limpia no exime de cumplir con derechos laborales."
  },

  // ══════════════ FASE 5 — EXPLOTACIÓN PETROLERA ══════════════

  21: { id:21, fase:5,
    enunciado: `ESCENARIO DE VIABILIDAD: Se evalúa el "Campo Esperanza" con:\n\n• Reservas probadas: 45 MMBBL\n• Gravedad API: 27°\n• Precio WTI: USD 65/bbl\n• Costo de producción: USD 22/bbl\n• Inversión: USD 380 millones\n\n¿Cuál es la conclusión sobre la viabilidad?`,
    tipo: "opcion_multiple",
    opciones: [
      { id:"a", texto:"No viable – Las reservas de 45 MMBBL son insuficientes" },
      { id:"b", texto:"Viable – El margen de USD 43/bbl sobre 45 MMBBL genera ~USD 1.935M, superando la inversión ampliamente" },
      { id:"c", texto:"Viable solo si el precio WTI sube a USD 90/bbl" },
      { id:"d", texto:"No viable – El crudo de 27° API es pesado y no tiene mercado" }
    ],
    respuestaCorrecta: "b",
    explicacion: "Ingreso bruto = 45M × (65-22) = USD 1.935M. La inversión de USD 380M se recupera con ROI muy positivo. 27° API es mediano (aceptable)."
  },

  22: { id:22, fase:5,
    enunciado: `ESCENARIO: El "Campo Jaguar" produce crudo extrapesado de 8° API con altísima viscosidad. El crudo casi no fluye a temperatura ambiente. El yacimiento es somero (800 m). ¿Cuál tecnología es la más adecuada?`,
    tipo: "opcion_multiple",
    opciones: [
      { id:"a", texto:"Inyección de agua fría (waterflood convencional)" },
      { id:"b", texto:"Inyección de vapor o SAGD para calentar el crudo y reducir su viscosidad" },
      { id:"c", texto:"Inyección de CO₂ miscible a alta presión" },
      { id:"d", texto:"Bombeo mecánico convencional sin tratamiento térmico" }
    ],
    respuestaCorrecta: "b",
    explicacion: "Para crudos extrapesados (8° API), los métodos térmicos (vapor/SAGD) son esenciales para reducir la viscosidad y permitir el flujo."
  },

  23: { id:23, fase:5,
    enunciado: `ESCENARIO GEOLÓGICO: El equipo analiza una trampa estratigráfica en el Bloque CPO-17:\n\n• Zona de pago: 8 metros de espesor neto\n• Se extiende lateralmente 3,5 km\n• Profundidad: 4.100 m\n• Permeabilidad: 12 mD (moderada-baja)\n\n¿Qué tipo de perforación maximiza el contacto con el reservorio?`,
    tipo: "opcion_multiple",
    opciones: [
      { id:"a", texto:"Perforación vertical convencional – Corta el reservorio en solo 8 metros" },
      { id:"b", texto:"Multipozo vertical desde plataforma central (cluster drilling)" },
      { id:"c", texto:"Perforación horizontal – Recorre hasta 2.000-3.500 m dentro de los 8 m de espesor productivo" },
      { id:"d", texto:"Perforación vertical con fracturamiento hidráulico masivo" }
    ],
    respuestaCorrecta: "c",
    explicacion: "La perforación horizontal multiplica el área de contacto 250-400 veces comparado con un pozo vertical en un reservorio delgado pero extenso."
  },

  24: { id:24, fase:5,
    enunciado: `ESCENARIO ESTRATÉGICO: Colombia genera el 70% de su electricidad de hidroeléctricas. Durante El Niño 2015-2016, embalses bajaron a <30%. Déficit proyectado: 3.500 MW.\n\n¿Cuál proyecto de diversificación es más adecuado?`,
    tipo: "opcion_multiple",
    opciones: [
      { id:"a", texto:"Construir más represas menores (PCH) en ríos secundarios" },
      { id:"b", texto:"Parques eólicos en La Guajira (2.000 MW) + granjas solares (1.500 MW) + baterías a gran escala" },
      { id:"c", texto:"Centrales termoeléctricas a carbón en la costa Caribe" },
      { id:"d", texto:"Importar electricidad desde Ecuador y Venezuela" }
    ],
    respuestaCorrecta: "b",
    explicacion: "Eólica+solar+baterías: el viento sopla más en temporada seca (complementa hidráulica), baterías cubren intermitencia. Las PCH no resuelven dependencia hídrica."
  },

  25: { id:25, fase:5,
    enunciado: `ESCENARIO AMBIENTAL: Una empresa opera un campo petrolero cerca del Parque Serranía de la Macarena. Se produce un derrame de 500 barriles que alcanza un arroyo tributario del río Guayabero. ¿Cuál es la secuencia CORRECTA de respuesta?`,
    tipo: "opcion_multiple",
    opciones: [
      { id:"a", texto:"Reportar a la ANLA → Esperar instrucciones → Iniciar limpieza cuando se apruebe" },
      { id:"b", texto:"Activar plan de contingencia → Contener el derrame con barreras → Notificar a autoridades → Remediar → Monitorear" },
      { id:"c", texto:"Quemar el crudo derramado para eliminarlo rápidamente" },
      { id:"d", texto:"Diluir el crudo con agua del río para que se disperse naturalmente" }
    ],
    respuestaCorrecta: "b",
    explicacion: "La secuencia es: activar plan inmediatamente, contener, notificar, remediar y monitorear. Quemar o diluir son ilegales y agravan el daño."
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
    fase.preguntas.forEach(id => {
      notaFase += calcularPuntaje(id, respuestas[id], banco);
    });
    notasPorFase[fase.id] = parseFloat(notaFase.toFixed(4));
    notaTotal += notaFase;
  });
  return {
    notaTotal: parseFloat(Math.min(notaTotal, 5.0).toFixed(2)),
    notasPorFase
  };
}
