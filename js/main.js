
function getCurrentLang() {
  return document.documentElement.getAttribute('data-lang') === 'en' ? 'en' : 'es';
}

const EN_HOME_I18N = {
  'skip.link': 'Skip to content',
  'nav.equipment': 'Equipment',
  'mega.laser.tag': 'Fiber Optic',
  'mega.weld.title': 'Laser Welders',
  'mega.weld.desc': '3-in-1 RL (Chiller) & Portable RA (Air)',
  'mega.cut.title': 'Flatbed Laser Cutting',
  'mega.cut.desc': '4x10 Table (1500 x 3000 mm / 1.5 to 12 kW)',
  'mega.cnc.tag': 'Control & Power',
  'mega.comp.title': 'Screw Air Compressors',
  'mega.comp.desc': '10 - 50 HP with 24/7 refrigerated dryer',
  'mega.all.title': 'Full Catalog',
  'mega.all.desc': 'Explore all product lines and models',
  'mega.flame.tag': 'Thermal Finishing',
  'mega.paint.title': 'Powder Coating & Ovens',
  'mega.paint.desc': 'Electrostatic booths & 250°C curing ovens',
  'mega.featured.badge': 'CDMX Showroom',
  'mega.featured.title': 'Test equipment live',
  'mega.featured.desc': 'Bring your own materials to Iztapalapa and test welding, cutting, and finishing in real time.',
  'mega.featured.cta': 'Book a demo',
  'nav.support': 'Technical Support',
  'nav.demo': 'Live Demo',
  'nav.about': 'About Us',
  'nav.contact': 'Contact',
  'nav.mobileCta': 'Request Quote',
  'nav.quote': 'Quote',
  'hero.spec.power': 'Power',
  'hero.spec.config': 'Configuration',
  'hero.spec.warrantyLabel': 'Support',
  'hero.spec.warrantyValue': '12-month warranty · Support < 24h',
  'hero.demoCta': 'Book a live demo',
  'hero.g1': '12-month factory warranty',
  'hero.g2': 'Local technical support',
  'hero.g3': 'On-site operator training',
  'hero.tab.0': 'RL Welder',
  'hero.tab.1': '4×10 Cutter',
  'hero.tab.2': 'RA Welder',
  'hero.tab.3': '16 bar Compressor',
  'hero.tab.4': 'DATA Flame',
  'stats.installed': 'MACHINES INSTALLED',
  'stats.uptime': 'OPERATIONAL UPTIME',
  'stats.response': 'SUPPORT RESPONSE TIME',
  'catalog.title': 'One solution for every process.',
  'catalog.filter.all': 'All equipment',
  'catalog.filter.weld': 'Laser welding',
  'catalog.filter.cut': 'Laser cutting',
  'catalog.filter.comp': 'Compressors',
  'catalog.filter.paint': 'Coating & ovens',
  'catalog.filter.protect': 'Data Protect',
  'compare.subtitle': 'Shop-floor performance',
  'compare.title': 'Why fiber laser welding replaces MIG & TIG',
  'compare.desc': 'Less rework, minimal heat distortion, and continuous feed with an automatic wire feeder.',
  'compare.col.metric': 'Metric',
  'compare.col.laser': 'DATA Laser',
  'compare.r1.criterion': 'Travel speed',
  'compare.r1.laser': 'Up to 5× faster',
  'compare.r2.criterion': 'Finish & post-processing',
  'compare.r2.trad': 'Grinding & polishing',
  'compare.r2.laser': 'Clean seam, zero slag',
  'compare.r3.criterion': 'Thermal distortion',
  'compare.r3.trad': 'Large heat-affected zone',
  'compare.r3.laser': 'Minimal distortion',
  'compare.r4.criterion': 'Wire feeding',
  'compare.r4.trad': 'Manual trigger feed',
  'compare.r4.laser': 'Constant automatic feed',
  'compare.lineLink': 'View RL & RA models →',
  'compare.p2.title': 'Real shop-floor testing',
  'compare.p2.desc': 'Evaluate weld seams on your own parts at our Iztapalapa showroom.',
  'compare.cta': 'Request a demo',
  'calc.subtitle': 'Decision tools',
  'calc.title': 'Parameter Calculator: Material, Thickness & Speed',
  'calc.step1': '1. Laser Process',
  'calc.mode.weld': 'Handheld Welding (RL / RA Series)',
  'calc.mode.cut': '4×10 CNC Cutting (Flatbed)',
  'calc.step2': '2. Material',
  'calc.mat.inox': 'Stainless Steel',
  'calc.mat.carbon': 'Carbon Steel',
  'calc.mat.carbonSub': 'A36 / Gauges',
  'calc.mat.alu': 'Aluminum',
  'calc.mat.brass': 'Brass & Copper',
  'calc.mat.brassSub': 'Alloys',
  'calc.step3': '3. Thickness:',
  'calc.res.powerLabel': 'Recommended power',
  'calc.res.gasLabel': 'Assist Gas',
  'calc.res.pressureLabel': 'Working Pressure',
  'calc.cta': 'Quote Machine for this Gauge',
  'calc.disclaimer': 'Reference values based on alloy grade and required finish.',
  'cov.subtitle': 'On-site engineering support',
  'cov.title': 'Nationwide Coverage & Arrival Times in Mexico',
  'cov.desc': 'Our central warehouse and technical lab in Iztapalapa, CDMX supply spare parts and guarantee on-site response with in-house engineers so your production never stops.',
  'cov.tab.vm': 'CDMX & Metro Area',
  'cov.tab.bc': 'Bajío & Central',
  'cov.tab.no': 'North & West',
  'cov.cityLabel': 'Selected city',
  'cov.arrivalLabel': 'On-site plant arrival',
  'cov.remoteLabel': 'Remote diagnostics',
  'cov.engineersLabel': 'Active engineers',
  'cov.warranty.title': '12-month factory warranty',
  'cov.warranty.desc': 'Direct coverage on fiber laser sources, chillers, and CNC controllers with no middlemen.',
  'cov.cta': 'Check Technician Availability',
  'cov.map.title': 'DATA CNC Support Network',
  'cov.map.country': 'Mexico',
  'cov.stock.title': 'Central warehouse · Iztapalapa, CDMX',
  'cov.stock.desc': 'Spare parts & consumables ready for nationwide shipping.',
  'cons.subtitle': 'Permanent stock in CDMX',
  'cons.title': 'Original Consumables & Spare Parts Kit',
  'cons.bannerDesc': 'Copper nozzles, sealed lenses & protective windows, ceramics, laser goggles, Raycus/Max sources, and chillers with immediate nationwide shipping.',
  'cons.cta': 'DATA PROTECT Plan →',
  'partners.label': 'Brands & components:',
  'partners.heads': 'Raytools / WSX Laser Heads',
  'partners.ctrl': 'CypCut CNC Control',
  'qq.aria': 'Quick quote request',
  'qq.subtitle': 'Direct engineering advice',
  'qq.title': 'Get a technical quote for your shop',
  'qq.desc': 'Tell us which machine or thickness you need and we will send datasheets, lead times, and commissioning options in Mexico.',
  'qq.b1': 'No-obligation engineering consultation',
  'qq.b2': 'On-site or video-call testing in CDMX',
  'qq.b3': 'Mexican invoicing & on-site operator training',
  'qq.form.nameLabel': 'Full name *',
  'qq.form.phoneLabel': 'WhatsApp or phone *',
  'qq.form.machineLabel': 'Equipment of interest',
  'qq.opt.rl': '3-in-1 Laser Welder RL',
  'qq.opt.cut': '4×10 Flatbed Laser Cutter',
  'qq.opt.ra': 'Portable Laser Welder RA',
  'qq.opt.comp': 'Screw Compressor 15 kW · 16 bar',
  'qq.opt.flame': 'Powder Coating & Curing Ovens',
  'qq.opt.protect': 'Consumables Kit / DATA PROTECT',
  'qq.form.stateLabel': 'State / City',
  'qq.form.submit': 'Send request via WhatsApp',
  'footer.desc': 'Leaders in import, sales, commissioning, and preventive/corrective maintenance of industrial laser and CNC machinery in Mexico.',
  'footer.cert': 'Official DATA PROTECT Plan: Factory warranty and parts stocked in Mexico.',
  'footer.col1': 'Divisions',
  'footer.col1.l1': 'DATA Laser · 3-in-1 Welders',
  'footer.col1.l2': 'DATA Laser · 4x10 Flatbed Cutting',
  'footer.col1.l3': 'DATA CNC · Screw Compressors',
  'footer.col1.l4': 'DATA Flame · Coating & Ovens',
  'footer.col1.l5': 'Full Equipment Catalog',
  'footer.col2': 'Support & Demos',
  'footer.col2.l1': 'Book a Live Demo',
  'footer.col2.l2': 'DATA PROTECT Service Plan',
  'footer.col2.l3': 'CDMX Showroom & Workshop',
  'footer.col2.l4': 'Contact & Quotes',
  'footer.col3': 'Support & Showroom',
  'footer.copy': '© 2026 DATA CNC MX. All rights reserved. Industrial laser equipment backed by guaranteed support in Mexico.',
  'footer.b1': 'Home',
  'footer.b2': 'Equipment',
  'footer.b3': 'Technical Support',
  'footer.b4': 'Contact',
  'wa.tooltip': 'Chat on WhatsApp'
};

const EN_HOME_HTML_I18N = {
  'footer.phone': '<strong>Phone:</strong> <a href="tel:+525527753215">+52 55 2775 3215</a>',
  'footer.email': '<strong>Email:</strong> <a href="mailto:ventas@datacncmx.com">ventas@datacncmx.com</a>',
  'footer.address': '<strong>Address:</strong> C. José María de Joaristi 235, San Juan, Iztapalapa, C.P. 09830, CDMX'
};

