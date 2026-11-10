# Portfolio · Desarrolladora Web Junior

Portfolio personal estático, sin framework ni build: **HTML5 + CSS + JavaScript
vanilla**. Pensado para publicarse en GitHub Pages y usarse como carta de
presentación ante prácticas y primeras ofertas junior.

- Tema claro y oscuro (respeta el sistema y recuerda la elección).
- Responsive desde 320 px, menú móvil accesible y animaciones que respetan
  `prefers-reduced-motion`.
- SEO básico: metadatos, Open Graph y JSON-LD.
- Cero dependencias: no hay `npm install` ni compilación.

## Ver el sitio en local

Abre `index.html` con doble clic. También puedes servirlo con:

```sh
python -m http.server 8000
```

y visitar <http://localhost:8000>. (Abrir el archivo directamente también es
válido; solo necesitas un servidor si más adelante añades rutas absolutas.)

## Estructura

```text
index.html                 Todas las secciones.
robots.txt                 Rastreo y referencia al sitemap.
sitemap.xml                Mapa del sitio para buscadores.
assets/
  css/styles.css           Tokens de diseño, componentes y responsive.
  js/main.js               Tema, menú móvil, scrollspy y animación de entrada.
  img/                     favicon, foto, capturas y Open Graph.
  cv/cv.pdf                CV descargable (ahora es un PDF de ejemplo).
.opencode/skills/portfolio/SKILL.md
                           Convenciones del proyecto para futuras sesiones.
```

## Personalizar

El nombre ya está puesto como **Mona Lisa** y la foto es
`assets/img/MonaLisa.jpeg`. Si cambias de nombre, usa buscar y reemplazar en
`index.html`, `assets/img/og-image.svg` y el CV.

Busca el resto de marcadores con:

```powershell
Select-String -Path index.html -Pattern "\[Tu|\[tu|\[Nombre|\[Ciclo|\[Ingl|ejemplo|TODO"
```

| Marcador | Dónde | Qué poner |
| --- | --- | --- |
| `[Tu ciudad]` | Hero y "Sobre mí" | Ciudad y modalidad |
| `[Ciclo / bootcamp / curso]` | "Sobre mí" | Formación real |
| `[Inglés B1]` | "Sobre mí" | Nivel real |
| `hola@ejemplo.com` | Contacto y `mailto:` | Tu email real |
| `ejemplo` | Enlaces de proyecto, redes y JSON-LD | Tu usuario de GitHub y LinkedIn |
| `example.com` | URLs de demo | La URL real de cada proyecto |
| `[Nombre del proyecto N]` | Tarjetas de proyecto | Nombre real |

Después de cambiar el nombre:

1. Actualiza `<title>`, `<meta name="description">` y las etiquetas `og:`.
2. Regenera `assets/img/og-image.svg` o expórtalo a PNG 1200×630 y cambia la
   ruta en `og:image` (muchas redes sociales no muestran SVG).
3. Sustituye `assets/cv/cv.pdf` por tu CV real, manteniendo el nombre.

### Cambiar la foto

Sustituye `assets/img/MonaLisa.jpeg` por otra imagen y mantén el nombre del
archivo, o actualiza el `src` y los atributos `width`/`height` de la etiqueta
`<img>` en la sección "Sobre mí". El marco admite fotos cuadradas o verticales.

### Añadir un proyecto

Copia un bloque `<article class="project-card reveal">` dentro de
`.project-grid`, cambia la captura (`assets/img/`), el título, la descripción y
las etiquetas. La rejilla se adapta sola: 3, 4 o 6 tarjetas quedan bien.

### Cambiar el tema o el acento

Todos los colores viven en `:root` y `[data-theme="dark"]` al principio de
`assets/css/styles.css`. Cambia `--accent` en ambos bloques y ajusta
`<meta name="theme-color">` y `THEME_COLORS` en `assets/js/main.js` si cambias
el fondo.

## Publicar en GitHub Pages

1. Crea el repositorio **`mona47lisa.github.io`** en GitHub (público).
2. Desde esta carpeta:

   ```sh
   git init
   git add .
   git commit -m "Portfolio inicial"
   git branch -M main
   git remote add origin https://github.com/mona47lisa/mona47lisa.github.io.git
   git push -u origin main
   ```

3. En GitHub: **Settings → Pages → Source: Deploy from a branch**, rama `main`
   y carpeta `/ (root)`. Guarda.
4. En uno o dos minutos el sitio estará en <https://mona47lisa.github.io/>.

Cada `git push` a `main` republica automáticamente.

## Antes de publicar

- [ ] No queda ningún `TODO` ni marcador entre corchetes.
- [ ] Los enlaces de demo y repositorio existen de verdad.
- [ ] El CV descargado es el definitivo.
- [ ] Probado en móvil (320 px), tablet y escritorio.
- [ ] Navegación con teclado y tema oscuro revisados.
- [ ] Consola del navegador sin errores ni recursos 404.
- [ ] Lighthouse ≥ 90 en Rendimiento, Accesibilidad, Buenas prácticas y SEO.

## Convenciones para futuras sesiones

El skill `.opencode/skills/portfolio/SKILL.md` recoge el sistema de diseño,
las reglas de accesibilidad, la receta para añadir proyectos y el checklist de
publicación. OpenCode lo carga automáticamente al trabajar en este repositorio.
