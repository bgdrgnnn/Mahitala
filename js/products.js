/* products.html: renders each product's icon benefit grid and the
   "Solusi per Sektor" explorer from js/benefits-data.js, re-rendering on
   language change. Deep links: products.html#sektor-<id>. */
(function () {
  "use strict";

  var DATA = window.MAHITALA_DATA;
  if (!DATA) return;

  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };
  var icon = DATA.icon;

  var ARROW_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';

  var LABELS = {
    id: { action: "Cara Kerja", result: "Hasil", ask: "Konsultasikan kebutuhan sektor ini", products: "Produk yang digunakan" },
    en: { action: "How It Works", result: "Outcome", ask: "Discuss this sector's needs", products: "Products used" }
  };

  function currentLang() {
    return document.documentElement.getAttribute("lang") === "en" ? "en" : "id";
  }

  var PRODUCT_THUMBS = {
    dolomite: "assets/products/dolomite-powder.jpg",
    phosphate: "assets/products/phosphate-powder.jpg",
    palmash: "assets/products/palmash-powder.jpg",
    clay: "assets/products/clay-powder.jpg"
  };

  /* ---------------- Benefit grids ---------------- */
  function renderBenefits(lang) {
    $$("[data-benefits]").forEach(function (grid) {
      var items = DATA.benefits[grid.getAttribute("data-benefits")] || [];
      grid.innerHTML = items.map(function (b) {
        return (
          '<li class="benefit-tile">' +
            '<span class="benefit-icon">' + icon(b.icon) + "</span>" +
            "<div><strong>" + b.title[lang] + "</strong><p>" + b.desc[lang] + "</p></div>" +
          "</li>"
        );
      }).join("");
    });
  }

  /* ---------------- Sector explorer ---------------- */
  var tabsEl = $("#sectorTabs");
  var panelEl = $("#sectorPanel");
  var activeSector = DATA.sectors[0].id;

  function sectorById(id) {
    for (var i = 0; i < DATA.sectors.length; i++) {
      if (DATA.sectors[i].id === id) return DATA.sectors[i];
    }
    return null;
  }

  function renderTabs(lang) {
    tabsEl.innerHTML = DATA.sectors.map(function (s) {
      var active = s.id === activeSector;
      return (
        '<button type="button" class="sector-tab' + (active ? " active" : "") + '" role="tab"' +
          ' id="sector-tab-' + s.id + '" aria-controls="sectorPanel" aria-selected="' + active + '" data-sector="' + s.id + '">' +
          '<img src="' + s.image + '" alt="" loading="lazy" width="900" height="501">' +
          "<span>" + s.title[lang] + "</span>" +
        "</button>"
      );
    }).join("");
  }

  function renderPanel(lang) {
    var s = sectorById(activeSector);
    var L = LABELS[lang];
    var usedProducts = [];
    s.chains.forEach(function (c) {
      if (usedProducts.indexOf(c.product) === -1) usedProducts.push(c.product);
    });

    var chainsHTML = s.chains.map(function (c) {
      return (
        '<li class="chain-row">' +
          '<div class="chain-product ' + c.product + '">' +
            '<img src="' + PRODUCT_THUMBS[c.product] + '" alt="" loading="lazy" width="900" height="601">' +
            "<span>" + DATA.productNames[c.product][lang] + "</span>" +
          "</div>" +
          '<span class="chain-arrow">' + ARROW_SVG + "</span>" +
          '<div class="chain-step">' +
            '<span class="chain-icon">' + icon(c.action.icon) + "</span>" +
            "<div><small>" + L.action + "</small><p>" + c.action[lang] + "</p></div>" +
          "</div>" +
          '<span class="chain-arrow">' + ARROW_SVG + "</span>" +
          '<div class="chain-step result">' +
            '<span class="chain-icon">' + icon(c.result.icon) + "</span>" +
            "<div><small>" + L.result + "</small><p>" + c.result[lang] + "</p></div>" +
          "</div>" +
        "</li>"
      );
    }).join("");

    var pillsHTML = usedProducts.map(function (p) {
      return '<a href="#' + p + '" class="sector-product-pill ' + p + '">' + DATA.productNames[p][lang] + "</a>";
    }).join("");

    var waMessage = lang === "en"
      ? "Hello, I'd like to consult about products for the " + s.title.en + " sector."
      : "Halo, saya ingin konsultasi produk untuk sektor " + s.title.id + ".";

    panelEl.setAttribute("aria-labelledby", "sector-tab-" + s.id);
    panelEl.innerHTML =
      '<div class="sector-intro">' +
        '<div class="sector-illus"><img src="' + s.image + '" alt="' + s.title[lang] + '" loading="lazy" width="900" height="501"></div>' +
        "<h3>" + s.title[lang] + "</h3>" +
        "<p>" + s.intro[lang] + "</p>" +
        '<div class="sector-products"><small>' + L.products + "</small><div>" + pillsHTML + "</div></div>" +
        '<a href="https://wa.me/6281234567890?text=' + encodeURIComponent(waMessage) + '" class="btn btn-dark btn-sm" target="_blank" rel="noopener">' + L.ask + "</a>" +
      "</div>" +
      '<ol class="chain-list stagger-group">' + chainsHTML + "</ol>";

    var list = $(".chain-list", panelEl);
    list.offsetWidth; /* force reflow so the stagger transition plays */
    list.classList.add("in-view");
  }

  function selectSector(id, opts) {
    if (!sectorById(id)) return;
    activeSector = id;
    var lang = currentLang();
    $$(".sector-tab", tabsEl).forEach(function (t) {
      var on = t.getAttribute("data-sector") === id;
      t.classList.toggle("active", on);
      t.setAttribute("aria-selected", String(on));
    });
    renderPanel(lang);
    if (opts && opts.scroll) {
      var section = $("#sektor");
      if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function sectorFromHash() {
    var m = /^#sektor-([a-z]+)$/.exec(window.location.hash);
    return m && sectorById(m[1]) ? m[1] : null;
  }

  if (tabsEl && panelEl) {
    tabsEl.addEventListener("click", function (e) {
      var btn = e.target.closest(".sector-tab");
      if (!btn) return;
      var id = btn.getAttribute("data-sector");
      if (id === activeSector) return;
      selectSector(id);
      if (history.replaceState) history.replaceState(null, "", "#sektor-" + id);
    });

    tabsEl.addEventListener("keydown", function (e) {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      var tabs = $$(".sector-tab", tabsEl);
      var idx = tabs.indexOf(document.activeElement);
      if (idx === -1) return;
      e.preventDefault();
      var next = tabs[(idx + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length];
      next.focus();
      next.click();
    });

    window.addEventListener("hashchange", function () {
      var id = sectorFromHash();
      if (id) selectSector(id, { scroll: true });
    });

    var initial = sectorFromHash();
    if (initial) activeSector = initial;
  }

  function renderAll(lang) {
    renderBenefits(lang);
    if (tabsEl && panelEl) {
      renderTabs(lang);
      renderPanel(lang);
    }
  }

  document.addEventListener("languagechange", function (e) { renderAll(e.detail.lang); });
  renderAll(currentLang());

  /* The sector section is injected after first paint, so land on it once
     it has real height when arriving via products.html#sektor-<id>. */
  if (sectorFromHash()) {
    requestAnimationFrame(function () {
      var section = $("#sektor");
      if (section) section.scrollIntoView({ block: "start" });
    });
  }
})();