const EN_HOME_ATTR_I18N = {
  placeholder: {
    'qq.form.namePh': 'e.g. Carlos Perez',
    'qq.form.statePh': 'e.g. CDMX, Queretaro, MTY'
  },
  title: {
    'nav.phoneTitle': 'Direct call'
  },
  aria: {
    'nav.brandAria': 'DATA CNC MX - Go to homepage',
    'nav.menuAria': 'Main menu',
    'nav.megaAria': 'Equipment catalog and divisions',
    'nav.themeAria': 'Switch between light and dark theme',
    'nav.menuToggleOpen': 'Open navigation menu',
    'hero.specsAria': 'Equipment specifications',
    'hero.controlsAria': 'Carousel controls',
    'hero.prevAria': 'Previous equipment',
    'hero.nextAria': 'Next equipment',
    'hero.dockAria': 'Select featured equipment',
    'stats.aria': 'DATA CNC performance metrics',
    'catalog.filterAria': 'Filter by category',
    'compare.aria': 'MIG/TIG vs. DATA Laser Welding comparison',
    'calc.aria': 'Interactive laser welding and cutting parameter calculator',
    'calc.sliderAria': 'Select gauge or thickness',
    'calc.ticksAria': 'Thickness presets',
    'cov.aria': 'Technical service and spare parts coverage in Mexico',
    'partners.aria': 'Integrated brands and components',
    'qq.aria': 'Quick quote request',
    'wa.aria': 'Contact DATA CNC MX on WhatsApp',
    'lightbox.aria': 'High-resolution image viewer',
    'lightbox.closeAria': 'Close zoomed view'
  }
};

function initLanguageToggle() {
  const toggleBtn = document.getElementById('lang-toggle');
  if (!toggleBtn) return;

  const textCache = new Map();
  const htmlCache = new Map();
  const attrCache = { placeholder: new Map(), title: new Map(), aria: new Map() };
  const origDocTitle = document.title;
  const waBtn = document.querySelector('.floating-whatsapp');
  const origWaHref = waBtn?.getAttribute('href') || '';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key && !textCache.has(key)) textCache.set(key, el.textContent);
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (key && !htmlCache.has(key)) htmlCache.set(key, el.innerHTML);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (key) attrCache.placeholder.set(el, el.getAttribute('placeholder') || '');
  });
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (key) attrCache.title.set(el, el.getAttribute('title') || '');
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (key) attrCache.aria.set(el, el.getAttribute('aria-label') || '');
  });

  function applyLanguage(lang, { persist = true, notify = true } = {}) {
    const isEn = lang === 'en';
    document.documentElement.setAttribute('data-lang', isEn ? 'en' : 'es');
    document.documentElement.lang = isEn ? 'en' : 'es-MX';
    document.title = isEn
      ? 'DATA CNC MX | Industrial CNC Laser Machinery Sales & Support in Mexico'
      : origDocTitle;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (!key) return;
      el.textContent = isEn ? (EN_HOME_I18N[key] ?? textCache.get(key) ?? '') : (textCache.get(key) ?? '');
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (!key) return;
      el.innerHTML = isEn ? (EN_HOME_HTML_I18N[key] ?? htmlCache.get(key) ?? '') : (htmlCache.get(key) ?? '');
    });

    attrCache.placeholder.forEach((orig, el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.setAttribute('placeholder', isEn ? (EN_HOME_ATTR_I18N.placeholder[key] ?? orig) : orig);
    });
    attrCache.title.forEach((orig, el) => {
      const key = el.getAttribute('data-i18n-title');
      el.setAttribute('title', isEn ? (EN_HOME_ATTR_I18N.title[key] ?? orig) : orig);
    });
    attrCache.aria.forEach((orig, el) => {
      const key = el.getAttribute('data-i18n-aria');
      el.setAttribute('aria-label', isEn ? (EN_HOME_ATTR_I18N.aria[key] ?? orig) : orig);
    });

    document.querySelectorAll('.stat-number[data-suffix-en]').forEach(el => {
      const nextSuffix = isEn ? el.getAttribute('data-suffix-en') : el.getAttribute('data-suffix-es');
      if (nextSuffix !== null) {
        el.setAttribute('data-suffix', nextSuffix);
        const prefix = el.getAttribute('data-prefix') || '';
        const target = el.getAttribute('data-target') || '';
        el.textContent = prefix + target + nextSuffix;
      }
    });

    if (waBtn) {
      waBtn.setAttribute(
        'href',
        isEn
          ? 'https://wa.me/5215527753215?text=Hello%20DATA%20CNC%20MX%2C%20I%20would%20like%20tailored%20technical%20advice.'
          : origWaHref
      );
    }

    toggleBtn.querySelectorAll('.lang-toggle-option').forEach(opt => {
      opt.classList.toggle('is-active', opt.getAttribute('data-lang-option') === (isEn ? 'en' : 'es'));
    });
    toggleBtn.setAttribute('aria-pressed', String(isEn));
    toggleBtn.setAttribute('aria-label', isEn ? 'Cambiar idioma a español' : 'Switch language to English');
    toggleBtn.setAttribute('title', isEn ? 'Cambiar a Español' : 'Switch to English');

    if (persist) {
      try {
        localStorage.setItem('datacnc-lang', isEn ? 'en' : 'es');
      } catch (e) {}
    }

    if (notify) {
      document.dispatchEvent(new CustomEvent('datacnc:langchange', { detail: { lang: isEn ? 'en' : 'es' } }));
    }
  }

  let initialLang = 'es';
  try {
    initialLang = localStorage.getItem('datacnc-lang') === 'en' ? 'en' : getCurrentLang();
  } catch (e) {
    initialLang = getCurrentLang();
  }
  applyLanguage(initialLang, { persist: false, notify: false });

  toggleBtn.addEventListener('click', () => {
    const next = getCurrentLang() === 'en' ? 'es' : 'en';
    applyLanguage(next, { persist: true, notify: true });
  });
}

