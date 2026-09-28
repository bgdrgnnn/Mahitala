/* Shared product-benefit and sector-solution content (ID/EN) used by the
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
    dolomite: { id: "Dolomite", en: "Dolomite" },
    phosphate: { id: "Fosfat Alam", en: "Rock Phosphate" },
    palmash: { id: "Abu Tandan Sawit", en: "Palm EFB Ash" },
    clay: { id: "Lempung", en: "Clay" }
  };

  /* Six headline benefits per product; the homepage modal shows the first four. */
  var BENEFITS = {
    dolomite: [
      { icon: "ph",
        title: { id: "Menaikkan pH Tanah & Air", en: "Raises Soil & Water pH" },
        desc: { id: "Menetralkan keasaman tanah dan air tambak secara bertahap — lebih aman dari kapur tohor.", en: "Gradually neutralizes acidic soil and pond water — gentler than quicklime." } },
      { icon: "waves",
        title: { id: "Menstabilkan Alkalinitas Air", en: "Stabilizes Water Alkalinity" },
        desc: { id: "Menjaga buffer air sehingga pH harian tidak naik-turun drastis di tambak dan kolam.", en: "Keeps water buffered so daily pH doesn't swing sharply in ponds." } },
      { icon: "atom",
        title: { id: "Sumber Kalsium & Magnesium", en: "Calcium & Magnesium Source" },
        desc: { id: "Ca memperkuat jaringan tanaman; Mg adalah inti klorofil — daun hijau, fotosintesis optimal.", en: "Ca strengthens plant tissue; Mg is the core of chlorophyll — greener leaves, better photosynthesis." } },
      { icon: "layers",
        title: { id: "Memperbaiki Struktur Tanah", en: "Improves Soil Structure" },
        desc: { id: "Tanah lebih gembur, mikroba aktif, dan pupuk NPK terserap lebih efisien.", en: "Looser soil, active microbes, and more efficient NPK uptake." } },
      { icon: "flame",
        title: { id: "Flux Baja & Bahan Konstruksi", en: "Steel Flux & Construction Material" },
        desc: { id: "Mengikat pengotor menjadi slag di tanur serta menjadi filler semen dan agregat.", en: "Binds impurities into slag in furnaces and serves as cement filler and aggregate." } },
      { icon: "gem",
        title: { id: "Bahan Baku Kaca & Keramik", en: "Glass & Ceramics Raw Material" },
        desc: { id: "Sumber CaO & MgO yang membuat kaca lebih tahan kimia dan tidak mudah buram.", en: "A CaO & MgO source that makes glass more chemically durable and less prone to clouding." } }
    ],
    phosphate: [
      { icon: "root",
        title: { id: "Akar Kuat & Luas", en: "Strong, Wide Roots" },
        desc: { id: "Fosfor (P) merangsang perakaran sehingga tanaman lebih kokoh dan menyerap hara lebih banyak.", en: "Phosphorus (P) drives root growth so plants stand firmer and take up more nutrients." } },
      { icon: "flower",
        title: { id: "Pembungaan & Pembuahan Serempak", en: "Uniform Flowering & Fruiting" },
        desc: { id: "Mendukung pembentukan bunga, buah, dan biji — hasil panen lebih banyak.", en: "Supports flower, fruit, and seed formation — for a bigger harvest." } },
      { icon: "clock",
        title: { id: "Slow Release, Hemat Aplikasi", en: "Slow Release, Fewer Applications" },
        desc: { id: "Hara dilepas bertahap dan efek residunya bertahan beberapa musim tanam.", en: "Nutrients release gradually with a residual effect lasting several seasons." } },
      { icon: "ph",
        title: { id: "Efektif di Tanah Masam & Gambut", en: "Effective on Acidic & Peat Soils" },
        desc: { id: "Makin masam tanahnya, makin mudah fosfat alam larut dan tersedia bagi tanaman.", en: "The more acidic the soil, the more readily rock phosphate dissolves for plants." } },
      { icon: "bone",
        title: { id: "Mineral Pakan Ternak", en: "Animal Feed Mineral" },
        desc: { id: "Sumber P & Ca untuk tulang kuat, pertumbuhan optimal, dan kerabang telur tebal.", en: "P & Ca for strong bones, optimal growth, and thicker eggshells." } },
      { icon: "flask",
        title: { id: "Bahan Baku Industri Kimia", en: "Chemical Industry Feedstock" },
        desc: { id: "Diolah menjadi asam fosfat dan senyawa fosfat untuk berbagai industri.", en: "Processed into phosphoric acid and phosphate compounds for many industries." } }
    ],
    palmash: [
      { icon: "weight",
        title: { id: "Kalium Tinggi, Buah Lebih Berat", en: "High Potassium, Heavier Fruit" },
        desc: { id: "Kalium (K) meningkatkan pengisian buah, bobot TBS, dan rendemen minyak.", en: "Potassium (K) improves fruit filling, bunch weight, and oil yield." } },
      { icon: "shield",
        title: { id: "Tanaman Tahan Kekeringan & Penyakit", en: "Drought & Disease Resilience" },
        desc: { id: "K mengatur buka-tutup stomata dan memperkuat dinding sel tanaman.", en: "K regulates stomata and strengthens plant cell walls." } },
      { icon: "ph",
        title: { id: "Bersifat Basa, Menaikkan pH", en: "Alkaline, Raises pH" },
        desc: { id: "Membantu menetralkan tanah asam sekaligus memupuk.", en: "Helps neutralize acidic soil while fertilizing at the same time." } },
      { icon: "sparkles",
        title: { id: "Kaya Hara Sekunder & Mikro", en: "Rich in Secondary & Micronutrients" },
        desc: { id: "Mengandung Ca, Mg, dan silika yang ikut menyuburkan tanah.", en: "Contains Ca, Mg, and silica that further enrich the soil." } },
      { icon: "recycle",
        title: { id: "Ramah Lingkungan & Sirkular", en: "Eco-Friendly & Circular" },
        desc: { id: "Hasil daur ulang tandan kosong sawit — alternatif alami pengganti KCl.", en: "Recycled from palm empty fruit bunches — a natural alternative to KCl." } },
      { icon: "building",
        title: { id: "Potensi Beton Hijau", en: "Green Concrete Potential" },
        desc: { id: "Silika reaktif bersifat pozzolanik untuk substitusi sebagian semen.", en: "Reactive silica with pozzolanic properties for partial cement replacement." } }
    ],
    clay: [
      { icon: "shapes",
        title: { id: "Plastisitas Tinggi", en: "High Plasticity" },
        desc: { id: "Mudah dibentuk menjadi keramik, bata, dan genteng sebelum dibakar.", en: "Easily shaped into ceramics, bricks, and roof tiles before firing." } },
      { icon: "flame",
        title: { id: "Kuat & Tahan Panas Setelah Dibakar", en: "Strong & Heat-Resistant When Fired" },
        desc: { id: "Menghasilkan produk yang keras, padat, dan tahan cuaca.", en: "Produces hard, dense, weather-resistant products." } },
      { icon: "link",
        title: { id: "Pengikat Pasir Cetak", en: "Foundry Sand Binder" },
        desc: { id: "Bonding clay membuat cetakan pengecoran logam presisi dan kokoh.", en: "Bonding clay keeps metal-casting molds precise and firm." } },
      { icon: "drill",
        title: { id: "Aditif Lumpur Pemboran", en: "Drilling Mud Additive" },
        desc: { id: "Mengontrol kekentalan lumpur dan menahan dinding lubang bor.", en: "Controls mud viscosity and supports the borehole wall." } },
      { icon: "roller",
        title: { id: "Filler Cat, Kertas & Karet", en: "Filler for Paint, Paper & Rubber" },
        desc: { id: "Menambah opasitas, kehalusan permukaan, dan menekan biaya bahan.", en: "Adds opacity and surface smoothness while lowering material cost." } },
      { icon: "droplet",
        title: { id: "Daya Ikat & Simpan Air Tinggi", en: "High Binding & Water Retention" },
        desc: { id: "Membantu tanah berpasir menahan air dan hara lebih lama.", en: "Helps sandy soil hold water and nutrients longer." } }
    ]
  };

  /* Sector → product → action → outcome chains. `id` doubles as the
     products.html#sektor-<id> deep-link used by the homepage industry cards. */
  var SECTORS = [
    { id: "tambak", image: "assets/industries/03-fisheries-aquaculture.png",
      title: { id: "Perikanan & Tambak", en: "Fisheries & Aquaculture" },
      intro: { id: "Kualitas air adalah kunci panen tambak. Mineral kami menjaga pH, alkalinitas, dan kesuburan air agar udang dan ikan tumbuh optimal.", en: "Water quality is the key to a good harvest. Our minerals keep pH, alkalinity, and water fertility in check so shrimp and fish grow at their best." },
      chains: [
        { product: "dolomite",
          action: { icon: "ph", id: "Menaikkan & menstabilkan pH serta alkalinitas air dan dasar tambak", en: "Raises and stabilizes pond water & bottom pH and alkalinity" },
          result: { icon: "shield", id: "Udang tidak stres, molting lancar, kulit cepat keras — survival rate (SR) lebih tinggi", en: "Less stressed shrimp, smooth molting, faster shell hardening — higher survival rate (SR)" } },
        { product: "dolomite",
          action: { icon: "atom", id: "Menyuplai Ca & Mg terlarut yang dibutuhkan untuk pembentukan cangkang", en: "Supplies dissolved Ca & Mg needed to build the shell" },
          result: { icon: "trending", id: "Pertumbuhan lebih cepat dan ukuran panen lebih seragam", en: "Faster growth and more uniform harvest size" } },
        { product: "phosphate",
          action: { icon: "sparkles", id: "Menyuburkan air untuk menumbuhkan fitoplankton", en: "Fertilizes water to grow phytoplankton" },
          result: { icon: "fish", id: "Warna air stabil & pakan alami melimpah — pemakaian pakan (FCR) lebih efisien", en: "Stable water color & plenty of natural feed — more efficient feed use (FCR)" } }
      ] },
    { id: "pertanian", image: "assets/industries/08-agriculture-plantations.png",
      title: { id: "Pertanian & Perkebunan", en: "Agriculture & Plantations" },
      intro: { id: "Sebagian besar lahan Indonesia bersifat masam. Kombinasi mineral kami memperbaiki tanah sekaligus melengkapi hara utama tanaman.", en: "Most Indonesian farmland is acidic. Our mineral combination repairs the soil while supplying key plant nutrients." },
      chains: [
        { product: "dolomite",
          action: { icon: "ph", id: "Menetralkan pH tanah masam serta menambah Ca & Mg", en: "Neutralizes acidic soil pH and adds Ca & Mg" },
          result: { icon: "leaf", id: "Hara lebih tersedia, daun lebih hijau, pupuk NPK lebih efisien", en: "More available nutrients, greener leaves, more efficient NPK" } },
        { product: "phosphate",
          action: { icon: "root", id: "Menyuplai fosfor secara bertahap (slow release)", en: "Supplies phosphorus gradually (slow release)" },
          result: { icon: "flower", id: "Akar kuat, pembungaan & pembuahan serempak, hasil panen naik", en: "Strong roots, uniform flowering & fruiting, higher yields" } },
        { product: "palmash",
          action: { icon: "weight", id: "Menambah kalium (K) tinggi dari sumber alami", en: "Adds high potassium (K) from a natural source" },
          result: { icon: "trending", id: "Buah lebih berat, rendemen minyak sawit meningkat, tanaman tahan kekeringan", en: "Heavier fruit, higher palm oil yield, drought-resilient plants" } },
        { product: "clay",
          action: { icon: "droplet", id: "Meningkatkan daya simpan air dan hara pada tanah berpasir", en: "Improves water and nutrient retention in sandy soil" },
          result: { icon: "sprout", id: "Pupuk tidak mudah tercuci, tanaman tetap segar saat kemarau", en: "Fertilizer stays put and plants stay fresh in dry spells" } }
      ] },
    { id: "konstruksi", image: "assets/industries/01-construction-infrastructure.png",
      title: { id: "Konstruksi & Infrastruktur", en: "Construction & Infrastructure" },
      intro: { id: "Dari semen hingga bata, mineral kami menjadi bahan baku dan aditif yang membuat material bangunan lebih kuat, efisien, dan ramah lingkungan.", en: "From cement to bricks, our minerals are raw materials and additives that make building materials stronger, more efficient, and greener." },
      chains: [
        { product: "dolomite",
          action: { icon: "layers", id: "Menjadi filler dan agregat pada semen & beton", en: "Serves as filler and aggregate in cement & concrete" },
          result: { icon: "coins", id: "Beton lebih padat dengan biaya bahan lebih efisien", en: "Denser concrete at a more efficient material cost" } },
        { product: "palmash",
          action: { icon: "sparkles", id: "Silika reaktif bersifat pozzolanik menggantikan sebagian semen", en: "Reactive pozzolanic silica partially replaces cement" },
          result: { icon: "recycle", id: "Jejak karbon lebih rendah — beton hijau berbasis limbah sawit", en: "Lower carbon footprint — green concrete from palm waste" } },
        { product: "clay",
          action: { icon: "bricks", id: "Bahan baku bata, genteng, dan sumber Al₂O₃/SiO₂ untuk klinker semen", en: "Raw material for bricks, roof tiles, and Al₂O₃/SiO₂ for cement clinker" },
          result: { icon: "building", id: "Material bangunan kuat dan tahan cuaca", en: "Strong, weather-resistant building materials" } }
      ] },
    { id: "baja", image: "assets/industries/02-steel-metallurgy.png",
      title: { id: "Baja & Metalurgi", en: "Steel & Metallurgy" },
      intro: { id: "Di tanur dan cetakan, mineral kami membantu menghasilkan logam yang lebih murni dengan proses yang lebih andal.", en: "In furnaces and molds, our minerals help produce purer metal through a more reliable process." },
      chains: [
        { product: "dolomite",
          action: { icon: "flame", id: "Sebagai flux, mengikat pengotor (silika, sulfur, fosfor) menjadi slag", en: "As a flux, binds impurities (silica, sulfur, phosphorus) into slag" },
          result: { icon: "gem", id: "Baja lebih murni dengan kualitas konsisten", en: "Purer steel with consistent quality" } },
        { product: "dolomite",
          action: { icon: "shield", id: "MgO dalam slag melindungi lapisan refraktori tungku", en: "MgO in the slag protects the furnace refractory lining" },
          result: { icon: "clock", id: "Umur tungku lebih panjang, biaya perawatan turun", en: "Longer furnace life, lower maintenance costs" } },
        { product: "clay",
          action: { icon: "link", id: "Bonding clay mengikat pasir cetak pengecoran", en: "Bonding clay binds foundry molding sand" },
          result: { icon: "target", id: "Cetakan presisi, permukaan coran halus, cacat berkurang", en: "Precise molds, smooth casting surfaces, fewer defects" } }
      ] },
    { id: "kaca", image: "assets/industries/04-glass-ceramics.png",
      title: { id: "Kaca & Keramik", en: "Glass & Ceramics" },
      intro: { id: "Komposisi mineral yang tepat menentukan kekuatan, kejernihan, dan ketahanan produk kaca maupun keramik.", en: "The right mineral composition determines the strength, clarity, and durability of glass and ceramic products." },
      chains: [
        { product: "dolomite",
          action: { icon: "atom", id: "Menyumbang CaO & MgO dalam campuran bahan kaca", en: "Contributes CaO & MgO to the glass batch" },
          result: { icon: "gem", id: "Kaca lebih tahan kimia & cuaca serta tidak mudah buram", en: "Glass that resists chemicals & weathering and doesn't cloud easily" } },
        { product: "clay",
          action: { icon: "shapes", id: "Memberi plastisitas pada badan keramik", en: "Gives plasticity to the ceramic body" },
          result: { icon: "flame", id: "Mudah dibentuk dan kuat setelah dibakar", en: "Easy to shape and strong after firing" } }
      ] },
    { id: "reklamasi", image: "assets/industries/05-mining-reclamation.png",
      title: { id: "Pertambangan & Reklamasi", en: "Mining & Reclamation" },
      intro: { id: "Lahan bekas tambang umumnya sangat masam dan miskin hara. Mineral kami memulihkannya hingga siap ditanami kembali.", en: "Former mining land is usually highly acidic and nutrient-poor. Our minerals restore it until it's ready to be replanted." },
      chains: [
        { product: "dolomite",
          action: { icon: "ph", id: "Menetralkan air asam tambang dan tanah masam", en: "Neutralizes acid mine drainage and acidic soil" },
          result: { icon: "filter", id: "Logam berat mengendap, air buangan lebih aman bagi lingkungan", en: "Heavy metals settle out, discharge water is safer for the environment" } },
        { product: "phosphate",
          action: { icon: "root", id: "Menyuplai fosfor untuk perakaran bibit revegetasi", en: "Supplies phosphorus for revegetation seedling roots" },
          result: { icon: "sprout", id: "Bibit cepat berakar dan bertahan di lahan kritis", en: "Seedlings root quickly and survive on degraded land" } },
        { product: "palmash",
          action: { icon: "sparkles", id: "Menambah kalium dan menaikkan pH tanah timbunan", en: "Adds potassium and raises the pH of overburden soil" },
          result: { icon: "leaf", id: "Tanaman penutup tanah tumbuh cepat, erosi berkurang", en: "Cover crops establish quickly, reducing erosion" } }
      ] },
    { id: "pakan", image: "assets/industries/06-animal-feed-chemicals.png",
      title: { id: "Pakan Ternak & Kimia", en: "Animal Feed & Chemicals" },
      intro: { id: "Mineral berkualitas pakan (feed grade) dan bahan baku kimia untuk produktivitas ternak serta kebutuhan industri.", en: "Feed-grade minerals and chemical feedstock for livestock productivity and industrial needs." },
      chains: [
        { product: "phosphate",
          action: { icon: "bone", id: "Sumber fosfor & kalsium dalam ransum pakan", en: "Phosphorus & calcium source in feed rations" },
          result: { icon: "heart", id: "Tulang kuat, pertumbuhan optimal, kerabang telur lebih tebal", en: "Strong bones, optimal growth, thicker eggshells" } },
        { product: "dolomite",
          action: { icon: "atom", id: "Suplemen Ca & Mg pada pakan ternak dan unggas", en: "Ca & Mg supplement for livestock and poultry feed" },
          result: { icon: "trending", id: "Mencegah defisiensi mineral, produktivitas ternak terjaga", en: "Prevents mineral deficiency, keeps livestock productive" } },
        { product: "clay",
          action: { icon: "link", id: "Binder pelet pakan", en: "Feed pellet binder" },
          result: { icon: "shield", id: "Pelet tidak mudah hancur, pakan lebih efisien", en: "Pellets hold together, less feed waste" } },
        { product: "phosphate",
          action: { icon: "flask", id: "Diolah menjadi asam fosfat & senyawa fosfat", en: "Processed into phosphoric acid & phosphate compounds" },
          result: { icon: "factory", id: "Bahan baku industri pupuk, deterjen, dan pengolahan air", en: "Feedstock for fertilizer, detergent, and water treatment industries" } }
      ] },
    { id: "cat", image: "assets/industries/07-paint-plastics-rubber.png",
      title: { id: "Cat, Plastik & Karet", en: "Paint, Plastics & Rubber" },
      intro: { id: "Filler mineral menekan biaya formula sekaligus memperbaiki sifat fisik produk akhir.", en: "Mineral fillers cut formulation costs while improving the physical properties of the end product." },
      chains: [
        { product: "dolomite",
          action: { icon: "layers", id: "Filler karbonat putih pada cat, plastik, dan karet", en: "White carbonate filler in paint, plastics, and rubber" },
          result: { icon: "coins", id: "Biaya resin/pigmen turun, produk lebih kaku dan tahan cuaca", en: "Lower resin/pigment cost, stiffer and more weather-resistant products" } },
        { product: "clay",
          action: { icon: "roller", id: "Extender pigmen pada cat, pelapis, dan kertas", en: "Pigment extender in paint, coatings, and paper" },
          result: { icon: "sparkles", id: "Opasitas & daya tutup lebih baik, permukaan lebih halus", en: "Better opacity & hiding power, smoother surfaces" } }
      ] }
  ];

  window.MAHITALA_DATA = {
    icon: icon,
    productNames: PRODUCT_NAMES,
    benefits: BENEFITS,
    sectors: SECTORS
  };
})();
