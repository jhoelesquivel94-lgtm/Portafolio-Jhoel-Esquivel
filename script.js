// ============================================================
// JHOEL ESQUIVEL — PORTAFOLIO
// Contenido + interacción (el paisaje 3D vive en dunes.js)
// ============================================================

const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
const HOVER = matchMedia('(hover: hover)').matches;

// ============================================================
// DATOS
// ============================================================

const skills = [
    { name: 'MySQL', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'HTML5', level: 65 },
    { name: 'Linux', level: 60 },
    { name: 'Servidores Windows', level: 55 },
    { name: 'JavaScript', level: 50 },
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

// ============================================================
// RENDER
// ============================================================

function renderTimeline() {
    $('timeline').innerHTML = timeline.map(t => `
        <li class="tl">
            <div class="tl-when">${esc(t.when)}</div>
            <div class="tl-what">
                <h3>${esc(t.title)}</h3>
                <div class="tl-where">${esc(t.where)}</div>
                <p>${esc(t.text)}</p>
            </div>
        </li>`).join('');
}

function renderSkills() {
    $('skill-list').innerHTML = skills.map(s => `
        <li class="skill-row">
            <span class="skill-name">${esc(s.name)}</span>
            <span class="skill-pct" data-to="${s.level}">${REDUCED ? s.level : 0}%</span>
            <div class="skill-track" role="progressbar" aria-label="${esc(s.name)}" aria-valuenow="${s.level}" aria-valuemin="0" aria-valuemax="100">
                <div class="skill-fill" data-level="${s.level}"></div>
            </div>
        </li>`).join('');
    $('soft-list').innerHTML = softSkills.map(s => `<li>${esc(s)}</li>`).join('');

    // las barras se llenan una sola vez, al llegar a la sección
    const list = $('skill-list');
    new IntersectionObserver(([e], obs) => {
        if (!e.isIntersecting) return;
        list.querySelectorAll('.skill-fill').forEach(f => { f.style.width = f.dataset.level + '%'; });
        list.querySelectorAll('.skill-pct').forEach(p => countUp(p, +p.dataset.to));
        obs.disconnect();
    }, { threshold: 0.3 }).observe(list);
}

function countUp(el, to) {
    if (REDUCED) { el.textContent = to + '%'; return; }
    const t0 = performance.now();
    (function step(t) {
        const k = Math.min(1, (t - t0) / 1600);
        el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))) + '%';
        if (k < 1) requestAnimationFrame(step);
    })(t0);
}

const DL = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12M7 10l5 5 5-5M5 21h14"/></svg>';

function renderCerts() {
    $('cert-list').innerHTML = certifications.map(c => `
        <li class="cert">
            <h3>${esc(c.title)}</h3>
            <div class="cert-hours"><strong>${esc(c.hours)}</strong>${esc(c.date)}</div>
            ${c.pdf
                ? `<a class="cert-dl" href="${encodeURI(c.pdf)}" download>${DL} Descargar PDF</a>`
                : `<span class="cert-dl static">Documento físico</span>`}
            <p>${esc(c.description)}</p>
        </li>`).join('');
}

// ============================================================
// CARRUSEL 3D (coverflow)
// ============================================================

