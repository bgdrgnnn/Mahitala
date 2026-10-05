/* Shared product-benefit and sector-solution content used by the
   homepage product modal (main.js) and the product detail page
   (products.js). Icons are Lucide-style 24x24 stroke paths. */
(function () {
  "use strict";

  var ICONS = {
    ph: '<text x="12" y="16" text-anchor="middle" font-size="11" font-weight="900" fill="currentColor" stroke="none" font-family="Nunito, Segoe UI, Arial, sans-serif">pH</text><circle cx="12" cy="12" r="10"/>',
    droplet: '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>',
    waves: '<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>',
    leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>',
    sprout: '<path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/>',
    root: '<path d="M12 2v8"/><path d="M5 10h14"/><path d="M12 10v5l-3 3v4"/><path d="M12 15l3 3v4"/><path d="M12 13l-5 3v3"/><path d="M12 13l5 3v3"/>',
    flower: '<circle cx="12" cy="12" r="3"/><path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"/><path d="M12 7.5V9"/><path d="M7.5 12H9"/><path d="M16.5 12H15"/><path d="M12 16.5V15"/>',
    clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    weight: '<circle cx="12" cy="5" r="3"/><path d="M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"/>',
    recycle: '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
    factory: '<path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/>',
    flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
    building: '<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>',
    bricks: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 9v6"/><path d="M16 15v6"/><path d="M16 3v6"/><path d="M3 15h18"/><path d="M3 9h18"/><path d="M8 15v6"/><path d="M8 3v6"/>',
    layers: '<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
    flask: '<path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/>',
    wheat: '<path d="M2 22 16 8"/><path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"/>',
    roller: '<rect width="16" height="6" x="2" y="2" rx="2"/><path d="M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect width="4" height="6" x="8" y="16" rx="1"/>',
    drill: '<path d="M12 2v5"/><path d="M7 7h10l-1.5 6h-7z"/><path d="M9.5 13 12 22l2.5-9"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
    sparkles: '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>',
    atom: '<circle cx="12" cy="12" r="1"/><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.52-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.52 4.52 9.87 6.54 11.9 4.5Z"/><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"/>',
    fish: '<path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"/><path d="M18 12v.5"/><path d="M16 17.93a9.77 9.77 0 0 1 0-11.86"/><path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"/>',
    trending: '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
    shapes: '<path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"/><rect x="3" y="14" width="7" height="7" rx="1"/><circle cx="17.5" cy="17.5" r="3.5"/>',
    filter: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',
    bone: '<path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"/>',
    heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/>',
    mountain: '<path d="m8 3 4 8 5-5 5 15H2L8 3z"/>',
    gem: '<path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l4 13 4-13-3-6"/><path d="M2 9h20"/>',
    coins: '<circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><path d="m16.71 13.88.7.71-2.82 2.82"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>'
  };

  function icon(name) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[name] || "") + "</svg>";
  }

  var PRODUCT_NAMES = {
    dolomite: "Dolomite",
    phosphate: "Rock Phosphate",
    palmash: "Palm EFB Ash",
    clay: "Clay"
  };

  /* Six headline benefits per product; the homepage modal shows the first four. */
  var BENEFITS = {
    dolomite: [
      { icon: "ph",
        title: "Raises Soil & Water pH",
        desc: "Gradually neutralizes acidic soil and pond water — gentler than quicklime." },
      { icon: "waves",
        title: "Stabilizes Water Alkalinity",
        desc: "Keeps water buffered so daily pH doesn't swing sharply in ponds." },
      { icon: "atom",
        title: "Calcium & Magnesium Source",
        desc: "Ca strengthens plant tissue; Mg is the core of chlorophyll — greener leaves, better photosynthesis." },
      { icon: "layers",
        title: "Improves Soil Structure",
        desc: "Looser soil, active microbes, and more efficient NPK uptake." },
      { icon: "flame",
        title: "Steel Flux & Construction Material",
        desc: "Binds impurities into slag in furnaces and serves as cement filler and aggregate." },
      { icon: "gem",
        title: "Glass & Ceramics Raw Material",
        desc: "A CaO & MgO source that makes glass more chemically durable and less prone to clouding." }
    ],
    phosphate: [
      { icon: "root",
        title: "Strong, Wide Roots",
        desc: "Phosphorus (P) drives root growth so plants stand firmer and take up more nutrients." },
      { icon: "flower",
        title: "Uniform Flowering & Fruiting",
        desc: "Supports flower, fruit, and seed formation — for a bigger harvest." },
      { icon: "clock",
        title: "Slow Release, Fewer Applications",
        desc: "Nutrients release gradually with a residual effect lasting several seasons." },
      { icon: "ph",
        title: "Effective on Acidic & Peat Soils",
        desc: "The more acidic the soil, the more readily rock phosphate dissolves for plants." },
      { icon: "bone",
        title: "Animal Feed Mineral",
        desc: "P & Ca for strong bones, optimal growth, and thicker eggshells." },
      { icon: "flask",
        title: "Chemical Industry Feedstock",
        desc: "Processed into phosphoric acid and phosphate compounds for many industries." }
    ],
    palmash: [
      { icon: "weight",
        title: "High Potassium, Heavier Fruit",
        desc: "Potassium (K) improves fruit filling, bunch weight, and oil yield." },
      { icon: "shield",
        title: "Drought & Disease Resilience",
        desc: "K regulates stomata and strengthens plant cell walls." },
      { icon: "ph",
        title: "Alkaline, Raises pH",
        desc: "Helps neutralize acidic soil while fertilizing at the same time." },
      { icon: "sparkles",
        title: "Rich in Secondary & Micronutrients",
        desc: "Contains Ca, Mg, and silica that further enrich the soil." },
      { icon: "recycle",
        title: "Eco-Friendly & Circular",
        desc: "Recycled from palm empty fruit bunches — a natural alternative to KCl." },
      { icon: "building",
        title: "Green Concrete Potential",
        desc: "Reactive silica with pozzolanic properties for partial cement replacement." }
    ],
    clay: [
      { icon: "shapes",
        title: "High Plasticity",
        desc: "Easily shaped into ceramics, bricks, and roof tiles before firing." },
      { icon: "flame",
        title: "Strong & Heat-Resistant When Fired",
        desc: "Produces hard, dense, weather-resistant products." },
      { icon: "link",
        title: "Foundry Sand Binder",
        desc: "Bonding clay keeps metal-casting molds precise and firm." },
      { icon: "drill",
        title: "Drilling Mud Additive",
        desc: "Controls mud viscosity and supports the borehole wall." },
      { icon: "roller",
        title: "Filler for Paint, Paper & Rubber",
        desc: "Adds opacity and surface smoothness while lowering material cost." },
      { icon: "droplet",
        title: "High Binding & Water Retention",
        desc: "Helps sandy soil hold water and nutrients longer." }
    ]
  };

  /* Sector → product → action → outcome chains. `id` matches the
     data-sector values on the homepage Sector Solutions cards. */
  var SECTORS = [
    { id: "tambak", image: "assets/industries/03-fisheries-aquaculture.png",
      title: "Fisheries & Aquaculture",
      intro: "Water quality is the key to a good harvest. Our minerals keep pH, alkalinity, and water fertility in check so shrimp and fish grow at their best.",
      chains: [
        { product: "dolomite",
          outcomeImage: "assets/industries/benefits/tambak-1.webp",
          action: { icon: "ph", text: "Raises and stabilizes pond water & bottom pH and alkalinity" },
          result: { icon: "shield", text: "Less stressed shrimp, smooth molting, faster shell hardening — higher survival rate (SR)" } },
        { product: "dolomite",
          outcomeImage: "assets/industries/benefits/tambak-2.webp",
          action: { icon: "atom", text: "Supplies dissolved Ca & Mg needed to build the shell" },
          result: { icon: "trending", text: "Faster growth and more uniform harvest size" } },
        { product: "phosphate",
          outcomeImage: "assets/industries/benefits/tambak-3.webp",
          action: { icon: "sparkles", text: "Fertilizes water to grow phytoplankton" },
          result: { icon: "fish", text: "Stable water color & plenty of natural feed — more efficient feed use (FCR)" } }
      ] },
    { id: "pertanian", image: "assets/industries/08-agriculture-plantations.png",
      title: "Agriculture & Plantations",
      intro: "Most Indonesian farmland is acidic. Our mineral combination repairs the soil while supplying key plant nutrients.",
      chains: [
        { product: "dolomite",
          outcomeImage: "assets/industries/benefits/pertanian-1.webp",
          action: { icon: "ph", text: "Neutralizes acidic soil pH and adds Ca & Mg" },
          result: { icon: "leaf", text: "More available nutrients, greener leaves, more efficient NPK" } },
        { product: "phosphate",
          outcomeImage: "assets/industries/benefits/pertanian-2.webp",
          action: { icon: "root", text: "Supplies phosphorus gradually (slow release)" },
          result: { icon: "flower", text: "Strong roots, uniform flowering & fruiting, higher yields" } },
        { product: "palmash",
          outcomeImage: "assets/industries/benefits/pertanian-3.webp",
          action: { icon: "weight", text: "Adds high potassium (K) from a natural source" },
          result: { icon: "trending", text: "Heavier fruit, higher palm oil yield, drought-resilient plants" } },
        { product: "clay",
          outcomeImage: "assets/industries/benefits/pertanian-4.webp",
          action: { icon: "droplet", text: "Improves water and nutrient retention in sandy soil" },
          result: { icon: "sprout", text: "Fertilizer stays put and plants stay fresh in dry spells" } }
      ] },
    { id: "konstruksi", image: "assets/industries/01-construction-infrastructure.png",
      title: "Construction & Infrastructure",
      intro: "From cement to bricks, our minerals are raw materials and additives that make building materials stronger, more efficient, and greener.",
      chains: [
        { product: "dolomite",
          outcomeImage: "assets/industries/benefits/konstruksi-1.webp",
          action: { icon: "layers", text: "Serves as filler and aggregate in cement & concrete" },
          result: { icon: "coins", text: "Denser concrete at a more efficient material cost" } },
        { product: "palmash",
          outcomeImage: "assets/industries/benefits/konstruksi-2.webp",
          action: { icon: "sparkles", text: "Reactive pozzolanic silica partially replaces cement" },
          result: { icon: "recycle", text: "Lower carbon footprint — green concrete from palm waste" } },
        { product: "clay",
          outcomeImage: "assets/industries/benefits/konstruksi-3.webp",
          action: { icon: "bricks", text: "Raw material for bricks, roof tiles, and Al₂O₃/SiO₂ for cement clinker" },
          result: { icon: "building", text: "Strong, weather-resistant building materials" } }
      ] },
    { id: "baja", image: "assets/industries/02-steel-metallurgy.png",
      title: "Steel & Metallurgy",
      intro: "In furnaces and molds, our minerals help produce purer metal through a more reliable process.",
      chains: [
        { product: "dolomite",
          outcomeImage: "assets/industries/benefits/baja-1.webp",
          action: { icon: "flame", text: "As a flux, binds impurities (silica, sulfur, phosphorus) into slag" },
          result: { icon: "gem", text: "Purer steel with consistent quality" } },
        { product: "dolomite",
          outcomeImage: "assets/industries/benefits/baja-2.webp",
          action: { icon: "shield", text: "MgO in the slag protects the furnace refractory lining" },
          result: { icon: "clock", text: "Longer furnace life, lower maintenance costs" } },
        { product: "clay",
          outcomeImage: "assets/industries/benefits/baja-3-casting.webp",
          action: { icon: "link", text: "Bonding clay binds foundry molding sand" },
          result: { icon: "target", text: "Precise molds, smooth casting surfaces, fewer defects" } }
      ] },
    { id: "kaca", image: "assets/industries/04-glass-ceramics.png",
      title: "Glass & Ceramics",
      intro: "The right mineral composition determines the strength, clarity, and durability of glass and ceramic products.",
      chains: [
        { product: "dolomite",
          outcomeImage: "assets/industries/benefits/kaca-1.webp",
          action: { icon: "atom", text: "Contributes CaO & MgO to the glass batch" },
          result: { icon: "gem", text: "Glass that resists chemicals & weathering and doesn't cloud easily" } },
        { product: "clay",
          outcomeImage: "assets/industries/benefits/kaca-2.webp",
          action: { icon: "shapes", text: "Gives plasticity to the ceramic body" },
          result: { icon: "flame", text: "Easy to shape and strong after firing" } }
      ] },
    { id: "reklamasi", image: "assets/industries/05-mining-reclamation.png",
      title: "Mining & Reclamation",
      intro: "Former mining land is usually highly acidic and nutrient-poor. Our minerals restore it until it's ready to be replanted.",
      chains: [
        { product: "dolomite",
          outcomeImage: "assets/industries/benefits/reklamasi-1.webp",
          action: { icon: "ph", text: "Neutralizes acid mine drainage and acidic soil" },
          result: { icon: "filter", text: "Heavy metals settle out, discharge water is safer for the environment" } },
        { product: "phosphate",
          outcomeImage: "assets/industries/benefits/reklamasi-2.webp",
          action: { icon: "root", text: "Supplies phosphorus for revegetation seedling roots" },
          result: { icon: "sprout", text: "Seedlings root quickly and survive on degraded land" } },
        { product: "palmash",
          outcomeImage: "assets/industries/benefits/reklamasi-3.webp",
          action: { icon: "sparkles", text: "Adds potassium and raises the pH of overburden soil" },
          result: { icon: "leaf", text: "Cover crops establish quickly, reducing erosion" } }
      ] },
    { id: "pakan", image: "assets/industries/06-animal-feed-chemicals.png",
      title: "Animal Feed & Chemicals",
      intro: "Feed-grade minerals and chemical feedstock for livestock productivity and industrial needs.",
      chains: [
        { product: "phosphate",
          outcomeImage: "assets/industries/benefits/pakan-1-hen.webp",
          action: { icon: "bone", text: "Phosphorus & calcium source in feed rations" },
          result: { icon: "heart", text: "Strong bones, optimal growth, thicker eggshells" } },
        { product: "dolomite",
          outcomeImage: "assets/industries/benefits/pakan-2.webp",
          action: { icon: "atom", text: "Ca & Mg supplement for livestock and poultry feed" },
          result: { icon: "trending", text: "Prevents mineral deficiency, keeps livestock productive" } },
        { product: "clay",
          outcomeImage: "assets/industries/benefits/pakan-3.webp",
          action: { icon: "link", text: "Feed pellet binder" },
          result: { icon: "shield", text: "Pellets hold together, less feed waste" } },
        {"product":"dolomite","outcomeImage":"assets/industries/benefits/pakan-4-dry-bedding.png","action":{"icon":"droplet","text":"Applied to coop bedding to help absorb moisture"},"result":{"icon":"sparkles","text":"Drier bedding, reduced coop odors"}},
        {"product":"dolomite","outcomeImage":"assets/industries/benefits/pakan-5-coop-hygiene.png","action":{"icon":"shield","text":"Helps keep coop bedding dry and clean"},"result":{"icon":"shield","text":"Helps reduce flies and limit bacterial growth"}}
      ] },
    { id: "cat", image: "assets/industries/07-paint-plastics-rubber.png",
      title: "Paint, Plastics & Rubber",
      intro: "Mineral fillers cut formulation costs while improving the physical properties of the end product.",
      chains: [
        { product: "dolomite",
          outcomeImage: "assets/industries/benefits/cat-1.webp",
          action: { icon: "layers", text: "White carbonate filler in paint, plastics, and rubber" },
          result: { icon: "coins", text: "Lower resin/pigment cost, stiffer and more weather-resistant products" } },
        { product: "clay",
          outcomeImage: "assets/industries/benefits/cat-2.webp",
          action: { icon: "roller", text: "Pigment extender in paint, coatings, and paper" },
          result: { icon: "sparkles", text: "Better opacity & hiding power, smoother surfaces" } }
      ] }
  ];

  window.MAHITALA_DATA = {
    icon: icon,
    productNames: PRODUCT_NAMES,
    benefits: BENEFITS,
    sectors: SECTORS
  };
})();