// ==========================================================================
// Control de Acordeón Móvil para Mega-Menú
// ==========================================================================
// ==========================================================================
// Fase 4: Calculadora Dinámica de Parámetros B2B
// ==========================================================================
const TECH_CALC_MATRIX = {
  soldadura: {
    steps: ['0.5', '1.0', '2.0', '3.0', '4.0', '6.0'],
    speedLabel: 'Velocidad de Avance',
    extraLabel: 'Alambre Sugerido',
    materials: {
      'acero-inox': {
        name: 'Acero Inoxidable (304 / 316)',
        speeds: {
          '0.5': { power: '1500W', speed: '5.5 m/min', gas: 'Nitrógeno (N2)', pressure: '12 - 14 bar', extra: '0.8 mm' },
          '1.0': { power: '1500W - 2000W', speed: '4.2 m/min', gas: 'Nitrógeno (N2)', pressure: '12 - 14 bar', extra: '0.8 - 1.0 mm' },
          '2.0': { power: '2000W', speed: '2.8 m/min', gas: 'Nitrógeno (N2)', pressure: '14 bar', extra: '1.0 mm' },
          '3.0': { power: '2000W - 3000W', speed: '1.8 m/min', gas: 'Nitrógeno (N2)', pressure: '14 - 16 bar', extra: '1.2 mm' },
          '4.0': { power: '3000W', speed: '1.2 m/min', gas: 'Nitrógeno (N2)', pressure: '16 bar', extra: '1.2 mm' },
          '6.0': { power: '3000W (Biselado)', speed: '0.8 m/min', gas: 'Nitrógeno (N2)', pressure: '16 bar', extra: '1.2 mm' }
        }
      },
      'acero-carbon': {
        name: 'Acero al Carbón (A36 / Calibres)',
        speeds: {
          '0.5': { power: '1500W', speed: '6.0 m/min', gas: 'Aire Seco o Argón', pressure: '10 - 12 bar', extra: '0.8 mm' },
          '1.0': { power: '1500W', speed: '4.8 m/min', gas: 'Aire Seco o Argón', pressure: '12 bar', extra: '0.8 mm' },
          '2.0': { power: '2000W', speed: '3.2 m/min', gas: 'Aire Seco o Argón', pressure: '12 - 14 bar', extra: '1.0 mm' },
          '3.0': { power: '2000W - 3000W', speed: '2.1 m/min', gas: 'Nitrógeno o Argón', pressure: '14 bar', extra: '1.2 mm' },
          '4.0': { power: '3000W', speed: '1.4 m/min', gas: 'Argón puro', pressure: '14 bar', extra: '1.2 mm' },
          '6.0': { power: '3000W (Doble pase)', speed: '0.9 m/min', gas: 'Argón puro', pressure: '15 bar', extra: '1.2 mm' }
        }
      },
      'aluminio': {
        name: 'Aluminio (Serie 5000 / 6000)',
        speeds: {
          '0.5': { power: '1500W', speed: '4.5 m/min', gas: 'Argón puro 99.99%', pressure: '14 bar', extra: '1.0 mm' },
          '1.0': { power: '2000W', speed: '3.5 m/min', gas: 'Argón puro 99.99%', pressure: '14 bar', extra: '1.0 mm' },
          '2.0': { power: '2000W - 3000W', speed: '2.2 m/min', gas: 'Argón puro 99.99%', pressure: '15 bar', extra: '1.2 mm' },
          '3.0': { power: '3000W', speed: '1.4 m/min', gas: 'Argón puro 99.99%', pressure: '16 bar', extra: '1.2 mm' },
          '4.0': { power: '3000W (Biselado)', speed: '0.9 m/min', gas: 'Argón puro 99.99%', pressure: '16 bar', extra: '1.2 mm' },
          '6.0': { power: '3000W (Precalentado)', speed: '0.6 m/min', gas: 'Argón puro', pressure: '16 bar', extra: '1.2 mm' }
        }
      },
      'cobre-laton': {
        name: 'Latón y Cobre electrolítico',
        speeds: {
          '0.5': { power: '2000W', speed: '4.0 m/min', gas: 'Argón o Nitrógeno', pressure: '14 bar', extra: '0.8 mm' },
          '1.0': { power: '2000W - 3000W', speed: '2.6 m/min', gas: 'Argón puro', pressure: '15 bar', extra: '1.0 mm' },
          '2.0': { power: '3000W', speed: '1.6 m/min', gas: 'Argón puro', pressure: '16 bar', extra: '1.0 mm' },
          '3.0': { power: '3000W', speed: '1.0 m/min', gas: 'Argón puro', pressure: '16 bar', extra: '1.2 mm' },
          '4.0': { power: '3000W (Potencia máx)', speed: '0.7 m/min', gas: 'Argón puro', pressure: '16 bar', extra: '1.2 mm' },
          '6.0': { power: 'Consultar ingeniería DATA', speed: '0.4 m/min', gas: 'Argón puro', pressure: '16 bar', extra: '1.2 mm' }
        }
      }
    }
  },
  corte: {
    steps: ['1.0', '3.0', '6.0', '10', '12', '16'],
    speedLabel: 'Velocidad de Corte',
    extraLabel: 'Boquilla Sugerida',
    materials: {
      'acero-inox': {
        name: 'Acero Inoxidable (304 / 316)',
        speeds: {
          '1.0': { power: '1.5 kW', speed: '22 – 28 m/min', gas: 'Nitrógeno / Aire 16 bar', pressure: '14 - 16 bar', extra: 'Doble / Simple 1.5 mm' },
          '3.0': { power: '3.0 kW', speed: '7.5 – 10 m/min', gas: 'Nitrógeno (N2)', pressure: '15 - 16 bar', extra: 'Simple 2.0 mm' },
          '6.0': { power: '3.0 kW - 6.0 kW', speed: '3.0 – 5.2 m/min', gas: 'Nitrógeno (N2)', pressure: '16 bar', extra: 'Simple 2.5 mm' },
          '10': { power: '6.0 kW', speed: '1.8 – 2.4 m/min', gas: 'Nitrógeno (N2)', pressure: '16 bar', extra: 'Simple 3.0 mm' },
          '12': { power: '6.0 kW - 12 kW', speed: '1.4 – 3.0 m/min', gas: 'Nitrógeno (N2)', pressure: '16 bar', extra: 'Simple 3.5 mm' },
          '16': { power: '12 kW', speed: '1.2 – 1.8 m/min', gas: 'Nitrógeno (N2)', pressure: '16 bar', extra: 'Alta velocidad 4.0 mm' }
        }
      },
      'acero-carbon': {
        name: 'Acero al Carbón (A36 / Placa)',
        speeds: {
          '1.0': { power: '1.5 kW', speed: '26 – 35 m/min', gas: 'Aire Seco 16 bar', pressure: '14 - 16 bar', extra: 'Simple 1.5 mm' },
          '3.0': { power: '1.5 kW - 3.0 kW', speed: '5.5 – 9.0 m/min', gas: 'Oxígeno / Aire Seco', pressure: '1.5 - 14 bar', extra: 'Doble 1.4 mm' },
          '6.0': { power: '3.0 kW', speed: '2.6 – 3.4 m/min', gas: 'Oxígeno (O2)', pressure: '0.8 - 1.2 bar', extra: 'Doble 1.6 mm' },
          '10': { power: '3.0 kW - 6.0 kW', speed: '1.4 – 2.6 m/min', gas: 'Oxígeno (O2)', pressure: '0.7 - 1.0 bar', extra: 'Doble 2.0 mm' },
          '12': { power: '6.0 kW', speed: '1.6 – 2.2 m/min', gas: 'Oxígeno (O2)', pressure: '0.6 - 0.9 bar', extra: 'Doble 2.0 mm' },
          '16': { power: '6.0 kW - 12 kW', speed: '1.0 – 1.8 m/min', gas: 'Oxígeno (O2)', pressure: '0.6 - 0.8 bar', extra: 'Doble 2.5 mm' }
        }
      },
      'aluminio': {
        name: 'Aluminio (Serie 5000 / 6000)',
        speeds: {
          '1.0': { power: '1.5 kW', speed: '18 – 24 m/min', gas: 'Nitrógeno / Aire 16 bar', pressure: '14 - 16 bar', extra: 'Simple 1.5 mm' },
          '3.0': { power: '3.0 kW', speed: '6.0 – 8.5 m/min', gas: 'Nitrógeno (N2)', pressure: '15 - 16 bar', extra: 'Simple 2.0 mm' },
          '6.0': { power: '6.0 kW', speed: '2.8 – 3.8 m/min', gas: 'Nitrógeno (N2)', pressure: '16 bar', extra: 'Simple 2.5 mm' },
          '10': { power: '6.0 kW - 12 kW', speed: '1.3 – 2.4 m/min', gas: 'Nitrógeno (N2)', pressure: '16 bar', extra: 'Simple 3.0 mm' },
          '12': { power: '12 kW', speed: '1.5 – 2.1 m/min', gas: 'Nitrógeno (N2)', pressure: '16 bar', extra: 'Simple 3.5 mm' },
          '16': { power: '12 kW (Consultar)', speed: '0.8 – 1.2 m/min', gas: 'Nitrógeno (N2)', pressure: '16 bar', extra: 'Simple 4.0 mm' }
        }
      },
      'cobre-laton': {
        name: 'Latón y Cobre electrolítico',
        speeds: {
          '1.0': { power: '2.0 kW - 3.0 kW', speed: '14 – 20 m/min', gas: 'Nitrógeno (N2)', pressure: '14 - 16 bar', extra: 'Simple 1.5 mm' },
          '3.0': { power: '3.0 kW - 6.0 kW', speed: '4.0 – 7.0 m/min', gas: 'Nitrógeno (N2)', pressure: '16 bar', extra: 'Simple 2.0 mm' },
          '6.0': { power: '6.0 kW', speed: '1.6 – 2.3 m/min', gas: 'Nitrógeno (N2)', pressure: '16 bar', extra: 'Simple 2.5 mm' },
          '10': { power: '6.0 kW - 12 kW', speed: '0.9 – 1.6 m/min', gas: 'Nitrógeno (N2)', pressure: '16 bar', extra: 'Simple 3.0 mm' },
          '12': { power: '12 kW', speed: '0.9 – 1.3 m/min', gas: 'Nitrógeno (N2)', pressure: '16 bar', extra: 'Simple 3.5 mm' },
          '16': { power: 'Consultar ingeniería DATA', speed: 'Por prueba en taller', gas: 'Nitrógeno / Oxígeno', extra: 'A definir' }
        }
      }
    }
  }
};

const CALC_TEXT_EN = {
  modes: { soldadura: 'Welding', corte: 'CNC Cutting' },
  speedLabel: { soldadura: 'Travel Speed', corte: 'Cutting Speed' },
  extraLabel: { soldadura: 'Suggested Wire', corte: 'Suggested Nozzle' },
  materials: {
    'acero-inox': 'Stainless Steel (304 / 316)',
    'acero-carbon': 'Carbon Steel (A36 / Gauge)',
    'aluminio': 'Aluminum (5000 / 6000 Series)',
    'cobre-laton': 'Brass & Electrolytic Copper'
  },
  translateVal(val) {
    return String(val)
      .replace('Consultar ingeniería DATA', 'Consult DATA engineering')
      .replace('Por prueba en taller', 'Shop-trial calibrated')
      .replace('A definir', 'TBD')
      .replace('(Biselado)', '(Beveled)')
      .replace('(Doble pase)', '(Double pass)')
      .replace('(Precalentado)', '(Preheated)')
      .replace('(Potencia máx)', '(Max power)')
      .replace('(Consultar)', '(Inquire)')
      .replace('Nitrógeno o Argón', 'Nitrogen or Argon')
      .replace('Nitrógeno / Aire', 'Nitrogen / Air')
      .replace('Nitrógeno / Oxígeno', 'Nitrogen / Oxygen')
      .replace('Oxígeno / Aire Seco', 'Oxygen / Dry Air')
      .replace('Aire Seco o Argón', 'Dry Air or Argon')
      .replace('Aire Seco', 'Dry Air')
      .replace('Argón o Nitrógeno', 'Argon or Nitrogen')
      .replace('Argón puro 99.99%', 'Pure Argon 99.99%')
      .replace('Argón puro', 'Pure Argon')
      .replace('Nitrógeno (N2)', 'Nitrogen (N2)')
      .replace('Oxígeno (O2)', 'Oxygen (O2)')
      .replace('Doble / Simple', 'Double / Single')
      .replace('Alta velocidad', 'High speed')
      .replace(/\bDoble\b/g, 'Double')
      .replace(/\bSimple\b/g, 'Single');
  }
};