function renderStage() {
    const stage = $('stage');
    const track = $('stage-track');
    const dotsEl = $('stage-dots');
    const n = projects.length;
    let index = 0;

    track.innerHTML = projects.map((p, i) => {
        const domain = p.link.replace(/^https?:\/\//, '').replace(/\/$/, '');
        return `
        <article class="card" data-i="${i}" aria-label="${esc(p.title)}">
            <div class="card-shot">
                <div class="card-bar"><span class="tdot"></span><span class="tdot"></span><span class="tdot"></span><span class="card-url">${esc(domain)}</span></div>
                ${p.images.map((src, k) => `<img src="${src}" alt="${esc(p.title)}, vista ${k + 1}" loading="${i === 0 && k === 0 ? 'eager' : 'lazy'}" draggable="false" class="${k === 0 ? 'on' : ''}">`).join('')}
                <div class="shot-btns" role="group" aria-label="Vistas">
                    ${p.images.map((_, k) => `<button type="button" data-k="${k}" aria-pressed="${k === 0}" aria-label="Vista ${k + 1}">${k + 1}</button>`).join('')}
                </div>
            </div>
            <div class="card-body">
                <div>
                    <h3 class="card-title">${esc(p.title)}${p.isNew ? '<span class="card-new">Nuevo</span>' : ''}</h3>
                    <div class="card-type">${esc(p.type)}</div>
                </div>
                <a class="btn btn-sand" href="${p.link}" target="_blank" rel="noopener">Abrir sitio</a>
                <p class="card-desc">${esc(p.description)}</p>
                <div class="card-tags">${p.tech.map(t => `<span>${esc(t)}</span>`).join('')}</div>
            </div>
        </article>`;
    }).join('');

    dotsEl.innerHTML = projects.map((p, i) => `<button role="tab" aria-label="${esc(p.title)}" data-i="${i}"></button>`).join('');

    const cards = [...track.children];
    const dots = [...dotsEl.children];

    // vistas dentro de cada tarjeta
    cards.forEach(card => {
        const imgs = card.querySelectorAll('.card-shot img');
        const btns = card.querySelectorAll('.shot-btns button');
        btns.forEach(b => b.addEventListener('click', (e) => {
            e.stopPropagation();
            const k = +b.dataset.k;
            imgs.forEach((im, j) => im.classList.toggle('on', j === k));
            btns.forEach((x, j) => x.setAttribute('aria-pressed', j === k));
        }));
    });

    function layout(drag = 0) {
        const w = stage.clientWidth;
        const narrow = w < 700;
        cards.forEach((card, i) => {
            let d = i - index;
            if (d > n / 2) d -= n;
            if (d < -n / 2) d += n;
            const o = d + drag;          // posición continua (permite arrastrar)
            const a = Math.abs(o);
            const x = o * (narrow ? 88 : 58);         // % del ancho de la tarjeta
            const z = -a * (narrow ? 260 : 340);
            const ry = -Math.max(-1, Math.min(1, o)) * (narrow ? 30 : 42);
            card.style.transform = `translateX(${x}%) translateZ(${z}px) rotateY(${ry}deg)`;
            card.style.opacity = a > 1.6 ? 0 : 1 - a * 0.15;
            card.style.zIndex = String(100 - Math.round(a * 10));
            card.classList.toggle('is-active', Math.round(a) === 0);
            card.classList.toggle('is-side', Math.round(a) === 1);
            card.classList.toggle('is-hidden', a > 1.6);
            card.setAttribute('aria-hidden', Math.round(a) !== 0);
            card.querySelectorAll('a, button').forEach(el => el.tabIndex = Math.round(a) === 0 ? 0 : -1);
        });
        dots.forEach((d, i) => d.setAttribute('aria-selected', i === index));
    }

    function go(i) { index = (i + n) % n; layout(); }

    $('prev').addEventListener('click', () => go(index - 1));
    $('next').addEventListener('click', () => go(index + 1));
    dots.forEach(d => d.addEventListener('click', () => go(+d.dataset.i)));
    cards.forEach((c, i) => c.addEventListener('click', () => { if (c.classList.contains('is-side') && !moved) go(i); }));
    stage.addEventListener('keydown', e => {
        if (e.key === 'ArrowRight') { e.preventDefault(); go(index + 1); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); go(index - 1); }
    });

    // arrastrar con mouse o dedo: las tarjetas giran siguiendo el gesto
    let startX = null, moved = false;
    stage.addEventListener('pointerdown', e => {
        if (e.target.closest('a, button')) return;
        startX = e.clientX; moved = false;
        stage.classList.add('dragging');
        cards.forEach(c => c.style.transition = 'none');
    });
    addEventListener('pointermove', e => {
        if (startX === null) return;
        const dx = e.clientX - startX;
        if (Math.abs(dx) > 6) moved = true;
        layout(dx / (stage.clientWidth * 0.6));
    });
    addEventListener('pointerup', e => {
        if (startX === null) return;
        const dx = e.clientX - startX;
        startX = null;
        stage.classList.remove('dragging');
        cards.forEach(c => c.style.transition = '');
        if (Math.abs(dx) > 60) go(index + (dx < 0 ? 1 : -1)); else layout();
        setTimeout(() => { moved = false; }, 0);
    });

    // altura del escenario = altura de la tarjeta activa
    function fit() {
        const h = Math.max(...cards.map(c => c.offsetHeight));
        stage.style.height = h + 40 + 'px';
        layout();
    }
    addEventListener('resize', fit);
    window.addEventListener('load', fit);
    fit();
}

// ============================================================
// TERMINAL
// ============================================================

