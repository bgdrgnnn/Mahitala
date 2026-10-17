/* products.html: Powder vs Granule explorer (mineral + form switch) and
   the Form Finder quiz that recommends a form and prefills WhatsApp. */
(function () {
  "use strict";

  var WA = "6285117541008";
  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  var SIZE = { powder: "60–325 mesh", granule: "2–5 mm" };
  var PRODUCTS = {
    dolomite: {
      name: "Dolomite",
      powder: "Popular for land preparation, shrimp-pond liming and as a raw material for fertilizer and glass.",
      granule: "Popular for top-dressing oil palm and other plantations, and for bulk blends with NPK."
    },
    phosphate: {
      name: "Natural Phosphate",
      powder: "Preferred by SP-36/NPK manufacturers and for direct incorporation into acidic soils.",
      granule: "Clean, direct application around plantation trees as a natural P source."
    },
    palmash: {
      name: "Palm Bunch Ash",
      powder: "Used in fertilizer blending and worked into the soil as a natural K source.",
      granule: "Easy broadcast application in plantations as a partial replacement for KCl."
    },
    clay: {
      name: "Clay",
      powder: "Used as a binder for feed pellets and fertilizer granulation, and in drilling mud.",
      granule: null
    }
  };

  /* ---------------- Explorer ---------------- */
  var ex = $("[data-pvg-explorer]");
  var state = { product: "dolomite", form: "powder" };

  function photo(product, form) { return "assets/products/" + product + "-" + form + ".jpg"; }

  function renderExplorer() {
    if (!ex) return;
    var P = PRODUCTS[state.product];
    if (!P[state.form]) state.form = "powder";
    ex.setAttribute("data-form", state.form);

    $$(".pvg-prod", ex).forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-product") === state.product));
    });
    $$(".pvg-switch button", ex).forEach(function (b) {
      var f = b.getAttribute("data-form");
      var unavailable = !P[f];
      b.setAttribute("aria-pressed", String(f === state.form));
      b.disabled = unavailable;
      b.title = unavailable ? P.name + " is supplied as powder only" : "";
    });
    $$(".pvg-panel", ex).forEach(function (panel) {
      var on = panel.getAttribute("data-panel") === state.form;
      if (on && panel.hidden) {
        panel.hidden = false;
        panel.classList.remove("is-entering");
        void panel.offsetWidth;
        panel.classList.add("is-entering");
      } else if (!on) {
        panel.hidden = true;
      }
    });

    var img = $(".pvg-img", ex);
    var src = photo(state.product, state.form);
    if (img.getAttribute("src") !== src) {
      ex.classList.add("is-swapping");
      var next = new Image();
      next.onload = next.onerror = function () {
        img.src = src;
        ex.classList.remove("is-swapping");
      };
      next.src = src;
    }
    img.alt = P.name + " " + state.form;
    $(".pvg-size", ex).textContent = SIZE[state.form];
    $(".pvg-tip strong", ex).textContent = P.name + " " + state.form;
    $(".pvg-tip span", ex).textContent = P[state.form];
  }

  if (ex) {
    $$(".pvg-prod", ex).forEach(function (b) {
      b.addEventListener("click", function () {
        state.product = b.getAttribute("data-product");
        renderExplorer();
      });
    });
    $$(".pvg-switch button", ex).forEach(function (b) {
      b.addEventListener("click", function () {
        state.form = b.getAttribute("data-form");
        renderExplorer();
      });
    });
    // Warm the cache so switching feels instant.
    Object.keys(PRODUCTS).forEach(function (k) {
      ["powder", "granule"].forEach(function (f) {
        if (PRODUCTS[k][f]) { new Image().src = photo(k, f); }
      });
    });
  }

  /* ---------------- Form Finder ---------------- */
  var finder = $("[data-pvg-finder]");
  if (!finder) return;

  var USE = {
    manufacturing: { p: 3, g: 0, why: "Powder blends and granulates easily in a processing line." },
    landprep: { p: 3, g: 0, why: "Powder reacts fast and mixes evenly into the soil before planting." },
    pond: { p: 3, g: 0, why: "Powder disperses in water and buffers pond pH and alkalinity quickly." },
    plantation: { p: 0, g: 3, why: "Granules spread cleanly around the trees and last longer in the field." },
    blending: { p: 0, g: 3, why: "Granules match the size of common granular fertilizers, so the blend stays mixed." },
    retail: { p: 0, g: 2, why: "Granules are low-dust and easy for farmers to handle and dose." }
  };
  var APP = {
    mixed: { p: 2, g: 0, why: "Mixing it into the soil or a process favours powder." },
    hand: { p: 0, g: 1, why: "For hand broadcasting, granules keep dust down." },
    spreader: { p: 0, g: 2, why: "Mechanical spreaders run best with free-flowing granules." },
    water: { p: 2, g: 0, why: "Over water, powder disperses fastest." }
  };

  var result = $(".pvg-result", finder);
  var title = $(".pvg-result-title", result);
  var why = $(".pvg-result-why", result);
  var cta = $(".pvg-result-cta", result);
  var view = $(".pvg-result-view", result);
  var recommended = null;

  function val(name) {
    var el = finder.querySelector('input[name="' + name + '"]:checked');
    return el ? el.value : null;
  }
  function label(name) {
    var el = finder.querySelector('input[name="' + name + '"]:checked');
    return el ? el.nextElementSibling.textContent : "";
  }

  function update() {
    var product = val("pf-product"), use = val("pf-use"), app = val("pf-app");
    var P = product ? PRODUCTS[product] : null;
    recommended = null;

    if (!use) {
      result.setAttribute("data-state", "empty");
      title.textContent = product ? "Now tell us how you will use it" : "Pick your answers above";
      why.textContent = "We will suggest the form that fits your use. You can change answers anytime.";
      view.hidden = true;
    } else {
      var u = USE[use], a = app ? APP[app] : { p: 0, g: 0, why: "" };
      var p = u.p + a.p, g = u.g + a.g;
      var form = p > g ? "powder" : g > p ? "granule" : null;
      var text = u.why + (a.why ? " " + a.why : "");

      if (P && form === "granule" && !P.granule) {
        form = "powder";
        text = P.name + " is supplied as powder only. Powder still works well here; ask us about the best size and dosage for your use.";
      } else if (!form) {
        text = "Your use and application point in different directions, so either form can work. Tell us more and we will recommend the right one.";
      }

      recommended = form;
      result.setAttribute("data-state", form || "either");
      title.textContent = form
        ? (P ? P.name + " " : "") + (form === "powder" ? "Powder (60–325 mesh)" : "Granule (2–5 mm)")
        : "Both forms can work";
      why.textContent = text;
      view.hidden = !form;
      if (form) view.textContent = "View " + form + " details";
    }

    var msg = "Hello Mahitala, I'd like advice on powder vs granule.";
    if (use) {
      msg = "Hello Mahitala, I'm interested in " + (P ? P.name : "your minerals") +
        (recommended ? " (" + recommended + ")" : "") + ".\n" +
        "Use: " + label("pf-use") + "\n" +
        (app ? "Application: " + label("pf-app") + "\n" : "") +
        "Could you advise on the right size, dosage and price?";
    }
    cta.href = "https://wa.me/" + WA + "?text=" + encodeURIComponent(msg);

    result.classList.remove("is-updated");
    void result.offsetWidth;
    result.classList.add("is-updated");
  }

  finder.addEventListener("change", update);

  view.addEventListener("click", function () {
    if (!recommended || !ex) return;
    var product = val("pf-product");
    if (product) state.product = product;
    state.form = recommended;
    renderExplorer();
    ex.scrollIntoView({ behavior: "smooth", block: "start" });
  });
})();
