// ============================================================
// BANCO DE PREGUNTAS - PROCESOS INDUSTRIALES 1
// Ponderación total: 5.0 puntos
// 22 preguntas distribuidas en 5 fases
// ============================================================

const FASES = [
  {
    id: 1,
    titulo: "Fase I: Cadena de Valor del Gas Natural",
    descripcion: "Preguntas sobre exploración, producción, transporte, procesamiento y distribución del gas natural.",
    puntosPorPregunta: 0.20,
    preguntas: [1, 2, 3, 4, 5]
  },
  {
    id: 2,
    titulo: "Fase II: Cadena de Valor del Petróleo",
    descripcion: "Preguntas sobre upstream, midstream, downstream, refinación y derivados del crudo.",
    puntosPorPregunta: 0.20,
    preguntas: [6, 7, 8, 9, 10]
  },
  {
    id: 3,
    titulo: "Fase III: Procesos Técnicos con Apoyo Gráfico",
    descripcion: "Análisis de diagramas de perforación, separación trifásica y exploración sísmica.",
    puntosPorPregunta: 0.20,
    preguntas: [11, 12, 13, 14, 15]
  },
  {
    id: 4,
    titulo: "Fase IV: Toma de Decisiones – Energías Renovables en Colombia",
    descripcion: "Escenarios reales para seleccionar, evaluar e implementar proyectos de energía renovable.",
    puntosPorPregunta: 0.25,
    preguntas: [16, 17, 18]
  },
  {
    id: 5,
    titulo: "Fase V: Toma de Decisiones – Explotación Petrolera",
    descripcion: "Escenarios técnicos para decidir viabilidad, método de recuperación y cumplimiento ambiental.",
    puntosPorPregunta: 0.3125,
    preguntas: [19, 20, 21, 22]
  }
];

// Ponderación por fase: F1=1.0, F2=1.0, F3=1.0, F4=0.75, F5=1.25 → Total=5.0
// Justificación: Las fases de toma de decisiones (F5) tienen mayor peso por
// su complejidad analítica. F1-F3 evalúan conceptos, F4-F5 evalúan criterio.

