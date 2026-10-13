// ============================================================
// Halaman Rute
// Semua isi rute ada di daftar di bawah ini. Mau tambah pos,
// ganti ketinggian, atau ubah catatan? Cukup edit datanya.
//
// slug   = id gunung, dipakai di link (rute.html#semeru)
// pos    = urutan titik dari basecamp sampai puncak
//   waktu = estimasi jalan dari pos sebelumnya
//   camp  = true kalau biasa dipakai buat camp / bermalam
//
// Catatan: ketinggian & waktu masih perkiraan (draft),
// cek ulang ke basecamp / taman nasional sebelum dipakai.
// ============================================================

const rute = [
  {
    slug: "semeru",
    nama: "Gunung Semeru",
    wilayah: "Lumajang & Malang, Jawa Timur",
    jalur: "Jalur Ranu Pani",
    mdpl: 3676,
    durasi: "3–4 hari",
    jarak: "± 17 km sekali jalan",
    level: "Sulit",
    foto: "./assets/mountains/semeru.webp",
    catatan:
      "Pendakian ke Puncak Mahameru sering ditutup karena aktivitas kawah Jonggring Saloko. Selalu cek status jalur di TN Bromo Tengger Semeru sebelum berangkat.",
    pos: [
      { nama: "Basecamp Ranu Pani", mdpl: 2100, waktu: "Start", ket: "Registrasi online, cek kesehatan, dan briefing wajib dari petugas.", camp: true },
      { nama: "Pos 1 · Landengan Dowo", mdpl: 2300, waktu: "± 1,5 jam", ket: "Jalan setapak landai di antara ladang dan hutan." },
      { nama: "Pos 2 · Watu Rejeng", mdpl: 2350, waktu: "± 1 jam", ket: "Tebing batu besar di sisi jalur, ada shelter kecil." },
      { nama: "Pos 3", mdpl: 2400, waktu: "± 1 jam", ket: "Tanjakan pendek, setelahnya Ranu Kumbolo mulai terlihat." },
      { nama: "Ranu Kumbolo", mdpl: 2400, waktu: "± 45 menit", ket: "Danau ikonik. Spot camp favorit dan sumber air. Dilarang mandi atau mencuci di danau.", camp: true },
      { nama: "Tanjakan Cinta & Oro-oro Ombo", mdpl: 2450, waktu: "± 45 menit", ket: "Tanjakan legendaris lalu sabana luas penuh bunga verbena saat musim tertentu." },
      { nama: "Cemoro Kandang", mdpl: 2500, waktu: "± 45 menit", ket: "Hutan cemara, jalur mulai menanjak konstan." },
      { nama: "Jambangan", mdpl: 2600, waktu: "± 1,5 jam", ket: "Padang terbuka, Mahameru terlihat jelas di depan." },
      { nama: "Kalimati", mdpl: 2700, waktu: "± 45 menit", ket: "Camp terakhir sebelum summit. Air dari Sumber Mani (± 1 jam PP).", camp: true },
      { nama: "Arcopodo", mdpl: 2900, waktu: "± 1,5 jam", ket: "Jalur sempit dan curam di punggungan. Hati-hati di malam hari." },
      { nama: "Kelik (batas vegetasi)", mdpl: 3000, waktu: "± 30 menit", ket: "Titik terakhir pepohonan. Setelah ini pasir dan kerikil lepas." },
      { nama: "Puncak Mahameru", mdpl: 3676, waktu: "± 4 jam", ket: "Summit attack mulai tengah malam. Wajib turun sebelum pukul 10.00 karena arah angin membawa gas beracun." },
    ],
  },
  {
    slug: "rinjani",
    nama: "Gunung Rinjani",
    wilayah: "Lombok, Nusa Tenggara Barat",
    jalur: "Jalur Sembalun",
    mdpl: 3726,
    durasi: "3–4 hari",
    jarak: "± 15 km sekali jalan",
    level: "Sulit",
    foto: "./assets/mountains/rinjani.webp",
    catatan:
      "Booking wajib lewat aplikasi eRinjani. Jalur ditutup saat musim hujan (biasanya Januari–Maret).",
    pos: [
      { nama: "Basecamp Sembalun", mdpl: 1156, waktu: "Start", ket: "Registrasi di kantor TN Gunung Rinjani, Sembalun Lawang.", camp: true },
      { nama: "Pos 1 · Pemantauan", mdpl: 1300, waktu: "± 2 jam", ket: "Sabana terbuka dan panas, bawa pelindung kepala." },
      { nama: "Pos 2 · Tengengean", mdpl: 1500, waktu: "± 1 jam", ket: "Ada jembatan dan sumber air musiman." },
      { nama: "Pos 3 · Padabalong", mdpl: 1800, waktu: "± 1,5 jam", ket: "Tempat istirahat sebelum Bukit Penyesalan." },
      { nama: "Bukit Penyesalan", mdpl: 2300, waktu: "± 2,5 jam", ket: "Rangkaian bukit menanjak yang seperti tidak ada habisnya." },
      { nama: "Plawangan Sembalun", mdpl: 2639, waktu: "± 1,5 jam", ket: "Camp di bibir kaldera dengan view Segara Anak.", camp: true },
      { nama: "Letter E", mdpl: 3300, waktu: "± 2,5 jam", ket: "Jalur pasir dan kerikil labil, naik dua langkah merosot satu." },
      { nama: "Puncak Rinjani", mdpl: 3726, waktu: "± 1,5 jam", ket: "Angin kencang di punggungan tipis. Sunrise dengan view Bali dan Sumbawa." },
    ],
  },
  {
    slug: "kerinci",
    nama: "Gunung Kerinci",
    wilayah: "Jambi & Sumatra Barat",
    jalur: "Jalur Kersik Tuo",
    mdpl: 3805,
    durasi: "2–3 hari",
    jarak: "± 12 km sekali jalan",
    level: "Sedang",
    foto: "./assets/mountains/kerinci.webp",
    catatan:
      "Gunung berapi aktif. Area puncak bisa ditutup saat status meningkat. Jalur di hutan licin saat hujan.",
    pos: [
      { nama: "Basecamp Kersik Tuo", mdpl: 1500, waktu: "Start", ket: "Desa di kaki gunung dengan hamparan kebun teh.", camp: true },
      { nama: "Pintu Rimba", mdpl: 1800, waktu: "± 30 menit (ojek)", ket: "Gerbang hutan Taman Nasional Kerinci Seblat." },
      { nama: "Pos 1 · Bangku Panjang", mdpl: 1909, waktu: "± 30 menit", ket: "Hutan hujan tropis lebat, jalur masih bersahabat." },
      { nama: "Pos 2 · Batu Lumut", mdpl: 2010, waktu: "± 30 menit", ket: "Batu besar berlumut, tempat istirahat singkat." },
      { nama: "Pos 3 · Pondok Panorama", mdpl: 2225, waktu: "± 1 jam", ket: "Mulai banyak akar besar yang harus dipanjat." },
      { nama: "Shelter 1", mdpl: 2505, waktu: "± 1,5 jam", ket: "Area datar untuk camp darurat." },
      { nama: "Shelter 2", mdpl: 3002, waktu: "± 3 jam", ket: "Melewati Terowongan Harimau, jalur parit sempit dan curam.", camp: true },
      { nama: "Shelter 3", mdpl: 3351, waktu: "± 1,5 jam", ket: "Camp terakhir di batas vegetasi, angin kencang.", camp: true },
      { nama: "Tugu Yudha", mdpl: 3600, waktu: "± 1,5 jam", ket: "Tugu peringatan pendaki. Medan pasir dan batu." },
      { nama: "Puncak Indrapura", mdpl: 3805, waktu: "± 1 jam", ket: "Bibir kawah aktif dengan view Danau Gunung Tujuh." },
    ],
  },
  {
    slug: "latimojong",
    nama: "Gunung Latimojong",
    wilayah: "Enrekang, Sulawesi Selatan",
    jalur: "Jalur Karangan",
    mdpl: 3478,
    durasi: "4–5 hari",
    jarak: "± 13 km sekali jalan",
    level: "Sedang",
    foto: "./assets/mountains/latimojong.webp",
    catatan:
      "Curah hujan tinggi hampir sepanjang tahun. Siapkan rain cover dan sepatu yang nyaman di medan becek.",
    pos: [
      { nama: "Desa Karangan", mdpl: 1400, waktu: "Start", ket: "Desa terakhir, dicapai dengan mobil gardan ganda dari Baraka.", camp: true },
      { nama: "Pos 1 · Buntu Kaciling", mdpl: 1800, waktu: "± 1,5 jam", ket: "Melewati kebun kopi warga." },
      { nama: "Pos 2 · Sarung Pa'pak", mdpl: 1900, waktu: "± 1 jam", ket: "Ceruk batu besar dekat sungai dan air terjun.", camp: true },
      { nama: "Pos 3 · Lantang Nase", mdpl: 2140, waktu: "± 1,5 jam", ket: "Tanjakan curam berakar." },
      { nama: "Pos 4 · Buntu Lebu", mdpl: 2400, waktu: "± 1,5 jam", ket: "Mulai masuk hutan lumut." },
      { nama: "Pos 5 · Soloh Tama", mdpl: 2650, waktu: "± 2 jam", ket: "Area camp luas dengan sumber air.", camp: true },
      { nama: "Pos 6 · Kolong Buntu", mdpl: 3000, waktu: "± 2 jam", ket: "Beberapa titik batu yang dipanjat dengan tali." },
      { nama: "Pos 7", mdpl: 3200, waktu: "± 1 jam", ket: "Camp terakhir sebelum puncak.", camp: true },
      { nama: "Puncak Rantemario", mdpl: 3478, waktu: "± 1,5 jam", ket: "Titik tertinggi Sulawesi." },
    ],
  },
  {
    slug: "binaiya",
    nama: "Gunung Binaiya",
    wilayah: "Pulau Seram, Maluku",
    jalur: "Jalur Piliana",
    mdpl: 3027,
    durasi: "6–8 hari",
    jarak: "± 40 km sekali jalan",
    level: "Sulit",
    foto: "./assets/mountains/binaiya.webp",
    catatan:
      "Logistik harus dibawa penuh dari bawah. Wajib izin Balai TN Manusela dan ditemani pemandu dari Desa Piliana.",
    pos: [
      { nama: "Tehoru (pesisir)", mdpl: 0, waktu: "Start", ket: "Titik awal dari tepi pantai selatan Seram." },
      { nama: "Desa Piliana", mdpl: 700, waktu: "± 3 jam", ket: "Lapor ke kepala desa dan sewa pemandu lokal.", camp: true },
      { nama: "Yamitala", mdpl: 1200, waktu: "± 5 jam", ket: "Hutan hujan tropis, lintasan sungai.", camp: true },
      { nama: "Waepuku", mdpl: 1600, waktu: "± 5 jam", ket: "Camp di dekat aliran sungai.", camp: true },
      { nama: "Aimoto", mdpl: 2200, waktu: "± 5 jam", ket: "Medan menanjak panjang, mulai hutan lumut." },
      { nama: "Isilali", mdpl: 2500, waktu: "± 3 jam", ket: "Camp terakhir sebelum puncak.", camp: true },
      { nama: "Puncak Binaiya", mdpl: 3027, waktu: "± 4 jam", ket: "Batuan karst tajam menjelang puncak, pakai sarung tangan." },
    ],
  },
  {
    slug: "bukit-raya",
    nama: "Gunung Bukit Raya",
    wilayah: "Kalimantan Tengah & Barat",
    jalur: "Jalur Tumbang Habangoi",
    mdpl: 2278,
    durasi: "7–9 hari",
    jarak: "± 35 km sekali jalan",
    level: "Sangat Sulit",
    foto: "./assets/mountains/bukit-raya.webp",
    catatan:
      "Akses ke desa awal butuh perjalanan darat dan sungai yang panjang. Siapkan anti-pacet dan obat-obatan pribadi.",
    pos: [
      { nama: "Desa Tumbang Habangoi", mdpl: 200, waktu: "Start", ket: "Desa adat Dayak, titik awal pendakian.", camp: true },
      { nama: "Pos 1 · Hulu Habangoi", mdpl: 400, waktu: "± 6 jam", ket: "Menyusuri sungai dan hutan primer.", camp: true },
      { nama: "Pos 4", mdpl: 800, waktu: "± 1 hari", ket: "Hutan lembap penuh pacet.", camp: true },
      { nama: "Pos 7", mdpl: 1300, waktu: "± 1 hari", ket: "Jalur mulai menanjak tajam.", camp: true },
      { nama: "Pos 10 · Kaki Bukit Raya", mdpl: 1900, waktu: "± 1 hari", ket: "Camp terakhir di hutan lumut.", camp: true },
      { nama: "Puncak Kakam", mdpl: 2278, waktu: "± 3 jam", ket: "Puncak tertinggi Bukit Raya, tertutup hutan lumut." },
    ],
  },
  {
    slug: "carstensz",
    nama: "Carstensz Pyramid",
    wilayah: "Papua Tengah",
    jalur: "Jalur Lembah Kuning",
    mdpl: 4884,
    durasi: "7–10 hari",
    jarak: "Rock climbing ± 12 jam PP",
    level: "Sangat Sulit",
    foto: "./assets/mountains/carstensz.webp",
    catatan:
      "Butuh kemampuan panjat tebing (jumar, rappelling) dan izin khusus. Wajib lewat operator resmi.",
    pos: [
      { nama: "Timika", mdpl: 30, waktu: "Start", ket: "Kota transit, pengurusan izin dan cek perlengkapan." },
      { nama: "Base Camp Lembah Kuning", mdpl: 4200, waktu: "Helikopter", ket: "Aklimatisasi 1–2 hari di lembah danau-danau.", camp: true },
      { nama: "Teras Bawah", mdpl: 4400, waktu: "± 2 jam", ket: "Mulai memanjat dinding batu kapur dengan fixed rope." },
      { nama: "Tyrolean Traverse", mdpl: 4700, waktu: "± 3 jam", ket: "Menyeberang celah tebing dengan tali horizontal." },
      { nama: "Summit Ridge", mdpl: 4800, waktu: "± 1,5 jam", ket: "Punggungan sempit dengan jurang di kedua sisi." },
      { nama: "Puncak Carstensz", mdpl: 4884, waktu: "± 30 menit", ket: "Titik tertinggi Indonesia dan Oseania." },
    ],
  },
];

