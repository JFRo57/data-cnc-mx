
// ==========================================================================
// Control de Acordeón Móvil para Mega-Menú
// ==========================================================================
// ==========================================================================
// Fase 4: Calculadora Dinámica de Parámetros B2B
// ==========================================================================
const TECH_CALC_MATRIX = {
  'acero-inox': {
    name: 'Acero Inoxidable (304 / 316)',
    speeds: {
      '0.5': { power: '1500W', speed: '5.5 m/min', gas: 'Nitrógeno (N2)', pressure: '12 - 14 bar', wire: '0.8 mm' },
      '1.0': { power: '1500W - 2000W', speed: '4.2 m/min', gas: 'Nitrógeno (N2)', pressure: '12 - 14 bar', wire: '0.8 - 1.0 mm' },
      '2.0': { power: '2000W', speed: '2.8 m/min', gas: 'Nitrógeno (N2)', pressure: '14 bar', wire: '1.0 mm' },
      '3.0': { power: '2000W - 3000W', speed: '1.8 m/min', gas: 'Nitrógeno (N2)', pressure: '14 - 16 bar', wire: '1.2 mm' },
      '4.0': { power: '3000W', speed: '1.2 m/min', gas: 'Nitrógeno (N2)', pressure: '16 bar', wire: '1.2 mm' },
      '6.0': { power: '3000W (Biselado)', speed: '0.8 m/min', gas: 'Nitrógeno (N2)', pressure: '16 bar', wire: '1.2 mm' }
    }
  },
  'acero-carbon': {
    name: 'Acero al Carbón (A36 / Calibres)',
    speeds: {
      '0.5': { power: '1500W', speed: '6.0 m/min', gas: 'Aire Seco o Argón', pressure: '10 - 12 bar', wire: '0.8 mm' },
      '1.0': { power: '1500W', speed: '4.8 m/min', gas: 'Aire Seco o Argón', pressure: '12 bar', wire: '0.8 mm' },
      '2.0': { power: '2000W', speed: '3.2 m/min', gas: 'Aire Seco o Argón', pressure: '12 - 14 bar', wire: '1.0 mm' },
      '3.0': { power: '2000W - 3000W', speed: '2.1 m/min', gas: 'Nitrógeno o Argón', pressure: '14 bar', wire: '1.2 mm' },
      '4.0': { power: '3000W', speed: '1.4 m/min', gas: 'Argón puro', pressure: '14 bar', wire: '1.2 mm' },
      '6.0': { power: '3000W (Doble pase)', speed: '0.9 m/min', gas: 'Argón puro', pressure: '15 bar', wire: '1.2 mm' }
    }
  },
  'aluminio': {
    name: 'Aluminio (Serie 5000 / 6000)',
    speeds: {
      '0.5': { power: '1500W', speed: '4.5 m/min', gas: 'Argón puro 99.99%', pressure: '14 bar', wire: '1.0 mm' },
      '1.0': { power: '2000W', speed: '3.5 m/min', gas: 'Argón puro 99.99%', pressure: '14 bar', wire: '1.0 mm' },
      '2.0': { power: '2000W - 3000W', speed: '2.2 m/min', gas: 'Argón puro 99.99%', pressure: '15 bar', wire: '1.2 mm' },
      '3.0': { power: '3000W', speed: '1.4 m/min', gas: 'Argón puro 99.99%', pressure: '16 bar', wire: '1.2 mm' },
      '4.0': { power: '3000W (Biselado)', speed: '0.9 m/min', gas: 'Argón puro 99.99%', pressure: '16 bar', wire: '1.2 mm' },
      '6.0': { power: '3000W (Recomendado precalentado)', speed: '0.6 m/min', gas: 'Argón puro', pressure: '16 bar', wire: '1.2 mm' }
    }
  },
  'cobre-laton': {
    name: 'Latón y Cobre electrolítico',
    speeds: {
      '0.5': { power: '2000W', speed: '4.0 m/min', gas: 'Argón o Nitrógeno', pressure: '14 bar', wire: '0.8 mm' },
      '1.0': { power: '2000W - 3000W', speed: '2.6 m/min', gas: 'Argón puro', pressure: '15 bar', wire: '1.0 mm' },
      '2.0': { power: '3000W', speed: '1.6 m/min', gas: 'Argón puro', pressure: '16 bar', wire: '1.0 mm' },
      '3.0': { power: '3000W', speed: '1.0 m/min', gas: 'Argón puro', pressure: '16 bar', wire: '1.2 mm' },
      '4.0': { power: '3000W (Potencia máx)', speed: '0.7 m/min', gas: 'Argón puro', pressure: '16 bar', wire: '1.2 mm' },
      '6.0': { power: 'Consultar ingeniería DATA', speed: '0.4 m/min', gas: 'Argón puro', pressure: '16 bar', wire: '1.2 mm' }
    }
  }
};

const THICKNESS_STEPS = ['0.5', '1.0', '2.0', '3.0', '4.0', '6.0'];

function initTechCalculator() {
  const container = document.getElementById('tech-calculator');
  if (!container) return;

  let currentMaterial = 'acero-inox';
  let currentThicknessIndex = 1; // 1.0 mm por defecto

  const materialBtns = container.querySelectorAll('.calc-mat-btn');
  const slider = container.querySelector('#calc-thickness-slider');
  const thicknessValEl = container.querySelector('#calc-current-thickness');

  const titleEl = container.querySelector('#calc-result-title');
  const powerEl = container.querySelector('#calc-result-power');
  const speedEl = container.querySelector('#calc-result-speed');
  const gasEl = container.querySelector('#calc-result-gas');
  const pressureEl = container.querySelector('#calc-result-pressure');
  const wireEl = container.querySelector('#calc-result-wire');
  const ctaBtn = container.querySelector('#calc-quote-btn');

  function updateCalculator() {
    materialBtns.forEach(btn => btn.setAttribute('aria-pressed', String(btn.getAttribute('data-material') === currentMaterial)));
    const matData = TECH_CALC_MATRIX[currentMaterial];
    const thicknessKey = THICKNESS_STEPS[currentThicknessIndex];
    const spec = matData.speeds[thicknessKey];

    if (thicknessValEl) thicknessValEl.textContent = `${thicknessKey} mm`;
    if (titleEl) titleEl.textContent = `${matData.name} · ${thicknessKey} mm`;
    if (powerEl) powerEl.textContent = spec.power;
    if (speedEl) speedEl.textContent = spec.speed;
    if (gasEl) gasEl.textContent = spec.gas;
    if (pressureEl) pressureEl.textContent = spec.pressure;
    if (wireEl) wireEl.textContent = spec.wire;

    if (ctaBtn) {
      const msg = encodeURIComponent(`Hola, me interesa cotizar un equipo láser DATA para soldar/cortar ${matData.name} en espesor de ${thicknessKey} mm (Potencia sugerida: ${spec.power}).`);
      ctaBtn.href = `https://wa.me/5215527753215?text=${msg}`;
    }
  }

  materialBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      materialBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      currentMaterial = this.getAttribute('data-material');
      updateCalculator();
    });
  });

  if (slider) {
    slider.addEventListener('input', function() {
      currentThicknessIndex = parseInt(this.value, 10);
      updateCalculator();
    });
  }

  updateCalculator();
}

