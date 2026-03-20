// ============================================================
// BANCO DE PREGUNTAS – VERSIÓN B (Grupo B / Diurnos)
// 25 preguntas × 0.20 pts = 5.0 puntos | 5 fases × 5 preguntas
// Preguntas intercaladas: mezcla de pool B y pool A
// ============================================================

const PREGUNTAS_B = {

  // ══════════════ FASE 1 — GAS NATURAL ══════════════

  1: { id:1, fase:1,
    enunciado: "El gas natural crudo extraído del pozo contiene una mezcla de hidrocarburos y contaminantes. ¿Cuál es la composición principal del gas natural comercial después de ser procesado?",
    tipo: "opcion_multiple",
    opciones: [
      { id:"a", texto:"Principalmente propano y butano con trazas de metano" },
      { id:"b", texto:"Una mezcla equitativa de metano, etano, propano y butano" },
      { id:"c", texto:"Principalmente metano (CH₄), con pequeñas cantidades de etano y propano" },
      { id:"d", texto:"Principalmente hidrógeno y nitrógeno con algo de metano" }
    ],
    respuestaCorrecta: "c",
    explicacion: "El gas natural comercial está compuesto principalmente por metano (CH₄) en un 85-95%."
  },

  2: { id:2, fase:1,
    enunciado: "Una empresa encontró gas natural en un yacimiento donde también se extrae petróleo crudo. El gas sale mezclado con el líquido. ¿Cómo se clasifica este tipo de gas y cuál es su principal característica?",
    tipo: "opcion_multiple",
    opciones: [
      { id:"a", texto:"Gas libre" },
      { id:"b", texto:"Gas asociado" },
      { id:"c", texto:"Gas no convencional" },
      { id:"d", texto:"Gas sintético" }
    ],
    respuestaCorrecta: "b",
    explicacion: "El gas asociado está disuelto o en contacto con el petróleo crudo en el yacimiento."
  },

  3: { id:3, fase:1,
    enunciado: "Colombia transporta gas natural licuado (GNL) desde plantas de regasificación en la costa. ¿A qué temperatura aproximada se debe enfriar el gas natural para convertirlo en líquido y reducir su volumen unas 600 veces?",
    tipo: "opcion_multiple",
    opciones: [
      { id:"a", texto:"A -42°C, que es el punto de ebullición del propano" },
      { id:"b", texto:"A 0°C, el punto de congelación del agua" },
      { id:"c", texto:"A -162°C, el punto de ebullición del metano a presión atmosférica" },
      { id:"d", texto:"A -78°C, que es la temperatura del hielo seco (CO₂ sólido)" }
    ],
    respuestaCorrecta: "c",
    explicacion: "Para licuar el gas natural se enfría a aproximadamente -162°C, reduciendo su volumen unas 600 veces."
  },

  4: { id:4, fase:1,
    enunciado: "¿Cuál es el orden correcto de las etapas en la cadena de valor del gas natural, desde su origen hasta el usuario final?",
    tipo: "opcion_multiple",
    opciones: [
      { id:"a", texto:"Producción → Exploración → Transporte → Tratamiento → Distribución → Comercialización" },
      { id:"b", texto:"Tratamiento → Exploración → Producción → Transporte → Comercialización → Distribución" },
      { id:"c", texto:"Exploración → Transporte → Producción → Distribución → Tratamiento → Comercialización" },
      { id:"d", texto:"Exploración → Producción → Tratamiento → Transporte → Distribución → Comercialización" }
    ],
    respuestaCorrecta: "d",
    explicacion: "Exploración → Producción → Tratamiento → Transporte → Distribución → Comercialización."
  },

  5: { id:5, fase:1,
    enunciado: "Colombia debe transportar gas natural desde los campos productores del Caribe hacia las ciudades del interior del país ubicadas a más de 1.200 km. ¿Cuál modalidad de transporte es la más adecuada?",
    tipo: "opcion_multiple",
    opciones: [
      { id:"a", texto:"GNL (Gas Natural Licuado) en buques metaneros" },
      { id:"b", texto:"GNC (Gas Natural Comprimido) en cilindros" },
      { id:"c", texto:"Gasoducto de alta presión (entre 300 y 1.500 PSI)" },
      { id:"d", texto:"Gas sintético vehicular (GSV) en camiones cisterna" }
    ],
    respuestaCorrecta: "c",
    explicacion: "El gasoducto de alta presión es la solución más eficiente para transporte terrestre de largo alcance."
  },

  // ══════════════ FASE 2 — PETRÓLEO ══════════════

  6: { id:6, fase:2,
    enunciado: "Una compañía petrolera opera en tres segmentos: busca yacimientos y extrae crudo, lo transporta por oleoductos, y finalmente lo refina para vender gasolina. ¿Cómo se clasifican estos tres segmentos?",
    tipo: "opcion_multiple",
    opciones: [
      { id:"a", texto:"Primario, Secundario y Terciario" },
      { id:"b", texto:"Exploración, Transporte y Venta" },
      { id:"c", texto:"Upstream (exploración y producción), Midstream (transporte), Downstream (refinación y venta)" },
      { id:"d", texto:"Extracción, Procesamiento y Distribución al por menor" }
    ],
    respuestaCorrecta: "c",
    explicacion: "Upstream = E&P, Midstream = transporte y almacenamiento, Downstream = refinación y comercialización."
  },

  7: { id:7, fase:2,
    enunciado: "Un ingeniero recibe dos muestras de crudo: una de 10° API y otra de 40° API. ¿Qué puede concluir sobre las propiedades físicas y el valor comercial?",
    tipo: "opcion_multiple",
    opciones: [
      { id:"a", texto:"Ambas tienen la misma densidad, la gravedad API solo indica el color" },
      { id:"b", texto:"El crudo de 10° API es más liviano y vale más" },
      { id:"c", texto:"El crudo de 40° API es más liviano, fluye mejor y tiene mayor valor comercial" },
      { id:"d", texto:"La gravedad API mide la acidez del crudo, no su densidad" }
    ],
    respuestaCorrecta: "c",
    explicacion: "Mayor API = más ligero = mayor valor. 40° API es liviano; 10° API es pesado/extrapesado."
  },

  8: { id:8, fase:2,
    enunciado: "En la refinería de Barrancabermeja, el crudo entra a una torre de destilación atmosférica. ¿Qué principio físico-químico permite separar los diferentes derivados del petróleo?",
    tipo: "opcion_multiple",
    opciones: [
      { id:"a", texto:"Diferencias en punto de ebullición de los hidrocarburos" },
      { id:"b", texto:"Diferencias en densidad" },
      { id:"c", texto:"Diferencias en solubilidad" },
      { id:"d", texto:"Diferencias en tamaño molecular" }
    ],
    respuestaCorrecta: "a",
    explicacion: "La destilación fraccionada aprovecha las diferencias de puntos de ebullición. Los más livianos suben, los más pesados quedan abajo."
  },

  9: { id:9, fase:2,
    enunciado: "La refinería de Barrancabermeja necesita producir más gasolina de la que obtiene por destilación directa. ¿Cuál proceso permite TRANSFORMAR fracciones pesadas en fracciones más livianas como gasolina?",
    tipo: "opcion_multiple",
    opciones: [
      { id:"a", texto:"Destilación al vacío" },
      { id:"b", texto:"Mezcla con solventes (blending)" },
      { id:"c", texto:"Cracking (rompimiento de moléculas grandes en moléculas más pequeñas)" },
      { id:"d", texto:"Filtración molecular" }
    ],
    respuestaCorrecta: "c",
    explicacion: "El cracking rompe moléculas grandes y pesadas en moléculas más pequeñas y valiosas. La destilación solo separa, no transforma."
  },

  10: { id:10, fase:2,
    enunciado: "Un ingeniero debe identificar los principales derivados del petróleo y su uso. ¿Cuál de las siguientes relaciones entre derivado y aplicación es INCORRECTA?",
    tipo: "opcion_multiple",
    opciones: [
      { id:"a", texto:"GLP (propano/butano) → Combustible doméstico e industrial" },
      { id:"b", texto:"Asfalto (residuo de vacío) → Pavimentación de carreteras" },
      { id:"c", texto:"Nafta petroquímica → Plásticos, resinas y fibras sintéticas" },
      { id:"d", texto:"Queroseno (Jet A-1) → Combustible de aviación" }
    ],
    respuestaCorrecta: "c",
    explicacion: "La nafta se usa principalmente como gasolina. La materia prima petroquímica directa son los gases del craqueo (etileno, propileno)."
  },

  // ══════════════ FASE 3 — PROCESOS TÉCNICOS ══════════════

  11: { id:11, fase:3,
    enunciado: "Observe el diagrama de la torre de perforación. Durante la perforación, se bombea un fluido especial llamado 'lodo de perforación'. ¿Cuáles son las funciones principales de este lodo?",
    tipo: "opcion_multiple", grafico: "perforacion",
    opciones: [
      { id:"a", texto:"Solo sirve para enfriar la broca y no tiene otra función relevante" },
      { id:"b", texto:"Enfriar y lubricar la broca, transportar los recortes de roca (ripios) a superficie, mantener la presión del pozo y estabilizar las paredes" },
      { id:"c", texto:"Disolver la roca del subsuelo químicamente para facilitar la perforación" },
      { id:"d", texto:"Generar energía eléctrica para los motores de la torre" }
    ],
    respuestaCorrecta: "b",
    explicacion: "El lodo enfría la broca, transporta ripios a superficie, ejerce presión hidrostática para control y estabiliza las paredes del pozo."
  },

  12: { id:12, fase:3,
    enunciado: "En el diagrama del separador trifásico horizontal, el fluido de pozo entra por la entrada. ¿Cuál es el principio físico que permite la separación y en qué orden salen los fluidos?",
    tipo: "opcion_multiple", grafico: "separador",
    opciones: [
      { id:"a", texto:"Temperatura diferencial – Gas caliente arriba, agua tibia al medio, crudo frío abajo" },
      { id:"b", texto:"Diferencia de densidades y gravedad – Gas arriba, crudo en el medio, agua por el fondo" },
      { id:"c", texto:"Presión diferencial – El componente de mayor presión se separa primero" },
      { id:"d", texto:"Solubilidad – El gas se disuelve en el agua, el crudo flota" }
    ],
    respuestaCorrecta: "b",
    explicacion: "El separador aprovecha diferencia de densidades: gas sube (más liviano), crudo queda en el medio, agua baja (más densa)."
  },

  13: { id:13, fase:3,
    enunciado: "Observe el diagrama de exploración sísmica de reflexión. ¿Cuál es el propósito de los geófonos (receptores) dispuestos en superficie?",
    tipo: "opcion_multiple", grafico: "exploracion",
    opciones: [
      { id:"a", texto:"Medir la temperatura del subsuelo para estimar la madurez térmica" },
      { id:"b", texto:"Registrar el tiempo de llegada de las ondas sísmicas reflejadas en las interfaces geológicas para construir un modelo del subsuelo" },
      { id:"c", texto:"Detectar la presencia de hidrocarburos directamente mediante análisis geoquímico" },
      { id:"d", texto:"Medir la permeabilidad y porosidad mediante la resistencia eléctrica del suelo" }
    ],
    respuestaCorrecta: "b",
    explicacion: "Los geófonos registran ondas reflejadas. El tiempo de llegada permite calcular la profundidad y construir imagen sísmica 2D/3D."
  },

  14: { id:14, fase:3,
    enunciado: "Al finalizar la perforación de un pozo y confirmar la presencia de hidrocarburos, se instala en la boca del pozo un conjunto de válvulas que permite controlar el flujo de petróleo y gas. Este equipo es conocido como:",
    tipo: "opcion_multiple",
    opciones: [
      { id:"a", texto:"Torre de enfriamiento" },
      { id:"b", texto:"Árbol de navidad (Christmas Tree)" },
      { id:"c", texto:"Compresor de gas" },
      { id:"d", texto:"Tanque de almacenamiento" }
    ],
    respuestaCorrecta: "b",
    explicacion: "El árbol de navidad es el conjunto de válvulas en la cabeza del pozo para controlar el flujo de producción."
  },

  15: { id:15, fase:3,
    enunciado: "Un pozo petrolero que inicialmente producía crudo por flujo natural deja de hacerlo después de varios años porque la presión del yacimiento ha disminuido. ¿Cuál es la función principal de los sistemas de levantamiento artificial?",
    tipo: "opcion_multiple",
    opciones: [
      { id:"a", texto:"Aumentar la presión del yacimiento inyectando fluidos desde la superficie" },
      { id:"b", texto:"Separar el gas, el agua y el petróleo directamente dentro del pozo" },
      { id:"c", texto:"Calentar el crudo en el fondo para reducir su viscosidad" },
      { id:"d", texto:"Proporcionar energía adicional para llevar el crudo desde el fondo del pozo hasta la superficie" }
    ],
    respuestaCorrecta: "d",
    explicacion: "Los sistemas de levantamiento artificial suministran energía adicional al fluido para transportarlo a superficie cuando la presión natural ya no alcanza."
  },

  // ══════════════ FASE 4 — ENERGÍAS RENOVABLES ══════════════

  16: { id:16, fase:4,
    enunciado: `ESCENARIO: La comunidad Wayúu en Manaure (La Guajira) no tiene acceso a la red eléctrica. Condiciones:\n\n• 2.500 personas en rancherías dispersas\n• Irradiación: 6.0 kWh/m²/día\n• No hay ríos ni fuentes hídricas\n• Presupuesto: USD 1.5 millones\n\n¿Cuál solución energética es la más adecuada?`,
    tipo: "opcion_multiple",
    opciones: [
      { id:"a", texto:"Extender la red eléctrica nacional desde Riohacha (a 90 km)" },
      { id:"b", texto:"Instalar planta termoeléctrica a diésel" },
      { id:"c", texto:"Sistemas solares fotovoltaicos individuales con baterías para cada ranchería + bombeo solar comunitario" },
      { id:"d", texto:"Pequeña central hidroeléctrica aprovechando lluvias estacionales" }
    ],
    respuestaCorrecta: "c",
    explicacion: "Para comunidades dispersas sin red, los sistemas FV individuales con baterías son la solución más costo-efectiva en zona de alta irradiación."
  },

  17: { id:17, fase:4,
    enunciado: `ESCENARIO: Se evalúan dos proyectos para Boyacá:\n\nOPCIÓN A – Planta Solar FV (10 MW): Inversión USD 8M, LCOE USD 45/MWh, Factor cap. 18%\nOPCIÓN B – Parque Eólico (10 MW): Inversión USD 14M, LCOE USD 62/MWh, Factor cap. 28%\n\n¿Cuál seleccionar y con qué criterio?`,
    tipo: "opcion_multiple",
    opciones: [
      { id:"a", texto:"Eólica – Mayor factor de capacidad (28% vs 18%)" },
      { id:"b", texto:"Solar – Menor inversión (USD 8M) y menor LCOE (USD 45 vs 62/MWh), más rentable" },
      { id:"c", texto:"Ninguna – Boyacá tiene alto potencial hidráulico que supera ambas" },
      { id:"d", texto:"Solar pero solo si no hay conexión a red eléctrica" }
    ],
    respuestaCorrecta: "b",
    explicacion: "La Solar FV tiene menor LCOE y menor inversión, haciéndola más rentable y con menor riesgo financiero."
  },

  18: { id:18, fase:4,
    enunciado: `ESCENARIO ESG: Una empresa de energía solar contrata trabajadores para instalar 10.000 paneles en el Meta. Los trabajadores laboran sin agua potable, sin EPP y en cambuches. ¿Qué aspecto ESG incumple?`,
    tipo: "opcion_multiple",
    opciones: [
      { id:"a", texto:"Solo Ambiental (E), porque los paneles podrían afectar fauna" },
      { id:"b", texto:"Solo Gobernanza (G), la empresa no tiene junta directiva" },
      { id:"c", texto:"Social (S): vulnera derechos laborales, salud y seguridad" },
      { id:"d", texto:"Ninguno, la energía solar es limpia y automáticamente ESG" }
    ],
    respuestaCorrecta: "c",
    explicacion: "La 'S' de ESG incluye condiciones laborales dignas. Ser renovable no exime de cumplir derechos laborales."
  },

  19: { id:19, fase:4,
    enunciado: `ESCENARIO: El Valle del Cauca produce 25 millones de toneladas de caña de azúcar al año. Los ingenios generan grandes cantidades de bagazo (residuo fibroso). Se propone construir una planta de cogeneración (50 MW) usando bagazo como combustible.\n\n¿Cuál es la principal ventaja de este proyecto frente a una planta solar de igual capacidad?`,
    tipo: "opcion_multiple",
    opciones: [
      { id:"a", texto:"El bagazo es más eficiente que los paneles solares en conversión de energía" },
      { id:"b", texto:"La biomasa de bagazo puede generar electricidad 24 horas (no depende del sol) y aprovecha un residuo que de otro modo se desperdiciaría o quemaría sin control" },
      { id:"c", texto:"Las plantas de biomasa son más baratas que los paneles solares" },
      { id:"d", texto:"El bagazo no produce emisiones de CO₂ al quemarse porque es un material vegetal" }
    ],
    respuestaCorrecta: "b",
    explicacion: "La cogeneración con bagazo genera 24/7 (no intermitente como solar), aprovecha un residuo abundante y reduce la disposición de desechos. Aunque sí emite CO₂, se considera carbono neutro porque la caña absorbió ese CO₂ al crecer."
  },

  20: { id:20, fase:4,
    enunciado: `ESCENARIO ESG: Una empresa quiere instalar 50 MW de energía solar en el Cesar. La comunidad indígena Yukpa habita en la zona de influencia. La ANLA exige consulta previa. ¿Decisión correcta bajo criterios ESG?`,
    tipo: "opcion_multiple",
    opciones: [
      { id:"a", texto:"Avanzar sin consulta previa, la solar no genera impacto ambiental" },
      { id:"b", texto:"Reubicar en zona sin comunidades indígenas" },
      { id:"c", texto:"Realizar consulta previa libre e informada, incorporar observaciones y beneficios compartidos" },
      { id:"d", texto:"Pagar compensación económica individual a líderes" }
    ],
    respuestaCorrecta: "c",
    explicacion: "La consulta previa es un derecho fundamental (Convenio 169 OIT). Evadir genera riesgo legal y reputacional."
  },

  // ══════════════ FASE 5 — EXPLOTACIÓN PETROLERA ══════════════

  21: { id:21, fase:5,
    enunciado: `ESCENARIO: Se descubre el "Campo Aurora" en los Llanos Orientales:\n\n• Reservas: 12 MMBBL\n• API: 22°\n• Precio WTI: USD 70/bbl\n• Costo producción: USD 55/bbl\n• Inversión: USD 250 millones\n• Margen operativo: USD 15/bbl\n\n¿Cuál es la conclusión de viabilidad?`,
    tipo: "opcion_multiple",
    opciones: [
      { id:"a", texto:"Altamente viable – Con 12 MMBBL se recupera la inversión" },
      { id:"b", texto:"Riesgoso – Ingreso neto 12M × USD 15 = USD 180M, que NO cubre la inversión de USD 250M" },
      { id:"c", texto:"Viable si se duplica la producción diaria" },
      { id:"d", texto:"No se puede determinar sin conocer el tipo de roca" }
    ],
    respuestaCorrecta: "b",
    explicacion: "Ingreso neto = 12M × USD 15 = USD 180M < inversión USD 250M. Proyecto destruye valor. VPN negativo."
  },

  22: { id:22, fase:5,
    enunciado: `ESCENARIO: El "Campo Venado" lleva 15 años en producción:\n\n• Factor de recobro primario: 22%\n• Presión actual: 850 PSI (era 2.400 PSI)\n• Crudo: 35° API, viscosidad baja\n• Mecanismo original: expansión de gas disuelto\n\n¿Cuál método de recuperación es el más adecuado?`,
    tipo: "opcion_multiple",
    opciones: [
      { id:"a", texto:"Inyección de vapor (térmica) – Para crudos pesados" },
      { id:"b", texto:"Inyección de agua (waterflood) – Restaura la presión y desplaza el crudo residual" },
      { id:"c", texto:"Inyección de polímeros – Para crudos muy viscosos" },
      { id:"d", texto:"SAGD – Para crudos extrapesados en yacimientos someros" }
    ],
    respuestaCorrecta: "b",
    explicacion: "Para crudo liviano (35° API) con presión depleta, el waterflood restaura presión y lleva recobro de 22% a 35-45%."
  },

  23: { id:23, fase:5,
    enunciado: `ESCENARIO AMBIENTAL: Una empresa opera un campo cerca del Parque Serranía de la Macarena. Se produce un derrame de 500 barriles que alcanza un arroyo. ¿Secuencia CORRECTA de respuesta?`,
    tipo: "opcion_multiple",
    opciones: [
      { id:"a", texto:"Reportar a ANLA → Esperar instrucciones" },
      { id:"b", texto:"Activar plan de contingencia → Contener → Notificar autoridades → Remediar → Monitorear" },
      { id:"c", texto:"Quemar el crudo para eliminarlo rápidamente" },
      { id:"d", texto:"Diluir con agua del río para que se disperse" }
    ],
    respuestaCorrecta: "b",
    explicacion: "Secuencia correcta: activar plan, contener, notificar, remediar y monitorear."
  },

  24: { id:24, fase:5,
    enunciado: `ESCENARIO: Colombia genera 70% de electricidad de hidroeléctricas. Durante El Niño embalses bajan a <30%. Déficit 3.500 MW.\n\n¿Cuál proyecto de diversificación reduce la dependencia hidroeléctrica?`,
    tipo: "opcion_multiple",
    opciones: [
      { id:"a", texto:"Más represas menores (PCH) en ríos secundarios" },
      { id:"b", texto:"Parques eólicos (2.000 MW) + granjas solares (1.500 MW) + baterías a gran escala" },
      { id:"c", texto:"Centrales termoeléctricas a carbón" },
      { id:"d", texto:"Importar electricidad de Ecuador y Venezuela" }
    ],
    respuestaCorrecta: "b",
    explicacion: "Eólica+solar+baterías: viento sopla más en sequía (complementa hidráulica), baterías cubren intermitencia. PCH no resuelve dependencia hídrica."
  },

  25: { id:25, fase:5,
    enunciado: `ESCENARIO ESTRATÉGICO: Colombia firmó el Acuerdo de París (reducir 51% emisiones para 2030). Pero el petróleo y carbón representan 40% de exportaciones.\n\n¿Cuál estrategia de transición energética es más realista?`,
    tipo: "opcion_multiple",
    opciones: [
      { id:"a", texto:"Prohibir inmediatamente toda exploración y producción de petróleo y carbón" },
      { id:"b", texto:"Ignorar el Acuerdo de París y maximizar producción de fósiles" },
      { id:"c", texto:"Transición gradual: mantener producción actual mientras se invierte en renovables, diversificación económica y eficiencia energética" },
      { id:"d", texto:"Exportar todo el petróleo y carbón, así las emisiones se contabilizan en los compradores" }
    ],
    respuestaCorrecta: "c",
    explicacion: "Transición gradual y justa: mantener ingresos petroleros mientras se desarrolla capacidad renovable y se diversifica la economía."
  }
};
