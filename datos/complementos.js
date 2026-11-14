/*
 * El estudio del arquitecto · examen, glosario, Mesa de dibujo y Sala del tribunal
 */
window.EXAMEN = [
  { q: "Para el manual de Ramírez García, Jurado y Ruiz, la programación es, ante todo…", o: ["un instrumento que concreta el currículo para un aula y evita la improvisación", "un documento administrativo que el centro remite a la inspección cada curso", "la relación de temas del libro de texto distribuidos por trimestres"], c: 0, e: "Concreta el currículo para un grupo determinado.", est: "e1" },
  { q: "¿Qué fuente del currículo atiende al desarrollo evolutivo del alumnado?", o: ["La sociológica", "La psicológica", "La epistemológica"], c: 1, e: "La sociológica atiende al contexto; la epistemológica, a la disciplina.", est: "e1" },
  { q: "En una oposición en Canarias, una programación no contextualizada en un centro público de la Consejería…", o: ["se penaliza con dos décimas por apartado afectado", "se califica igual si cumple el resto de requisitos formales", "se califica con cero, según la convocatoria de 2026"], c: 2, e: "Anexo IV de la convocatoria (BOC n.º 58, de 25 de marzo de 2026); compruébalo en cada convocatoria.", est: "e1" },
  { q: "Las competencias específicas, según el Real Decreto 157/2022…", o: ["conectan el Perfil de salida con los saberes básicos y los criterios", "sustituyen a los objetivos de etapa como logros esperados al final", "son comunes a todas las áreas y se evalúan de forma conjunta"], c: 0, e: "Son el puente entre el Perfil de salida y el área.", est: "e2" },
  { q: "¿Cuántos criterios de evaluación tiene Conocimiento del Medio en cada ciclo en Canarias?", o: ["Nueve, uno por cada competencia específica del área", "Veinticuatro, repartidos entre nueve competencias", "Dieciocho, dos por cada una de las nueve competencias"], c: 1, e: "Nueve competencias específicas y veinticuatro criterios.", est: "e2" },
  { q: "Un criterio de evaluación de Primaria es «finalista para el ciclo». Eso significa que…", o: ["solo se trabaja y se evalúa en el último curso del ciclo", "se trabaja en el primer curso y se evalúa en el segundo curso", "el alumnado dispone de los dos cursos del ciclo para alcanzarlo"], c: 2, e: "Aunque se trabaja y evalúa en ambos niveles.", est: "e2" },
  { q: "En el criterio 7.1 del segundo ciclo, «para comunicarlos» expresa…", o: ["la finalidad", "el proceso", "el saber básico"], c: 0, e: "Responde a «para qué».", est: "e3" },
  { q: "¿Qué propone el diseño inverso de Wiggins y McTighe?", o: ["Empezar por las actividades y comprobar después qué criterios cubren", "Partir de los resultados y de las evidencias antes de planificar actividades", "Evaluar primero al alumnado y diseñar a partir de sus errores"], c: 1, e: "Resultados deseados, evidencias y experiencias de aprendizaje.", est: "e3" },
  { q: "¿Qué debe garantizar la secuenciación del curso en Canarias?", o: ["Que cada criterio aparezca en una única situación de aprendizaje", "Que se siga el orden del currículo publicado en el BOC", "Que todos los criterios del ciclo se trabajen en el curso"], c: 2, e: "Pueden repetirse, profundizando, en varias situaciones.", est: "e4" },
  { q: "Relacionar en una misma situación Ciencias Sociales y Matemáticas es un ejemplo de…", o: ["interdisciplinariedad", "intradisciplinariedad", "transversalidad"], c: 0, e: "Integra saberes de áreas distintas.", est: "e4" },
  { q: "¿Qué distingue una tarea de un ejercicio?", o: ["La tarea siempre se hace en grupo y el ejercicio, de forma individual y en silencio", "La tarea resuelve una situación real con un producto; el ejercicio tiene respuesta prefijada", "La tarea se califica con una rúbrica y el ejercicio, con una prueba escrita final"], c: 1, e: "Distinción que el manual toma de una guía del CNIIE.", est: "e5" },
  { q: "¿Qué principio del DUA se aplica al ofrecer una fuente en texto, audio y lectura fácil?", o: ["Implicación", "Acción y expresión", "Representación"], c: 2, e: "Son formas distintas de acceder a la información.", est: "e6" },
  { q: "Según las instrucciones de Canarias de 2026-2027, los criterios de calificación no pueden incluir…", o: ["la asistencia, la puntualidad, el trabajo diario o la actitud", "las evidencias recogidas con herramientas propias del docente", "las valoraciones obtenidas mediante autoevaluación"], c: 0, e: "Solo lo descrito en los criterios de evaluación.", est: "e7" },
  { q: "Si un aprendizaje obtiene valoraciones distintas en varios instrumentos, el profesorado puede elegir…", o: ["la media de todas, siempre que sean al menos tres", "la más alta, la más repetida o la última", "la obtenida en la prueba escrita"], c: 1, e: "No se calcula: se decide con criterio profesional.", est: "e7" }
];