function initTechCalculator() {
  const container = document.getElementById('tech-calculator');
  if (!container) return;

  let currentMode = 'soldadura';
  let currentMaterial = 'acero-inox';
  let currentThicknessIndex = 1;

  const modeBtns = container.querySelectorAll('.calc-mode-btn');
  const materialBtns = container.querySelectorAll('.calc-mat-btn');
  const slider = container.querySelector('#calc-thickness-slider');
  const tickBtns = container.querySelectorAll('.calc-tick-btn');
  const thicknessValEl = container.querySelector('#calc-current-thickness');

  const titleEl = container.querySelector('#calc-result-title');
  const powerEl = container.querySelector('#calc-result-power');
  const speedLabelEl = container.querySelector('#calc-speed-label');
  const extraLabelEl = container.querySelector('#calc-extra-label');
  const speedEl = container.querySelector('#calc-result-speed');
  const gasEl = container.querySelector('#calc-result-gas');
  const pressureEl = container.querySelector('#calc-result-pressure');
  const wireEl = container.querySelector('#calc-result-wire');
  const ctaBtn = container.querySelector('#calc-quote-btn');

  function updateCalculator() {
    const isEn = getCurrentLang() === 'en';
    const modeData = TECH_CALC_MATRIX[currentMode];
    const steps = modeData.steps;
    if (currentThicknessIndex >= steps.length) currentThicknessIndex = steps.length - 1;

    modeBtns.forEach(btn => {
      const active = btn.dataset.calcMode === currentMode;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
    materialBtns.forEach(btn => {
      const active = btn.getAttribute('data-material') === currentMaterial;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
    tickBtns.forEach((btn, idx) => {
      const label = steps[idx];
      if (label) btn.textContent = `${label}mm`;
      btn.classList.toggle('is-active', idx === currentThicknessIndex);
      btn.setAttribute('aria-pressed', String(idx === currentThicknessIndex));
    });

    const matData = modeData.materials[currentMaterial];
    const thicknessKey = steps[currentThicknessIndex];
    const spec = matData.speeds[thicknessKey];
    const modeLabel = isEn ? CALC_TEXT_EN.modes[currentMode] : (currentMode === 'corte' ? 'Corte CNC' : 'Soldadura');
    const matName = isEn ? (CALC_TEXT_EN.materials[currentMaterial] || matData.name) : matData.name;
    const speedLabel = isEn ? CALC_TEXT_EN.speedLabel[currentMode] : modeData.speedLabel;
    const extraLabel = isEn ? CALC_TEXT_EN.extraLabel[currentMode] : modeData.extraLabel;
    const translateVal = val => (isEn ? CALC_TEXT_EN.translateVal(val) : val);

    if (thicknessValEl) thicknessValEl.textContent = `${thicknessKey} mm`;
    if (titleEl) titleEl.textContent = `${modeLabel} · ${matName} · ${thicknessKey} mm`;
    if (speedLabelEl) speedLabelEl.textContent = speedLabel;
    if (extraLabelEl) extraLabelEl.textContent = extraLabel;
    const powerText = translateVal(spec.power);
    if (powerEl) powerEl.textContent = powerText;
    const keepUnitsTogether = val => String(val).replace(/(\d)\s+(m\/min|bar|mm|kW|W|min|horas|hours)\b/gi, '$1\u00A0$2');
    if (speedEl) speedEl.textContent = keepUnitsTogether(translateVal(spec.speed));
    if (gasEl) gasEl.textContent = keepUnitsTogether(translateVal(spec.gas));
    if (pressureEl) pressureEl.textContent = keepUnitsTogether(translateVal(spec.pressure));
    if (wireEl) wireEl.textContent = keepUnitsTogether(translateVal(spec.extra));

    if (ctaBtn) {
      const msg = isEn
        ? encodeURIComponent(`Hello, I would like a quote on DATA laser equipment for ${modeLabel.toLowerCase()} ${matName} at ${thicknessKey} mm thickness (Recommended power: ${powerText}).`)
        : encodeURIComponent(`Hola, me interesa cotizar un equipo láser DATA para ${modeLabel.toLowerCase()} de ${matData.name} en espesor de ${thicknessKey} mm (Potencia sugerida: ${spec.power}).`);
      ctaBtn.href = `https://wa.me/5215527753215?text=${msg}`;
    }
  }

  modeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      currentMode = btn.dataset.calcMode || 'soldadura';
      updateCalculator();
    });
  });

  materialBtns.forEach(btn => {
    btn.addEventListener('click', function() {
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

  tickBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const step = parseInt(btn.dataset.step, 10);
      if (Number.isNaN(step)) return;
      currentThicknessIndex = step;
      if (slider) slider.value = String(step);
      updateCalculator();
    });
  });

  document.addEventListener('datacnc:langchange', updateCalculator);
  updateCalculator();
}

// ==========================================================================
// Fase 4: Mapa Interactivo de Cobertura y Tiempos de SLA
// ==========================================================================
const REGIONS_DATA = {
  'valle-mexico': {
    title: 'Zona Metropolitana & Valle de México',
    cityDefault: 'CDMX · Sede',
    sla: '< 4 horas',
    remoteSla: '< 2 horas',
    status: 'Respuesta Inmediata CDMX',
    states: ['Ciudad de México (CDMX)', 'Estado de México (EdoMex)', 'Cuernavaca / Morelos', 'Hidalgo Sur'],
    description: 'Atención técnica directa desde nuestro Showroom y Bodega Central en Iztapalapa, CDMX. Diagnóstico en sitio el mismo día y entrega de consumibles en menos de 4 horas.',
    descShort: 'Atención técnica directa desde nuestro Showroom y Bodega Central en Iztapalapa con diagnóstico en sitio y entrega inmediata de consumibles.',
    engineers: '6 Ingenieros de Campo Activos',
    engineersShort: '6 en campo',
    stockStatus: '100% Stock en Bodega Local'
  },
  'bajio-centro': {
    title: 'Corredor Industrial Bajío & Centro',
    cityDefault: 'Querétaro / Puebla',
    sla: '< 24 horas',
    remoteSla: '< 2 horas',
    status: 'Rutas Diarias de Asistencia',
    states: ['Querétaro', 'Puebla', 'Toluca / Lerma', 'Guanajuato (León, Celaya, Silao)', 'Tlaxcala', 'Pachuca'],
    description: 'Rutas programadas de servicio preventivo y respuesta a emergencias para corredores automotrices y metalmecánicos. Arribo garantizado al día siguiente hábil.',
    descShort: 'Rutas programadas de mantenimiento preventivo y emergencias para corredores automotrices y metalmecánicos del centro del país.',
    engineers: '4 Especialistas Asignados a la Zona',
    engineersShort: '4 especialistas',
    stockStatus: 'Despacho Express Nacional 24h'
  },
  'norte-occidente': {
    title: 'Zona Norte, Occidente y Frontera',
    cityDefault: 'Guadalajara / Monterrey',
    sla: '< 48 horas',
    remoteSla: '< 30 min',
    status: 'Telemetría Remota < 30 min',
    states: ['Nuevo León (Monterrey, Apodaca)', 'Jalisco (Guadalajara, Zapopan)', 'Coahuila (Saltillo, Ramos Arizpe)', 'San Luis Potosí', 'Chihuahua', 'Sonora'],
    description: 'Diagnóstico remoto inmediato por telemetría óptica en menos de 30 minutos. Desplazamiento de ingenieros y envío aéreo de refacciones prioritarias.',
    descShort: 'Telemetría óptica dedicada desde CDMX respaldada por desplazamiento de ingenieros y envío aéreo prioritario de refacciones.',
    engineers: 'Soporte Especializado Remoto + Visita',
    engineersShort: 'Remoto + campo',
    stockStatus: 'Envío Aéreo Prioritario'
  }
};

const REGIONS_DATA_EN = {
  'valle-mexico': {
    title: 'Mexico City Metro & Valley of Mexico',
    cityDefault: 'CDMX · HQ',
    sla: '< 4 hours',
    remoteSla: '< 2 hours',
    states: ['Mexico City (CDMX)', 'State of Mexico (EdoMex)', 'Cuernavaca / Morelos', 'Southern Hidalgo'],
    description: 'Direct technical support from our Showroom and Central Warehouse in Iztapalapa, CDMX. Same-day on-site diagnostics and consumables delivery in under 4 hours.',
    descShort: 'Direct engineering support from our Showroom and Central Warehouse in Iztapalapa with on-site diagnostics and immediate consumables dispatch.',
    engineers: '6 Active Field Engineers',
    engineersShort: '6 in field'
  },
  'bajio-centro': {
    title: 'Bajío & Central Industrial Corridor',
    cityDefault: 'Querétaro / Puebla',
    sla: '< 24 hours',
    remoteSla: '< 2 hours',
    states: ['Querétaro', 'Puebla', 'Toluca / Lerma', 'Guanajuato (León, Celaya, Silao)', 'Tlaxcala', 'Pachuca'],
    description: 'Scheduled preventive service routes and emergency response for automotive and metalworking corridors. Next-business-day on-site arrival guaranteed.',
    descShort: 'Scheduled preventive maintenance and emergency routes serving automotive and metalworking corridors across Central Mexico.',
    engineers: '4 Dedicated Regional Specialists',
    engineersShort: '4 specialists'
  },
  'norte-occidente': {
    title: 'North, West & Border Region',
    cityDefault: 'Guadalajara / Monterrey',
    sla: '< 48 hours',
    remoteSla: '< 30 min',
    states: ['Nuevo León (Monterrey, Apodaca)', 'Jalisco (Guadalajara, Zapopan)', 'Coahuila (Saltillo, Ramos Arizpe)', 'San Luis Potosí', 'Chihuahua', 'Sonora'],
    description: 'Immediate remote diagnostics via optical telemetry in under 30 minutes, backed by field engineer dispatch and priority air shipping of critical spare parts.',
    descShort: 'Dedicated optical telemetry from CDMX backed by field engineer dispatch and priority air shipping of spare parts.',
    engineers: 'Remote Specialist + On-Site Dispatch',
    engineersShort: 'Remote + field'
  }
};

