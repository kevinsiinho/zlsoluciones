(function () {
  /* Enlace único de WhatsApp con mensaje predefinido */
  var WA_URL =
    "https://wa.me/573106503324?text=" +
    encodeURIComponent(
      "Hola, me interesa conocer más sobre los servicios contables y financieros de ZL Soluciones."
    );

  document.querySelectorAll('a[href*="wa.me/573106503324"]').forEach(function (link) {
    link.href = WA_URL;
  });

  var header = document.getElementById("mainNav");
  var toggle = document.getElementById("headerToggle");
  var backdrop = document.getElementById("headerBackdrop");
  var navLinks = document.querySelectorAll(".site-header__link");
  var yearEl = document.getElementById("year");

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  function setMenuOpen(open) {
    header.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open);
    document.body.style.overflow = open ? "hidden" : "";
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  toggle.addEventListener("click", function () {
    setMenuOpen(!header.classList.contains("is-open"));
  });

  if (backdrop) {
    backdrop.addEventListener("click", closeMenu);
  }

  window.addEventListener("scroll", function () {
    header.classList.toggle("is-scrolled", window.scrollY > 60);
  });
  header.classList.toggle("is-scrolled", window.scrollY > 60);

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      closeMenu();
      navLinks.forEach(function (l) {
        l.classList.remove("active");
      });
      link.classList.add("active");
    });
  });

  var sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", function () {
    var scrollY = window.scrollY + 140;
    var current = "";

    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute("id");
      if (scrollY >= top && scrollY < top + height) {
        current = id;
      }
    });

    if (current) {
      navLinks.forEach(function (link) {
        var href = link.getAttribute("href").replace("#", "");
        link.classList.toggle("active", href === current);
      });
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 992) closeMenu();
  });
})();
