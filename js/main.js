(function () {
  "use strict";

  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  /* ---------------- Header scroll state ---------------- */
  var header = $("#siteHeader");
  var backToTop = $("#backToTop");
  function toggleBackToTop() {
    backToTop.classList.toggle("show", window.scrollY > 600);
  }
  var onScroll = function () {
    if (window.scrollY > 12) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
    toggleBackToTop();
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------------- Mobile nav ---------------- */
  var navToggle = $("#navToggle");
  var mobileNav = $("#mobileNav");
  var setNavOpen = function (open) {
    mobileNav.classList.toggle("open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  };
  navToggle.addEventListener("click", function () {
    setNavOpen(!mobileNav.classList.contains("open"));
  });
  $$("#mobileNav a").forEach(function (a) {
    a.addEventListener("click", function () { setNavOpen(false); });
  });

  /* ---------------- Product tabs ---------------- */
  var tabs = $$(".product-tab");
  var panels = $$(".product-panel");

  function activateTab(name) {
    tabs.forEach(function (t) {
      var active = t.getAttribute("data-tab") === name;
      t.classList.toggle("active", active);
      t.setAttribute("aria-selected", String(active));
    });
    panels.forEach(function (p) {
      p.classList.toggle("active", p.getAttribute("data-panel") === name);
    });
  }

  tabs.forEach(function (t) {
    t.addEventListener("click", function () { activateTab(t.getAttribute("data-tab")); });
  });

  $$("[data-tablink]").forEach(function (link) {
    link.addEventListener("click", function () {
      activateTab(link.getAttribute("data-tablink"));
    });
  });

  /* ---------------- Powder / Granule toggle per product ---------------- */
  $$(".form-toggle").forEach(function (toggle) {
    var product = toggle.getAttribute("data-formtoggle");
    var buttons = $$("button", toggle);
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var form = btn.getAttribute("data-form");
        buttons.forEach(function (b) { b.classList.toggle("active", b === btn); });
        $$('[data-formnote^="' + product + '-"]').forEach(function (note) {
          note.classList.toggle("active", note.getAttribute("data-formnote") === product + "-" + form);
        });
      });
    });
  });

  /* ---------------- FAQ accordion ---------------- */
  $$(".faq-item").forEach(function (item) {
    var q = $(".faq-q", item);
    var a = $(".faq-a", item);
    q.addEventListener("click", function () {
      var willOpen = !item.classList.contains("open");
      $$(".faq-item").forEach(function (other) {
        other.classList.remove("open");
        $(".faq-a", other).style.maxHeight = null;
      });
      if (willOpen) {
        item.classList.add("open");
        a.style.maxHeight = a.scrollHeight + "px";
      }
    });
  });

  /* ---------------- Scroll reveal ---------------- */
  var revealEls = $$(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in-view"); });
  }

  /* ---------------- Animated counters ---------------- */
  var counters = $$("[data-counter]");
  function animateCounter(el) {
    var target = parseInt(el.getAttribute("data-target"), 10) || 0;
    var valueEl = el.classList.contains("num") ? $(".value", el) : el;
    if (!valueEl) valueEl = el;
    var duration = 1400;
    var start = null;

    function step(ts) {
      if (start === null) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.round(eased * target);
      valueEl.textContent = current.toLocaleString("id-ID");
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  if ("IntersectionObserver" in window && counters.length) {
    var counterIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach(function (el) { counterIO.observe(el); });
  }

  /* ---------------- Back to top ---------------- */
  backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------------- Contact form validation ---------------- */
  var form = $("#contactForm");
  var successBox = $("#formSuccess");

  function validateField(field) {
    var input = field.querySelector("input, textarea, select");
    if (!input || !input.hasAttribute("required")) return true;
    var valid = input.checkValidity() && input.value.trim().length > 0;
    field.classList.toggle("invalid", !valid);
    return valid;
  }

  if (form) {
    $$(".field", form).forEach(function (field) {
      var input = field.querySelector("input, textarea, select");
      if (!input) return;
      input.addEventListener("blur", function () { validateField(field); });
      input.addEventListener("input", function () {
        if (field.classList.contains("invalid")) validateField(field);
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var fields = $$(".field", form);
      var allValid = fields.reduce(function (acc, f) { return validateField(f) && acc; }, true);
      if (!allValid) {
        var firstInvalid = form.querySelector(".field.invalid input, .field.invalid textarea, .field.invalid select");
        if (firstInvalid) firstInvalid.focus();
        return;
      }
      successBox.classList.add("show");
      form.reset();
      $$(".field", form).forEach(function (f) { f.classList.remove("invalid"); });
      successBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }

  /* ---------------- Footer year ---------------- */
  var yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------- Smooth scroll offset for fixed header ---------------- */
  $$('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var id = link.getAttribute("href");
      if (id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var headerHeight = header.offsetHeight + 16;
      var top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top: top, behavior: "smooth" });
    });
  });
})();
