// ============================================================
// JHOEL ESQUIVEL — PORTAFOLIO
// Datos + animaciones (sin dependencias)
// ============================================================

const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ============================================================
// DATOS
// ============================================================

const skills = [
    { name: 'MySQL', icon: 'database', level: 75 },
    { name: 'Python', icon: 'code', level: 70 },
    { name: 'HTML5', icon: 'html', level: 65 },
    { name: 'Linux', icon: 'terminal', level: 60 },
    { name: 'Servidores Windows', icon: 'server', level: 55 },
    { name: 'JavaScript', icon: 'js', level: 50 },
];

const softSkills = [
    { name: 'Trabajo en Equipo', icon: 'team' },
    { name: 'Comunicación', icon: 'chat' },
    { name: 'Flexibilidad', icon: 'flex' },
    { name: 'Resolución de problemas', icon: 'brain' },
];

const projects = [
    {
        title: 'Delicias Renata',
        kicker: 'E-COMMERCE · PASTELERÍA',
        description: 'Plataforma de pastelería artesanal con catálogo de tortas, postres y sistema de pedidos. Diseño cálido y elegante pensado para destacar productos caseros.',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'Catálogo'],
        link: 'https://deliciasrenata.site.je',
        images: ['img/renata1.png', 'img/renata2.png', 'img/renata3.png'],
        accent: ['#f472b6', '#fbbf77'],
        glow: 'rgba(244,114,182,.16)'
    },
    {
        title: 'Javiera Meneses · Nutricionista',
        kicker: 'WEB APP · SALUD',
        isNew: true,
        description: 'Plataforma completa para una nutricionista: reserva de consultas en línea sin crear cuenta, pagos integrados y portal para pacientes.',
        features: [
            'Agenda en línea con servicios y horarios dinámicos',
            'Pago con Mercado Pago o en efectivo (hora retenida 15 min)',
            'Recordatorios por correo y notificaciones push',
            'Portal del paciente y app instalable'
        ],
        tech: ['Next.js', 'Supabase', 'Mercado Pago', 'PWA', 'Vercel'],
        link: 'https://javiera-meneses-nutricionista.vercel.app/',
        images: ['img/jm1.webp', 'img/jm2.webp', 'img/jm3.webp', 'img/jm4.webp'],
        accent: ['#c5d86d', '#22e5ff'],
        glow: 'rgba(197,216,109,.16)'
    },
    {
        title: 'Sindicato Siemens',
        kicker: 'PORTAL · ORGANIZACIÓN',
        description: 'Portal informativo para el sindicato con noticias, beneficios, encuestas, calendario de reuniones y acceso a convenio colectivo.',
        tech: ['Noticias', 'Beneficios', 'Calendario', 'Dashboard'],
        link: 'https://sindicatosiemens.66ghz.com',
        images: ['img/sin1.png', 'img/sin2.png', 'img/sin3.png'],
        accent: ['#22e5ff', '#8b5cf6'],
        glow: 'rgba(34,229,255,.14)'
    }
];

const timeline = [
    {
        type: 'educación',
        title: 'Enseñanza Media - Técnico en Telecomunicaciones',
        company: 'Liceo Luis Cruz Martínez',
        period: '2016 - 2020',
        description: 'Egresado de la especialidad de Técnico en Telecomunicaciones, con conocimientos en redes, sistemas y comunicaciones.'
    },
    {
        type: 'experiencia',
        title: 'Monitor de Seguridad Minera',
        company: 'Sernageomin',
        period: '2020',
        description: 'Curso de Monitor/a de Seguridad Minera Para Escolares, capacitación en prevención de riesgos y seguridad en el ámbito minero.'
    },
    {
        type: 'educación',
        title: 'Analista Programador',
        company: 'INACAP Iquique',
        period: '2022 - 2024',
        description: 'Egresado de la carrera de Analista Programador, con conocimientos en programación, bases de datos y desarrollo de software.'
    },
    {
        type: 'educación',
        title: 'Ingeniería en Informática',
        company: 'INACAP Iquique',
        period: '2022 - Actualmente cursando',
        description: 'Estudiante de Ingeniería en Informática, profundizando en desarrollo de software, gestión de proyectos y arquitectura de sistemas.'
    }
];