// ==========================================================================
// Fase 4: Mapa Interactivo de Cobertura y Tiempos de SLA
// ==========================================================================
const REGIONS_DATA = {
  'valle-mexico': {
    title: 'Zona Metropolitana & Valle de México',
    sla: '< 4 Horas en Planta',
    status: 'Respuesta Inmediata CDMX',
    states: ['Ciudad de México (CDMX)', 'Estado de México (EdoMex)', 'Cuernavaca / Morelos', 'Hidalgo Sur'],
    description: 'Atención técnica directa desde nuestro Showroom y Bodega Central en Iztapalapa, CDMX. Diagnóstico en sitio el mismo día y entrega de consumibles en menos de 4 horas.',
    engineers: '6 Ingenieros de Campo Activos',
    stockStatus: '100% Stock en Bodega Local'
  },
  'bajio-centro': {
    title: 'Corredor Industrial Bajío & Centro',
    sla: '< 24 Horas en Planta',
    status: 'Rutas Diarias de Asistencia',
    states: ['Querétaro', 'Puebla', 'Toluca / Lerma', 'Guanajuato (León, Celaya, Silao)', 'Tlaxcala', 'Pachuca'],
    description: 'Rutas programadas de servicio preventivo y respuesta a emergencias para corredores automotrices y metalmecánicos. Arribo garantizado al día siguiente hábil.',
    engineers: '4 Especialistas Asignados a la Zona',
    stockStatus: 'Despacho Express Nacional 24h'
  },
  'norte-occidente': {
    title: 'Zona Norte, Occidente y Frontera',
    sla: '< 48 Horas en Planta',
    status: 'Telemetría Remota < 30 min',
    states: ['Nuevo León (Monterrey, Apodaca)', 'Jalisco (Guadalajara, Zapopan)', 'Coahuila (Saltillo, Ramos Arizpe)', 'San Luis Potosí', 'Chihuahua', 'Sonora'],
    description: 'Diagnóstico remoto inmediato por telemetría óptica en menos de 30 minutos. Desplazamiento de ingenieros y envío aéreo de refacciones prioritarias.',
    engineers: 'Soporte Especializado Remoto + Visita',
    stockStatus: 'Envío Aéreo Prioritario'
  }
};

function initCoverageMap() {
  const container = document.getElementById('coverage-map-component');
  if (!container) return;

  const tabBtns = container.querySelectorAll('.region-tab-btn');
  const titleEl = container.querySelector('#sla-region-title');
  const timeEl = container.querySelector('#sla-time-val');
  const descEl = container.querySelector('#sla-region-desc');
  const statesContainer = container.querySelector('#sla-states-container');
  const engineersEl = container.querySelector('#sla-engineers-val');
  const quoteBtn = container.querySelector('#sla-quote-btn');

  const cityPoints = [...container.querySelectorAll('.coverage-map-city')];
  const cityChoices = [...container.querySelectorAll('.coverage-city-choice')];

  function updateRegion(key, cityKey) {
    const reg = REGIONS_DATA[key];
    if (!reg) return;
    const city = cityPoints.find(node => node.dataset.mapRegion === key && (!cityKey || node.dataset.mapCity === cityKey));
    const selectedCity = city?.dataset.mapCity;
    container.querySelectorAll('[data-map-region]').forEach(node => {
      const active = node.dataset.mapCity ? node.dataset.mapCity === selectedCity : node.dataset.mapRegion === key;
      node.classList.toggle('is-active', active);
      if (node.classList.contains('coverage-map-city')) node.setAttribute('aria-pressed', String(active));
    });
    cityChoices.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.citySelect === selectedCity)));
    tabBtns.forEach(button => {
      const active = button.dataset.region === key;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    const mapStatus = container.querySelector('.coverage-selected-zone');
    if (mapStatus) mapStatus.textContent = `${city?.querySelector('title').textContent || reg.title} · ${reg.status}`;

    if (titleEl) titleEl.textContent = reg.title;
    if (timeEl) timeEl.textContent = reg.sla;
    if (descEl) descEl.textContent = reg.description;
    if (engineersEl) engineersEl.textContent = reg.engineers;

    if (statesContainer) {
      statesContainer.innerHTML = reg.states.map(s => `<li class="sla-state-pill">${s}</li>`).join('');
    }

    if (quoteBtn) {
      const msg = encodeURIComponent(`Hola, requiero asesoría técnica sobre disponibilidad y tiempos de soporte de DATA CNC en la región: ${reg.title} (${reg.sla}).`);
      quoteBtn.href = `https://wa.me/5215527753215?text=${msg}`;
    }
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => updateRegion(btn.dataset.region));
  });
  cityPoints.forEach(point => {
    const select = () => updateRegion(point.dataset.mapRegion, point.dataset.mapCity);
    point.addEventListener('click', select);
    point.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault(); select();
      }
    });
  });
  cityChoices.forEach(button => {
    button.addEventListener('click', () => {
      const point = cityPoints.find(node => node.dataset.mapCity === button.dataset.citySelect);
      if (point) updateRegion(point.dataset.mapRegion, point.dataset.mapCity);
    });
  });

  updateRegion('valle-mexico');
}


// ==========================================================================
// Fase 3: Comparador Interactivo Deslizable (Antes vs. Después)
// ==========================================================================
// ==========================================================================
// Fase 2: Control de Video Hero y Contadores Numéricos Dinámicos
// ==========================================================================
// Hero Showcase Interactivo de Maquinaria (Opción A)
// ==========================================================================
const HERO_SHOWCASE_SLIDES = [
  {
    kicker: 'DATA Laser · Fibra Óptica 3 en 1',
    titleLines: ['Soldadora Láser', '3 en 1 Serie RL'],
    desc: 'Suelda, corta y limpia metales en una sola unidad con enfriamiento por chiller. Hasta 5x más rápida que MIG/TIG, con asesoría y respaldo local en México.',
    power: '1500W – 3000W',
    app: 'Inox · Carbón · Aluminio',
    status: 'SHOWROOM CDMX · EN STOCK',
    model: 'RL-1500 / RL-2000 / RL-3000',
    sub: 'Equipo industrial con puesta en marcha en México',
    fichaUrl: 'ficha-soldadora-rl.html',
    demoUrl: 'demostracion.html?equipo=soldadora-rl-3en1#demo-page-form'
  },
  {
    kicker: 'DATA Laser · Corte CNC Industrial',
    titleLines: ['Cortadora Láser', 'Cama Plana 4×10'],
    desc: 'Mesa de trabajo de 1500 × 3000 mm con pórtico de aluminio de aviación, cabezal autofocus y software CypCut para corte de placa y lámina de alta velocidad.',
    power: '1.5 kW – 12 kW',
    app: 'Carbón · Inox · Latón',
    status: 'ENTREGA & INSTALACIÓN NACIONAL',
    model: 'DATA-CUT 4×10 Pro',
    sub: 'Precisión de posicionamiento ±0.03 mm · 100 m/min',
    fichaUrl: 'ficha-cortadora-4x10.html',
    demoUrl: 'demostracion.html?equipo=cortadora-4x10#demo-page-form'
  },
  {
    kicker: 'DATA Laser · Ultra Portátil',
    titleLines: ['Soldadora Láser', 'Serie RA (Aire)'],
    desc: 'Disipación 100% por aire forzado sin chiller externo ni mangueras de agua. Diseño compacto para montajes en obra, talleres móviles y cordones finos.',
    power: '800W – 1500W',
    app: 'Montaje en sitio · Taller',
    status: 'CERO CHILLER · OPERACIÓN ÁGIL',
    model: 'RA-800 / RA-1200 / RA-1500',
    sub: 'Hasta 60% más compacta · 220V monofásico/bifásico',
    fichaUrl: 'ficha-soldadora-ra.html',
    demoUrl: 'demostracion.html?equipo=soldadora-ra-aire#demo-page-form'
  },
  {
    kicker: 'DATA CNC · Aire Industrial 24/7',
    titleLines: ['Compresor de Tornillo', 'con Secador Integrado'],
    desc: 'Módulo 4 en 1 (compresor, tanque, secador refrigerativo y filtros coalescentes) diseñado para alimentar corte láser y líneas neumáticas sin humedad.',
    power: '10 HP – 50 HP',
    app: '8 – 16 bar · Punto de rocío 2°C',
    status: 'OPERACIÓN CONTINUA 24/7',
    model: 'DT-15B / DT-20B / DT-30B',
    sub: 'Aire limpio y seco de alta presión para corte láser',
    fichaUrl: 'ficha-compresor-tornillo.html',
    demoUrl: 'demostracion.html?equipo=compresor-tornillo#demo-page-form'
  },
  {
    kicker: 'DATA Flame · Acabados Térmicos',
    titleLines: ['Pintura Electrostática', 'y Hornos de Curado'],
    desc: 'Cabinas con recuperación ciclónica de polvo y hornos de polimerización por aire forzado a 50°C–250°C para acabados uniformes de alta resistencia.',
    power: 'Gas LP / Natural / Eléctrico',
    app: 'Cabina Serie C + Horno Serie H',
    status: 'DISEÑO INDUSTRIAL A MEDIDA',
    model: 'DATA Flame Serie C & H',
    sub: 'Distribución térmica ±3°C · Recuperación ciclónica 98%',
    fichaUrl: 'ficha-data-flame.html',
    demoUrl: 'demostracion.html?equipo=pintura-hornos#demo-page-form'
  }
];