const HOME_CITIES_DATA = {
  cdmx: {
    region: 'valle-mexico',
    title: 'CDMX · Sede y Valle de México',
    desc: 'Atención directa desde nuestro Showroom y Bodega Central en Iztapalapa con diagnóstico en sitio y entrega inmediata de consumibles.',
    states: ['Ciudad de México (CDMX)', 'Estado de México (EdoMex)', 'Cuernavaca / Morelos', 'Hidalgo Sur']
  },
  queretaro: {
    region: 'bajio-centro',
    title: 'Querétaro · Corredor Bajío',
    desc: 'Cobertura programada y atención a emergencias para parques industriales automotrices y metalmecánicos en Querétaro y El Bajío.',
    states: ['Querétaro', 'Guanajuato (León, Celaya, Silao)', 'San Luis Potosí Sur', 'Toluca / Lerma']
  },
  puebla: {
    region: 'bajio-centro',
    title: 'Puebla · Corredor Centro-Oriente',
    desc: 'Rutas directas desde CDMX para líneas de manufactura, herrería industrial y maquila metalmecánica en Puebla y Tlaxcala.',
    states: ['Puebla', 'Tlaxcala', 'Pachuca / Hidalgo', 'Veracruz Centro']
  },
  guadalajara: {
    region: 'norte-occidente',
    title: 'Guadalajara · Zona Occidente',
    desc: 'Telemetría óptica dedicada desde CDMX respaldada por ingenieros asignados y envío aéreo prioritario de refacciones hacia Jalisco.',
    states: ['Jalisco (Guadalajara, Zapopan)', 'Aguascalientes', 'Colima / Manzanillo', 'Michoacán']
  },
  monterrey: {
    region: 'norte-occidente',
    title: 'Monterrey · Zona Norte y Frontera',
    desc: 'Diagnóstico remoto por telemetría óptica respaldado por desplazamiento de especialistas y envío aéreo de refacciones al corredor norte.',
    states: ['Nuevo León (Monterrey, Apodaca)', 'Coahuila (Saltillo, Ramos Arizpe)', 'Chihuahua', 'Sonora / Tamaulipas']
  }
};

const HOME_CITIES_DATA_EN = {
  cdmx: {
    title: 'CDMX · HQ & Valley of Mexico',
    desc: 'Direct engineering support from our Showroom and Central Warehouse in Iztapalapa with on-site diagnostics and immediate consumables dispatch.',
    states: ['Mexico City (CDMX)', 'State of Mexico (EdoMex)', 'Cuernavaca / Morelos', 'Southern Hidalgo']
  },
  queretaro: {
    title: 'Querétaro · Bajío Corridor',
    desc: 'Scheduled preventive coverage and emergency support for automotive and metalworking industrial parks in Querétaro and El Bajío.',
    states: ['Querétaro', 'Guanajuato (León, Celaya, Silao)', 'Southern San Luis Potosí', 'Toluca / Lerma']
  },
  puebla: {
    title: 'Puebla · Central-East Corridor',
    desc: 'Direct service routes from CDMX supporting manufacturing lines and metal fabrication shops across Puebla and Tlaxcala.',
    states: ['Puebla', 'Tlaxcala', 'Pachuca / Hidalgo', 'Central Veracruz']
  },
  guadalajara: {
    title: 'Guadalajara · Western Region',
    desc: 'Dedicated optical telemetry from CDMX backed by field engineer dispatch and priority air shipping of spare parts to Jalisco.',
    states: ['Jalisco (Guadalajara, Zapopan)', 'Aguascalientes', 'Colima / Manzanillo', 'Michoacán']
  },
  monterrey: {
    title: 'Monterrey · North & Border',
    desc: 'Remote optical telemetry diagnostics backed by specialist dispatch and priority air shipping of critical spare parts to the northern corridor.',
    states: ['Nuevo León (Monterrey, Apodaca)', 'Coahuila (Saltillo, Ramos Arizpe)', 'Chihuahua', 'Sonora / Tamaulipas']
  }
};

