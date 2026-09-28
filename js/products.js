/* products.html: renders each product's icon benefit grid from
   js/benefits-data.js, re-rendering on language change. */
(function () {
  "use strict";

  var DATA = window.MAHITALA_DATA;
  if (!DATA) return;

  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };
  var icon = DATA.icon;

  function currentLang() {
    return document.documentElement.getAttribute("lang") === "en" ? "en" : "id";
  }

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

  document.addEventListener("languagechange", function (e) { renderBenefits(e.detail.lang); });
  renderBenefits(currentLang());
})();
