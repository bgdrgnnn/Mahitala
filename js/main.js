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
    if (window.scrollY > 12) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
    updateScrollProgress();
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------------- Product showcase: swap-side switcher ---------------- */
  function replayStagger(el) {
    if (!el) return;
    el.classList.remove("in-view");
    el.offsetWidth; /* force reflow so the transition replays */
    el.classList.add("in-view");
  }

  var TICK_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';

  var PRODUCTS = {
    dolomite: {
      visualClass: "dolomite",
      formula: "CaMg(CO₃)₂",
      title: "Dolomite",
      tagline: "Kapur pertanian untuk menetralkan keasaman tanah dan memasok Kalsium &amp; Magnesium.",
      forms: {
        powder: "Butiran halus, reaksi menetralkan pH lebih cepat. Cocok diaplikasikan langsung ke tanah sebelum tanam atau dicampur pupuk dasar.",
        granule: "Butiran padat, mudah ditebar dengan alat mekanis (spreader), minim debu, pelepasan hara bertahap (slow release) untuk lahan luas."
      },
      benefits: [
        ["Menetralkan Keasaman Tanah", "Menaikkan pH tanah asam agar unsur hara lebih mudah diserap akar tanaman."],
        ["Sumber Kalsium &amp; Magnesium", "Mendukung pembentukan dinding sel tanaman dan proses fotosintesis (klorofil)."],
        ["Memperbaiki Struktur Tanah", "Membuat tanah lebih gembur, meningkatkan aerasi dan drainase akar."],
        ["Meningkatkan Efektivitas Pupuk Lain", "pH tanah yang seimbang membuat pupuk NPK &amp; organik bekerja lebih optimal."]
      ],
      tags: ["Sawit", "Karet", "Tebu", "Padi &amp; Palawija"],
      ctaLabel: "Tanya Harga Dolomite"
    },
    phosphate: {
      visualClass: "phosphate",
      formula: "Ca₃(PO₄)₂",
      title: "Fosfat Alam",
      tagline: "Sumber fosfor alami untuk pertumbuhan akar, pembungaan, dan pembuahan.",
      forms: {
        powder: "Luas permukaan besar sehingga fosfor lebih cepat tersedia bagi tanaman. Ideal untuk pupuk dasar dan pembibitan.",
        granule: "Pelepasan fosfor bertahap (slow release) hingga beberapa bulan, efisien untuk pemupukan tanaman tahunan dan mengurangi frekuensi aplikasi."
      },
      benefits: [
        ["Merangsang Pertumbuhan Akar", "Fosfor (P) mendorong perkembangan akar yang kuat sejak fase awal tanam."],
        ["Mempercepat Pembungaan &amp; Pembuahan", "Mendukung pembentukan bunga, buah, dan biji secara optimal."],
        ["Pelepasan Hara Bertahap", "Fosfat alam melepas unsur hara secara perlahan, cocok untuk tanah asam dan lahan gambut."],
        ["Meningkatkan Hasil Panen", "Pupuk dasar yang efektif untuk perkebunan sawit, karet, dan tanaman pangan."]
      ],
      tags: ["Sawit", "Pembibitan", "Tanaman Pangan", "Hortikultura"],
      ctaLabel: "Tanya Harga Fosfat"
    },
    palmash: {
      visualClass: "palmash",
      formula: "K₂O Tinggi",
      title: "Abu Tandan Kosong Sawit",
      tagline: "Pupuk kalium alami hasil olahan limbah tandan kosong kelapa sawit (janjang).",
      forms: {
        powder: "Kalium langsung larut dan tersedia cepat bagi tanaman, cocok untuk aplikasi tabur di piringan pokok sawit.",
        granule: "Lebih tahan terhadap pencucian hujan (leaching), tidak beterbangan saat aplikasi, dan mudah disimpan dalam jumlah besar."
      },
      benefits: [
        ["Sumber Kalium (K) Tinggi", "Alternatif alami pengganti KCl untuk meningkatkan bobot dan kualitas buah sawit."],
        ["Produk Ramah Lingkungan", "Hasil daur ulang limbah tandan kosong sawit — mendukung ekonomi sirkular perkebunan."],
        ["Menaikkan pH &amp; Menyuburkan Tanah", "Bersifat basa sehingga membantu menetralkan tanah asam sekaligus menambah unsur hara mikro."],
        ["Meningkatkan Kualitas Tandan Buah", "Kalium berperan penting dalam pembentukan minyak dan bobot tandan buah segar (TBS)."]
      ],
      tags: ["Sawit", "Pupuk Organik", "Ramah Lingkungan"],
      ctaLabel: "Tanya Harga Abu Sawit"
    }
  };

  function renderVisualHTML(product, form) {
    return (
      '<div class="visual-glow" aria-hidden="true"></div>' +
      '<div class="texture"></div>' +
      '<span class="formula-badge">' + product.formula + "</span>" +
      '<div class="pv-title">' +
        "<h3>" + product.title + "</h3>" +
        "<p>" + product.tagline + "</p>" +
        '<div class="form-toggle">' +
          '<button class="' + (form === "powder" ? "active" : "") + '" data-form="powder">Powder</button>' +
          '<button class="' + (form === "granule" ? "active" : "") + '" data-form="granule">Granule</button>' +
        "</div>" +
      "</div>"
    );
  }

  function renderFormNoteHTML(product, form) {
    return (
      '<div class="form-note' + (form === "powder" ? " active" : "") + '">' +
        "<strong>Bentuk Powder:</strong> " + product.forms.powder +
      "</div>" +
      '<div class="form-note' + (form === "granule" ? " active" : "") + '">' +
        "<strong>Bentuk Granule:</strong> " + product.forms.granule +
      "</div>"
    );
  }

  function renderBodyHTML(product, form) {
    var benefitsHTML = product.benefits.map(function (b) {
      return '<li><span class="tick">' + TICK_SVG + "</span><div><strong>" + b[0] + "</strong><p>" + b[1] + "</p></div></li>";
    }).join("");
    var tagsHTML = product.tags.map(function (t) {
      return '<span class="spec-pill">' + t + "</span>";
    }).join("");
    var formLabel = form === "granule" ? "Granule" : "Powder";
    var waText = encodeURIComponent("Halo, saya ingin bertanya harga " + product.title + " (" + formLabel + ").");
    var waHref = "https://wa.me/6281234567890?text=" + waText;

    return (
      '<div class="form-note-wrap" id="formNoteWrap">' + renderFormNoteHTML(product, form) + "</div>" +
      '<ul class="benefit-list stagger-group">' + benefitsHTML + "</ul>" +
      '<div class="product-foot">' +
        '<div class="spec-pills">' + tagsHTML + "</div>" +
        '<a href="' + waHref + '" class="btn btn-dark btn-sm" target="_blank" rel="noopener">' + product.ctaLabel + "</a>" +
      "</div>"
    );
  }

  var tabs = $$(".product-pick-card");
  var productModal = $("#productModal");
  var productCard = $("#productCard");
  var productModalClose = $("#productModalClose");
  var visualSlot = $("#productVisualSlot");
  var bodySlot = $("#productBodySlot");
  var dockNav = $("#dockNav");
  var currentProductId = null;
  var currentForm = "powder";
  var prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function openProductModal() {
    productModal.classList.add("is-open");
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    if (dockNav) dockNav.classList.add("is-hidden");
  }

  function closeProductModal() {
    productModal.classList.remove("is-open");
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
    if (dockNav) dockNav.classList.remove("is-hidden");
    currentProductId = null;
    tabs.forEach(function (t) {
      t.classList.remove("active");
      t.setAttribute("aria-selected", "false");
    });
  }

  productModalClose.addEventListener("click", closeProductModal);
  productModal.addEventListener("click", function (e) {
    if (e.target === productModal) closeProductModal();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && productModal.classList.contains("is-open")) closeProductModal();
  });

  /* Visual and body slide in from opposite edges (kanan-kiri) so they read
     as trading places whenever the layout's side changes. */
  function slideProductSlot(slotEl, dir, applyChange) {
    if (prefersReducedMotion) { applyChange(); return; }
    applyChange();
    var offset = dir === "right" ? 64 : -64;
    slotEl.style.transition = "none";
    slotEl.style.opacity = "0";
    slotEl.style.filter = "blur(8px)";
    slotEl.style.transform = "translateX(" + offset + "px)";
    slotEl.getBoundingClientRect(); /* force reflow */
    requestAnimationFrame(function () {
      slotEl.style.transition = "transform 480ms cubic-bezier(0.16,1,0.3,1), opacity 400ms ease, filter 400ms ease";
      slotEl.style.opacity = "1";
      slotEl.style.filter = "blur(0px)";
      slotEl.style.transform = "translateX(0px)";
    });
  }

  /* Powder always anchors the image to the left, Granule to the right —
     the same rule for every product — so toggling powder/granule swaps
     the whole visual/body layout, not just the note text. */
  function applyProductView(product, form) {
    var side = form === "granule" ? "right" : "left";
    productCard.setAttribute("data-side", side);
    var visualDir = side === "right" ? "right" : "left";
    var bodyDir = side === "right" ? "left" : "right";

    slideProductSlot(visualSlot, visualDir, function () {
      visualSlot.className = "product-visual " + product.visualClass;
      visualSlot.innerHTML = renderVisualHTML(product, form);
    });
    slideProductSlot(bodySlot, bodyDir, function () {
      bodySlot.innerHTML = renderBodyHTML(product, form);
      replayStagger($(".stagger-group", bodySlot));
    });
  }

  function switchProduct(id) {
    if (!PRODUCTS[id]) return;
    var alreadyOpenOnThis = id === currentProductId && productModal.classList.contains("is-open");
    if (alreadyOpenOnThis) return;

    var wasOpen = productModal.classList.contains("is-open");
    var product = PRODUCTS[id];
    currentProductId = id;
    currentForm = "powder";

    tabs.forEach(function (t) {
      var active = t.getAttribute("data-tab") === id;
      t.classList.toggle("active", active);
      t.setAttribute("aria-selected", String(active));
    });

    if (!wasOpen) openProductModal();
    applyProductView(product, currentForm);
  }

  tabs.forEach(function (t) {
    t.addEventListener("click", function () { switchProduct(t.getAttribute("data-tab")); });

    if (!prefersReducedMotion) {
      t.addEventListener("mousemove", function (e) {
        var rect = t.getBoundingClientRect();
        var px = (e.clientX - rect.left) / rect.width;
        var py = (e.clientY - rect.top) / rect.height;
        var tiltMax = 10;
        t.style.setProperty("--tilt-x", ((0.5 - py) * tiltMax).toFixed(2) + "deg");
        t.style.setProperty("--tilt-y", ((px - 0.5) * tiltMax).toFixed(2) + "deg");
        t.style.setProperty("--mx", (px * 100).toFixed(1) + "%");
        t.style.setProperty("--my", (py * 100).toFixed(1) + "%");
      });
      t.addEventListener("mouseleave", function () {
        t.style.setProperty("--tilt-x", "0deg");
        t.style.setProperty("--tilt-y", "0deg");
      });
    }
  });

  $$("[data-tablink]").forEach(function (link) {
    link.addEventListener("click", function () {
      switchProduct(link.getAttribute("data-tablink"));
    });
  });

  /* Nested powder/granule toggle: powder keeps the image on the left,
     granule moves it to the right — the whole visual/body layout swaps. */
  visualSlot.addEventListener("click", function (e) {
    var btn = e.target.closest(".form-toggle button");
    if (!btn) return;
    var form = btn.getAttribute("data-form");
    if (form === currentForm) return;
    currentForm = form;
    applyProductView(PRODUCTS[currentProductId], form);
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
  var revealEls = $$(".reveal, .stagger-group");
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

  /* ---------------- Scrollspy: highlight dock item for section in view ---------------- */
  var navAnchors = $$('.dock-item[href^="#"]:not([target])');
  var spySections = navAnchors
    .map(function (a) { return document.querySelector(a.getAttribute("href")); })
    .filter(Boolean);

  if ("IntersectionObserver" in window && spySections.length) {
    var spyIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = "#" + entry.target.id;
        navAnchors.forEach(function (a) {
          a.classList.toggle("active", a.getAttribute("href") === id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
    spySections.forEach(function (s) { spyIO.observe(s); });
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

  /* ---------------- Contact headline word rotator ---------------- */
  var rotatorEl = $("#rotatorWord");
  if (rotatorEl) {
    var ROTATOR_WORDS = ["Pertanian", "Perkebunan", "Industri"];
    var rotatorIndex = 0;
    if (prefersReducedMotion) {
      /* leave the initial word as-is, no cycling */
    } else {
      setInterval(function () {
        rotatorIndex = (rotatorIndex + 1) % ROTATOR_WORDS.length;
        rotatorEl.style.transition = "transform 360ms cubic-bezier(0.16,1,0.3,1), opacity 300ms ease, filter 300ms ease";
        rotatorEl.style.transform = "translateY(-100%)";
        rotatorEl.style.opacity = "0";
        rotatorEl.style.filter = "blur(6px)";
        setTimeout(function () {
          rotatorEl.textContent = ROTATOR_WORDS[rotatorIndex];
          rotatorEl.style.transition = "none";
          rotatorEl.style.transform = "translateY(100%)";
          rotatorEl.getBoundingClientRect(); /* force reflow */
          requestAnimationFrame(function () {
            rotatorEl.style.transition = "transform 420ms cubic-bezier(0.16,1,0.3,1), opacity 380ms ease, filter 380ms ease";
            rotatorEl.style.transform = "translateY(0)";
            rotatorEl.style.opacity = "1";
            rotatorEl.style.filter = "blur(0px)";
          });
        }, 360);
      }, 2600);
    }
  }

  /* ---------------- Footer year ---------------- */
  var yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

})();