const certifications = [
    { title: 'Arquitectura Cloud', icon: 'cloud', hours: '198 horas', date: '13 de marzo de 2026',
      description: 'Certificación en Arquitectura Cloud con enfoque en Redes de Datos (54h), Tecnología Cloud (72h) y Seguridad de la Información (72h).',
      pdf: 'certificados/ARQUITECTURA CLOUD.pdf' },
    { title: 'Desarrollador Full Stack', icon: 'layers', hours: '162 horas', date: '13 de marzo de 2026',
      description: 'Certificación en Desarrollo Full Stack que abarca tecnologías de frontend, backend y bases de datos para el desarrollo de aplicaciones web completas.',
      pdf: 'certificados/DESARROLLADOR FULL STACK.pdf' },
    { title: 'Desarrollo de Aplicaciones Básicas', icon: 'code', hours: '162 horas', date: '13 de marzo de 2026',
      description: 'Certificación en Desarrollo de Aplicaciones Básicas con Introducción a la Programación (90h) y Programación Orientada a Objeto (72h).',
      pdf: 'certificados/DESARROLLO DE APLICACIONES BASICAS.pdf' },
    { title: 'Diseño Ágil de Sistemas', icon: 'agile', hours: '126 horas', date: '13 de marzo de 2026',
      description: 'Certificación en Diseño Ágil de Sistemas, aplicando metodologías ágiles para el desarrollo y diseño de sistemas de software.',
      pdf: 'certificados/DISEÑO ÁGIL DE SISTEMAS.pdf' },
    { title: 'Diseño y Gestión de Base de Datos', icon: 'database', hours: '126 horas', date: '13 de marzo de 2026',
      description: 'Certificación en Diseño y Gestión de Base de Datos con Fundamentos de Base de Datos (54h) y Bases de Datos No Estructuradas (72h).',
      pdf: 'certificados/DISEÑO Y GESTIÓN DE BASE DE DATOS.pdf' },
    { title: 'Soporte Computacional', icon: 'tool', hours: '126 horas', date: '13 de marzo de 2026',
      description: 'Certificación en Soporte Computacional para la administración y mantenimiento de sistemas informáticos y resolución de incidencias técnicas.',
      pdf: 'certificados/SOPORTE COMPUTACIONAL.pdf' },
    { title: 'Licencia Clase B', icon: 'card', hours: 'No profesional', date: 'Vigente (6 años)',
      description: 'Licencia no profesional para conducción de automóviles particulares, camionetas y vehículos de carga liviana de hasta 3.500 kg. Hasta 9 asientos (sin contar conductor). Vigencia de 6 años.',
      pdf: null }
];

// ============================================================
// ÍCONOS SVG (trazo)
// ============================================================