function terminal() {
    const body = $('terminal-body');
    const P = '<span class="t-p">❯</span> ';
    const steps = [
        { cmd: 'whoami' },
        { out: '<span class="t-k">jhoel_esquivel</span> <span class="t-m"># estudiante de ingeniería en informática</span>' },
        { cmd: 'cat perfil.json' },
        { out:
`{
  <span class="t-k">"ciudad"</span>: <span class="t-s">"Iquique, Chile"</span>,
  <span class="t-k">"estudio"</span>: <span class="t-s">"Ing. en Informática · INACAP"</span>,
  <span class="t-k">"stack"</span>: [<span class="t-s">"MySQL"</span>, <span class="t-s">"Python"</span>, <span class="t-s">"JavaScript"</span>, <span class="t-s">"Linux"</span>],
  <span class="t-k">"busco"</span>: <span class="t-s">"proyectos y práctica"</span>
}` },
        { cmd: 'ls proyectos/' },
        { out: '<span class="t-ok">javiera-meneses/</span>   <span class="t-ok">delicias-renata/</span>   <span class="t-ok">sindicato-siemens/</span>' },
    ];

    if (REDUCED) {
        body.innerHTML = steps.map(s => s.cmd ? P + `<span class="t-c">${s.cmd}</span>` : s.out).join('\n') + '\n' + P + '<span class="cursor"></span>';
        return;
    }

    let html = '', i = 0, started = false;
    function next() {
        if (i >= steps.length) { body.innerHTML = html + P + '<span class="cursor"></span>'; return; }
        const s = steps[i++];
        if (s.cmd) {
            let k = 0;
            const before = html + P;
            (function type() {
                body.innerHTML = before + `<span class="t-c">${s.cmd.slice(0, k)}</span><span class="cursor"></span>`;
                if (k++ < s.cmd.length) setTimeout(type, 55 + Math.random() * 60);
                else { html = before + `<span class="t-c">${s.cmd}</span>\n`; setTimeout(next, 380); }
            })();
        } else {
            html += s.out + '\n\n';
            body.innerHTML = html;
            setTimeout(next, 650);
        }
    }
    body.innerHTML = P + '<span class="cursor"></span>';
    // empieza a escribir cuando la terminal entra en pantalla
    new IntersectionObserver(([e], obs) => {
        if (e.isIntersecting && !started) { started = true; obs.disconnect(); setTimeout(next, 300); }
    }, { threshold: 0.4 }).observe(body);
}

// Inclinación 3D de la terminal siguiendo el cursor
function tilt() {
    if (REDUCED || !HOVER) return;
    document.querySelectorAll('.tilt').forEach(el => {
        el.addEventListener('pointermove', e => {
            const r = el.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width - 0.5;
            const y = (e.clientY - r.top) / r.height - 0.5;
            el.style.transform = `rotateY(${x * 12}deg) rotateX(${-y * 10}deg) translateZ(20px)`;
        });
        el.addEventListener('pointerleave', () => { el.style.transform = ''; });
    });
}

// ============================================================
// NAVEGACIÓN Y UTILIDADES
// ============================================================

function nav() {
    const navEl = $('nav');
    const links = [...document.querySelectorAll('.nav-links a[href^="#"]')];
    const sections = links.map(a => document.querySelector(a.getAttribute('href')));
    const onScroll = () => {
        navEl.classList.toggle('scrolled', scrollY > 30);
        let current = '';
        sections.forEach(s => { if (s && s.getBoundingClientRect().top < innerHeight * 0.4) current = s.id; });
        links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
    };
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const toggle = $('nav-toggle');
    const menu = $('nav-links');
    const setOpen = (open) => {
        menu.classList.toggle('open', open);
        toggle.setAttribute('aria-expanded', open);
        toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
        document.body.style.overflow = open ? 'hidden' : '';
    };
    toggle.addEventListener('click', () => setOpen(!menu.classList.contains('open')));
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setOpen(false)));
}

function copyEmail() {
    const btn = $('copy-email');
    const toast = $('toast');
    btn.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(btn.dataset.email);
            toast.textContent = 'Correo copiado';
        } catch {
            toast.textContent = btn.dataset.email;
        }
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2200);
    });
}

// ============================================================
// INICIO
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    $('year').textContent = new Date().getFullYear();
    renderTimeline();
    renderSkills();
    renderCerts();
    renderStage();
    terminal();
    tilt();
    nav();
    copyEmail();
    requestAnimationFrame(() => document.body.classList.add('ready'));
});