function initCoverageMap() {
  const container = document.getElementById('coverage-map-component');
  if (!container) return;

  const isHome = document.body.classList.contains('home-page');
  const tabBtns = container.querySelectorAll('.region-tab-btn');
  const cityEl = container.querySelector('#sla-city-val');
  const titleEl = container.querySelector('#sla-region-title');
  const timeEl = container.querySelector('#sla-time-val');
  const remoteEl = container.querySelector('#sla-remote-val');
  const descEl = container.querySelector('#sla-region-desc');
  const statesContainer = container.querySelector('#sla-states-container');
  const engineersEl = container.querySelector('#sla-engineers-val');
  const quoteBtn = container.querySelector('#sla-quote-btn');

  const cityPoints = [...container.querySelectorAll('.coverage-map-city')];
  const cityChoices = [...container.querySelectorAll('.coverage-city-choice')];
  let currentRegionKey = 'valle-mexico';
  let currentCityKey;

  function updateCityButtonsLanguage(isEn) {
    const cdmxChoice = container.querySelector('.coverage-city-choice[data-city-select="cdmx"] .coverage-city-name');
    if (cdmxChoice) {
      const dot = cdmxChoice.querySelector('.coverage-city-dot');
      cdmxChoice.textContent = '';
      if (dot) cdmxChoice.appendChild(dot);
      cdmxChoice.appendChild(document.createTextNode(isEn ? 'CDMX · HQ' : 'CDMX · Sede'));
    }
    const cdmxPointTitle = container.querySelector('.coverage-map-city[data-map-city="cdmx"] title');
    if (cdmxPointTitle) cdmxPointTitle.textContent = isEn ? 'CDMX · HQ' : 'CDMX · Sede';
  }

  function updateRegion(key, cityKey) {
    const isEn = getCurrentLang() === 'en';
    const reg = (isEn ? REGIONS_DATA_EN : REGIONS_DATA)[key] || REGIONS_DATA[key];
    if (!reg) return;
    currentRegionKey = key;
    currentCityKey = cityKey;

    updateCityButtonsLanguage(isEn);
    const city = cityPoints.find(node => node.dataset.mapRegion === key && (!cityKey || node.dataset.mapCity === cityKey));
    const selectedCity = city?.dataset.mapCity;
    const cityLabel = city?.querySelector('title')?.textContent || reg.cityDefault;
    const homeCityInfo = isHome && cityKey
      ? { ...(HOME_CITIES_DATA[cityKey] || {}), ...(isEn ? HOME_CITIES_DATA_EN[cityKey] || {} : {}) }
      : null;

    container.querySelectorAll('[data-map-region]').forEach(node => {
      const active = isHome && !cityKey
        ? node.dataset.mapRegion === key
        : (node.dataset.mapCity ? node.dataset.mapCity === selectedCity : node.dataset.mapRegion === key);
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
    if (mapStatus) mapStatus.textContent = `${cityLabel} · ${isEn ? 'Arrival' : 'Arribo'} ${reg.sla}`;

    if (cityEl) cityEl.textContent = cityLabel;
    if (titleEl) titleEl.textContent = homeCityInfo?.title || reg.title;
    if (timeEl) timeEl.textContent = reg.sla;
    if (remoteEl) remoteEl.textContent = reg.remoteSla;
    if (descEl) {
      descEl.textContent = isHome
        ? (homeCityInfo?.desc || reg.descShort || reg.description)
        : reg.description;
    }
    if (engineersEl) engineersEl.textContent = isHome ? (reg.engineersShort || reg.engineers) : reg.engineers;

    const statesList = homeCityInfo?.states || reg.states;
    if (statesContainer) {
      statesContainer.innerHTML = statesList.map(s => `<li class="sla-state-pill">${s}</li>`).join('');
    }

    if (quoteBtn) {
      const hasSpecificCity = !isHome || Boolean(cityKey);
      const targetText = hasSpecificCity ? `${cityLabel} (${reg.title}, arribo ${reg.sla})` : `${reg.title} (arribo ${reg.sla})`;
      const targetTextEn = hasSpecificCity ? `${cityLabel} (${reg.title}, arrival ${reg.sla})` : `${reg.title} (arrival ${reg.sla})`;
      const msg = isEn
        ? encodeURIComponent(`Hello, I need technical support availability and response times for DATA CNC in ${targetTextEn}.`)
        : encodeURIComponent(`Hola, requiero asesoría técnica sobre disponibilidad y tiempos de soporte de DATA CNC en ${targetText}.`);
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

  document.addEventListener('datacnc:langchange', () => updateRegion(currentRegionKey, currentCityKey));
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
    desc: 'Suelda, corta y limpia con chiller integrado, panel táctil superior y alimentador automático de alambre. Acabado limpio casi sin post-procesamiento y respaldo local en México.',
    power: '1500W – 3000W',
    app: 'Chiller + Alimentador',
    status: 'SHOWROOM CDMX · EN STOCK',
    model: 'RL-1500 / RL-2000 / RL-3000',
    sub: 'Fuente láser + chiller + alimentador de alambre automático',
    ctaLabel: 'Ver ficha Serie RL',
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
    ctaLabel: 'Ver ficha Corte 4×10',
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
    ctaLabel: 'Ver ficha Serie RA',
    fichaUrl: 'ficha-soldadora-ra.html',
    demoUrl: 'demostracion.html?equipo=soldadora-ra-aire#demo-page-form'
  },
  {
    kicker: 'DATA CNC · Especial Corte Láser',
    titleLines: ['Compresor de Tornillo', '15 kW · 16 bar'],
    desc: 'Sistema integrado de alta presión con compresor rotativo de 15 kW, secador refrigerativo con filtros de aceite/partículas y tanque acumulador para expulsar metal fundido.',
    power: '15 kW (20 HP) · 16 bar',
    app: 'Secador + Tanque acumulador',
    status: 'SPECIAL FOR LASER CUTTING',
    model: 'DT-15B · 15 kW / 16 bar',
    sub: 'Aire 100% limpio y seco para óptica de corte láser',
    ctaLabel: 'Ver ficha Compresor',
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
    ctaLabel: 'Ver ficha DATA Flame',
    fichaUrl: 'ficha-data-flame.html',
    demoUrl: 'demostracion.html?equipo=pintura-hornos#demo-page-form'
  },
  {
    kicker: 'DATA Laser · Fibra Óptica 3 en 1 (Comparativa)',
    titleLines: ['Soldadora Láser', '3 en 1 Serie RL'],
    desc: 'Suelda, corta y limpia con chiller integrado, panel táctil superior y alimentador automático de alambre. Acabado limpio casi sin post-procesamiento y respaldo local en México.',
    power: '1500W – 3000W',
    app: 'Chiller + Alimentador',
    status: 'SHOWROOM CDMX · EN STOCK',
    model: 'RL-1500 / RL-2000 / RL-3000',
    sub: 'Fuente láser + chiller + alimentador de alambre automático',
    ctaLabel: 'Ver ficha Serie RL',
    fichaUrl: 'ficha-soldadora-rl.html',
    demoUrl: 'demostracion.html?equipo=soldadora-rl-3en1#demo-page-form'
  }
];

const HERO_SHOWCASE_SLIDES_EN = [
  {
    kicker: 'DATA Laser · 3-in-1 Fiber Optic',
    titleLines: ['Fiber Laser Welder', '3-in-1 RL Series'],
    desc: 'Welds, cuts, and cleans with an integrated chiller, top touchscreen panel, and automatic wire feeder. Clean weld seams with virtually zero post-processing and local support in Mexico.',
    power: '1500W – 3000W',
    app: 'Chiller + Wire Feeder',
    status: 'CDMX SHOWROOM · IN STOCK',
    model: 'RL-1500 / RL-2000 / RL-3000',
    sub: 'Laser source + chiller + automatic wire feeder',
    ctaLabel: 'View RL Series Specs'
  },
  {
    kicker: 'DATA Laser · Industrial CNC Cutting',
    titleLines: ['Flatbed Fiber', 'Laser Cutter 4×10'],
    desc: '1500 × 3000 mm working bed with aerospace aluminum gantry, autofocus cutting head, and CypCut software for high-speed sheet and plate cutting.',
    power: '1.5 kW – 12 kW',
    app: 'Carbon · Stainless · Brass',
    status: 'NATIONWIDE DELIVERY & SETUP',
    model: 'DATA-CUT 4×10 Pro',
    sub: 'Positioning accuracy ±0.03 mm · 100 m/min',
    ctaLabel: 'View 4×10 Cutter Specs'
  },
  {
    kicker: 'DATA Laser · Ultra Portable',
    titleLines: ['Laser Welder', 'RA Series (Air-Cooled)'],
    desc: '100% forced-air cooling with no external water chiller or water hoses. Compact build for on-site installations, field work, and fine weld seams.',
    power: '800W – 1500W',
    app: 'On-Site Work · Job Shop',
    status: 'NO CHILLER · AGILE OPERATION',
    model: 'RA-800 / RA-1200 / RA-1500',
    sub: 'Up to 60% more compact · 220V single/split-phase',
    ctaLabel: 'View RA Series Specs'
  },
  {
    kicker: 'DATA CNC · Special For Laser Cutting',
    titleLines: ['Screw Compressor', '15 kW · 16 bar'],
    desc: 'Integrated high-pressure air system with a 15 kW rotary screw compressor, refrigerated air dryer with oil/particulate filtration, and accumulator tank for laser cutting.',
    power: '15 kW (20 HP) · 16 bar',
    app: 'Dryer + Accumulator Tank',
    status: 'SPECIAL FOR LASER CUTTING',
    model: 'DT-15B · 15 kW / 16 bar',
    sub: '100% clean, dry air for laser cutting optics',
    ctaLabel: 'View Compressor Specs'
  },
  {
    kicker: 'DATA Flame · Thermal Finishing',
    titleLines: ['Powder Coating', '& Curing Ovens'],
    desc: 'Cyclone powder recovery booths and forced-air curing ovens operating from 50°C to 250°C for uniform, high-durability industrial finishes.',
    power: 'LP / Natural Gas / Electric',
    app: 'Series C Booth + Series H Oven',
    status: 'CUSTOM INDUSTRIAL DESIGN',
    model: 'DATA Flame C & H Series',
    sub: 'Thermal uniformity ±3°C · 98% cyclone recovery',
    ctaLabel: 'View DATA Flame Specs'
  },
  {
    kicker: 'DATA Laser · 3-in-1 Fiber Optic (Compare)',
    titleLines: ['Fiber Laser Welder', '3-in-1 RL Series'],
    desc: 'Welds, cuts, and cleans with an integrated chiller, top touchscreen panel, and automatic wire feeder. Clean weld seams with virtually zero post-processing and local support in Mexico.',
    power: '1500W – 3000W',
    app: 'Chiller + Wire Feeder',
    status: 'CDMX SHOWROOM · IN STOCK',
    model: 'RL-1500 / RL-2000 / RL-3000',
    sub: 'Laser source + chiller + automatic wire feeder',
    ctaLabel: 'View RL Series Specs'
  }
];

function initHeroShowcase() {
  const hero = document.getElementById('inicio');
  if (!hero) return;

  const slides = [...hero.querySelectorAll('.hero-slide')];
  const dotBtns = [...hero.querySelectorAll('.hero-dot-btn')];
  const prevBtn = document.getElementById('hero-prev-btn');
  const nextBtn = document.getElementById('hero-next-btn');
  const autoplayBtn = document.getElementById('hero-autoplay-btn');
  const progressEl = document.getElementById('hero-autoplay-progress');
  const stageEl = hero.querySelector('.hero-slides-layer');

  const kickerEl = document.getElementById('hero-slide-kicker');
  const titleEl = document.getElementById('hero-slide-title');
  const titleLinkEl = document.getElementById('hero-title-link');
  const stageLinkEl = document.getElementById('hero-stage-link');
  const descEl = document.getElementById('hero-slide-desc');
  const powerEl = document.getElementById('hero-slide-power');
  const appEl = document.getElementById('hero-slide-app');
  const statusEl = document.getElementById('hero-stage-status-text') || document.getElementById('hero-stage-status');
  const ctaBtn = document.getElementById('hero-slide-cta');
  const demoBtn = document.getElementById('hero-slide-demo');

  const copyEl = hero.querySelector('.hero-showcase-copy');

  if (!slides.length || slides.length !== HERO_SHOWCASE_SLIDES.length) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const mobileQuery = window.matchMedia('(max-width: 767.98px)');
  const AUTOPLAY_MS = 6500;
  let activeIndex = 0;
  let userPaused = false;
  let hoverPaused = false;
  let timerId = null;
  let leavingTimerId = null;

  function isAutoplayBlocked() {
    return userPaused || hoverPaused || mobileQuery.matches || reducedMotion.matches;
  }

  function triggerReveal(el) {
    if (!el || reducedMotion.matches) return;
    el.classList.remove('is-entering');
    void el.offsetWidth;
    el.classList.add('is-entering');
  }

  function restartProgressBar(active) {
    if (!progressEl) return;
    progressEl.classList.remove('is-running');
    progressEl.style.width = active ? '0%' : '100%';
    if (!active) return;
    void progressEl.offsetWidth;
    progressEl.classList.add('is-running');
  }

  function syncAutoplayUI() {
    hero.classList.toggle('is-paused', userPaused || hoverPaused);
    if (!autoplayBtn) return;
    const isEn = getCurrentLang() === 'en';
    const pauseIcon = autoplayBtn.querySelector('.pause-icon');
    const playIcon = autoplayBtn.querySelector('.play-icon');
    if (pauseIcon) pauseIcon.style.display = userPaused ? 'none' : 'block';
    if (playIcon) playIcon.style.display = userPaused ? 'block' : 'none';
    autoplayBtn.setAttribute('aria-pressed', String(userPaused));
    autoplayBtn.setAttribute(
      'aria-label',
      isEn
        ? (userPaused ? 'Resume automatic rotation' : 'Pause automatic rotation')
        : (userPaused ? 'Reanudar rotación automática' : 'Pausar rotación automática')
    );
  }

  function renderSlide(nextIndex, { animate = true } = {}) {
    const isEn = getCurrentLang() === 'en';
    const total = HERO_SHOWCASE_SLIDES.length;
    const prevIndex = activeIndex;
    activeIndex = ((nextIndex % total) + total) % total;
    const baseItem = HERO_SHOWCASE_SLIDES[activeIndex];
    const item = isEn ? { ...baseItem, ...(HERO_SHOWCASE_SLIDES_EN[activeIndex] || {}) } : baseItem;
    const shouldTransition = animate && prevIndex !== activeIndex;

    if (leavingTimerId) {
      clearTimeout(leavingTimerId);
      leavingTimerId = null;
    }

    slides.forEach((slide, idx) => {
      const isActive = idx === activeIndex;
      const isLeaving = shouldTransition && idx === prevIndex;
      slide.classList.toggle('is-active', isActive);
      slide.classList.toggle('is-leaving', isLeaving);
      slide.setAttribute('aria-hidden', String(!isActive));
    });

    hero.classList.toggle('is-compare-slide', slides[activeIndex]?.dataset.compareScrim === 'true');

    if (shouldTransition) {
      leavingTimerId = setTimeout(() => {
        slides.forEach(slide => slide.classList.remove('is-leaving'));
        leavingTimerId = null;
      }, 900);
    }

    dotBtns.forEach(btn => {
      const isActive = Number(btn.dataset.slideTarget) === activeIndex;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-selected', String(isActive));
      btn.setAttribute('tabindex', isActive ? '0' : '-1');
    });

    if (kickerEl) kickerEl.textContent = item.kicker;
    const titleTarget = titleLinkEl || titleEl;
    if (titleTarget) {
      titleTarget.textContent = '';
      titleTarget.appendChild(document.createTextNode(item.titleLines[0]));
      titleTarget.appendChild(document.createElement('br'));
      const span = document.createElement('span');
      span.textContent = item.titleLines[1];
      titleTarget.appendChild(span);
    }
    if (titleLinkEl) titleLinkEl.setAttribute('href', item.fichaUrl);
    if (stageLinkEl) {
      stageLinkEl.setAttribute('href', item.fichaUrl);
      const slideName = item.titleLines.join(' ');
      stageLinkEl.setAttribute('aria-label', isEn ? `View equipment: ${slideName}` : `Ver equipo: ${slideName}`);
    }
    if (descEl) descEl.textContent = item.desc;
    if (powerEl) powerEl.textContent = item.power;
    if (appEl) appEl.textContent = item.app;
    if (statusEl) statusEl.textContent = item.status;
    if (ctaBtn) {
      ctaBtn.textContent = item.ctaLabel;
      ctaBtn.setAttribute('href', item.fichaUrl);
    }
    if (demoBtn) {
      demoBtn.setAttribute('href', item.demoUrl);
    }

    if (shouldTransition) {
      triggerReveal(copyEl);
    }
  }

  function stopAutoplay() {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
    restartProgressBar(false);
  }

  function startAutoplay() {
    stopAutoplay();
    if (isAutoplayBlocked()) return;
    restartProgressBar(true);
    timerId = setInterval(() => {
      renderSlide(activeIndex + 1, { animate: true });
      restartProgressBar(true);
    }, AUTOPLAY_MS);
  }

  function goToSlide(index) {
    renderSlide(index, { animate: true });
    if (!isAutoplayBlocked()) startAutoplay();
    else restartProgressBar(false);
  }

  prevBtn?.addEventListener('click', () => goToSlide(activeIndex - 1));
  nextBtn?.addEventListener('click', () => goToSlide(activeIndex + 1));

  dotBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = Number(btn.dataset.slideTarget);
      if (!Number.isNaN(target)) goToSlide(target);
    });
  });

  autoplayBtn?.addEventListener('click', () => {
    userPaused = !userPaused;
    syncAutoplayUI();
    if (isAutoplayBlocked()) stopAutoplay();
    else startAutoplay();
  });

  hero.addEventListener('mouseenter', () => {
    hoverPaused = true;
    syncAutoplayUI();
    stopAutoplay();
  });

  hero.addEventListener('mouseleave', () => {
    hoverPaused = false;
    syncAutoplayUI();
    startAutoplay();
  });

  mobileQuery.addEventListener('change', () => {
    if (isAutoplayBlocked()) stopAutoplay();
    else startAutoplay();
  });

  hero.addEventListener('keydown', (event) => {
    const inRail = event.target instanceof Element && Boolean(event.target.closest('.hero-dots-rail'));
    if (event.key === 'ArrowRight' || (inRail && event.key === 'ArrowDown')) {
      event.preventDefault();
      goToSlide(activeIndex + 1);
      if (inRail) dotBtns[activeIndex]?.focus();
    } else if (event.key === 'ArrowLeft' || (inRail && event.key === 'ArrowUp')) {
      event.preventDefault();
      goToSlide(activeIndex - 1);
      if (inRail) dotBtns[activeIndex]?.focus();
    } else if (inRail && event.key === 'Home') {
      event.preventDefault();
      goToSlide(0);
      dotBtns[0]?.focus();
    } else if (inRail && event.key === 'End') {
      event.preventDefault();
      goToSlide(dotBtns.length - 1);
      dotBtns[dotBtns.length - 1]?.focus();
    }
  });

  if (stageEl) {
    let pointerStartX = null;
    let suppressStageClick = false;
    stageEl.addEventListener('pointerdown', (event) => {
      pointerStartX = event.clientX;
      suppressStageClick = false;
    });
    stageEl.addEventListener('pointerup', (event) => {
      if (pointerStartX === null) return;
      const deltaX = event.clientX - pointerStartX;
      pointerStartX = null;
      if (Math.abs(deltaX) > 45) {
        suppressStageClick = true;
        goToSlide(deltaX < 0 ? activeIndex + 1 : activeIndex - 1);
      }
    });
    stageLinkEl?.addEventListener('click', (event) => {
      if (suppressStageClick) {
        event.preventDefault();
        suppressStageClick = false;
      }
    });
  }

  document.addEventListener('datacnc:langchange', () => {
    syncAutoplayUI();
    renderSlide(activeIndex, { animate: false });
  });

  syncAutoplayUI();
  renderSlide(0, { animate: false });
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
    const isEn = getCurrentLang() === 'en';
    toggleBtn.setAttribute('aria-pressed', currentTheme === 'dark' ? 'true' : 'false');
    toggleBtn.setAttribute(
      'title',
      isEn
        ? (currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode')
        : (currentTheme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro')
    );
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

  document.addEventListener('datacnc:langchange', () => {
    updateToggleUI(document.documentElement.getAttribute('data-theme') || 'dark');
  });
}

/**
 * DATA CNC MX - Lógica Interactiva, Filtros de Productos, Fichas Técnicas y Agenda
 */

document.addEventListener('DOMContentLoaded', () => {
  initLanguageToggle();
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
    subtitle: 'Suelda, Corta y Limpia con chiller integrado y alimentador automático de alambre',
    tag: 'Fibra Óptica / 3 en 1',
    powerTag: '1500W - 3000W',
    image: 'assets/images/soldadora-rl-studio.jpg',
    description: 'Sistema industrial con fuente láser de fibra, chiller integrado, panel táctil superior, antorcha con cordón umbilical y alimentador automático de alambre. Acabado limpio casi sin post-procesamiento.',
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
    image: 'assets/images/soldadora-ra-studio.jpg',
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
    name: 'Compresor de Tornillo Rotativo 15 kW / 16 bar',
    subtitle: 'Aire seco y de alta presión especial para corte láser 24/7',
    tag: 'Special For Laser Cutting',
    powerTag: '15 kW · 16 bar',
    image: 'assets/images/compresor-tornillo-studio.jpg',
    description: 'Sistema integrado DATA CNC de 15 kW y 16 bar con compresor de tornillo rotativo, secador refrigerativo con filtros de aceite/partículas y tanque acumulador horizontal para expulsar metal fundido en corte láser.',
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
    image: 'assets/images/pintura-electrostatica-studio.jpg',
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
    name: 'DATA PROTECT: Soporte, Garantía y Consumibles',
    subtitle: 'Póliza integral, refacciones originales y kit de consumibles en stock CDMX',
    tag: 'Servicio y Consumibles',
    powerTag: 'Cobertura Nacional',
    image: 'assets/images/kit-consumibles-laser.jpg',
    description: 'Programa oficial de respaldo técnico postventa y stock permanente en CDMX: boquillas de cobre, lentes y ventanas de protección selladas, cerámicas de aislamiento, alineador, gafas láser y visita de técnicos certificados.',
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
    const isEn = getCurrentLang() === 'en';
    navMenu.classList.toggle('open', isOpen);
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
    toggleBtn.setAttribute(
      'aria-label',
      isEn
        ? (isOpen ? 'Close navigation menu' : 'Open navigation menu')
        : (isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación')
    );
    navMenu.inert = window.matchMedia('(max-width: 1100px)').matches && !isOpen;
  }

  document.addEventListener('datacnc:langchange', () => {
    if (toggleBtn) setMenuOpen(toggleBtn.getAttribute('aria-expanded') === 'true');
  });

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
    let hoverCloseTimer = null;
    const isDesktopNav = () => window.matchMedia('(min-width: 1101px)').matches;
    setDropdownOpen(false);
    dropdownTrigger.addEventListener('click', () => setDropdownOpen(dropdownTrigger.getAttribute('aria-expanded') !== 'true'));
    dropdownItem.addEventListener('mouseenter', () => {
      if (!isDesktopNav()) return;
      clearTimeout(hoverCloseTimer);
      setDropdownOpen(true);
    });
    dropdownItem.addEventListener('mouseleave', () => {
      if (!isDesktopNav()) return;
      hoverCloseTimer = setTimeout(() => setDropdownOpen(false), 120);
    });
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
  const isHome = document.body.classList.contains('home-page');

  const HOME_CARD_META = {
    'soldadora-rl-3en1': {
      appLabel: 'Soldadura láser',
      title: 'Soldadora Láser 3 en 1 RL',
      desc: 'Suelda, corta y limpia metales con alimentador automático de alambre.',
      facts: [['Potencia', '1500W – 3000W'], ['Refrigeración', 'Chiller de agua']]
    },
    'soldadora-ra-aire': {
      appLabel: 'Soldadura láser',
      title: 'Soldadora Láser RA Portátil',
      desc: 'Montajes en obra y cordones finos en formato compacto.',
      facts: [['Potencia', '800W – 1500W'], ['Refrigeración', 'Aire forzado']]
    },
    'cortadora-4x10': {
      appLabel: 'Corte CNC',
      title: 'Cortadora Láser Cama Plana 4×10',
      desc: 'Lámina y placa metálica con cabezal autofocus y control CypCut.',
      facts: [['Potencia', '1.5 kW – 12 kW'], ['Área útil', '1500 × 3000 mm']]
    },
    'compresor-tornillo': {
      appLabel: 'Aire industrial',
      title: 'Compresor de Tornillo DT-B',
      desc: 'Módulo 4 en 1 con secador refrigerativo para corte láser continuo.',
      facts: [['Potencia', '15 kW (20 HP)'], ['Presión', '16 bar · aire seco']]
    },
    'pintura-hornos': {
      appLabel: 'Acabados térmicos',
      title: 'Sistema DATA FLAME',
      desc: 'Cabinas ciclónicas de pintura en polvo y hornos de polimerización.',
      facts: [['Energía', 'Gas / Eléctrico'], ['Curado', '50°C – 250°C']]
    },
    'data-protect': {
      appLabel: 'Servicio postventa',
      title: 'Póliza DATA PROTECT',
      desc: 'Refacciones originales y kit de consumibles en almacén CDMX.',
      facts: [['Garantía', '12 meses'], ['Despacho', 'Inmediato CDMX']]
    }
  };

  const HOME_CARD_META_EN = {
    'soldadora-rl-3en1': {
      appLabel: 'Laser welding',
      title: '3-in-1 Laser Welder RL',
      desc: 'Welds, cuts, and cleans metals with an automatic wire feeder.',
      facts: [['Power', '1500W – 3000W'], ['Cooling', 'Water chiller']]
    },
    'soldadora-ra-aire': {
      appLabel: 'Laser welding',
      title: 'Portable Laser Welder RA',
      desc: 'On-site installations and fine weld seams in a compact frame.',
      facts: [['Power', '800W – 1500W'], ['Cooling', 'Forced air']]
    },
    'cortadora-4x10': {
      appLabel: 'CNC cutting',
      title: '4×10 Flatbed Laser Cutter',
      desc: 'Sheet and plate cutting with autofocus head and CypCut control.',
      facts: [['Power', '1.5 kW – 12 kW'], ['Work area', '1500 × 3000 mm']]
    },
    'compresor-tornillo': {
      appLabel: 'Industrial air',
      title: 'DT-B Screw Compressor',
      desc: '4-in-1 system with refrigerated dryer for continuous laser cutting.',
      facts: [['Power', '15 kW (20 HP)'], ['Pressure', '16 bar · dry air']]
    },
    'pintura-hornos': {
      appLabel: 'Thermal finishing',
      title: 'DATA FLAME System',
      desc: 'Cyclone powder coating booths and industrial curing ovens.',
      facts: [['Energy', 'Gas / Electric'], ['Curing', '50°C – 250°C']]
    },
    'data-protect': {
      appLabel: 'After-sales service',
      title: 'DATA PROTECT Plan',
      desc: 'Original spare parts and consumables kit stocked in CDMX.',
      facts: [['Warranty', '12 months'], ['Dispatch', 'Same-day CDMX']]
    }
  };

  let currentCategory = 'todos';

  function renderProducts(category = 'todos') {
    currentCategory = category;
    const isEn = getCurrentLang() === 'en';
    grid.innerHTML = '';
    const filtered = category === 'todos' 
      ? PRODUCTS_DATA 
      : PRODUCTS_DATA.filter(p => p.category === category);
    const count = document.getElementById('product-count');
    if (count) {
      if (isHome) {
        const showFilteredCount = category !== 'todos';
        const activeBtn = document.querySelector(`.filter-btn[data-filter="${category}"]`);
        const filterLabel = activeBtn ? activeBtn.textContent.trim().replace(/\s+/g, ' ') : '';
        count.hidden = !showFilteredCount;
        count.textContent = showFilteredCount
          ? (isEn
            ? `${filtered.length} ${filtered.length === 1 ? 'solution' : 'solutions'} in ${filterLabel}`
            : `${filtered.length} ${filtered.length === 1 ? 'solución' : 'soluciones'} en ${filterLabel}`)
          : '';
      } else {
        count.hidden = false;
        count.textContent = `${filtered.length} ${filtered.length === 1 ? 'solución disponible' : 'soluciones disponibles'} · Consulta los detalles de cada equipo`;
      }
    }

    if (!isHome && category === 'todos') {
      grid.classList.add('products-bento-grid');
    } else {
      grid.classList.remove('products-bento-grid');
    }

    grid.classList.toggle('is-single-result', !isHome && filtered.length === 1);
    filtered.forEach((product) => {
      const card = document.createElement('article');
      card.className = 'product-card';
      card.setAttribute('data-category', product.category);

      if (isHome) {
        const isService = product.id === 'data-protect' || product.category === 'soporte';
        card.classList.toggle('is-service-card', isService);
        const metaMap = isEn ? HOME_CARD_META_EN : HOME_CARD_META;
        const meta = metaMap[product.id] || {
          appLabel: product.tag,
          title: product.name,
          desc: product.subtitle,
          facts: [[isEn ? 'Capacity' : 'Capacidad', product.powerTag], [isEn ? 'Division' : 'Aplicación', product.divisionName]]
        };
        const factsHtml = meta.facts.map(([label, value]) => `
          <div><dt>${label}</dt><dd>${value}</dd></div>
        `).join('');
        const viewSpecsLabel = isEn ? 'View specs & details →' : 'Ver ficha y especificaciones →';
        const viewAria = `${viewSpecsLabel.replace(' →', '')}: ${meta.title}`;

        card.innerHTML = `
          <div class="product-thumb-wrapper">
            <div class="product-thumb-frame">
              <img class="product-thumb" src="${product.image}" alt="${meta.title}" loading="lazy" decoding="async" />
            </div>
          </div>
          <div class="product-content">
            <span class="product-kicker tech-mono">${meta.appLabel}</span>
            <h3 class="product-title">${meta.title}</h3>
            <p class="product-desc">${meta.desc}</p>
            <dl class="product-quick-facts">${factsHtml}</dl>
            <div class="product-actions">
              <a href="${product.fichaUrl || '#'}" class="btn btn-primary btn-ver-ficha product-card-link" aria-label="${viewAria}">
                ${viewSpecsLabel}
              </a>
            </div>
          </div>
        `;
        grid.appendChild(card);
        return;
      }

      // Asignar clases de Bento Grid asimétrico en páginas internas
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

    if (!isHome) decorateProductCards();
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
  document.addEventListener('datacnc:langchange', () => renderProducts(currentCategory));
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
  if (form) {
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

  const quickForm = document.getElementById('quick-quote-form');
  if (quickForm) {
    quickForm.addEventListener('submit', event => {
      event.preventDefault();
      if (!quickForm.reportValidity()) return;
      const isEn = getCurrentLang() === 'en';
      const nombre = quickForm.elements.name?.value.trim() || '';
      const phone = quickForm.elements.phone?.value.trim() || '';
      const machine = quickForm.elements.machine?.value || 'General';
      const state = quickForm.elements.state?.value.trim() || (isEn ? 'TBD' : 'Por definir');
      const text = isEn
        ? `Hello DATA CNC MX, I would like a quick quote from the homepage:\n- Name: ${nombre}\n- Phone/WhatsApp: ${phone}\n- Equipment: ${machine}\n- City/State: ${state}`
        : `Hola DATA CNC MX, solicito cotización rápida desde la página principal:\n- Nombre: ${nombre}\n- Teléfono/WhatsApp: ${phone}\n- Equipo de interés: ${machine}\n- Ciudad/Estado: ${state}`;

      window.open(`https://wa.me/5215527753215?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
      showToast(isEn ? 'WhatsApp is ready with your quote request.' : 'WhatsApp está listo con tu solicitud de cotización.');
    });
  }
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
 const shortSystemByProduct = {
  'soldadora-rl-3en1': 'Chiller + alimentador',
  'soldadora-ra-aire': 'Aire forzado (sin chiller)',
  'cortadora-4x10': 'Cabezal autofocus + CypCut',
  'compresor-tornillo': 'Secador + tanque 16 bar',
  'pintura-hornos': 'Cabina ciclónica + horno',
  'data-protect': 'Stock CDMX + técnicos'
 };
 const shortPowerByProduct = {
  'soldadora-rl-3en1': '220V Bifásico / Trifásico',
  'soldadora-ra-aire': '220V Monofásico / Bifásico',
  'cortadora-4x10': 'Industrial Trifásico',
  'compresor-tornillo': '15 kW · Operación 24/7',
  'pintura-hornos': 'Gas LP / Natural / Eléctrico',
  'data-protect': 'Cobertura Nacional'
 };
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
  const application = {soldadura:'Soldadura',corte:'Corte de lámina',compresores:'Aire industrial',pintura:'Pintura y curado',soporte:'Servicio y consumibles'}[product.category];
  const system = shortSystemByProduct[product.id] || 'Respaldo técnico';
  const supply = shortPowerByProduct[product.id] || 'Consultar por modelo';
  const facts = [['Capacidad',product.powerTag],['Aplicación',application],['Sistema',system],['Operación',supply]];
  const dl = document.createElement('dl'); dl.className = 'product-quick-facts';
  facts.forEach(([label,value]) => { const row = document.createElement('div'); const dt = document.createElement('dt'); const dd = document.createElement('dd'); dt.textContent=label; dd.textContent=value; row.append(dt,dd); dl.appendChild(row); });
  content.querySelector('.product-desc')?.after(dl);
 });
}
