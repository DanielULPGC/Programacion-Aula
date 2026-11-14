/*
 * El estudio del arquitecto · interfaz
 * Índice | escena | ficha. Rutas por ancla: #inicio, #e1…#e7, #diseno, #tribunal, #estudio, #tarjetas,
 * #examen, #glosario, #bibliografia, #guia y #docente (activa el modo docente en esta pestaña).
 */
const E = window.ESTACIONES, R = window.REFERENCIAS, X = window.EXAMEN.concat(window.EXAMEN_EXTRA || []), G = window.GLOSARIO, D = window.DISENO;
const S = window.ESTUDIO || {}, GU = window.GUIA || {};
const CU = window.CURRICULO, TR = window.TRIBUNAL;
const $ = (s) => document.querySelector(s);
const ficha = $("#ficha");
const CLAVE = "estudio-arquitecto-v1";

/* ---------- estado (solo en este navegador) ---------- */
let estado = { resueltos: {}, predicciones: {}, examen: null, pestana: {}, apuntes: {}, respuestas: {}, repasadas: {}, cajas: {}, lista: {} };
try { const g = JSON.parse(localStorage.getItem(CLAVE) || "null"); if (g) estado = Object.assign(estado, g); } catch (e) { /* sin almacenamiento */ }
const guardar = () => { try { localStorage.setItem(CLAVE, JSON.stringify(estado)); } catch (e) { /* sin almacenamiento */ } };
let temporizador = null;
const guardarPronto = () => { clearTimeout(temporizador); temporizador = setTimeout(guardar, 400); };
let docente = false;
try { docente = sessionStorage.getItem("ea-docente") === "1"; } catch (e) { /* nada */ }

const retosDe = (est) => est.retos.map((r) => r.id);
const hechosDe = (est) => retosDe(est).filter((id) => estado.resueltos[id]).length;
const completa = (est) => hechosDe(est) === est.retos.length;

/* ---------- utilidades ---------- */
function h(tag, attrs = {}, ...hijos) {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") n.className = v;
    else if (k === "html") n.innerHTML = v;
    else if (k.startsWith("on")) n.addEventListener(k.slice(2), v);
    else if (v !== false && v != null) n.setAttribute(k, v);
  }
  hijos.flat().forEach((c) => { if (c != null) n.append(c.nodeType ? c : document.createTextNode(c)); });
  return n;
}
function refHTML(clave) {
  const r = R[clave]; if (!r) return "";
  let s = r.cita;
  if (r.doi) s += ` <a href="https://doi.org/${r.doi}" target="_blank" rel="noopener">https://doi.org/${r.doi}</a>`;
  else if (r.url) s += ` <a href="${r.url}" target="_blank" rel="noopener">${r.url}</a>`;
  if (r.nota) s += `<span class="nota">${r.nota}</span>`;
  return s;
}
let primeraVista = true;
function irArriba() {
  ficha.scrollTop = 0;
  if (!primeraVista && window.innerWidth <= 1100) ficha.scrollIntoView({ behavior: "smooth", block: "start" });
  primeraVista = false;
}

/* ---------- índice ---------- */
function pintarIndice(actual) {
  const ul = $("#lista-estaciones"); ul.innerHTML = "";
  E.forEach((est, i) => {
    const n = hechosDe(est), t = est.retos.length, ok = n === t;
    ul.append(h("li", {}, h("button", {
      type: "button", "aria-current": actual === est.id ? "true" : "false",
      onclick: () => navegar(est.id)
    }, h("span", { class: "num" }, String(est.num)), h("span", { class: "tit" }, est.titulo),
       h("span", { class: "est mono" + (ok ? " hecho" : ""), "aria-label": `${n} de ${t} retos` }, ok ? "✓" : `${n}/${t}`))));
  });
  const nComp = E.filter(completa).length;
  $("#progreso-relleno").style.width = `${(nComp / 7) * 100}%`;
  $(".barra-progreso").setAttribute("aria-valuenow", String(nComp));
  $("#pildora-progreso").textContent = `${nComp} de 7 láminas selladas`;
  if (escena) escena.marcarResueltas(E.map(completa));
}

/* ---------- vistas ---------- */
function vistaInicio() {
  ficha.innerHTML = "";
  ficha.append(
    h("p", { class: "etiqueta" }, "Didáctica de las Ciencias Sociales · Programación en Conocimiento del Medio"),
    h("h2", {}, "El estudio del arquitecto"),
    h("p", { class: "sub" }, "La programación didáctica y las situaciones de aprendizaje de Ciencias Sociales en Canarias"),
    h("p", { class: "lema" }, "Un centro público canario necesita su programación de Conocimiento del Medio. Como maestra o maestro, la proyectas en el estudio: cada lámina sellada añade una pieza a la maqueta del edificio, de los cimientos a la cubierta."),
    h("p", {}, "Programar se parece a proyectar un edificio: hay que conocer el solar (el contexto), asentar los cimientos (el currículo), dibujar el plano maestro (el criterio de evaluación), levantar las plantas (la secuencia del curso), diseñar las aulas por dentro (las situaciones de aprendizaje), prever rampas y puertas (la inclusión) y llevar el libro de obra (la evaluación). El recurso sirve para estudiar la materia en el Grado y, en su Sala del tribunal, para preparar la segunda prueba de la oposición."),
    h("h3", {}, "Cómo se trabaja cada lámina"),
    h("ol", { class: "lista-plana" },
      h("li", {}, h("strong", {}, "Predice. "), "Responde a la pregunta inicial antes de leer."),
      h("li", {}, h("strong", {}, "Comprende. "), "Lee la síntesis, los conceptos y los avisos de «Lee con cautela»."),
      h("li", {}, h("strong", {}, "Resuelve. "), "Supera los retos; cada respuesta se explica."),
      h("li", {}, h("strong", {}, "Estudia. "), "En la pestaña «Estudiar»: ideas clave, errores frecuentes, pregunta de desarrollo con guion y tus apuntes."),
      h("li", {}, h("strong", {}, "Llévalo a tu programación. "), "Revisa ejemplos por ciclo, compón un borrador en la Mesa de dibujo y ensaya ante el tribunal.")),
    h("div", { class: "reto-acciones" },
      h("button", { type: "button", class: "boton primario", onclick: () => navegar("estudio") }, "Guía de estudio"),
      h("button", { type: "button", class: "boton", onclick: () => navegar("diseno") }, "Mesa de dibujo"),
      h("button", { type: "button", class: "boton", onclick: () => navegar("tribunal") }, "Sala del tribunal"),
      h("button", { type: "button", class: "boton", onclick: () => navegar("examen") }, "Examen")),
    h("h3", {}, "La idea que recorre el tema"),
    h("p", {}, "Una programación no es un temario repartido en el calendario, sino un plan alineado: en Canarias se parte del criterio de evaluación, se diseña hacia atrás desde las evidencias, se organiza el curso en situaciones de aprendizaje contextualizadas e inclusivas y se califica sin ponderaciones. Las láminas 1 y 2 sitúan el encargo y los cimientos; la 3 enseña a leer el criterio; la 4 y la 5 levantan el curso y sus situaciones; la 6 y la 7 lo hacen accesible y evaluable."),
    h("h3", {}, "Láminas"),
    h("div", { class: "grupo-herr" }, E.map((est) => h("button", { type: "button", class: "boton ancho", onclick: () => navegar(est.id) },
      h("span", { class: "mono" }, `${est.num} ·`), ` ${est.titulo}: ${est.sub}`))),
    h("h3", {}, "Objetivos"),
    h("ul", { class: "lista-plana" },
      h("li", {}, "Comprender qué es una programación didáctica, sus niveles de concreción y la necesidad de contextualizarla."),
      h("li", {}, "Identificar los elementos del currículo LOMLOE y su organización en Canarias, con el criterio de evaluación como eje."),
      h("li", {}, "Analizar criterios de Ciencias Sociales y diseñar situaciones de aprendizaje alineadas, inclusivas y contextualizadas."),
      h("li", {}, "Evaluar y calificar conforme a las instrucciones de Canarias de 2026-2027, y defender una programación ante un tribunal.")),
    h("p", { class: "nota-pie" }, "Marco: Real Decreto 157/2022; en Canarias, Decreto 211/2022, Orden de 31 de mayo de 2023 e instrucciones de evaluación y calificación de 2026-2027. Los datos de la oposición proceden de la convocatoria canaria de 2026 y deben comprobarse en la vigente. El progreso se guarda solo en este navegador.")
  );
  irArriba();
}