function initHeroShowcase() {
  const hero = document.getElementById('inicio');
  if (!hero) return;

  const slides = [...hero.querySelectorAll('.hero-slide')];
  const railDots = [...hero.querySelectorAll('.hero-rail-dot')];
  const dockTabs = [...hero.querySelectorAll('.hero-dock-tab')];
  const prevBtn = document.getElementById('hero-prev-btn');
  const nextBtn = document.getElementById('hero-next-btn');
  const autoplayBtn = document.getElementById('hero-autoplay-btn');
  const stageEl = hero.querySelector('.hero-stage');

  const kickerEl = document.getElementById('hero-slide-kicker');
  const titleEl = document.getElementById('hero-slide-title');
  const descEl = document.getElementById('hero-slide-desc');
  const powerEl = document.getElementById('hero-slide-power');
  const appEl = document.getElementById('hero-slide-app');
  const ctaEl = document.getElementById('hero-slide-cta');
  const demoEl = document.getElementById('hero-slide-demo');
  const statusEl = document.getElementById('hero-stage-status');
  const counterEl = document.getElementById('hero-stage-counter');
  const modelEl = document.getElementById('hero-stage-model');
  const subEl = document.getElementById('hero-stage-sub');

  if (!slides.length || slides.length !== HERO_SHOWCASE_SLIDES.length) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let activeIndex = 0;
  let userPaused = reducedMotion.matches;
  let timerId = null;
  let pointerOverHero = false;

  function syncAutoplayUI() {
    if (!autoplayBtn) return;
    const pauseIcon = autoplayBtn.querySelector('.pause-icon');
    const playIcon = autoplayBtn.querySelector('.play-icon');
    if (pauseIcon) pauseIcon.style.display = userPaused ? 'none' : 'block';
    if (playIcon) playIcon.style.display = userPaused ? 'block' : 'none';
    autoplayBtn.setAttribute('aria-pressed', String(userPaused));
    autoplayBtn.setAttribute('aria-label', userPaused ? 'Reanudar rotación automática' : 'Pausar rotación automática');
  }

  function renderSlide(nextIndex) {
    const total = HERO_SHOWCASE_SLIDES.length;
    activeIndex = ((nextIndex % total) + total) % total;
    const item = HERO_SHOWCASE_SLIDES[activeIndex];

    slides.forEach((slide, idx) => {
      const isActive = idx === activeIndex;
      slide.classList.toggle('is-active', isActive);
      slide.setAttribute('aria-hidden', String(!isActive));
    });

    const syncControls = (buttons) => {
      buttons.forEach(btn => {
        const isActive = Number(btn.dataset.slideTarget) === activeIndex;
        btn.classList.toggle('is-active', isActive);
        btn.setAttribute('aria-pressed', String(isActive));
      });
    };
    syncControls(railDots);
    syncControls(dockTabs);

    if (kickerEl) kickerEl.textContent = item.kicker;
    if (titleEl) {
      titleEl.textContent = '';
      titleEl.appendChild(document.createTextNode(item.titleLines[0]));
      titleEl.appendChild(document.createElement('br'));
      const span = document.createElement('span');
      span.textContent = item.titleLines[1];
      titleEl.appendChild(span);
    }
    if (descEl) descEl.textContent = item.desc;
    if (powerEl) powerEl.textContent = item.power;
    if (appEl) appEl.textContent = item.app;
    if (ctaEl) ctaEl.setAttribute('href', item.fichaUrl);
    if (demoEl) demoEl.setAttribute('href', item.demoUrl);
    if (statusEl) statusEl.textContent = item.status;
    if (counterEl) counterEl.textContent = `${String(activeIndex + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
    if (modelEl) modelEl.textContent = item.model;
    if (subEl) subEl.textContent = item.sub;
  }

  function stopAutoplay() {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
  }

  function startAutoplay(force = false) {
    stopAutoplay();
    if (userPaused || (reducedMotion.matches && !force) || (pointerOverHero && !force)) return;
    timerId = setInterval(() => {
      renderSlide(activeIndex + 1);
    }, 6500);
  }

  function goToSlide(index) {
    const wasAutoplaying = timerId !== null;
    renderSlide(index);
    if (wasAutoplaying) startAutoplay(pointerOverHero);
  }

  prevBtn?.addEventListener('click', () => goToSlide(activeIndex - 1));
  nextBtn?.addEventListener('click', () => goToSlide(activeIndex + 1));

  [...railDots, ...dockTabs].forEach(btn => {
    btn.addEventListener('click', () => {
      const target = Number(btn.dataset.slideTarget);
      if (!Number.isNaN(target)) goToSlide(target);
    });
  });

  autoplayBtn?.addEventListener('click', () => {
    userPaused = !userPaused;
    syncAutoplayUI();
    if (userPaused) stopAutoplay();
    else startAutoplay(true);
  });

  hero.addEventListener('mouseenter', () => {
    pointerOverHero = true;
    stopAutoplay();
  });
  hero.addEventListener('mouseleave', () => {
    pointerOverHero = false;
    startAutoplay();
  });
  hero.addEventListener('focusin', stopAutoplay);
  hero.addEventListener('focusout', (event) => {
    if (!hero.contains(event.relatedTarget)) startAutoplay();
  });

  hero.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      goToSlide(activeIndex + 1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goToSlide(activeIndex - 1);
    }
  });

  if (stageEl) {
    let pointerStartX = null;
    stageEl.addEventListener('pointerdown', (event) => {
      pointerStartX = event.clientX;
    });
    stageEl.addEventListener('pointerup', (event) => {
      if (pointerStartX === null) return;
      const deltaX = event.clientX - pointerStartX;
      pointerStartX = null;
      if (Math.abs(deltaX) > 45) {
        goToSlide(deltaX < 0 ? activeIndex + 1 : activeIndex - 1);
      }
    });
  }

  reducedMotion.addEventListener('change', () => {
    if (reducedMotion.matches) {
      userPaused = true;
      stopAutoplay();
    }
    syncAutoplayUI();
  });

  syncAutoplayUI();
  renderSlide(0);
  startAutoplay();
}

function initAnimatedCounters() {
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');
  if (!statNumbers.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return; // Respetar accesibilidad de movimiento reducido
  }

  let animated = false;
  const observer = new IntersectionObserver(function(entries, obs) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting && !animated) {
        animated = true;
        obs.disconnect();

        statNumbers.forEach(function(el) {
          const target = parseInt(el.getAttribute('data-target'), 10);
          const prefix = el.getAttribute('data-prefix') || '';
          const suffix = el.getAttribute('data-suffix') || '';
          const duration = 1600;
          const startTime = performance.now();

          function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Curva easeOutQuad
            const easeProgress = progress * (2 - progress);
            const currentVal = Math.floor(easeProgress * target);
            el.textContent = prefix + currentVal + suffix;
            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              el.textContent = prefix + target + suffix;
            }
          }
          requestAnimationFrame(updateCounter);
        });
      }
    });
  }, { threshold: 0.25 });

  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    observer.observe(statsSection);
  }
}


// ==========================================================================
// Selector de Tema Dual (Modo Oscuro / Modo Claro) con Persistencia
// ==========================================================================
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  function updateToggleUI(currentTheme) {
    toggleBtn.setAttribute('aria-pressed', currentTheme === 'dark' ? 'true' : 'false');
    toggleBtn.setAttribute('title', currentTheme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
  }

  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  updateToggleUI(currentTheme);

  toggleBtn.addEventListener('click', function() {
    const active = document.documentElement.getAttribute('data-theme') || 'dark';
    const nextTheme = active === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    try {
      localStorage.setItem('datacnc-theme', nextTheme);
    } catch (e) {}
    updateToggleUI(nextTheme);
  });
}

/**
 * DATA CNC MX - Lógica Interactiva, Filtros de Productos, Fichas Técnicas y Agenda
 */

document.addEventListener('DOMContentLoaded', () => {
  initProductJourney();
  initNavigation();
  initProductCatalog();
  decorateProductCards();
  initModals();
  initProductGallery();
  initContactForm();
  initDemoScheduler();
  initScrollEffects();
  initThemeToggle();
  initHeroShowcase();
  initAnimatedCounters();
  initTechCalculator();
  initCoverageMap();
});

/* ==========================================================================
   Base de Datos de Maquinaria y Fichas Técnicas Oficiales
   ========================================================================== */
const PRODUCTS_DATA = [
  {
    id: 'soldadora-rl-3en1',
    category: 'soldadura',
    divisionName: 'DATA Laser',
    divisionLogo: 'assets/images/logo-data-laser.png',
    fichaUrl: 'ficha-soldadora-rl.html',
    categoryUrl: 'soldadura-laser.html',
    name: 'Soldadora Láser 3 en 1 RL (Enfriada por Agua)',
    subtitle: 'Suelda, Corta y Limpia en una sola unidad de alta potencia',
    tag: 'Fibra Óptica / 3 en 1',
    powerTag: '1500W - 3000W',
    image: 'assets/images/soldadora-rl-torch.jpg',
    description: 'Combina las funciones de soldadura láser de penetración profunda, limpieza superficial de óxido/pintura y corte de lámina ligera. Entre 2 y 5 veces más rápida que los procesos tradicionales MIG y TIG.',
    specsPreview: [
      'Funciones 3 en 1: Soldadura, Limpieza superficial y Corte fino',
      'Enfriamiento por Chiller industrial de agua de alta precisión',
      'Antorcha ergonómica con doble wobble y alimentador de alambre incluido',
      'Mínima deformación térmica y cero escoria posterior'
    ],
    fullSpecs: {
      modelos: 'RL-1500 / RL-2000 / RL-3000',
      potencias: '1500 W / 2000 W / 3000 W',
      longitudOnda: '1080 nm ± 10 nm',
      longitudFibra: '10 metros estándar (15m opcional)',
      velocidadSoldadura: '0 - 120 mm/s',
      gasesAsistencia: 'Argón, Nitrógeno o Aire comprimido seco',
      enfriamiento: 'Chiller industrial de agua recirculante con control dual de temperatura',
      voltaje: '220V ± 10% Bifásico / Trifásico 60 Hz',
      espesores: [
        { material: 'Acero Inoxidable', mm: 'Hasta 4.0 mm (1500W) / 6.0 mm (2000W) / 8.0 mm (3000W)' },
        { material: 'Acero al Carbón', mm: 'Hasta 4.0 mm (1500W) / 6.0 mm (2000W) / 8.0 mm (3000W)' },
        { material: 'Aluminio', mm: 'Hasta 3.0 mm (1500W) / 4.0 mm (2000W) / 6.0 mm (3000W)' },
        { material: 'Lámina Galvanizada', mm: 'Hasta 3.5 mm (1500W) / 5.0 mm (2000W) / 7.0 mm (3000W)' }
      ]
    }
  },
  {
    id: 'soldadora-ra-aire',
    category: 'soldadura',
    divisionName: 'DATA Laser',
    divisionLogo: 'assets/images/logo-data-laser.png',
    fichaUrl: 'ficha-soldadora-ra.html',
    categoryUrl: 'soldadura-laser.html',
    name: 'Soldadora Láser RA (Refrigerada por Aire)',
    subtitle: 'Ultra-portátil, sin chiller de agua y libre de mantenimiento de fluidos',
    tag: 'Ultra Portátil',
    powerTag: '800W - 1500W',
    image: 'assets/images/lJQzwEZxzFYcHi5XNcZuS0V36o.jpg',
    description: 'Tecnología de última generación con disipación por aire forzado. Diseño compacto tipo maleta o torre delgada, ideal para talleres en sitio, montajes en obra y manufactura de alta movilidad.',
    specsPreview: [
      'Refrigeración 100% por aire, cero mangueras de agua externa',
      'Hasta 60% más compacta y ligera que los equipos con chiller',
      'Operación lista en segundos, ideal para mantenimientos en sitio',
      'Excelente estabilidad de arco en cordones finos y estéticos'
    ],
    fullSpecs: {
      modelos: 'RA-800 / RA-1200 / RA-1500',
      potencias: '800 W / 1200 W / 1500 W',
      longitudOnda: '1080 nm',
      longitudFibra: '5 a 8 metros',
      velocidadSoldadura: '0 - 100 mm/s',
      gasesAsistencia: 'Argón o Nitrógeno',
      enfriamiento: 'Aire forzado de alta eficiencia',
      voltaje: '220V Monofásico / Bifásico 60 Hz',
      espesores: [
        { material: 'Acero Inoxidable', mm: 'Hasta 3.0 mm (800W) / 4.0 mm (1500W)' },
        { material: 'Acero al Carbón', mm: 'Hasta 3.0 mm (800W) / 4.0 mm (1500W)' },
        { material: 'Aluminio', mm: 'Hasta 2.0 mm (800W) / 3.0 mm (1500W)' }
      ]
    }
  },
  {
    id: 'cortadora-4x10',
    category: 'corte',
    divisionName: 'DATA Laser',
    divisionLogo: 'assets/images/logo-data-laser.png',
    fichaUrl: 'ficha-cortadora-4x10.html',
    categoryUrl: 'corte-laser.html',
    name: 'Cortadora Láser de Cama Plana 4x10',
    subtitle: 'Velocidad, precisión y calidad de corte para lámina y placa industrial',
    tag: 'Corte CNC Industrial',
    powerTag: '1.5 kW - 12 kW',
    image: 'assets/images/cortadora-4x10-head.jpg',
    description: 'Mesa de trabajo para formato estándar de 4x10 pies (1500 x 3000 mm o superior). Estructura soldada de alta rigidez tratada térmicamente con pórtico de aluminio de aviación y servomotores de alta dinámica.',
    specsPreview: [
      'Área de trabajo efectiva: 1500 x 3000 mm (Formato 4x10)',
      'Cabezal con autofocus capacitivo y anticolisión',
      'Software CNC CypCut industrial con optimización de nesting',
      'Velocidad de posicionamiento: hasta 100 m/min con aceleración 1.2G'
    ],
    fullSpecs: {
      modelos: 'DATA-CUT 4x10 Pro',
      potencias: '1500W, 3000W, 6000W, hasta 12000W',
      areaCorte: '1500 mm x 3000 mm (Opción a 2000 x 4000 mm)',
      precisionPosicionamiento: '± 0.03 mm',
      precisionRepetitividad: '± 0.02 mm',
      velocidadMaxima: '100 m/min',
      fuenteLaser: 'Fibra óptica Maxphotonics / Raycus / IPG',
      cabezalCorte: 'Raytools / WSX con sensor de seguimiento de altura',
      gasesAsistencia: 'Oxígeno (placa gruesa), Nitrógeno (inoxidable sin rebaba), Aire seco',
      espesores: [
        { material: 'Acero al Carbón', mm: 'Hasta 16 mm (3kW) / 25 mm (6kW)' },
        { material: 'Acero Inoxidable', mm: 'Hasta 10 mm (3kW) / 16 mm (6kW)' },
        { material: 'Aluminio', mm: 'Hasta 8 mm (3kW) / 14 mm (6kW)' },
        { material: 'Latón y Cobre', mm: 'Hasta 5 mm (3kW) / 10 mm (6kW)' }
      ]
    }
  },
  {
    id: 'compresor-tornillo',
    category: 'compresores',
    divisionName: 'DATA CNC',
    divisionLogo: 'assets/images/logo-data-cnc.png',
    fichaUrl: 'ficha-compresor-tornillo.html',
    categoryUrl: 'compresores.html',
    name: 'Compresor de Tornillo Rotativo con Secador',
    subtitle: 'Aire industrial limpio y seco que impulsa la productividad 24/7',
    tag: 'Operación Continua',
    powerTag: '10 HP - 50 HP',
    image: 'assets/images/compresor-pipe.jpg',
    description: 'Diseñado específicamente para las exigencias de corte láser y líneas neumáticas pesadas. Entrega flujo de aire continuo libre de pulsaciones, humedad y condensados gracias a su secador refrigerativo integrado.',
    specsPreview: [
      'Módulo 4 en 1: Compresor + Tanque + Secador + Filtros coalescentes',
      'Motor eléctrico de alta eficiencia montado sobre aisladores de vibración',
      'Presión estable de 8 a 16 bar según requerimiento de corte con nitrógeno/aire',
      'Controlador digital inteligente con protección por sobrecarga'
    ],
    fullSpecs: {
      modelos: 'DT-15B / DT-20B / DT-30B Laser Series',
      potencias: '10 HP (7.5 kW) a 50 HP (37 kW)',
      presionTrabajo: '8 bar, 10 bar, hasta 16 bar alta presión para corte láser',
      caudalAire: '0.8 a 4.5 m³/min',
      sistemaFiltrado: 'Etapa dual de filtros coalescentes (0.01 micras) y separador de aceite',
      secadorAire: 'Refrigerativo integrado con punto de rocío de 2°C a 7°C',
      tanqueAlmacenamiento: '300 L / 500 L con válvula de purga automática',
      nivelRuido: '65 ± 2 dB(A) (Gabinete insonorizado)'
    }
  },
  {
    id: 'pintura-hornos',
    category: 'pintura',
    divisionName: 'DATA Flame',
    divisionLogo: 'assets/images/logo-data-flame.png',
    fichaUrl: 'ficha-data-flame.html',
    categoryUrl: 'data-flame.html',
    name: 'Sistema DATA FLAME: Pintura Electrostática y Hornos',
    subtitle: 'Acabados de alta resistencia y curado homogéneo a escala industrial',
    tag: 'Acabados Industriales',
    powerTag: 'Gas / Eléctrico',
    image: 'assets/images/pintura-electrostatica-main.png',
    description: 'Línea completa para aplicación de pintura electrostática en polvo y hornos de polimerización. Garantiza una cobertura uniforme sin escurrimientos, con máxima adherencia mecánica y resistencia a la corrosión.',
    specsPreview: [
      'Pistola electrostática con control de cascada de alto voltaje (100 kV)',
      'Cabina de aplicación con recuperación ciclónica o cartuchos de filtro',
      'Horno de polimerización con recirculación de aire caliente forzado',
      'Distribución térmica uniforme (± 3°C) para curado perfecto a 180°C - 200°C'
    ],
    fullSpecs: {
      modelos: 'Data Flame Cabina Serie C + Horno Serie H',
      tipoEnergia: 'Gas LP, Gas Natural o Resistencias Eléctricas modulares',
      dimensionesHorno: 'Desde 2.0 x 1.5 x 2.0 m hasta diseños personalizados a la medida',
      rangoTemperatura: '50°C a 250°C con pirómetro digital programable',
      aislamiento: 'Lana mineral de 100 mm de densidad industrial en paneles tipo sándwich',
      cabinaPintura: 'Acero galvanizado o acero inoxidable con ciclón recuperador de polvo 98%'
    }
  },
  {
    id: 'data-protect',
    category: 'soporte',
    divisionName: 'DATA CNC',
    divisionLogo: 'assets/images/logo-data-cnc.png',
    fichaUrl: 'respaldo-tecnico.html',
    categoryUrl: 'index.html#data-protect',
    name: 'DATA PROTECT: Soporte, Garantía y Refacciones',
    subtitle: 'Póliza integral de disponibilidad operativa para tu inversión',
    tag: 'Servicio y Garantía',
    powerTag: 'Cobertura Nacional',
    image: 'assets/images/K1y7125iksihX4WRKM3q1skpQ8.png',
    description: 'Programa oficial de respaldo técnico postventa para toda la república mexicana. Incluye técnicos certificados, refacciones originales en stock y visitas de calibración preventiva.',
    specsPreview: [
      '12 Meses de garantía total de fábrica en componentes clave',
      'Tiempo de respuesta técnica menor a 24 horas',
      'Inventario local en CDMX de consumibles: boquillas, lentes, cerámicas y antorchas',
      'Capacitación inicial presencial para tus operadores al momento de la entrega'
    ],
    fullSpecs: {
      modelos: 'DATA PROTECT Platinum / Gold',
      cobertura: 'República Mexicana con base operativa en CDMX',
      tiemposRespuesta: '< 2 horas soporte remoto / < 24 horas técnico en planta',
      capacitacion: 'Incluida en todos los equipos (operación, software y seguridad láser)',
      stockRefacciones: 'Bodega central con entrega inmediata en CDMX y envíos express al resto del país'
    }
  }
];

/* ==========================================================================
   Inicialización de Navegación y Header
   ========================================================================== */
function initNavigation() {
  const header = document.querySelector('.site-header');
  const toggleBtn = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  function setMenuOpen(isOpen) {
    if (!toggleBtn || !navMenu) return;
    navMenu.classList.toggle('open', isOpen);
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
    toggleBtn.setAttribute('aria-label', isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
    navMenu.inert = window.matchMedia('(max-width: 1100px)').matches && !isOpen;
  }

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      setMenuOpen(toggleBtn.getAttribute('aria-expanded') !== 'true');
    });

    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (!link.classList.contains('nav-dropdown-trigger')) setMenuOpen(false);
      });
    });

    document.addEventListener('click', event => {
      if (navMenu.classList.contains('open') && !navMenu.contains(event.target) && !toggleBtn.contains(event.target)) {
        setMenuOpen(false);
      }
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && navMenu.classList.contains('open')) {
        setMenuOpen(false);
        toggleBtn.focus();
      }
    });

    window.addEventListener('resize', () => {
      setMenuOpen(false);
    });
    setMenuOpen(false);
  }

  const dropdownItem = document.querySelector('.has-dropdown');
  const dropdownTrigger = document.querySelector('.nav-dropdown-trigger');
  const dropdownPanel = document.getElementById('equipos-mega-menu');
  function setDropdownOpen(open) {
    if (!dropdownItem || !dropdownTrigger || !dropdownPanel) return;
    dropdownItem.classList.toggle('mobile-open', open);
    dropdownPanel.classList.toggle('is-open', open);
    dropdownPanel.inert = !open;
    dropdownTrigger.setAttribute('aria-expanded', String(open));
  }
  if (dropdownTrigger && dropdownPanel) {
    setDropdownOpen(false);
    dropdownTrigger.addEventListener('click', () => setDropdownOpen(dropdownTrigger.getAttribute('aria-expanded') !== 'true'));
    dropdownTrigger.addEventListener('keydown', event => {
      if (event.key === 'ArrowDown') {
        event.preventDefault(); setDropdownOpen(true); dropdownPanel.querySelector('a')?.focus();
      }
    });
    document.addEventListener('click', event => { if (!dropdownItem.contains(event.target)) setDropdownOpen(false); });
    dropdownItem.addEventListener('focusout', event => { if (!dropdownItem.contains(event.relatedTarget)) setDropdownOpen(false); });
    dropdownItem.addEventListener('keydown', event => {
      if (event.key === 'Escape') { event.stopPropagation(); setDropdownOpen(false); dropdownTrigger.focus(); }
    });
    toggleBtn?.addEventListener('click', () => { if (!navMenu.classList.contains('open')) setDropdownOpen(false); });
    window.addEventListener('resize', () => setDropdownOpen(false));
  }

  if (header) {
    const links = [...document.querySelectorAll('.nav-link')];
    const sections = [...document.querySelectorAll('main section[id]')];
    const updateHeader = () => {
      header.classList.toggle('scrolled', window.scrollY > 40);
      const offset = header.offsetHeight + 100;
      const current = sections.filter(section => section.getBoundingClientRect().top <= offset).at(-1);
      const currentPath = window.location.pathname.split('/').pop() || 'index.html';
      links.forEach(link => {
        const linkPath = link.getAttribute('href')?.split('#')[0];
        const isCurrentPage = linkPath && (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html'));
        if (isCurrentPage) {
          link.classList.add('active');
          link.setAttribute('aria-current', 'page');
        } else if (sections.length > 0 && link.hash && link.hash !== '#') {
          const active = link.hash === `#${current?.id}`;
          link.classList.toggle('active', active);
        } else {
          link.classList.remove('active');
          link.removeAttribute('aria-current');
        }
      });
    };
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
  }
}

