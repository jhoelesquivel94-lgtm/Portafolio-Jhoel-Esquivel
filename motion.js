// ============================================================
// JHOEL ESQUIVEL — PORTAFOLIO (versión motion)
// Lenis (scroll suave) + GSAP ScrollTrigger. El paisaje 3D vive en dunes.js
// ============================================================

const skills = [
    { name: 'MySQL', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'HTML5', level: 65 },
    { name: 'Tailwind CSS', level: 60 },
    { name: 'React', level: 55 },
];

const softSkills = ['Trabajo en equipo', 'Comunicación', 'Flexibilidad', 'Resolución de problemas'];

const projects = [
    {
        title: 'Javiera Meneses',
        type: 'Web app de reservas para nutricionista',
        isNew: true,
        description: 'Reserva de consultas en línea sin crear cuenta, pago con Mercado Pago o en efectivo, recordatorios por correo y notificaciones push, y un portal para pacientes.',
        tech: ['Next.js', 'Supabase', 'Mercado Pago', 'PWA', 'Vercel'],
        link: 'https://javiera-meneses-nutricionista.vercel.app/',
        images: ['img/jm1.webp', 'img/jm2.webp', 'img/jm3.webp', 'img/jm4.webp'],
    },
    {
        title: 'Delicias Renata',
        type: 'Catálogo y pedidos para pastelería',
        description: 'Plataforma de pastelería artesanal con catálogo de tortas, postres y sistema de pedidos. Diseño cálido y elegante pensado para destacar productos caseros.',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'Catálogo'],
        link: 'https://deliciasrenata.site.je',
        images: ['img/renata1.png', 'img/renata2.png', 'img/renata3.png'],
    },
    {
        title: 'Sindicato Siemens',
        type: 'Portal informativo para sindicato',
        description: 'Portal con noticias, beneficios, encuestas, calendario de reuniones y acceso al convenio colectivo.',
        tech: ['Noticias', 'Beneficios', 'Calendario', 'Dashboard'],
        link: 'https://sindicatosiemens.66ghz.com',
        images: ['img/sin1.png', 'img/sin2.png', 'img/sin3.png'],
    }
];

const timeline = [
    { when: '2016 – 2020', title: 'Técnico en Telecomunicaciones', where: 'Liceo Luis Cruz Martínez',
      text: 'Egresado de la especialidad de Técnico en Telecomunicaciones, con conocimientos en redes, sistemas y comunicaciones.' },
    { when: '2020', title: 'Monitor de Seguridad Minera', where: 'Sernageomin',
      text: 'Curso de Monitor/a de Seguridad Minera para Escolares: capacitación en prevención de riesgos y seguridad en el ámbito minero.' },
    { when: '2022 – 2024', title: 'Analista Programador', where: 'INACAP Iquique',
      text: 'Egresado de la carrera de Analista Programador, con conocimientos en programación, bases de datos y desarrollo de software.' },
    { when: '2022 – hoy', title: 'Ingeniería en Informática', where: 'INACAP Iquique',
      text: 'Profundizando en desarrollo de software, gestión de proyectos y arquitectura de sistemas.' },
];

const certifications = [
    { title: 'Arquitectura Cloud', hours: '198 horas', date: 'Marzo 2026',
      description: 'Redes de Datos (54h), Tecnología Cloud (72h) y Seguridad de la Información (72h).',
      pdf: 'certificados/ARQUITECTURA CLOUD.pdf' },
    { title: 'Desarrollador Full Stack', hours: '162 horas', date: 'Marzo 2026',
      description: 'Tecnologías de frontend, backend y bases de datos para construir aplicaciones web completas.',
      pdf: 'certificados/DESARROLLADOR FULL STACK.pdf' },
    { title: 'Desarrollo de Aplicaciones Básicas', hours: '162 horas', date: 'Marzo 2026',
      description: 'Introducción a la Programación (90h) y Programación Orientada a Objetos (72h).',
      pdf: 'certificados/DESARROLLO DE APLICACIONES BASICAS.pdf' },
    { title: 'Diseño Ágil de Sistemas', hours: '126 horas', date: 'Marzo 2026',
      description: 'Metodologías ágiles aplicadas al desarrollo y diseño de sistemas de software.',
      pdf: 'certificados/DISEÑO ÁGIL DE SISTEMAS.pdf' },
    { title: 'Diseño y Gestión de Base de Datos', hours: '126 horas', date: 'Marzo 2026',
      description: 'Fundamentos de Base de Datos (54h) y Bases de Datos No Estructuradas (72h).',
      pdf: 'certificados/DISEÑO Y GESTIÓN DE BASE DE DATOS.pdf' },
    { title: 'Soporte Computacional', hours: '126 horas', date: 'Marzo 2026',
      description: 'Administración y mantenimiento de sistemas informáticos y resolución de incidencias técnicas.',
      pdf: 'certificados/SOPORTE COMPUTACIONAL.pdf' },
    { title: 'Licencia Clase B', hours: 'No profesional', date: 'Vigente, 6 años',
      description: 'Automóviles, camionetas y vehículos de carga liviana de hasta 3.500 kg y hasta 9 asientos.',
      pdf: null },
];