const ICONS = {
    database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
    code: '<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>',
    html: '<path d="M4 3l1.6 17L12 22l6.4-2L20 3H4z"/><path d="M16 8H8.5l.3 3.5h6.7l-.5 5L12 17.5 9 16.5"/>',
    js: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M11 9v6.5a1.5 1.5 0 01-3 0M18 9.5c-.4-.6-1-1-1.8-1-1 0-1.7.6-1.7 1.4 0 2 3.6 1.3 3.6 3.6 0 .9-.8 1.5-1.9 1.5-.9 0-1.6-.4-2-1.1"/>',
    terminal: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 9l3 3-3 3M12 15h6"/>',
    server: '<rect x="3" y="3" width="18" height="7" rx="2"/><rect x="3" y="14" width="18" height="7" rx="2"/><path d="M7 6.5h.01M7 17.5h.01"/>',
    team: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0113 0"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14.2a5 5 0 016 4.8"/>',
    chat: '<path d="M21 12a8 8 0 01-11.6 7.1L4 20l1-4.6A8 8 0 1121 12z"/><path d="M8.5 12h.01M12 12h.01M15.5 12h.01"/>',
    flex: '<path d="M17 2l4 4-4 4"/><path d="M3 11V9a3 3 0 013-3h15M7 22l-4-4 4-4"/><path d="M21 13v2a3 3 0 01-3 3H3"/>',
    brain: '<path d="M9.5 3A2.5 2.5 0 007 5.5v.2A3 3 0 004.5 9a3 3 0 00.5 5.5A3 3 0 008 19a2.5 2.5 0 004 1.5V4.5A2.5 2.5 0 009.5 3zM14.5 3A2.5 2.5 0 0117 5.5v.2A3 3 0 0119.5 9a3 3 0 01-.5 5.5A3 3 0 0116 19a2.5 2.5 0 01-4 1.5"/>',
    cloud: '<path d="M17.5 19a4.5 4.5 0 10-1.4-8.8A6 6 0 004 12.5 3.5 3.5 0 006.5 19h11z"/>',
    layers: '<path d="M12 2l10 5-10 5L2 7l10-5z"/><path d="M2 12l10 5 10-5M2 17l10 5 10-5"/>',
    agile: '<path d="M21 12a9 9 0 11-3-6.7"/><path d="M21 3v6h-6"/><path d="M12 7v5l3 2"/>',
    tool: '<path d="M14.7 6.3a4 4 0 00-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 005.4-5.4l-2.5 2.5-2.4-.6-.6-2.4 2.5-2.5z"/>',
    card: '<rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="8" cy="12" r="2.5"/><path d="M14 10h4M14 14h3"/>',
    download: '<path d="M12 3v12M7 10l5 5 5-5M5 21h14"/>',
    external: '<path d="M14 3h7v7M10 14L21 3M21 14v5a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h5"/>',
    chevL: '<path d="M15 18l-6-6 6-6"/>',
    chevR: '<path d="M9 18l6-6-6-6"/>'
};
const svg = (name) =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ICONS.code}</svg>`;

const esc = (s) => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// ============================================================
// RENDER
// ============================================================

function renderTimeline() {
    const el = document.getElementById('timeline');
    timeline.forEach(t => {
        const item = document.createElement('div');
        item.className = 'tl-item reveal';
        item.innerHTML = `
            <span class="tl-node"></span>
            <div class="tl-card">
                <div class="tl-top">
                    <h3 class="tl-title">${esc(t.title)}</h3>
                    <span class="tl-period">${esc(t.period)}</span>
                </div>
                <div class="tl-company"><span class="tl-type">${esc(t.type)}</span>${esc(t.company)}</div>
                <p class="tl-desc">${esc(t.description)}</p>
            </div>`;
        el.appendChild(item);
    });
}

function renderSkills() {
    const grid = document.getElementById('skills-grid');
    skills.forEach((s, i) => {
        const card = document.createElement('div');
        card.className = 'skill reveal';
        card.style.transitionDelay = `${i * 70}ms`;
        card.innerHTML = `
            <div class="skill-top">
                <div class="skill-icon">${svg(s.icon)}</div>
                <span class="skill-name">${esc(s.name)}</span>
                <span class="skill-pct" data-to="${s.level}">0%</span>
            </div>
            <div class="skill-bar"><div class="skill-fill" data-level="${s.level}"></div></div>`;
        grid.appendChild(card);
    });

    const soft = document.getElementById('soft-grid');
    softSkills.forEach((s, i) => {
        const card = document.createElement('div');
        card.className = 'soft reveal';
        card.style.transitionDelay = `${i * 80}ms`;
        card.innerHTML = `<div class="soft-icon">${svg(s.icon)}</div><span class="soft-name">${esc(s.name)}</span>`;
        soft.appendChild(card);
    });
}

function renderCerts() {
    const grid = document.getElementById('cert-grid');
    certifications.forEach((c, i) => {
        const card = document.createElement('div');
        card.className = 'cert reveal spotlight';
        card.style.transitionDelay = `${(i % 3) * 80}ms`;
        const btn = c.pdf
            ? `<a class="cert-btn" href="${encodeURI(c.pdf)}" download target="_blank" rel="noopener">${svg('download')} descargar_pdf</a>`
            : `<span class="cert-btn disabled">${svg('card')} documento_físico</span>`;
        card.innerHTML = `
            <div class="cert-top">
                <div class="cert-icon">${svg(c.icon)}</div>
                <div>
                    <div class="cert-title">${esc(c.title)}</div>
                    <div class="cert-meta">${esc(c.hours)} · ${esc(c.date)}</div>
                </div>
            </div>
            <p class="cert-desc">${esc(c.description)}</p>
            ${btn}`;
        grid.appendChild(card);
    });
}

// ============================================================
// CARRUSEL DE PROYECTOS
// ============================================================

function renderCarousel() {
    const track = document.getElementById('carousel-track');
    const dotsEl = document.getElementById('carousel-dots');
    const carousel = document.getElementById('carousel');
    const DURATION = 7000;
    carousel.style.setProperty('--dur', DURATION + 'ms');

    const shotTimers = [];

    projects.forEach((p, idx) => {
        const domain = p.link.replace(/^https?:\/\//, '').replace(/\/$/, '');
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.innerHTML = `
            <article class="project" style="--accent-a:${p.accent[0]};--accent-b:${p.accent[1]};--glow:${p.glow}">
                <div class="browser">
                    <div class="browser-win">
                        <div class="browser-bar">
                            <span class="dot r"></span><span class="dot y"></span><span class="dot g"></span>
                            <span class="browser-url">${esc(domain)}</span>
                        </div>
                        <div class="browser-screen">
                            ${p.images.map((src, i) => `<img src="${src}" alt="${esc(p.title)} — captura ${i + 1}" loading="${idx === 0 && i === 0 ? 'eager' : 'lazy'}" class="${i === 0 ? 'on' : ''}">`).join('')}
                            <div class="shot-nav">
                                <button type="button" aria-label="Captura anterior" data-dir="-1">${svg('chevL')}</button>
                                <button type="button" aria-label="Captura siguiente" data-dir="1">${svg('chevR')}</button>
                            </div>
                            <div class="shot-dots">${p.images.map((_, i) => `<span class="${i === 0 ? 'on' : ''}"></span>`).join('')}</div>
                        </div>
                    </div>
                </div>
                <div class="project-info">
                    <div class="project-kicker">0${idx + 1} / ${esc(p.kicker)} ${p.isNew ? '<span class="project-new">NUEVO</span>' : ''}</div>
                    <h3 class="project-title">${esc(p.title)}</h3>
                    <div class="project-domain">${esc(domain)}</div>
                    <p class="project-desc">${esc(p.description)}</p>
                    ${p.features ? `<ul class="project-features">${p.features.map(f => `<li>${esc(f)}</li>`).join('')}</ul>` : ''}
                    <div class="project-tags">${p.tech.map(t => `<span>${esc(t)}</span>`).join('')}</div>
                    <a class="btn btn-primary" href="${p.link}" target="_blank" rel="noopener">
                        <span>Ver proyecto en vivo</span>${svg('external').replace('<svg', '<svg width="16" height="16"')}
                    </a>
                </div>
            </article>`;
        track.appendChild(slide);

        // Mini-carrusel de capturas
        const imgs = slide.querySelectorAll('.browser-screen img');
        const sdots = slide.querySelectorAll('.shot-dots span');
        let cur = 0;
        const show = (n) => {
            cur = (n + imgs.length) % imgs.length;
            imgs.forEach((im, i) => im.classList.toggle('on', i === cur));
            sdots.forEach((d, i) => d.classList.toggle('on', i === cur));
        };
        slide.querySelectorAll('.shot-nav button').forEach(b =>
            b.addEventListener('click', (e) => { e.stopPropagation(); show(cur + Number(b.dataset.dir)); })
        );
        shotTimers.push({ next: () => show(cur + 1), reset: () => show(0) });

        const dot = document.createElement('button');
        dot.className = 'c-dot';
        dot.setAttribute('aria-label', `Ir a ${p.title}`);
        dot.innerHTML = '<span></span>';
        dot.addEventListener('click', () => go(idx, true));
        dotsEl.appendChild(dot);
    });

    const dots = [...dotsEl.children];
    let index = 0;
    let timer = null;
    let shotTimer = null;
    let paused = false;

    function go(n, user) {
        index = (n + projects.length) % projects.length;
        track.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach((d, i) => {
            d.classList.remove('active', 'done');
            if (i < index) d.classList.add('done');
        });
        void dots[index].offsetWidth; // reinicia animación de la barra
        dots[index].classList.add('active');
        if (user) restart();
    }

    function restart() {
        clearInterval(timer); clearInterval(shotTimer);
        if (paused || REDUCED) return;
        timer = setInterval(() => go(index + 1), DURATION);
        shotTimer = setInterval(() => shotTimers[index].next(), DURATION / 3);
    }

    document.getElementById('prev-project').addEventListener('click', () => go(index - 1, true));
    document.getElementById('next-project').addEventListener('click', () => go(index + 1, true));

    const pause = () => { paused = true; carousel.classList.add('paused'); clearInterval(timer); clearInterval(shotTimer); };
    const resume = () => {
        paused = false; carousel.classList.remove('paused');
        // reinicia la barra para que coincida con el temporizador
        const d = dots[index]; d.classList.remove('active'); void d.offsetWidth; d.classList.add('active');
        restart();
    };
    carousel.addEventListener('mouseenter', pause);
    carousel.addEventListener('mouseleave', resume);

    // Swipe táctil
    let x0 = null;
    track.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; pause(); }, { passive: true });
    track.addEventListener('touchend', e => {
        if (x0 !== null) {
            const dx = e.changedTouches[0].clientX - x0;
            if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
        }
        x0 = null; resume();
    });

    // Teclado
    carousel.setAttribute('tabindex', '0');
    carousel.addEventListener('keydown', e => {
        if (e.key === 'ArrowRight') go(index + 1, true);
        if (e.key === 'ArrowLeft') go(index - 1, true);
    });

    // Solo corre cuando está visible
    new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) { if (!paused) restart(); }
        else { clearInterval(timer); clearInterval(shotTimer); }
    }, { threshold: 0.3 }).observe(carousel);

    go(0);
}

// ============================================================
// ANIMACIONES
// ============================================================

// Fondo: red de partículas
function particles() {
    const c = document.getElementById('bg-canvas');
    const ctx = c.getContext('2d');
    let w, h, pts, dpr;
    const mouse = { x: -9999, y: -9999 };

    function init() {
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        w = c.width = innerWidth * dpr;
        h = c.height = innerHeight * dpr;
        const n = Math.min(90, Math.floor((innerWidth * innerHeight) / 16000));
        pts = Array.from({ length: n }, () => ({
            x: Math.random() * w, y: Math.random() * h,
            vx: (Math.random() - 0.5) * 0.25 * dpr, vy: (Math.random() - 0.5) * 0.25 * dpr,
            r: (Math.random() * 1.4 + 0.4) * dpr
        }));
    }

    function frame() {
        ctx.clearRect(0, 0, w, h);
        const max = 140 * dpr;
        for (let i = 0; i < pts.length; i++) {
            const p = pts[i];
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0 || p.x > w) p.vx *= -1;
            if (p.y < 0 || p.y > h) p.vy *= -1;

            // atracción suave al cursor
            const mdx = mouse.x - p.x, mdy = mouse.y - p.y;
            const md = Math.hypot(mdx, mdy);
            if (md < 200 * dpr) { p.x += mdx * 0.002; p.y += mdy * 0.002; }

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(34,229,255,0.7)';
            ctx.fill();

            for (let j = i + 1; j < pts.length; j++) {
                const q = pts[j];
                const d = Math.hypot(p.x - q.x, p.y - q.y);
                if (d < max) {
                    ctx.strokeStyle = `rgba(139,92,246,${(1 - d / max) * 0.35})`;
                    ctx.lineWidth = dpr * 0.6;
                    ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
                }
            }
        }
        if (!document.hidden) requestAnimationFrame(frame);
    }

    init();
    addEventListener('resize', init);
    addEventListener('mousemove', e => { mouse.x = e.clientX * dpr; mouse.y = e.clientY * dpr; });
    document.addEventListener('visibilitychange', () => { if (!document.hidden) requestAnimationFrame(frame); });
    if (REDUCED) { frame(); return; }
    requestAnimationFrame(frame);
}

// Typewriter del rol
function typed() {
    const el = document.getElementById('typed');
    const roles = ['Desarrollador Full Stack', 'Estudiante de Ingeniería en Informática', 'Bases de datos & Cloud', 'Construyo cosas para la web'];
    if (REDUCED) { el.textContent = roles[0]; return; }
    let r = 0, i = 0, del = false;
    (function tick() {
        const word = roles[r];
        el.textContent = word.slice(0, i);
        if (!del && i === word.length) { del = true; return setTimeout(tick, 1800); }
        if (del && i === 0) { del = false; r = (r + 1) % roles.length; }
        i += del ? -1 : 1;
        setTimeout(tick, del ? 35 : 70);
    })();
}

// Terminal animada del hero
function terminal() {
    const body = document.getElementById('terminal-body');
    const script = [
        { cmd: 'whoami' },
        { out: '<span class="t-v">jhoel_esquivel</span> <span class="t-com">// dev en formación</span>' },
        { cmd: 'cat perfil.json' },
        { out:
`{
  <span class="t-key">"nombre"</span>: <span class="t-str">"Jhoel Esquivel"</span>,
  <span class="t-key">"carrera"</span>: <span class="t-str">"Ing. en Informática"</span>,
  <span class="t-key">"institución"</span>: <span class="t-str">"INACAP Iquique"</span>,
  <span class="t-key">"stack"</span>: [<span class="t-str">"MySQL"</span>, <span class="t-str">"Python"</span>, <span class="t-str">"JS"</span>, <span class="t-str">"Linux"</span>],
  <span class="t-key">"ubicación"</span>: <span class="t-str">"Iquique, Chile"</span>
}` },
        { cmd: 'npm run deploy --proyectos' },
        { out: '<span class="t-ok">✓</span> deliciasrenata <span class="t-com">........</span> online\n<span class="t-ok">✓</span> javiera-meneses <span class="t-com">.......</span> online\n<span class="t-ok">✓</span> sindicato-siemens <span class="t-com">.....</span> online' },
    ];
    const prompt = '<span class="t-prompt">❯</span> ';

    if (REDUCED) {
        body.innerHTML = script.map(s => s.cmd ? prompt + `<span class="t-cmd">${s.cmd}</span>` : s.out).join('\n');
        return;
    }

    let html = '';
    let step = 0;
    function next() {
        if (step >= script.length) {
            body.innerHTML = html + prompt + '<span class="caret">▋</span>';
            return;
        }
        const s = script[step++];
        if (s.cmd) {
            let i = 0;
            const base = html + prompt;
            (function type() {
                body.innerHTML = base + `<span class="t-cmd">${s.cmd.slice(0, i)}</span><span class="caret">▋</span>`;
                if (i++ < s.cmd.length) setTimeout(type, 45 + Math.random() * 50);
                else { html = base + `<span class="t-cmd">${s.cmd}</span>\n`; setTimeout(next, 350); }
            })();
        } else {
            html += s.out + '\n\n';
            body.innerHTML = html;
            setTimeout(next, 600);
        }
    }
    setTimeout(next, 900);
}

// Texto "scramble" en títulos
function scramble(el) {
    if (REDUCED || el.dataset.done) return;
    el.dataset.done = '1';
    const final = el.textContent;
    const chars = '!<>-_\\/[]{}—=+*^?#01';
    let frame = 0;
    const total = 22;
    (function run() {
        el.textContent = final.split('').map((ch, i) => {
            if (ch === ' ') return ' ';
            return frame / total > i / final.length ? ch : chars[Math.floor(Math.random() * chars.length)];
        }).join('');
        if (frame++ < total) requestAnimationFrame(run);
        else el.textContent = final;
    })();
}

// Revelado al hacer scroll + contadores + barras
function observeReveals() {
    const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (!e.isIntersecting) return;
            const el = e.target;
            el.classList.add('in');
            if (el.style.transitionDelay) setTimeout(() => { el.style.transitionDelay = ''; }, 1200);
            el.querySelectorAll?.('.scramble').forEach(scramble);

            if (el.classList.contains('skill')) {
                const fill = el.querySelector('.skill-fill');
                const pct = el.querySelector('.skill-pct');
                fill.style.width = fill.dataset.level + '%';
                countUp(pct, +pct.dataset.to, '%');
            }
            if (el.classList.contains('stats')) {
                el.querySelectorAll('.stat-num').forEach(n => countUp(n, +n.dataset.count));
            }
            io.unobserve(el);
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

function countUp(el, to, suffix = '') {
    if (REDUCED) { el.textContent = to + suffix; return; }
    const dur = 1600, t0 = performance.now();
    (function step(t) {
        const k = Math.min(1, (t - t0) / dur);
        const eased = 1 - Math.pow(1 - k, 3);
        el.textContent = Math.round(to * eased) + suffix;
        if (k < 1) requestAnimationFrame(step);
    })(t0);
}

// Inclinación 3D
function tilt() {
    if (REDUCED || matchMedia('(hover: none)').matches) return;
    document.querySelectorAll('.tilt').forEach(el => {
        const max = el.classList.contains('terminal') ? 8 : 10;
        el.addEventListener('mousemove', e => {
            const r = el.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width - 0.5;
            const y = (e.clientY - r.top) / r.height - 0.5;
            el.style.transform = `perspective(900px) rotateY(${x * max}deg) rotateX(${-y * max}deg)`;
            el.style.setProperty('--mx', `${(x + 0.5) * 100}%`);
            el.style.setProperty('--my', `${(y + 0.5) * 100}%`);
        });
        el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });
}

// Spotlight que sigue el cursor dentro de las tarjetas
function spotlight() {
    document.querySelectorAll('.spotlight').forEach(el => {
        el.addEventListener('mousemove', e => {
            const r = el.getBoundingClientRect();
            el.style.setProperty('--mx', `${e.clientX - r.left}px`);
            el.style.setProperty('--my', `${e.clientY - r.top}px`);
        });
    });
}

// Botones magnéticos
function magnetic() {
    if (REDUCED || matchMedia('(hover: none)').matches) return;
    document.querySelectorAll('.magnetic').forEach(el => {
        el.addEventListener('mousemove', e => {
            const r = el.getBoundingClientRect();
            const x = e.clientX - r.left - r.width / 2;
            const y = e.clientY - r.top - r.height / 2;
            el.style.transform = `translate(${x * 0.2}px, ${y * 0.3}px)`;
        });
        el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });
}

// Glow del cursor
function cursorGlow() {
    if (matchMedia('(hover: none)').matches) return;
    const g = document.querySelector('.cursor-glow');
    let tx = 0, ty = 0, x = 0, y = 0;
    addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; g.style.opacity = 1; });
    (function loop() {
        x += (tx - x) * 0.12; y += (ty - y) * 0.12;
        g.style.left = x + 'px'; g.style.top = y + 'px';
        requestAnimationFrame(loop);
    })();
}

// Navegación: estado scrolled, progreso, sección activa, menú móvil
function nav() {
    const navEl = document.getElementById('nav');
    const bar = document.getElementById('scroll-progress');
    const tlProg = document.getElementById('timeline-progress');
    const tl = document.getElementById('timeline');
    const links = [...document.querySelectorAll('.nav-links a[href^="#"]')];
    const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

    function onScroll() {
        const y = scrollY;
        navEl.classList.toggle('scrolled', y > 20);
        const max = document.documentElement.scrollHeight - innerHeight;
        bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;

        // progreso de la línea de tiempo
        const r = tl.getBoundingClientRect();
        const p = Math.min(1, Math.max(0, (innerHeight * 0.7 - r.top) / r.height));
        tlProg.style.height = `${p * (r.height - 12)}px`;

        let current = null;
        sections.forEach(s => { if (s.getBoundingClientRect().top < innerHeight * 0.4) current = s.id; });
        links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
    }
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const toggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('nav-links');
    toggle.addEventListener('click', () => {
        const open = menu.classList.toggle('open');
        toggle.classList.toggle('open', open);
        document.body.style.overflow = open ? 'hidden' : '';
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
        menu.classList.remove('open'); toggle.classList.remove('open'); document.body.style.overflow = '';
    }));
}

// Copiar email
function copyEmail() {
    const toast = document.getElementById('toast');
    document.querySelectorAll('.copy-email').forEach(b => b.addEventListener('click', async () => {
        try { await navigator.clipboard.writeText(b.dataset.email); }
        catch { window.location.href = 'mailto:' + b.dataset.email; return; }
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2000);
    }));
}

// Loader
function loader() {
    const el = document.getElementById('loader');
    document.body.classList.add('loading');
    const done = () => { el.classList.add('done'); document.body.classList.remove('loading'); };
    if (REDUCED) return done();
    setTimeout(done, 1300);
}

// ============================================================
// INICIALIZAR
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('year').textContent = new Date().getFullYear();
    loader();
    renderTimeline();
    renderSkills();
    renderCerts();
    renderCarousel();
    particles();
    typed();
    terminal();
    observeReveals();
    tilt();
    spotlight();
    magnetic();
    cursorGlow();
    nav();
    copyEmail();
});
