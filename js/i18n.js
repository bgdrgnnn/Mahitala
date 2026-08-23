(function () {
  "use strict";

  var STORAGE_KEY = "mahitala_lang";

  var I18N = {
    "nav.home": { id: "Home", en: "Home" },
    "nav.produk": { id: "Produk", en: "Products" },
    "nav.tentang": { id: "Tentang Kami", en: "About Us" },
    "nav.faq": { id: "FAQ", en: "FAQ" },
    "nav.kontak": { id: "Kontak", en: "Contact" },
    "nav.whatsapp": { id: "WhatsApp", en: "WhatsApp" },
    "nav.instagram": { id: "Instagram", en: "Instagram" },
    "header.cta": { id: "Minta Penawaran", en: "Request a Quote" },

    "hero.h1": {
      id: 'Mineral Alami untuk <em>Industri dan Pertanian</em> Indonesia',
      en: 'Natural Minerals for <em>Industry and Agriculture</em> in Indonesia'
    },
    "hero.lede": {
      id: "PT Mangghala Inatama Lentera memproduksi dan mendistribusikan Dolomite, Fosfat Alam, dan Abu Tandan Kosong Sawit — bentuk powder maupun granule — untuk kebutuhan konstruksi, baja, pengolahan air, kaca-keramik, hingga pertanian di seluruh Indonesia, dengan kesiapan melayani pasar ekspor internasional.",
      en: "PT Mangghala Inatama Lentera produces and distributes Dolomite, Natural Rock Phosphate, and Palm Empty Fruit Bunch (EFB) Ash — in powder and granule form — for construction, steel, water treatment, glass-ceramics, and agriculture across Indonesia, with export-ready capability for international markets."
    },
    "hero.cta1": { id: "Lihat Produk Kami", en: "View Our Products" },
    "hero.cta2": { id: "Konsultasi Gratis", en: "Free Consultation" },
    "hero.stat1": { id: "Tahun Pengalaman", en: "Years of Experience" },
    "hero.stat2": { id: "Klien Industri &amp; Perkebunan", en: "Industrial &amp; Plantation Clients" },
    "hero.stat3": { id: "Provinsi Terjangkau", en: "Provinces Covered" },

    "trust.1": { id: "Diuji Laboratorium", en: "Lab-Tested Quality" },
    "trust.2": { id: "Bahan Baku Alami 100%", en: "100% Natural Raw Material" },
    "trust.3": { id: "Distribusi Nasional &amp; Siap Ekspor", en: "Nationwide &amp; Export-Ready Distribution" },
    "trust.4": { id: "Tim Teknis &amp; Agronomis Berpengalaman", en: "Experienced Technical &amp; Agronomy Team" },

    "produk.eyebrow": { id: "Produk Kami", en: "Our Products" },
    "produk.h2": { id: "Tiga Mineral Alami untuk Industri dan Pertanian", en: "Three Natural Minerals for Industry and Agriculture" },
    "produk.p": {
      id: "Setiap produk tersedia dalam bentuk <strong>powder</strong> dan <strong>granule</strong>, disesuaikan dengan metode aplikasi dan skala kebutuhan industri maupun lahan Anda.",
      en: "Every product is available in <strong>powder</strong> and <strong>granule</strong> form, matched to your application method and the scale of your industrial or land needs."
    },

    "product.dolomite.name": { id: "Dolomite", en: "Dolomite" },
    "product.phosphate.name": { id: "Fosfat Alam", en: "Natural Rock Phosphate" },
    "product.palmash.name": { id: "Abu Tandan Sawit", en: "Palm EFB Ash" },

    "produk.dolomite.cat": { id: "Mineral Multi-Industri", en: "Multi-Industry Mineral" },
    "produk.dolomite.desc": { id: "Konstruksi, baja, kaca &amp; pengolahan air, hingga pertanian.", en: "Construction, steel, glass &amp; water treatment, to agriculture." },
    "produk.phosphate.cat": { id: "Fosfat Alam Multi-Guna", en: "Multi-Use Rock Phosphate" },
    "produk.phosphate.desc": { id: "Pupuk, pakan ternak, dan bahan baku industri kimia.", en: "Fertilizer, animal feed, and chemical industry feedstock." },
    "produk.palmash.cat": { id: "Kalium dari Biomassa Sawit", en: "Potassium from Palm Biomass" },
    "produk.palmash.desc": { id: "Pupuk kalium ramah lingkungan dengan potensi material konstruksi.", en: "Eco-friendly potassium fertilizer with construction-material potential." },

    "industri.eyebrow": { id: "Industri yang Kami Layani", en: "Industries We Serve" },
    "industri.h2": { id: "Satu Mineral, Beragam Manfaat Lintas Sektor", en: "One Mineral, Many Benefits Across Sectors" },
    "industri.p": {
      id: "Dolomite, Fosfat Alam, dan Abu Tandan Sawit kami digunakan jauh melampaui pertanian — dari konstruksi hingga pengolahan air, sesuai spesifikasi dan grade yang dibutuhkan.",
      en: "Our Dolomite, Natural Rock Phosphate, and Palm EFB Ash serve far beyond agriculture — from construction to water treatment — matched to the specification and grade you need."
    },
    "industri.card1.title": { id: "Konstruksi &amp; Infrastruktur", en: "Construction &amp; Infrastructure" },
    "industri.card1.desc": { id: "Bahan tambahan semen, beton, dan agregat untuk proyek pembangunan.", en: "Additive material for cement, concrete, and aggregate in construction projects." },
    "industri.card2.title": { id: "Baja &amp; Metalurgi", en: "Steel &amp; Metallurgy" },
    "industri.card2.desc": { id: "Flux dalam proses peleburan dan pemurnian logam.", en: "Flux for metal smelting and refining processes." },
    "industri.card3.title": { id: "Pengolahan Air", en: "Water Treatment" },
    "industri.card3.desc": { id: "Netralisasi dan pengolahan air limbah industri.", en: "Neutralization and treatment of industrial wastewater." },
    "industri.card4.title": { id: "Kaca &amp; Keramik", en: "Glass &amp; Ceramics" },
    "industri.card4.desc": { id: "Komponen mineral pada manufaktur kaca dan keramik.", en: "Mineral component in glass and ceramics manufacturing." },
    "industri.card5.title": { id: "Kertas &amp; Pulp", en: "Pulp &amp; Paper" },
    "industri.card5.desc": { id: "Bahan pengisi dan aditif dalam proses produksi kertas.", en: "Filler and additive in the paper production process." },
    "industri.card6.title": { id: "Pakan Ternak &amp; Kimia", en: "Animal Feed &amp; Chemicals" },
    "industri.card6.desc": { id: "Suplemen mineral pakan ternak dan bahan baku industri kimia.", en: "Mineral supplement for animal feed and feedstock for the chemical industry." },
    "industri.card7.title": { id: "Cat, Plastik &amp; Karet", en: "Paint, Plastics &amp; Rubber" },
    "industri.card7.desc": { id: "Filler mineral untuk cat, pelapis, plastik, dan produk karet.", en: "Mineral filler for paint, coatings, plastics, and rubber products." },
    "industri.card8.title": { id: "Pertanian &amp; Perkebunan", en: "Agriculture &amp; Plantations" },
    "industri.card8.desc": { id: "Penetral pH tanah dan sumber hara makro bagi tanaman.", en: "Soil pH neutralizer and source of macronutrients for plants." },

    "tentang.eyebrow": { id: "Tentang Kami", en: "About Us" },
    "tentang.h2": { id: "Mitra Mineral Industri Terpercaya di Indonesia", en: "Indonesia's Trusted Industrial Minerals Partner" },
    "tentang.p1": {
      id: "PT Mangghala Inatama Lentera adalah perusahaan mineral industri yang memproduksi dan mendistribusikan Dolomite, Fosfat Alam, dan Abu Tandan Kosong Sawit dalam bentuk powder maupun granule — untuk sektor konstruksi, baja, pengolahan air, kaca-keramik, hingga pertanian. Selama lebih dari 15 tahun, kami telah menjadi mitra lebih dari 500 klien industri, perkebunan, dan petani di 34 provinsi di Indonesia. Kami juga siap melayani permintaan ekspor bagi buyer internasional yang membutuhkan pasokan mineral industri berkualitas dari Indonesia.",
      en: "PT Mangghala Inatama Lentera is an industrial minerals company that produces and distributes Dolomite, Natural Rock Phosphate, and Palm Empty Fruit Bunch Ash in powder and granule form — for the construction, steel, water treatment, glass-ceramics, and agriculture sectors. For more than 15 years, we have partnered with over 500 industrial, plantation, and farming clients across 34 provinces in Indonesia. We are also ready to serve export demand from international buyers seeking quality industrial minerals sourced from Indonesia."
    },
    "tentang.p2": {
      id: "Setiap produk yang kami kirim melewati pengujian laboratorium internal — mulai dari penambangan bahan baku, pengolahan, uji kualitas, pengemasan, hingga distribusi ke seluruh Indonesia.",
      en: "Every product we ship goes through internal laboratory testing — from raw material mining and processing, to quality testing, packaging, and distribution across Indonesia."
    },
    "tentang.cta": { id: "Download Company Profile", en: "Download Company Profile" },
    "tentang.visi.title": { id: "Visi", en: "Vision" },
    "tentang.visi.p": {
      id: "Menjadi mitra mineral industri terpercaya nomor satu di Indonesia yang mendukung produktivitas dan keberlanjutan sektor industri, konstruksi, dan pertanian nasional.",
      en: "To become Indonesia's number one trusted industrial minerals partner, supporting the productivity and sustainability of the nation's industrial, construction, and agriculture sectors."
    },
    "tentang.misi.title": { id: "Misi", en: "Mission" },
    "tentang.misi.li1": { id: "Menyediakan produk mineral industri berkualitas tinggi dan teruji laboratorium untuk berbagai sektor.", en: "Provide high-quality, laboratory-tested industrial mineral products for a wide range of sectors." },
    "tentang.misi.li2": { id: "Membangun jaringan distribusi yang menjangkau sentra industri dan perkebunan di seluruh Indonesia.", en: "Build a distribution network reaching industrial and plantation centers across Indonesia." },
    "tentang.misi.li3": { id: "Mendukung pelanggan industri maupun petani dengan dukungan teknis dan agronomis berkelanjutan.", en: "Support both industrial customers and farmers with ongoing technical and agronomic assistance." },
    "tentang.misi.li4": { id: "Mengembangkan produk ramah lingkungan dari daur ulang limbah sawit.", en: "Develop environmentally friendly products from recycled palm waste." },

    "faq.eyebrow": { id: "FAQ", en: "FAQ" },
    "faq.q1": { id: "Apa perbedaan bentuk powder dan granule?", en: "What's the difference between powder and granule form?" },
    "faq.a1": {
      id: "Powder memiliki reaksi lebih cepat karena luas permukaan lebih besar, cocok untuk pupuk dasar. Granule lebih tahan lama (slow release), minim debu, dan lebih mudah ditebar dengan alat mekanis untuk lahan luas.",
      en: "Powder reacts faster due to its larger surface area, ideal for base fertilizer application. Granule lasts longer (slow release), is low-dust, and easier to spread mechanically over large areas."
    },
    "faq.q2": { id: "Berapa minimum order untuk pembelian?", en: "What is the minimum order quantity?" },
    "faq.a2": {
      id: "Minimum order bervariasi tergantung produk dan lokasi pengiriman. Silakan hubungi tim kami melalui form kontak untuk mendapatkan penawaran sesuai kebutuhan skala kebun Anda.",
      en: "Minimum order quantity varies by product and shipping destination. Please contact our team via the contact form to get a quote tailored to your needs."
    },
    "faq.q3": { id: "Apakah tersedia dokumen hasil uji laboratorium (COA)?", en: "Is a Certificate of Analysis (COA) available?" },
    "faq.a3": {
      id: "Ya, setiap pengiriman dapat disertai Certificate of Analysis (COA) yang mencantumkan kadar CaO, MgO, P₂O₅, atau K₂O sesuai produk yang dipesan.",
      en: "Yes, every shipment can be accompanied by a Certificate of Analysis (COA) stating CaO, MgO, P₂O₅, or K₂O content according to the ordered product."
    },
    "faq.q4": { id: "Apakah Mahitala melayani pengiriman ke luar Jawa?", en: "Does Mahitala ship outside Java?" },
    "faq.a4": {
      id: "Ya, kami memiliki jaringan distribusi ke sentra perkebunan di Sumatra, Kalimantan, dan Sulawesi, selain Jawa. Ongkos kirim disesuaikan dengan lokasi tujuan.",
      en: "Yes, we have a distribution network reaching plantation centers in Sumatra, Kalimantan, and Sulawesi, in addition to Java. Shipping costs are adjusted to the destination."
    },
    "faq.q7": { id: "Apakah Mahitala bisa mengirim untuk kebutuhan ekspor?", en: "Can Mahitala ship for export orders?" },
    "faq.a7": {
      id: "Ya, kami siap melayani permintaan ekspor. Produk kami dapat disertai Certificate of Analysis (COA) sesuai spesifikasi yang dibutuhkan buyer internasional — hubungi tim kami untuk mendiskusikan kebutuhan pengiriman, kemasan, dan dokumen ekspor Anda.",
      en: "Yes, we are ready to serve export demand. Our products can be accompanied by a Certificate of Analysis (COA) matching international buyer specifications — contact our team to discuss your shipping, packaging, and export documentation needs."
    },
    "faq.q5": { id: "Apakah produk Mahitala hanya untuk pertanian?", en: "Are Mahitala's products only for agriculture?" },
    "faq.a5": {
      id: "Tidak. Dolomite, Fosfat Alam, dan Abu Tandan Sawit kami juga digunakan industri konstruksi, baja, pengolahan air, kaca-keramik, pakan ternak, dan sektor lain sesuai spesifikasi dan grade yang dibutuhkan — bukan hanya pertanian.",
      en: "No. Our Dolomite, Natural Rock Phosphate, and Palm EFB Ash are also used by the construction, steel, water treatment, glass-ceramics, animal feed, and other industries according to the specification and grade required — not agriculture alone."
    },
    "faq.q6": { id: "Bisakah saya berkonsultasi kebutuhan spesifikasi atau dosis sebelum membeli?", en: "Can I consult on specification or dosage before purchasing?" },
    "faq.a6": {
      id: "Tentu. Tim teknis dan agronomis kami siap membantu — baik untuk spesifikasi industri (ukuran partikel, kadar CaO/MgO/P₂O₅/K₂O) maupun dosis dan jadwal aplikasi pertanian sesuai kebutuhan Anda — gratis tanpa biaya konsultasi.",
      en: "Of course. Our technical and agronomy team is ready to help — for industrial specifications (particle size, CaO/MgO/P₂O₅/K₂O content) or agricultural application dosage and schedule — free of charge."
    },

    "cta.eyebrow": { id: "Siap Meningkatkan Produktivitas Anda?", en: "Ready to Boost Your Productivity?" },
    "cta.h2": { id: "Dapatkan Penawaran Terbaik untuk Kebutuhan Industri dan Lahan Anda", en: "Get the Best Offer for Your Industrial and Land Needs" },
    "cta.p": {
      id: "Tim kami siap membantu menentukan produk dan dosis yang tepat — respon cepat, harga bersaing.",
      en: "Our team is ready to help determine the right product and dosage — fast response, competitive pricing."
    },
    "cta.btn1": { id: "Hubungi Tim Sales", en: "Contact Sales Team" },
    "cta.btn2": { id: "Chat via WhatsApp", en: "Chat via WhatsApp" },

    "kontak.eyebrow": { id: "Kontak Kami", en: "Contact Us" },
    "kontak.h2static": { id: "Tanyakan Kebutuhan Anda untuk", en: "Ask Us About Your" },
    "kontak.p": {
      id: "Isi form berikut atau hubungi kami langsung — tim kami akan merespon dalam 1x24 jam kerja.",
      en: "Fill out the form below or contact us directly — our team will respond within 1x24 business hours."
    },
    "kontak.office.label": { id: "Kantor Pusat", en: "Head Office" },
    "kontak.phone.label": { id: "Telepon", en: "Phone" },
    "kontak.email.label": { id: "Email", en: "Email" },
    "kontak.hours.label": { id: "Jam Operasional", en: "Operating Hours" },
    "kontak.hours.value": { id: "Senin – Sabtu, 08.00 – 17.00 WIB", en: "Monday – Saturday, 08:00 – 17:00 WIB" },

    "form.name.label": { id: "Nama Lengkap", en: "Full Name" },
    "form.phone.label": { id: "No. Telepon / WhatsApp", en: "Phone / WhatsApp Number" },
    "form.email.label": { id: "Email", en: "Email" },
    "form.product.label": { id: "Produk yang Diminati", en: "Product of Interest" },
    "form.opt.other": { id: "Belum Yakin / Konsultasi", en: "Not Sure / Consultation" },
    "form.message.label": { id: "Pesan", en: "Message" },
    "form.submit": { id: "Kirim Pesan", en: "Send Message" },
    "form.success": {
      id: "Terima kasih! Pesan Anda telah terkirim, tim kami akan segera menghubungi Anda.",
      en: "Thank you! Your message has been sent, our team will contact you shortly."
    },

    "footer.tagline": {
      id: "PT Mangghala Inatama Lentera menyediakan mineral industri berkualitas — Dolomite, Fosfat Alam, dan Abu Tandan Sawit — untuk mendukung industri konstruksi, manufaktur, dan pertanian, baik pasar domestik maupun ekspor internasional.",
      en: "PT Mangghala Inatama Lentera supplies quality industrial minerals — Dolomite, Natural Rock Phosphate, and Palm EFB Ash — supporting construction, manufacturing, and agriculture industries, for both the domestic market and international export."
    },
    "footer.col.produk": { id: "Produk", en: "Products" },
    "footer.col.perusahaan": { id: "Perusahaan", en: "Company" },
    "footer.col.kontak": { id: "Hubungi Kami", en: "Contact Us" },
    "footer.tentang": { id: "Tentang Kami", en: "About Us" },
    "footer.industri": { id: "Industri", en: "Industries" },
    "footer.galeri": { id: "Galeri", en: "Gallery" },
    "footer.faq": { id: "FAQ", en: "FAQ" },
    "footer.rights": { id: "Seluruh hak cipta dilindungi.", en: "All rights reserved." },
    "footer.tagline2": {
      id: "Dibuat dengan komitmen untuk industri dan pertanian Indonesia yang lebih maju.",
      en: "Built with a commitment to a more advanced Indonesian industry and agriculture."
    },

    "gallery.hero.eyebrow": { id: "Galeri", en: "Gallery" },
    "gallery.hero.h2": { id: "Produk, Proses, dan Penerapan di Lapangan", en: "Products, Process, and Field Applications" },
    "gallery.hero.p": {
      id: "Ilustrasi visual dari lini produk, alur produksi, hingga sektor industri dan pertanian yang kami layani. Foto dokumentasi asli menyusul.",
      en: "Visual illustrations of our product line, production process, and the industry and agriculture sectors we serve. Real documentation photos coming soon."
    },
    "gallery.filter.all": { id: "Semua", en: "All" },
    "gallery.filter.produk": { id: "Produk", en: "Products" },
    "gallery.filter.proses": { id: "Proses Produksi", en: "Production Process" },
    "gallery.filter.aplikasi": { id: "Aplikasi &amp; Penggunaan", en: "Applications &amp; Uses" },

    "gallery.tag.produk": { id: "Produk", en: "Product" },
    "gallery.tag.proses1": { id: "Proses · 01", en: "Process · 01" },
    "gallery.tag.proses2": { id: "Proses · 02", en: "Process · 02" },
    "gallery.tag.proses3": { id: "Proses · 03", en: "Process · 03" },
    "gallery.tag.proses4": { id: "Proses · 04", en: "Process · 04" },
    "gallery.tag.proses5": { id: "Proses · 05", en: "Process · 05" },
    "gallery.tag.lahan": { id: "Aplikasi Lahan", en: "Field Application" },
    "gallery.tag.industriapp": { id: "Aplikasi Industri", en: "Industrial Application" },

    "gallery.proses1.title": { id: "Penambangan &amp; Pengumpulan", en: "Mining &amp; Collection" },
    "gallery.proses1.desc": { id: "Bahan baku dolomite &amp; fosfat dari tambang mitra, serta tandan kosong dari pabrik kelapa sawit.", en: "Dolomite and phosphate raw material from partner mines, plus empty fruit bunches from palm oil mills." },
    "gallery.proses2.title": { id: "Pengolahan", en: "Processing" },
    "gallery.proses2.desc": { id: "Proses pembakaran, penggilingan, dan pengayakan untuk menghasilkan powder atau granule.", en: "Calcination, grinding, and sieving process to produce powder or granule form." },
    "gallery.proses3.title": { id: "Uji Kualitas", en: "Quality Testing" },
    "gallery.proses3.desc": { id: "Pengujian kadar CaO, MgO, P₂O₅, dan K₂O di laboratorium sebelum produk diluluskan.", en: "Laboratory testing of CaO, MgO, P₂O₅, and K₂O content before products are approved for release." },
    "gallery.proses4.title": { id: "Pengemasan", en: "Packaging" },
    "gallery.proses4.desc": { id: "Dikemas dalam karung 25kg / 50kg / jumbo bag sesuai kebutuhan pelanggan.", en: "Packed in 25kg / 50kg bags or jumbo bags according to customer needs." },
    "gallery.proses5.title": { id: "Distribusi", en: "Distribution" },
    "gallery.proses5.desc": { id: "Pengiriman ke gudang, kebun, atau titik distribusi di seluruh Indonesia.", en: "Delivered to warehouses, plantations, or distribution points across Indonesia." },

    "gallery.lahan1.title": { id: "Perkebunan Sawit", en: "Palm Oil Plantations" },
    "gallery.lahan1.desc": { id: "Dolomite untuk pH tanah, fosfat untuk pembibitan, abu tandan untuk bobot TBS.", en: "Dolomite for soil pH, phosphate for seedlings, EFB ash for fresh fruit bunch weight." },
    "gallery.lahan2.title": { id: "Karet &amp; Tebu", en: "Rubber &amp; Sugarcane" },
    "gallery.lahan2.desc": { id: "Menjaga struktur tanah dan menyuplai hara makro untuk pertumbuhan jangka panjang.", en: "Maintains soil structure and supplies macronutrients for long-term growth." },
    "gallery.lahan3.title": { id: "Padi &amp; Palawija", en: "Rice &amp; Secondary Crops" },
    "gallery.lahan3.desc": { id: "Pupuk dasar fosfat dan dolomite untuk lahan sawah dan tegalan yang asam.", en: "Base phosphate and dolomite fertilizer for acidic paddy and dryland fields." },
    "gallery.lahan4.title": { id: "Hortikultura", en: "Horticulture" },
    "gallery.lahan4.desc": { id: "Menunjang kualitas buah dan sayur dengan suplai kalsium, magnesium, dan kalium.", en: "Supports fruit and vegetable quality with calcium, magnesium, and potassium supply." },

    "gallery.industri1.title": { id: "Konstruksi &amp; Infrastruktur", en: "Construction &amp; Infrastructure" },
    "gallery.industri1.desc": { id: "Bahan tambahan semen, beton, dan agregat untuk proyek pembangunan.", en: "Additive material for cement, concrete, and aggregate in construction projects." },
    "gallery.industri2.title": { id: "Baja &amp; Metalurgi", en: "Steel &amp; Metallurgy" },
    "gallery.industri2.desc": { id: "Flux dalam proses peleburan dan pemurnian logam pada industri baja.", en: "Flux for metal smelting and refining in the steel industry." },
    "gallery.industri3.title": { id: "Kaca &amp; Keramik", en: "Glass &amp; Ceramics" },
    "gallery.industri3.desc": { id: "Komponen mineral pada manufaktur kaca, keramik, dan produk berbasis silika.", en: "Mineral component in glass, ceramics, and silica-based product manufacturing." },
    "gallery.industri4.title": { id: "Pengolahan Air &amp; Lingkungan", en: "Water &amp; Environmental Treatment" },
    "gallery.industri4.desc": { id: "Netralisasi dan pengolahan air limbah pada berbagai proses industri.", en: "Neutralization and wastewater treatment across various industrial processes." },

    "gallery.cta.eyebrow": { id: "Tertarik dengan Produk Kami?", en: "Interested in Our Products?" }
  };

  var PLACEHOLDERS = {
    "form.name.ph": { id: "Nama Anda", en: "Your Name" },
    "form.phone.ph": { id: "08xx-xxxx-xxxx", en: "+62 8xx-xxxx-xxxx" },
    "form.email.ph": { id: "nama@perusahaan.com", en: "name@company.com" },
    "form.message.ph": {
      id: "Ceritakan kebutuhan Anda: industri/aplikasi, spesifikasi produk, estimasi kebutuhan tonase, dll.",
      en: "Tell us about your needs: industry/application, product specification, estimated tonnage, etc."
    }
  };

  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  function getLang() {
    var stored = null;
    try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) { /* private mode / disabled storage */ }
    return stored === "en" ? "en" : "id";
  }

  function applyLanguage(lang) {
    document.documentElement.setAttribute("lang", lang);

    $$("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var entry = I18N[key];
      if (entry && entry[lang] != null) el.innerHTML = entry[lang];
    });

    $$("[data-i18n-ph]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-ph");
      var entry = PLACEHOLDERS[key];
      if (entry && entry[lang] != null) el.setAttribute("placeholder", entry[lang]);
    });

    if (window.PAGE_I18N && window.PAGE_I18N[lang]) {
      var meta = window.PAGE_I18N[lang];
      if (meta.title) document.title = meta.title;
      if (meta.description) {
        var metaEl = document.querySelector('meta[name="description"]');
        if (metaEl) metaEl.setAttribute("content", meta.description);
      }
    }

    $$(".lang-btn").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }

    document.dispatchEvent(new CustomEvent("languagechange", { detail: { lang: lang } }));
  }

  $$(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var lang = btn.getAttribute("data-lang");
      if (lang !== "id" && lang !== "en") return;
      if (document.documentElement.getAttribute("lang") === lang) return;
      applyLanguage(lang);
    });
  });

  window.MahitalaI18N = { apply: applyLanguage, getLang: getLang, dict: I18N };

  applyLanguage(getLang());
})();