const esc = (s) => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const $ = (id) => document.getElementById(id);
const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
const FINE = matchMedia('(hover: hover) and (pointer: fine)').matches;

// ============================================================
// RENDER
// ============================================================

function render() {
    $('year').textContent = new Date().getFullYear();

    $('m-hscroll').innerHTML = projects.map((p, i) => `
        <article class="m-panel">
            <div class="m-shot">
                <img src="${p.images[0]}" alt="${esc(p.title)}" loading="${i === 0 ? 'eager' : 'lazy'}">
                <a href="${p.link}" target="_blank" rel="noopener" data-cursor="Abrir" aria-label="Abrir ${esc(p.title)}"></a>
            </div>
            <div class="m-info">
                <div class="m-index">${String(i + 1).padStart(2, '0')}${p.isNew ? ' — <span style="color:var(--sand)">Nuevo</span>' : ''}</div>
                <h3 class="m-ptitle">${esc(p.title)}</h3>
                <div class="m-ptype">${esc(p.type)}</div>
                <p class="m-pdesc">${esc(p.description)}</p>
                <div class="card-tags">${p.tech.map(t => `<span>${esc(t)}</span>`).join('')}</div>
                <a class="btn btn-sand" href="${p.link}" target="_blank" rel="noopener">Abrir sitio</a>
            </div>
        </article>`).join('');
    $('m-total').textContent = projects.length;

    $('m-skills').innerHTML = skills.map(s => `
        <li class="m-skill" data-level="${s.level}">
            <span class="m-skill-bar" style="--w:${s.level / 100}"></span>
            <span class="m-skill-name">${esc(s.name)}</span>
            <span class="m-skill-pct">${s.level}%</span>
        </li>`).join('');
    $('soft-list').innerHTML = softSkills.map(s => `<li>${esc(s)}</li>`).join('');

    $('timeline').innerHTML = timeline.map(t => `
        <li class="tl">
            <div class="tl-when">${esc(t.when)}</div>
            <div class="tl-what"><h3>${esc(t.title)}</h3><div class="tl-where">${esc(t.where)}</div><p>${esc(t.text)}</p></div>
        </li>`).join('');

    const DL = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12M7 10l5 5 5-5M5 21h14"/></svg>';
    $('cert-list').innerHTML = certifications.map(c => `
        <li class="cert">
            <h3>${esc(c.title)}</h3>
            <div class="cert-hours"><strong>${esc(c.hours)}</strong>${esc(c.date)}</div>
            ${c.pdf ? `<a class="cert-dl" href="${encodeURI(c.pdf)}" download data-cursor="PDF">${DL} Descargar PDF</a>` : `<span class="cert-dl static">Documento físico</span>`}
            <p>${esc(c.description)}</p>
        </li>`).join('');

    // dividir textos en letras / palabras
    document.querySelectorAll('[data-split]').forEach(el => {
        const text = el.textContent;
        el.setAttribute('aria-label', text);
        el.innerHTML = `<span class="word-wrap" aria-hidden="true">${[...text].map(ch => ch === ' ' ? ' ' : `<span class="char">${esc(ch)}</span>`).join('')}</span>`;
    });
    // palabras del manifiesto; las clave se encienden en arena
    const HL = new Set(['impactan', 'vida', 'personas.', 'proyectos', 'reales.']);
    const m = $('manifesto');
    m.innerHTML = m.textContent.trim().split(/\s+/).map(w => `<span class="w${HL.has(w) ? ' hl' : ''}">${esc(w)}</span>`).join(' ');
}