window.GLOSARIO = [
  { t: "Acción tutorial", d: "Acompañamiento del alumnado y coordinación con familias y equipo docente.", e: "e6" },
  { t: "Adaptación curricular", d: "Ajuste del currículo para alumnado con NEAE a partir de los criterios de su referente curricular.", e: "e6" },
  { t: "Alineamiento constructivo", d: "Coherencia entre resultados esperados, actividades y evaluación (Biggs, 1996).", e: "e3" },
  { t: "Bloque competencial", d: "Competencia específica, descriptores, criterios y explicación del bloque en el currículo canario.", e: "e2" },
  { t: "Calificador", d: "Término oficial de calificación (Insuficiente a Sobresaliente en las áreas de Primaria).", e: "e7" },
  { t: "Competencias clave", d: "Ocho desempeños imprescindibles recogidos en el Perfil de salida.", e: "e2" },
  { t: "Concurso-oposición", d: "Sistema de ingreso en la función pública docente: fase de oposición (dos pruebas) y fase de concurso de méritos.", e: "e1" },
  { t: "Contextualización", d: "Ajuste de la programación a un centro, un entorno y un grupo reales.", e: "e1" },
  { t: "Criterios de calificación", d: "Procedimientos acordados para convertir evidencias en la calificación de cada criterio.", e: "e7" },
  { t: "Descriptor operativo", d: "Nivel de desempeño de una competencia clave al final de la etapa.", e: "e2" },
  { t: "Diseño inverso", d: "Planificar desde los resultados y las evidencias hacia las actividades.", e: "e3" },
  { t: "DUA", d: "Diseño Universal para el Aprendizaje: implicación, representación y acción y expresión.", e: "e6" },
  { t: "Escenario no presencial", d: "Adaptación prevista de actividades e instrumentos a la enseñanza telemática.", e: "e6" },
  { t: "Estándar de aprendizaje evaluable", d: "Elemento curricular de la LOMCE, hoy derogado, que concretaba los criterios.", e: "e2" },
  { t: "Evaluación formativa", d: "Uso de la información de la evaluación para mejorar el aprendizaje mientras ocurre.", e: "e7" },
  { t: "Explicación del bloque competencial", d: "Texto del currículo canario que orienta el diseño de situaciones de aprendizaje.", e: "e2" },
  { t: "Fuentes del currículo", d: "Epistemológica, psicológica, pedagógica y sociológica.", e: "e1" },
  { t: "Hilo conductor", d: "Relato o personaje que da unidad a la programación.", e: "e4" },
  { t: "Instrumento de evaluación", d: "Soporte o producción que recoge evidencias de aprendizaje.", e: "e7" },
  { t: "Mapa de interrelación curricular", d: "Tabla que relaciona objetivos, descriptores, competencias, criterios y saberes.", e: "e4" },
  { t: "Medida ordinaria", d: "Respuesta a la diversidad dirigida a todo el grupo.", e: "e6" },
  { t: "Niveles de concreción", d: "Del Estado a la comunidad autónoma, al centro, a la programación y al aula.", e: "e1" },
  { t: "Perfil de salida", d: "Competencias clave esperadas al final de la etapa, con sus descriptores.", e: "e2" },
  { t: "Producto final", d: "Resultado comunicable de una situación de aprendizaje que permite observar evidencias.", e: "e5" },
  { t: "Rúbrica LOMLOE Canarias", d: "Herramienta oficial de niveles de logro por criterio.", e: "e7" },
  { t: "Saberes básicos", d: "Conocimientos, destrezas y actitudes de un área.", e: "e2" },
  { t: "Secuenciación", d: "Orden de las situaciones de aprendizaje a lo largo del curso.", e: "e4" },
  { t: "Situación de aprendizaje", d: "Situaciones y actividades que despliegan actuaciones asociadas a competencias clave y específicas.", e: "e5" },
  { t: "Taxonomía revisada de Bloom", d: "Procesos cognitivos de recordar a crear, cruzados con tipos de conocimiento.", e: "e3" },
  { t: "Transferencia", d: "Aplicar lo aprendido a contextos nuevos y cercanos.", e: "e5" }
];