/* ==========================================================================
   Catálogo de Productos y Filtros
   ========================================================================== */
function initProductCatalog() {
  const grid = document.getElementById('products-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (!grid) return;

  function renderProducts(category = 'todos') {
    grid.innerHTML = '';
    const filtered = category === 'todos' 
      ? PRODUCTS_DATA 
      : PRODUCTS_DATA.filter(p => p.category === category);
    const count = document.getElementById('product-count');
    if (count) count.textContent = `${filtered.length} ${filtered.length === 1 ? 'solución disponible' : 'soluciones disponibles'} · Consulta los detalles de cada equipo`;

    if (category === 'todos') {
      grid.classList.add('products-bento-grid');
    } else {
      grid.classList.remove('products-bento-grid');
    }

    grid.classList.toggle('is-single-result', filtered.length === 1);
    filtered.forEach((product, idx) => {
      const card = document.createElement('article');
      card.className = 'product-card';
      card.setAttribute('data-category', product.category);

      // Asignar clases de Bento Grid asimétrico en vista completa
      if (category === 'todos') {
        if (product.id === 'soldadora-rl-3en1') {
          card.classList.add('bento-hero-item');
        } else if (product.id === 'cortadora-4x10') {
          card.classList.add('bento-tall-item');
        } else if (product.id === 'data-protect') {
          card.classList.add('bento-wide-item');
        } else {
          card.classList.add('bento-compact-item');
        }
      }

      const specsListHtml = product.specsPreview.slice(0, 3)
        .map(spec => `
          <li class="product-spec-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>${spec}</span>
          </li>
        `).join('');

      const divisionBadgeHtml = product.divisionLogo ? `
        <div class="card-division-badge" title="División ${product.divisionName}">
          <img src="${product.divisionLogo}" alt="${product.divisionName}">
          <span>${product.divisionName}</span>
        </div>
      ` : '';

      card.innerHTML = `
        <div class="product-thumb-wrapper">
          <span class="product-tag">${product.tag}</span>
          ${divisionBadgeHtml}
          <span class="product-power-tag">${product.powerTag}</span>
          <a href="${product.fichaUrl || '#'}" class="product-thumb-link" aria-label="Ver ficha de ${product.name}">
            <img class="product-thumb" src="${product.image}" alt="${product.name}" loading="lazy" />
          </a>
        </div>
        <div class="product-content">
          <h3 class="product-title"><a href="${product.fichaUrl || '#'}" style="color: inherit;">${product.name}</a></h3>
          <p class="product-desc">${product.subtitle}</p>
          <ul class="product-specs-list">
            ${specsListHtml}
          </ul>
          <div class="product-actions">
            <a href="${product.fichaUrl || '#'}" class="btn btn-secondary btn-ver-ficha" aria-label="Ver ficha técnica: ${product.name}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              Ficha técnica
            </a>
            <a href="https://wa.me/5215527753215?text=Hola%20DATA%20CNC%20MX,%20me%20interesa%20cotizar%20el%20equipo:%20${encodeURIComponent(product.name)}" target="_blank" rel="noopener" class="btn btn-primary" aria-label="Cotizar: ${product.name} en WhatsApp">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              Cotizar
            </a>
          </div>
        </div>
      `;

      grid.appendChild(card);
    });

    decorateProductCards();

    // Re-enlazar botones de ficha técnica
    grid.querySelectorAll('.btn-ficha').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-product-id');
        openFichaModal(id);
      });
    });
  }

  // Filtrado al hacer clic
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      const cat = btn.getAttribute('data-filter');
      renderProducts(cat);
    });
  });

  // Render inicial
  renderProducts('todos');
}