// ============================================================
// MOTION
// ============================================================

function motion() {
    gsap.registerPlugin(ScrollTrigger);

    // Scroll suave
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    lenis.stop();

    document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        lenis.scrollTo(target, { offset: a.getAttribute('href') === '#inicio' ? 0 : -72, duration: 1.4 });
    }));

    // Barra de progreso
    gsap.to('#m-progress', { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: true } });

    // ---------- Precarga: contador + cortina ----------
    const num = $('pre-num');
    const counter = { v: 0 };
    const intro = gsap.timeline({ onComplete: () => { document.body.classList.remove('is-loading'); lenis.start(); } });
    intro
        .to(counter, { v: 100, duration: 1.6, ease: 'power2.inOut', onUpdate: () => { num.textContent = Math.round(counter.v); } })
        .to('#preloader', { clipPath: 'inset(0 0 100% 0)', duration: 1, ease: 'expo.inOut' }, '+=0.15')
        .from('.m-name .char', { yPercent: 120, rotateX: -80, opacity: 0, duration: 1.3, ease: 'expo.out', stagger: 0.045 }, '-=0.45')
        .from(['.m-hero-top', '.m-hero-bottom'], { y: 24, opacity: 0, duration: 1, ease: 'power3.out', stagger: 0.1 }, '-=0.9');

    // ---------- Hero: el nombre se abre al bajar ----------
    gsap.to('.m-name-row:first-child', { xPercent: -14, ease: 'none', scrollTrigger: { trigger: '.m-hero', start: 'top top', end: 'bottom top', scrub: true } });
    gsap.to('.m-name-row--2', { xPercent: 10, ease: 'none', scrollTrigger: { trigger: '.m-hero', start: 'top top', end: 'bottom top', scrub: true } });
    gsap.to('.m-hero-inner', { opacity: 0.15, y: -60, ease: 'none', scrollTrigger: { trigger: '.m-hero', start: '30% top', end: 'bottom top', scrub: true } });

    aboutScene();

    // ---------- Proyectos: scroll horizontal fijado ----------
    const track = $('m-hscroll');
    const panels = gsap.utils.toArray('.m-panel');
    const dist = () => track.scrollWidth - innerWidth;
    const hTween = gsap.to(track, {
        x: () => -dist(), ease: 'none',
        scrollTrigger: {
            trigger: '#proyectos', pin: '#m-projects-pin', start: 'top top',
            end: () => '+=' + dist(), scrub: 0.8, invalidateOnRefresh: true, anticipatePin: 1,
            onUpdate: (st) => { $('m-cur').textContent = Math.min(panels.length, Math.floor(st.progress * panels.length) + 1); }
        }
    });
    panels.forEach(panel => {
        const shot = panel.querySelector('.m-shot');
        const img = panel.querySelector('.m-shot img');
        // la captura se "abre" al entrar
        gsap.to(shot, { clipPath: 'inset(0% 0% 0% 0% round 16px)', ease: 'none',
            scrollTrigger: { trigger: panel, containerAnimation: hTween, start: 'left 95%', end: 'left 40%', scrub: true } });
        // paralaje de la imagen dentro del marco
        gsap.fromTo(img, { xPercent: 6 }, { xPercent: -6, ease: 'none',
            scrollTrigger: { trigger: panel, containerAnimation: hTween, start: 'left right', end: 'right left', scrub: true } });
        gsap.from(panel.querySelectorAll('.m-info > *'), { y: 40, opacity: 0, stagger: 0.06, ease: 'power3.out', duration: 0.8,
            scrollTrigger: { trigger: panel, containerAnimation: hTween, start: 'left 70%', toggleActions: 'play none none reverse' } });
    });

    // ---------- Títulos: letras que suben ----------
    gsap.utils.toArray('.m-title').forEach(t => {
        gsap.from(t.querySelectorAll('.char'), { yPercent: 110, stagger: 0.03, duration: 1, ease: 'expo.out',
            scrollTrigger: { trigger: t, start: 'top 85%' } });
    });

    // ---------- Habilidades: barras ligadas al scroll ----------
    gsap.utils.toArray('.m-skill').forEach(row => {
        const lvl = +row.dataset.level / 100;
        gsap.to(row.querySelector('.m-skill-bar'), { scaleX: lvl, ease: 'none',
            scrollTrigger: { trigger: row, start: 'top 90%', end: 'top 55%', scrub: true } });
        gsap.from(row.querySelector('.m-skill-name'), { x: -40, opacity: 0, ease: 'power3.out', duration: 0.9,
            scrollTrigger: { trigger: row, start: 'top 90%' } });
    });

    // ---------- Trayectoria: la línea se dibuja ----------
    gsap.to('#m-tl-fill', { scaleY: 1, ease: 'none', scrollTrigger: { trigger: '.m-tl', start: 'top 70%', end: 'bottom 60%', scrub: true } });
    gsap.utils.toArray('.m-tl-list .tl').forEach(item => {
        gsap.from(item, { x: 60, opacity: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: item, start: 'top 82%' } });
    });

    // ---------- Certificados ----------
    gsap.from('.cert', { y: 40, opacity: 0, stagger: 0.07, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: '#cert-list', start: 'top 80%' } });

    // ---------- Marquesina que responde a la velocidad del scroll ----------
    const marquee = $('marquee');
    let mx = 0, dir = -1;
    gsap.ticker.add(() => {
        const v = lenis.velocity || 0;
        if (v !== 0) dir = v > 0 ? -1 : 1;
        mx += dir * (0.6 + Math.min(Math.abs(v) * 0.4, 12));
        const half = marquee.scrollWidth / 2;
        if (mx <= -half) mx += half;
        if (mx > 0) mx -= half;
        marquee.style.transform = `translate3d(${mx}px,0,0)`;
    });
    gsap.from('.m-contact-title', { y: 60, opacity: 0, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: '.m-contact-inner', start: 'top 80%' } });

    addEventListener('load', () => ScrollTrigger.refresh());
}


