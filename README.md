# El estudio del arquitecto

Aplicativo web 3D (Three.js 0.160.0) para estudiar la **programación didáctica de Conocimiento del Medio (Ciencias Sociales) en Canarias** y preparar la segunda prueba de la oposición al Cuerpo de Maestros. Forma parte de la serie de aplicativos de Didáctica de las Ciencias Sociales (Grado en Educación Primaria, FCEDU-ULPGC), con el mismo patrón que *Cronos y Kairós* y *El laboratorio del historiador*.

**Versión:** 1.1 (14 de noviembre de 2026), tras la auditoría (informe en el proyecto: `auditorias/estudio-arquitecto.md`).

## Contenido

Siete láminas en un estudio de arquitectura; cada lámina sellada añade una pieza a la maqueta del centro:

1. **El encargo y el solar**: qué es programar, niveles de concreción, fuentes del currículo, contexto.
2. **Los cimientos curriculares**: objetivos, competencias, criterios y saberes; el bloque competencial canario.
3. **El plano maestro**: análisis del criterio, alineamiento constructivo y diseño inverso.
4. **Las plantas del edificio**: secuenciar el curso en 6-12 situaciones de aprendizaje.
5. **El aula por dentro**: la situación de aprendizaje, tareas, metodologías y producto.
6. **Rampas y puertas**: DUA, medidas de atención a la diversidad, escenario no presencial y acción tutorial.
7. **El libro de obra**: evaluar y calificar según las instrucciones de Canarias de 2026-2027.

Herramientas: Guía de estudio (mapa conceptual, cuadros, cronología, currículo literal), tarjetas de repaso (cajas de Leitner), examen aleatorio (12 de 35), glosario, **Mesa de dibujo** (borrador de situación de aprendizaje con criterios literales del Decreto 211/2022) y **Sala del tribunal** (requisitos de la convocatoria de 2026, lista de comprobación, cronómetros de defensa y exposición, preguntas de ensayo). Modo docente con el ancla `#docente`.

## Fuentes y advertencias

- Fuente principal: Ramírez García, Jurado y Ruiz (2022), edición LOMLOE. La edición de 2021 (LOMCE) y Jiménez García (2021, LOMCE y Andalucía) se usan solo como contraste o por ideas vigentes.
- Normativa cotejada literalmente: Real Decreto 157/2022 (art. 2), Decreto 211/2022 (Conocimiento del Medio) e instrucciones de evaluación y calificación de Canarias para 2026-2027.
- **Discrepancia señalada**: el manual pondera criterios para calificar; las instrucciones canarias de 2026-2027 lo impiden (lámina 7).
- **Datos perecederos**: los requisitos de la oposición proceden de la Orden de 18 de marzo de 2026 (BOC n.º 58), cotejada en el BOC salvo la tabla de penalizaciones (tomada de una copia). Cambian con cada convocatoria.
- Investigación con DOI contrastado: Biggs (1996), Krathwohl (2002), Black y Wiliam (1998), García-Carmona (2023), Prieto Román (2024), Gómez-Jiménez y Rodríguez Torres (2025), Toma et al. (2017), Castañeda Meneses (2019).

## Créditos, licencias y uso de IA

- Contenido: CC BY-NC 4.0. Redacción y programación con asistencia de un modelo de IA (Claude, Anthropic), bajo dirección y revisión de la titular del recurso. Requiere revisión docente antes de usarse con alumnado.
- Citas de los manuales: breves y atribuidas; los textos normativos se transcriben literalmente.
- Three.js 0.160.0 (MIT), cargado desde jsDelivr. Tipografías Cinzel, Atkinson Hyperlegible y JetBrains Mono (SIL OFL), desde Google Fonts.
- Escena 3D procedimental: ningún objeto reproduce un edificio, una obra o una imagen concreta.

## Estructura

```
index.html
css/estilos.css
js/app.js · js/escena.js · js/retos.js
datos/estaciones.js · datos/estudio.js · datos/complementos.js · datos/referencias.js
```

Corregir contenido solo exige editar `datos/`. El progreso se guarda en `localStorage` del navegador.