function vistaEstacion(i, pestana) {
  const est = E[i];
  const actual = pestana || estado.pestana[est.id] || "saber";
  ficha.innerHTML = "";
  ficha.append(
    h("p", { class: "etiqueta" }, `Lámina ${est.num} de 7`),
    h("h2", {}, est.titulo),
    h("p", { class: "sub" }, est.sub),
    h("p", { class: "lema" }, est.lema)
  );
  // predicción
  const fs = h("fieldset", { class: "prediccion" }, h("legend", {}, "Predice"), h("p", {}, est.prediccion.q));
  const ops = h("div", { class: "opciones" });
  est.prediccion.o.forEach((o, k) => {
    const id = `${est.id}-pred-${k}`;
    const inp = h("input", { type: "radio", name: `${est.id}-pred`, id, value: String(k) });
    if (estado.predicciones[est.id] === k) inp.checked = true;
    inp.addEventListener("change", () => { estado.predicciones[est.id] = k; guardar(); });
    ops.append(h("label", { for: id }, inp, o));
  });
  fs.append(ops);
  if (completa(est)) fs.append(h("p", { class: "fb bien" }, "Lámina sellada. ¿Mantienes tu predicción? Justifícala con lo aprendido."));
  ficha.append(fs);

  // pestañas
  const nombres = { saber: "Saber", estudiar: "Estudiar", retos: `Retos ${hechosDe(est)}/${est.retos.length}`, aula: "Al aula", fuentes: "Fuentes" };
  const tl = h("div", { class: "pestanas", role: "tablist", "aria-label": "Secciones de la lámina" });
  const paneles = {};
  Object.keys(nombres).forEach((k) => {
    const b = h("button", { type: "button", role: "tab", id: `tab-${k}`, "aria-controls": `panel-${k}`, "aria-selected": k === actual ? "true" : "false", tabindex: k === actual ? "0" : "-1" }, nombres[k]);
    b.addEventListener("click", () => activar(k, true));
    b.addEventListener("keydown", (ev) => {
      const ks = Object.keys(nombres), p = ks.indexOf(k);
      if (ev.key === "ArrowRight") { activar(ks[(p + 1) % ks.length], true); ev.preventDefault(); }
      if (ev.key === "ArrowLeft") { activar(ks[(p + ks.length - 1) % ks.length], true); ev.preventDefault(); }
    });
    tl.append(b);
  });
  ficha.append(tl);
  function activar(k, foco) {
    tl.querySelectorAll("button").forEach((b) => { const s = b.id === `tab-${k}`; b.setAttribute("aria-selected", s); b.tabIndex = s ? 0 : -1; if (s && foco) b.focus(); });
    Object.entries(paneles).forEach(([n, p]) => { p.hidden = n !== k; });
    estado.pestana[est.id] = k; guardar();
  }
  const panel = (k) => { const p = h("div", { class: "panel", role: "tabpanel", id: `panel-${k}`, "aria-labelledby": `tab-${k}` }); paneles[k] = p; ficha.append(p); return p; };

  // saber
  const pS = panel("saber");
  pS.append(h("p", { class: "idea" }, est.idea));
  est.sintesis.forEach((p) => pS.append(h("p", { html: p })));
  // controles de escena: un grupo de botones excluyentes que actúa sobre el objeto 3D de la lámina
  const controlEscena = (etiqueta, opciones, inicial, accion, nota) => {
    const nv = h("div", { class: "nivel-braudel", role: "group", "aria-label": etiqueta }, h("p", { class: "etiqueta" }, etiqueta));
    opciones.forEach(([t, v]) => nv.append(h("button", { type: "button", class: "boton ancho", "aria-pressed": v === inicial ? "true" : "false", onclick: (ev) => {
      nv.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", "false"));
      ev.currentTarget.setAttribute("aria-pressed", "true");
      if (escena) { accion(v); escena.irA(i); }
    } }, t)));
    if (nota) nv.append(h("p", { class: "nota-pie" }, nota));
    pS.append(nv);
  };
  if (est.id === "e4") controlEscena("Plantas de la maqueta en la escena",
    [["Ver el edificio completo", "todo"], ["Ver solo el primer trimestre", 1], ["Ver hasta el segundo trimestre", 2]], "todo",
    (v) => escena.setPlantas(v),
    "Cada planta del edificio de la lámina representa un trimestre; los bloques de colores, situaciones de aprendizaje. Es un esquema, no una programación real.");
  if (est.id === "e7") controlEscena("Platillos del nivel de obra en la escena",
    [["Criterios sin ponderar: el nivel queda horizontal", "igual"], ["Un criterio ponderado: el nivel se desequilibra", "ponderado"]], "igual",
    (v) => escena.setNivel(v),
    "Metáfora, no medida: en Canarias todos los criterios implementados tienen la misma importancia en la calificación del área.");
  pS.append(h("h3", {}, "Conceptos clave"));
  const dl = h("dl", { class: "conceptos" });
  est.conceptos.forEach((c) => dl.append(h("div", {}, h("dt", {}, c.t), h("dd", {}, c.d))));
  pS.append(dl);
  pS.append(h("blockquote", { class: "cita" }, h("p", {}, `«${est.cita.texto}»`), h("footer", {}, est.cita.fuente)));
  pS.append(h("h3", {}, "Lee con cautela"));
  est.matices.forEach((m) => pS.append(h("div", { class: "matiz" }, h("strong", {}, m.t), m.d)));
  pS.append(h("div", { class: "navegacion" }, h("button", { type: "button", class: "boton primario", onclick: () => activar("retos", true) }, "Ir a los retos")));

  // estudiar
  const pE = panel("estudiar");
  const st = S[est.id];
  if (st) {
    pE.append(h("h3", {}, "Ideas clave"), h("ul", { class: "lista-plana claves" }, st.claves.map((c) => h("li", {}, c))));
    pE.append(h("h3", {}, "Errores frecuentes"));
    st.errores.forEach((x) => pE.append(h("div", { class: "matiz" }, x)));
    pE.append(h("h3", {}, "Pregunta de desarrollo"), h("p", { class: "lema" }, st.desarrollo.q));
    const idR = `resp-${est.id}`;
    const ta = h("textarea", { id: idR, rows: "6", class: "area", placeholder: "Redacta aquí tu respuesta antes de ver el guion." });
    ta.value = estado.respuestas[est.id] || "";
    ta.addEventListener("input", () => { estado.respuestas[est.id] = ta.value; guardarPronto(); });
    pE.append(h("div", { class: "campo" }, h("label", { for: idR }, "Tu respuesta"), ta));
    pE.append(h("details", { class: "guion" }, h("summary", {}, "Ver guion de respuesta"),
      h("ol", { class: "lista-plana" }, st.desarrollo.guion.map((g) => h("li", {}, g))),
      h("p", { class: "nota-pie" }, "El guion orienta la estructura; la respuesta debe desarrollar cada punto con las fuentes del tema.")));
  }
  const idA = `apuntes-${est.id}`;
  const ap = h("textarea", { id: idA, rows: "5", class: "area", placeholder: "Dudas, ejemplos propios, conexiones con otras estaciones…" });
  ap.value = estado.apuntes[est.id] || "";
  ap.addEventListener("input", () => { estado.apuntes[est.id] = ap.value; guardarPronto(); });
  pE.append(h("h3", {}, "Mis apuntes"), h("div", { class: "campo" }, h("label", { for: idA }, "Notas de esta lámina (se guardan en este navegador)"), ap));
  const idC = `repasada-${est.id}`;
  const chk = h("input", { type: "checkbox", id: idC });
  chk.checked = !!estado.repasadas[est.id];
  chk.addEventListener("change", () => { estado.repasadas[est.id] = chk.checked; guardar(); });
  pE.append(h("label", { for: idC, class: "casilla" }, chk, "He repasado esta lámina"));
  pE.append(h("div", { class: "reto-acciones" },
    h("button", { type: "button", class: "boton", onclick: () => navegar("tarjetas") }, "Repasar con tarjetas"),
    h("button", { type: "button", class: "boton", onclick: () => navegar("estudio") }, "Guía de estudio")));

  // retos
  const pR = panel("retos");
  est.retos.forEach((r) => {
    Retos.render(r, pR, {
      docente, resuelto: !!estado.resueltos[r.id],
      onResuelto: () => {
        const antes = completa(est);
        estado.resueltos[r.id] = true; guardar();
        const tab = tl.querySelector("#tab-retos"); if (tab) tab.textContent = `Retos ${hechosDe(est)}/${est.retos.length}`;
        pintarIndice(est.id);
        if (!antes && completa(est)) {
          const aviso = h("p", { class: "fb bien", role: "status" }, `Lámina ${est.num} sellada. Su pieza se ha añadido a la maqueta del centro.`);
          pR.append(aviso);
        }
      }
    });
  });

  // al aula
  const pA = panel("aula");
  pA.append(h("h3", {}, "Llevarlo a tu programación de Ciencias Sociales"));
  pA.append(h("ul", { class: "lista-plana" }, est.aula.map((a) => h("li", {}, a))));
  pA.append(h("p", {}, "¿Quieres convertirlo en un borrador de situación de aprendizaje? ", h("button", { type: "button", class: "boton", onclick: () => navegar("diseno") }, "Abrir la Mesa de dibujo"), " ", h("button", { type: "button", class: "boton", onclick: () => navegar("tribunal") }, "Ir a la Sala del tribunal")));
  if (docente) {
    pA.append(h("div", { class: "docente-caja" },
      h("p", { class: "etiqueta" }, "Notas para el docente"),
      h("p", {}, h("strong", {}, "Duración orientativa: "), est.docente.duracion),
      h("p", {}, h("strong", {}, "Dinámica: "), est.docente.dinamica),
      h("p", {}, h("strong", {}, "Preguntas para el debate:")),
      h("ul", { class: "lista-plana" }, est.docente.preguntas.map((q) => h("li", {}, q)))));
  }

  // fuentes
  const pF = panel("fuentes");
  pF.append(h("h3", {}, "Referencias de esta lámina"));
  pF.append(h("ul", { class: "refs" }, est.refs.map((k) => h("li", { html: refHTML(k) }))));

  ficha.append(h("div", { class: "navegacion" },
    h("button", { type: "button", class: "boton", disabled: i === 0, onclick: () => navegar(E[i - 1].id) }, "← Anterior"),
    h("button", { type: "button", class: "boton", onclick: () => navegar("inicio") }, "Inicio"),
    h("button", { type: "button", class: "boton", disabled: i === E.length - 1, onclick: () => navegar(E[i + 1].id) }, "Siguiente →")));
  activar(actual, false);
  irArriba();
}