// ------------------------------------------------------------
// Tampilan
// ------------------------------------------------------------
const tabs = document.getElementById("route-tabs");
const detail = document.getElementById("route-detail");
const formatAngka = (n) => n.toLocaleString("id-ID");

// Satu tombol tab untuk tiap gunung
rute.forEach((r) => {
  const tab = document.createElement("button");
  tab.className = "route-tab";
  tab.textContent = r.nama.replace("Gunung ", "");
  tab.onclick = () => {
    history.replaceState(null, "", `#${r.slug}`);
    tampilkan(r.slug);
  };
  tabs.append(tab);
});

// Grafik ketinggian: tiap pos jadi satu titik, jaraknya dibuat rata
function grafik(pos) {
  const w = 300, h = 110;
  const tinggi = pos.map((p) => p.mdpl);
  const min = Math.min(...tinggi), max = Math.max(...tinggi);
  const titik = pos.map((p, i) => [
    (i / (pos.length - 1)) * w,
    h - 8 - ((p.mdpl - min) / (max - min || 1)) * (h - 24),
  ]);
  const garis = titik.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");

  return `
    <svg class="route-profile" viewBox="0 -6 ${w} ${h + 6}" preserveAspectRatio="none" aria-hidden="true">
      <path class="route-profile-area" d="${garis} L${w} ${h} L0 ${h} Z" />
      <path class="route-profile-line" d="${garis}" />
    </svg>
    <div class="route-profile-dots">
      ${titik
        .map(([x, y], i) =>
          `<span class="${pos[i].camp ? "is-camp" : ""}" style="left:${(x / w) * 100}%; top:${((y + 6) / (h + 6)) * 100}%"></span>`)
        .join("")}
    </div>`;
}

