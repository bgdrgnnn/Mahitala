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
      tagline: "Mineral kapur alami untuk konstruksi, industri, hingga pertanian — sumber Kalsium &amp; Magnesium serba guna.",
      forms: {
        powder: "Reaktivitas tinggi karena luas permukaan besar — ideal untuk campuran semen/beton, flux tanur baja, kaca, maupun pupuk dasar pertanian.",
        granule: "Butiran padat, minim debu, mudah ditebar atau dicampur dalam skala besar — cocok untuk aplikasi lahan luas maupun kebutuhan industri curah (bulk)."
      },
      benefits: [
        ["Multi-Industri: Konstruksi hingga Baja", "Bahan baku semen/beton serta flux pada peleburan baja dan metalurgi non-besi."],
        ["Bahan Baku Kaca, Keramik &amp; Pengolahan Air", "Digunakan pada manufaktur kaca-keramik dan proses netralisasi pengolahan air."],
        ["Menetralkan Keasaman Tanah", "Menaikkan pH tanah asam agar unsur hara lebih mudah diserap akar tanaman."],
        ["Sumber Kalsium &amp; Magnesium", "Mendukung pertumbuhan tanaman sekaligus menjadi bahan baku berbagai proses industri."]
      ],
      tags: ["Konstruksi", "Baja &amp; Metalurgi", "Kaca &amp; Pengolahan Air", "Pertanian"],
      ctaLabel: "Tanya Harga Dolomite"
    },
    phosphate: {
      visualClass: "phosphate",
      formula: "Ca₃(PO₄)₂",
      title: "Fosfat Alam",
      tagline: "Sumber fosfor alami untuk pupuk, pakan ternak, hingga kebutuhan industri kimia.",
      forms: {
        powder: "Luas permukaan besar sehingga fosfor lebih cepat tersedia — ideal untuk pupuk dasar, pembibitan, dan campuran pakan ternak.",
        granule: "Pelepasan fosfor bertahap (slow release), efisien untuk pemupukan tanaman tahunan maupun kebutuhan industri yang butuh pasokan stabil."
      },
      benefits: [
        ["Merangsang Pertumbuhan Akar &amp; Pembuahan", "Fosfor (P) mendukung perkembangan akar kuat serta pembentukan bunga dan buah pada tanaman."],
        ["Bahan Baku Pakan Ternak", "Sumber fosfor dan kalsium untuk suplemen mineral pada industri pakan ternak (feed grade)."],
        ["Bahan Baku Industri Kimia", "Diolah menjadi asam fosfat dan senyawa fosfat untuk kebutuhan industri kimia dan pengolahan air."],
        ["Pelepasan Hara Bertahap", "Fosfat alam melepas unsur hara secara perlahan, cocok untuk tanah asam dan lahan gambut."]
      ],
      tags: ["Pertanian", "Pakan Ternak", "Industri Kimia", "Pengolahan Air"],
      ctaLabel: "Tanya Harga Fosfat"
    },
    palmash: {
      visualClass: "palmash",
      formula: "K₂O Tinggi",
      title: "Abu Tandan Kosong Sawit",
      tagline: "Kalium alami hasil olahan limbah sawit — untuk pertanian dan potensi material konstruksi ramah lingkungan.",
      forms: {
        powder: "Kalium langsung larut dan tersedia cepat bagi tanaman; partikel halus juga cocok untuk riset campuran material bangunan ramah lingkungan.",
        granule: "Lebih tahan terhadap pencucian hujan (leaching), tidak beterbangan saat aplikasi, dan mudah disimpan dalam jumlah besar untuk kebutuhan skala industri."
      },
      benefits: [
        ["Sumber Kalium (K) Tinggi", "Alternatif alami pengganti KCl untuk meningkatkan bobot dan kualitas hasil panen."],
        ["Produk Ramah Lingkungan", "Hasil daur ulang limbah tandan kosong sawit — mendukung ekonomi sirkular perkebunan dan industri."],
        ["Potensi Bahan Campuran Material Bangunan", "Kandungan silika dan sifat pozzolanik abu sawit mulai diteliti dan digunakan sebagai campuran alternatif semen/beton ramah lingkungan."],
        ["Menaikkan pH &amp; Menyuburkan Tanah", "Bersifat basa sehingga membantu menetralkan tanah asam sekaligus menambah unsur hara mikro."]
      ],
      tags: ["Pertanian", "Ramah Lingkungan", "Konstruksi Hijau", "Ekonomi Sirkular"],
      ctaLabel: "Tanya Harga Abu Sawit"
    }
  };

  var PRODUCTS_EN = {
    dolomite: {
      visualClass: "dolomite",
      formula: "CaMg(CO₃)₂",
      title: "Dolomite",
      tagline: "Natural lime mineral for construction, industry, and agriculture — a versatile source of Calcium &amp; Magnesium.",
      forms: {
        powder: "Highly reactive due to its large surface area — ideal for cement/concrete mixes, steel furnace flux, glass, and agricultural base fertilizer.",
        granule: "Dense, low-dust granules that spread or blend easily at scale — suited for large land areas as well as bulk industrial needs."
      },
      benefits: [
        ["Multi-Industry: Construction to Steel", "Raw material for cement/concrete and flux for steel smelting and non-ferrous metallurgy."],
        ["Raw Material for Glass, Ceramics &amp; Water Treatment", "Used in glass-ceramics manufacturing and water treatment neutralization."],
        ["Neutralizes Soil Acidity", "Raises the pH of acidic soil so nutrients are more easily absorbed by plant roots."],
        ["Source of Calcium &amp; Magnesium", "Supports plant growth while also serving as feedstock for various industrial processes."]
      ],
      tags: ["Construction", "Steel &amp; Metallurgy", "Glass &amp; Water Treatment", "Agriculture"],
      ctaLabel: "Ask Dolomite Price"
    },
    phosphate: {
      visualClass: "phosphate",
      formula: "Ca₃(PO₄)₂",
      title: "Natural Rock Phosphate",
      tagline: "A natural phosphorus source for fertilizer, animal feed, and the chemical industry.",
      forms: {
        powder: "Large surface area makes phosphorus available faster — ideal for base fertilizer, seedlings, and animal feed blends.",
        granule: "Slow-release phosphorus, efficient for perennial crop fertilization and for industrial needs requiring a stable supply."
      },
      benefits: [
        ["Stimulates Root Growth &amp; Fruiting", "Phosphorus (P) supports strong root development along with flower and fruit formation."],
        ["Raw Material for Animal Feed", "A source of phosphorus and calcium for mineral supplements in the animal feed industry (feed grade)."],
        ["Raw Material for the Chemical Industry", "Processed into phosphoric acid and phosphate compounds for the chemical industry and water treatment."],
        ["Gradual Nutrient Release", "Rock phosphate releases nutrients slowly, suited for acidic soils and peatland."]
      ],
      tags: ["Agriculture", "Animal Feed", "Chemical Industry", "Water Treatment"],
      ctaLabel: "Ask Rock Phosphate Price"
    },
    palmash: {
      visualClass: "palmash",
      formula: "High K₂O",
      title: "Palm EFB Ash",
      tagline: "Natural potassium from processed palm waste — for agriculture, with potential as an eco-friendly construction material.",
      forms: {
        powder: "Potassium dissolves and becomes available to plants quickly; the fine particles are also suited for research into eco-friendly building material blends.",
        granule: "More resistant to rain leaching, doesn't blow away during application, and is easy to store in large quantities for industrial-scale needs."
      },
      benefits: [
        ["High Potassium (K) Source", "A natural alternative to KCl for improving the weight and quality of your harvest."],
        ["Environmentally Friendly Product", "Made from recycled palm empty fruit bunch waste — supporting a circular economy for plantations and industry."],
        ["Potential Construction Material Blend", "Palm ash's silica content and pozzolanic properties are being researched and used as an eco-friendly alternative cement/concrete blend."],
        ["Raises pH &amp; Enriches Soil", "Alkaline in nature, helping neutralize acidic soil while adding micronutrients."]
      ],
      tags: ["Agriculture", "Eco-Friendly", "Green Construction", "Circular Economy"],
      ctaLabel: "Ask Palm EFB Ash Price"
    }
  };

  function currentLang() {
    return document.documentElement.getAttribute("lang") === "en" ? "en" : "id";
  }

  function productsForLang(lang) {
    return lang === "en" ? PRODUCTS_EN : PRODUCTS;
  }

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

  function renderFormNoteHTML(product, form, lang) {
    var powderLabel = lang === "en" ? "Powder Form:" : "Bentuk Powder:";
    var granuleLabel = lang === "en" ? "Granule Form:" : "Bentuk Granule:";
    return (
      '<div class="form-note' + (form === "powder" ? " active" : "") + '">' +
        "<strong>" + powderLabel + "</strong> " + product.forms.powder +
      "</div>" +
      '<div class="form-note' + (form === "granule" ? " active" : "") + '">' +
        "<strong>" + granuleLabel + "</strong> " + product.forms.granule +
      "</div>"
    );
  }

  function renderBodyHTML(product, form, lang) {
    var benefitsHTML = product.benefits.map(function (b) {
      return '<li><span class="tick">' + TICK_SVG + "</span><div><strong>" + b[0] + "</strong><p>" + b[1] + "</p></div></li>";
    }).join("");
    var tagsHTML = product.tags.map(function (t) {
      return '<span class="spec-pill">' + t + "</span>";
    }).join("");
    var formLabel = form === "granule" ? "Granule" : "Powder";
    var waMessage = lang === "en"
      ? "Hello, I'd like to ask about the price of " + product.title + " (" + formLabel + ")."
      : "Halo, saya ingin bertanya harga " + product.title + " (" + formLabel + ").";
    var waHref = "https://wa.me/6281234567890?text=" + encodeURIComponent(waMessage);

    return (
      '<div class="form-note-wrap" id="formNoteWrap">' + renderFormNoteHTML(product, form, lang) + "</div>" +
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
  if (dockNav) {
    /* On touch devices a tapped link can stay visually focused since
       there's no mouse to un-hover it — blur right after the tap so only
       the scrollspy-driven .active class (not a stuck focus style)
       indicates the current section. */
    $$(".dock-item", dockNav).forEach(function (item) {
      item.addEventListener("click", function () {
        item.blur();
      });
    });
  }
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
  function applyProductView(product, form, opts) {
    var lang = (opts && opts.lang) || currentLang();
    var instant = opts && opts.instant;
    var side = form === "granule" ? "right" : "left";
    productCard.setAttribute("data-side", side);
    var visualDir = side === "right" ? "right" : "left";
    var bodyDir = side === "right" ? "left" : "right";

    var applyVisual = function () {
      visualSlot.className = "product-visual " + product.visualClass;
      visualSlot.innerHTML = renderVisualHTML(product, form);
    };
    var applyBody = function () {
      bodySlot.innerHTML = renderBodyHTML(product, form, lang);
      replayStagger($(".stagger-group", bodySlot));
    };

    if (instant) {
      applyVisual();
      applyBody();
    } else {
      slideProductSlot(visualSlot, visualDir, applyVisual);
      slideProductSlot(bodySlot, bodyDir, applyBody);
    }
  }

  function switchProduct(id) {
    if (!PRODUCTS[id]) return;
    var alreadyOpenOnThis = id === currentProductId && productModal.classList.contains("is-open");
    if (alreadyOpenOnThis) return;

    var wasOpen = productModal.classList.contains("is-open");
    var lang = currentLang();
    var product = productsForLang(lang)[id];
    currentProductId = id;
    currentForm = "powder";

    tabs.forEach(function (t) {
      var active = t.getAttribute("data-tab") === id;
      t.classList.toggle("active", active);
      t.setAttribute("aria-selected", String(active));
    });

    if (!wasOpen) openProductModal();
    applyProductView(product, currentForm, { lang: lang });
  }

  /* Re-render the open product modal in the new language without replaying
     the slide transition (the language toggle isn't a "swap sides" action). */
  document.addEventListener("languagechange", function (e) {
    if (!currentProductId || !productModal.classList.contains("is-open")) return;
    var lang = e.detail.lang;
    var product = productsForLang(lang)[currentProductId];
    applyProductView(product, currentForm, { lang: lang, instant: true });
  });

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
    var lang = currentLang();
    applyProductView(productsForLang(lang)[currentProductId], form, { lang: lang });
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

  /* An open FAQ answer's max-height is a snapshot in px; if the language
     switch changes the text's rendered height, resync it so content isn't
     clipped or left with a gap. */
  document.addEventListener("languagechange", function () {
    var openItem = $(".faq-item.open");
    if (!openItem) return;
    var a = $(".faq-a", openItem);
    a.style.maxHeight = a.scrollHeight + "px";
  });

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
    var ROTATOR_WORDS = { id: ["Industri", "Konstruksi", "Pertanian"], en: ["Industry", "Construction", "Agriculture"] };
    var rotatorIndex = 0;
    document.addEventListener("languagechange", function (e) {
      rotatorEl.textContent = ROTATOR_WORDS[e.detail.lang][rotatorIndex];
    });
    if (prefersReducedMotion) {
      /* leave the initial word as-is, no cycling */
    } else {
      setInterval(function () {
        var lang = currentLang();
        rotatorIndex = (rotatorIndex + 1) % ROTATOR_WORDS[lang].length;
        rotatorEl.style.transition = "transform 360ms cubic-bezier(0.16,1,0.3,1), opacity 300ms ease, filter 300ms ease";
        rotatorEl.style.transform = "translateY(-100%)";
        rotatorEl.style.opacity = "0";
        rotatorEl.style.filter = "blur(6px)";
        setTimeout(function () {
          rotatorEl.textContent = ROTATOR_WORDS[currentLang()][rotatorIndex];
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