const N_EXAMEN = 12;
function sorteo() {
  // reparto equilibrado: al menos una pregunta por lámina y el resto al azar
  const porEst = E.map((e) => X.filter((p) => p.est === e.id).sort(() => Math.random() - 0.5));
  const elegidas = porEst.map((l) => l[0]).filter(Boolean);
  const resto = X.filter((p) => !elegidas.includes(p)).sort(() => Math.random() - 0.5);
  return elegidas.concat(resto.slice(0, N_EXAMEN - elegidas.length)).sort(() => Math.random() - 0.5);
}
function vistaExamen() {
  const Q = sorteo();
  ficha.innerHTML = "";
  ficha.append(h("p", { class: "etiqueta" }, "Herramienta"), h("h2", {}, "Examen del estudio"),
    h("p", { class: "sub" }, `${N_EXAMEN} preguntas sorteadas de un banco de ${X.length}, con al menos una por lámina. Cada intento es distinto; cada fallo indica qué lámina repasar.`));
  if (estado.examen != null) ficha.append(h("p", { class: "idea" }, `Tu mejor resultado en este navegador: ${estado.examen} de ${N_EXAMEN}.`));
  const form = h("form", {});
  Q.forEach((p, qi) => {
    const fs = h("fieldset", { class: "pregunta" }, h("legend", {}, `${qi + 1}. ${p.q}`));
    const ops = h("div", { class: "opciones" });
    p.o.map((_, oi) => oi).sort(() => Math.random() - 0.5).forEach((oi) => { const id = `ex-${qi}-${oi}`; ops.append(h("label", { for: id }, h("input", { type: "radio", name: `ex-${qi}`, id, value: String(oi) }), p.o[oi])); });
    fs.append(ops, h("div", { class: "resultado-item", id: `ex-r-${qi}` }));
    form.append(fs);
  });
  const res = h("div", { class: "resultado", role: "status" });
  form.append(h("div", { class: "reto-acciones" }, h("button", { type: "submit", class: "boton primario" }, "Corregir examen"),
    h("button", { type: "button", class: "boton", onclick: () => vistaExamen() }, "Nuevo examen"),
    docente ? h("button", { type: "button", class: "boton", onclick: () => { Q.forEach((p, qi) => { form.querySelector(`#ex-${qi}-${p.c}`).checked = true; }); } }, "Marcar solución") : null), res);
  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    let ok = 0; const fallos = {};
    Q.forEach((p, qi) => {
      const m = form.querySelector(`input[name="ex-${qi}"]:checked`), out = form.querySelector(`#ex-r-${qi}`);
      const bien = m && Number(m.value) === p.c; if (bien) ok++; else fallos[p.est] = (fallos[p.est] || 0) + 1;
      const est = E.find((e) => e.id === p.est);
      out.innerHTML = "";
      out.append(h("div", { class: "fb " + (bien ? "bien" : "mal") }, bien ? `Correcto. ${p.e}` : (m ? "No es correcta. " : "Sin responder. "),
        bien ? null : h("button", { type: "button", class: "boton", onclick: () => navegar(p.est) }, `Repasar lámina ${est.num}`)));
    });
    estado.examen = Math.max(estado.examen || 0, ok); guardar();
    const rep = Object.keys(fallos).map((id) => E.find((e) => e.id === id)).sort((a, b) => a.num - b.num).map((e) => `${e.num}. ${e.titulo}`).join("; ");
    res.innerHTML = `<div class="fb ${ok >= 9 ? "bien" : "mal"}">${ok} de ${N_EXAMEN} correctas.${ok >= 9 ? " Buen dominio del tema." : ""}${rep ? " Repasa: " + rep + "." : ""}</div>`;
  });
  ficha.append(form);
  irArriba();
}

