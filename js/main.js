
// ==========================================================================
// Fase 2: Control de Video Hero y Contadores Numéricos Dinámicos
// ==========================================================================
function initHeroVideo() {
  const video = document.getElementById('hero-loop-video');
  const toggleBtn = document.getElementById('hero-video-toggle');
  if (!video || !toggleBtn) return;

  const pauseIcon = toggleBtn.querySelector('.pause-icon');
  const playIcon = toggleBtn.querySelector('.play-icon');

  toggleBtn.addEventListener('click', function() {
    if (video.paused) {
      video.play();
      if (pauseIcon) pauseIcon.style.display = 'block';
      if (playIcon) playIcon.style.display = 'none';
      toggleBtn.setAttribute('aria-label', 'Pausar video operativo');
    } else {
      video.pause();
      if (pauseIcon) pauseIcon.style.display = 'none';
      if (playIcon) playIcon.style.display = 'block';
      toggleBtn.setAttribute('aria-label', 'Reanudar video operativo');
    }
  });

  // Asegurar reproducción en móviles tras interacción inicial
  document.addEventListener('touchstart', function playOnce() {
    if (video.paused) {
      video.play().catch(function() {});
    }
    document.removeEventListener('touchstart', playOnce);
  }, { passive: true });
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
  initNavigation();
  initProductCatalog();
  initModals();
  initProductGallery();
  initContactForm();
  initDemoScheduler();
  initScrollEffects();
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
    image: 'assets/images/soldadora-rl-main.png',
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
    image: 'assets/images/soldadora-ra-main.jpg',
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
    image: 'assets/images/cortadora-4x10-main.png',
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
    image: 'assets/images/compresor-tornillo-main.png',
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
    fichaUrl: 'index.html#data-protect',
    categoryUrl: 'index.html#data-protect',
    name: 'DATA PROTECT: Soporte, Garantía y Refacciones',
    subtitle: 'Póliza integral de disponibilidad operativa para tu inversión',
    tag: 'Servicio y Garantía',
    powerTag: 'Cobertura Nacional',
    image: 'assets/images/hero-machine.png',
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
      link.addEventListener('click', () => setMenuOpen(false));
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

  // Mega-Menú Desplegable (Móvil y Escritorio)
  const dropdownItem = document.querySelector('.has-dropdown');
  const dropdownTrigger = document.querySelector('.nav-dropdown-trigger');
  if (dropdownItem && dropdownTrigger) {
    dropdownTrigger.addEventListener('click', (e) => {
      const isMobile = window.matchMedia('(max-width: 1100px)').matches;
      if (isMobile) {
        e.preventDefault();
        const isOpen = dropdownItem.classList.contains('mobile-open');
        dropdownItem.classList.toggle('mobile-open', !isOpen);
        dropdownTrigger.setAttribute('aria-expanded', String(!isOpen));
      }
    });

    document.addEventListener('click', (e) => {
      if (!dropdownItem.contains(e.target)) {
        dropdownItem.classList.remove('mobile-open');
        dropdownTrigger.setAttribute('aria-expanded', 'false');
      }
    });
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

    filtered.forEach(product => {
      const card = document.createElement('article');
      card.className = 'product-card';
      card.setAttribute('data-category', product.category);

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
  modal.querySelector('.modal-close-btn')?.focus();
}

function closeModal(modal) {
  if (!modal) return;
  modal.classList.remove('active');
  modal.inert = true;
  modal.setAttribute('aria-hidden', 'true');
  modal._background?.forEach(element => { element.inert = false; });
  if (!document.querySelector('.modal-overlay.active')) {
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

  document.querySelectorAll('.modal-overlay').forEach(modal => {
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
    const activeModal = document.querySelector('.modal-overlay.active');
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
      demoDate.min = new Date().toISOString().split('T')[0];
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
      showToast('Redirigiendo a WhatsApp para confirmar tu demostración...');
    });
  }

  const modal = document.getElementById('modal-demo');
  const openBtns = document.querySelectorAll('.btn-open-demo');
  const closeBtn = document.getElementById('close-demo-btn');
  const form = document.getElementById('demo-form');
  const dateInput = document.getElementById('demo_date');

  if (dateInput) {
    const today = new Date();
    const localDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
    dateInput.min = localDate;
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
    const nombre = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const phone = form.elements.phone.value.trim();
    const estado = form.elements.state.value;
    const maquina = form.elements.machine.value;
    const mensaje = form.elements.message.value.trim() || 'Sin detalles adicionales';
    const text = `Hola DATA CNC MX, solicito una cotización desde la página web:\n- Nombre: ${nombre}\n- Teléfono: ${phone}\n- Correo: ${email || 'No proporcionado'}\n- Estado: ${estado}\n- Equipo de interés: ${maquina}\n- Proyecto: ${mensaje}`;

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
    thumbs.forEach(t => t.classList.remove('active'));
    btn.classList.add('active');

    const type = btn.getAttribute('data-type');
    const src = btn.getAttribute('data-src');
    const label = btn.querySelector('.thumb-label')?.textContent || '';

    if (type === 'video') {
      if (mainImg) mainImg.style.display = 'none';
      if (mainVideo) {
        mainVideo.style.display = 'block';
        if (mainVideo.src !== src && !mainVideo.src.endsWith(src)) {
          mainVideo.src = src;
        }
        mainVideo.load();
        mainVideo.play().catch(() => {});
      }
      if (badge) badge.textContent = 'Demostración en video';
      if (zoomBtn) zoomBtn.style.display = 'none';
    } else {
      if (mainVideo) {
        mainVideo.pause();
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
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    lightboxClose?.focus();
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    zoomBtn?.focus();
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
