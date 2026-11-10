/* ==========================================================================
   Portfolio · main.js
   Mejoras progresivas: tema, menú móvil, scrollspy y animación de entrada.
   El sitio funciona sin este archivo.
   ========================================================================== */

(function () {
  "use strict";

  var root = document.documentElement;
  var THEME_KEY = "portfolio-theme";
  var THEME_COLORS = { light: "#fbfbfd", dark: "#0b0c10" };

  /* ------------------------------------------------------------------------
     Tema claro / oscuro
     El tema inicial lo aplica el script en línea del <head>.
     ------------------------------------------------------------------------ */

  var themeToggle = document.getElementById("theme-toggle");
  var themeMeta = document.querySelector('meta[name="theme-color"]');
  var colorScheme = window.matchMedia("(prefers-color-scheme: dark)");

  function themeLabel(theme) {
    return theme === "dark" ? "Cambiar a tema claro" : "Cambiar a tema oscuro";
  }

  function applyTheme(theme, persist) {
    root.dataset.theme = theme;

    if (themeMeta) {
      themeMeta.setAttribute("content", THEME_COLORS[theme] || THEME_COLORS.light);
    }

    if (themeToggle) {
      themeToggle.setAttribute("aria-label", themeLabel(theme));
    }

    if (persist) {
      try {
        localStorage.setItem(THEME_KEY, theme);
      } catch (error) {
        /* Modo privado o almacenamiento bloqueado: el tema dura la sesión. */
      }
    }
  }

  applyTheme(root.dataset.theme === "dark" ? "dark" : "light", false);

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      applyTheme(root.dataset.theme === "dark" ? "light" : "dark", true);
    });
  }

  colorScheme.addEventListener("change", function (event) {
    var stored = null;

    try {
      stored = localStorage.getItem(THEME_KEY);
    } catch (error) {
      stored = null;
    }

    if (!stored) {
      applyTheme(event.matches ? "dark" : "light", false);
    }
  });

  /* ------------------------------------------------------------------------
     Header: sombra al hacer scroll
     ------------------------------------------------------------------------ */

  var header = document.getElementById("site-header");

  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ------------------------------------------------------------------------
     Menú móvil
     ------------------------------------------------------------------------ */

  var menuToggle = document.getElementById("menu-toggle");

  if (header && menuToggle) {
    var setMenu = function (open) {
      header.classList.toggle("is-open", open);
      menuToggle.setAttribute("aria-expanded", String(open));
      menuToggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    };

    menuToggle.addEventListener("click", function () {
      setMenu(menuToggle.getAttribute("aria-expanded") !== "true");
    });

    header.addEventListener("click", function (event) {
      if (event.target.closest(".site-nav a")) {
        setMenu(false);
      }
    });

    document.addEventListener("click", function (event) {
      if (header.classList.contains("is-open") && !header.contains(event.target)) {
        setMenu(false);
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && header.classList.contains("is-open")) {
        setMenu(false);
        menuToggle.focus();
      }
    });

    var desktop = window.matchMedia("(min-width: 720px)");
    var onChangeDesktop = function (event) {
      if (event.matches) {
        setMenu(false);
      }
    };

    if (desktop.addEventListener) {
      desktop.addEventListener("change", onChangeDesktop);
    } else {
      desktop.addListener(onChangeDesktop);
    }
  }

  /* ------------------------------------------------------------------------
     Scrollspy: marca el enlace de la sección visible
     ------------------------------------------------------------------------ */

  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll('.site-nav a[href^="#"]')
  );

  var sections = navLinks
    .map(function (link) {
      var id = link.getAttribute("href").slice(1);
      return document.getElementById(id);
    })
    .filter(Boolean);

  if (sections.length && "IntersectionObserver" in window) {
    var setCurrent = function (id) {
      navLinks.forEach(function (link) {
        if (link.getAttribute("href") === "#" + id) {
          link.setAttribute("aria-current", "true");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    };

    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setCurrent(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach(function (section) {
      spy.observe(section);
    });
  }

  /* ------------------------------------------------------------------------
     Animación de aparición
     Solo si el navegador la soporta y no se pide movimiento reducido.
     ------------------------------------------------------------------------ */

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealEnabled = root.classList.contains("reveal-enabled");

  if ("IntersectionObserver" in window && !reducedMotion && revealEnabled) {
    var revealRan = false;
    window.__portfolioRevealReady = true;

    var reveal = new IntersectionObserver(
      function (entries) {
        revealRan = true;

        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            reveal.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    document.querySelectorAll(".reveal").forEach(function (element) {
      reveal.observe(element);
    });

    // Seguro: si el observador no llega a ejecutarse, muestra todo el contenido.
    window.setTimeout(function () {
      if (!revealRan) {
        root.classList.remove("reveal-enabled");
      }
    }, 2500);
  }

  /* ------------------------------------------------------------------------
     Año del footer
     ------------------------------------------------------------------------ */

  var year = document.getElementById("year");

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
})();
