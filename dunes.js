// ============================================================
// Paisaje 3D: vuelo nocturno sobre dunas del desierto (Three.js)
// ============================================================
import * as THREE from 'three';

const canvas = document.getElementById('dunes');
const hero = document.getElementById('inicio');
const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;

let renderer;
try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
} catch (e) {
    canvas.remove(); // queda el degradado CSS de respaldo
    throw e;
}
renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
renderer.setClearColor(0x070912, 1);

const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x070912, 30, 120);

const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 400);
camera.position.set(0, 9, 30);

// ---------- Terreno ----------
const SIZE = 200, SEG = 140;
const geo = new THREE.PlaneGeometry(SIZE, SIZE, SEG, SEG);
geo.rotateX(-Math.PI / 2);
const pos = geo.attributes.position;
const base = Float32Array.from(pos.array);

// Color por vértice: arena en las crestas, azul profundo en los valles
const colors = new Float32Array(pos.count * 3);
geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
const cLow = new THREE.Color(0x1d2a5c);
const cHigh = new THREE.Color(0xf0b56e);
const tmp = new THREE.Color();

function dune(x, z) {
    // crestas afiladas tipo duna + ondulación suave
    const r1 = 1 - Math.abs(Math.sin(x * 0.055 + z * 0.022));
    const r2 = 1 - Math.abs(Math.sin(x * 0.11 - z * 0.04 + 1.7));
    const swell = Math.sin(z * 0.035 + x * 0.01) * 0.5 + 0.5;
    let h = r1 * r1 * 6.5 + r2 * r2 * 2.2 + swell * 2.5;
    // valle central para la cámara
    const side = Math.min(1, Math.abs(x) / 38);
    return h * (0.25 + 0.75 * side * side) - 2;
}

const mat = new THREE.MeshBasicMaterial({ vertexColors: true, wireframe: true, transparent: true, opacity: 0.55, fog: true });
const terrain = new THREE.Mesh(geo, mat);
terrain.position.z = -60;
scene.add(terrain);

// Puntos en los vértices para un brillo de "escaneo"
const pts = new THREE.Points(geo, new THREE.PointsMaterial({ size: 0.16, vertexColors: true, transparent: true, opacity: 0.9, fog: true }));
pts.position.copy(terrain.position);
scene.add(pts);

// ---------- Cielo estrellado (cielo de Atacama) ----------
const STARS = 1800;
const sGeo = new THREE.BufferGeometry();
const sPos = new Float32Array(STARS * 3);
for (let i = 0; i < STARS; i++) {
    const th = Math.random() * Math.PI * 2;
    const ph = Math.random() * Math.PI * 0.42;
    const r = 160 + Math.random() * 60;
    sPos[i * 3] = r * Math.sin(ph) * Math.cos(th);
    sPos[i * 3 + 1] = r * Math.cos(ph) * 0.6 + 6;
    sPos[i * 3 + 2] = r * Math.sin(ph) * Math.sin(th) - 80;
}
sGeo.setAttribute('position', new THREE.BufferAttribute(sPos, 3));
const stars = new THREE.Points(sGeo, new THREE.PointsMaterial({ color: 0xc9d6ff, size: 0.7, sizeAttenuation: true, transparent: true, opacity: 0.85, fog: false }));
scene.add(stars);

// ---------- Luna baja en el horizonte ----------
function glowTexture() {
    const c = document.createElement('canvas');
    c.width = c.height = 256;
    const g = c.getContext('2d');
    const grad = g.createRadialGradient(128, 128, 0, 128, 128, 128);
    grad.addColorStop(0, 'rgba(255,226,180,1)');
    grad.addColorStop(0.18, 'rgba(255,214,160,0.95)');
    grad.addColorStop(0.22, 'rgba(240,181,110,0.35)');
    grad.addColorStop(1, 'rgba(240,181,110,0)');
    g.fillStyle = grad;
    g.fillRect(0, 0, 256, 256);
    return new THREE.CanvasTexture(g.canvas);
}
const moon = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), transparent: true, depthWrite: false, fog: false }));
moon.scale.set(70, 70, 1);
moon.position.set(48, 18, -170);
scene.add(moon);

// ---------- Interacción ----------
const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
addEventListener('pointermove', (e) => {
    mouse.tx = (e.clientX / innerWidth - 0.5) * 2;
    mouse.ty = (e.clientY / innerHeight - 0.5) * 2;
}, { passive: true });

function resize() {
    const w = hero.clientWidth, h = hero.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    // en pantallas angostas, alejar un poco para ver las dunas
    camera.fov = w < 700 ? 72 : 60;
    camera.updateProjectionMatrix();
}
addEventListener('resize', resize);
resize();

// ---------- Animación ----------
let visible = true, raf = 0, t0 = performance.now(), travel = 0, last = t0;
new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    if (visible && !raf && !REDUCED) raf = requestAnimationFrame(frame);
}).observe(hero);

function updateTerrain(offset, rise) {
    for (let i = 0; i < pos.count; i++) {
        const x = base[i * 3];
        const z = base[i * 3 + 2];
        const h = dune(x, z - offset) * rise;
        pos.array[i * 3 + 1] = h;
        const k = Math.min(1, Math.max(0, (h + 1.5) / 8));
        tmp.copy(cLow).lerp(cHigh, k * k);
        colors[i * 3] = tmp.r; colors[i * 3 + 1] = tmp.g; colors[i * 3 + 2] = tmp.b;
    }
    pos.needsUpdate = true;
    geo.attributes.color.needsUpdate = true;
}

function frame(now) {
    raf = 0;
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    const t = (now - t0) / 1000;

    // las dunas "emergen" al cargar (momento orquestado de entrada)
    const rise = Math.min(1, t / 2.4);
    const eased = 1 - Math.pow(1 - rise, 3);

    travel += dt * 6;
    updateTerrain(travel, eased);

    mouse.x += (mouse.tx - mouse.x) * 0.04;
    mouse.y += (mouse.ty - mouse.y) * 0.04;
    const scrollK = Math.min(1, scrollY / innerHeight);

    camera.position.x = mouse.x * 6;
    camera.position.y = 9 - mouse.y * 2.5 + scrollK * 10;
    camera.lookAt(mouse.x * 3, 3 - scrollK * 6, -40);
    camera.rotation.z = -mouse.x * 0.04;

    stars.rotation.y = t * 0.004;
    renderer.render(scene, camera);

    if (visible) raf = requestAnimationFrame(frame);
}

if (REDUCED) {
    updateTerrain(0, 1);
    camera.lookAt(0, 3, -40);
    renderer.render(scene, camera);
} else {
    raf = requestAnimationFrame(frame);
}
