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

/* Floating dock: tuck it away while scrolling down so it doesn't sit on top
   of content being read, bring it back on any scroll up, near the top, or
   at the very bottom of the page. Uses its own class so it never fights the
   product modal's .is-hidden toggle in main.js. */
(function () {
  "use strict";

  var dock = document.getElementById("dockNav");
  if (!dock) return;

  var lastY = window.scrollY;
  var ticking = false;

  function update() {
    ticking = false;
    var y = window.scrollY;
    var delta = y - lastY;
    if (Math.abs(delta) < 6) return;
    var nearTop = y < 120;
    var nearBottom = window.innerHeight + y >= document.documentElement.scrollHeight - 40;
    dock.classList.toggle("is-scroll-hidden", delta > 0 && !nearTop && !nearBottom);
    lastY = y;
  }

  window.addEventListener("scroll", function () {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(update);
    }
  }, { passive: true });

  dock.addEventListener("focusin", function () {
    dock.classList.remove("is-scroll-hidden");
  });
})();