function vistaGlosario() {
  ficha.innerHTML = "";
  ficha.append(h("p", { class: "etiqueta" }, "Herramienta"), h("h2", {}, "Glosario"));
  const dl = h("dl", { class: "glosario" });
  G.forEach((g) => {
    const est = E.find((e) => e.id === g.e);
    dl.append(h("div", {}, h("dt", {}, g.t), h("dd", {}, g.d, " ", h("button", { type: "button", class: "boton", onclick: () => navegar(g.e), "aria-label": `${g.t}: ir a la lámina ${est.num}` }, `Lámina ${est.num}`))));
  });
  ficha.append(dl);
  irArriba();
}

function vistaBibliografia() {
  ficha.innerHTML = "";
  ficha.append(h("p", { class: "etiqueta" }, "Herramienta"), h("h2", {}, "Bibliografía y créditos"));
  const grupos = [["base", "Fuentes base del tema"], ["norma", "Normativa"], ["revista", "Investigación en revistas"], ["libro", "Obras de referencia"]];
  grupos.forEach(([t, nombre]) => {
    const claves = Object.keys(R).filter((k) => R[k].tipo === t).sort((a, b) => R[a].cita.localeCompare(R[b].cita, "es"));
    ficha.append(h("h3", {}, nombre), h("ul", { class: "refs" }, claves.map((k) => h("li", { html: refHTML(k) }))));
  });
  ficha.append(h("h3", {}, "Créditos y advertencias"),
    h("p", {}, "Recurso elaborado para trabajar la programación didáctica de Conocimiento del Medio (Ciencias Sociales) en el Grado en Educación Primaria y para preparar la segunda prueba de la oposición al Cuerpo de Maestros en Canarias, con asistencia de un modelo de inteligencia artificial (Claude, Anthropic) en la redacción y la programación. Los textos son síntesis propias; las citas de los manuales son breves y se atribuyen, y los textos normativos se transcriben literalmente cuando así se indica. El currículo y las instrucciones de evaluación se cotejaron el 14 de noviembre de 2026 con los documentos oficiales; los datos de la convocatoria de 2026 se cotejaron en el BOC n.º 58, salvo la tabla de penalizaciones, tomada de una copia. Versión 1.1 (14 de noviembre de 2026): auditoría con cotejo programático del currículo, distractores reescritos, correcciones de referencias y del escenario no presencial, y ajustes de accesibilidad móvil."),
    h("p", {}, "Dos de las tres obras base (la edición de 2021 del manual de Ramírez García, Jurado y Ruiz, y Jiménez García, 2021) siguen la LOMCE: se usan solo como contraste o por ideas que siguen siendo válidas. Requiere revisión docente antes de su uso con alumnado. Escena 3D modelada por código con Three.js 0.160.0 (licencia MIT): todos los objetos son procedimentales. Tipografías Cinzel, Atkinson Hyperlegible y JetBrains Mono (SIL Open Font License)."));
  irArriba();
}

function vistaGuia() {
  ficha.innerHTML = "";
  ficha.append(h("p", { class: "etiqueta" }, "Herramienta"), h("h2", {}, "Guía de uso"),
    h("h3", {}, "Para el alumnado"),
    h("ul", { class: "lista-plana" },
      h("li", {}, "Recorre las siete láminas en orden o empieza por la que te pida tu docente."),
      h("li", {}, "Responde la predicción antes de leer: al terminar, vuelve a ella."),
      h("li", {}, "Los retos se pueden repetir; la explicación aparece al acertar."),
      h("li", {}, "Para estudiar: pestaña «Estudiar» de cada lámina, Guía de estudio, Tarjetas de repaso y Examen (cada intento sortea preguntas nuevas)."),
      h("li", {}, "Para practicar: la Mesa de dibujo compone un borrador de situación de aprendizaje con criterios literales del currículo canario; la Sala del tribunal reúne requisitos, lista de comprobación y cronómetros de defensa."),
      h("li", {}, "Tu progreso se guarda solo en este navegador.")),
    h("h3", {}, "Para el profesorado"),
    h("ul", { class: "lista-plana" },
      h("li", {}, "«Presentar» oculta el índice y amplía la ficha para proyectar."),
      h("li", {}, "El modo docente muestra notas de sesión, preguntas de debate y botones de solución. Se activa abriendo el recurso con el ancla #docente o con el botón de abajo, y dura mientras la pestaña siga abierta."),
      h("li", {}, "Anclas directas: #e1 a #e7, #estudio, #tarjetas, #diseno, #tribunal, #examen, #glosario, #bibliografia."),
      h("li", {}, "Propuesta de uso: dos sesiones de 90 minutos (láminas 1-4 y 5-7) y una tercera de taller con la Mesa de dibujo y un simulacro de defensa en la Sala del tribunal.")),
    h("div", { class: "reto-acciones" },
      h("button", { type: "button", class: "boton" + (docente ? " activo" : ""), "aria-pressed": docente ? "true" : "false", onclick: () => { ponerDocente(!docente); vistaGuia(); } }, docente ? "Desactivar modo docente" : "Activar modo docente")),
    h("h3", {}, "Accesibilidad"),
    h("p", {}, "Todo el contenido de la escena 3D está también en el índice y en la ficha; los retos se resuelven con teclado. La animación se detiene si el sistema pide reducir el movimiento o con el botón «Pausar movimiento»."));
  irArriba();
}

