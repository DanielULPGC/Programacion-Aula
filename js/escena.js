/*
 * El estudio del arquitecto · escena 3D (Three.js 0.160.0)
 * Estudio circular: suelo de papel milimetrado con cajetín y escala, mesa de dibujo central con la maqueta
 * de un centro escolar (cada lámina sellada añade una pieza) y siete puestos de trabajo con objetos propios.
 * Todo el modelado es procedimental: ningún objeto reproduce un edificio, una obra o una imagen concreta.
 */
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const RADIO = 10;
const css = (n) => getComputedStyle(document.documentElement).getPropertyValue(n).trim() || "#888";

export function crearEscena(contenedor, opciones) {
  const { estaciones, onSeleccion, onHover } = opciones;
  const reducido = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let pausa = reducido;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  contenedor.appendChild(renderer.domElement);
  try {
    const gl = renderer.getContext(), ext = gl.getExtension("WEBGL_debug_renderer_info");
    const nombre = ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : "";
    if (/swiftshader|llvmpipe|software/i.test(nombre)) { renderer.shadowMap.enabled = false; renderer.setPixelRatio(1); }
  } catch (e) { /* sin información */ }

  const escena = new THREE.Scene();
  const camara = new THREE.PerspectiveCamera(42, 1, 0.1, 200);
  camara.position.set(0, 21, 31);
  const controles = new OrbitControls(camara, renderer.domElement);
  controles.enableDamping = true;
  controles.dampingFactor = 0.08;
  controles.minDistance = 5;
  controles.maxDistance = 42;
  controles.maxPolarAngle = Math.PI * 0.47;
  controles.target.set(0, 1.4, 0);

  /* ---------- luz ---------- */
  const hemi = new THREE.HemisphereLight(0xf4f8ff, 0x3d4650, 1.1);
  escena.add(hemi);
  const relleno = new THREE.DirectionalLight(0xe6eeff, 0.6);
  relleno.position.set(-10, 8, -12);
  escena.add(relleno);
  const sol = new THREE.DirectionalLight(0xfff4e2, 1.6);
  sol.position.set(8, 18, 10);
  sol.castShadow = true;
  sol.shadow.mapSize.set(2048, 2048);
  Object.assign(sol.shadow.camera, { left: -16, right: 16, top: 16, bottom: -16, near: 1, far: 50 });
  sol.shadow.bias = -0.0005;
  escena.add(sol);

  /* ---------- materiales ---------- */
  const mat = {
    suelo: new THREE.MeshStandardMaterial({ roughness: 0.92 }),
    piedra: new THREE.MeshStandardMaterial({ roughness: 0.7 }),
    laton: new THREE.MeshStandardMaterial({ metalness: 0.75, roughness: 0.32 }),
    tinta: new THREE.MeshStandardMaterial({ roughness: 0.6 }),
    azul: new THREE.MeshStandardMaterial({ roughness: 0.55 }),
    madera: new THREE.MeshStandardMaterial({ color: 0x8a5a33, roughness: 0.75 }),
    maderaClara: new THREE.MeshStandardMaterial({ color: 0xc9a77a, roughness: 0.8 }),
    papel: new THREE.MeshStandardMaterial({ color: 0xf4f1e8, roughness: 0.95 }),
    carton: new THREE.MeshStandardMaterial({ color: 0xe8e2d4, roughness: 0.9 }),
    hormigon: new THREE.MeshStandardMaterial({ color: 0xb9b6ae, roughness: 0.95 }),
    teja: new THREE.MeshStandardMaterial({ color: 0xa4553a, roughness: 0.8 }),
    vidrio: new THREE.MeshPhysicalMaterial({ roughness: 0.05, transmission: 0.6, transparent: true, opacity: 0.25, thickness: 0.2 }),
    fantasma: new THREE.MeshBasicMaterial({ wireframe: true, transparent: true, opacity: 0.35 })
  };
  const color = (c, extra = {}) => new THREE.MeshStandardMaterial(Object.assign({ color: c, roughness: 0.7 }, extra));
  const TONOS = [0xd9a441, 0x5e8fb5, 0x7aa36b, 0xc46a5a, 0x8f74b0, 0x4fa3a0, 0xb88a5a];

  /* ---------- suelo: papel milimetrado con cajetín ---------- */
  function texturaSuelo() {
    const c = document.createElement("canvas"); c.width = c.height = 2048;
    const g = c.getContext("2d");
    const cx = 1024, tinta = css("--sc-tinta"), dial = css("--sc-dial"), laton = css("--sc-laton");
    g.fillStyle = css("--sc-suelo"); g.fillRect(0, 0, 2048, 2048);
    g.save(); g.beginPath(); g.arc(cx, cx, 1000, 0, Math.PI * 2); g.clip();
    g.strokeStyle = dial;
    for (let x = 0; x <= 2048; x += 32) { g.globalAlpha = x % 160 === 0 ? 0.5 : 0.18; g.lineWidth = x % 160 === 0 ? 2.5 : 1; g.beginPath(); g.moveTo(x, 0); g.lineTo(x, 2048); g.stroke(); g.beginPath(); g.moveTo(0, x); g.lineTo(2048, x); g.stroke(); }
    g.restore(); g.globalAlpha = 1;
    g.strokeStyle = dial; g.lineWidth = 6;
    [1000, 940, 330].forEach((r) => { g.beginPath(); g.arc(cx, cx, r, 0, Math.PI * 2); g.stroke(); });
    // flecha de norte y escala gráfica
    g.save(); g.translate(cx, cx - 600); g.fillStyle = laton;
    g.beginPath(); g.moveTo(0, -90); g.lineTo(34, 40); g.lineTo(0, 16); g.lineTo(-34, 40); g.closePath(); g.fill();
    g.fillStyle = tinta; g.font = "600 64px Cinzel, serif"; g.textAlign = "center"; g.fillText("N", 0, -110);
    g.restore();
    g.fillStyle = tinta; g.fillRect(1480, 1870, 320, 14); g.fillStyle = css("--sc-piedra"); g.fillRect(1560, 1870, 80, 14); g.fillRect(1720, 1870, 80, 14);
    g.fillStyle = tinta; g.font = "500 30px 'JetBrains Mono', monospace"; g.textAlign = "center"; g.fillText("0", 1480, 1930); g.fillText("1:100", 1800, 1930);
    // cajetín
    g.strokeStyle = tinta; g.lineWidth = 4; g.strokeRect(240, 1700, 520, 200);
    g.beginPath(); g.moveTo(240, 1770); g.lineTo(760, 1770); g.moveTo(540, 1770); g.lineTo(540, 1900); g.stroke();
    g.fillStyle = tinta; g.font = "700 40px Cinzel, serif"; g.textAlign = "left"; g.fillText("PROGRAMACIÓN", 262, 1750);
    g.font = "500 26px 'JetBrains Mono', monospace"; g.fillText("C. del Medio", 262, 1820); g.fillText("CEIP · Canarias", 262, 1866); g.fillText("Lám. 1-7", 562, 1820); g.fillText("2026-27", 562, 1866);
    // siete sendas punteadas hacia los puestos
    g.strokeStyle = laton; g.lineWidth = 5; g.setLineDash([18, 22]);
    for (let i = 0; i < 7; i++) {
      const a = (i / 7) * Math.PI * 2;
      g.beginPath(); g.moveTo(cx + Math.sin(a) * 340, cx - Math.cos(a) * 340); g.lineTo(cx + Math.sin(a) * 520, cx - Math.cos(a) * 520); g.stroke();
    }
    g.setLineDash([]);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
    return t;
  }
  const suelo = new THREE.Mesh(new THREE.CircleGeometry(17, 96), mat.suelo);
  suelo.rotation.x = -Math.PI / 2; suelo.receiveShadow = true;
  escena.add(suelo);

  /* ---------- texturas de lámina (planos) ---------- */
  function lamina(dibujo, w = 512, hh = 360) {
    const c = document.createElement("canvas"); c.width = w; c.height = hh;
    const g = c.getContext("2d");
    g.fillStyle = "#1f4f7a"; g.fillRect(0, 0, w, hh);
    g.strokeStyle = "rgba(255,255,255,.12)"; g.lineWidth = 1;
    for (let x = 0; x < w; x += 16) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, hh); g.stroke(); }
    for (let y = 0; y < hh; y += 16) { g.beginPath(); g.moveTo(0, y); g.lineTo(w, y); g.stroke(); }
    g.strokeStyle = "#e8f1f8"; g.fillStyle = "#e8f1f8"; g.lineWidth = 3;
    g.strokeRect(10, 10, w - 20, hh - 20);
    dibujo(g, w, hh);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
    return new THREE.MeshStandardMaterial({ map: t, roughness: 0.85 });
  }

  /* ---------- mesa de dibujo central con la maqueta ---------- */
  const mesa = new THREE.Group();
  const pie = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.7, 1.4, 32), mat.madera); pie.position.y = 0.7; pie.castShadow = true; mesa.add(pie);
  const tablero = new THREE.Mesh(new THREE.CylinderGeometry(2.5, 2.5, 0.16, 64), mat.maderaClara); tablero.position.y = 1.48; tablero.castShadow = tablero.receiveShadow = true; mesa.add(tablero);
  const canto = new THREE.Mesh(new THREE.TorusGeometry(2.5, 0.05, 8, 128), mat.laton); canto.rotation.x = Math.PI / 2; canto.position.y = 1.56; mesa.add(canto);
  const base = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.03, 2.4), lamina((g, w, hh) => {
    g.lineWidth = 2; g.strokeRect(120, 70, 270, 200); g.beginPath(); g.moveTo(60, 300); g.lineTo(460, 300); g.moveTo(60, 40); g.lineTo(60, 330); g.stroke();
    g.font = "600 22px 'JetBrains Mono', monospace"; g.fillText("PARCELA", 200, 175);
  }));
  base.position.y = 1.575; base.receiveShadow = true; mesa.add(base);
  // maqueta: siete piezas, de la parcela a la cubierta
  const maqueta = new THREE.Group(); maqueta.position.y = 1.59; mesa.add(maqueta);
  const piezas = [];
  function pieza(constructor) {
    const real = new THREE.Group(); constructor(real, null);
    const fant = new THREE.Group(); constructor(fant, mat.fantasma);
    maqueta.add(real, fant); piezas.push({ real, fant });
  }
  pieza((g, m) => { // 1 · parcela con césped y caminos
    const p = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.04, 1.7), m || color(0x9db37a)); p.position.y = 0.02; g.add(p);
    const camino = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.045, 1.7), m || mat.carton); camino.position.set(0.95, 0.025, 0); g.add(camino);
  });
  pieza((g, m) => { // 2 · losa de cimentación
    const l = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.08, 1.0), m || mat.hormigon); l.position.y = 0.08; g.add(l);
  });
  pieza((g, m) => { // 3 · pilares
    for (let i = 0; i < 4; i++) for (let j = 0; j < 3; j++) { const p = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.6, 0.06), m || mat.hormigon); p.position.set(-0.7 + i * 0.466, 0.42, -0.42 + j * 0.42); g.add(p); }
  });
  pieza((g, m) => { // 4 · forjados (plantas)
    [0.42, 0.74].forEach((y) => { const f = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.05, 1.0), m || mat.carton); f.position.y = y; g.add(f); });
  });
  pieza((g, m) => { // 5 · fachadas con ventanas (aulas)
    const vent = m || color(0x6f9cc0, { roughness: 0.3, metalness: 0.2 });
    [[-0.5, 1], [0.5, -1]].forEach(([z, s]) => {
      const muro = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.62, 0.04), m || mat.papel); muro.position.set(0, 0.43, z); g.add(muro);
      for (let k = 0; k < 4; k++) for (let f = 0; f < 2; f++) { const v = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.13, 0.02), vent); v.position.set(-0.55 + k * 0.37, 0.28 + f * 0.32, z + s * 0.025); g.add(v); }
    });
    const lado = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.62, 1.0), m || mat.papel); lado.position.set(-0.8, 0.43, 0); g.add(lado);
  });
  pieza((g, m) => { // 6 · rampa y puerta de acceso
    const r = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.03, 0.22), m || mat.hormigon); r.position.set(0.86 + 0.28, 0.1, 0.25); r.rotation.z = -0.22; g.add(r);
    const puerta = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.26, 0.2), m || color(0xc46a5a)); puerta.position.set(0.81, 0.24, 0.25); g.add(puerta);
    const barandilla = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.015, 0.015), m || mat.laton); barandilla.position.set(1.14, 0.22, 0.37); barandilla.rotation.z = -0.22; g.add(barandilla);
  });
  pieza((g, m) => { // 7 · cubierta y bandera
    const cub = new THREE.Mesh(new THREE.BoxGeometry(1.72, 0.06, 1.12), m || mat.teja); cub.position.y = 0.77; g.add(cub);
    const mastil = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.5, 6), m || mat.laton); mastil.position.set(-0.7, 1.05, -0.4); g.add(mastil);
    const banda = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.12, 0.01), m || color(0xd9a441)); banda.position.set(-0.59, 1.22, -0.4); g.add(banda);
  });
  // regla T y escalímetro sobre la mesa
  const reglaT = new THREE.Group(); reglaT.position.set(-1.6, 1.62, 1.35); reglaT.rotation.y = 0.3; mesa.add(reglaT);
  const hojaT = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.02, 0.1), mat.maderaClara); reglaT.add(hojaT);
  const cabT = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.04, 0.4), mat.madera); cabT.position.x = -0.8; reglaT.add(cabT);
  const escalimetro = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 1.0, 3), mat.papel); escalimetro.rotation.z = Math.PI / 2; escalimetro.position.set(1.6, 1.64, -1.3); escalimetro.rotation.y = -0.4; mesa.add(escalimetro);
  escena.add(mesa);

  /* ---------- rótulos (sprites) ---------- */
  function rotulo(num, texto) {
    const c = document.createElement("canvas"); c.width = 640; c.height = 160;
    const g = c.getContext("2d");
    g.fillStyle = css("--surface"); g.strokeStyle = css("--sc-laton"); g.lineWidth = 6;
    g.beginPath(); g.roundRect(6, 6, 628, 148, 22); g.fill(); g.stroke();
    g.fillStyle = css("--sc-laton"); g.font = "700 72px Cinzel, serif"; g.textAlign = "center"; g.textBaseline = "middle";
    g.fillText(String(num), 70, 84);
    g.fillStyle = css("--sc-tinta"); g.font = "700 46px 'Atkinson Hyperlegible', sans-serif"; g.textAlign = "left";
    let t = texto; while (g.measureText(t).width > 500 && t.length > 4) t = t.slice(0, -2);
    if (t !== texto) t = t.trim() + "…";
    g.fillText(t, 124, 84);
    const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, depthWrite: false }));
    s.scale.set(3.2, 0.8, 1);
    return s;
  }
  function placa(texto, ancho = 1.0, alto = 0.22, fondo = "#efe9da") {
    const c = document.createElement("canvas"); c.width = 512; c.height = Math.round(512 * alto / ancho);
    const g = c.getContext("2d");
    g.fillStyle = fondo; g.fillRect(0, 0, c.width, c.height);
    g.strokeStyle = "#1f2a33"; g.lineWidth = 8; g.strokeRect(4, 4, c.width - 8, c.height - 8);
    g.fillStyle = "#1f2a33"; g.font = `700 ${Math.round(c.height * 0.46)}px 'Atkinson Hyperlegible', sans-serif`; g.textAlign = "center"; g.textBaseline = "middle";
    let t = texto; while (g.measureText(t).width > c.width - 30 && t.length > 3) t = t.slice(0, -1);
    g.fillText(t, c.width / 2, c.height / 2 + 2);
    const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
    return new THREE.Mesh(new THREE.PlaneGeometry(ancho, alto), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.8 }));
  }

  /* ---------- puestos de trabajo ---------- */
  const pedestales = [];
  const animadores = [];
  const plantas = { grupos: [], modo: "todo" };
  const nivel = { brazo: null, bloques: [], burbuja: null, modo: "igual", angulo: 0, objetivo: 0 };
  const objetivoSel = [];

  estaciones.forEach((e, i) => {
    const a = (i / 7) * Math.PI * 2;
    const grupo = new THREE.Group();
    grupo.position.set(Math.sin(a) * RADIO, 0, -Math.cos(a) * RADIO);
    grupo.rotation.y = -a + Math.PI;
    const plinto = new THREE.Mesh(new THREE.CylinderGeometry(1.7, 1.85, 0.6, 48), mat.piedra.clone());
    plinto.position.y = 0.3; plinto.castShadow = plinto.receiveShadow = true;
    plinto.userData.estacion = i;
    grupo.add(plinto);
    const borde = new THREE.Mesh(new THREE.TorusGeometry(1.72, 0.04, 8, 96), mat.laton);
    borde.rotation.x = Math.PI / 2; borde.position.y = 0.61; grupo.add(borde);
    const obj = new THREE.Group(); obj.position.y = 0.6; grupo.add(obj);
    const constructor = [solar, cimientos, planoMaestro, edificioPlantas, aulaPorDentro, rampasPuertas, libroObra][i];
    constructor(obj);
    obj.traverse((m) => { if (m.isMesh) { m.castShadow = true; m.userData.estacion = i; } });
    const r = rotulo(e.num, e.titulo); r.position.y = 4.1; grupo.add(r);
    escena.add(grupo);
    pedestales.push({ grupo, plinto, angulo: a });
    objetivoSel.push(plinto); obj.traverse((m) => { if (m.isMesh) objetivoSel.push(m); });
  });

  /* 1 · el solar: plano de situación, estacas con cordel y teodolito */
  function solar(g) {
    const tabla = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.08, 1.5), mat.madera); tabla.position.y = 0.04; g.add(tabla);
    const plano = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.01, 1.4), lamina((x, w, hh) => {
      x.lineWidth = 6; x.beginPath(); x.moveTo(20, 260); x.lineTo(490, 230); x.moveTo(300, 20); x.lineTo(330, 340); x.stroke();
      x.lineWidth = 3; x.setLineDash([10, 8]); x.strokeRect(90, 70, 170, 130); x.setLineDash([]);
      x.font = "600 22px 'JetBrains Mono', monospace"; x.fillText("SOLAR", 135, 140); x.fillText("CALLE", 380, 280); x.fillText("BARRIO", 360, 90);
      x.beginPath(); x.arc(420, 160, 26, 0, Math.PI * 2); x.stroke(); x.fillText("i", 414, 168);
    }));
    plano.position.y = 0.085; g.add(plano);
    // estacas en las esquinas del solar con cordel
    const esq = [[-0.75, -0.35], [-0.05, -0.35], [-0.05, 0.25], [-0.75, 0.25]];
    esq.forEach(([x, z]) => { const e = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.35, 6), color(0xd9a441)); e.position.set(x, 0.26, z); g.add(e); });
    for (let k = 0; k < 4; k++) {
      const [x1, z1] = esq[k], [x2, z2] = esq[(k + 1) % 4];
      const lon = Math.hypot(x2 - x1, z2 - z1);
      const c = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, lon, 4), mat.tinta);
      c.position.set((x1 + x2) / 2, 0.36, (z1 + z2) / 2); c.rotation.z = Math.PI / 2; c.rotation.y = -Math.atan2(z2 - z1, x2 - x1); g.add(c);
    }
    // teodolito sobre trípode
    const teo = new THREE.Group(); teo.position.set(0.75, 0, 0.1); g.add(teo);
    [0, 1, 2].forEach((k) => { const a = (k / 3) * Math.PI * 2; const p = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.025, 1.3, 6), mat.laton); p.position.set(Math.cos(a) * 0.16, 0.62, Math.sin(a) * 0.16); p.rotation.set(Math.sin(a) * 0.25, 0, -Math.cos(a) * 0.25); teo.add(p); });
    const cabeza = new THREE.Group(); cabeza.position.y = 1.32; teo.add(cabeza);
    const cuerpo = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.2, 0.14), color(0xd9a441)); cabeza.add(cuerpo);
    const anteojo = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.05, 0.36, 16), mat.tinta); anteojo.rotation.x = Math.PI / 2; anteojo.position.y = 0.14; cabeza.add(anteojo);
    animadores.push((t) => { cabeza.rotation.y = Math.sin(t * 0.4) * 0.9; });
  }

  /* 2 · cimientos: cuatro zapatas rotuladas y el pilar del criterio */
  function cimientos(g) {
    const losa = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.12, 1.7), mat.hormigon); losa.position.y = 0.06; g.add(losa);
    const nombres = ["OBJETIVOS", "COMPETENCIAS", "SABERES", "DESCRIPTORES"];
    [[-0.75, -0.45], [0.75, -0.45], [-0.75, 0.45], [0.75, 0.45]].forEach(([x, z], k) => {
      const zap = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.32, 0.52), color(TONOS[k + 1])); zap.position.set(x, 0.28, z); g.add(zap);
      const p = placa(nombres[k], 0.6, 0.13); p.rotation.x = -Math.PI / 2; p.position.set(x, 0.445, z); g.add(p);
    });
    const pilar = new THREE.Mesh(new THREE.BoxGeometry(0.34, 1.7, 0.34), color(0xd9a441, { metalness: 0.3, roughness: 0.4, emissive: 0x000000 })); pilar.position.set(0, 0.97, 0); g.add(pilar);
    const p = placa("CRITERIO", 0.5, 0.12); p.position.set(0, 1.5, 0.175); g.add(p);
    const vigas = [[-0.75, -0.45], [0.75, -0.45], [-0.75, 0.45], [0.75, 0.45]];
    vigas.forEach(([x, z]) => {
      const lon = Math.hypot(x, z); const v = new THREE.Mesh(new THREE.BoxGeometry(lon, 0.06, 0.06), mat.hormigon);
      v.position.set(x / 2, 0.44, z / 2); v.rotation.y = -Math.atan2(z, x); g.add(v);
    });
    animadores.push((t) => { pilar.material.emissive.setRGB(0.25 * (0.5 + 0.5 * Math.sin(t * 1.2)), 0.16 * (0.5 + 0.5 * Math.sin(t * 1.2)), 0); });
  }

  /* 3 · plano maestro: tablero inclinado con el criterio desglosado, regla T y compás */
  function planoMaestro(g) {
    const patas = [[-0.85, -0.4], [0.85, -0.4], [-0.85, 0.4], [0.85, 0.4]];
    patas.forEach(([x, z], k) => { const p = new THREE.Mesh(new THREE.BoxGeometry(0.06, k < 2 ? 1.25 : 0.85, 0.06), mat.madera); p.position.set(x, (k < 2 ? 1.25 : 0.85) / 2, z); g.add(p); });
    const tab = new THREE.Group(); tab.position.set(0, 1.08, 0); tab.rotation.x = -0.45; g.add(tab);
    const tablero = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.05, 1.1), mat.maderaClara); tab.add(tablero);
    const hoja = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.01, 0.95), lamina((x, w, hh) => {
      const bandas = [["PROCESO", "#f2c14e"], ["SABER", "#8fc1e8"], ["MODO", "#9ed29a"], ["FINALIDAD", "#f08b7a"]];
      x.font = "700 26px 'JetBrains Mono', monospace";
      bandas.forEach(([t, c], k) => { x.fillStyle = c; x.fillRect(40 + k * 112, 60, 100, 26); x.fillStyle = "#e8f1f8"; x.fillText(t.slice(0, 7), 42 + k * 112, 120); });
      x.fillStyle = "#e8f1f8"; x.font = "600 20px 'JetBrains Mono', monospace";
      for (let l = 0; l < 6; l++) x.fillRect(40, 160 + l * 28, 380 - (l % 3) * 50, 6);
      x.font = "700 30px Cinzel, serif"; x.fillText("CRITERIO 7.1", 300, 330);
    }));
    hoja.position.y = 0.03; tab.add(hoja);
    const regla = new THREE.Group(); tab.add(regla);
    const hojaR = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.02, 0.08), mat.papel); hojaR.position.y = 0.05; regla.add(hojaR);
    const cab = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.06, 0.3), mat.madera); cab.position.set(-1.0, 0.04, 0); regla.add(cab);
    const compas = new THREE.Group(); compas.position.set(0.55, 0.06, 0.15); tab.add(compas);
    [-0.25, 0.25].forEach((r) => { const b = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.006, 0.4, 6), mat.laton); b.rotation.z = Math.PI / 2 + r; b.position.x = 0; compas.add(b); });
    animadores.push((t) => { regla.position.z = Math.sin(t * 0.5) * 0.4; compas.rotation.y = t * 0.6; });
  }

  /* 4 · las plantas: edificio de tres trimestres con situaciones de aprendizaje de colores */
  function edificioPlantas(g) {
    const solera = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.08, 1.3), mat.hormigon); solera.position.y = 0.04; g.add(solera);
    const reparto = [4, 3, 4];
    reparto.forEach((n, p) => {
      const planta = new THREE.Group(); planta.position.y = 0.08 + p * 0.6; g.add(planta);
      const forjado = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.06, 1.2), mat.carton); forjado.position.y = 0.55; planta.add(forjado);
      for (let k = 0; k < 4; k++) { const pil = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.55, 0.06), mat.hormigon); pil.position.set(k < 2 ? -0.9 : 0.9, 0.27, k % 2 ? -0.55 : 0.55); planta.add(pil); }
      const ancho = 1.7 / n;
      for (let k = 0; k < n; k++) {
        const b = new THREE.Mesh(new THREE.BoxGeometry(ancho - 0.06, 0.4, 0.8), color(TONOS[(p * 4 + k) % TONOS.length]));
        b.position.set(-0.85 + ancho / 2 + k * ancho, 0.22, 0); planta.add(b);
      }
      const et = placa(`TRIMESTRE ${p + 1}`, 0.8, 0.13); et.position.set(0, 0.3, 0.62); planta.add(et);
      plantas.grupos.push(planta);
    });
    aplicarPlantas();
    animadores.push((t) => { plantas.grupos.forEach((pl, k) => { const obj = pl.userData.visible ? 1 : 0.001; const s = pl.scale.y + (obj - pl.scale.y) * 0.12; pl.scale.set(1, s, 1); pl.visible = s > 0.01; }); });
  }
  function aplicarPlantas() {
    const n = plantas.modo === "todo" ? 3 : Number(plantas.modo);
    plantas.grupos.forEach((pl, k) => { pl.userData.visible = k < n; });
  }

  /* 5 · el aula por dentro: aula seccionada con mesas en grupos y producto final */
  function aulaPorDentro(g) {
    const suelo = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.06, 1.8), mat.maderaClara); suelo.position.y = 0.03; g.add(suelo);
    const fondo = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.3, 0.06), mat.papel); fondo.position.set(0, 0.68, -0.9); g.add(fondo);
    const lateral = new THREE.Mesh(new THREE.BoxGeometry(0.06, 1.3, 1.8), mat.papel); lateral.position.set(-1.2, 0.68, 0); g.add(lateral);
    const pizarra = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.5, 0.02), color(0x2f4f45)); pizarra.position.set(0.1, 0.85, -0.86); g.add(pizarra);
    const ventana = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.45, 0.7), mat.vidrio); ventana.position.set(-1.17, 0.85, 0.1); g.add(ventana);
    [[-0.45, -0.2], [0.45, -0.2], [-0.45, 0.5], [0.45, 0.5]].forEach(([x, z], k) => {
      const mesaG = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.04, 0.45), mat.papel); mesaG.position.set(x, 0.32, z); g.add(mesaG);
      const pata = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.28, 6), mat.tinta); pata.position.set(x, 0.17, z); g.add(pata);
      [[-0.22, -0.28], [0.22, -0.28], [-0.22, 0.28], [0.22, 0.28]].forEach(([dx, dz]) => { const s = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.18, 0.14), color(TONOS[k + 1])); s.position.set(x + dx, 0.12, z + dz); g.add(s); });
    });
    const expo = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.18, 0.3, 24), mat.madera); expo.position.set(0.95, 0.2, 0.6); g.add(expo);
    const producto = new THREE.Mesh(new THREE.IcosahedronGeometry(0.11, 0), color(0xd9a441, { metalness: 0.4, roughness: 0.3 })); producto.position.set(0.95, 0.47, 0.6); g.add(producto);
    animadores.push((t) => { producto.rotation.y = t * 0.8; producto.position.y = 0.47 + Math.sin(t * 1.5) * 0.03; });
  }

  /* 6 · rampas y puertas: acceso con rampa, escalones y tres puertas (principios DUA) */
  function rampasPuertas(g) {
    const plataforma = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.36, 0.7), mat.hormigon); plataforma.position.set(0, 0.18, -0.45); g.add(plataforma);
    const rampa = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.05, 1.0), color(0x9db37a)); rampa.position.set(-0.8, 0.18, 0.35); rampa.rotation.x = 0.33; g.add(rampa);
    for (let k = 0; k < 3; k++) { const e = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.12, 0.18), mat.hormigon); e.position.set(0.55, 0.06 + k * 0.12, 0.42 - k * 0.18); g.add(e); }
    [-1.07, -0.53].forEach((x) => { const b = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.02, 1.05), mat.laton); b.position.set(x, 0.5, 0.35); b.rotation.x = 0.33; g.add(b); });
    const etiquetas = ["IMPLICACIÓN", "REPRESENTACIÓN", "ACCIÓN"];
    const hojas = [];
    [-0.7, 0, 0.7].forEach((x, k) => {
      const marco = new THREE.Mesh(new THREE.BoxGeometry(0.5, 1.0, 0.06), mat.papel); marco.position.set(x, 0.86, -0.75); g.add(marco);
      const gozne = new THREE.Group(); gozne.position.set(x - 0.2, 0.86, -0.71); g.add(gozne);
      const hoja = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.88, 0.03), color(TONOS[k + 3])); hoja.position.x = 0.2; gozne.add(hoja);
      hojas.push(gozne);
      const p = placa(etiquetas[k], 0.5, 0.1); p.position.set(x, 1.45, -0.71); g.add(p);
    });
    animadores.push((t) => { hojas.forEach((gz, k) => { gz.rotation.y = -0.6 - 0.5 * Math.sin(t * 0.7 + k * 1.3); }); });
  }

  /* 7 · el libro de obra: atril con libro y nivel con criterios de igual peso */
  function libroObra(g) {
    const atril = new THREE.Group(); atril.position.set(-0.75, 0, 0); g.add(atril);
    const col = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.07, 1.2, 10), mat.madera); col.position.y = 0.6; atril.add(col);
    const tabla = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.04, 0.65), mat.madera); tabla.position.y = 1.25; tabla.rotation.x = 0.5; atril.add(tabla);
    const c = document.createElement("canvas"); c.width = 512; c.height = 360; const x = c.getContext("2d");
    x.fillStyle = "#f4f1e8"; x.fillRect(0, 0, 512, 360); x.strokeStyle = "#1f2a33"; x.lineWidth = 2;
    for (let p = 0; p < 2; p++) { for (let f = 0; f < 6; f++) { x.strokeRect(24 + p * 256, 40 + f * 48, 210, 40); } x.fillStyle = "#1f2a33"; x.font = "700 20px 'JetBrains Mono', monospace"; x.fillText(p ? "NIVEL" : "CRITERIO", 30 + p * 256, 28); }
    ["IN", "SU", "BI", "NT", "SB"].forEach((t, k) => { x.fillText(t, 300, 68 + k * 48); });
    const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
    const libro = new THREE.Mesh(new THREE.BoxGeometry(0.82, 0.03, 0.58), [mat.papel, mat.papel, new THREE.MeshStandardMaterial({ map: tex, roughness: 0.9 }), mat.madera, mat.papel, mat.papel]);
    libro.position.y = 1.29; libro.rotation.x = 0.5; atril.add(libro);
    // nivel de obra: brazo con cuatro criterios de igual tamaño
    const nv = new THREE.Group(); nv.position.set(0.7, 0, 0); g.add(nv);
    const pieN = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.5, 16), mat.laton); pieN.position.y = 0.25; nv.add(pieN);
    const brazo = new THREE.Group(); brazo.position.y = 0.52; nv.add(brazo);
    const viga = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.06, 0.2), mat.maderaClara); brazo.add(viga);
    const tubo = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.4, 16), mat.vidrio); tubo.rotation.z = Math.PI / 2; tubo.position.set(0, 0.06, 0.12); brazo.add(tubo);
    const burbuja = new THREE.Mesh(new THREE.SphereGeometry(0.03, 12, 8), color(0x9ed29a, { emissive: 0x2a5a2a })); burbuja.position.set(0, 0.06, 0.12); brazo.add(burbuja);
    [-0.6, -0.2, 0.2, 0.6].forEach((bx, k) => { const b = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.22, 0.22), color(TONOS[k + 1])); b.position.set(bx, 0.14, 0); brazo.add(b); nivel.bloques.push(b); });
    nivel.brazo = brazo; nivel.burbuja = burbuja;
    aplicarNivel();
    animadores.push(() => {
      nivel.angulo += (nivel.objetivo - nivel.angulo) * 0.06;
      brazo.rotation.z = nivel.angulo;
      burbuja.position.x = Math.max(-0.17, Math.min(0.17, nivel.angulo * 1.6));
      nivel.bloques.forEach((b) => { const s = b.userData.obj || 1; const v = b.scale.x + (s - b.scale.x) * 0.1; b.scale.set(v, v, v); b.position.y = 0.03 + 0.11 * v; });
    });
  }
  function aplicarNivel() {
    const pond = nivel.modo === "ponderado";
    nivel.bloques.forEach((b, k) => { b.userData.obj = pond && k === 0 ? 1.7 : 1; });
    nivel.objetivo = pond ? 0.22 : 0;
    if (nivel.burbuja) nivel.burbuja.material.color.set(pond ? 0xf08b7a : 0x9ed29a);
  }

  /* ---------- interacción ---------- */
  const ray = new THREE.Raycaster(), ptr = new THREE.Vector2();
  let hoverIdx = -1, abajo = null;
  function estacionBajo(ev) {
    const r = renderer.domElement.getBoundingClientRect();
    ptr.x = ((ev.clientX - r.left) / r.width) * 2 - 1; ptr.y = -((ev.clientY - r.top) / r.height) * 2 + 1;
    ray.setFromCamera(ptr, camara);
    const hit = ray.intersectObjects(objetivoSel, false)[0];
    return hit ? hit.object.userData.estacion : -1;
  }
  renderer.domElement.addEventListener("pointermove", (ev) => {
    const i = estacionBajo(ev);
    if (i !== hoverIdx) {
      if (hoverIdx >= 0) pedestales[hoverIdx].plinto.material.emissive.setHex(0x000000);
      hoverIdx = i;
      if (i >= 0) pedestales[i].plinto.material.emissive.setHex(0x1a2430);
      renderer.domElement.style.cursor = i >= 0 ? "pointer" : "grab";
    }
    if (onHover) onHover(i, ev);
  });
  renderer.domElement.addEventListener("pointerleave", () => { if (onHover) onHover(-1); });
  renderer.domElement.addEventListener("pointerdown", (ev) => { abajo = { x: ev.clientX, y: ev.clientY }; });
  renderer.domElement.addEventListener("pointerup", (ev) => {
    if (!abajo) return;
    const mov = Math.hypot(ev.clientX - abajo.x, ev.clientY - abajo.y); abajo = null;
    if (mov > 6) return;
    const i = estacionBajo(ev);
    if (i >= 0 && onSeleccion) onSeleccion(i);
  });

  /* ---------- cámara animada ---------- */
  let vuelo = null;
  function volar(pos, objetivo, dur = 1.3) {
    if (reducido) { camara.position.copy(pos); controles.target.copy(objetivo); return; }
    vuelo = { p0: camara.position.clone(), t0: controles.target.clone(), p1: pos, t1: objetivo, ini: performance.now(), dur: dur * 1000 };
  }
  function irA(i) {
    const { angulo } = pedestales[i];
    const dir = new THREE.Vector3(Math.sin(angulo), 0, -Math.cos(angulo));
    const objetivo = dir.clone().multiplyScalar(RADIO).add(new THREE.Vector3(0, 1.6, 0));
    const pos = dir.clone().multiplyScalar(RADIO + 9.5).add(new THREE.Vector3(0, 5.6, 0));
    volar(pos, objetivo);
  }
  function vistaGeneral() { volar(new THREE.Vector3(0, 21, 31), new THREE.Vector3(0, 1.4, 0)); }

  /* ---------- tema ---------- */
  function aplicarTema() {
    escena.background = new THREE.Color(css("--sc-fondo"));
    escena.fog = new THREE.Fog(new THREE.Color(css("--sc-fondo")), 34, 70);
    mat.piedra.color.set(css("--sc-piedra"));
    pedestales.forEach((p) => p.plinto.material.color.set(css("--sc-piedra")));
    mat.laton.color.set(css("--sc-laton"));
    mat.tinta.color.set(css("--sc-tinta"));
    mat.azul.color.set(css("--sc-mar"));
    mat.fantasma.color.set(css("--sc-mar"));
    if (mat.suelo.map) mat.suelo.map.dispose();
    mat.suelo.map = texturaSuelo(); mat.suelo.color.set(0xffffff); mat.suelo.needsUpdate = true;
    const oscuro = matchMedia("(prefers-color-scheme: dark)").matches && document.documentElement.getAttribute("data-theme") !== "light" || document.documentElement.getAttribute("data-theme") === "dark";
    hemi.intensity = oscuro ? 0.75 : 1.1; sol.intensity = oscuro ? 1.2 : 1.6;
  }
  aplicarTema();

  /* ---------- bucle ---------- */
  const reloj = new THREE.Clock();
  let tAnim = 0;
  function tamano() {
    const w = contenedor.clientWidth || 1, h = contenedor.clientHeight || 1;
    renderer.setSize(w, h, false); camara.aspect = w / h; camara.updateProjectionMatrix();
  }
  new ResizeObserver(tamano).observe(contenedor); tamano();
  function bucle() {
    const dt = Math.min(reloj.getDelta(), 0.05);
    if (!pausa) tAnim += dt;
    animadores.forEach((f) => f(tAnim));
    maqueta.rotation.y = Math.sin(tAnim * 0.15) * 0.25;
    piezas.forEach((p) => {
      if (!p.real.visible) return;
      const s = p.real.scale.y + (1 - p.real.scale.y) * 0.08; p.real.scale.set(1, s, 1);
    });
    if (vuelo) {
      let k = (performance.now() - vuelo.ini) / vuelo.dur; if (k >= 1) k = 1;
      const e = k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
      camara.position.lerpVectors(vuelo.p0, vuelo.p1, e); controles.target.lerpVectors(vuelo.t0, vuelo.t1, e);
      if (k === 1) vuelo = null;
    }
    controles.update();
    renderer.render(escena, camara);
    requestAnimationFrame(bucle);
  }
  bucle();

  return {
    irA, vistaGeneral,
    proyectar(i) {
      const v = pedestales[i].grupo.position.clone().add(new THREE.Vector3(0, 4.6, 0)).project(camara);
      const r = renderer.domElement.getBoundingClientRect();
      return { x: (v.x * 0.5 + 0.5) * r.width, y: (-v.y * 0.5 + 0.5) * r.height, visible: v.z < 1 };
    },
    marcarResueltas(lista) {
      lista.forEach((on, i) => {
        const p = piezas[i]; if (!p) return;
        if (on && !p.real.visible) p.real.scale.set(1, reducido ? 1 : 0.01, 1);
        p.real.visible = on; p.fant.visible = !on;
      });
    },
    setPausa(v) { pausa = v; },
    getPausa() { return pausa; },
    setPlantas(modo) { plantas.modo = modo; aplicarPlantas(); },
    setNivel(modo) { nivel.modo = modo; aplicarNivel(); },
    aplicarTema
  };
}