/* ==========================================================================
   Modales (Ficha Técnica y Agenda)
   ========================================================================== */
function openModal(modal, trigger) {
  if (!modal) return;
  modal._trigger = trigger || document.activeElement;
  modal.inert = false;
  modal.setAttribute('aria-hidden', 'false');
  modal._background = [...document.body.children].filter(element => element !== modal && !element.inert && element.tagName !== 'SCRIPT');
  modal._background.forEach(element => { element.inert = true; });
  modal.classList.add('active');
  document.body.classList.add('modal-open');
  modal.querySelector('.modal-close-btn, .lightbox-close-btn')?.focus();
}

function closeModal(modal) {
  if (!modal) return;
  modal.classList.remove('active');
  modal.inert = true;
  modal.setAttribute('aria-hidden', 'true');
  modal._background?.forEach(element => { element.inert = false; });
  if (!document.querySelector('.modal-overlay.active, .lightbox-modal.active')) {
    document.body.classList.remove('modal-open');
  }
  modal._trigger?.focus();
}

function initModals() {
  const overlayFicha = document.getElementById('modal-ficha');
  const closeFicha = document.getElementById('close-ficha-btn');
  const printFicha = document.getElementById('print-ficha-btn');

  if (closeFicha && overlayFicha) {
    closeFicha.addEventListener('click', () => closeModal(overlayFicha));
    overlayFicha.addEventListener('click', event => {
      if (event.target === overlayFicha) closeModal(overlayFicha);
    });
  }

  if (printFicha) printFicha.addEventListener('click', () => window.print());

  document.querySelectorAll('.modal-overlay, .lightbox-modal').forEach(modal => {
    modal.inert = true;
    modal.addEventListener('keydown', event => {
      if (event.key !== 'Tab') return;
      const items = modal.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled])');
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });
  });

  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    const activeModal = document.querySelector('.modal-overlay.active, .lightbox-modal.active');
    if (activeModal) closeModal(activeModal);
  });
}

