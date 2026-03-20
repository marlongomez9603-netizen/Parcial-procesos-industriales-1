// ============================================================
// BANCO DE PREGUNTAS – VERSIÓN B (Grupo B / Diurnos)
// 25 preguntas × 0.20 pts = 5.0 puntos
// Patrón de intercalación por fase: B,B,A,A,B (inverso al A)
// ============================================================

const PREGUNTAS_B = {

  // ═══ FASE 1 — GAS NATURAL ═══
  // Patrón: B, B, A, A, B

  // [B] Pregunta 1
  1: { id:1, fase:1,
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

  // [B] Pregunta 2
  2: { id:2, fase:1,
    enunciado: "Una planta recibe gas crudo saturado con vapor de agua. Si se transporta sin tratar por el gasoducto, ¿cuál es el principal riesgo operativo?",
    tipo:"opcion_multiple",
    opciones: [
      { id:"a", texto:"El gas se licúa completamente dentro de la tubería" },
      { id:"b", texto:"Se forman hidratos (cristales sólidos) que pueden bloquear la tubería y las válvulas" },
      { id:"c", texto:"El vapor de agua reacciona con el metano generando una explosión" },
      { id:"d", texto:"La presión del gasoducto se duplica por la expansión del vapor" }
    ],
    respuestaCorrecta:"b",
    explicacion:"Los hidratos de gas son cristales sólidos que bloquean tuberías y equipos. Se previene con deshidratación."
  },

  // [A] Pregunta 3
  3: { id:3, fase:1,
    enunciado: "¿Cuál es el orden correcto de las etapas en la cadena de valor del gas natural?",
    tipo:"opcion_multiple",
    opciones: [
      { id:"a", texto:"Exploración → Producción → Tratamiento → Transporte → Distribución → Comercialización" },
      { id:"b", texto:"Producción → Exploración → Transporte → Tratamiento → Distribución → Comercialización" },
      { id:"c", texto:"Exploración → Transporte → Producción → Distribución → Tratamiento → Comercialización" },
      { id:"d", texto:"Tratamiento → Exploración → Producción → Transporte → Comercialización → Distribución" }
    ],
    respuestaCorrecta:"a",
    explicacion:"La cadena inicia con exploración, producción, tratamiento, transporte, distribución y comercialización."
  },

  // [A] Pregunta 4
  4: { id:4, fase:1,
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

  // [B] Pregunta 5
  5: { id:5, fase:1,
    enunciado: "Colombia transporta gas natural licuado (GNL) desde plantas de regasificación. ¿A qué temperatura aproximada se enfría el gas natural para licuarlo y reducir su volumen unas 600 veces?",
    tipo:"opcion_multiple",
    opciones: [
      { id:"a", texto:"A -42°C, punto de ebullición del propano" },
      { id:"b", texto:"A 0°C, punto de congelación del agua" },
      { id:"c", texto:"A -162°C, punto de ebullición del metano a presión atmosférica" },
      { id:"d", texto:"A -78°C, temperatura del hielo seco (CO₂ sólido)" }
    ],
    respuestaCorrecta:"c",
    explicacion:"Para licuar el gas natural se enfría a -162°C, reduciendo su volumen unas 600 veces."
  },

  // ═══ FASE 2 — PETRÓLEO ═══
  // Patrón: B, B, A, A, B

  // [B] Pregunta 6
  6: { id:6, fase:2,
    enunciado: "En una refinería, el crudo entra a la torre de destilación atmosférica. Ordene las fracciones desde la parte MÁS ALTA hasta el FONDO:",
    tipo:"opcion_multiple",
    opciones: [
      { id:"a", texto:"Fondo: Gases ligeros → Medio: Diésel → Arriba: Residuo pesado" },
      { id:"b", texto:"Arriba: Residuo pesado → Medio: Gasolina → Fondo: Gases ligeros" },
      { id:"c", texto:"Arriba: Gases ligeros (GLP) → Gasolina → Queroseno → Diésel → Fondo: Residuo pesado" },
      { id:"d", texto:"Arriba: Diésel → Medio: Queroseno → Fondo: Gasolina y gases" }
    ],
    respuestaCorrecta:"c",
    explicacion:"Los más livianos (gases, GLP) salen arriba. Luego: gasolina, queroseno, diésel. Fondo: residuo pesado."
  },

  // [B] Pregunta 7
  7: { id:7, fase:2,
    enunciado: "La refinería necesita producir más gasolina de la que obtiene por destilación directa. ¿Cuál proceso permite TRANSFORMAR fracciones pesadas en más livianas?",
    tipo:"opcion_multiple",
    opciones: [
      { id:"a", texto:"Destilación al vacío" },
      { id:"b", texto:"Mezcla con solventes (blending)" },
      { id:"c", texto:"Cracking (rompimiento de moléculas grandes en más pequeñas)" },
      { id:"d", texto:"Filtración molecular" }
    ],
    respuestaCorrecta:"c",
    explicacion:"El cracking rompe moléculas pesadas en livianas. La destilación solo separa, no transforma."
  },

  // [A] Pregunta 8
  8: { id:8, fase:2,
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

  // [A] Pregunta 9
  9: { id:9, fase:2,
    enunciado: "Tres muestras de crudo miden 12°, 28° y 42° API. ¿Cómo se clasifican y cuál tiene mayor valor?",
    tipo:"opcion_multiple",
    opciones: [
      { id:"a", texto:"12° = Liviano (mayor valor); 28° = Mediano; 42° = Pesado (menor valor)" },
      { id:"b", texto:"12° = Pesado (menor valor); 28° = Mediano; 42° = Liviano (mayor valor)" },
      { id:"c", texto:"Los tres son medianos; API no determina valor" },
      { id:"d", texto:"12° = Extra pesado; 28° = Liviano; 42° = Condensado" }
    ],
    respuestaCorrecta:"b",
    explicacion:"Mayor API = más ligero = mayor valor comercial."
  },

  // [B] Pregunta 10
  10: { id:10, fase:2,
    enunciado: "Un barril de petróleo se refina y produce múltiples derivados. ¿Cuál de los siguientes productos NO se obtiene del petróleo?",
    tipo:"opcion_multiple",
    opciones: [
      { id:"a", texto:"Gasolina para vehículos" },
      { id:"b", texto:"Asfalto para carreteras" },
      { id:"c", texto:"Cemento Portland para construcción" },
      { id:"d", texto:"Plásticos y fibras sintéticas" }
    ],
    respuestaCorrecta:"c",
    explicacion:"El cemento Portland se fabrica con caliza, arcilla y yeso, NO del petróleo."
  },

  // ═══ FASE 3 — PROCESOS TÉCNICOS ═══
  // Patrón: B, B, A, A, B

  // [B] Pregunta 11
  11: { id:11, fase:3,
    enunciado: "Observe el diagrama de la torre de perforación. Durante la perforación se bombea un fluido llamado 'lodo'. ¿Cuáles son las funciones principales?",
    tipo:"opcion_multiple", grafico:"perforacion",
    opciones: [
      { id:"a", texto:"Solo sirve para enfriar la broca" },
      { id:"b", texto:"Enfriar y lubricar la broca, transportar ripios a superficie, mantener presión y estabilizar paredes" },
      { id:"c", texto:"Disolver la roca del subsuelo químicamente" },
      { id:"d", texto:"Generar energía eléctrica para los motores" }
    ],
    respuestaCorrecta:"b",
    explicacion:"El lodo enfría/lubrica la broca, transporta ripios, controla presión hidrostática y estabiliza paredes."
  },

  // [B] Pregunta 12
  12: { id:12, fase:3,
    enunciado: "En el diagrama del separador trifásico, ¿por qué el GAS sale siempre por la parte SUPERIOR?",
    tipo:"opcion_multiple", grafico:"separador",
    opciones: [
      { id:"a", texto:"Un campo eléctrico empuja el gas hacia arriba" },
      { id:"b", texto:"El gas tiene menor densidad que el petróleo y el agua, y por gravedad asciende naturalmente" },
      { id:"c", texto:"Un ventilador interno aspira el gas hacia la salida superior" },
      { id:"d", texto:"El gas se calienta más y sube por convección" }
    ],
    respuestaCorrecta:"b",
    explicacion:"El gas es más liviano (menor densidad) y asciende naturalmente por gravedad."
  },

  // [A] Pregunta 13
  13: { id:13, fase:3,
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

  // [A] Pregunta 14
  14: { id:14, fase:3,
    enunciado: "En el separador trifásico horizontal, la mezcla de petróleo, gas y agua se separa. ¿Cuál es el principio y orden de salida?",
    tipo:"opcion_multiple", grafico:"separador",
    opciones: [
      { id:"a", texto:"Temperatura diferencial – Gas caliente arriba, agua tibia medio, crudo frío abajo" },
      { id:"b", texto:"Diferencia de densidades y gravedad – Gas arriba, crudo medio, agua por el fondo" },
      { id:"c", texto:"Presión diferencial – El de mayor presión se separa primero" },
      { id:"d", texto:"Solubilidad – El gas se disuelve en agua, crudo flota" }
    ],
    respuestaCorrecta:"b",
    explicacion:"El separador aprovecha diferencia de densidades: gas sube, crudo al medio, agua baja."
  },

  // [B] Pregunta 15
  15: { id:15, fase:3,
    enunciado: "Antes de perforar, los geólogos necesitan 'ver' lo que hay debajo del suelo. ¿Cuál técnica les permite crear una imagen del subsuelo sin excavar?",
    tipo:"opcion_multiple", grafico:"exploracion",
    opciones: [
      { id:"a", texto:"Rayos X desde un satélite espacial" },
      { id:"b", texto:"Sísmica de reflexión: ondas generadas en superficie rebotan en las capas rocosas y se registran con geófonos" },
      { id:"c", texto:"Excavación de trincheras de 100 metros" },
      { id:"d", texto:"Análisis químico del aire superficial para detectar vapores de petróleo" }
    ],
    respuestaCorrecta:"b",
    explicacion:"La sísmica de reflexión genera ondas que viajan al subsuelo, rebotan y regresan a geófonos para construir modelo 2D/3D."
  },

  // ═══ FASE 4 — ENERGÍAS RENOVABLES ═══
  // Patrón: B, B, A, A, B

  // [B] Pregunta 16
  16: { id:16, fase:4,
    enunciado: `ESCENARIO: Comunidad Wayúu en Manaure (La Guajira), sin red eléctrica:\n• 2.500 personas en rancherías dispersas\n• Irradiación: 6.0 kWh/m²/día\n• Sin ríos ni fuentes hídricas\n• Presupuesto: USD 1.5 millones\n\n¿Cuál solución energética es más adecuada?`,
    tipo:"opcion_multiple",
    opciones: [
      { id:"a", texto:"Extender la red desde Riohacha (90 km)" },
      { id:"b", texto:"Planta termoeléctrica a diésel" },
      { id:"c", texto:"Sistemas solares FV individuales con baterías + bombeo solar comunitario" },
      { id:"d", texto:"Pequeña central hidroeléctrica aprovechando lluvias" }
    ],
    respuestaCorrecta:"c",
    explicacion:"Para comunidades dispersas sin red, los FV individuales con baterías son la solución más costo-efectiva."
  },

  // [B] Pregunta 17
  17: { id:17, fase:4,
    enunciado: `ESCENARIO: Huila quiere reemplazar una termoeléctrica a carbón (50 MW):\n\nOpción A – Solar flotante en embalse de Betania (50 MW, solo de día)\nOpción B – Repotenciar hidroeléctrica de Betania (+50 MW, genera 24h)\n\n¿Decisión más estratégica?`,
    tipo:"opcion_multiple",
    opciones: [
      { id:"a", texto:"Solo solar flotante, 100% limpia y moderna" },
      { id:"b", texto:"Combinar ambas: repotenciar Betania para base + solar flotante para pico diurno" },
      { id:"c", texto:"Solo repotenciar, solar es experimental" },
      { id:"d", texto:"Mantener termoeléctrica con filtros de aire" }
    ],
    respuestaCorrecta:"b",
    explicacion:"Combinación óptima: hidroeléctrica da base 24/7 y solar flotante aprovecha embalse para pico diurno."
  },

  // [A] Pregunta 18
  18: { id:18, fase:4,
    enunciado: `ESCENARIO: Uribia (La Guajira):\n• Irradiación solar: 6.2 kWh/m²/día\n• Viento: 9.5 m/s a 80m\n• Precipitación: 300 mm/año (zona árida)\n• Demanda: 15 MW\n\n¿Cuál combinación de energías renovables es la mejor?`,
    tipo:"opcion_multiple",
    opciones: [
      { id:"a", texto:"Solo energía hidroeléctrica" },
      { id:"b", texto:"Combinación solar fotovoltaica + eólica con almacenamiento en baterías" },
      { id:"c", texto:"Biomasa de residuos agrícolas" },
      { id:"d", texto:"Geotérmica" }
    ],
    respuestaCorrecta:"b",
    explicacion:"La Guajira tiene el mayor potencial eólico y solar. Solar+eólica+baterías es óptimo."
  },

  // [A] Pregunta 19
  19: { id:19, fase:4,
    enunciado: `ESCENARIO: Se evalúan dos proyectos para Boyacá:\n\nSolar FV 10 MW: Inversión USD 8M, LCOE $45/MWh, Factor cap. 18%\nEólica 10 MW: Inversión USD 14M, LCOE $62/MWh, Factor cap. 28%\n\n¿Cuál seleccionar?`,
    tipo:"opcion_multiple",
    opciones: [
      { id:"a", texto:"Eólica – Mayor factor de capacidad (28% vs 18%)" },
      { id:"b", texto:"Solar – Menor inversión (USD 8M) y menor LCOE (USD 45 vs 62), más rentable" },
      { id:"c", texto:"Ninguna – Boyacá tiene alto potencial hidráulico" },
      { id:"d", texto:"Solar solo si no hay conexión a red" }
    ],
    respuestaCorrecta:"b",
    explicacion:"Solar FV: menor LCOE y menor inversión = más rentable."
  },

  // [B] Pregunta 20
  20: { id:20, fase:4,
    enunciado: `ESCENARIO ESG: Una empresa de energía solar contrata trabajadores para instalar 10.000 paneles en el Meta. Laboran sin agua potable, sin EPP, en cambuches. ¿Qué aspecto ESG incumple?`,
    tipo:"opcion_multiple",
    opciones: [
      { id:"a", texto:"Solo Ambiental (E), paneles podrían afectar fauna" },
      { id:"b", texto:"Solo Gobernanza (G), no tiene junta directiva" },
      { id:"c", texto:"Social (S): vulnera derechos laborales, salud y seguridad de trabajadores" },
      { id:"d", texto:"Ninguno, la energía solar es limpia y automáticamente ESG" }
    ],
    respuestaCorrecta:"c",
    explicacion:"La 'S' de ESG incluye condiciones laborales dignas. Ser renovable no exime de cumplir derechos."
  },

  // ═══ FASE 5 — EXPLOTACIÓN PETROLERA ═══
  // Patrón: B, B, A, A, B

  // [B] Pregunta 21
  21: { id:21, fase:5,
    enunciado: `ESCENARIO: Se descubre el "Campo Aurora" en los Llanos:\n• Reservas: 12 MMBBL\n• API: 22°\n• WTI: USD 70/bbl\n• Costo producción: USD 55/bbl\n• Inversión: USD 250 millones\n• Margen: USD 15/bbl\n\n¿Conclusión de viabilidad?`,
    tipo:"opcion_multiple",
    opciones: [
      { id:"a", texto:"Altamente viable – Con 12 MMBBL se recupera la inversión" },
      { id:"b", texto:"Riesgoso – Ingreso neto 12M × USD 15 = USD 180M, NO cubre inversión de USD 250M" },
      { id:"c", texto:"Viable si se duplica la producción diaria" },
      { id:"d", texto:"No se puede determinar sin conocer tipo de roca" }
    ],
    respuestaCorrecta:"b",
    explicacion:"Ingreso neto USD 180M < inversión USD 250M. VPN negativo."
  },

  // [B] Pregunta 22
  22: { id:22, fase:5,
    enunciado: `ESCENARIO: "Campo Venado" – 15 años producción:\n• Recobro: 22%\n• Presión: 850 PSI (original: 2.400)\n• Crudo: 35° API, baja viscosidad\n\n¿Método de recuperación más adecuado?`,
    tipo:"opcion_multiple",
    opciones: [
      { id:"a", texto:"Inyección de vapor (térmica)" },
      { id:"b", texto:"Inyección de agua (waterflood) – Restaura presión y desplaza crudo" },
      { id:"c", texto:"Inyección de polímeros" },
      { id:"d", texto:"SAGD – Para crudos extrapesados" }
    ],
    respuestaCorrecta:"b",
    explicacion:"Para crudo liviano (35° API) con presión depleta, waterflood restaura presión y aumenta recobro."
  },

  // [A] Pregunta 23
  23: { id:23, fase:5,
    enunciado: `ESCENARIO: "Campo Esperanza" en los Llanos Orientales:\n• Reservas probadas: 45 MMBBL\n• Gravedad API: 27°\n• Precio WTI: USD 65/bbl\n• Costo producción: USD 22/bbl\n• Inversión: USD 380 millones\n\n¿Conclusión de viabilidad?`,
    tipo:"opcion_multiple",
    opciones: [
      { id:"a", texto:"No viable – 45 MMBBL son insuficientes" },
      { id:"b", texto:"Viable – Margen USD 43/bbl × 45M = USD 1.935M, supera inversión ampliamente" },
      { id:"c", texto:"Viable solo si WTI sube a USD 90" },
      { id:"d", texto:"No viable – 27° API es pesado sin mercado" }
    ],
    respuestaCorrecta:"b",
    explicacion:"Ingreso neto = 45M × (65-22) = USD 1.935M vs inversión USD 380M. ROI muy positivo."
  },

  // [A] Pregunta 24
  24: { id:24, fase:5,
    enunciado: `ESCENARIO: "Campo Jaguar" produce crudo extrapesado de 8° API con altísima viscosidad. El crudo casi no fluye a temperatura ambiente. Yacimiento somero (800 m). ¿Tecnología más adecuada?`,
    tipo:"opcion_multiple",
    opciones: [
      { id:"a", texto:"Inyección de agua fría (waterflood)" },
      { id:"b", texto:"Inyección de vapor o SAGD para calentar el crudo y reducir viscosidad" },
      { id:"c", texto:"Inyección de CO₂ miscible a alta presión" },
      { id:"d", texto:"Bombeo mecánico sin tratamiento" }
    ],
    respuestaCorrecta:"b",
    explicacion:"Métodos térmicos (vapor/SAGD) calientan crudos extrapesados, reducen viscosidad y permiten flujo."
  },

  // [B] Pregunta 25
  25: { id:25, fase:5,
    enunciado: `ESCENARIO: Colombia firmó el Acuerdo de París (reducir 51% emisiones para 2030). El petróleo y carbón representan 40% de exportaciones.\n\n¿Cuál estrategia de transición energética es más realista?`,
    tipo:"opcion_multiple",
    opciones: [
      { id:"a", texto:"Prohibir inmediatamente toda exploración y producción de fósiles" },
      { id:"b", texto:"Ignorar el Acuerdo de París y maximizar producción de fósiles" },
      { id:"c", texto:"Transición gradual: mantener producción actual mientras se invierte en renovables y diversificación económica" },
      { id:"d", texto:"Exportar todo el petróleo, así las emisiones las contabilizan los compradores" }
    ],
    respuestaCorrecta:"c",
    explicacion:"Transición gradual y justa: mantener ingresos petroleros mientras se desarrollan renovables y se diversifica la economía."
  }
};