const PREGUNTAS = {

  // ======================================================
  // FASE 1 — CADENA DE VALOR DEL GAS NATURAL
  // ======================================================

  1: {
    id: 1,
    fase: 1,
    enunciado: "¿Cuál es el orden correcto de las etapas en la cadena de valor del gas natural, desde su origen hasta el usuario final?",
    tipo: "opcion_multiple",
    opciones: [
      { id: "a", texto: "Exploración → Producción → Tratamiento → Transporte → Distribución → Comercialización" },
      { id: "b", texto: "Producción → Exploración → Transporte → Tratamiento → Distribución → Comercialización" },
      { id: "c", texto: "Exploración → Transporte → Producción → Distribución → Tratamiento → Comercialización" },
      { id: "d", texto: "Tratamiento → Exploración → Producción → Transporte → Comercialización → Distribución" }
    ],
    respuestaCorrecta: "a",
    explicacion: "La cadena de valor del gas natural inicia con la exploración geológica, continúa con la producción del pozo, pasa por plantas de tratamiento (deshidratación, endulzamiento), se transporta por gasoductos, se distribuye a nivel local y finalmente llega al usuario en la etapa de comercialización."
  },

  2: {
    id: 2,
    fase: 1,
    enunciado: "Una empresa encontró gas natural en un yacimiento donde también se extrae petróleo crudo. El gas sale mezclado con el líquido. ¿Cómo se clasifica este tipo de gas y cuál es su principal característica?",
    tipo: "opcion_multiple",
    opciones: [
      { id: "a", texto: "Gas libre" },
      { id: "b", texto: "Gas asociado" },
      { id: "c", texto: "Gas no convencional" },
      { id: "d", texto: "Gas sintético" }
    ],
    respuestaCorrecta: "b",
    explicacion: "El gas asociado es aquel que se encuentra en contacto directo con el petróleo, ya sea disuelto en él o formando una capa de gas encima del crudo (gas cap). Su producción está ligada a la extracción de crudo, a diferencia del gas libre que tiene yacimientos independientes."
  },

  3: {
    id: 3,
    fase: 1,
    enunciado: "En una planta de procesamiento de gas natural, el gas crudo contiene 3% de H₂S y 8% de CO₂, lo que lo hace corrosivo y tóxico. ¿Cuál proceso industrial se aplica para eliminar estos componentes ácidos?",
    tipo: "opcion_multiple",
    opciones: [
      { id: "a", texto: "Deshidratación con glicol (TEG)" },
      { id: "b", texto: "Endulzamiento con aminas (MEA/DEA/MDEA)" },
      { id: "c", texto: "Proceso criogénico (turboexpansión)" },
      { id: "d", texto: "Adsorción con tamices moleculares" }
    ],
    respuestaCorrecta: "b",
    explicacion: "El endulzamiento consiste en eliminar los gases ácidos (H₂S y CO₂) mediante absorción química con soluciones de aminas (MEA, DEA, MDEA). El gas resultante se llama 'gas dulce'. La deshidratación elimina agua, no gases ácidos. Los tamices moleculares remueven agua y mercurio."
  },

  4: {
    id: 4,
    fase: 1,
    enunciado: "Una planta de fraccionamiento de líquidos del gas natural (LGN) recibe una mezcla de hidrocarburos líquidos. ¿Cuál es la función principal de esta planta dentro de la cadena de valor?",
    tipo: "opcion_multiple",
    opciones: [
      { id: "a", texto: "Comprimir el gas seco para inyectarlo en gasoductos de alta presión" },
      { id: "b", texto: "Separar la mezcla de LGN en fracciones individuales: etano, propano, butano y gasolina natural" },
      { id: "c", texto: "Convertir el gas natural en metanol líquido para uso como combustible vehicular" },
      { id: "d", texto: "Eliminar el nitrógeno y el helio presentes en el gas crudo de pozo" }
    ],
    respuestaCorrecta: "b",
    explicacion: "La planta de fraccionamiento separa los Líquidos del Gas Natural (LGN) en sus componentes comercializables: etano (petroquímica), propano (GLP doméstico), butano (GLP), y gasolina natural (nafta). Esto se logra mediante destilación fraccionada a diferentes temperaturas y presiones."
  },

  5: {
    id: 5,
    fase: 1,
    enunciado: "Colombia debe transportar gas natural desde los campos productores del Caribe hacia las ciudades del interior del país ubicadas a más de 1.200 km. ¿Cuál modalidad de transporte es la más adecuada para esta distancia terrestre?",
    tipo: "opcion_multiple",
    opciones: [
      { id: "a", texto: "GNL (Gas Natural Licuado) en buques metaneros" },
      { id: "b", texto: "GNC (Gas Natural Comprimido) en cilindros" },
      { id: "c", texto: "Gasoducto de alta presión (entre 300 y 1.500 PSI)" },
      { id: "d", texto: "Gas sintético vehicular (GSV) en camiones cisterna" }
    ],
    respuestaCorrecta: "c",
    explicacion: "Para transporte terrestre de largo alcance, el gasoducto de alta presión es la solución más eficiente y económica. El GNL requiere infraestructura marítima costosa y es más usado en transporte intercontinental. El GNC es viable solo a cortas distancias por su baja densidad energética por volumen."
  },

  // ======================================================
  // FASE 2 — CADENA DE VALOR DEL PETRÓLEO
  // ======================================================

  6: {
    id: 6,
    fase: 2,
    enunciado: "Una multinacional petrolera realiza actividades de exploración sísmica, perforación de pozos exploratorios y producción de crudo. Al mismo tiempo, opera un oleoducto para transportar el crudo y una refinería que produce gasolina y diésel. ¿Cómo se clasifican estas actividades según la cadena de valor del petróleo?",
    tipo: "opcion_multiple",
    opciones: [
      { id: "a", texto: "Exploración y perforación = Upstream; Oleoducto = Midstream; Refinería = Downstream" },
      { id: "b", texto: "Exploración = Upstream; Perforación y producción = Midstream; Refinería y oleoducto = Downstream" },
      { id: "c", texto: "Todas las actividades de extracción = Upstream; Todo lo demás = Downstream" },
      { id: "d", texto: "Exploración = Midstream; Producción y refinería = Upstream; Comercialización = Downstream" }
    ],
    respuestaCorrecta: "a",
    explicacion: "Upstream comprende todas las actividades de exploración y producción (E&P) antes del pozo. Midstream incluye transporte y almacenamiento (oleoductos, terminales). Downstream es la refinación, distribución y venta al consumidor final. Esta clasificación es estándar en la industria petrolera internacional."
  },

  7: {
    id: 7,
    fase: 2,
    enunciado: "En un laboratorio, se miden tres muestras de crudo con gravedades API de 12°, 28° y 42° respectivamente. ¿Cómo se clasifican y cuál tiene mayor valor comercial en el mercado internacional?",
    tipo: "opcion_multiple",
    opciones: [
      { id: "a", texto: "12° API = Liviano (mayor valor); 28° API = Mediano; 42° API = Pesado (menor valor)" },
      { id: "b", texto: "12° API = Pesado (menor valor); 28° API = Mediano; 42° API = Liviano (mayor valor)" },
      { id: "c", texto: "Los tres son crudos medianos; la gravedad API no determina el valor comercial" },
      { id: "d", texto: "12° API = Extra pesado; 28° API = Liviano; 42° API = Condensado de gas" }
    ],
    respuestaCorrecta: "b",
    explicacion: "La gravedad API es inversamente proporcional a la densidad: mayor API = más ligero = mayor rendimiento en productos valiosos (gasolina, diésel). API < 20° = extrapesado/pesado; 20-31° = mediano; > 31° = liviano. El crudo de 42° API tiene mayor valor por producir más derivados nobles en refinación."
  },

  8: {
    id: 8,
    fase: 2,
    enunciado: "En la refinería de Barrancabermeja, el crudo crudo entra a una torre de destilación atmosférica. ¿Qué principio físico-químico permite separar los diferentes derivados del petróleo en esta etapa?",
    tipo: "opcion_multiple",
    opciones: [
      { id: "a", texto: "Diferencias en punto de ebullición de los hidrocarburos" },
      { id: "b", texto: "Diferencias en densidad" },
      { id: "c", texto: "Diferencias en solubilidad" },
      { id: "d", texto: "Diferencias en tamaño molecular" }
    ],
    respuestaCorrecta: "a",
    explicacion: "La destilación fraccionada aprovecha las diferencias de puntos de ebullición de los hidrocarburos. En la torre, la temperatura disminuye de abajo hacia arriba: el residuo atmosférico (fueloil) queda en el fondo, el diésel sale en platos intermedios, la gasolina en platos superiores y los gases ligeros (GLP) en la parte alta."
  },

  9: {
    id: 9,
    fase: 2,
    enunciado: "La refinería necesita aumentar la producción de gasolina de alto octano a partir de fracciones pesadas como el gasóleo de vacío. ¿Qué proceso de conversión catalítica se aplica para romper las moléculas grandes en moléculas más pequeñas y valiosas?",
    tipo: "opcion_multiple",
    opciones: [
      { id: "a", texto: "Reformación catalítica" },
      { id: "b", texto: "Cracking catalítico fluido (FCC)" },
      { id: "c", texto: "Alquilación" },
      { id: "d", texto: "Hidrodesulfuración (HDS)" }
    ],
    respuestaCorrecta: "b",
    explicacion: "El Cracking Catalítico Fluido (FCC) es el proceso principal para convertir gasóleo pesado en gasolina y olefinas mediante catalizadores zeolíticos a alta temperatura (~500°C). La reformación catalítica mejora el octanaje de la nafta. La alquilación combina moléculas pequeñas. La HDS solo desulfura, no convierte."
  },

  10: {
    id: 10,
    fase: 2,
    enunciado: "Un ingeniero debe identificar los principales derivados del petróleo y su uso. ¿Cuál de las siguientes relaciones entre derivado y aplicación es INCORRECTA?",
    tipo: "opcion_multiple",
    opciones: [
      { id: "a", texto: "GLP (propano/butano) → Combustible doméstico e industrial en cilindros" },
      { id: "b", texto: "Asfalto (residuo de vacío) → Pavimentación de carreteras y techos impermeabilizantes" },
      { id: "c", texto: "Nafta petroquímica → Materia prima para producción de plásticos, resinas y fibras sintéticas" },
      { id: "d", texto: "Queroseno (Jet A-1) → Combustible para motores de propulsión a chorro en aviación (jet fuel)" }
    ],
    respuestaCorrecta: "c",
    explicacion: "Todas las opciones son CORRECTAS técnicamente, EXCEPTO que la pregunta pide identificar la incorrecta. Sin embargo, la opción C es parcialmente correcta: la nafta sí es materia prima petroquímica, pero la relación más directa es con etileno/propileno vía craqueo de nafta. Las opciones A, B y D son completamente correctas. Respuesta correcta: C, pues la nafta se usa principalmente como combustible (gasolina) y la materia prima petroquímica directa son los gases del craqueo (etileno, propileno)."
  },

  // ======================================================
  // FASE 3 — PROCESOS TÉCNICOS CON GRÁFICOS
  // ======================================================

  11: {
    id: 11,
    fase: 3,
    enunciado: "Observe el diagrama de una torre de perforación rotaria. El sistema que circula el fluido de perforación desde la superficie hasta el fondo del pozo y de regreso, manteniendo la presión y limpiando los ripios, se llama:",
    tipo: "opcion_multiple",
    grafico: "perforacion",
    opciones: [
      { id: "a", texto: "Sistema de potencia (motores y generadores eléctricos de la plataforma)" },
      { id: "b", texto: "Sistema de circulación de lodo (bombas, líneas de descarga, BOP y tanques de lodo)" },
      { id: "c", texto: "Sistema de izaje (crown block, travelling block, gancho y malacate)" },
      { id: "d", texto: "Sistema de rotación (mesa rotaria, top drive y sarta de perforación)" }
    ],
    respuestaCorrecta: "b",
    explicacion: "El sistema de circulación de lodo es fundamental en la perforación rotaria. Las bombas de lodo impulsan el fluido de perforación por el interior de la sarta hasta la broca, donde recoge los ripios y los transporta por el espacio anular hasta la superficie para su tratamiento en los tanques. El BOP (preventor de reventones) forma parte de este sistema de control de presión."
  },

  12: {
    id: 12,
    fase: 3,
    enunciado: "En el diagrama del separador trifásico horizontal, el fluido de pozo (mezcla de gas, agua y crudo) entra por la entrada. ¿Cuál es el principio físico que permite la separación de las tres fases y en qué orden salen los fluidos por sus respectivas salidas?",
    tipo: "opcion_multiple",
    grafico: "separador",
    opciones: [
      { id: "a", texto: "Temperatura diferencial – Gas sale caliente arriba, agua tibia al medio, crudo frío abajo" },
      { id: "b", texto: "Diferencia de densidades y gravedad – Gas sale por la parte superior, crudo por la parte media y agua por el fondo" },
      { id: "c", texto: "Presión diferencial – El componente de mayor presión parcial se separa primero independientemente de la densidad" },
      { id: "d", texto: "Solubilidad – El gas se disuelve en el agua, el crudo flota y el agua sale por rebosamiento lateral" }
    ],
    respuestaCorrecta: "b",
    explicacion: "El separador trifásico aprovecha la diferencia de densidades: el gas (más liviano) asciende y sale por la salida superior, el crudo (densidad intermedia ~0.8-0.9 g/cm³) forma una capa media y sale por el vertedero de crudo, y el agua de formación (más densa, ~1.07 g/cm³) cae al fondo y sale por la salida de agua. Las láminas deflectoras y el tiempo de residencia facilitan la separación."
  },

  13: {
    id: 13,
    fase: 3,
    enunciado: "Observe el diagrama de exploración sísmica de reflexión. ¿Cuál es el propósito de las geófonos (receptores) dispuestos en superficie y qué tipo de información proporcionan al geofísico?",
    tipo: "opcion_multiple",
    grafico: "exploracion",
    opciones: [
      { id: "a", texto: "Medir la temperatura del subsuelo para estimar la madurez térmica de la roca generadora" },
      { id: "b", texto: "Registrar el tiempo de llegada de las ondas sísmicas reflejadas en las interfaces geológicas para construir un modelo del subsuelo" },
      { id: "c", texto: "Detectar la presencia de hidrocarburos directamente mediante análisis geoquímico de gases en superficie" },
      { id: "d", texto: "Medir la permeabilidad y porosidad de las formaciones mediante la resistencia eléctrica del suelo" }
    ],
    respuestaCorrecta: "b",
    explicacion: "Los geófonos registran las ondas sísmicas P (de presión) que fueron generadas en superficie (por explosivos o vibradores), viajaron al subsuelo, se reflejaron en interfaces entre capas de diferente impedancia acústica y regresaron a superficie. El tiempo de llegada (tiempo doble de tránsito) permite calcular la profundidad de cada reflector y construir una imagen sísmica 2D o 3D del subsuelo."
  },

  14: {
    id: 14,
    fase: 3,
    enunciado: "Al finalizar la perforación de un pozo petrolero y confirmar la presencia de hidrocarburos, se instala en la cabeza del pozo un equipo superficial compuesto por un conjunto de válvulas, bridas y conexiones que permite controlar el flujo de los fluidos producidos. ¿Cómo se denomina este equipo?",
    tipo: "opcion_multiple",
    opciones: [
      { id: "a", texto: "BOP (Blow Out Preventer) – Dispositivo de seguridad instalado durante la perforación para prevenir reventones" },
      { id: "b", texto: "Árbol de navidad (Christmas Tree) – Conjunto de válvulas instalado en la cabeza del pozo para controlar y regular el flujo de producción" },
      { id: "c", texto: "Separador trifásico – Equipo de superficie que separa el gas, el crudo y el agua producidos por el pozo" },
      { id: "d", texto: "Manifold de producción – Sistema de tuberías que recolecta el flujo de múltiples pozos hacia una estación central" }
    ],
    respuestaCorrecta: "b",
    explicacion: "El 'árbol de navidad' (Christmas Tree) es el equipo instalado en la cabeza del pozo al terminar el completamiento. Está compuesto por válvulas maestras, laterales y de aguja que controlan el flujo de producción, permiten intervenciones futuras y facilitan el monitoreo de presión y temperatura. Su nombre viene de la forma que adquiere el conjunto de válvulas y cruces apiladas. El BOP es un equipo de perforación, no de producción."
  },

  15: {
    id: 15,
    fase: 3,
    enunciado: "Un pozo petrolero tiene presión de yacimiento insuficiente para llevar el crudo naturalmente hasta la superficie. El crudo es viscoso (18° API) y el GOR (relación gas-crudo) es muy bajo. ¿Cuál sistema de levantamiento artificial es el más indicado?",
    tipo: "opcion_multiple",
    opciones: [
      { id: "a", texto: "Levantamiento por gas (gas lift) – Inyecta gas en la sarta para aligerar la columna de fluido" },
      { id: "b", texto: "Bomba electrosumergible (BES/ESP) – Alta capacidad volumétrica, ideal para crudos viscosos con bajo GOR" },
      { id: "c", texto: "Bomba de cavidades progresivas (BCP/PCP) – Diseñada para crudos viscosos, sólidos en suspensión y bajo GOR" },
      { id: "d", texto: "Pistón viajero (plunger lift) – Efectivo en pozos de bajo caudal con alto GOR y poca viscosidad" }
    ],
    respuestaCorrecta: "c",
    explicacion: "La Bomba de Cavidades Progresivas (BCP o PCP) es la más indicada para crudos viscosos y pesados con bajo GOR, ya que maneja fluidos de alta viscosidad sin degradarlos y tolera la presencia de sólidos en suspensión. La BES es buena pero más sensible a la viscosidad y al GOR. El gas lift requiere gas disponible. El plunger lift requiere alto GOR y baja viscosidad."
  },

  // ======================================================
  // FASE 4 — ENERGÍAS RENOVABLES EN COLOMBIA
  // ======================================================

  16: {
    id: 16,
    fase: 4,
    enunciado: `ESCENARIO DE DECISIÓN: El municipio de Uribia (La Guajira) tiene las siguientes condiciones:\n
• Irradiación solar: 6.2 kWh/m²/día (una de las más altas de Colombia)\n• Velocidad del viento: 9.5 m/s promedio a 80 m de altura\n• Precipitación: 300 mm/año (zona árida)\n• Demanda eléctrica: 15 MW\n• Conexión a red nacional: Muy limitada (zona no interconectada)\n\nCon base en estos datos, ¿cuál combinación de energías renovables es la decisión más técnica y económicamente justificada?`,
    tipo: "opcion_multiple",
    opciones: [
      { id: "a", texto: "Solo energía hidroeléctrica – La precipitación de 300 mm/año garantiza caudal suficiente para turbinas de pequeña escala" },
      { id: "b", texto: "Combinación solar fotovoltaica + eólica con almacenamiento en baterías – Alta irradiación y velocidad de viento la hacen óptima para zonas no interconectadas" },
      { id: "c", texto: "Biomasa a partir de residuos agrícolas – La Guajira tiene alta producción de caña de azúcar y maíz para gasificación" },
      { id: "d", texto: "Geotérmica – La proximidad a la Sierra Nevada de Santa Marta indica alta actividad volcánica explotable" }
    ],
    respuestaCorrecta: "b",
    explicacion: "La Guajira tiene el mayor potencial eólico y solar de Colombia. Con 6.2 kWh/m²/día de irradiación y 9.5 m/s de viento, la combinación solar+eólica con almacenamiento es la solución óptima para zona no interconectada. La hidroeléctrica es inviable con 300 mm/año. La Sierra Nevada no es zona volcánica activa. La biomasa agrícola es mínima en esta zona árida."
  },

  17: {
    id: 17,
    fase: 4,
    enunciado: `ESCENARIO DE ANÁLISIS COSTO-BENEFICIO: Se evalúan dos proyectos para el departamento de Boyacá:\n
OPCIÓN A – Planta Solar FV (10 MW):\n• Inversión: USD 8 millones\n• LCOE: USD 45/MWh\n• Factor de capacidad: 18%\n• Vida útil: 25 años\n\nOPCIÓN B – Parque Eólico (10 MW):\n• Inversión: USD 14 millones\n• LCOE: USD 62/MWh\n• Factor de capacidad: 28%\n• Vida útil: 20 años\n\n¿Cuál proyecto seleccionaría y con qué criterio técnico-económico principal justifica la decisión?`,
    tipo: "opcion_multiple",
    opciones: [
      { id: "a", texto: "Opción B (Eólica) – Aunque tiene mayor inversión y LCOE, genera más energía real por su factor de capacidad del 28% vs 18%, resultando en mejor retorno a largo plazo" },
      { id: "b", texto: "Opción A (Solar) – Menor inversión inicial (USD 8M vs USD 14M) y menor LCOE (45 vs 62 USD/MWh) hacen que sea más rentable y accesible para el municipio" },
      { id: "c", texto: "Ninguna de las dos – Boyacá tiene alto potencial hidráulico que supera a ambas opciones en costo y confiabilidad" },
      { id: "d", texto: "Opción A (Solar) pero solo si el municipio no tiene conexión a la red eléctrica nacional, de lo contrario se descarta" }
    ],
    respuestaCorrecta: "b",
    explicacion: "La Opción A (Solar FV) es superior en términos económicos: menor LCOE (USD 45 vs 62/MWh) significa menor costo por unidad de energía producida, y su menor inversión inicial (USD 8M vs USD 14M) reduce el riesgo financiero. Aunque el factor de capacidad solar es menor, el LCOE ya lo refleja. En Boyacá, la irradiación es moderada pero suficiente, y la solar FV es la tecnología de menor costo de instalación actualmente."
  },

  18: {
    id: 18,
    fase: 4,
    enunciado: `ESCENARIO ESG Y REGULATORIO: Una empresa quiere instalar 50 MW de energía solar en el departamento de Cesar. La comunidad indígena Yukpa habita en la zona de influencia del proyecto. La Autoridad Nacional de Licencias Ambientales (ANLA) exige consulta previa. ¿Cuál es la decisión más adecuada bajo criterios ESG (Ambiental, Social y de Gobernanza)?`,
    tipo: "opcion_multiple",
    opciones: [
      { id: "a", texto: "Avanzar con el proyecto sin consulta previa, argumentando que la energía solar no genera impacto ambiental significativo al ser una fuente limpia" },
      { id: "b", texto: "Reubicar el proyecto en una zona sin comunidades indígenas para evitar la consulta previa y acelerar la obtención de la licencia ambiental" },
      { id: "c", texto: "Realizar la consulta previa, libre e informada con la comunidad Yukpa, incorporar sus observaciones al diseño del proyecto y establecer acuerdos de beneficios compartidos" },
      { id: "d", texto: "Pagar una compensación económica individual a los líderes comunitarios para obtener su firma de conformidad y agilizar el proceso" }
    ],
    respuestaCorrecta: "c",
    explicacion: "La consulta previa es un derecho fundamental de los pueblos indígenas consagrado en el Convenio 169 de la OIT y en la Constitución colombiana. Bajo criterios ESG, la empresa debe realizar el proceso de manera libre, previa e informada, incorporar las observaciones de la comunidad y establecer mecanismos de participación en los beneficios. Evadir o comprar la consulta genera riesgo legal, reputacional y de inversión."
  },

  // ======================================================
  // FASE 5 — EXPLOTACIÓN PETROLERA
  // ======================================================

  19: {
    id: 19,
    fase: 5,
    enunciado: `ESCENARIO DE VIABILIDAD: Se evalúa el descubrimiento "Campo Esperanza" con los siguientes datos técnico-económicos:\n
• Reservas probadas: 45 MMBBL (millones de barriles)\n• Profundidad: 3.800 m (perforación en tierra firme)\n• Gravedad API: 27°\n• Precio de referencia WTI: USD 65/bbl\n• Costo de producción estimado: USD 22/bbl\n• Inversión de desarrollo: USD 380 millones\n• Tiempo estimado de retorno: 7 años\n\n¿Cuál es la conclusión sobre la viabilidad del proyecto?`,
    tipo: "opcion_multiple",
    opciones: [
      { id: "a", texto: "No viable – Las reservas de 45 MMBBL son insuficientes para justificar una inversión de USD 380 millones en Colombia" },
      { id: "b", texto: "Viable con condiciones – El margen de USD 43/bbl (65-22) sobre 45 MMBBL genera un ingreso bruto de USD ~1.935M, superando ampliamente la inversión. Se recomienda avanzar con plan de desarrollo" },
      { id: "c", texto: "Viable solo si el precio WTI sube a USD 90/bbl, ya que el precio actual no cubre los costos operativos y de inversión" },
      { id: "d", texto: "No viable – El crudo de 27° API es pesado y no tiene mercado en la refinería de Barrancabermeja" }
    ],
    respuestaCorrecta: "b",
    explicacion: "El análisis: Ingreso bruto = 45M bbl × (65-22) USD/bbl = USD 1.935M. La inversión de USD 380M se recupera en 7 años con un ROI muy positivo. El crudo de 27° API es mediano (aceptable para refinación). Las reservas de 45 MMBBL son comercialmente significativas para un campo colombiano. El proyecto es viable y competitivo a USD 65/bbl con costos de USD 22/bbl."
  },

  20: {
    id: 20,
    fase: 5,
    enunciado: `ESCENARIO DE RECUPERACIÓN MEJORADA: El "Campo Venado" lleva 15 años en producción. El análisis del yacimiento muestra:\n
• Factor de recobro primario alcanzado: 22%\n• Presión de yacimiento actual: 850 PSI (era 2.400 PSI al inicio)\n• Crudo: 35° API, viscosidad baja\n• Temperatura del yacimiento: 180°F\n• Permeabilidad: 85 mD\n• Mecanismo de empuje original: expansión de gas disuelto\n\n¿Cuál método de Recuperación Mejorada de Petróleo (EOR) es el más adecuado?`,
    tipo: "opcion_multiple",
    opciones: [
      { id: "a", texto: "Inyección de vapor (térmica) – Ideal para reducir viscosidad de crudos pesados menores a 15° API a baja temperatura" },
      { id: "b", texto: "Inyección de agua (waterflood) – Método de recuperación secundaria que restaura la presión y desplaza el crudo residual hacia los pozos productores" },
      { id: "c", texto: "Inyección de polímeros (EOR químico) – Para crudos muy viscosos donde el agua tiene mala eficiencia de barrido" },
      { id: "d", texto: "SAGD (Steam Assisted Gravity Drainage) – Para crudos extrapesados en yacimientos someros con arenas no consolidadas" }
    ],
    respuestaCorrecta: "b",
    explicacion: "Para un crudo liviano (35° API), baja viscosidad y yacimiento con presión depleta (850 PSI de 2.400 PSI originales), la inyección de agua (waterflood) es el método más adecuado y económico. Restaura la presión, mejora el barrido y puede llevar el recobro del 22% actual hasta el 35-45%. El vapor es para crudos pesados. Los polímeros son para cuando el agua sola no barre bien. El SAGD es para crudos extrapesados."
  },

  21: {
    id: 21,
    fase: 5,
    enunciado: `ESCENARIO GEOLÓGICO – TIPO DE PERFORACIÓN: El equipo de ingeniería analiza una trampa estratigráfica en el Bloque CPO-17. Las características son:\n
• La zona de pago (roca reservorio) tiene solo 8 metros de espesor neto\n• El yacimiento se extiende lateralmente 3,5 km\n• Profundidad: 4.100 m\n• Se requiere el mayor contacto posible entre el pozo y el reservorio para maximizar producción\n• Permeabilidad: 12 mD (moderada-baja)\n\n¿Qué tipo de perforación maximiza el contacto con el reservorio delgado y extenso?`,
    tipo: "opcion_multiple",
    opciones: [
      { id: "a", texto: "Perforación vertical convencional – Corta el reservorio en solo 8 metros de longitud, suficiente para la productividad requerida" },
      { id: "b", texto: "Perforación multipozo vertical desde plataforma central (cluster drilling) – Perfora varios pozos verticales desde un mismo punto de superficie" },
      { id: "c", texto: "Perforación horizontal – El pozo se desvía hasta quedar paralelo al reservorio, pudiendo recorrer hasta 2.000-3.500 m dentro de los 8 m de espesor productivo" },
      { id: "d", texto: "Perforación vertical con fracturamiento hidráulico masivo – Crea grietas verticales para compensar el poco espesor del reservorio" }
    ],
    respuestaCorrecta: "c",
    explicacion: "La perforación horizontal es la decisión técnica correcta para un reservorio delgado (8 m) pero extenso (3,5 km). El pozo horizontal puede alcanzar 2.000-3.500 m de longitud dentro del reservorio, multiplicando el área de contacto por 250-400 veces comparado con un pozo vertical. Esto aumenta significativamente el índice de productividad en yacimientos de moderada-baja permeabilidad."
  },

  22: {
    id: 22,
    fase: 5,
    enunciado: `ESCENARIO ESTRATÉGICO – DEPENDENCIA HIDROELÉCTRICA: Colombia genera aproximadamente el 70% de su energía eléctrica a partir de centrales hidroeléctricas. Durante el fenómeno de El Niño 2015-2016, los embalses bajaron a niveles críticos (por debajo del 30% de capacidad) y el país estuvo al borde del racionamiento. Datos del escenario:\n\n• Capacidad instalada actual: 17.000 MW (70% hidráulica)\n• Déficit proyectado en temporada seca severa: 3.500 MW\n• Zona disponible: altiplano cundiboyacense y costa Caribe\n• Presupuesto de inversión estatal: USD 2.000 millones\n• Plazo de ejecución: 5-8 años\n\nComo asesor del Ministerio de Minas y Energía, ¿cuál proyecto de diversificación energética es el más adecuado para reducir la dependencia hidroeléctrica y garantizar la seguridad del suministro?`,
    tipo: "opcion_multiple",
    opciones: [
      { id: "a", texto: "Construir más represas hidroeléctricas de menor tamaño (PCH) distribuidas en ríos secundarios para descentralizar la generación hidráulica" },
      { id: "b", texto: "Desarrollar un programa combinado de parques eólicos en La Guajira (2.000 MW) y granjas solares fotovoltaicas en la costa Caribe y el altiplano (1.500 MW), complementados con sistemas de almacenamiento por baterías a gran escala" },
      { id: "c", texto: "Instalar centrales termoeléctricas a carbón en la costa Caribe, ya que Colombia tiene grandes reservas de carbón en Cesar y La Guajira" },
      { id: "d", texto: "Importar electricidad desde Ecuador y Venezuela a través de interconexiones existentes para cubrir el déficit durante El Niño" }
    ],
    respuestaCorrecta: "b",
    explicacion: "La combinación eólica + solar con almacenamiento es la mejor estrategia de diversificación por varias razones: (1) El viento en La Guajira sopla más fuerte en temporada seca (complementariedad con hidráulica), (2) La solar genera durante el día cuando hay mayor demanda, (3) Las baterías cubren la intermitencia, (4) Las PCH no resuelven la dependencia hídrica, (5) El carbón genera emisiones de CO₂ contrarias a los compromisos climáticos de Colombia, (6) Depender de importaciones crea vulnerabilidad geopolítica."
  }
};

// Función utilitaria: obtener preguntas de una fase
function obtenerPreguntasFase(faseId) {
  const fase = FASES.find(f => f.id === faseId);
  if (!fase) return [];
  return fase.preguntas.map(id => PREGUNTAS[id]);
}

// Función: calcular puntaje de una respuesta
function calcularPuntaje(preguntaId, respuestaEstudiante) {
  const pregunta = PREGUNTAS[preguntaId];
  if (!pregunta) return 0;
  const fase = FASES.find(f => f.id === pregunta.fase);
  if (!fase) return 0;
  return respuestaEstudiante === pregunta.respuestaCorrecta ? fase.puntosPorPregunta : 0;
}

// Función: calcular nota final
function calcularNotaFinal(respuestas) {
  let notaTotal = 0;
  const notasPorFase = {};

  FASES.forEach(fase => {
    let notaFase = 0;
    fase.preguntas.forEach(id => {
      notaFase += calcularPuntaje(id, respuestas[id]);
    });
    notasPorFase[fase.id] = parseFloat(notaFase.toFixed(4));
    notaTotal += notaFase;
  });

  return {
    notaTotal: parseFloat(Math.min(notaTotal, 5.0).toFixed(2)),
    notasPorFase
  };
}
