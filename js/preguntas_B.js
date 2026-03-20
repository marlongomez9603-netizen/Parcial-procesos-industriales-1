// ============================================================
// BANCO DE PREGUNTAS VERSIÓN B (DIURNOS) - PROCESOS INDUSTRIALES 1
// 60%+ de preguntas diferentes, orden alterado
// ============================================================

const PREGUNTAS_B = {

  // ======================================================
  // FASE 1 — CADENA DE VALOR DEL GAS NATURAL
  // ======================================================

  1: {
    id: 1, fase: 1,
    enunciado: "El gas natural crudo extraído del pozo contiene una mezcla de hidrocarburos y contaminantes. ¿Cuál es la composición principal del gas natural comercial después de ser procesado?",
    tipo: "opcion_multiple",
    opciones: [
      { id: "a", texto: "Principalmente propano y butano con trazas de metano" },
      { id: "b", texto: "Una mezcla equitativa de metano, etano, propano y butano" },
      { id: "c", texto: "Principalmente metano (CH₄), con pequeñas cantidades de etano y propano" },
      { id: "d", texto: "Principalmente hidrógeno y nitrógeno con algo de metano" }
    ],
    respuestaCorrecta: "c",
    explicacion: "El gas natural comercial (gas seco o gas de venta) está compuesto principalmente por metano (CH₄) en un 85-95%, con pequeñas cantidades de etano y propano. Los componentes más pesados (butano, pentano) y los contaminantes (H₂S, CO₂, agua) se eliminan en las plantas de procesamiento."
  },

  2: {
    id: 2, fase: 1,
    enunciado: "Una planta de procesamiento de gas natural recibe gas crudo saturado con vapor de agua. Si este gas se transporta sin tratar por el gasoducto, ¿cuál es el principal riesgo operativo?",
    tipo: "opcion_multiple",
    opciones: [
      { id: "a", texto: "El gas se licúa completamente dentro de la tubería" },
      { id: "b", texto: "Se forman hidratos (cristales sólidos similares al hielo) que pueden bloquear la tubería y las válvulas" },
      { id: "c", texto: "El vapor de agua reacciona con el metano generando una explosión espontánea" },
      { id: "d", texto: "La presión del gasoducto se duplica por la expansión del vapor" }
    ],
    respuestaCorrecta: "b",
    explicacion: "Los hidratos de gas son cristales sólidos que se forman cuando el gas natural húmedo se enfría a alta presión. Pueden bloquear tuberías, válvulas y equipos. Por eso el gas se deshidrata (con TEG o tamices moleculares) antes de ser transportado."
  },

  3: {
    id: 3, fase: 1,
    enunciado: "Colombia transporta gas natural licuado (GNL) desde plantas de regasificación en la costa. ¿A qué temperatura aproximada se debe enfriar el gas natural para convertirlo en líquido y reducir su volumen unas 600 veces?",
    tipo: "opcion_multiple",
    opciones: [
      { id: "a", texto: "A -42°C, que es el punto de ebullición del propano" },
      { id: "b", texto: "A 0°C, el punto de congelación del agua" },
      { id: "c", texto: "A -162°C, el punto de ebullición del metano a presión atmosférica" },
      { id: "d", texto: "A -78°C, que es la temperatura del hielo seco (CO₂ sólido)" }
    ],
    respuestaCorrecta: "c",
    explicacion: "Para licuar el gas natural se debe enfriar a aproximadamente -162°C (su punto de ebullición a presión atmosférica). Esto reduce su volumen unas 600 veces, haciéndolo económico para transporte marítimo en buques metaneros."
  },

  4: {
    id: 4, fase: 1,
    enunciado: "¿Cuál es el orden correcto de las etapas en la cadena de valor del gas natural, desde su origen hasta el usuario final?",
    tipo: "opcion_multiple",
    opciones: [
      { id: "a", texto: "Producción → Exploración → Transporte → Tratamiento → Distribución → Comercialización" },
      { id: "b", texto: "Tratamiento → Exploración → Producción → Transporte → Comercialización → Distribución" },
      { id: "c", texto: "Exploración → Transporte → Producción → Distribución → Tratamiento → Comercialización" },
      { id: "d", texto: "Exploración → Producción → Tratamiento → Transporte → Distribución → Comercialización" }
    ],
    respuestaCorrecta: "d",
    explicacion: "La cadena de valor del gas natural inicia con la exploración geológica, continúa con la producción del pozo, pasa por plantas de tratamiento (deshidratación, endulzamiento), se transporta por gasoductos, se distribuye a nivel local y finalmente llega al usuario en la etapa de comercialización."
  },

  5: {
    id: 5, fase: 1,
    enunciado: "En Colombia, el gas natural tiene múltiples usos en diferentes sectores. ¿Cuál de las siguientes aplicaciones del gas natural es la que representa el MAYOR porcentaje de consumo a nivel nacional?",
    tipo: "opcion_multiple",
    opciones: [
      { id: "a", texto: "Como combustible vehicular (GNV) en el transporte público" },
      { id: "b", texto: "Como materia prima para fabricar fertilizantes y productos químicos" },
      { id: "c", texto: "Generación de energía eléctrica en centrales termoeléctricas" },
      { id: "d", texto: "Uso recreativo en calefacción de piscinas y parques acuáticos" }
    ],
    respuestaCorrecta: "c",
    explicacion: "En Colombia, el mayor consumo de gas natural corresponde a la generación termoeléctrica, especialmente como respaldo cuando los embalses tienen bajos niveles. Le sigue el consumo industrial, luego el residencial y finalmente el vehicular (GNV)."
  },

  // ======================================================
  // FASE 2 — CADENA DE VALOR DEL PETRÓLEO
  // ======================================================

  6: {
    id: 6, fase: 2,
    enunciado: "Una compañía petrolera opera en tres segmentos: busca yacimientos y extrae crudo, lo transporta por oleoductos, y finalmente lo refina para vender gasolina. ¿Cómo se clasifican estos tres segmentos en la industria petrolera?",
    tipo: "opcion_multiple",
    opciones: [
      { id: "a", texto: "Primario, Secundario y Terciario" },
      { id: "b", texto: "Exploración, Transporte y Venta" },
      { id: "c", texto: "Upstream (exploración y producción), Midstream (transporte), Downstream (refinación y venta)" },
      { id: "d", texto: "Extracción, Procesamiento y Distribución al por menor" }
    ],
    respuestaCorrecta: "c",
    explicacion: "La industria petrolera se divide en: Upstream (exploración y producción), Midstream (transporte y almacenamiento por oleoductos y terminales) y Downstream (refinación, distribución y comercialización de productos derivados al consumidor final)."
  },

  7: {
    id: 7, fase: 2,
    enunciado: "Un ingeniero recibe dos muestras de crudo: una de 10° API y otra de 40° API. ¿Qué puede concluir sobre las propiedades físicas y el valor comercial de cada una?",
    tipo: "opcion_multiple",
    opciones: [
      { id: "a", texto: "Ambas tienen la misma densidad, la gravedad API solo indica el color del crudo" },
      { id: "b", texto: "El crudo de 10° API es más liviano y vale más; el de 40° API es pesado y vale menos" },
      { id: "c", texto: "El crudo de 40° API es más liviano, fluye mejor y tiene mayor valor comercial que el de 10° API que es pesado y viscoso" },
      { id: "d", texto: "La gravedad API mide la acidez del crudo, no su densidad ni su valor" }
    ],
    respuestaCorrecta: "c",
    explicacion: "La gravedad API es inversamente proporcional a la densidad: mayor API = más ligero = mayor rendimiento en productos valiosos (gasolina, diésel). El crudo de 40° API es liviano y tiene mayor valor. El de 10° API es pesado/extrapesado, difícil de refinar y vale menos."
  },

  8: {
    id: 8, fase: 2,
    enunciado: "En una refinería, el crudo entra a la torre de destilación atmosférica y se separa en varias fracciones. Ordene las fracciones desde la que sale por la parte MÁS ALTA de la torre hasta la que queda en el FONDO:",
    tipo: "opcion_multiple",
    opciones: [
      { id: "a", texto: "Fondo: Gases ligeros → Medio: Diésel → Arriba: Residuo pesado (asfalto)" },
      { id: "b", texto: "Arriba: Residuo pesado → Medio: Gasolina → Fondo: Gases ligeros (GLP)" },
      { id: "c", texto: "Arriba: Gases ligeros (GLP) → Gasolina → Queroseno → Diésel → Fondo: Residuo pesado" },
      { id: "d", texto: "Arriba: Diésel → Medio: Queroseno → Fondo: Gasolina y gases" }
    ],
    respuestaCorrecta: "c",
    explicacion: "En la torre de destilación, los componentes más livianos (gases, GLP) salen por arriba porque su punto de ebullición es más bajo. Luego bajan: gasolina/nafta, queroseno (jet fuel), diésel, y en el fondo queda el residuo atmosférico pesado (base para asfalto y fuel oil)."
  },

  9: {
    id: 9, fase: 2,
    enunciado: "La refinería de Barrancabermeja necesita producir más gasolina de la que obtiene por destilación directa del crudo. ¿Cuál proceso permite TRANSFORMAR fracciones pesadas del petróleo en fracciones más livianas como gasolina?",
    tipo: "opcion_multiple",
    opciones: [
      { id: "a", texto: "Destilación al vacío" },
      { id: "b", texto: "Mezcla con solventes (blending)" },
      { id: "c", texto: "Cracking (rompimiento de moléculas grandes en moléculas más pequeñas)" },
      { id: "d", texto: "Filtración molecular" }
    ],
    respuestaCorrecta: "c",
    explicacion: "El cracking (catalítico o térmico) rompe las moléculas grandes y pesadas de gasóleo en moléculas más pequeñas y valiosas como gasolina y olefinas. La destilación solo separa, no transforma. El blending mezcla pero no convierte."
  },

  10: {
    id: 10, fase: 2,
    enunciado: "Un barril de petróleo (159 litros) se refina y produce múltiples derivados. ¿Cuál de los siguientes productos NO se obtiene del petróleo?",
    tipo: "opcion_multiple",
    opciones: [
      { id: "a", texto: "Gasolina para vehículos" },
      { id: "b", texto: "Asfalto para carreteras" },
      { id: "c", texto: "Cemento Portland para construcción" },
      { id: "d", texto: "Plásticos y fibras sintéticas (a partir de nafta petroquímica)" }
    ],
    respuestaCorrecta: "c",
    explicacion: "El cemento Portland se fabrica a partir de caliza, arcilla y yeso, NO del petróleo. Todos los demás son derivados del crudo: gasolina (destilación), asfalto (residuo de vacío), y plásticos/fibras (a partir de etileno y propileno obtenidos del craqueo de nafta)."
  },

  // ======================================================
  // FASE 3 — PROCESOS TÉCNICOS CON GRÁFICOS
  // ======================================================

  11: {
    id: 11, fase: 3,
    enunciado: "Observe el diagrama de la torre de perforación. Durante la perforación, se bombea un fluido especial llamado 'lodo de perforación' que circula constantemente. ¿Cuáles son las funciones principales de este lodo?",
    tipo: "opcion_multiple",
    grafico: "perforacion",
    opciones: [
      { id: "a", texto: "Solo sirve para enfriar la broca y no tiene otra función relevante" },
      { id: "b", texto: "Enfriar y lubricar la broca, transportar los recortes de roca (ripios) a superficie, mantener la presión del pozo y estabilizar las paredes" },
      { id: "c", texto: "Disolver la roca del subsuelo químicamente para facilitar la perforación" },
      { id: "d", texto: "Generar energía eléctrica para los motores de la torre de perforación" }
    ],
    respuestaCorrecta: "b",
    explicacion: "El lodo de perforación cumple múltiples funciones críticas: enfría y lubrica la broca, transporta los ripios (recortes de roca) a superficie, ejerce presión hidrostática para controlar las presiones de formación y prevenir reventones, y deposita un revoque que estabiliza las paredes del pozo."
  },

  12: {
    id: 12, fase: 3,
    enunciado: "En el diagrama del separador trifásico, el fluido que sale del pozo (mezcla de petróleo, gas y agua) debe separarse. ¿Por qué el GAS sale siempre por la parte SUPERIOR del separador?",
    tipo: "opcion_multiple",
    grafico: "separador",
    opciones: [
      { id: "a", texto: "Porque se aplica un campo eléctrico que empuja el gas hacia arriba" },
      { id: "b", texto: "Porque el gas tiene menor densidad que el petróleo y el agua, y por gravedad asciende naturalmente" },
      { id: "c", texto: "Porque un ventilador interno aspira el gas hacia la salida superior" },
      { id: "d", texto: "Porque el gas se calienta más que los líquidos y sube por convección térmica" }
    ],
    respuestaCorrecta: "b",
    explicacion: "El separador trifásico funciona por diferencia de densidades: el gas (más liviano) asciende y sale por arriba, el petróleo (densidad intermedia ~0.85 g/cm³) queda en la capa media, y el agua de formación (más densa, ~1.07 g/cm³) se deposita en el fondo. No requiere bombas ni campos eléctricos."
  },

  13: {
    id: 13, fase: 3,
    enunciado: "Observe el diagrama de exploración sísmica. Antes de perforar un pozo exploratorio, los geólogos necesitan 'ver' lo que hay debajo del suelo. ¿Cuál técnica les permite crear una imagen del subsuelo sin excavar?",
    tipo: "opcion_multiple",
    grafico: "exploracion",
    opciones: [
      { id: "a", texto: "Rayos X del subsuelo desde un satélite espacial" },
      { id: "b", texto: "Sísmica de reflexión: se generan ondas en superficie que rebotan en las capas rocosas y se registran con geófonos para construir un mapa del subsuelo" },
      { id: "c", texto: "Excavación de trincheras de 100 metros de profundidad para observar directamente las rocas" },
      { id: "d", texto: "Análisis químico del aire superficial para detectar vapores de petróleo" }
    ],
    respuestaCorrecta: "b",
    explicacion: "La sísmica de reflexión es la técnica más utilizada en exploración petrolera. Se generan ondas (con explosivos o vibradores), estas viajan al subsuelo, rebotan en las interfaces entre capas rocosas y regresan a superficie donde son captadas por geófonos. El tiempo de viaje permite construir un modelo 2D o 3D del subsuelo."
  },

  14: {
    id: 14, fase: 3,
    enunciado: "Al finalizar la perforación de un pozo y confirmar la presencia de hidrocarburos, se instala en la boca del pozo un conjunto de válvulas que permite controlar el flujo de petróleo y gas. Este equipo es conocido como:",
    tipo: "opcion_multiple",
    opciones: [
      { id: "a", texto: "Torre de enfriamiento" },
      { id: "b", texto: "Árbol de navidad (Christmas Tree)" },
      { id: "c", texto: "Compresor de gas" },
      { id: "d", texto: "Tanque de almacenamiento" }
    ],
    respuestaCorrecta: "b",
    explicacion: "El 'árbol de navidad' (Christmas Tree) es el conjunto de válvulas, bridas y conexiones instalado en la cabeza del pozo. Controla el flujo de producción, permite intervenciones futuras y facilita el monitoreo de presión y temperatura. Su nombre viene de la apariencia del ensamble de válvulas apiladas."
  },

  15: {
    id: 15, fase: 3,
    enunciado: "Un pozo petrolero que inicialmente producía crudo por flujo natural deja de hacerlo después de varios años porque la presión del yacimiento ha disminuido. ¿Cuál es la función principal de los sistemas de levantamiento artificial en esta situación?",
    tipo: "opcion_multiple",
    opciones: [
      { id: "a", texto: "Aumentar la presión del yacimiento inyectando fluidos desde la superficie" },
      { id: "b", texto: "Separar el gas, el agua y el petróleo directamente dentro del pozo antes de llevarlos a superficie" },
      { id: "c", texto: "Calentar el crudo en el fondo del pozo para reducir su viscosidad y hacerlo fluir más rápido" },
      { id: "d", texto: "Proporcionar energía adicional para llevar el crudo desde el fondo del pozo hasta la superficie cuando la presión natural ya no es suficiente" }
    ],
    respuestaCorrecta: "d",
    explicacion: "Los sistemas de levantamiento artificial (gas lift, bombeo mecánico, BES, BCP) suministran energía adicional al fluido para transportarlo desde el fondo del pozo hasta la superficie, cuando la presión natural del yacimiento ya no alcanza."
  },

  // ======================================================
  // FASE 4 — ENERGÍAS RENOVABLES (TODOS ESCENARIOS NUEVOS)
  // ======================================================

  16: {
    id: 16, fase: 4,
    enunciado: `ESCENARIO DE DECISIÓN: La comunidad indígena Wayúu en Manaure (La Guajira) no tiene acceso a la red eléctrica nacional. Las condiciones son:\n\n• Población: 2.500 personas en rancherías dispersas\n• Irradiación solar: 6.0 kWh/m²/día\n• No hay ríos ni fuentes hídricas cercanas\n• Presupuesto limitado del gobierno: USD 1.5 millones\n• Se necesita energía para bombeo de agua, refrigeración de alimentos y alumbrado\n\n¿Cuál solución energética es la más adecuada para esta comunidad?`,
    tipo: "opcion_multiple",
    opciones: [
      { id: "a", texto: "Extender la red eléctrica nacional desde Riohacha (a 90 km) con postes y cableado convencional" },
      { id: "b", texto: "Instalar una planta termoeléctrica a diésel en la zona para generar 24 horas al día" },
      { id: "c", texto: "Sistemas solares fotovoltaicos individuales con baterías para cada ranchería, complementados con un sistema comunitario de bombeo solar" },
      { id: "d", texto: "Construir una pequeña central hidroeléctrica aprovechando las lluvias estacionales" }
    ],
    respuestaCorrecta: "c",
    explicacion: "Para comunidades dispersas sin red eléctrica y con alta irradiación solar, los sistemas FV individuales con baterías son la solución más costo-efectiva. Extender la red 90 km supera el presupuesto. La termoeléctrica diésel requiere combustible costoso y contaminante. No hay fuentes hídricas para hidroeléctrica en zona árida."
  },

  17: {
    id: 17, fase: 4,
    enunciado: `ESCENARIO DE PLANIFICACIÓN: El departamento del Huila quiere reemplazar una vieja central termoeléctrica a carbón (50 MW) que contamina el aire del valle. Evalúan dos alternativas:\n\nOPCIÓN A – Parque solar flotante en el embalse de Betania:\n• Capacidad: 50 MW\n• Ventaja: no ocupa tierras agrícolas, reduce evaporación del embalse\n• Desventaja: solo genera de día (factor de capacidad ~20%)\n\nOPCIÓN B – Repotenciar la central hidroeléctrica de Betania:\n• Ya existe la represa y tiene capacidad de ampliación de 50 MW\n• Factor de capacidad: 55%\n• Genera 24 horas\n\n¿Cuál decisión es más estratégica para la región?`,
    tipo: "opcion_multiple",
    opciones: [
      { id: "a", texto: "Solo Opción A (solar flotante), porque es energía 100% limpia y moderna" },
      { id: "b", texto: "Combinar ambas: repotenciar Betania para base + solar flotante para pico diurno, eliminando la termoeléctrica a carbón completamente" },
      { id: "c", texto: "Solo Opción B (repotenciar hidroeléctrica), porque la solar es una tecnología experimental" },
      { id: "d", texto: "Mantener la termoeléctrica a carbón y solo agregar filtros de aire para reducir emisiones" }
    ],
    respuestaCorrecta: "b",
    explicacion: "La combinación es óptima: la hidroeléctrica repotenciada da base firme 24/7 y la solar flotante aprovecha el embalse existente sin ocupar tierra agrícola, reduce evaporación y aporta energía en horas pico de demanda diurna. Juntas reemplazan totalmente la termoeléctrica a carbón."
  },

  18: {
    id: 18, fase: 4,
    enunciado: `ESCENARIO REGULATORIO: Una empresa de energía solar contrata trabajadores para instalar 10.000 paneles en un terreno rural del Meta. Los trabajadores laboran bajo sol intenso, sin agua potable, sin equipos de protección y durmiendo en cambuches improvisados. ¿Qué aspecto ESG (Ambiental, Social y Gobernanza) está incumpliendo la empresa?`,
    tipo: "opcion_multiple",
    opciones: [
      { id: "a", texto: "Solo el aspecto Ambiental (E), porque los paneles solares podrían afectar la fauna local" },
      { id: "b", texto: "Solo el aspecto de Gobernanza (G), porque la empresa no tiene junta directiva" },
      { id: "c", texto: "El aspecto Social (S), porque está vulnerando los derechos laborales, la salud y la seguridad de sus trabajadores" },
      { id: "d", texto: "Ninguno, porque la energía solar es limpia y cualquier proyecto renovable es automáticamente ESG" }
    ],
    respuestaCorrecta: "c",
    explicacion: "La 'S' de ESG se refiere a las responsabilidades sociales: condiciones laborales dignas, salud ocupacional, seguridad industrial y derechos humanos. Que un proyecto sea de energía limpia (E) no lo exime de cumplir con condiciones laborales justas (S). Los estándares ESG evalúan las tres dimensiones de forma independiente."
  },

  // ======================================================
  // FASE 5 — EXPLOTACIÓN PETROLERA (TODOS ESCENARIOS NUEVOS)
  // ======================================================

  19: {
    id: 19, fase: 5,
    enunciado: `ESCENARIO DE VIABILIDAD: Se descubre el "Campo Aurora" en los Llanos Orientales con estos datos:\n\n• Reservas probadas: 12 MMBBL\n• Profundidad: 2.800 m\n• Gravedad API: 22° (crudo mediano-pesado)\n• Precio WTI actual: USD 70/bbl\n• Costo de producción estimado: USD 55/bbl\n• Inversión requerida: USD 250 millones\n• Margen operativo: USD 15/bbl\n\n¿Cuál es la conclusión sobre la viabilidad económica?`,
    tipo: "opcion_multiple",
    opciones: [
      { id: "a", texto: "Altamente viable – Con 12 MMBBL y margen de USD 15/bbl, el proyecto se paga rápidamente" },
      { id: "b", texto: "Riesgoso – El ingreso bruto sería 12M × USD 15 = USD 180M, que NO cubre la inversión de USD 250M. El proyecto no es viable a estos precios" },
      { id: "c", texto: "Viable si se duplica la producción diaria, independientemente de las reservas" },
      { id: "d", texto: "No es posible determinar la viabilidad sin conocer el tipo de roca del yacimiento" }
    ],
    respuestaCorrecta: "b",
    explicacion: "El ingreso neto operativo sería 12M bbl × USD 15/bbl = USD 180M, insuficiente para recuperar la inversión de USD 250M. El proyecto destruiría valor. Para ser viable necesitaría más reservas, menor costo de producción o mayor precio del crudo. Este análisis es un VPN negativo básico."
  },

  20: {
    id: 20, fase: 5,
    enunciado: `ESCENARIO DE PRODUCCIÓN: El "Campo Jaguar" produce crudo extrapesado de 8° API con alta viscosidad. El crudo es tan espeso que prácticamente no fluye a temperatura ambiente. El yacimiento es somero (800 m). ¿Cuál tecnología de recuperación es la más adecuada para este tipo de crudo?\n`,
    tipo: "opcion_multiple",
    opciones: [
      { id: "a", texto: "Inyección de agua fría (waterflood convencional)" },
      { id: "b", texto: "Inyección de vapor o SAGD (drenaje por gravedad asistido con vapor) para calentar el crudo y reducir su viscosidad" },
      { id: "c", texto: "Inyección de CO₂ miscible a alta presión" },
      { id: "d", texto: "Bombeo mecánico convencional sin ningún tratamiento térmico" }
    ],
    respuestaCorrecta: "b",
    explicacion: "Para crudos extrapesados (8° API) con alta viscosidad, los métodos térmicos son esenciales. La inyección de vapor o SAGD calienta el crudo, reduce dramáticamente su viscosidad y permite que fluya por gravedad. El agua fría no reduce la viscosidad. El CO₂ miscible funciona para crudos livianos. El bombeo solo no resuelve la viscosidad extrema."
  },

  21: {
    id: 21, fase: 5,
    enunciado: `ESCENARIO AMBIENTAL: Una empresa opera un campo petrolero cerca del Parque Nacional Natural Serranía de la Macarena. Durante una operación de mantenimiento, se produce un derrame de 500 barriles de crudo que alcanza un arroyo tributario del río Guayabero. ¿Cuál debe ser la secuencia CORRECTA de respuesta ante el derrame?`,
    tipo: "opcion_multiple",
    opciones: [
      { id: "a", texto: "Reportar a la ANLA → Esperar instrucciones → Iniciar limpieza cuando se apruebe el plan" },
      { id: "b", texto: "Activar plan de contingencia inmediatamente → Contener el derrame con barreras → Notificar a autoridades (ANLA, Corporación Ambiental) → Remediar el área afectada → Monitorear impactos" },
      { id: "c", texto: "Intentar quemar el crudo derramado para eliminarlo rápidamente antes de que las autoridades se enteren" },
      { id: "d", texto: "Diluir el crudo con agua del río para que se disperse naturalmente y no sea visible" }
    ],
    respuestaCorrecta: "b",
    explicacion: "La secuencia correcta según los protocolos del Plan Nacional de Contingencias es: (1) Activar el plan inmediatamente, (2) Contener con barreras absorbentes y de contención, (3) Notificar a ANLA y autoridad ambiental regional, (4) Remediar suelos y aguas, (5) Monitorear hasta verificar recuperación. Quemar o diluir son ilegales y agravan el daño."
  },

  22: {
    id: 22, fase: 5,
    enunciado: `ESCENARIO ESTRATÉGICO: Colombia firmó el Acuerdo de París comprometiéndose a reducir 51% de emisiones de gases de efecto invernadero para 2030. Al mismo tiempo, los ingresos por exportación de petróleo y carbón representan cerca del 40% de las exportaciones del país.\n\n¿Cuál estrategia de transición energética es la más realista para Colombia?`,
    tipo: "opcion_multiple",
    opciones: [
      { id: "a", texto: "Prohibir inmediatamente toda la exploración y producción de petróleo y carbón para cumplir el Acuerdo de París" },
      { id: "b", texto: "Ignorar el Acuerdo de París y maximizar la producción de petróleo y carbón para aumentar ingresos" },
      { id: "c", texto: "Transición gradual: mantener producción actual de hidrocarburos mientras se invierte masivamente en renovables, diversificación económica y eficiencia energética, reduciendo progresivamente la dependencia de combustibles fósiles" },
      { id: "d", texto: "Exportar todo el petróleo y carbón sin consumirlo internamente, así las emisiones se contabilizarían en los países que lo compren" }
    ],
    respuestaCorrecta: "c",
    explicacion: "La transición energética debe ser gradual y justa. Prohibir inmediatamente el petróleo colapsaría la economía (40% de exportaciones). Ignorar el acuerdo genera sanciones y pierde inversión ESG. La estrategia correcta es una transición ordenada: mantener ingresos petroleros mientras se desarrolla capacidad renovable y se diversifica la economía."
  }
};