/* Mesa de dibujo: borrador de situación de aprendizaje de Ciencias Sociales */
window.DISENO = {
  ciclos: {
    c1: { nombre: "1.er ciclo (1.º-2.º)", escala: "la familia, la clase, el barrio y el municipio", agrupamiento: "parejas y pequeños grupos con roles sencillos y apoyo visual" },
    c2: { nombre: "2.º ciclo (3.º-4.º)", escala: "el municipio y la isla, en relación con la Prehistoria y la Edad Antigua", agrupamiento: "grupos cooperativos de cuatro con roles rotativos" },
    c3: { nombre: "3.er ciclo (5.º-6.º)", escala: "Canarias, España y Europa, de la Edad Media a la actualidad", agrupamiento: "grupos cooperativos, trabajo individual de investigación y gran grupo para el debate" }
  },
  metodos: {
    abp: { nombre: "Aprendizaje basado en proyectos", inicio: "Presentar la problemática y formular entre todos la pregunta del proyecto.", desarrollo: ["Planificar el proyecto por grupos: qué sabemos, qué necesitamos saber, quién hace qué.", "Investigar con fuentes diversas (orales, escritas, patrimoniales o museísticas) y registrar en el cuaderno de proyecto.", "Elaborar un prototipo del producto y revisarlo con una coevaluación guiada."], cierre: "Difundir el producto a su destinatario real y reflexionar sobre el proceso." },
    indagacion: { nombre: "Investigación guiada", inicio: "Plantear una pregunta investigable y recoger las hipótesis iniciales del grupo.", desarrollo: ["Buscar y seleccionar información en fuentes seleccionadas por la maestra o el maestro.", "Organizar la información en una tabla o línea del tiempo y contrastar las hipótesis.", "Redactar una conclusión que cite las evidencias encontradas."], cierre: "Comunicar las conclusiones y comparar con las hipótesis iniciales." },
    aps: { nombre: "Aprendizaje-servicio", inicio: "Detectar con el grupo una necesidad del entorno relacionada con el patrimonio o la convivencia.", desarrollo: ["Investigar la necesidad y a los agentes implicados (ayuntamiento, asociación, museo).", "Diseñar la acción de servicio y repartir responsabilidades.", "Realizar el servicio y documentarlo."], cierre: "Celebrar y evaluar el servicio con los agentes de la comunidad." },
    roles: { nombre: "Juego de roles", inicio: "Presentar la situación histórica o social y los personajes con sus intereses.", desarrollo: ["Preparar cada rol con fichas documentales y fuentes.", "Representar la situación o el debate con normas pactadas.", "Analizar después qué argumentos se apoyaban en pruebas."], cierre: "Salir del rol y reflexionar sobre las perspectivas y sobre lo aprendido." },
    estaciones: { nombre: "Estaciones de aprendizaje", inicio: "Presentar el reto común y el circuito de estaciones con sus consignas.", desarrollo: ["Rotar por estaciones con tareas distintas (fuente, mapa, objeto, testimonio).", "Registrar en un pasaporte de estaciones lo descubierto en cada una.", "Poner en común las piezas para resolver el reto."], cierre: "Integrar las aportaciones en el producto final y autoevaluar el recorrido." },
    cooperativo: { nombre: "Aprendizaje cooperativo", inicio: "Constituir los equipos, recordar los roles y presentar la tarea.", desarrollo: ["Folio giratorio o lápices al centro para activar ideas previas.", "Rompecabezas: cada miembro se hace experto en una parte y la enseña al equipo.", "Elaborar en equipo el producto con interdependencia positiva."], cierre: "Evaluar el funcionamiento del equipo y el aprendizaje individual." }
  },
  productos: {
    museo: { nombre: "Museo de aula", destinatario: "las familias y otros grupos del centro" },
    podcast: { nombre: "Pódcast o audioguía", destinatario: "la radio escolar o los visitantes de un lugar del municipio" },
    mapa: { nombre: "Mapa digital comentado", destinatario: "la web del centro o el ayuntamiento" },
    linea: { nombre: "Línea del tiempo ilustrada", destinatario: "el pasillo del centro y el alumnado de otros cursos" },
    campana: { nombre: "Campaña de cuidado del patrimonio", destinatario: "el vecindario y las instituciones locales" },
    propuesta: { nombre: "Propuesta razonada a una institución", destinatario: "el pleno infantil, el ayuntamiento o el cabildo" }
  },
  contextos: {
    calles: { nombre: "Las calles y sus nombres", texto: "el nomenclátor y los lugares con historia del barrio" },
    mayores: { nombre: "La memoria de las personas mayores", texto: "los recuerdos de abuelas, abuelos y vecinos sobre cómo se vivía antes" },
    yacimiento: { nombre: "Un yacimiento o museo de la isla", texto: "un yacimiento arqueológico o un museo insular o municipal" },
    fiestas: { nombre: "Fiestas, juegos y tradiciones", texto: "las fiestas, los juegos tradicionales y los oficios del entorno" },
    instituciones: { nombre: "El ayuntamiento y el cabildo", texto: "las instituciones cercanas y los servicios públicos del municipio" },
    migraciones: { nombre: "Migraciones y diversidad", texto: "las historias de migración presentes en las familias y en la historia de Canarias" }
  }
};