function openFichaModal(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('modal-ficha');
  const title = document.getElementById('modal-ficha-title');
  const body = document.getElementById('modal-ficha-body');
  const waBtn = document.getElementById('modal-ficha-wa');

  title.textContent = `Ficha técnica: ${product.name}`;

  let espesoresRows = '';
  if (product.fullSpecs.espesores) {
    espesoresRows = product.fullSpecs.espesores.map(e => `
      <tr>
        <td><strong>${e.material}</strong></td>
        <td>${e.mm}</td>
      </tr>
    `).join('');
  }

  body.innerHTML = `
    <div class="ficha-intro">
      <div class="ficha-image">
        <img src="${product.image}" alt="${product.name}" style="width: 100%; height: auto; object-fit: contain;">
      </div>
      <div>
        <span style="color: var(--brand); font-weight: 700; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 0.1em;">${product.tag}</span>
        <h3 style="font-size: 1.5rem; margin: 0.3rem 0 0.8rem 0;">${product.name}</h3>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1rem;">${product.description}</p>
        <div class="ficha-tags">
          <span>
            POTENCIA: ${product.powerTag}
          </span>
          <span>
            GARANTÍA DATA PROTECT 1 AÑO
          </span>
        </div>
      </div>
    </div>

    <h4 style="margin-top: 1.5rem; margin-bottom: 0.75rem; font-size: 1.1rem;">1. Especificaciones operativas</h4>
    <div class="spec-table-container">
      <table class="spec-table">
        <tbody>
          <tr><th>Parámetro</th><th>Especificación Oficial DATA CNC</th></tr>
          ${product.fullSpecs.modelos ? `<tr><td>Modelos Disponibles</td><td>${product.fullSpecs.modelos}</td></tr>` : ''}
          ${product.fullSpecs.potencias ? `<tr><td>Rango de Potencia</td><td>${product.fullSpecs.potencias}</td></tr>` : ''}
          ${product.fullSpecs.longitudOnda ? `<tr><td>Longitud de Onda Láser</td><td>${product.fullSpecs.longitudOnda}</td></tr>` : ''}
          ${product.fullSpecs.areaCorte ? `<tr><td>Área de Trabajo</td><td>${product.fullSpecs.areaCorte}</td></tr>` : ''}
          ${product.fullSpecs.velocidadSoldadura ? `<tr><td>Velocidad Operativa</td><td>${product.fullSpecs.velocidadSoldadura}</td></tr>` : ''}
          ${product.fullSpecs.velocidadMaxima ? `<tr><td>Velocidad de Posicionamiento</td><td>${product.fullSpecs.velocidadMaxima}</td></tr>` : ''}
          ${product.fullSpecs.enfriamiento ? `<tr><td>Sistema de Enfriamiento</td><td>${product.fullSpecs.enfriamiento}</td></tr>` : ''}
          ${product.fullSpecs.gasesAsistencia ? `<tr><td>Gases de Asistencia</td><td>${product.fullSpecs.gasesAsistencia}</td></tr>` : ''}
          ${product.fullSpecs.voltaje ? `<tr><td>Alimentación Eléctrica</td><td>${product.fullSpecs.voltaje}</td></tr>` : ''}
          ${product.fullSpecs.presionTrabajo ? `<tr><td>Presión Nominal</td><td>${product.fullSpecs.presionTrabajo}</td></tr>` : ''}
          ${product.fullSpecs.caudalAire ? `<tr><td>Caudal de Aire</td><td>${product.fullSpecs.caudalAire}</td></tr>` : ''}
          ${product.fullSpecs.rangoTemperatura ? `<tr><td>Rango de Temperatura</td><td>${product.fullSpecs.rangoTemperatura}</td></tr>` : ''}
          ${product.fullSpecs.tiemposRespuesta ? `<tr><td>Soporte Técnico Especializado</td><td>${product.fullSpecs.tiemposRespuesta}</td></tr>` : ''}
        </tbody>
      </table>
    </div>

    ${espesoresRows ? `
      <h4 style="margin-top: 2rem; margin-bottom: 0.75rem; font-size: 1.1rem;">2. Capacidades de espesor por material</h4>
      <div class="spec-table-container">
        <table class="spec-table">
          <thead>
            <tr><th>Material Metálico</th><th>Espesor Recomendado de Penetración</th></tr>
          </thead>
          <tbody>
            ${espesoresRows}
          </tbody>
        </table>
      </div>
    ` : ''}

    <div style="margin-top: 2rem; padding: 1.25rem; background: var(--bg-sage); border-left: 4px solid var(--brand); border-radius: 4px;">
      <h5 style="color: var(--brand); font-size: 0.95rem; margin-bottom: 0.3rem;">Servicio Técnico y Entrega Inmediata</h5>
      <p style="font-size: 0.85rem; color: var(--text-muted); margin: 0;">
        Todos los equipos incluyen instalación en tu planta, capacitación a personal operativo y garantía respaldada por <strong>DATA PROTECT</strong> con centro de servicio técnico en Iztapalapa, Ciudad de México.
      </p>
    </div>
  `;

  if (waBtn) {
    waBtn.href = `https://wa.me/5215527753215?text=Hola%20DATA%20CNC%20MX,%20estoy%20viendo%20la%20Ficha%20Técnica%20de%20${encodeURIComponent(product.name)}%20y%20deseo%20una%20cotización%20formal.`;
  }

  openModal(modal, document.activeElement);
}