// ============================================================
// SOBRE MÍ — escena fijada
// ============================================================

const TERM = [
    ['p', '❯ '], ['c', 'cat sobre-mi.json\n'],
    ['', '{\n'],
    ['', '  '], ['k', '"nombre"'], ['', ': '], ['s', '"Jhoel Esquivel"'], ['', ',\n'],
    ['', '  '], ['k', '"ciudad"'], ['', ': '], ['s', '"Iquique, Chile"'], ['', ',\n'],
    ['', '  '], ['k', '"estudia"'], ['', ': '], ['s', '"Ingeniería en Informática, INACAP"'], ['', ',\n'],
    ['', '  '], ['k', '"egresado"'], ['', ': '], ['s', '"Analista Programador (2024)"'], ['', ',\n'],
    ['', '  '], ['k', '"stack"'], ['', ': ['], ['s', '"React"'], ['', ', '], ['s', '"Tailwind"'], ['', ', '], ['s', '"MySQL"'], ['', ', '], ['s', '"Python"'], ['', '],\n'],
    ['', '  '], ['k', '"fortalezas"'], ['', ': ['], ['s', '"equipo"'], ['', ', '], ['s', '"comunicación"'], ['', ', '], ['s', '"resolver problemas"'], ['', '],\n'],
    ['', '  '], ['k', '"disponible"'], ['', ': '], ['ok', 'true'], ['', '\n'],
    ['', '}\n'],
    ['p', '❯ '],
];
const TERM_LEN = TERM.reduce((n, [, t]) => n + t.length, 0);
const TCLASS = { p: 't-p', c: 't-c', k: 't-k', s: 't-s', ok: 't-ok' };

function drawTerm(progress) {
    let left = Math.round(TERM_LEN * Math.min(1, Math.max(0, progress)));
    let html = '';
    for (const [cls, text] of TERM) {
        if (left <= 0) break;
        const part = esc(text.slice(0, left));
        left -= text.length;
        html += cls ? `<span class="${TCLASS[cls]}">${part}</span>` : part;
    }
    $('m-term-body').innerHTML = html + '<span class="cursor"></span>';
}