/* Sala del tribunal: datos de la convocatoria canaria de 2026 (BOC n.º 58; penalizaciones según una copia) */
window.TRIBUNAL = {
  fuente: "Orden de 18 de marzo de 2026 (n.º 321/2026; BOC n.º 58, de 25 de marzo de 2026). Pruebas, ponderaciones, formato, tiempos y contenidos se han cotejado en el BOC; la tabla de penalizaciones procede de una copia publicada por un centro de formación. Las cifras cambian de una convocatoria a otra: comprueba siempre la vigente.",
  pruebas: [
    ["Primera prueba", "Parte A: supuesto práctico escrito (se elige uno de tres), 60 %. Parte B: desarrollo de un tema, 40 %. Hay que obtener 5 en total y al menos el 25 % en cada parte."],
    ["Segunda prueba", "Programación didáctica, 30 %. Unidad didáctica o situación de aprendizaje, 70 %. Se califica de 0 a 10; hay que obtener 5."],
    ["Fase de oposición y concurso", "Dos tercios la oposición y un tercio el concurso de méritos."]
  ],
  formato: [
    ["Extensión", "Entre 25 y 50 páginas, con anexos y bibliografía; no cuentan portada, índice ni contraportada. Los contenidos enlazados mediante QR o vínculos cuentan."],
    ["Tipografía", "Times o Times New Roman 11, interlineado sencillo, espaciado normal; tablas con un mínimo de 8 puntos, sin ocupar toda la programación."],
    ["Estructura", "Portada e índice; entre 6 y 12 unidades o situaciones de aprendizaje numeradas, tituladas y temporalizadas."],
    ["Contenido", "Curso concreto; currículo de Canarias; centro público de la Consejería; contribución a los objetivos, competencias específicas, saberes, criterios e instrumentos, metodología, atención a la diversidad desde el DUA, evaluación según la Orden de 31 de mayo de 2023 y modelo no presencial."],
    ["Defensa", "Pública, 15 minutos como máximo, sin más material que un ejemplar que facilita el tribunal."],
    ["Unidad didáctica", "45 minutos de preparación y 30 de exposición; material propio y un guion de un folio sin contenido curricular; dispositivos sin conexión; hasta 10 minutos de preguntas no evaluables. Al menos un 30 % del desarrollo de los contenidos, con métodos que faciliten la educación a distancia."]
  ],
  penalizaciones: [
    ["Faltas de grafía", "0,2 puntos por falta (máximo 1 punto en la prueba)."],
    ["Tildes omitidas", "0,2 puntos por cada tres (máximo 1 punto)."],
    ["Extensión", "Menos de 25 páginas: 1 punto; por cada página que supere 50: 0,25."],
    ["Portada o índice", "0,20 puntos por la ausencia de cada uno."],
    ["Tipografía", "0,5 puntos y descuentos por página adicional según el tamaño de letra usado."],
    ["Cero", "Programación copiada, no inédita o no contextualizada en un centro público de la Consejería."]
  ],
  lista: [
    "La programación se refiere a un curso concreto de Primaria y al currículo de Canarias (Decreto 211/2022).",
    "Está contextualizada en un centro público de la Consejería y el contexto se nota en todos los apartados.",
    "Incluye portada e índice con las situaciones de aprendizaje numeradas y tituladas.",
    "Tiene entre 6 y 12 situaciones de aprendizaje temporalizadas que cubren todos los criterios del ciclo.",
    "Usa la terminología vigente: saberes básicos, criterios, competencias específicas y descriptores.",
    "Cada situación parte del análisis de sus criterios y tiene un producto final con destinatario.",
    "La metodología combina modelos y está justificada, no solo enumerada.",
    "La atención a la diversidad se diseña con los principios del DUA y prevé medidas específicas.",
    "Prevé su posible adaptación a un modelo no presencial (y, en la unidad, al menos un 30 % de los contenidos con métodos a distancia).",
    "La evaluación usa técnicas e instrumentos variados vinculados a los criterios y a las rúbricas oficiales.",
    "No pondera instrumentos ni criterios y usa los calificadores de Insuficiente a Sobresaliente.",
    "Incluye la evaluación de la práctica docente y de la propia programación.",
    "Respeta extensión, tipografía e interlineado de la convocatoria.",
    "Ha pasado una revisión ortográfica completa (grafías y tildes penalizan)."
  ],
  defensa: [
    { t: "Presentación y título", min: 1, d: "Quién eres como docente en este centro, el curso y el hilo conductor." },
    { t: "Contexto", min: 2, d: "Centro, entorno y grupo, y cómo condicionan tus decisiones." },
    { t: "Concreción curricular", min: 3, d: "Criterios como eje, alineamiento con competencias y saberes; tu mapa en una idea." },
    { t: "Situaciones de aprendizaje", min: 3, d: "Secuencia del curso, productos finales y conexiones con otras áreas." },
    { t: "Metodología", min: 2, d: "Modelos elegidos y por qué para este grupo." },
    { t: "Evaluación y calificación", min: 2, d: "Técnicas, instrumentos, rúbricas oficiales y procedimiento de calificación." },
    { t: "Inclusión y cierre", min: 2, d: "Medidas DUA y específicas, escenario no presencial y conclusión." }
  ],
  exposicion: [
    { t: "Identificación y justificación", min: 3, d: "Título, curso, criterios y por qué esta situación en este momento." },
    { t: "Producto final y reto", min: 3, d: "Qué se produce, para quién y qué problema resuelve." },
    { t: "Concreción curricular", min: 4, d: "Análisis de los criterios: proceso, saber, modo y finalidad." },
    { t: "Secuencia de actividades", min: 9, d: "Inicio, desarrollo y cierre, con agrupamientos, espacios y recursos." },
    { t: "Inclusión y escenario no presencial", min: 4, d: "Opciones DUA y al menos un 30 % de los contenidos con métodos de educación a distancia." },
    { t: "Evaluación", min: 5, d: "Evidencias, instrumentos, rúbrica y procedimiento de calificación." },
    { t: "Cierre", min: 2, d: "Evaluación de la práctica docente y conclusión." }
  ],
  preguntas: [
    "¿Por qué has elegido este curso y no otro del ciclo?",
    "¿Cómo te aseguras de que todos los criterios del ciclo aparecen en tu programación?",
    "Explica cómo calificarías el criterio 7.2 de tu situación sin usar porcentajes.",
    "¿Qué harías si a mitad del proyecto el ayuntamiento no puede recibir al grupo?",
    "¿Qué medida específica prevés para el alumno con NEAE que describes en el contexto?",
    "¿Qué diferencia hay entre tu producto final y el instrumento con que evalúas?",
    "¿Cómo trabajas el patrimonio canario fuera de la semana del Día de Canarias?",
    "¿Qué cambiarías de esta situación si se tuviera que desarrollar de forma telemática?"
  ],
  errores: [
    "Programación genérica, válida para cualquier centro.",
    "Resumir o reformular los objetivos de etapa.",
    "Usar estándares o terminología de la LOMCE.",
    "Ponderar instrumentos o asignar pesos a los criterios (contrario a las instrucciones canarias de 2026-2027).",
    "Describir la evaluación en abstracto sin explicar cómo se califica.",
    "Mapas o tablas ilegibles por tamaño de letra o colores.",
    "Superar el número de páginas o cambiar la tipografía exigida."
  ]
};
