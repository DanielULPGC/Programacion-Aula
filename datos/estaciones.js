/*
 * El estudio del arquitecto · contenido de las siete láminas (estaciones)
 * Redacción propia a partir de Ramírez García, Jurado y Ruiz (2022), del currículo de Canarias
 * (Decreto 211/2022), de las instrucciones de evaluación y calificación para 2026-2027 y de la
 * investigación citada en datos/referencias.js. Las citas de los manuales son breves y se atribuyen;
 * los textos normativos se transcriben literalmente cuando así se indica.
 *
 * Esquema de estación:
 *   id, num, titulo, sub, lema, idea, prediccion{q, o[]}, sintesis[], conceptos[{t,d}], cita{texto, fuente},
 *   matices[{t,d}], aula[], docente{duracion, dinamica, preguntas[]}, refs[], retos[]
 * Tipos de reto: clasificar · ordenar · test (ver js/retos.js).
 */
window.ESTACIONES = [

/* ===================================================================== 1 */
{
  id: "e1", num: 1,
  titulo: "El encargo y el solar",
  sub: "Qué es programar y por qué se programa para un aula concreta",
  lema: "¿Se puede diseñar una casa sin conocer el solar?",
  idea: "Programar es convertir el currículo en un plan de acción para un grupo concreto. No consiste en copiar el decreto ni en redactar un manual de didáctica, sino en decidir qué aprenderá «mi» alumnado, cómo, cuándo y con qué evidencias.",
  prediccion: {
    q: "Antes de empezar: una programación excelente de un colegio de Madrid, ¿serviría tal cual en un CEIP de Lanzarote?",
    o: ["Sí: el currículo básico es común a todo el Estado", "Sí, si se adaptan las fechas al calendario canario", "No: hay que contextualizarla y aplicar el currículo de Canarias"]
  },
  sintesis: [
    "Ramírez García, Jurado y Ruiz entienden la programación como el documento que concreta el currículo para un centro, un aula y un grupo determinados, y que permite enseñar sin improvisar. Recogen la definición de Rodríguez, Molina y Martínez, que la llaman «un instrumento de planificación de la actividad del aula». A ese <strong>concepto didáctico</strong> se suma el <strong>concepto legal</strong>: la LOE, en su artículo 91, sitúa la programación y la enseñanza de las áreas como la primera función del profesorado. Y en la <strong>oposición</strong>, el artículo 21 del Real Decreto 276/2007 la convierte en la mitad de la segunda prueba, junto con la exposición de una unidad didáctica.",
    "La programación es el penúltimo eslabón de una cadena de <strong>niveles de concreción</strong>. El Estado fija las enseñanzas mínimas (Real Decreto 157/2022); Canarias establece su currículo (Decreto 211/2022) y su normativa de evaluación; cada centro lo concreta en su proyecto educativo; la programación didáctica lo lleva al aula, y las situaciones de aprendizaje lo hacen vivir en sesiones concretas. Para que el plan sea sólido, el manual pide atender a las cuatro <strong>fuentes del currículo</strong>: la epistemológica (la lógica interna de las disciplinas, aquí la Historia, la Geografía y las demás ciencias sociales), la psicológica (el desarrollo del alumnado), la pedagógica (cómo se enseña y se aprende mejor) y la sociológica (el contexto, desde el macrosistema hasta el microsistema de Bronfenbrenner).",
    "Una buena programación es <strong>viable</strong> (ajustada a la edad, a los recursos y a la norma), <strong>realista</strong>, <strong>flexible</strong> (un plan abierto que admite cambios, según Penalva), <strong>adecuada</strong> al contexto, <strong>dinámica</strong> (Gairín la describe como un sistema de elementos en interacción), <strong>eficiente</strong> (equilibra cantidad y calidad de la información, según Polo) y <strong>evaluable</strong>. Sus funciones van más allá del trámite: da coherencia entre el proyecto del centro y la práctica, sirve de marco a las adaptaciones curriculares, permite revisar el proyecto educativo, ayuda a reflexionar sobre la propia práctica y, si se comparte con el alumnado, le permite saber de antemano qué va a aprender, para qué y cómo se le evaluará.",
    "El <strong>solar</strong> es el contexto. El manual lo organiza en capas: el contexto legislativo, el entorno socioeducativo, el centro, el aula y el grupo-clase. Advierte de un error muy frecuente: entregar programaciones que parecen manuales de didáctica, válidas para cualquier centro de cualquier comunidad. La contextualización debe notarse en todos los apartados, no solo en el primero. En Canarias, la convocatoria de 2026 exige además situar la programación en un centro público dependiente de la Consejería de Educación; incumplirlo supone un cero.",
    "En Ciencias Sociales el entorno no es un decorado: es contenido. El Decreto 211/2022 incorpora los saberes propios de Canarias desde la <strong>educación patrimonial</strong> y pide aplicarlos partiendo de lo local para llegar a lo global. Cooper defendía algo parecido para la Historia en Infantil y Primaria: partir de los intereses y del entorno inmediato. Por eso el barrio, el municipio, la isla, su patrimonio y sus familias deciden qué situaciones de aprendizaje de Historia o de Geografía tienen sentido en cada centro."
  ],
  conceptos: [
    { t: "Programación didáctica", d: "Plan que concreta el currículo para un curso, un área y un grupo de un centro determinado: qué se aprende, cómo, cuándo y cómo se evalúa." },
    { t: "Niveles de concreción curricular", d: "Escalones por los que el currículo pasa del Estado a la comunidad autónoma, al centro, a la programación y a la situación de aprendizaje." },
    { t: "Fuentes del currículo", d: "Epistemológica, psicológica, pedagógica y sociológica: lo que se sabe de la disciplina, del alumnado, de la enseñanza y del contexto." },
    { t: "Contextualización", d: "Ajuste de todos los apartados de la programación a un centro, un entorno y un grupo reales; en Canarias, a un centro público de la Consejería." },
    { t: "Flexibilidad", d: "Carácter abierto del plan, que admite cambios justificados sin perder los requisitos básicos." },
    { t: "Educación patrimonial", d: "Enfoque con el que el Decreto 211/2022 integra los saberes de Canarias: conocer, disfrutar, valorar y transmitir el patrimonio natural y cultural." }
  ],
  cita: { texto: "partiendo del local, el territorio y la sociedad Canaria; para llegar al global", fuente: "Decreto 211/2022, Conocimiento del Medio, saberes básicos (BOC n.º 231, p. 45556)" },
  matices: [
    { t: "Programar no es rellenar una plantilla", d: "Las plantillas ordenan, pero no deciden. Lo valioso de una programación son las decisiones justificadas: por qué esta secuencia, este reto o este instrumento con este grupo." },
    { t: "Flexible no quiere decir improvisado", d: "El manual pone como ejemplo una epidemia de gripe que vacía el aula durante días: la programación se reajusta, pero sigue garantizando los aprendizajes previstos." },
    { t: "El currículo estatal no basta", d: "En Canarias, el referente para programar es el Decreto 211/2022 y su normativa de evaluación. Citar solo el Real Decreto 157/2022 es un error de contexto." }
  ],
  aula: [
    "1.er ciclo: el «solar» es la familia, la clase y el barrio. Antes de programar, conviene saber qué lugares, fiestas, oficios y personas mayores rodean al grupo.",
    "2.º ciclo: el municipio y la isla. Un inventario de patrimonio cercano (calles, ermitas, acequias, yacimientos, museos) orienta las situaciones de Prehistoria y Edad Antigua.",
    "3.er ciclo: Canarias, España y Europa. El contexto aporta preguntas socialmente relevantes (migraciones, turismo, memoria democrática) que dan sentido a la Historia contemporánea.",
    "Ante el tribunal: abre la defensa con tu centro y tu grupo, no con la lista de leyes. La norma se cita cuando justifica una decisión."
  ],
  docente: {
    duracion: "20 minutos",
    dinamica: "Mostrar dos índices de programación: uno genérico y otro contextualizado en un CEIP canario. Pedir que localicen cinco diferencias y que expliquen cuál defenderían ante un tribunal.",
    preguntas: [
      "¿Qué apartados de una programación delatan que no se ha pensado para un grupo concreto?",
      "¿Cómo cambia la selección de situaciones de aprendizaje de Historia entre un centro urbano y uno rural de la misma isla?"
    ]
  },
  refs: ["jurado2022", "loe", "rd157", "d211", "rd276", "convoca2026", "cooper2002"],
  retos: [
    {
      id: "e1-r1", tipo: "ordenar", titulo: "Del BOE al aula",
      consigna: "Ordena los niveles de concreción del currículo, del más general al más próximo al alumnado.",
      items: [
        { t: "Enseñanzas mínimas del Estado (Real Decreto 157/2022).", e: "Fijan los aspectos básicos comunes." },
        { t: "Currículo de la comunidad autónoma (Decreto 211/2022 en Canarias).", e: "Completa y contextualiza las enseñanzas mínimas." },
        { t: "Proyecto educativo y concreción curricular del centro.", e: "El centro adapta el currículo a su realidad en el uso de su autonomía." },
        { t: "Programación didáctica del área y del curso.", e: "Organiza el curso para un grupo concreto." },
        { t: "Situación de aprendizaje desarrollada en el aula.", e: "El nivel más cercano: tareas, sesiones y evidencias." }
      ]
    },
    {
      id: "e1-r2", tipo: "clasificar", titulo: "Las cuatro fuentes del currículo",
      consigna: "Al programar Ciencias Sociales para 4.º, ¿a qué fuente del currículo responde cada decisión?",
      categorias: ["Epistemológica", "Psicológica", "Pedagógica", "Sociológica"],
      items: [
        { t: "Distinguir hechos, causas y consecuencias, como hace la Historia.", c: 0, e: "Responde a la lógica interna de la disciplina." },
        { t: "Usar líneas del tiempo con imágenes porque el tiempo histórico se construye poco a poco a esta edad.", c: 1, e: "Atiende al desarrollo cognitivo del alumnado." },
        { t: "Trabajar en grupos cooperativos con roles y producto final.", c: 2, e: "Es una decisión sobre cómo enseñar y aprender." },
        { t: "Partir de un yacimiento aborigen del municipio que el alumnado visita con su familia.", c: 3, e: "Ajusta la propuesta al entorno social y cultural." },
        { t: "Pedir que contrasten dos fuentes antes de concluir.", c: 0, e: "La crítica de fuentes es propia del método histórico." },
        { t: "Prever que la mitad del grupo no dispone de dispositivos en casa.", c: 3, e: "El contexto socioeconómico condiciona la viabilidad." }
      ]
    },
    {
      id: "e1-r3", tipo: "test", titulo: "El encargo",
      preguntas: [
        { q: "Según el artículo 21 del Real Decreto 276/2007, la segunda prueba de la oposición consiste en…", o: ["presentar una programación didáctica y preparar y exponer una unidad didáctica", "desarrollar por escrito un tema elegido entre los extraídos al azar por el tribunal", "resolver un supuesto práctico y defender después la memoria de prácticas"], c: 0, e: "La parte práctica y el tema forman la primera prueba." },
        { q: "¿Qué error describe el manual como frecuente en las programaciones de oposición?", o: ["Incluir demasiadas referencias legales en la introducción", "Parecer manuales de didáctica aplicables a cualquier centro", "Dedicar demasiado espacio al contexto del centro"], c: 1, e: "La programación debe girar en torno a «mi» aula y «mi» alumnado." },
        { q: "¿Cuál de estas funciones corresponde a la programación?", o: ["Sustituir al proyecto educativo del centro cuando este aún no se ha aprobado", "Fijar las enseñanzas mínimas que garantizan la validez de los títulos oficiales", "Permitir que el alumnado sepa de antemano qué aprenderá y cómo se le evaluará"], c: 2, e: "Compartirla ayuda a dar sentido al aprendizaje y a implicar al alumnado." }
      ]
    }
  ]
},

/* ===================================================================== 2 */
{
  id: "e2", num: 2,
  titulo: "Los cimientos curriculares",
  sub: "Objetivos, competencias, criterios y saberes en la LOMLOE y en Canarias",
  lema: "¿Sobre qué pilar se apoya todo lo demás?",
  idea: "La LOMLOE reordena los cimientos: objetivos de etapa, competencias clave con su Perfil de salida, competencias específicas, criterios de evaluación y saberes básicos. Las competencias específicas conectan los saberes con el Perfil; en Canarias, el criterio de evaluación es el pilar que vertebra la programación.",
  prediccion: {
    q: "En Canarias, ¿qué elemento del currículo debe guiar el diseño de la programación y de las situaciones de aprendizaje?",
    o: ["Los saberes básicos del área", "Los descriptores operativos del Perfil de salida", "Los criterios de evaluación"]
  },
  sintesis: [
    "El Real Decreto 157/2022 define los elementos del currículo. Los <strong>objetivos de etapa</strong> son los logros esperados al final de la Primaria, vinculados a las competencias clave. Las <strong>competencias clave</strong>, adaptación de la Recomendación del Consejo de la Unión Europea de 22 de mayo de 2018, se concretan en el <strong>Perfil de salida</strong> mediante <strong>descriptores operativos</strong>. Las <strong>competencias específicas</strong> describen los desempeños propios de cada área y hacen de puente entre el Perfil y los saberes. Los <strong>criterios de evaluación</strong> indican el nivel de desempeño esperado, y los <strong>saberes básicos</strong> reúnen los conocimientos, destrezas y actitudes del área. Las <strong>situaciones de aprendizaje</strong> son el escenario en que todo eso se pone en juego.",
    "Las competencias clave son ocho: comunicación lingüística (CCL), plurilingüe (CP), matemática y en ciencia, tecnología e ingeniería (STEM), digital (CD), personal, social y de aprender a aprender (CPSAA), ciudadana (CC), emprendedora (CE) y conciencia y expresión culturales (CCEC). Todas las áreas contribuyen a todas, en distinta medida. Para Ramírez García, Jurado y Ruiz, las competencias específicas son el referente fundamental para programar, porque conectan el trabajo del aula con el Perfil de salida.",
    "El currículo de Canarias organiza cada área en <strong>bloques competenciales</strong>: cada uno reúne una competencia específica, sus descriptores, sus criterios de evaluación y una <strong>explicación del bloque</strong> que orienta el diseño de situaciones de aprendizaje. Conocimiento del Medio tiene nueve competencias específicas y veinticuatro criterios, y tres bloques de saberes: I, «Cultura científica»; II, «Tecnología y digitalización», y III, «Sociedades y territorios». Este último, el de las Ciencias Sociales, se vincula sobre todo con los bloques competenciales 6, 7, 8 y 9 y se divide en retos del mundo actual, sociedades en el tiempo, alfabetización cívica y conciencia ecosocial.",
    "Las instrucciones de evaluación y calificación de 2026-2027 son tajantes: los <strong>criterios de evaluación</strong>, y no las competencias específicas, los saberes, los descriptores o las explicaciones de los bloques, son los que deben guiar la práctica docente y el diseño de la programación y de las situaciones de aprendizaje. Ningún criterio vale más que otro. En Primaria tienen carácter finalista para el ciclo, de modo que el alumnado dispone de dos cursos para alcanzarlos; pero todos los criterios del ciclo se trabajan y evalúan en cada uno de los dos niveles, graduando su profundidad o seleccionando los saberes asociados.",
    "Los objetivos de etapa se recogen tal como los formula la norma, en infinitivo y sin resumirlos; el manual señala como errores cambiar su redacción o atribuir cada objetivo en exclusiva a un área. El Decreto 211/2022 indica que Conocimiento del Medio contribuye fundamentalmente al objetivo h). Un contraste útil: la edición de 2021 del mismo manual, todavía con la LOMCE, programaba con <strong>estándares de aprendizaje evaluables</strong>, y Jiménez García (2021) relacionaba en tablas objetivos, criterios, estándares y competencias. Ese formato de tabla sigue siendo útil; su contenido, no: los estándares han desaparecido."
  ],
  conceptos: [
    { t: "Objetivos de etapa", d: "Logros que se espera que el alumnado alcance al final de la Primaria, vinculados a la adquisición de las competencias clave." },
    { t: "Perfil de salida", d: "Concreción de las competencias clave que debe haber desarrollado el alumnado al final de la etapa, expresada en descriptores operativos." },
    { t: "Descriptor operativo", d: "Formulación del nivel de desempeño de una competencia clave al final de la etapa (por ejemplo, CC1 o CCEC1)." },
    { t: "Competencia específica", d: "Desempeño propio de un área que conecta los saberes con el Perfil de salida; en Conocimiento del Medio hay nueve." },
    { t: "Criterio de evaluación", d: "Referente del nivel de desempeño esperado; en Canarias, eje que vertebra la programación, la evaluación y la calificación." },
    { t: "Saberes básicos", d: "Conocimientos, destrezas y actitudes de un área; sustituyen a los antiguos contenidos." },
    { t: "Bloque competencial", d: "Unidad del currículo canario que integra competencia específica, descriptores, criterios y explicación del bloque." }
  ],
  cita: { texto: "el criterio de evaluación constituye el eje vertebrador de la práctica docente", fuente: "Instrucciones de evaluación y calificación de Canarias, 2026-2027 (preámbulo)" },
  matices: [
    { t: "¿Siete u ocho competencias clave?", d: "El manual afirma en un pasaje que las competencias clave son siete y a continuación enumera ocho. El Real Decreto 157/2022 establece ocho: conviene corregirlo en los apuntes." },
    { t: "Competencias específicas o criterios", d: "El manual sitúa las competencias específicas como referente para programar; Canarias, el criterio de evaluación. No se contradicen del todo, porque cada criterio concreta una competencia específica, pero en una oposición canaria el punto de partida que se espera es el criterio." },
    { t: "Los estándares ya no existen", d: "Programar con estándares de aprendizaje evaluables o con un «mapa de desarrollo curricular» de la LOMCE delata materiales anteriores a 2022." }
  ],
  aula: [
    "1.er ciclo: en el bloque competencial 7, el criterio 7.1 pide ordenar temporalmente hechos del entorno cercano; la explicación del bloque sugiere el ciclo vital, los objetos cotidianos y la biografía familiar.",
    "2.º ciclo: los criterios 7.1 y 7.2 llevan a la Prehistoria y la Edad Antigua, con atención a los aborígenes canarios y a las mujeres como sujetos de la historia.",
    "3.er ciclo: de la Edad Media a la actualidad, con la conquista de Canarias, la memoria democrática y las expresiones artísticas en sus contextos.",
    "Ante el tribunal: nombra los elementos con la terminología vigente (saberes básicos, criterios, descriptores) y usa sus códigos oficiales para ahorrar espacio."
  ],
  docente: {
    duracion: "25 minutos",
    dinamica: "Repartir tarjetas con fragmentos del Decreto 211/2022 (un objetivo, una competencia específica, un criterio, un saber, un descriptor) y pedir a los grupos que los reconstruyan en un bloque competencial.",
    preguntas: [
      "¿Qué gana una programación al partir del criterio y no del saber?",
      "¿Por qué el currículo canario incluye una «explicación del bloque» y para qué sirve al diseñar?"
    ]
  },
  refs: ["jurado2022", "jurado2021", "jimenez2021", "rd157", "d211", "instr2627"],
  retos: [
    {
      id: "e2-r1", tipo: "clasificar", titulo: "¿Qué pieza es?",
      consigna: "Clasifica cada fragmento del currículo de Primaria (texto literal del Real Decreto 157/2022 o del Decreto 211/2022).",
      categorias: ["Objetivo de etapa", "Competencia específica", "Criterio de evaluación", "Saber básico", "Descriptor operativo"],
      items: [
        { t: "«Conocer los aspectos fundamentales de las Ciencias de la Naturaleza, las Ciencias Sociales, la Geografía, la Historia y la Cultura.»", c: 0, e: "Es el objetivo h) de la etapa." },
        { t: "«Observar, comprender e interpretar continuidades y cambios del medio social y cultural…»", c: 1, e: "Es la competencia específica 7 de Conocimiento del Medio." },
        { t: "«7.2. Reconocer personas y grupos sociales relevantes de la historia, incluyendo algunas de las características de los aborígenes canarios…»", c: 2, e: "Criterio de evaluación del primer ciclo." },
        { t: "«Reconocimiento de algunas de las principales características de los aborígenes canarios y su modo de vida.»", c: 3, e: "Saber III.2.5 del primer ciclo." },
        { t: "CC1", c: 4, e: "Descriptor operativo de la competencia ciudadana, vinculado a varios criterios del área." },
        { t: "«Valoración del patrimonio cultural y natural de las islas Canarias, como bien y recurso; su uso, cuidado y conservación.»", c: 3, e: "Saber III.2.5 del tercer ciclo." }
      ]
    },
    {
      id: "e2-r2", tipo: "test", titulo: "Cimientos",
      preguntas: [
        { q: "¿Cuántas competencias clave establece el Real Decreto 157/2022?", o: ["Siete", "Ocho", "Nueve"], c: 1, e: "CCL, CP, STEM, CD, CPSAA, CC, CE y CCEC." },
        { q: "Según las instrucciones canarias de 2026-2027, en un curso de Primaria se trabajan…", o: ["todos los criterios del ciclo, graduando su profundidad en cada nivel", "la mitad de los criterios del ciclo, y la otra mitad en el curso siguiente", "solo los criterios vinculados a los saberes que elige el ciclo"], c: 0, e: "Los criterios son finalistas para el ciclo, pero se tratan en ambos niveles." },
        { q: "¿Qué bloque de saberes de Conocimiento del Medio reúne las Ciencias Sociales?", o: ["I. Cultura científica", "II. Tecnología y digitalización", "III. Sociedades y territorios"], c: 2, e: "Retos del mundo actual, sociedades en el tiempo, alfabetización cívica y conciencia ecosocial." }
      ]
    }
  ]
},

/* ===================================================================== 3 */
{
  id: "e3", num: 3,
  titulo: "El plano maestro",
  sub: "Leer un criterio de evaluación y diseñar hacia atrás",
  lema: "¿Qué tiene que ver, hacer y demostrar el alumnado?",
  idea: "Antes de pensar actividades se desmonta el criterio: qué proceso pide, sobre qué saberes, de qué modo y para qué. De ese análisis salen el reto, el producto y las evidencias. Es el diseño inverso: primero la meta y la prueba, después el camino.",
  prediccion: {
    q: "¿Por dónde conviene empezar a diseñar una situación de aprendizaje en Canarias?",
    o: ["Por una actividad motivadora que enganche al grupo", "Por el análisis del criterio de evaluación", "Por el tema correspondiente del libro de texto"]
  },
  sintesis: [
    "Las instrucciones canarias de 2026-2027 lo establecen como primer paso: el diseño de la programación y de las situaciones de aprendizaje parte siempre del <strong>análisis del criterio de evaluación</strong>, para determinar qué debe aprender el alumnado, cómo lo hará y con qué finalidad competencial. Solo después se eligen las técnicas, herramientas e instrumentos, que deben tener una vinculación directa con el criterio y arrojar evidencias observables. El preámbulo resume la idea: la evaluación está en la base del diseño.",
    "Un criterio canario tiene una anatomía reconocible. Tomemos el 7.1 del segundo ciclo: «Localizar, seleccionar e identificar» son los <strong>procesos</strong>; «hechos del entorno social y cultural, desde la Prehistoria hasta la Edad Antigua» son los <strong>saberes</strong>; «empleando las nociones de causalidad, simultaneidad y sucesión» y «adoptando un punto de vista creativo» indican el <strong>modo</strong>; «para comunicarlos» es la <strong>finalidad</strong>. La explicación del bloque añade concreciones: nociones básicas de tiempo histórico, clasificar y utilizar fuentes, huellas de la historia en la localidad o el papel de mujeres y hombres como protagonistas.",
    "Este proceder tiene fundamento en la investigación. El <strong>alineamiento constructivo</strong> de Biggs (1996) exige que los resultados esperados se formulen como desempeños, que las actividades provoquen esos desempeños y que la evaluación compruebe esos mismos desempeños. El <strong>diseño inverso</strong> de Wiggins y McTighe propone tres fases: identificar los resultados deseados, decidir qué evidencias los demostrarán y, por último, planificar las experiencias de aprendizaje. En Canarias, el criterio aporta los resultados y las rúbricas oficiales describen los niveles de logro.",
    "Los verbos del criterio remiten a procesos cognitivos. La taxonomía revisada de Bloom (Anderson y Krathwohl; véase Krathwohl, 2002) distingue recordar, comprender, aplicar, analizar, evaluar y crear, y los cruza con cuatro tipos de conocimiento: factual, conceptual, procedimental y metacognitivo. Ramírez García, Jurado y Ruiz la relacionan con los modos de pensamiento de Moya y Luengo: reflexivo, analógico, lógico, analítico, crítico, sistémico y creativo, entre otros. Sirven para comprobar que las actividades piden lo que pide el criterio y no algo más simple.",
    "Leer los criterios en vertical revela la <strong>progresión</strong>. En el bloque competencial 7, el primer ciclo ordena temporalmente hechos del entorno cercano; el segundo localiza, selecciona e identifica hechos de la Prehistoria y la Edad Antigua con nociones de causalidad, simultaneidad y sucesión; el tercero analiza críticamente esas relaciones desde la Edad Media hasta la actualidad. La misma competencia, distinta profundidad: programar bien es respetar ese escalonamiento y no adelantar ni repetir sin más."
  ],
  conceptos: [
    { t: "Análisis del criterio", d: "Desglose del criterio en procesos, saberes, modo o contexto y finalidad, apoyado en la explicación del bloque competencial." },
    { t: "Alineamiento constructivo", d: "Coherencia entre resultados esperados, actividades y evaluación, de modo que los tres se refieran a los mismos desempeños (Biggs, 1996)." },
    { t: "Diseño inverso", d: "Planificar desde los resultados y las evidencias hacia las actividades (Wiggins y McTighe)." },
    { t: "Evidencia de aprendizaje", d: "Producción o actuación observable que permite valorar el nivel de logro de un criterio." },
    { t: "Taxonomía revisada de Bloom", d: "Clasificación de procesos cognitivos (recordar a crear) cruzada con tipos de conocimiento (Anderson y Krathwohl, 2001)." },
    { t: "Rúbrica LOMLOE Canarias", d: "Herramienta oficial que describe niveles de logro de cada criterio y facilita convertir la evaluación en calificación." }
  ],
  cita: { texto: "la evaluación debe estar en la base del diseño de situaciones de aprendizaje", fuente: "Instrucciones de evaluación y calificación de Canarias, 2026-2027 (preámbulo)" },
  matices: [
    { t: "Un verbo no es una actividad", d: "Copiar el verbo del criterio como título de una actividad («Identificamos hechos») no garantiza que la actividad lo exija. Hay que preguntarse qué hará exactamente cada niña y cada niño." },
    { t: "La taxonomía no es una escalera obligatoria", d: "Krathwohl advierte de que las categorías se solapan. Crear no exige haber completado antes todos los niveles inferiores; sirve para equilibrar, no para encadenar fichas." },
    { t: "Canarias no es un añadido", d: "Muchos criterios incluyen el contexto canario dentro de su enunciado. Si se omite, no se está trabajando el criterio completo." }
  ],
  aula: [
    "1.er ciclo (criterio 7.1): producto posible, una línea de vida familiar con fotografías y objetos; evidencia, que el alumnado ordena y explica «antes», «después» y «cuando yo nací».",
    "2.º ciclo (criterio 7.1): producto posible, un museo de aula sobre la vida de los antiguos canarios y de otra sociedad antigua; evidencia, fichas de piezas con causa, consecuencia y fecha aproximada.",
    "3.er ciclo (criterio 7.2): producto posible, un pódcast sobre mujeres de la historia contemporánea de Canarias; evidencia, guion con fuentes contrastadas y citadas.",
    "Ante el tribunal: muestra el análisis de un criterio en una tabla de cuatro columnas (proceso, saber, modo, finalidad); es una prueba rápida de alineamiento."
  ],
  docente: {
    duracion: "30 minutos",
    dinamica: "Proyectar un criterio canario y pedir que lo subrayen con cuatro colores (proceso, saber, modo, finalidad). Después, cada grupo propone una evidencia y una actividad; el resto comprueba si están alineadas.",
    preguntas: [
      "¿Qué se pierde si se diseña primero la actividad y después se busca un criterio que «encaje»?",
      "¿Cómo se distingue un criterio de primer ciclo de su equivalente de tercero solo por sus verbos?"
    ]
  },
  refs: ["instr2627", "d211", "biggs1996", "wiggins2005", "krathwohl2002", "moya2011", "jurado2022", "rubricas2025"],
  retos: [
    {
      id: "e3-r1", tipo: "clasificar", titulo: "Desmontar el criterio 7.1 (2.º ciclo)",
      consigna: "Clasifica cada fragmento del criterio según su función.",
      categorias: ["Proceso (qué hace)", "Saber (sobre qué)", "Modo o contexto (cómo)", "Finalidad (para qué)"],
      items: [
        { t: "«Localizar, seleccionar e identificar»", c: 0, e: "Son las acciones que el alumnado debe demostrar." },
        { t: "«hechos del entorno social y cultural»", c: 1, e: "Objeto del aprendizaje." },
        { t: "«desde la Prehistoria hasta la Edad Antigua»", c: 1, e: "Acota los saberes del ciclo." },
        { t: "«empleando las nociones de causalidad, simultaneidad y sucesión»", c: 2, e: "Indica con qué herramientas conceptuales se trabaja." },
        { t: "«para comunicarlos»", c: 3, e: "Expresa el propósito del aprendizaje." },
        { t: "«adoptando un punto de vista creativo»", c: 2, e: "Describe la manera de comunicar." }
      ]
    },
    {
      id: "e3-r2", tipo: "ordenar", titulo: "Diseñar hacia atrás",
      consigna: "Ordena los pasos para diseñar una situación de aprendizaje alineada.",
      items: [
        { t: "Analizar el criterio y la explicación de su bloque competencial.", e: "Determina qué, cómo y para qué." },
        { t: "Decidir las evidencias y los instrumentos, con la rúbrica oficial como referencia.", e: "La prueba se define antes que el camino." },
        { t: "Plantear un reto contextualizado con un producto final.", e: "Da sentido y transferencia." },
        { t: "Secuenciar las actividades y los agrupamientos.", e: "El camino se ajusta a la meta." },
        { t: "Prever las medidas DUA y el escenario no presencial.", e: "La inclusión se diseña desde el principio." },
        { t: "Revisar que criterio, actividades e instrumentos piden lo mismo.", e: "Comprobación final de alineamiento." }
      ]
    },
    {
      id: "e3-r3", tipo: "test", titulo: "El plano",
      preguntas: [
        { q: "El alineamiento constructivo de Biggs exige que…", o: ["las actividades sean siempre cooperativas y basadas en problemas", "resultados, actividades y evaluación se refieran a los mismos desempeños", "la evaluación final tenga más peso que la evaluación continua"], c: 1, e: "Los «desempeños de comprensión» alinean la enseñanza y la evaluación." },
        { q: "En el diseño inverso, ¿qué se decide en segundo lugar?", o: ["Las evidencias que demostrarán el aprendizaje", "Las actividades y los recursos de cada sesión", "Los agrupamientos y la organización del aula"], c: 0, e: "Resultados deseados, evidencias y, por último, actividades." },
        { q: "Comparando los criterios 7.1 de los tres ciclos, se observa que…", o: ["solo cambia el período histórico que se estudia en cada ciclo", "los tres piden los mismos procesos con distinto número de hechos", "crecen la complejidad de los procesos y la amplitud temporal"], c: 2, e: "De ordenar en el primer ciclo a analizar críticamente en el tercero." }
      ]
    }
  ]
},

/* ===================================================================== 4 */
{
  id: "e4", num: 4,
  titulo: "Las plantas del edificio",
  sub: "Secuenciar el curso en situaciones de aprendizaje conectadas",
  lema: "¿Cómo se apilan las plantas sin que se caiga el edificio?",
  idea: "La programación reparte el curso en unidades o situaciones de aprendizaje (entre seis y doce en la convocatoria canaria de 2026) que deben cubrir todos los criterios del ciclo, conectarse entre sí y con otras áreas, y seguir un orden con sentido para el alumnado.",
  prediccion: {
    q: "Una programación de 5.º sigue el orden de los temas del libro de texto. ¿Es una secuenciación adecuada?",
    o: ["Sí, porque el libro ya está adaptado al currículo", "No necesariamente: la secuencia debe nacer de los criterios, del contexto y de los retos", "Sí, siempre que se cumpla el número de sesiones"]
  },
  sintesis: [
    "<strong>Secuenciar</strong> es decidir el orden, la duración y el reparto por trimestres de las situaciones de aprendizaje. Las instrucciones canarias recuerdan que a lo largo del curso se implementan todos los criterios de evaluación del currículo y que, en Primaria, todos los del ciclo se tratan en cada uno de sus dos niveles. Un criterio puede aparecer en varias situaciones, profundizando cada vez; lo que no puede ocurrir es que alguno no aparezca en ninguna. La convocatoria de 2026 pide entre seis y doce unidades o situaciones de aprendizaje numeradas, tituladas y temporalizadas.",
    "Para comprobarlo, el manual propone un <strong>mapa de interrelación curricular</strong>: una tabla o figura que relacione objetivos de etapa, descriptores, competencias específicas, criterios y saberes, usando los códigos oficiales. Recomienda que ocupe una o dos páginas, que sea legible (mismo tamaño de letra que exige la convocatoria, colores que no impidan leer, página horizontal si hace falta) y que se elabore al final, como comprobación de que no falta nada. En Canarias ayuda que el currículo ya vincule cada criterio con sus descriptores.",
    "La <strong>intradisciplinariedad</strong> relaciona saberes de una misma área (por ejemplo, el tiempo histórico con las fuentes y con el patrimonio local); la <strong>interdisciplinariedad</strong>, saberes de áreas distintas. El Decreto 211/2022 presenta Conocimiento del Medio como el lugar en que se encuentran las demás disciplinas de la etapa, y la convocatoria canaria pide integrar el carácter globalizador. Jiménez García (2021) muestra cómo una programación de Educación Física puede organizarse en unidades integradas conectadas con otras áreas, temas transversales y efemérides; su unidad sobre los juegos de las abuelas y los abuelos, por ejemplo, se presta a una situación compartida con Ciencias Sociales: el juego tradicional como patrimonio inmaterial y la entrevista a personas mayores como fuente oral.",
    "El manual sugiere dar a la programación un <strong>título e hilo conductor</strong>, sobre todo en los primeros cursos: un personaje que se equivoca y aprende con ayuda del grupo, un viaje o un elemento de la historia local que reaparece en cada unidad y que puede abrir la defensa oral. Los <strong>elementos transversales</strong> (igualdad, convivencia, sostenibilidad, educación vial, competencia digital) y la <strong>cultura propia de la comunidad autónoma</strong> se integran en las situaciones; en Canarias, el patrimonio canario atraviesa el currículo y no debe quedar relegado a una unidad aislada en torno al 30 de mayo.",
    "Planificar Historia exige además transformar el conocimiento histórico en conocimiento escolar: Castañeda Meneses (2019) estudia esa transposición en la planificación docente de Historia y Ciencias Sociales. Y conviene conocer las dificultades habituales de la formación inicial: en 157 unidades didácticas de ciencias naturales elaboradas por futuros maestros, Toma, Greca y Meneses-Villagrá (2017) encontraron que solo una tercera parte permitiría desarrollar una indagación, y que la indagación se confundía a menudo con trabajo práctico de laboratorio descontextualizado. No es un dato de Ciencias Sociales, pero avisa de un riesgo común: llamar indagación a lo que sigue siendo transmisión."
  ],
  conceptos: [
    { t: "Secuenciación", d: "Orden de las situaciones de aprendizaje a lo largo del curso según criterios, contexto, progresión y calendario." },
    { t: "Temporalización", d: "Asignación de sesiones y trimestres a cada situación de aprendizaje." },
    { t: "Mapa de interrelación curricular", d: "Tabla o figura que relaciona objetivos, descriptores, competencias específicas, criterios y saberes con sus códigos." },
    { t: "Intradisciplinariedad", d: "Relación entre saberes de una misma área." },
    { t: "Interdisciplinariedad", d: "Relación entre saberes de áreas distintas en torno a un mismo reto." },
    { t: "Enfoque globalizador", d: "Organización de los aprendizajes en torno a problemas o centros de interés que integran varias áreas." },
    { t: "Hilo conductor", d: "Relato, personaje o pregunta que da unidad a la programación y conecta sus situaciones de aprendizaje." }
  ],
  cita: { texto: "una oportunidad para que el resto de disciplinas de la etapa se encuentren e interactúen", fuente: "Decreto 211/2022, introducción de Conocimiento del Medio (BOC n.º 231, p. 45548)" },
  matices: [
    { t: "Doce no es mejor que seis", d: "El número de situaciones no mide la calidad. Pocas situaciones bien construidas, que cubran todos los criterios, valen más que muchas fragmentadas." },
    { t: "Globalizar no es mezclar", d: "Una situación interdisciplinar necesita criterios de cada área implicada y evidencias para cada uno; no basta con colorear un mapa en Plástica." },
    { t: "La efeméride no es la unidad", d: "El Día de Canarias puede ser el momento de comunicar un producto, pero el patrimonio canario debe recorrer todo el curso." }
  ],
  aula: [
    "1.er ciclo: hilo conductor posible, una mascota que llega al barrio y quiere conocer su historia; cada situación le enseña algo (la familia, la calle, la fiesta, el oficio).",
    "2.º ciclo: secuencia posible de un trimestre, del tiempo personal a las huellas de los antiguos canarios en el municipio y de ahí a una sociedad antigua del Mediterráneo, comparando.",
    "3.er ciclo: situación interdisciplinar con Lengua y Matemáticas: investigar la población del municipio en el siglo XX con prensa histórica y gráficos, y presentar conclusiones en un debate.",
    "Ante el tribunal: entrega una tabla-resumen de las situaciones con título, trimestre, criterios y producto final; es lo primero que el tribunal busca."
  ],
  docente: {
    duracion: "35 minutos",
    dinamica: "Dar a cada grupo los criterios del bloque III de un ciclo y una cartulina con tres columnas (trimestres). Deben repartir cuatro situaciones de aprendizaje y demostrar, con pegatinas de colores, que todos los criterios aparecen al menos una vez.",
    preguntas: [
      "¿Qué criterios de Ciencias Sociales tienden a quedarse sin situación de aprendizaje y por qué?",
      "¿Cuándo conviene repetir un criterio en dos situaciones distintas?"
    ]
  },
  refs: ["jurado2022", "jimenez2021", "instr2627", "d211", "convoca2026", "castaneda2019", "toma2017"],
  retos: [
    {
      id: "e4-r1", tipo: "ordenar", titulo: "Levantar el edificio",
      consigna: "Ordena los pasos para organizar el curso en situaciones de aprendizaje.",
      items: [
        { t: "Analizar los criterios del ciclo y el contexto del grupo.", e: "Son el punto de partida." },
        { t: "Agrupar criterios y saberes en torno a retos con sentido para el alumnado.", e: "Así nacen las situaciones." },
        { t: "Ordenar las situaciones y temporalizarlas por trimestres.", e: "Progresión y calendario." },
        { t: "Comprobar en un mapa que todos los criterios aparecen y cuántas veces.", e: "El mapa verifica la cobertura." },
        { t: "Prever conexiones con otras áreas, con el plan del centro y con salidas complementarias.", e: "Globalización y comunidad." }
      ]
    },
    {
      id: "e4-r2", tipo: "clasificar", titulo: "Conexiones",
      consigna: "Clasifica cada decisión de una programación de Ciencias Sociales para 4.º.",
      categorias: ["Intradisciplinar", "Interdisciplinar", "Elemento transversal"],
      items: [
        { t: "Relacionar la línea del tiempo con los cambios de la vivienda en el municipio.", c: 0, e: "Tiempo histórico y patrimonio local son saberes de la misma área." },
        { t: "Calcular con Matemáticas cuántos siglos separan dos hechos.", c: 1, e: "Integra saberes de dos áreas." },
        { t: "Visibilizar a las mujeres de la historia local en todas las situaciones.", c: 2, e: "La igualdad es un elemento transversal que impregna la programación." },
        { t: "Escribir en Lengua la ficha de una pieza del museo de aula.", c: 1, e: "Comunicación escrita al servicio de un producto de Ciencias Sociales." },
        { t: "Conectar la vida de los antiguos canarios con el uso del agua y el territorio.", c: 0, e: "Sociedades en el tiempo y relación con el territorio, dentro del bloque III." },
        { t: "Cuidar el uso seguro de internet al buscar información.", c: 2, e: "La seguridad digital es transversal." }
      ]
    },
    {
      id: "e4-r3", tipo: "test", titulo: "Las plantas",
      preguntas: [
        { q: "Según la convocatoria canaria de 2026, la programación de Primaria incluye…", o: ["entre seis y doce unidades o situaciones de aprendizaje", "un mínimo de quince unidades didácticas numeradas", "exactamente doce situaciones, una por cada mes"], c: 0, e: "Numeradas, tituladas y temporalizadas; compruébalo en la convocatoria vigente." },
        { q: "El manual recomienda elaborar el mapa de interrelación curricular…", o: ["al principio, para decidir las situaciones de aprendizaje", "al final, para comprobar que no falta ningún elemento", "solo si la convocatoria lo exige de forma expresa"], c: 1, e: "Funciona como verificación de la coherencia del conjunto." },
        { q: "¿Qué ejemplo de Jiménez García (2021) se presta a una situación compartida con Ciencias Sociales?", o: ["La unidad dedicada a mejorar la velocidad", "La unidad de los días de lluvia", "La unidad sobre los juegos de antes"], c: 2, e: "Juego tradicional, patrimonio inmaterial y fuentes orales." }
      ]
    }
  ]
},

/* ===================================================================== 5 */
{
  id: "e5", num: 5,
  titulo: "El aula por dentro",
  sub: "La situación de aprendizaje: reto, tareas, metodologías y producto",
  lema: "¿Qué distingue una situación de aprendizaje de un tema con otro nombre?",
  idea: "Una situación de aprendizaje es un reto contextualizado que obliga a movilizar saberes para obtener un producto con sentido. Se compone de tareas, actividades y ejercicios; combina metodologías activas y termina en algo que se comunica a alguien.",
  prediccion: {
    q: "Un cuadernillo de fichas para completar sobre la Edad Antigua, ¿es una situación de aprendizaje?",
    o: ["Sí, si incluye muchas actividades distintas", "No: le falta un reto contextualizado con producto y transferencia", "Sí, si se resuelve en grupo"]
  },
  sintesis: [
    "El anexo III del Real Decreto 157/2022, que el manual resume, fija las condiciones de una situación de aprendizaje. Debe <strong>partir de los centros de interés</strong> del alumnado, permitirle construir conocimiento con autonomía y creatividad, integrar elementos curriculares de varias áreas mediante tareas significativas, estar <strong>contextualizada</strong>, respetar las experiencias y formas de entender del alumnado y presentar tareas de dificultad creciente conectadas con su vida. En su diseño se cuidan la <strong>transferencia</strong>, la articulación de conocimientos, destrezas y actitudes, unos objetivos claros y escenarios con agrupamientos diversos; en su puesta en práctica, la producción e interacción oral, los recursos auténticos analógicos y digitales y la orientación al interés común, la sostenibilidad o la convivencia democrática.",
    "El manual distingue, siguiendo una guía del Centro Nacional de Innovación e Investigación Educativa, tres piezas. El <strong>ejercicio</strong> comprueba el dominio de un conocimiento con una respuesta prefijada; es mecánico y repetitivo. La <strong>actividad</strong> pone en marcha procesos mentales. La <strong>tarea</strong> conduce a un producto final relevante que resuelve una situación-problema real en un contexto personal, familiar, escolar o social. Las tres caben en una situación de aprendizaje, pero es la tarea la que le da sentido; y, como insiste el manual, el proceso importa más que el resultado.",
    "Para la metodología, el manual recomienda no casarse con un único modelo y repasa el aprendizaje-servicio, la clase invertida, el aprendizaje basado en proyectos (problemática, propuesta, elaboración del producto y difusión), las estructuras cooperativas, el aprendizaje basado en problemas, la gamificación y la enseñanza por indagación. El Decreto 211/2022 añade para Conocimiento del Medio el aprendizaje basado en juegos, las <strong>estaciones de aprendizaje</strong>, el pensamiento visual, el aprendizaje basado en el pensamiento y la tutoría entre iguales, y modelos de enseñanza como la indagación científica, la investigación guiada y grupal, el inductivo, el deductivo y el juego de roles, con el docente como guía.",
    "El propio manual pone un ejemplo de Ciencias Sociales con aprendizaje basado en proyectos: un <strong>callejero de la localidad</strong> con personajes históricos que «cuentan» por qué se les recuerda, situados en su época. En un municipio canario puede convertirse en una situación de segundo ciclo muy completa: investigar los nombres de las calles con fuentes escritas y orales, situar a cada persona en una línea del tiempo, preguntarse por qué hay tan pocas mujeres en el nomenclátor y proponer al ayuntamiento un nombre nuevo justificado. Trabaja los criterios 7.1, 7.2 y 9.2 y el saber III.2.2, que pide reconocer las huellas de la historia en lugares del municipio.",
    "En la oposición, la unidad didáctica se configura como situación de aprendizaje. El manual propone estos apartados: identificación, introducción y justificación, marco legal y teórico, condiciones contextuales, descripción del producto final, concreción curricular, secuencia didáctica (actividades, temporalización y metodología), evaluación, atención a la diversidad, evaluación de la práctica docente y conclusión. La convocatoria canaria de 2026 exige además enfoque globalizador, agrupamientos, espacios y recursos, transversalidad, contextos de Canarias y referencias, y que al menos un 30 % del desarrollo de los contenidos de la unidad se plantee con métodos propios de la educación a distancia."
  ],
  conceptos: [
    { t: "Situación de aprendizaje", d: "Conjunto de situaciones y actividades que exigen al alumnado actuaciones asociadas a competencias clave y específicas, y que contribuyen a desarrollarlas." },
    { t: "Tarea", d: "Elaboración de un producto final relevante que resuelve una situación-problema real movilizando saberes." },
    { t: "Actividad", d: "Acción que pone en marcha procesos mentales al servicio de la tarea." },
    { t: "Ejercicio", d: "Acción con respuesta prefijada para comprobar o automatizar un conocimiento." },
    { t: "Producto final", d: "Resultado tangible y comunicable de la situación (museo, pódcast, mapa, campaña) que permite observar los aprendizajes." },
    { t: "Transferencia", d: "Capacidad de aplicar lo aprendido a contextos nuevos y cercanos a la vida del alumnado." },
    { t: "Modelo de enseñanza", d: "Estructura de interacción docente-alumnado (indagación, investigación guiada, inductivo, deductivo, juego de roles) que organiza las actividades." }
  ],
  cita: { texto: "situaciones y actividades que implican el despliegue por parte del alumnado de actuaciones asociadas a competencias clave y competencias específicas", fuente: "Real Decreto 157/2022, art. 2.f (texto normativo)" },
  matices: [
    { t: "Activo no es solo manipulativo", d: "Recortar y pegar puede ser pasivo si no exige pensar. Lo activo es el proceso cognitivo: preguntar, contrastar, decidir y argumentar." },
    { t: "El producto no se califica por su acabado", d: "Un museo de aula precioso puede esconder poco aprendizaje. El producto es una ocasión para observar evidencias de los criterios, no el objeto de la calificación (estación 7)." },
    { t: "No es el tema del libro con otro nombre", d: "Si se puede cambiar el título «situación de aprendizaje» por «tema 6» sin cambiar nada más, falta el reto contextualizado." }
  ],
  aula: [
    "1.er ciclo: «La maleta de la abuela»: cada familia presta un objeto antiguo; el grupo los ordena en el tiempo y prepara una exposición para el ciclo (criterios 7.1 y 8.1).",
    "2.º ciclo: «Nuestro callejero con historia»: nomenclátor, entrevistas y propuesta razonada al ayuntamiento (criterios 7.1, 7.2 y 9.2).",
    "3.er ciclo: «Voces de la memoria»: pódcast sobre cómo vivieron la Transición personas del municipio, con fuentes orales y prensa contrastadas (criterios 2.2 y 7.1; saber III.2.3).",
    "Ante el tribunal: describe el producto final en una frase al principio de la exposición; el resto de la situación se entiende a partir de él."
  ],
  docente: {
    duracion: "30 minutos",
    dinamica: "Mostrar tres propuestas sobre el mismo criterio: un ejercicio, una actividad y una tarea. Los grupos las identifican y transforman el ejercicio en una tarea con producto y destinatario reales.",
    preguntas: [
      "¿Qué hace que un producto final tenga destinatario real?",
      "¿Qué metodología elegiríais para un grupo con poca experiencia en trabajo cooperativo y por qué?"
    ]
  },
  refs: ["jurado2022", "rd157", "d211", "convoca2026", "garcia2023", "prieto2024", "gomez2025"],
  retos: [
    {
      id: "e5-r1", tipo: "clasificar", titulo: "¿Ejercicio, actividad o tarea?",
      consigna: "Clasifica cada propuesta de una situación sobre la Prehistoria en Canarias.",
      categorias: ["Ejercicio", "Actividad", "Tarea"],
      items: [
        { t: "Completar con fechas una línea del tiempo ya dibujada.", c: 0, e: "Respuesta prefijada." },
        { t: "Comparar dos viviendas antiguas y explicar por qué eran distintas.", c: 1, e: "Exige procesos de comparación y explicación." },
        { t: "Diseñar con el grupo la cartela de una pieza para el museo de aula que visitarán las familias.", c: 2, e: "Producto final con destinatario real." },
        { t: "Repetir oralmente los nombres de los períodos de la Prehistoria.", c: 0, e: "Automatización sin elaboración." },
        { t: "Formular hipótesis sobre el uso de un objeto a partir de su forma y su material.", c: 1, e: "Proceso de inferencia." },
        { t: "Preparar y guiar una visita al yacimiento del municipio para el alumnado de 1.º.", c: 2, e: "Resuelve una situación real y moviliza varios saberes." }
      ]
    },
    {
      id: "e5-r2", tipo: "ordenar", titulo: "Las fases de un proyecto",
      consigna: "Ordena las fases del aprendizaje basado en proyectos que describe el manual.",
      items: [
        { t: "Identificar una problemática vinculada a la vida del alumnado.", e: "Da sentido al proyecto." },
        { t: "Proponer un proyecto que ofrezca una solución.", e: "Planificación con el grupo." },
        { t: "Elaborar el producto.", e: "Investigación y creación." },
        { t: "Difundir el producto a sus destinatarios.", e: "Comunicación y cierre." }
      ]
    },
    {
      id: "e5-r3", tipo: "test", titulo: "Por dentro",
      preguntas: [
        { q: "¿Qué rasgo es imprescindible en una situación de aprendizaje?", o: ["Un contexto significativo que exija transferir lo aprendido", "El uso de dispositivos digitales en todas las sesiones", "Una duración mínima de seis sesiones"], c: 0, e: "La contextualización y la transferencia la distinguen de una lista de ejercicios." },
        { q: "Según el manual, en una tarea importa más…", o: ["la calidad estética del producto final", "el proceso de elaboración del producto", "el número de saberes que se trabajan"], c: 1, e: "El producto es la meta; el aprendizaje está en el proceso." },
        { q: "¿Cuál de estos es un modelo de enseñanza que el Decreto 211/2022 cita para Conocimiento del Medio?", o: ["La instrucción programada", "La lección magistral", "El juego de roles"], c: 2, e: "Junto con la indagación científica, la investigación guiada, el inductivo y el deductivo." }
      ]
    }
  ]
},

/* ===================================================================== 6 */
{
  id: "e6", num: 6,
  titulo: "Rampas y puertas",
  sub: "Inclusión, Diseño Universal para el Aprendizaje y acción tutorial",
  lema: "¿Se pone la rampa cuando llega la primera silla de ruedas?",
  idea: "Un edificio accesible se proyecta accesible desde el plano. La atención a la diversidad no es un anexo: es un diseño con múltiples formas de implicación, de representación y de acción y expresión, completado con medidas específicas cuando hacen falta.",
  prediccion: {
    q: "¿Cuándo se piensa la atención a la diversidad de una situación de aprendizaje?",
    o: ["Cuando se detecta a un alumno o una alumna con dificultades", "Desde el diseño, para todo el grupo, con medidas específicas cuando se necesiten", "Solo al redactar la adaptación curricular"]
  },
  sintesis: [
    "El <strong>Diseño Universal para el Aprendizaje</strong> (DUA) parte de que la variabilidad es la norma y propone eliminar barreras desde el diseño. Sus pautas, revisadas por CAST en la versión 3.0 (2024), se organizan en tres principios: múltiples formas de <strong>implicación</strong>, de <strong>representación</strong> y de <strong>acción y expresión</strong>. El Decreto 211/2022 declara que el currículo de Conocimiento del Medio se ha construido desde el DUA y pide situaciones de aprendizaje con diseños flexibles desde el principio y opciones personalizables. Las instrucciones de 2026-2027 exigen instrumentos de evaluación heterogéneos, accesibles y ajustados, que apliquen expresamente los principios de representación y de acción y expresión.",
    "El manual distingue entre <strong>medidas ordinarias o generales</strong>, dirigidas a todo el grupo (agrupamientos flexibles, desdoblamientos, apoyo de un segundo docente dentro del aula, programas de refuerzo, metodologías activas y diversas, materiales adecuados), y <strong>medidas específicas</strong> para el alumnado con necesidad específica de apoyo educativo (NEAE), como las adaptaciones curriculares o el apoyo especializado. En Canarias, las adaptaciones parten de los criterios de evaluación de su referente curricular y se ajustan a la temporalización de la programación del grupo, de modo que el alumnado trabaje las mismas habilidades, destrezas y actitudes ajustadas a su nivel: inclusión dentro del aula, no en paralelo.",
    "Jiménez García (2021) aporta ejemplos concretos desde la Educación Física: ayuda entre iguales, roles alternativos (encargado del material, árbitro), instrucciones más sencillas con apoyo visual y sonoro, situarse cerca sin dar la espalda, carteles explicativos. Propone también una «unidad cero» de actividades para los días en que no se puede salir al patio. Es la misma lógica del <strong>plan alternativo</strong> que exige la convocatoria canaria de 2026: la programación debe incluir su posible adaptación a un modelo no presencial, y la unidad didáctica, desarrollar al menos un 30 % de los contenidos con métodos que faciliten la educación a distancia, con su evaluación.",
    "La <strong>acción tutorial</strong> completa el edificio. El manual la organiza en actuaciones con el alumnado (clima de convivencia positiva, planes de acogida, tránsito entre niveles y etapas, detección de necesidades de apoyo, tutorías de grupo), con las familias (formas de comunicación, información académica, tutorías individuales y de grupo, compromisos, tutoría electrónica) y de coordinación del equipo docente y de orientación. En Ciencias Sociales las familias no son solo destinatarias de informes: son fuente oral, guardianas de objetos y memoria, y público de los productos finales; el Decreto 211/2022 pide abrir el aprendizaje a las familias y a otros agentes comunitarios.",
    "En el área hay recursos que abren puertas a casi todo el grupo: líneas del tiempo manipulables, mapas en relieve o táctiles, textos de lectura fácil, pictogramas, imágenes con descripción, roles cooperativos claros y productos a elegir (audio, dibujo, maqueta, texto, vídeo). La diversidad cultural del aula es además un recurso para la competencia específica 8, siempre que nadie quede expuesto ni reducido a su origen."
  ],
  conceptos: [
    { t: "Diseño Universal para el Aprendizaje", d: "Marco que reduce barreras desde el diseño mediante múltiples formas de implicación, representación y acción y expresión (CAST, 2024)." },
    { t: "Medida ordinaria o general", d: "Decisión organizativa o metodológica para todo el grupo que favorece el aprendizaje de todo el alumnado." },
    { t: "Medida específica", d: "Respuesta dirigida a necesidades concretas de un alumno o alumna, como la adaptación curricular o el apoyo especializado." },
    { t: "Adaptación curricular", d: "Ajuste de los elementos del currículo para alumnado con NEAE; en Canarias parte de los criterios de su referente curricular." },
    { t: "NEAE", d: "Necesidad específica de apoyo educativo." },
    { t: "Acción tutorial", d: "Acompañamiento del alumnado y coordinación con las familias y con el equipo docente." },
    { t: "Escenario no presencial", d: "Adaptación prevista de actividades e instrumentos a la enseñanza telemática." }
  ],
  cita: { texto: "se planificarán a partir de diseños flexibles desde el principio", fuente: "Decreto 211/2022, sobre las situaciones de aprendizaje de Conocimiento del Medio (BOC n.º 231, p. 45558)" },
  matices: [
    { t: "DUA no es hacer tres fichas", d: "Multiplicar fichas no elimina barreras. Se trata de ofrecer vías distintas para acceder a la información y para demostrar el aprendizaje del mismo criterio." },
    { t: "Diversidad cultural no es folclore", d: "Pedir a una alumna que «explique su país» puede exponerla. Mejor partir de preguntas compartidas (¿cómo se celebra?, ¿qué se come?) a las que todo el grupo responde." },
    { t: "Telemático no es mandar fichas por correo", d: "El escenario no presencial debe mantener la interacción, la retroalimentación y las evidencias de los criterios, con recursos accesibles para todas las familias." }
  ],
  aula: [
    "1.er ciclo: secuencia de pictogramas para la rutina de la investigación (pregunto, busco, cuento) y respuesta oral o dibujada como alternativa a la escrita.",
    "2.º ciclo: museo de aula en el que cada grupo elige el formato de la cartela (texto, audio con código QR o dibujo comentado), evaluada con la misma rúbrica.",
    "3.er ciclo: debate sobre migraciones con roles rotativos, banco de expresiones para argumentar y posibilidad de aportar la opinión por escrito.",
    "Ante el tribunal: explica una medida de cada principio DUA en tu situación y una medida específica para un caso descrito en el contexto del grupo."
  ],
  docente: {
    duracion: "25 minutos",
    dinamica: "Analizar una actividad real del libro de texto e identificar sus barreras. Rediseñarla con una opción por cada principio DUA sin cambiar el criterio evaluado.",
    preguntas: [
      "¿Qué barreras son habituales en las tareas de Historia basadas en la lectura de textos largos?",
      "¿Cómo se garantiza que la alternativa no rebaje el criterio?"
    ]
  },
  refs: ["cast2024", "d211", "instr2627", "jurado2022", "jimenez2021", "convoca2026"],
  retos: [
    {
      id: "e6-r1", tipo: "clasificar", titulo: "Tres puertas",
      consigna: "¿A qué principio del DUA responde cada decisión?",
      categorias: ["Implicación", "Representación", "Acción y expresión"],
      items: [
        { t: "Permitir elegir entre presentar la investigación en un audio, un cómic o un texto.", c: 2, e: "Varias formas de demostrar el aprendizaje." },
        { t: "Ofrecer el texto de la fuente con lectura fácil y con audio.", c: 1, e: "Varias formas de acceder a la información." },
        { t: "Partir de una pregunta sobre el propio barrio que el grupo quiere resolver.", c: 0, e: "Conecta con el interés y da sentido." },
        { t: "Presentar la línea del tiempo con imágenes, colores y objetos manipulables.", c: 1, e: "Representación multimodal." },
        { t: "Dejar que cada grupo fije una meta propia dentro del reto común y la revise a mitad.", c: 0, e: "Autorregulación y compromiso." },
        { t: "Facilitar plantillas y organizadores para planificar la exposición oral.", c: 2, e: "Apoyo a la planificación de la expresión." }
      ]
    },
    {
      id: "e6-r2", tipo: "clasificar", titulo: "¿Para todo el grupo o para alguien?",
      consigna: "Clasifica cada medida de atención a la diversidad.",
      categorias: ["Ordinaria o general", "Específica"],
      items: [
        { t: "Agrupamientos heterogéneos con roles rotativos.", c: 0, e: "Afecta a todo el grupo." },
        { t: "Adaptación curricular a partir de los criterios del primer ciclo para un alumno de 4.º.", c: 1, e: "Responde a una necesidad concreta." },
        { t: "Docencia compartida en las sesiones de investigación.", c: 0, e: "Organización ordinaria del aula." },
        { t: "Intervención del profesorado especialista de apoyo a las NEAE.", c: 1, e: "Recurso específico." },
        { t: "Materiales con tipografía legible y apoyo visual para todo el grupo.", c: 0, e: "Accesibilidad universal." }
      ]
    },
    {
      id: "e6-r3", tipo: "test", titulo: "Accesos",
      preguntas: [
        { q: "En Canarias, la adaptación curricular de un alumno con NEAE…", o: ["sustituye los criterios por objetivos individuales sin relación con el grupo", "se trabaja aparte, fuera del aula y con un horario propio", "parte de los criterios de su referente curricular y sigue la temporalización del grupo"], c: 2, e: "Mismas habilidades y destrezas, ajustadas a su nivel." },
        { q: "Según la convocatoria canaria de 2026, la unidad didáctica debe plantear con métodos de educación a distancia…", o: ["al menos un 30 % del desarrollo de los contenidos", "todas las actividades que se vayan a evaluar", "solo las actividades finales de evaluación"], c: 0, e: "La programación, además, debe prever su posible adaptación a un modelo no presencial." },
        { q: "La «unidad cero» de Jiménez García (2021) recuerda que una programación…", o: ["debe empezar siempre por una evaluación inicial de todo el grupo", "debe prever alternativas cuando no se puede hacer lo planificado", "debe dedicar una unidad completa a la convivencia y a las normas"], c: 1, e: "Son actividades previstas para los días en que no se puede salir al patio." }
      ]
    }
  ]
},

/* ===================================================================== 7 */
{
  id: "e7", num: 7,
  titulo: "El libro de obra",
  sub: "Evaluar y calificar conforme a las instrucciones de Canarias",
  lema: "¿Se mide la obra por su fachada o por su estructura?",
  idea: "Evaluar es recoger evidencias para decidir y ayudar a aprender; calificar es traducir el nivel de logro de cada criterio a un calificador. En Canarias, desde 2026-2027, los criterios no se ponderan, los instrumentos no se puntúan y en Primaria no se usan calificaciones numéricas.",
  prediccion: {
    q: "Una programación establece: «examen, 60 %; cuaderno, 20 %; actitud, 20 %». ¿Es válida en Canarias en 2026-2027?",
    o: ["Sí, porque los porcentajes suman cien", "Sí, si los acuerda el equipo de ciclo", "No: no se ponderan instrumentos ni se califican aspectos ajenos a los criterios"]
  },
  sintesis: [
    "La evaluación, recuerda el manual citando a Tenbrink y a Gómez, consiste en recoger información para formular juicios y tomar decisiones. Sus <strong>referentes</strong> son los criterios de evaluación. Las <strong>técnicas</strong> son el modo de evaluar (observación, análisis de producciones, pruebas, intercambios orales) y los <strong>instrumentos</strong>, el soporte en que se registra (anecdotario, diario de clase, lista de control, escala, rúbrica). Intervienen distintos <strong>agentes</strong> (heteroevaluación, autoevaluación y coevaluación) en distintos <strong>momentos</strong> (inicial, continua y final). La revisión de Black y Wiliam (1998) mostró que la evaluación formativa, con retroalimentación frecuente, produce mejoras sustanciales del aprendizaje.",
    "Las instrucciones de Canarias para 2026-2027 convierten las <strong>rúbricas de evaluación LOMLOE Canarias</strong> en la herramienta de referencia para determinar el nivel de desempeño en cada criterio y convertirlo en calificación; describen cuatro niveles de logro (Insuficiente, Suficiente/Bien, Notable y Sobresaliente). El profesorado de un mismo nivel acuerda en el ciclo los <strong>criterios de calificación</strong>, que se recogen en el apartado «Evaluación» de la programación y no pueden contemplar aspectos ajenos a los criterios, como la puntualidad, la asistencia, el trabajo diario, la actitud o la tarea. En Primaria los calificadores son Insuficiente, Suficiente, Bien, Notable y Sobresaliente, y no se usan calificaciones numéricas ni en las valoraciones informativas ni en la final.",
    "Lo más novedoso es la prohibición de calcular. La calificación de un criterio no es el resultado de operaciones aritméticas con las notas de los instrumentos, y la programación no puede asignar puntuación ni ponderación a los instrumentos. Si un mismo aprendizaje obtiene valoraciones distintas, el profesorado decide cuál refleja mejor el logro: la más alta, la más repetida o la última. La calificación del área es una valoración global en la que todos los criterios implementados pesan lo mismo; la del tercer período no es la media de las anteriores. Las <strong>competencias clave</strong> se califican de forma colegiada en la sesión final con los términos Poco adecuado, Adecuado, Muy adecuado y Excelente.",
    "Aquí el manual y la norma canaria se separan. Ramírez García, Jurado y Ruiz (2022) proponen asignar a cada criterio un peso porcentual en cada unidad, de modo que la suma sea cien, y calcular la calificación final a partir de esos pesos. Aciertan al advertir que no deben ponderarse los instrumentos, que es justamente lo que prohíben las instrucciones; pero su propuesta de pesos por criterio choca con la regla canaria de que ningún criterio vale más que otro. En una oposición en Canarias debe seguirse la Orden de 31 de mayo de 2023 y las instrucciones vigentes, no el ejemplo del manual.",
    "El libro de obra también registra cómo trabaja quien construye. La <strong>evaluación de la práctica docente</strong> (manual, apartado 3.18) usa indicadores sobre la planificación y sobre la práctica en el aula, e instrumentos como el cuestionario de autoevaluación, la encuesta al alumnado, la escala de observación, la grabación de una clase, el análisis de los propios documentos o la observación de otra persona en el aula, para introducir cambios. Y cuando el progreso no llega, las instrucciones obligan a activar cuanto antes <strong>medidas de refuerzo</strong> y, para áreas no superadas, un plan individualizado compartido con la familia y diseñado con los principios del DUA."
  ],
  conceptos: [
    { t: "Técnica de evaluación", d: "Modo de obtener información: observación, análisis de producciones, pruebas, intercambios orales." },
    { t: "Instrumento de evaluación", d: "Soporte o producción en que se recogen las evidencias (cuaderno de campo, pódcast, lista de control, rúbrica)." },
    { t: "Rúbrica", d: "Matriz que describe niveles de desempeño para un conjunto de aspectos; en Canarias, las rúbricas LOMLOE oficiales son la referencia." },
    { t: "Criterios de calificación", d: "Procedimientos acordados en el ciclo para convertir las evidencias en la calificación de cada criterio; no pueden incluir aspectos ajenos a ellos." },
    { t: "Calificador", d: "Término oficial de calificación: en Primaria, de Insuficiente a Sobresaliente; para las competencias clave, de Poco adecuado a Excelente." },
    { t: "Evaluación formativa", d: "Uso de la información de la evaluación para retroalimentar y ajustar el aprendizaje y la enseñanza mientras ocurren." },
    { t: "Autoevaluación y coevaluación", d: "Valoración del propio aprendizaje y del de los compañeros con criterios compartidos." }
  ],
  cita: { texto: "no se podrá otorgar una puntuación o ponderación a los instrumentos de evaluación", fuente: "Instrucciones de evaluación y calificación de Canarias, 2026-2027, segunda, 10" },
  matices: [
    { t: "Manual frente a Canarias: el peso de los criterios", d: "El ejemplo del manual que reparte cien puntos entre criterios no se ajusta a las instrucciones canarias de 2026-2027, según las cuales todos los criterios tienen la misma importancia y no pueden ponderarse." },
    { t: "Se califica el aprendizaje, no el producto", d: "Si se emite una calificación informativa de un instrumento, debe referirse al nivel de logro de los aprendizajes vinculados, no al producto en sí." },
    { t: "La actitud no es un criterio", d: "Las actitudes que forman parte de un criterio (por ejemplo, respetar el patrimonio en el 5.3) se evalúan dentro de él; la «actitud» genérica no puede sumar ni restar." }
  ],
  aula: [
    "1.er ciclo: observación con lista de control durante la exposición de objetos y una diana de autoevaluación con caras; registro en la herramienta derivada de la rúbrica oficial.",
    "2.º ciclo: cuaderno de investigación del callejero y coevaluación de las cartelas con tres preguntas pactadas; la calificación del criterio 7.2 sale del análisis de esas evidencias, sin porcentajes.",
    "3.er ciclo: guion del pódcast, registro de fuentes contrastadas y entrevista final; el alumnado conoce la rúbrica desde el inicio.",
    "Ante el tribunal: explica el procedimiento de calificación con un ejemplo de criterio y nombra las tres opciones de las instrucciones (nivel más alto, más repetido o último)."
  ],
  docente: {
    duracion: "30 minutos",
    dinamica: "Repartir el apartado de evaluación de una programación ficticia con pesos por instrumentos y por criterios. Los grupos lo reescriben conforme a las instrucciones de 2026-2027 y explican cada cambio.",
    preguntas: [
      "¿Qué ventajas y qué riesgos tiene renunciar a la media aritmética?",
      "¿Cómo se explica a una familia que su hija tiene un Notable en un criterio sin ninguna nota numérica?"
    ]
  },
  refs: ["instr2627", "orden2023", "rubricas2025", "jurado2022", "black1998", "convoca2026"],
  retos: [
    {
      id: "e7-r1", tipo: "clasificar", titulo: "¿Cabe en una programación canaria de 2026-2027?",
      consigna: "Decide si cada decisión se ajusta a las instrucciones de evaluación y calificación.",
      categorias: ["Se ajusta", "No se ajusta"],
      items: [
        { t: "Calificar el criterio 7.1 a partir de las evidencias del museo de aula contrastadas con la rúbrica oficial.", c: 0, e: "Es el procedimiento previsto." },
        { t: "Asignar al examen escrito el 40 % de la nota del área.", c: 1, e: "No se puntúan ni ponderan instrumentos." },
        { t: "Restar nota por no traer el material.", c: 1, e: "Aspectos ajenos a los criterios no pueden incidir." },
        { t: "Optar por el último nivel de logro alcanzado en un aprendizaje trabajado varias veces.", c: 0, e: "Es una de las tres opciones de las instrucciones." },
        { t: "Comunicar a las familias un 7,5 en Conocimiento del Medio.", c: 1, e: "En Primaria no se usan calificadores numéricos." },
        { t: "Usar listas de control y escalas derivadas de la rúbrica oficial.", c: 0, e: "El profesorado puede concretar la rúbrica en herramientas propias." },
        { t: "Dar más peso al criterio 7.2 porque se trabaja en más sesiones.", c: 1, e: "Todos los criterios tienen la misma importancia." }
      ]
    },
    {
      id: "e7-r2", tipo: "test", titulo: "El libro de obra",
      preguntas: [
        { q: "¿Qué calificadores se usan en Primaria para las áreas en Canarias?", o: ["De 1 a 10, sin decimales", "Insuficiente, Suficiente, Bien, Notable y Sobresaliente", "Poco adecuado, Adecuado, Muy adecuado y Excelente"], c: 1, e: "La escala de Poco adecuado a Excelente es la de las competencias clave." },
        { q: "La calificación del tercer período de evaluación…", o: ["resulta del análisis de la información de todo el curso sobre los criterios", "es la media aritmética de las calificaciones obtenidas en los tres períodos", "coincide con la calificación obtenida en la prueba final escrita del área"], c: 0, e: "No es una media de períodos." },
        { q: "¿En qué coinciden el manual de 2022 y las instrucciones canarias?", o: ["En que cada criterio debe tener un peso porcentual distinto", "En que la calificación final se obtiene con una media ponderada", "En que no deben ponderarse los instrumentos de evaluación"], c: 2, e: "Discrepan, en cambio, sobre la ponderación de los criterios." }
      ]
    }
  ]
}
];