// curvas de nivel tipo mapa topográfico de una duna
function buildTopo() {
    const svg = $('m-topo');
    const rings = 9;
    let out = '';
    for (let r = 0; r < rings; r++) {
        const base = 60 + r * 38;
        const pts = [];
        for (let a = 0; a <= 64; a++) {
            const t = (a / 64) * Math.PI * 2;
            const wob = Math.sin(t * 3 + r * 0.7) * (8 + r * 2.2) + Math.sin(t * 5 - r) * (4 + r) + Math.cos(t * 2 + r * 0.3) * 10;
            const rr = base + wob;
            pts.push([400 + Math.cos(t) * rr * 1.15, 400 + Math.sin(t) * rr * 0.85]);
        }
        const d = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ') + 'Z';
        const col = r % 3 === 0 ? 'rgba(240,181,110,.35)' : 'rgba(143,176,255,.16)';
        out += `<path d="${d}" stroke="${col}"/>`;
    }
    svg.innerHTML = out;
    return [...svg.querySelectorAll('path')];
}

// las palabras clave terminan en arena; el resto en blanco niebla
const wordColor = (i, el) => el.classList.contains('hl') ? '#f0b56e' : '#dde3ef';

function aboutScene() {
    const paths = buildTopo();
    paths.forEach(p => { const L = p.getTotalLength(); p.style.strokeDasharray = L; p.style.strokeDashoffset = L; });
    drawTerm(0);
    gsap.set('.m-chip', { z: 90 }); // por delante de la terminal en 3D

    const mm = gsap.matchMedia();

    // Escritorio: la escena queda fija mientras todo ocurre
    mm.add('(min-width: 901px)', () => {
        const term = { p: 0 };
        const tl = gsap.timeline({
            defaults: { ease: 'none' },
            scrollTrigger: { trigger: '#sobre-mi', pin: '#m-about-pin', start: 'top top', end: '+=140%', scrub: 0.6, anticipatePin: 1 }
        });
        tl.from('.m-about-title .char', { yPercent: 120, opacity: 0, stagger: 0.02, duration: 0.15, ease: 'power3.out' }, 0)
          .to(paths, { strokeDashoffset: 0, stagger: 0.03, duration: 0.6 }, 0)
          .fromTo('#m-topo', { rotate: -12, scale: .9 }, { rotate: 8, scale: 1.05, duration: 1 }, 0)
          .to('#manifesto .w', { color: wordColor, stagger: 0.012, duration: 0.05 }, 0.05)
          .fromTo('#m-term', { rotateY: -32, rotateX: 16, z: -160, y: 60, opacity: 0.25 },
                             { rotateY: -9, rotateX: 5, z: 0, y: 0, opacity: 1, duration: 0.55, ease: 'power2.out' }, 0)
          .to(term, { p: 1, duration: 0.7, onUpdate: () => drawTerm(term.p) }, 0.15)
          .from('.m-chip', { scale: 0, opacity: 0, stagger: 0.08, duration: 0.15, ease: 'back.out(2)' }, 0.45)
          .from('#m-facts li', { x: -50, opacity: 0, stagger: 0.07, duration: 0.15, ease: 'power3.out' }, 0.62)
          .to('.m-chip--a', { y: -30, duration: 0.4 }, 0.6)
          .to('.m-chip--b', { y: 24, duration: 0.4 }, 0.6)
          .to('.m-chip--c', { y: -18, duration: 0.4 }, 0.6);

        // inclinación extra con el mouse
        const stage = document.querySelector('.m-term-stage');
        const rx = gsap.quickTo(stage, 'rotateX', { duration: 0.8, ease: 'power3' });
        const ry = gsap.quickTo(stage, 'rotateY', { duration: 0.8, ease: 'power3' });
        const move = (e) => {
            const r = stage.getBoundingClientRect();
            ry(((e.clientX - r.left) / r.width - 0.5) * 10);
            rx(-((e.clientY - r.top) / r.height - 0.5) * 8);
        };
        const pin = $('m-about-pin');
        pin.addEventListener('pointermove', move);
        pin.addEventListener('pointerleave', () => { rx(0); ry(0); });
        return () => { pin.removeEventListener('pointermove', move); };
    });

    // Celular: sin fijar, cada parte se anima al pasar
    mm.add('(max-width: 900px)', () => {
        const term = { p: 0 };
        gsap.from('.m-about-title .char', { yPercent: 120, opacity: 0, stagger: 0.03, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: '.m-about-title', start: 'top 85%' } });
        gsap.to('#manifesto .w', { color: wordColor, stagger: 0.1, ease: 'none', scrollTrigger: { trigger: '#manifesto', start: 'top 80%', end: 'bottom 50%', scrub: true } });
        gsap.to(paths, { strokeDashoffset: 0, stagger: 0.05, ease: 'none', scrollTrigger: { trigger: '#sobre-mi', start: 'top 70%', end: 'bottom 30%', scrub: true } });
        gsap.from('#m-facts li', { x: -40, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: '#m-facts', start: 'top 85%' } });
        gsap.fromTo('#m-term', { rotateY: -18, rotateX: 12, y: 40 }, { rotateY: -4, rotateX: 3, y: 0, ease: 'none', scrollTrigger: { trigger: '.m-about-visual', start: 'top 90%', end: 'center 50%', scrub: true } });
        gsap.to(term, { p: 1, ease: 'none', onUpdate: () => drawTerm(term.p), scrollTrigger: { trigger: '.m-about-visual', start: 'top 80%', end: 'bottom 55%', scrub: true } });
        gsap.from('.m-chip', { scale: 0, opacity: 0, stagger: 0.1, duration: 0.6, ease: 'back.out(2)', scrollTrigger: { trigger: '.m-about-visual', start: 'top 70%' } });
    });
}