/* ---------- Guía de estudio ---------- */
function mapaSVG() {
  const caja = (x, y, w, hh, lineas, dest, fuerte) => {
    const t = lineas.map((l, i) => `<tspan x="${x + w / 2}" dy="${i === 0 ? 0 : 15}">${l}</tspan>`).join("");
    const y0 = y + hh / 2 - ((lineas.length - 1) * 15) / 2 + 4;
    const r = `<rect x="${x}" y="${y}" width="${w}" height="${hh}" rx="6" class="${fuerte ? "n-fuerte" : "n"}"/><text x="${x + w / 2}" y="${y0}" text-anchor="middle" class="${fuerte ? "t-fuerte" : "t"}">${t}</text>`;
    return dest ? `<a href="#${dest}">${r}</a>` : r;
  };
  const l = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="ar" marker-end="url(#pf)"/>`;
  return `<svg viewBox="0 0 400 600" role="group" aria-labelledby="mapa-t" aria-describedby="mapa-d" class="mapa">
  <title id="mapa-t">Mapa conceptual de la programación didáctica</title>
  <desc id="mapa-d">El currículo del Estado y de Canarias se concreta en el centro y en la programación, contextualizada en un aula. Sus cimientos son los objetivos, las competencias, los criterios y los saberes; en Canarias el criterio de evaluación es el eje. Del análisis del criterio se diseña hacia atrás: evidencias, producto y secuencia. El curso se organiza en seis a doce situaciones de aprendizaje con tareas, metodologías activas, medidas DUA y escenario no presencial, y se evalúa y califica con rúbricas, sin ponderaciones. Cada caja enlaza con su lámina.</desc>
  <defs><marker id="pf" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="pf"/></marker></defs>
  ${caja(60, 6, 280, 46, ["CURRÍCULO", "RD 157/2022 · Decreto 211/2022"], "e2", true)}
  ${l(200, 52, 200, 76)}
  ${caja(30, 78, 340, 46, ["PROGRAMACIÓN DIDÁCTICA", "contextualizada: centro · aula · grupo"], "e1", true)}
  ${l(140, 124, 100, 152)}${l(260, 124, 300, 152)}
  ${caja(10, 154, 180, 58, ["Cimientos", "objetivos · competencias", "criterios · saberes"], "e2")}
  ${caja(210, 154, 180, 58, ["Plano maestro", "analizar el criterio", "diseño inverso"], "e3")}
  ${l(100, 212, 170, 244)}${l(300, 212, 230, 244)}
  ${caja(30, 246, 340, 46, ["SECUENCIA DEL CURSO", "6-12 situaciones · todos los criterios del ciclo"], "e4", true)}
  ${l(200, 292, 200, 318)}
  ${caja(30, 320, 340, 58, ["SITUACIÓN DE APRENDIZAJE", "reto contextualizado · tarea · producto", "metodologías activas"], "e5", true)}
  ${l(120, 378, 100, 406)}${l(280, 378, 300, 406)}
  ${caja(10, 408, 180, 58, ["Inclusión", "DUA · medidas", "escenario no presencial"], "e6")}
  ${caja(210, 408, 180, 58, ["Evaluación", "rúbricas oficiales", "sin ponderaciones"], "e7")}
  ${l(100, 466, 170, 496)}${l(300, 466, 230, 496)}
  ${caja(10, 498, 380, 92, ["Ante el tribunal (segunda prueba)", "programación: 25-50 páginas · defensa de 15 min", "situación de aprendizaje: 45 min de preparación", "y 30 min de exposición (convocatoria de 2026)"], "tribunal")}
</svg>`;
}
function tabla(t) {
  return h("div", { class: "tabla-envoltura", tabindex: "0", role: "region", "aria-label": t.titulo }, h("table", { class: "tabla" },
    h("caption", {}, t.titulo),
    h("thead", {}, h("tr", {}, t.cab.map((c) => h("th", { scope: "col" }, c)))),
    h("tbody", {}, t.filas.map((f) => h("tr", {}, f.map((c, i) => i === 0 ? h("th", { scope: "row" }, c) : h("td", {}, c)))))));
}
function textoApuntes() {
  const lineas = ["EL ESTUDIO DEL ARQUITECTO · MIS APUNTES SOBRE LA PROGRAMACIÓN DIDÁCTICA", ""];
  E.forEach((e) => {
    lineas.push(`${e.num}. ${e.titulo.toUpperCase()} (${e.sub})`);
    if (S[e.id]) { lineas.push("Ideas clave:"); S[e.id].claves.forEach((c) => lineas.push(`- ${c}`)); }
    if (estado.apuntes[e.id]) lineas.push("Mis apuntes:", estado.apuntes[e.id]);
    if (S[e.id] && estado.respuestas[e.id]) lineas.push(`Pregunta de desarrollo: ${S[e.id].desarrollo.q}`, "Mi respuesta:", estado.respuestas[e.id]);
    lineas.push("");
  });
  return lineas.join("\n");
}
function copiarTexto(texto, nodo, aviso) {
  const sel = () => { const rg = document.createRange(); rg.selectNodeContents(nodo); const s = getSelection(); s.removeAllRanges(); s.addRange(rg); aviso.textContent = "Texto seleccionado: cópialo con Ctrl+C o ⌘+C."; };
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(texto).then(() => { aviso.textContent = "Copiado."; }, sel);
  else sel();
}
function vistaGuiaEstudio() {
  ficha.innerHTML = "";
  ficha.append(h("p", { class: "etiqueta" }, "Estudio"), h("h2", {}, "Guía de estudio: la programación didáctica"),
    h("p", { class: "sub" }, "Mapa del tema, cuadros comparativos, autores y normas en orden cronológico, preguntas para revisar tu programación, currículo de Canarias y recursos. Úsala para repasar después de recorrer las láminas."));
  const nav = h("nav", { class: "indice-guia", "aria-label": "Apartados de la guía" });
  [["g-plan", "Plan de estudio"], ["g-mapa", "Mapa conceptual"], ["g-tablas", "Cuadros comparativos"], ["g-autores", "Autores y normas"], ["g-vocab", "Revisar mi programación"], ["g-curriculo", "Currículo de Canarias"], ["g-recursos", "Recursos"], ["g-progreso", "Mi progreso y apuntes"]]
    .forEach(([id, t]) => nav.append(h("button", { type: "button", class: "boton", onclick: () => document.getElementById(id).scrollIntoView({ behavior: "smooth", block: "start" }) }, t)));
  ficha.append(nav);

  ficha.append(h("h3", { id: "g-plan" }, "Plan de estudio sugerido"),
    h("ol", { class: "lista-plana" },
      h("li", {}, h("strong", {}, "Recorre. "), "En cada lámina: predicción, pestaña «Saber» y retos."),
      h("li", {}, h("strong", {}, "Sintetiza. "), "En la pestaña «Estudiar», lee las ideas clave, revisa los errores frecuentes y añade tus apuntes."),
      h("li", {}, h("strong", {}, "Redacta. "), "Responde la pregunta de desarrollo sin mirar y compárala después con el guion."),
      h("li", {}, h("strong", {}, "Relaciona. "), "Repasa el mapa y los cuadros de esta guía."),
      h("li", {}, h("strong", {}, "Memoriza lo imprescindible. "), "Practica con las tarjetas hasta pasar todas a la caja 3."),
      h("li", {}, h("strong", {}, "Comprueba. "), "Haz varios exámenes: cada intento sortea preguntas nuevas.")),
    h("p", { class: "nota-pie" }, "Este recurso resume y organiza el tema; no sustituye la lectura de las fuentes base (el manual de Ramírez García, Jurado y Ruiz, el Decreto 211/2022, las instrucciones de evaluación y la convocatoria vigente) ni las indicaciones del profesorado."));

  ficha.append(h("h3", { id: "g-mapa" }, "Mapa conceptual"), h("div", { class: "mapa-caja", html: mapaSVG() }),
    h("p", { class: "nota-pie" }, "Pulsa una caja para ir a su lámina o a la Sala del tribunal."));

  const tb = h("div", { id: "g-tablas" }, h("h3", {}, "Cuadros comparativos"));
  (GU.tablas || []).forEach((t) => tb.append(tabla(t)));
  ficha.append(tb);

  ficha.append(h("h3", { id: "g-autores" }, "Autores, obras y normas en orden cronológico"),
    h("ol", { class: "cronologia" }, (GU.autores || []).map(([f, a, idea, e]) => h("li", {},
      h("span", { class: "mono fecha" }, f), h("span", {}, h("strong", {}, a), ". ", idea, " "),
      h("button", { type: "button", class: "enlace", onclick: () => navegar(e) }, `Lámina ${e.slice(1)}`)))));

  if (GU.preguntas) ficha.append(h("h3", { id: "g-vocab" }, "Preguntas para revisar tu programación"), h("p", { class: "nota-pie" }, GU.preguntas.nota),
    tabla({ titulo: "Revisión por apartados", cab: ["Apartado", "Comprobación básica", "Comprobación de calidad"], filas: GU.preguntas.filas }));

  if (CU) {
    ficha.append(h("h3", { id: "g-curriculo" }, "Currículo de Canarias: Ciencias Sociales en Conocimiento del Medio"),
      h("p", { class: "nota-pie" }, "Competencias específicas y criterios seleccionados del bloque III («Sociedades y territorios») y del 2.2, en texto literal."));
    Object.entries(CU.ce).forEach(([n, t]) => ficha.append(h("p", {}, h("strong", {}, `Competencia específica ${n}. `), `«${t}»`)));
    Object.values(CU.ciclos).forEach((c) => ficha.append(tabla({ titulo: `Criterios y saberes relacionados · ${c.nombre}`, cab: ["Criterio", "Texto literal", "Saberes relacionados"],
      filas: Object.entries(c.criterios).map(([k, t]) => [k, t, (c.saberes[k] || []).join(" ")]) })));
    ficha.append(h("p", { class: "nota-pie" }, `${CU.nota} Fuente: ${CU.fuente} La relación entre criterios y saberes es una propuesta orientativa de este recurso, no del decreto.`));
  }
  ficha.append(h("h3", { id: "g-recursos" }, "Recursos para programar en Canarias"));
  (GU.recursos || []).forEach((r) => ficha.append(h("div", { class: "recurso" }, h("h4", {}, r.t), h("p", {}, r.d))));

  // progreso
  ficha.append(h("h3", { id: "g-progreso" }, "Mi progreso y apuntes"));
  ficha.append(tabla({ titulo: "Estado de cada lámina en este navegador", cab: ["Lámina", "Retos", "Repasada", "Apuntes", "Desarrollo"],
    filas: E.map((e) => [`${e.num}. ${e.titulo}`, `${hechosDe(e)}/${e.retos.length}`, estado.repasadas[e.id] ? "Sí" : "No", estado.apuntes[e.id] ? "Sí" : "—", estado.respuestas[e.id] ? "Redactada" : "—"]) }));
  const salida = h("pre", { class: "salida", tabindex: "0", "aria-label": "Apuntes reunidos" }, textoApuntes());
  const aviso = h("span", { class: "nota-pie", role: "status" });
  ficha.append(h("p", {}, "Reúne en un solo texto las ideas clave, tus apuntes y tus respuestas de desarrollo para pegarlos en tu documento de estudio."),
    h("div", { class: "reto-acciones" }, h("button", { type: "button", class: "boton primario", onclick: () => copiarTexto(salida.textContent, salida, aviso) }, "Copiar mis apuntes"), aviso), salida);
  irArriba();
}

/* ---------- Tarjetas de repaso (sistema de cajas de Leitner) ---------- */
function mazo() {
  const vistos = new Set(), cartas = [];
  const add = (t, d, e) => { const k = t.toLowerCase(); if (vistos.has(k)) return; vistos.add(k); cartas.push({ t, d, e }); };
  E.forEach((e) => e.conceptos.forEach((c) => add(c.t, c.d, e.id)));
  G.forEach((g) => add(g.t, g.d, g.e));
  return cartas;
}
function vistaTarjetas() {
  const cartas = mazo();
  const caja = (c) => estado.cajas[c.t] || 1;
  let filtro = "todas", actual = null, girada = false;
  ficha.innerHTML = "";
  ficha.append(h("p", { class: "etiqueta" }, "Estudio"), h("h2", {}, "Tarjetas de repaso"),
    h("p", { class: "sub" }, `${cartas.length} conceptos del tema. Intenta definir el término antes de girar la tarjeta. «La sé» la sube de caja; «Repasar» la devuelve a la caja 1. Salen antes las de las cajas bajas.`));
  const sel = h("select", { id: "t-filtro" }, h("option", { value: "todas" }, "Todas las láminas"), E.map((e) => h("option", { value: e.id }, `Lámina ${e.num}: ${e.titulo}`)), h("option", { value: "pendientes" }, "Solo las de la caja 1"));
  sel.addEventListener("change", () => { filtro = sel.value; siguiente(); });
  const cont = h("div", { class: "cajas mono", "aria-live": "polite" });
  const tarjeta = h("button", { type: "button", class: "tarjeta", "aria-pressed": "false" });
  tarjeta.addEventListener("click", () => { girada = !girada; pintar(); });
  const bSe = h("button", { type: "button", class: "boton primario" }, "La sé");
  const bRep = h("button", { type: "button", class: "boton" }, "Repasar");
  const bSig = h("button", { type: "button", class: "boton" }, "Siguiente");
  const bReinicio = h("button", { type: "button", class: "boton" }, "Reiniciar cajas");
  bSe.addEventListener("click", () => { if (!actual) return; estado.cajas[actual.t] = Math.min(3, caja(actual) + 1); guardar(); siguiente(); });
  bRep.addEventListener("click", () => { if (!actual) return; estado.cajas[actual.t] = 1; guardar(); siguiente(); });
  bSig.addEventListener("click", siguiente);
  bReinicio.addEventListener("click", () => { estado.cajas = {}; guardar(); siguiente(); });
  ficha.append(h("div", { class: "campo" }, h("label", { for: "t-filtro" }, "Qué repasar"), sel), cont, tarjeta,
    h("div", { class: "reto-acciones" }, bSe, bRep, bSig), h("div", { class: "reto-acciones" }, bReinicio));
  function lista() {
    return cartas.filter((c) => filtro === "todas" || (filtro === "pendientes" ? caja(c) === 1 : c.e === filtro));
  }
  function contar() {
    const l = lista(), n = [1, 2, 3].map((k) => l.filter((c) => caja(c) === k).length);
    cont.textContent = `Caja 1: ${n[0]} · Caja 2: ${n[1]} · Caja 3: ${n[2]}`;
  }
  function siguiente() {
    const l = lista(); girada = false;
    if (!l.length) { actual = null; pintar(); return; }
    const min = Math.min(...l.map(caja));
    const cand = l.filter((c) => caja(c) === min && c !== actual);
    actual = (cand.length ? cand : l)[Math.floor(Math.random() * (cand.length ? cand.length : l.length))];
    pintar();
  }
  function pintar() {
    contar();
    tarjeta.innerHTML = "";
    if (!actual) { tarjeta.append(h("span", { class: "frente" }, "No quedan tarjetas con este filtro.")); return; }
    const e = E.find((x) => x.id === actual.e);
    tarjeta.setAttribute("aria-pressed", girada ? "true" : "false");
    tarjeta.append(h("span", { class: "etiqueta" }, `Lámina ${e.num} · caja ${caja(actual)}`),
      h("span", { class: "frente" }, actual.t),
      girada ? h("span", { class: "dorso" }, actual.d) : h("span", { class: "pista nota-pie" }, "Pulsa para girar"));
  }
  siguiente();
  irArriba();
}

/* ---------- Mesa de dibujo: borrador de situación de aprendizaje ---------- */
function vistaDiseno() {
  ficha.innerHTML = "";
  ficha.append(h("p", { class: "etiqueta" }, "Herramienta"), h("h2", {}, "Mesa de dibujo de situaciones de aprendizaje"),
    h("p", { class: "sub" }, "Compón el borrador de una situación de aprendizaje de Ciencias Sociales a partir de un criterio literal del currículo canario. Es un esqueleto para revisar, completar y contextualizar, no una situación terminada."));
  const selObj = (id, etiqueta, obj, f = (v) => v.nombre) => {
    const s = h("select", { id }); Object.entries(obj).forEach(([k, v]) => s.append(h("option", { value: k }, f(v, k))));
    return [h("div", { class: "campo" }, h("label", { for: id }, etiqueta), s), s];
  };
  const [c1, sC] = selObj("d-ciclo", "Ciclo", D.ciclos);
  const sCr = h("select", { id: "d-criterio" });
  const c2 = h("div", { class: "campo" }, h("label", { for: "d-criterio" }, "Criterio de evaluación de partida"), sCr);
  const [c3, sM] = selObj("d-metodo", "Metodología principal", D.metodos);
  const [c4, sP] = selObj("d-producto", "Producto final", D.productos);
  const [c5, sX] = selObj("d-contexto", "Contexto canario", D.contextos);
  const salida = h("pre", { class: "salida", id: "d-salida", tabindex: "0", "aria-label": "Borrador generado" });
  const estadoCopia = h("span", { class: "nota-pie", role: "status" });
  function opcionesCriterio() {
    const cu = CU.ciclos[sC.value], previo = sCr.value;
    sCr.innerHTML = "";
    Object.entries(cu.criterios).forEach(([k, t]) => sCr.append(h("option", { value: k }, `${k}. ${t.length > 80 ? t.slice(0, 78).trim() + "…" : t}`)));
    if (cu.criterios[previo]) sCr.value = previo;
  }
  function generar() {
    const c = D.ciclos[sC.value], cu = CU.ciclos[sC.value], k = sCr.value, crit = cu.criterios[k], ce = CU.ce[k.split(".")[0]];
    const m = D.metodos[sM.value], p = D.productos[sP.value], x = D.contextos[sX.value];
    const saberes = (cu.saberes[k] || []).map((t) => `- ${t}`).join("\n");
    salida.textContent =
`SITUACIÓN DE APRENDIZAJE (borrador) · ${c.nombre} · Conocimiento del Medio
Título provisional: «${p.nombre}: ${x.nombre.toLowerCase()}»

1. Justificación y contexto
Contexto de partida: ${x.texto}. Escala: ${c.escala}. Reto: elaborar un producto final («${p.nombre}») dirigido a ${p.destinatario}. [Contextualiza: centro público, grupo, recursos del entorno.]

2. Concreción curricular (texto literal del Decreto 211/2022)
Competencia específica ${k.split(".")[0]}: ${ce}
Criterio de evaluación ${k} (${cu.nombre}): ${crit}
Saberes relacionados (propuesta orientativa):
${saberes}
Análisis del criterio: [subraya proceso, saber, modo y finalidad antes de diseñar las actividades.]

3. Producto final y evidencias
Producto: ${p.nombre}, para ${p.destinatario}.
Evidencias de aprendizaje: [qué hará y dirá el alumnado que demuestre el criterio ${k}].

4. Secuencia (${m.nombre.toLowerCase()})
Inicio: ${m.inicio}
Desarrollo:
 a) ${m.desarrollo[0]}
 b) ${m.desarrollo[1]}
 c) ${m.desarrollo[2]}