/* ==========================================================================
   Agendador de Demostraciones en Vivo
   ========================================================================== */
function initDemoScheduler() {
  // Soporte para formulario de demostración en página independiente demostracion.html
  const demoPageForm = document.getElementById('demo-page-form');
  if (demoPageForm) {
    const demoDate = document.getElementById('demo-date');
    if (demoDate) {
      demoDate.min = getShowroomDate();
      demoDate.addEventListener('focus', () => { demoDate.min = getShowroomDate(); });
    }
    demoPageForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('demo-name')?.value.trim();
      const phone = document.getElementById('demo-phone')?.value.trim();
      const machine = document.getElementById('demo-machine')?.value;
      const type = document.getElementById('demo-type')?.value;
      const date = document.getElementById('demo-date')?.value;

      const msg = `Hola DATA CNC MX, deseo agendar una demostración técnica:

` +
        `• Nombre: ${name}
` +
        `• Teléfono: ${phone}
` +
        `• Equipo: ${machine}
` +
        `• Modalidad: ${type}
` +
        `• Fecha tentativa: ${date}

` +
        `Solicito confirmación de horario y disponibilidad.`;

      const waUrl = `https://wa.me/5215527753215?text=${encodeURIComponent(msg)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      showToast('WhatsApp está listo con tu solicitud. Envíala para coordinar el horario.');
    });
  }

  const modal = document.getElementById('modal-demo');
  const openBtns = document.querySelectorAll('.btn-open-demo');
  const closeBtn = document.getElementById('close-demo-btn');
  const form = document.getElementById('demo-form');
  const dateInput = document.getElementById('demo_date');

  if (dateInput) {
    dateInput.min = getShowroomDate();
  }

  openBtns.forEach(btn => {
    btn.addEventListener('click', event => {
      event.preventDefault();
      openModal(modal, btn);
    });
  });

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => closeModal(modal));
    modal.addEventListener('click', event => {
      if (event.target === modal) closeModal(modal);
    });
  }

  if (form) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const nombre = form.elements.demo_name.value.trim();
      const telefono = form.elements.demo_phone.value.trim();
      const maquina = form.elements.demo_machine.value;
      const modalidad = form.elements.demo_type.value;
      const fecha = form.elements.demo_date.value || 'Por definir';
      const text = `Hola DATA CNC MX, deseo solicitar una demostración:\n- Nombre: ${nombre}\n- Teléfono: ${telefono}\n- Equipo: ${maquina}\n- Modalidad: ${modalidad}\n- Fecha tentativa: ${fecha}`;

      window.open(`https://wa.me/5215527753215?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
      showToast('WhatsApp está listo con tu solicitud. Envíala desde la conversación para confirmar el horario.');
    });
  }
}

/* ==========================================================================
   Formulario de Contacto y Cotización Principal
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('main-contact-form');
  if (!form) return;

  form.addEventListener('submit', event => {
    event.preventDefault();
    const nombre = form.elements.name ? form.elements.name.value.trim() : '';
    const empresa = form.elements.company ? form.elements.company.value.trim() : '';
    const email = form.elements.email ? form.elements.email.value.trim() : '';
    const phone = form.elements.phone ? form.elements.phone.value.trim() : '';
    const estado = form.elements.state ? (form.elements.state.value || 'Por definir') : 'Por definir';
    const maquina = form.elements.product_interest ? form.elements.product_interest.value : (form.elements.machine ? form.elements.machine.value : 'General');
    const mensaje = form.elements.message ? form.elements.message.value.trim() : 'Sin detalles adicionales';
    const text = `Hola DATA CNC MX, solicito una cotización desde la página web:\n- Nombre: ${nombre}${empresa ? '\n- Empresa: ' + empresa : ''}\n- Teléfono: ${phone}\n- Correo: ${email || 'No proporcionado'}\n- Estado: ${estado}\n- Equipo de interés: ${maquina}\n- Proyecto: ${mensaje}`;

    window.open(`https://wa.me/5215527753215?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
    showToast('WhatsApp está listo con tu solicitud. Envíala desde la conversación para contactar a ventas.');
  });
}

/* ==========================================================================
   Efectos de Scroll y Notificaciones Toast
   ========================================================================== */
function initScrollEffects() {
  // Smooth scroll para todos los enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        e.preventDefault();
        history.pushState(null, '', targetId);
        targetElem.setAttribute('tabindex', '-1');
        targetElem.focus({ preventScroll: true });
        targetElem.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
      }
    });
  });
}