// ============================================================
// CURSOR Y BOTÓN MAGNÉTICO
// ============================================================

function cursor() {
    if (!FINE || REDUCED) return;
    const dot = $('cursor-dot'), ring = $('cursor-ring'), label = $('cursor-label');
    const xDot = gsap.quickTo(dot, 'x', { duration: 0.1 }), yDot = gsap.quickTo(dot, 'y', { duration: 0.1 });
    const xRing = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3' }), yRing = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3' });
    addEventListener('pointermove', e => { xDot(e.clientX); yDot(e.clientY); xRing(e.clientX); yRing(e.clientY); });

    document.addEventListener('pointerover', e => {
        const withLabel = e.target.closest('[data-cursor]');
        const link = e.target.closest('a, button');
        if (withLabel) { label.textContent = withLabel.dataset.cursor; ring.classList.add('is-label'); ring.classList.remove('is-hover'); }
        else if (link) { ring.classList.add('is-hover'); ring.classList.remove('is-label'); }
        else { ring.classList.remove('is-hover', 'is-label'); }
    });

    document.querySelectorAll('.magnetic').forEach(el => {
        const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'elastic.out(1, 0.4)' });
        const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'elastic.out(1, 0.4)' });
        el.addEventListener('pointermove', e => {
            const r = el.getBoundingClientRect();
            xTo((e.clientX - r.left - r.width / 2) * 0.35);
            yTo((e.clientY - r.top - r.height / 2) * 0.35);
        });
        el.addEventListener('pointerleave', () => { xTo(0); yTo(0); });
    });
}

// ============================================================
// NAV Y UTILIDADES
// ============================================================

function ui() {
    const navEl = $('nav');
    addEventListener('scroll', () => navEl.classList.toggle('scrolled', scrollY > 30), { passive: true });
    const toggle = $('nav-toggle'), menu = $('nav-links');
    const setOpen = (open) => { menu.classList.toggle('open', open); toggle.setAttribute('aria-expanded', open); };
    toggle.addEventListener('click', () => setOpen(!menu.classList.contains('open')));
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setOpen(false)));

    const btn = $('copy-email'), toast = $('toast');
    btn.addEventListener('click', async () => {
        try { await navigator.clipboard.writeText(btn.dataset.email); toast.textContent = 'Correo copiado'; }
        catch { toast.textContent = btn.dataset.email; }
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2200);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    render();
    ui();
    if (REDUCED || typeof gsap === 'undefined') {
        document.body.classList.remove('is-loading');
        $('preloader').style.display = 'none';
        buildTopo();
        drawTerm(1);
        return;
    }
    motion();
    cursor();
});