Cierre: ${m.cierre}
Agrupamientos: ${c.agrupamiento}.
Espacios y recursos: aula, ${x.texto}, recursos analógicos y digitales accesibles.

5. Inclusión (DUA) y escenario no presencial
Implicación: elección del aspecto que investiga cada grupo dentro del reto común.
Representación: información en texto, imagen, audio y lectura fácil.
Acción y expresión: elección del formato para demostrar lo aprendido, con la misma rúbrica.
Escenario no presencial: plantear al menos un 30 % del desarrollo de los contenidos con métodos de educación a distancia, con su evaluación (convocatoria de 2026; comprueba la vigente).

6. Evaluación y calificación (instrucciones de Canarias, 2026-2027)
Técnicas: observación sistemática, análisis de producciones e intercambios orales; autoevaluación y coevaluación.
Instrumentos vinculados al criterio ${k}: [cuaderno de investigación, producto final, exposición], contrastados con la rúbrica LOMLOE Canarias.
Calificación: nivel de logro del criterio con los calificadores Insuficiente, Suficiente, Bien, Notable o Sobresaliente. Sin ponderar instrumentos ni criterios y sin notas numéricas; si hay varias valoraciones, se elige la más alta, la más repetida o la última.

7. Transversalidad y conexiones
[Igualdad (visibilizar a las mujeres), convivencia, sostenibilidad, competencia digital; áreas conectadas y criterios de cada una.]

