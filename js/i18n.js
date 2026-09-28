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
      id: "PT Mangghala Inatama Lentera memproduksi dan mendistribusikan Dolomite, Fosfat Alam, Abu Tandan Kosong Sawit, dan Lempung — bentuk powder maupun granule — untuk kebutuhan konstruksi, baja, pengolahan air, kaca-keramik, hingga pertanian di seluruh Indonesia, dengan kesiapan melayani pasar ekspor internasional.",
      en: "PT Mangghala Inatama Lentera produces and distributes Dolomite, Natural Rock Phosphate, Palm Empty Fruit Bunch (EFB) Ash, and Clay — in powder and granule form — for construction, steel, water treatment, glass-ceramics, and agriculture across Indonesia, with export-ready capability for international markets."
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
    "produk.h2": { id: "Mineral Alami untuk Industri dan Pertanian", en: "Natural Minerals for Industry and Agriculture" },
    "produk.p": {
      id: "Setiap produk tersedia dalam bentuk <strong>powder</strong> dan <strong>granule</strong>, disesuaikan dengan metode aplikasi dan skala kebutuhan industri maupun lahan Anda.",
      en: "Every product is available in <strong>powder</strong> and <strong>granule</strong> form, matched to your application method and the scale of your industrial or land needs."
    },
    "produk.detailCta": { id: "Lihat TDS, COA &amp; Detail Produk", en: "View TDS, COA &amp; Product Details" },

    "product.dolomite.name": { id: "Dolomite", en: "Dolomite" },
    "product.phosphate.name": { id: "Fosfat Alam", en: "Natural Rock Phosphate" },
    "product.palmash.name": { id: "Abu Tandan Sawit", en: "Palm EFB Ash" },
    "product.clay.name": { id: "Lempung", en: "Clay" },

    "produk.dolomite.cat": { id: "Mineral Multi-Industri", en: "Multi-Industry Mineral" },
    "produk.dolomite.desc": { id: "Konstruksi, baja, kaca &amp; pengolahan air, hingga pertanian.", en: "Construction, steel, glass &amp; water treatment, to agriculture." },
    "produk.phosphate.cat": { id: "Fosfat Alam Multi-Guna", en: "Multi-Use Rock Phosphate" },
    "produk.phosphate.desc": { id: "Pupuk, pakan ternak, dan bahan baku industri kimia.", en: "Fertilizer, animal feed, and chemical industry feedstock." },
    "produk.palmash.cat": { id: "Kalium dari Biomassa Sawit", en: "Potassium from Palm Biomass" },
    "produk.palmash.desc": { id: "Pupuk kalium ramah lingkungan dengan potensi material konstruksi.", en: "Eco-friendly potassium fertilizer with construction-material potential." },
    "produk.clay.cat": { id: "Mineral Aluminosilikat Serbaguna", en: "Versatile Aluminosilicate Mineral" },
    "produk.clay.desc": { id: "Keramik, bata, pengecoran, hingga bahan pemboran.", en: "Ceramics, bricks, foundry, and drilling applications." },

    "industri.eyebrow": { id: "Industri yang Kami Layani", en: "Industries We Serve" },
    "industri.h2": { id: "Satu Mineral, Beragam Manfaat Lintas Sektor", en: "One Mineral, Many Benefits Across Sectors" },
    "industri.p": {
      id: "Dolomite, Fosfat Alam, Abu Tandan Sawit, dan Lempung kami digunakan jauh melampaui pertanian — dari konstruksi hingga pertambangan, sesuai spesifikasi dan grade yang dibutuhkan.",
      en: "Our Dolomite, Natural Rock Phosphate, Palm EFB Ash, and Clay serve far beyond agriculture — from construction to mining — matched to the specification and grade you need."
    },
    "industri.card1.title": { id: "Konstruksi &amp; Infrastruktur", en: "Construction &amp; Infrastructure" },
    "industri.card1.desc": { id: "Bahan tambahan semen, beton, dan agregat untuk proyek pembangunan.", en: "Additive material for cement, concrete, and aggregate in construction projects." },
    "industri.card2.title": { id: "Baja &amp; Metalurgi", en: "Steel &amp; Metallurgy" },
    "industri.card2.desc": { id: "Flux dalam proses peleburan dan pemurnian logam.", en: "Flux for metal smelting and refining processes." },
    "industri.card3.title": { id: "Perikanan &amp; Tambak", en: "Fisheries &amp; Aquaculture" },
    "industri.card3.desc": { id: "Menstabilkan pH air tambak dan mendukung pertumbuhan udang serta ikan budidaya.", en: "Stabilizes pond water pH and supports the growth of farmed shrimp and fish." },
    "industri.card4.title": { id: "Kaca &amp; Keramik", en: "Glass &amp; Ceramics" },
    "industri.card4.desc": { id: "Komponen mineral pada manufaktur kaca dan keramik.", en: "Mineral component in glass and ceramics manufacturing." },
    "industri.card5.title": { id: "Pertambangan &amp; Reklamasi", en: "Mining &amp; Reclamation" },
    "industri.card5.desc": { id: "Menetralkan keasaman tanah bekas tambang untuk mendukung revegetasi dan reklamasi lahan.", en: "Neutralizes acidic soil from former mining land to support revegetation and land reclamation." },
    "industri.card6.title": { id: "Pakan Ternak &amp; Kimia", en: "Animal Feed &amp; Chemicals" },
    "industri.card6.desc": { id: "Suplemen mineral pakan ternak dan bahan baku industri kimia.", en: "Mineral supplement for animal feed and feedstock for the chemical industry." },
    "industri.card7.title": { id: "Cat, Plastik &amp; Karet", en: "Paint, Plastics &amp; Rubber" },
    "industri.card7.desc": { id: "Filler mineral untuk cat, pelapis, plastik, dan produk karet.", en: "Mineral filler for paint, coatings, plastics, and rubber products." },
    "industri.card8.title": { id: "Pertanian &amp; Perkebunan", en: "Agriculture &amp; Plantations" },
    "industri.card8.desc": { id: "Penetral pH tanah dan sumber hara makro bagi tanaman.", en: "Soil pH neutralizer and source of macronutrients for plants." },

    "galeri.eyebrow": { id: "Dokumentasi", en: "Documentation" },
    "galeri.h2": { id: "Lihat Dokumentasi Kami", en: "See Our Documentation" },
    "galeri.p": {
      id: "Jelajahi galeri alur kerja kami — dari produksi, pengemasan, proses stuffing, hingga pengiriman ke pelanggan.",
      en: "Explore our workflow gallery — from production, packaging, container stuffing, to delivery to customers."
    },
    "galeri.cta": { id: "Lihat Galeri", en: "View Gallery" },

    "tentang.eyebrow": { id: "Tentang Kami", en: "About Us" },
    "tentang.h2": { id: "Mitra Mineral Industri Terpercaya di Indonesia", en: "Indonesia's Trusted Industrial Minerals Partner" },
    "tentang.p1": {
      id: "PT Mangghala Inatama Lentera adalah perusahaan mineral industri yang memproduksi dan mendistribusikan Dolomite, Fosfat Alam, Abu Tandan Kosong Sawit, dan Lempung dalam bentuk powder maupun granule — untuk sektor konstruksi, baja, pengolahan air, kaca-keramik, hingga pertanian. Selama lebih dari 15 tahun, kami telah menjadi mitra lebih dari 500 klien industri, perkebunan, dan petani di 34 provinsi di Indonesia. Kami juga siap melayani permintaan ekspor bagi buyer internasional yang membutuhkan pasokan mineral industri berkualitas dari Indonesia.",
      en: "PT Mangghala Inatama Lentera is an industrial minerals company that produces and distributes Dolomite, Natural Rock Phosphate, Palm Empty Fruit Bunch Ash, and Clay in powder and granule form — for the construction, steel, water treatment, glass-ceramics, and agriculture sectors. For more than 15 years, we have partnered with over 500 industrial, plantation, and farming clients across 34 provinces in Indonesia. We are also ready to serve export demand from international buyers seeking quality industrial minerals sourced from Indonesia."
    },
    "tentang.p2": {
      id: "Setiap produk yang kami kirim melewati pengujian laboratorium internal — mulai dari penambangan bahan baku, pengolahan, uji kualitas, pengemasan, hingga distribusi ke seluruh Indonesia.",
      en: "Every product we ship goes through internal laboratory testing — from raw material mining and processing, to quality testing, packaging, and distribution across Indonesia."
    },
    "tentang.cta": { id: "Download Company Profile", en: "Download Company Profile" },
    "tentang.detailCta": { id: "Tim &amp; Legalitas Perusahaan", en: "Team &amp; Company Legal Documents" },
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
      id: "Tidak. Dolomite, Fosfat Alam, Abu Tandan Sawit, dan Lempung kami juga digunakan industri konstruksi, baja, perikanan, kaca-keramik, pakan ternak, dan sektor lain sesuai spesifikasi dan grade yang dibutuhkan — bukan hanya pertanian.",
      en: "No. Our Dolomite, Natural Rock Phosphate, Palm EFB Ash, and Clay are also used by the construction, steel, fisheries, glass-ceramics, animal feed, and other industries according to the specification and grade required — not agriculture alone."
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
      id: "PT Mangghala Inatama Lentera menyediakan mineral industri berkualitas — Dolomite, Fosfat Alam, Abu Tandan Sawit, dan Lempung — untuk mendukung industri konstruksi, manufaktur, dan pertanian, baik pasar domestik maupun ekspor internasional.",
      en: "PT Mangghala Inatama Lentera supplies quality industrial minerals — Dolomite, Natural Rock Phosphate, Palm EFB Ash, and Clay — supporting construction, manufacturing, and agriculture industries, for both the domestic market and international export."
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
    "gallery.hero.h2": { id: "Alur Produksi hingga Pengiriman", en: "Flow From Production to Shipping" },
    "gallery.hero.p": {
      id: "Ilustrasi visual dari setiap tahap: produksi, pengemasan, proses stuffing, hingga pengiriman ke pelanggan domestik dan ekspor. Foto dokumentasi asli menyusul.",
      en: "Visual illustrations of every stage: production, packaging, container stuffing, and delivery to domestic and export customers. Real documentation photos coming soon."
    },
    "gallery.filter.all": { id: "Semua", en: "All" },
    "gallery.filter.produksi": { id: "Produksi", en: "Production" },
    "gallery.filter.pengemasan": { id: "Pengemasan", en: "Packaging" },
    "gallery.filter.stuffing": { id: "Proses Stuffing", en: "Container Stuffing" },
    "gallery.filter.pengiriman": { id: "Pengiriman", en: "Shipping" },

    "gallery.tag.produksi1": { id: "Produksi · 01", en: "Production · 01" },
    "gallery.tag.produksi2": { id: "Produksi · 02", en: "Production · 02" },
    "gallery.tag.produksi3": { id: "Produksi · 03", en: "Production · 03" },
    "gallery.tag.pengemasan": { id: "Pengemasan", en: "Packaging" },
    "gallery.tag.stuffing": { id: "Proses Stuffing", en: "Container Stuffing" },
    "gallery.tag.pengiriman": { id: "Pengiriman", en: "Shipping" },

    "gallery.produksi1.title": { id: "Penambangan &amp; Pengumpulan", en: "Mining &amp; Collection" },
    "gallery.produksi1.desc": { id: "Bahan baku dolomite &amp; fosfat dari tambang mitra, serta tandan kosong dari pabrik kelapa sawit.", en: "Dolomite and phosphate raw material from partner mines, plus empty fruit bunches from palm oil mills." },
    "gallery.produksi2.title": { id: "Pengolahan", en: "Processing" },
    "gallery.produksi2.desc": { id: "Proses pembakaran, penggilingan, dan pengayakan untuk menghasilkan powder atau granule.", en: "Calcination, grinding, and sieving process to produce powder or granule form." },
    "gallery.produksi3.title": { id: "Uji Kualitas", en: "Quality Testing" },
    "gallery.produksi3.desc": { id: "Pengujian kadar CaO, MgO, P₂O₅, dan K₂O di laboratorium sebelum produk diluluskan.", en: "Laboratory testing of CaO, MgO, P₂O₅, and K₂O content before products are approved for release." },

    "gallery.pengemasan1.title": { id: "Pengemasan", en: "Packaging" },
    "gallery.pengemasan1.desc": { id: "Dikemas dalam karung 25kg / 50kg / jumbo bag sesuai kebutuhan pelanggan.", en: "Packed in 25kg / 50kg bags or jumbo bags according to customer needs." },

    "gallery.stuffing1.title": { id: "Proses Stuffing", en: "Container Stuffing" },
    "gallery.stuffing1.desc": { id: "Pemuatan karung dan jumbo bag ke dalam kontainer secara rapi dan aman untuk pengiriman domestik maupun ekspor.", en: "Bags and jumbo bags are carefully and securely loaded into containers for domestic delivery and export shipment." },

    "gallery.pengiriman1.title": { id: "Pengiriman", en: "Shipping" },
    "gallery.pengiriman1.desc": { id: "Pengiriman ke gudang, kebun, dan pelabuhan di seluruh Indonesia hingga ke pelabuhan tujuan ekspor.", en: "Delivered to warehouses, plantations, and ports across Indonesia, through to destination ports for export." },

    "gallery.cta.eyebrow": { id: "Tertarik dengan Produk Kami?", en: "Interested in Our Products?" },

    "about.hero.eyebrow": { id: "Tentang Kami", en: "About Us" },
    "about.hero.h2": { id: "Mengenal Lebih Dekat PT Mangghala Inatama Lentera", en: "Get to Know PT Mangghala Inatama Lentera" },
    "about.hero.p": { id: "Tim di balik produksi, serta legalitas dan kelengkapan dokumen perusahaan kami.", en: "The team behind our production, and our company's legal documentation." },

    "about.team.eyebrow": { id: "Tim Kami", en: "Our Team" },
    "about.team.h2": { id: "Orang-Orang di Balik Setiap Pengiriman", en: "The People Behind Every Shipment" },
    "about.team.p": { id: "Profil dan foto tim akan segera dilengkapi. Berikut fungsi-fungsi utama yang menjalankan operasional kami sehari-hari.", en: "Team profiles and photos will be added soon. Below are the core functions that run our day-to-day operations." },
    "about.team.role1": { id: "Direktur Utama", en: "Managing Director" },
    "about.team.dept1": { id: "Manajemen &amp; Strategi", en: "Management &amp; Strategy" },
    "about.team.role2": { id: "Manajer Operasional", en: "Operations Manager" },
    "about.team.dept2": { id: "Produksi &amp; Pengemasan", en: "Production &amp; Packaging" },
    "about.team.role3": { id: "Kepala Laboratorium", en: "Laboratory Head" },
    "about.team.dept3": { id: "Uji Kualitas &amp; QC", en: "Quality Testing &amp; QC" },
    "about.team.role4": { id: "Manajer Penjualan &amp; Ekspor", en: "Sales &amp; Export Manager" },
    "about.team.dept4": { id: "Sales &amp; Hubungan Pelanggan", en: "Sales &amp; Customer Relations" },
    "about.team.soon": { id: "Foto Menyusul", en: "Photo Coming Soon" },

    "about.legal.eyebrow": { id: "Legalitas", en: "Legal" },
    "about.legal.h2": { id: "Legalitas &amp; Perizinan Perusahaan", en: "Company Legal Documents &amp; Permits" },
    "about.legal.p": { id: "Dokumen resmi berikut tersedia untuk verifikasi calon mitra dan buyer. Salinan lengkap dapat diminta melalui tim sales kami.", en: "The official documents below are available for verification by prospective partners and buyers. Full copies can be requested through our sales team." },
    "about.legal.doc1": { id: "Akta Pendirian Perusahaan", en: "Deed of Establishment" },
    "about.legal.doc1desc": { id: "Akta notaris pendirian PT Mangghala Inatama Lentera beserta pengesahan Kemenkumham.", en: "Notarial deed of establishment for PT Mangghala Inatama Lentera, along with Ministry of Law ratification." },
    "about.legal.doc2": { id: "NIB (Nomor Induk Berusaha)", en: "NIB (Business Identification Number)" },
    "about.legal.doc2desc": { id: "Terdaftar resmi melalui sistem Online Single Submission (OSS) pemerintah Indonesia.", en: "Officially registered through the Indonesian government's Online Single Submission (OSS) system." },
    "about.legal.doc3": { id: "NPWP Perusahaan", en: "Company Tax ID (NPWP)" },
    "about.legal.doc3desc": { id: "Nomor Pokok Wajib Pajak badan usaha, aktif dan dalam status taat pajak.", en: "Corporate taxpayer identification number, active and in good tax standing." },
    "about.legal.doc4": { id: "Izin Usaha Industri", en: "Industrial Business License" },
    "about.legal.doc4desc": { id: "Izin operasional untuk kegiatan produksi dan pengolahan mineral industri.", en: "Operating license for industrial mineral production and processing activities." },
    "about.legal.doc5": { id: "Surat Keterangan Domisili", en: "Certificate of Domicile" },
    "about.legal.doc5desc": { id: "Keterangan lokasi kantor dan fasilitas operasional perusahaan.", en: "Confirmation of the company's office and operational facility location." },
    "about.legal.doc6": { id: "Sertifikasi Standar Produk", en: "Product Standard Certification" },
    "about.legal.doc6desc": { id: "Sertifikat mutu dan standar produk yang berlaku untuk lini produk kami.", en: "Quality and product standard certificates applicable to our product line." },

    "about.cta.eyebrow": { id: "Ingin Menjadi Mitra Kami?", en: "Want to Become Our Partner?" },

    "pdetail.hero.eyebrow": { id: "Detail Produk", en: "Product Details" },
    "pdetail.hero.h2": { id: "Technical Data Sheet, COA, dan Dokumentasi Produk", en: "Technical Data Sheet, COA, and Product Documentation" },
    "pdetail.hero.p": { id: "Spesifikasi teknis, sertifikat analisis, dan foto produk untuk setiap lini mineral yang kami produksi.", en: "Technical specifications, certificates of analysis, and product photos for every mineral line we produce." },

    "pdetail.dolomite.intro": { id: "Tersedia dalam bentuk powder dan granule, untuk kebutuhan konstruksi, baja, kaca, pengolahan air, hingga pertanian.", en: "Available in powder and granule form, for construction, steel, glass, water treatment, and agriculture needs." },
    "pdetail.phosphate.intro": { id: "Bahan baku pupuk, pakan ternak, dan industri kimia — tersedia dalam bentuk powder dan granule.", en: "Raw material for fertilizer, animal feed, and chemical industries — available in powder and granule form." },
    "pdetail.palmash.intro": { id: "Pupuk kalium ramah lingkungan hasil pengolahan tandan kosong kelapa sawit, dengan potensi material konstruksi.", en: "Eco-friendly potassium fertilizer processed from palm empty fruit bunches, with potential as a construction material." },
    "pdetail.clay.intro": { id: "Mineral aluminosilikat alami untuk keramik, bata &amp; genteng, pengecoran logam, hingga lumpur pemboran — tersedia dalam bentuk powder dan granule/pelet.", en: "A natural aluminosilicate mineral for ceramics, bricks &amp; roof tiles, metal foundry, and drilling mud — available in powder and granule/pellet form." },

    "pdetail.tds.caption": { id: "Technical Data Sheet (Ringkasan Parameter)", en: "Technical Data Sheet (Parameter Summary)" },
    "pdetail.tds.col.param": { id: "Parameter", en: "Parameter" },
    "pdetail.tds.col.value": { id: "Nilai", en: "Value" },
    "pdetail.tds.seeTds": { id: "Lihat TDS resmi", en: "See official TDS" },
    "pdetail.tds.moisture": { id: "Kadar Air", en: "Moisture Content" },
    "pdetail.tds.mesh": { id: "Ukuran Mesh", en: "Mesh Size" },
    "pdetail.tds.note": { id: "Nilai aktual bervariasi per batch dan tercantum lengkap dalam TDS resmi — hubungi tim sales untuk dokumen lengkap.", en: "Actual values vary by batch and are listed in full in the official TDS — contact our sales team for the complete document." },

    "pdetail.coa.title": { id: "COA (Certificate of Analysis)", en: "COA (Certificate of Analysis)" },
    "pdetail.coa.desc": { id: "Setiap batch/pengiriman disertai COA dari laboratorium internal kami. Hubungi tim sales untuk contoh format dan salinan sesuai pengiriman Anda.", en: "Every batch/shipment is accompanied by a COA from our internal laboratory. Contact our sales team for a sample format and a copy matching your shipment." }
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