function tampilkan(slug) {
  const r = rute.find((x) => x.slug === slug) || rute[0];

  [...tabs.children].forEach((t, i) => t.setAttribute("aria-selected", rute[i] === r));

  detail.innerHTML = `
    <div class="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
      <!-- Kiri: ringkasan jalur -->
      <div class="space-y-8 lg:sticky lg:top-28 lg:self-start">
        <figure class="relative">
          <img src="${r.foto}" alt="${r.nama}" class="aspect-16/10 w-full rounded-3xl object-cover" />
          <figcaption class="chip absolute bottom-5 left-5">${r.jalur}</figcaption>
        </figure>

        <div>
          <p class="label-small">${r.wilayah}</p>
          <h2 class="section-title">${r.nama}</h2>
        </div>

        <div class="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
          <div class="stat"><b>${formatAngka(r.mdpl)}</b><p>mdpl</p></div>
          <div class="stat"><b>${r.pos.length}</b><p>Titik</p></div>
          <div class="stat stat-text"><b>${r.durasi}</b><p>Durasi</p></div>
          <div class="stat stat-text"><b>${r.level}</b><p>Tingkat</p></div>
        </div>

        <div>
          <p class="label-small">Profil Ketinggian · ${r.jarak}</p>
          <div class="relative mt-4">${grafik(r.pos)}</div>
        </div>

        <p class="route-note">${r.catatan}</p>
      </div>

      <!-- Kanan: urutan pos -->
      <ol class="timeline">
        ${r.pos
          .map(
            (p, i) => `
          <li class="${p.camp ? "is-camp" : ""} ${i === r.pos.length - 1 ? "is-summit" : ""}">
            <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3>${p.nama}</h3>
              <span class="timeline-mdpl">${formatAngka(p.mdpl)} mdpl</span>
            </div>
            <p class="timeline-meta">${p.waktu}${p.camp ? " · Area camp" : ""}</p>
            <p class="text-white/70">${p.ket}</p>
          </li>`
          )
          .join("")}
      </ol>
    </div>`;

  // Ulangi animasi masuk
  detail.classList.remove("is-new");
  void detail.offsetWidth;
  detail.classList.add("is-new");
}

// Buka gunung sesuai link (rute.html#semeru), kalau tidak ada pakai yang pertama
tampilkan(location.hash.slice(1));
addEventListener("hashchange", () => tampilkan(location.hash.slice(1)));