Borrador generado con plantilla en «El estudio del arquitecto». Revísalo, contextualízalo y compruébalo con el currículo y la normativa vigentes.`;
    estadoCopia.textContent = "";
  }
  sC.addEventListener("change", () => { opcionesCriterio(); generar(); });
  [sCr, sM, sP, sX].forEach((s) => s.addEventListener("change", generar));
  sC.value = "c2"; opcionesCriterio(); sCr.value = "7.1"; sM.value = "abp"; sP.value = "museo"; sX.value = "calles";
  const copiar = h("button", { type: "button", class: "boton primario" }, "Copiar borrador");
  copiar.addEventListener("click", () => copiarTexto(salida.textContent, salida, estadoCopia));
  ficha.append(c1, c2, c3, c4, c5, salida, h("div", { class: "reto-acciones" }, copiar, estadoCopia));
  generar();
  irArriba();
}

/* ---------- Sala del tribunal ---------- */
let generacionVista = 0;
function cronometro(titulo, fases) {
  const total = fases.reduce((a, f) => a + f.min, 0) * 60;
  let restante = total, marcha = false, ultimo = 0;
  const reloj = h("p", { class: "crono mono", role: "timer", "aria-live": "off" });
  const fase = h("p", { class: "idea", "aria-live": "polite" });
  const lista = h("ol", { class: "lista-plana fases" }, fases.map((f) => h("li", {}, h("strong", {}, `${f.t} (${f.min} min). `), f.d)));
  const bIni = h("button", { type: "button", class: "boton primario" }, "Iniciar");
  const bRei = h("button", { type: "button", class: "boton" }, "Reiniciar");
  function faseActual() {
    let t = total - restante;
    for (let i = 0; i < fases.length; i++) { t -= fases[i].min * 60; if (t < 0) return i; }
    return fases.length - 1;
  }
  function pintar() {
    const m = Math.floor(restante / 60), s = Math.floor(restante % 60);
    reloj.textContent = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    const i = faseActual();
    lista.querySelectorAll("li").forEach((li, k) => li.classList.toggle("actual", k === i && (marcha || restante < total)));
    fase.textContent = restante <= 0 ? "Tiempo agotado." : (marcha || restante < total) ? `Ahora: ${fases[i].t}.` : `Duración total: ${total / 60} minutos.`;
  }
  const gen = generacionVista;
  function paso(ahora) {
    if (!marcha || gen !== generacionVista) return;
    if (ultimo) restante = Math.max(0, restante - (ahora - ultimo) / 1000);
    ultimo = ahora; pintar();
    if (restante <= 0) { marcha = false; bIni.textContent = "Iniciar"; return; }
    requestAnimationFrame(paso);
  }
  bIni.addEventListener("click", () => {
    marcha = !marcha; bIni.textContent = marcha ? "Pausar" : "Continuar";
    if (marcha) { ultimo = 0; requestAnimationFrame(paso); }
  });
  bRei.addEventListener("click", () => { marcha = false; restante = total; bIni.textContent = "Iniciar"; pintar(); });
  pintar();
  return h("section", { class: "cronometro", "aria-label": titulo }, h("h4", {}, titulo), reloj, fase, h("div", { class: "reto-acciones" }, bIni, bRei), lista);
}
function vistaTribunal() {
  ficha.innerHTML = "";
  ficha.append(h("p", { class: "etiqueta" }, "Oposición"), h("h2", {}, "Sala del tribunal"),
    h("p", { class: "sub" }, "La segunda prueba de la oposición al Cuerpo de Maestros en Canarias: requisitos, lista de comprobación, cronómetros de ensayo y preguntas para practicar."),
    h("div", { class: "matiz" }, h("strong", {}, "Dato perecedero. "), TR.fuente));
  const nav = h("nav", { class: "indice-guia", "aria-label": "Apartados de la sala" });
  [["t-pruebas", "Las pruebas"], ["t-formato", "Requisitos"], ["t-lista", "Lista de comprobación"], ["t-crono", "Cronómetros"], ["t-preguntas", "Preguntas del tribunal"], ["t-errores", "Errores frecuentes"]]
    .forEach(([id, t]) => nav.append(h("button", { type: "button", class: "boton", onclick: () => document.getElementById(id).scrollIntoView({ behavior: "smooth", block: "start" }) }, t)));
  ficha.append(nav);
  ficha.append(h("h3", { id: "t-pruebas" }, "Las pruebas y su peso"),
    tabla({ titulo: "Estructura del procedimiento (convocatoria de 2026)", cab: ["Prueba", "Contenido y ponderación"], filas: TR.pruebas }),
    h("p", { class: "nota-pie" }, "La base estatal es el artículo 21 del Real Decreto 276/2007, vigente en 2026: la segunda prueba comprueba la aptitud pedagógica mediante la presentación de una programación y la preparación y exposición de una unidad didáctica."));
  ficha.append(h("h3", { id: "t-formato" }, "Requisitos de la programación y de la unidad"),
    tabla({ titulo: "Requisitos formales y de contenido (Educación Primaria)", cab: ["Aspecto", "Requisito"], filas: TR.formato }),
    tabla({ titulo: "Penalizaciones (según una copia de la convocatoria; no cotejadas en el BOC)", cab: ["Incumplimiento", "Consecuencia"], filas: TR.penalizaciones }));
  // lista de comprobación
  const hechos = () => TR.lista.filter((_, i) => estado.lista[i]).length;
  const cuenta = h("p", { class: "idea", "aria-live": "polite" });
  const pintaCuenta = () => { cuenta.textContent = `${hechos()} de ${TR.lista.length} comprobaciones superadas.`; };
  const ul = h("ul", { class: "lista-plana comprobacion" }, TR.lista.map((t, i) => {
    const id = `chk-${i}`, c = h("input", { type: "checkbox", id });
    c.checked = !!estado.lista[i];
    c.addEventListener("change", () => { estado.lista[i] = c.checked; guardar(); pintaCuenta(); });
    return h("li", {}, h("label", { for: id, class: "casilla" }, c, t));
  }));
  pintaCuenta();
  ficha.append(h("h3", { id: "t-lista" }, "Lista de comprobación de mi programación"), cuenta, ul,
    h("p", { class: "nota-pie" }, "Elaboración propia a partir de la convocatoria de 2026 (BOC n.º 58), de las instrucciones de evaluación de 2026-2027 y del manual de Ramírez García, Jurado y Ruiz. Se guarda en este navegador."));
  // cronómetros
  ficha.append(h("h3", { id: "t-crono" }, "Cronómetros de ensayo"),
    h("p", {}, "Reparto orientativo del tiempo, de elaboración propia: ajústalo a tu programación y a la convocatoria vigente."),
    cronometro("Defensa de la programación (15 minutos)", TR.defensa),
    cronometro("Exposición de la situación de aprendizaje (30 minutos)", TR.exposicion));
  // preguntas
  const pregunta = h("p", { class: "lema", "aria-live": "polite" }, "Pulsa el botón para recibir una pregunta.");
  let ultimaP = -1;
  const bP = h("button", { type: "button", class: "boton primario", onclick: () => {
    let i; do { i = Math.floor(Math.random() * TR.preguntas.length); } while (i === ultimaP && TR.preguntas.length > 1);
    ultimaP = i; pregunta.textContent = TR.preguntas[i];
  } }, "Otra pregunta");
  ficha.append(h("h3", { id: "t-preguntas" }, "Preguntas para ensayar"),
    h("p", { class: "nota-pie" }, "Preguntas de elaboración propia, del tipo que puede plantear un tribunal; en Canarias, según la convocatoria de 2026, las preguntas tras la exposición no son evaluables."),
    pregunta, h("div", { class: "reto-acciones" }, bP));
  ficha.append(h("h3", { id: "t-errores" }, "Errores frecuentes"),
    h("ul", { class: "lista-plana" }, TR.errores.map((e) => h("li", {}, e))),
    h("p", { class: "nota-pie" }, "Síntesis a partir de los apartados «Errores que se suelen cometer» del manual de Ramírez García, Jurado y Ruiz (2022) y de las instrucciones canarias."),
    h("div", { class: "reto-acciones" },
      h("button", { type: "button", class: "boton", onclick: () => navegar("diseno") }, "Mesa de dibujo"),
      h("button", { type: "button", class: "boton", onclick: () => navegar("e7") }, "Lámina 7: evaluar y calificar")));
  irArriba();
}

/* ---------- navegación ---------- */
let escena = null;
function navegar(destino, desdeHash) {
  generacionVista++;
  if (!desdeHash && location.hash.slice(1) !== destino) { location.hash = destino; return; }
  const i = E.findIndex((e) => e.id === destino);
  if (i >= 0) { vistaEstacion(i); pintarIndice(destino); escena && escena.irA(i); return; }
  pintarIndice(null);
  const vista = { estudio: vistaGuiaEstudio, tarjetas: vistaTarjetas, diseno: vistaDiseno, tribunal: vistaTribunal, examen: vistaExamen, glosario: vistaGlosario, bibliografia: vistaBibliografia, guia: vistaGuia }[destino];
  if (vista) vista();
  else { vistaInicio(); if (escena) escena.vistaGeneral(); }
}
function ponerDocente(v) {
  docente = v; $("#pildora-docente").hidden = !v;
  try { sessionStorage.setItem("ea-docente", v ? "1" : "0"); } catch (e) { /* nada */ }
}
function leerHash() {
  let d = location.hash.slice(1);
  if (d === "docente") { ponerDocente(true); d = "guia"; }
  navegar(d || "inicio", true);
}
window.addEventListener("hashchange", leerHash);

/* ---------- barra ---------- */
$("#btn-inicio").addEventListener("click", () => navegar("inicio"));
$("#btn-guia").addEventListener("click", () => navegar("guia"));
$("#btn-diseno").addEventListener("click", () => navegar("diseno"));
$("#btn-tribunal").addEventListener("click", () => navegar("tribunal"));
$("#btn-examen").addEventListener("click", () => navegar("examen"));
$("#btn-glosario").addEventListener("click", () => navegar("glosario"));
$("#btn-estudio").addEventListener("click", () => navegar("estudio"));
$("#btn-tarjetas").addEventListener("click", () => navegar("tarjetas"));
$("#btn-bibliografia").addEventListener("click", () => navegar("bibliografia"));
$("#btn-presentar").addEventListener("click", (ev) => {
  const on = document.body.classList.toggle("presentar");
  ev.currentTarget.setAttribute("aria-pressed", on ? "true" : "false");
});
$("#btn-general").addEventListener("click", () => escena && escena.vistaGeneral());
$("#btn-movimiento").addEventListener("click", (ev) => {
  if (!escena) return;
  const p = !escena.getPausa(); escena.setPausa(p);
  ev.currentTarget.setAttribute("aria-pressed", p ? "true" : "false");
  ev.currentTarget.textContent = p ? "Reanudar movimiento" : "Pausar movimiento";
});

/* ---------- arranque ---------- */
ponerDocente(docente);
leerHash();

async function iniciarEscena() {
  const carga = $("#carga");
  try {
    await Promise.race([document.fonts ? document.fonts.ready : Promise.resolve(), new Promise((r) => setTimeout(r, 1500))]);
    const { crearEscena } = await import("./escena.js");
    const rot = $("#rotulo");
    escena = crearEscena($("#lienzo"), {
      estaciones: E,
      onSeleccion: (i) => navegar(E[i].id),
      onHover: (i, ev) => {
        if (i < 0 || !ev) { rot.hidden = true; return; }
        const r = $("#lienzo").getBoundingClientRect();
        rot.textContent = `${E[i].num}. ${E[i].titulo}`; rot.hidden = false;
        rot.style.left = `${ev.clientX - r.left}px`; rot.style.top = `${ev.clientY - r.top}px`;
      }
    });
    carga.remove();
    if (escena.getPausa()) { const b = $("#btn-movimiento"); b.setAttribute("aria-pressed", "true"); b.textContent = "Reanudar movimiento"; }
    pintarIndice(location.hash.slice(1));
    const i = E.findIndex((e) => e.id === location.hash.slice(1)); if (i >= 0) escena.irA(i);
    const tema = () => escena.aplicarTema();
    matchMedia("(prefers-color-scheme: dark)").addEventListener("change", tema);
    new MutationObserver(tema).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  } catch (err) {
    console.warn("Escena 3D no disponible:", err);
    carga.textContent = "La escena 3D no está disponible en este navegador. Todo el contenido sigue accesible desde el índice y la ficha.";
  }
}
iniciarEscena();