function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    container.setAttribute('role', 'status');
    container.setAttribute('aria-live', 'polite');
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}


/* ==========================================================================
   Galería Interactiva Multimedia (Fotos, Video Operativo y Zoom Lightbox)
   ========================================================================== */
function initProductGallery() {
  const gallery = document.querySelector('.product-gallery');
  if (!gallery) return;

  const mainImg = document.getElementById('main-gallery-img');
  const mainVideo = document.getElementById('main-gallery-video');
  const badge = document.getElementById('gallery-media-type-badge');
  const zoomBtn = document.getElementById('gallery-zoom-btn');
  const thumbs = gallery.querySelectorAll('.gallery-thumb-btn');

  // Lightbox modal elements
  const lightbox = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close-btn');

  function switchMedia(btn) {
    thumbs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-pressed', 'false'); });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');

    const type = btn.getAttribute('data-type');
    let src = btn.getAttribute('data-src');
    if (type === 'video' && mainVideo && src.endsWith('.webm') && !mainVideo.canPlayType('video/webm')) {
      src = 'assets/images/laser_welding_h264.mp4';
    }
    const label = btn.querySelector('.thumb-label')?.textContent || '';

    if (type === 'video') {
      if (mainImg) mainImg.style.display = 'none';
      if (mainVideo) {
        mainVideo.hidden = false;
        mainVideo.style.display = 'block';
        if (mainVideo.src !== src && !mainVideo.src.endsWith(src)) {
          mainVideo.src = src;
        }
        mainVideo.load();
        mainVideo.play().catch(() => {});
      }
      if (badge) badge.textContent = label || 'Animación ilustrativa';
      if (zoomBtn) zoomBtn.style.display = 'none';
    } else {
      if (mainVideo) {
        mainVideo.pause();
        mainVideo.hidden = true;
        mainVideo.style.display = 'none';
      }
      if (mainImg) {
        mainImg.style.display = 'block';
        mainImg.src = src;
        const thumbImg = btn.querySelector('img');
        if (thumbImg) mainImg.alt = thumbImg.alt;
      }
      if (badge) badge.textContent = label ? `Vista: ${label}` : 'Fotografía de equipo';
      if (zoomBtn) zoomBtn.style.display = 'inline-flex';
    }
  }

  thumbs.forEach(btn => {
    btn.addEventListener('click', () => switchMedia(btn));
  });

  // Lightbox Zoom Logic
  function openLightbox(src, alt) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt || 'Imagen ampliada de equipo';
    openModal(lightbox, zoomBtn);
  }

  function closeLightbox() {
    closeModal(lightbox);
  }

  if (zoomBtn) {
    zoomBtn.addEventListener('click', () => {
      if (mainImg && mainImg.style.display !== 'none') {
        openLightbox(mainImg.src, mainImg.alt);
      }
    });
  }

  if (mainImg) {
    mainImg.addEventListener('click', () => {
      openLightbox(mainImg.src, mainImg.alt);
    });
  }

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });
  }
}

const FORM_PRODUCT_VALUES = {
 'soldadora-rl-3en1': ['Soldadora Láser 3 en 1 RL', 'Soldadora Láser 3 en 1 RL (1500W - 3000W)'],
 'soldadora-ra-aire': ['Soldadora Láser RA Portátil', 'Soldadora Láser RA Portátil (800W - 1500W)'],
 'cortadora-4x10': ['Cortadora Láser 4x10', 'Cortadora Láser Cama Plana 4x10 (1.5 kW - 12 kW)'],
 'compresor-tornillo': ['Compresor de Tornillo', 'Compresor de Tornillo Rotativo (10 - 50 HP)'],
 'pintura-hornos': ['Línea DATA FLAME', 'Sistema DATA FLAME Pintura y Horno'],
 'data-protect': ['', 'Consumibles y Póliza DATA PROTECT']
};
function getShowroomDate(now = new Date()) {
 const parts = new Intl.DateTimeFormat('en-US', {timeZone:'America/Mexico_City',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(now);
 const value = type => parts.find(p => p.type === type).value;
 return `${value('year')}-${value('month')}-${value('day')}`;
}
function initProductJourney() {
 const currentProduct = PRODUCTS_DATA.find(p => p.fichaUrl === location.pathname.split('/').pop());
 if (currentProduct && currentProduct.fichaUrl.startsWith('ficha-')) {
  const demoUrl = `demostracion.html?equipo=${encodeURIComponent(currentProduct.id)}#demo-page-form`;
  document.querySelectorAll('a[href="contacto.html"]').forEach(a => { a.href = `contacto.html?equipo=${encodeURIComponent(currentProduct.id)}#main-contact-form`; });
  document.querySelectorAll('a[href="contacto.html"]').forEach(a => { a.href = `contacto.html?equipo=${encodeURIComponent(currentProduct.id)}#main-contact-form`; });
  document.querySelectorAll('a[href="contacto.html"]').forEach(a => { a.href = `contacto.html?equipo=${encodeURIComponent(currentProduct.id)}#main-contact-form`; });
  document.querySelectorAll('a[href="demostracion.html"], a[href="index.html#demostracion"]').forEach(a => { a.href = demoUrl; });
  if (!document.querySelector('.mobile-product-actions')) {
   const nav = document.createElement('nav'); nav.className='mobile-product-actions'; nav.setAttribute('aria-label',`Acciones para ${currentProduct.name}`);
   const quote = document.createElement('a'); quote.className='btn btn-primary'; quote.textContent='Cotizar equipo'; quote.target='_blank'; quote.rel='noopener'; quote.href=`https://wa.me/5215527753215?text=${encodeURIComponent('Hola DATA CNC MX, me interesa cotizar '+currentProduct.name)}`;
   const demo = document.createElement('a'); demo.className='btn btn-secondary'; demo.textContent='Solicitar demo'; demo.href=demoUrl;
   nav.append(quote,demo); document.querySelector('main').after(nav); document.body.classList.add('has-product-actions');
  }
 }
 const product = FORM_PRODUCT_VALUES[new URLSearchParams(location.search).get('equipo')];
 if (product) {
  const demo = document.getElementById('demo-machine');
  const contact = document.getElementById('product_interest');
  if (demo) demo.value = product[0];
  if (contact) contact.value = product[1];
 }
 const title = document.getElementById('calc-result-title');
 title?.setAttribute('aria-live', 'polite');
}
function decorateProductCards() {
 document.querySelectorAll('.product-card').forEach(card => {
  if (card.querySelector('.product-quick-facts')) return;
  const link = card.querySelector('a[href^="ficha-"], a[href="respaldo-tecnico.html"]');
  const product = PRODUCTS_DATA.find(p => p.fichaUrl === link?.getAttribute('href'));
  const content = card.querySelector('.product-content');
  if (!content) return;
  const labels = document.createElement('div'); labels.className = 'product-labels';
  card.querySelectorAll('.product-tag, .card-division-badge, .product-power-tag').forEach(tag => labels.appendChild(tag));
  content.prepend(labels);
  if (!product) return;
  const application = {soldadura:'Soldadura',corte:'Corte de lámina',compresores:'Aire industrial',pintura:'Pintura y curado',soporte:'Servicio técnico'}[product.category];
  const specs = product.fullSpecs;
  const system = specs.enfriamiento || specs.secadorAire || specs.fuenteLaser || specs.tipoEnergia || 'Respaldo y refacciones';
  const facts = [['Configuración',product.powerTag],['Aplicación',application],['Sistema',system],['Alimentación',specs.voltaje || specs.tipoEnergia || (product.category === 'soporte' ? 'No aplica' : 'Consultar por modelo')]];
  const dl = document.createElement('dl'); dl.className = 'product-quick-facts';
  facts.forEach(([label,value]) => { const row = document.createElement('div'); const dt = document.createElement('dt'); const dd = document.createElement('dd'); dt.textContent=label; dd.textContent=value; row.append(dt,dd); dl.appendChild(row); });
  content.querySelector('.product-desc')?.after(dl);
 });
}
