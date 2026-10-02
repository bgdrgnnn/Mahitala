/* Header text nav, shared by every page: at <=1024px the menu collapses
   into a dropdown toggled by the hamburger button. */
(function () {
  "use strict";

  var header = document.getElementById("siteHeader");
  var navToggle = document.getElementById("navToggle");
  if (!header || !navToggle) return;

  function setNavOpen(open) {
    header.classList.toggle("nav-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  navToggle.addEventListener("click", function () {
    setNavOpen(!header.classList.contains("nav-open"));
  });
  Array.prototype.forEach.call(document.querySelectorAll("#headerNav a"), function (link) {
    link.addEventListener("click", function () { setNavOpen(false); });
  });
  document.addEventListener("click", function (e) {
    if (header.classList.contains("nav-open") && !header.contains(e.target)) setNavOpen(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && header.classList.contains("nav-open")) {
      setNavOpen(false);
      navToggle.focus();
    }
  });
  window.addEventListener("resize", function () {
    if (window.innerWidth > 1024) setNavOpen(false);
  });
})();
