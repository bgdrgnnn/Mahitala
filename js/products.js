/* products.html: renders each product's icon benefit grid from
   js/benefits-data.js. */
(function () {
  "use strict";

  var DATA = window.MAHITALA_DATA;
  if (!DATA) return;

  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };
  var icon = DATA.icon;

  function renderBenefits() {
    $$("[data-benefits]").forEach(function (grid) {
      var items = DATA.benefits[grid.getAttribute("data-benefits")] || [];
      grid.innerHTML = items.map(function (b) {
        return (
          '<li class="benefit-tile">' +
            '<span class="benefit-icon">' + icon(b.icon) + "</span>" +
            "<div><strong>" + b.title + "</strong><p>" + b.desc + "</p></div>" +
          "</li>"
        );
      }).join("");
    });
  }

  renderBenefits();
})();
