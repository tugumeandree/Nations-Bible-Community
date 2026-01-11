document.addEventListener("DOMContentLoaded", () => {
  const navToggleButton = document.querySelector(".nav-toggle");
  const primaryNav = document.querySelector("nav.primary-nav");
  if (navToggleButton && primaryNav) {
    navToggleButton.addEventListener("click", () => {
      const isOpen = primaryNav.classList.toggle("open");
      navToggleButton.setAttribute("aria-expanded", String(isOpen));
    });
  }

  const yearSpans = document.querySelectorAll("[data-year]");
  const year = new Date().getFullYear();
  yearSpans.forEach((el) => { el.textContent = String(year); });
  // Netlify Forms handles submission; no JS interception required
});


