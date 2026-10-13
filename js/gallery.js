(function () {
  "use strict";

  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  /* ---------------- Header scroll state ---------------- */
  var header = $("#siteHeader");
  var scrollProgress = $("#scrollProgress");
  function updateScrollProgress() {
    if (!scrollProgress) return;
    var scrollable = document.documentElement.scrollHeight - window.innerHeight;
    var pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    scrollProgress.style.width = pct + "%";
  }
  var onScroll = function () {
    if (header) {
      if (window.scrollY > 12) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    }
    updateScrollProgress();
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------------- Dock: blur on tap (mobile stuck-hover fix) ---------------- */
  var dockNav = $("#dockNav");
  if (dockNav) {
    $$(".dock-item", dockNav).forEach(function (item) {
      item.addEventListener("click", function () {
        item.blur();
      });
    });
  }

  var prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- Scroll reveal ---------------- */
  var revealEls = $$(".reveal, .tilt-reveal, .stagger-group");
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

  /* ---------------- Gallery story carousels ---------------- */
  var storyCarouselResets = [];
  $$(".story-carousel[data-carousel]").forEach(function (carousel) {
    var track = $(".story-carousel-track", carousel);
    var slides = $$(".story-slide", track);
    var prevBtn = $(".story-carousel-nav.prev", carousel);
    var nextBtn = $(".story-carousel-nav.next", carousel);
    var dots = $$(".story-dot", carousel);
    if (!track || slides.length < 2) return;

    function currentIndex() {
      return Math.round(track.scrollLeft / track.clientWidth);
    }
    function goTo(index, instant) {
      index = Math.max(0, Math.min(slides.length - 1, index));
      track.scrollTo({ left: index * track.clientWidth, behavior: instant || prefersReducedMotion ? "auto" : "smooth" });
    }
    function updateUI() {
      var idx = currentIndex();
      dots.forEach(function (d, i) { d.classList.toggle("active", i === idx); });
      if (prevBtn) prevBtn.disabled = idx === 0;
      if (nextBtn) nextBtn.disabled = idx === slides.length - 1;
    }
    if (prevBtn) prevBtn.addEventListener("click", function () { goTo(currentIndex() - 1); });
    if (nextBtn) nextBtn.addEventListener("click", function () { goTo(currentIndex() + 1); });
    dots.forEach(function (dot, i) {
      dot.addEventListener("click", function () { goTo(i); });
    });
    var scrollTimer;
    track.addEventListener("scroll", function () {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(updateUI, 80);
    }, { passive: true });
    window.addEventListener("resize", function () {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(updateUI, 80);
    });
    updateUI();
    storyCarouselResets.push(function () { goTo(0, true); updateUI(); });
  });

  /* ---------------- Gallery story step index (left nav swaps the right carousel) ---------------- */
  var storySteps = $$(".story-step");
  var storyPanels = $$(".story-carousel-group[data-chapter-panel]");
  if (storySteps.length && storyPanels.length) {
    storySteps.forEach(function (step) {
      step.addEventListener("click", function () {
        if (step.classList.contains("active")) return;
        var target = step.getAttribute("data-chapter");
        storySteps.forEach(function (s) { s.classList.toggle("active", s === step); });
        storyPanels.forEach(function (panel) {
          var isTarget = panel.getAttribute("data-chapter-panel") === target;
          panel.hidden = !isTarget;
        });
        storyCarouselResets.forEach(function (reset) { reset(); });
      });
    });
  }

  /* ---------------- Copy buttons (About: NIB) ---------------- */
  $$("[data-copy]").forEach(function (btn) {
    var label = $("span", btn);
    btn.addEventListener("click", function () {
      var text = btn.getAttribute("data-copy");
      var done = function () {
        btn.classList.add("copied");
        if (label) label.textContent = "Copied";
        setTimeout(function () {
          btn.classList.remove("copied");
          if (label) label.textContent = "Copy";
        }, 1600);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, function () {});
      } else {
        var ta = document.createElement("textarea");
        ta.value = text; ta.setAttribute("readonly", ""); ta.style.position = "absolute"; ta.style.left = "-9999px";
        document.body.appendChild(ta); ta.select();
        try { document.execCommand("copy"); done(); } catch (e) { /* ignore */ }
        document.body.removeChild(ta);
      }
    });
  });

  /* ---------------- Footer year ---------------- */
  var yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------- Product detail visual form toggle (products.html) ---------------- */
  $$(".pdetail-visual").forEach(function (visual) {
    var img = $(".pdetail-visual-photo", visual);
    var buttons = $$(".form-toggle button", visual);
    if (!img || !buttons.length) return;
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (btn.classList.contains("active")) return;
        buttons.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        var src = visual.getAttribute("data-photo-" + btn.getAttribute("data-form"));
        if (src) img.src = src;
      });
    });
  });

})();
