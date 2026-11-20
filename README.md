# DATA CNC MX — Sitio Web Oficial Optimizado (Móvil y Escritorio)

Versión mejorada, de alto rendimiento y totalmente responsiva para **DATA CNC MX**, construida para corregir todas las deficiencias detectadas en la versión preliminar de Framer (`loud-status-517427.framer.app`).

---

## 🚀 Resumen de Mejoras Implementadas

| Aspecto | Versión Anterior (Framer) | Versión Nueva (DATA CNC MX) |
| :--- | :--- | :--- |
| **Responsividad Móvil** | 13 de las 14 páginas bloqueadas a `width=1280` (no se adaptaban a celulares) | **100% responsivo** en móviles (320px - 480px), tablets y pantallas 4K con menú desplegable táctil |
| **Imágenes** | Alojadas remotamente en Framer con riesgo de caducidad | **49 imágenes extraídas y descargadas localmente** en `assets/images/` con nombres descriptivos |
| **Descarga de Fichas Técnicas** | Botón inactivo / texto sin enlace en `/welding-rl` | **Modal interactivo con tabla completa de especificaciones** + botón de **Imprimir / Guardar en PDF** formateado en A4 |
| **Agendar Demostración** | Página vacía sin formulario ni selector de fechas | **Módulo interactivo de agenda** (presencial en Showroom Iztapalapa o virtual por videollamada) con confirmación directa a WhatsApp |
| **Ortografía y Textos** | Erratas graves en corte y soldadura (*"COTA"*, *"VELOCDIAD"*, *"CONVINA"*, *"UNIODDAD"*, *"TORNILO"*, *"SISSTEMA"*) | **Copy industrial impecable** revisado técnicamente para el sector metalmecánico |
| **Datos de Contacto** | Dummy `"Correo@correo.com"`, teléfono y dirección sin enlaces | Correo formal `ventas@datacncmx.com` (`mailto:`), teléfono directo (`tel:`), WhatsApp (`wa.me`) y Google Maps geolocalizado |
| **SEO y Metadatos** | Mismo título genérico y descripción duplicada en todo el sitio | **Títulos descriptivos, OpenGraph, metaetiquetas y schema.org JSON-LD LocalBusiness** |

---

## 📁 Estructura del Proyecto

```
data-cnc-mx/
├── index.html              # Estructura semántica HTML5, metadatos y modales
├── css/
│   └── style.css           # Estilos CSS modernos, variables, animaciones y media queries print/móvil
├── js/
│   └── main.js             # Lógica interactiva: filtros, render de fichas técnicas, modales y WhatsApp
├── assets/
│   └── images/             # Imágenes y logotipos originales extraídos y organizados
├── .vscode/
│   └── settings.json       # Configuración recomendada para Visual Studio Code
└── README.md               # Esta documentación
```

---

## 💻 Cómo Abrir y Ejecutar el Proyecto

### Opción 1: Directo en Visual Studio Code
1. Abre VS Code en la carpeta del proyecto:
   ```bash
   code "C:\Users\User\OneDrive\Documentos\data-cnc-mx"
   ```
2. Instala la extensión **Live Server** (de Ritwick Dey) en VS Code si aún no la tienes.
3. Haz clic derecho sobre `index.html` y selecciona **"Open with Live Server"**.

### Opción 2: Con Python (sin instalar librerías adicionales)
En tu terminal de PowerShell o CMD:
```bash
cd "C:\Users\User\OneDrive\Documentos\data-cnc-mx"
python -m http.server 8080
```
Luego abre en tu navegador: [http://localhost:8080](http://localhost:8080).

### Opción 3: Doble Clic
Haz doble clic sobre `index.html` en el explorador de archivos de Windows y se abrirá directamente en tu navegador predeterminado (Chrome, Edge, Firefox).

---

## ⚙️ Personalización Rápida

* **Cambiar el número de WhatsApp o Teléfono:**
  Busca en `index.html` y en `js/main.js` el número `5527753215` y reemplázalo por el número que desees.
* **Agregar o modificar máquinas:**
  En `js/main.js`, edita el arreglo `PRODUCTS_DATA`. Cada objeto incluye potencias, descripción, especificaciones de espesores de corte y soldadura por material, y su ruta de imagen.
* **Impresión de Fichas Técnicas:**
  Al abrir cualquier ficha técnica y presionar **"Imprimir / Guardar PDF"**, el navegador genera un documento limpio en hoja blanca con membrete de DATA CNC MX gracias al bloque `@media print` en `css/style.css`.
