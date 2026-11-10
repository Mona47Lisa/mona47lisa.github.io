---
name: Portfolio
description: Build, extend and maintain this junior web developer portfolio (vanilla HTML/CSS/JS, deployed on GitHub Pages). Use for any change to layout, sections, styling, copy, projects, accessibility or deployment.
---

# Portfolio · Web developer junior

Portfolio personal estático. Sin build, sin dependencias, sin framework: solo
HTML5, CSS moderno y JavaScript vanilla. El objetivo es publicarlo en GitHub
Pages (`mona47lisa.github.io`) y que sirva como carta de presentación ante
prácticas y primeras ofertas junior.

## Cuando usar este skill

- Añadir o editar una sección de `index.html`.
- Cambiar estilos, tokens de diseño o el tema claro/oscuro.
- Añadir un proyecto nuevo al listado.
- Revisar accesibilidad, responsive o rendimiento antes de publicar.
- Desplegar o actualizar el sitio en GitHub Pages.

## Mapa del proyecto

```
index.html                 Todas las secciones, en orden.
assets/css/styles.css      Tokens + componentes + responsive.
assets/js/main.js          Tema, menú móvil, scrollspy, reveal, año.
assets/img/                favicon, og-image, retrato y capturas.
assets/cv/cv.pdf           CV descargable (placeholder).
README.md                  Instrucciones para la persona dueña del repo.
```

Reglas de edición:

- No añadir frameworks, bundlers ni CDNs. Si algo se puede hacer con CSS o con
  20 líneas de JS, se hace así.
- Nada de estilo en línea ni `!important` salvo justificación clara.
- Mantener el orden de secciones: hero → sobre mí → proyectos → habilidades →
  contacto.

## Convenciones de código

### HTML

- Semántico: `header`, `nav`, `main`, `section`, `article`, `footer`.
- Cada `<section>` con `id` y `aria-labelledby` apuntando a su `h2`.
- Un solo `h1` (el del hero). Jerarquía de encabezados sin saltos.
- Enlaces con destino real. Nunca `href="#"`. Para URLs sin rellenar usar
  `https://example.com/...` o `https://github.com/ejemplo/...` (sintaxis válida)
  y un comentario `<!-- TODO: ... -->`; los corchetes en una URL la rompen.
- Las imágenes decorativas llevan `alt=""`; las de contenido describen qué se ve.
- Añadir `loading="lazy"` y `decoding="async"` a imágenes bajo el pliegue.

### CSS

- Mobile-first: estilos base para móvil y `@media (min-width: 720px)` /
  `(min-width: 900px)` para ampliar.
- Solo custom properties para color, espaciado, radios y sombras.
- Nombres de clase en kebab-case descriptivo (`.project-card`, `.hero-actions`).
  No usar BEM estricto: el proyecto es pequeño y los nombres ya son únicos.
- Las transiciones siempre cortas (150–250 ms) y anuladas en
  `@media (prefers-reduced-motion: reduce)`.

### JavaScript

- Un único archivo, sin módulos ni dependencias, cargado con `defer`.
- Cada bloque debe estar envuelto en un `if (elemento)` para que borrar una
  sección del HTML no rompa el resto.
- El sitio debe seguir siendo legible y navegable con JavaScript desactivado.
  El JS solo añade mejoras (tema, menú, animaciones).
- Antes de pintar el tema, el script en línea del `<head>` aplica
  `data-theme` para evitar el destello blanco.

## Sistema de diseño

Tokens declarados en `:root` (claro) y `[data-theme="dark"]`:

| Token | Uso |
| --- | --- |
| `--bg`, `--surface`, `--surface-2` | Fondos de página, tarjetas y bloques suaves |
| `--text`, `--muted` | Texto principal y secundario |
| `--border` | Bordes y separadores |
| `--accent`, `--accent-hover`, `--accent-soft`, `--on-accent` | Índigo de marca y sus variantes |
| `--shadow-sm`, `--shadow-md` | Elevación sutil y hover de tarjetas |
| `--radius-sm`, `--radius`, `--radius-lg` | 10 / 16 / 24 px |
| `--container`, `--gutter`, `--section-y` | Ancho máximo, padding lateral y ritmo vertical |

Tipografía: pila de sistema (`--font-sans`), sin fuentes externas. Títulos con
`clamp()`, `letter-spacing` negativo y `text-wrap: balance`. Cuerpo de texto
entre 1.05 y 1.15 rem, `line-height` ~1.65, ancho de lectura máximo 65ch.

Acento de marca: índigo. Claro `#4f46e5`, oscuro `#8b93ff`. No introducir un
segundo color de acento; para jerarquía usar superficie, borde y opacidad.

## Accesibilidad obligatoria

- Skip link visible al enfocar, como primer elemento del `body`.
- `:focus-visible` con contorno de 2 px en color de acento y 3 px de separación.
- Contraste mínimo AA: 4.5:1 en texto normal, 3:1 en texto grande e iconos.
- El botón de tema actualiza su `aria-label` ("Cambiar a tema oscuro/claro").
- El menú móvil usa `aria-expanded` y `aria-controls`, cierra con `Escape`,
  clic fuera y al elegir un enlace.
- Nunca transmitir información solo con color: acompañar con texto o icono.
- Respetar `prefers-reduced-motion` en animaciones y scroll suave.

## Voz y contenido

- Español neutro, primera persona, frases cortas y concretas.
- Nada de "apasionada" ni "pixel perfect". Describir qué se hizo y con qué.
- Cada proyecto: problema → solución → stack → resultado. Máximo 2 líneas de
  descripción en la tarjeta; el detalle va en el README del proyecto.
- Los textos sin rellenar se marcan con `[corchetes]` y un comentario
  `<!-- TODO: ... -->` para que se encuentren con una búsqueda de `TODO`.
- No inventar métricas, clientes ni experiencia. Si no hay datos, omitir.

## Receta: añadir un proyecto

1. Copiar una `<article class="project-card reveal">` existente dentro de
   `#projects-list` (o el contenedor equivalente en `index.html`).
2. Sustituir la captura: añadir `assets/img/proyecto-N.svg` (o `.webp` real,
   1600×1000) y actualizar `src`, `alt`, `width` y `height`.
3. Rellenar título, descripción (2 líneas) y etiquetas de stack con
   `<li class="tag">`.
4. Apuntar "Ver demo" a la URL publicada y "Código" al repositorio de GitHub.
5. Si el proyecto es el más fuerte, colocarlo primero.
6. Revisar que la rejilla quede equilibrada con 3, 4 o 6 tarjetas.

## Receta: editar el tema

1. Cambiar solo los tokens de `[data-theme="dark"]`; el resto hereda.
2. Verificar contraste sobre `--surface` y `--surface-2`, no solo sobre `--bg`.
3. Comprobar el estado hover de botones y enlaces.
4. Actualizar `<meta name="theme-color">` en el script en línea si cambia `--bg`.

## Checklist antes de publicar

- [ ] `TODO`, `[...]`, `ejemplo` y `example.com` resueltos.
- [ ] Sin `href="#"`, sin enlaces muertos, sin `console.log`.
- [ ] Probado a 320, 768 y 1280 px; sin scroll horizontal.
- [ ] Navegación completa con teclado, foco siempre visible.
- [ ] Menú móvil abre, cierra con `Escape` y no deja el `body` bloqueado.
- [ ] Tema claro y oscuro sin destello al recargar.
- [ ] Consola sin errores ni 404 (incluidas imágenes y CV).
- [ ] Lighthouse ≥ 90 en Rendimiento, Accesibilidad, Buenas prácticas y SEO.
- [ ] `og-image` sustituida por un PNG real de 1200×630.

## Despliegue

Repo de usuario: `mona47lisa.github.io`. Publica desde la raíz de `main`.

```sh
git init
git add .
git commit -m "Portfolio inicial"
git branch -M main
git remote add origin https://github.com/mona47lisa/mona47lisa.github.io.git
git push -u origin main
```

Después: GitHub → Settings → Pages → Source: *Deploy from a branch* →
Branch `main` / carpeta `/ (root)`. El sitio queda en
`https://mona47lisa.github.io/` en uno o dos minutos.

No hay paso de build: si el HTML se ve bien en local, se verá igual publicado.
Abrir `index.html` directamente en el navegador es suficiente para revisar.
