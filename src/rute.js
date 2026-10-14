// ============================================================
// Halaman Rute
// Semua isi rute ada di daftar di bawah ini (sumber: Figma 7Summit,
// frame "Desktop - 3" s/d "Desktop - 9"). Mau tambah pos, ganti
// ketinggian, atau ubah keterangan? Cukup edit datanya.
//
// slug  = id gunung, dipakai di link (rute.html#semeru)
// pos   = urutan titik dari basecamp sampai puncak
//   label = keterangan singkat di bawah nama pos
//   mdpl  = null kalau ketinggiannya belum diketahui (tampil "—")
// ============================================================

const rute = [
  {
    slug: "semeru",
    nama: "Gunung Semeru",
    wilayah: "Lumajang & Malang, Jawa Timur",
    jalur: "Jalur Ranu Pani",
    mdpl: 3676,
    durasi: "3-4 hari",
    level: "Sulit",
    foto: "./assets/rute/semeru.webp",
    pos: [
      { nama: "Basecamp Ranu Pani", mdpl: 2100, label: "Start · Registrasi", ket: "Booking online lewat bromotenggersemeru.id, cek kesehatan, dan briefing wajib dari petugas TNBTS." },
      { nama: "Pos 1 Landengan Dowo", mdpl: 2266, label: "Pos 1 · Hutan cemara", ket: "3 km dari Ranu Pani, sekitar 60 menit. Jalur didominasi cemara gunung." },
      { nama: "Pos 2 Watu Rejeng", mdpl: 2390, label: "Pos 2 · Sumber air", ket: "Ada pondok kecil peristirahatan dan sumber air di bawah jembatan." },
      { nama: "Pos 4 Ranu Kumbolo", mdpl: 2451, label: "Pos 4 · Viewpoint", ket: "Di bagian atas danau. Dari sini bentang Ranu Kumbolo terlihat utuh." },
      { nama: "Ranu Kumbolo", mdpl: 2400, label: "Camp · Sumber air", ket: "Danau 14 ha. Sejak Mei 2025 TNBTS menetapkan titik ini sebagai batas akhir pendakian." },
      { nama: "Cemoro Kandang", mdpl: 2500, label: "Shelter", ket: "Dicapai setelah Tanjakan Cinta dan padang lavender Oro-Oro Ombo." },
      { nama: "Jambangan", mdpl: 2600, label: "Viewpoint", ket: "Titik pertama puncak Mahameru terlihat utuh dari jalur." },
      { nama: "Kalimati", mdpl: 2700, label: "Camp terakhir", ket: "Sumber Mani sekitar 1 km ke arah barat. Batas akhir pendakian menurut PVMBG." },
      { nama: "Arcopodo", mdpl: 2900, label: "Batas vegetasi", ket: "Jalur pasir dan kerikil labil dimulai dari sini." },
      { nama: "Puncak Mahameru", mdpl: 3676, label: "Puncak", ket: "Kawah Jonggring Saloko. Turun sebelum pukul 10 pagi karena arah angin gas beracun berubah." },
    ],
  },
  {
    slug: "rinjani",
    nama: "Gunung Rinjani",
    wilayah: "Lombok Timur, Nusa Tenggara Barat",
    jalur: "Jalur Sembalun",
    mdpl: 3726,
    durasi: "3-4 hari",
    level: "Sulit",
    foto: "./assets/rute/rinjani.webp",
    pos: [
      { nama: "Basecamp Sembalun", mdpl: 1156, label: "Start · Registrasi", ket: "Gerbang pendakian di Sembalun Lawang, sisi timur Rinjani." },
      { nama: "Pos 1 Pemantauan", mdpl: 1300, label: "Pos 1 · Savana", ket: "Medan landai menyusuri padang savana. Sekitar 2-3 jam dari basecamp." },
      { nama: "Pos 2 Tengengean", mdpl: 1500, label: "Pos 2 · Sumber air terakhir", ket: "Titik air terakhir sebelum Plawangan. Isi penuh semua botol di sini." },
      { nama: "Pos 3 Padabalong", mdpl: 1800, label: "Pos 3 · Camp", ket: "Savana berganti hutan tropis. Banyak pendaki makan siang di sini." },
      { nama: "Bukit Penyesalan", mdpl: 2300, label: "Tanjakan", ket: "Rangkaian punggungan beruntun. Tiap puncak bukit disambung bukit berikutnya." },
      { nama: "Plawangan Sembalun", mdpl: 2639, label: "Camp · Summit camp", ket: "Camp terakhir sebelum summit attack. Pemandangan Segara Anak dan puncak Rinjani." },
      { nama: "Puncak Rinjani", mdpl: 3726, label: "Puncak", ket: "4-5 jam dari Plawangan, berangkat dini hari. Medan pasir dan kerikil." },
      { nama: "Danau Segara Anak", mdpl: 2000, label: "Danau kawah", ket: "Turun dari Plawangan. Ada sumber air panas Aik Kalak di dekatnya." },
      { nama: "Plawangan Senaru", mdpl: 2461, label: "Camp", ket: "Bibir kaldera sisi barat, jalur turun menuju Desa Senaru." },
    ],
  },
  {
    slug: "kerinci",
    nama: "Gunung Kerinci",
    wilayah: "Kerinci, Jambi",
    jalur: "Jalur Kersik Tuo",
    mdpl: 3805,
    durasi: "2-3 hari",
    level: "Sulit",
    foto: "./assets/rute/kerinci.webp",
    pos: [
      { nama: "Basecamp Kersik Tuo", mdpl: 1400, label: "Start · Registrasi", ket: "Desa perkebunan teh. Dari sini jalan kaki melewati Tugu Macan." },
      { nama: "Pos R10 TNKS", mdpl: 1611, label: "Pos jaga", ket: "Pos penjagaan Taman Nasional Kerinci Seblat, sekitar 45 menit dari desa." },
      { nama: "Pintu Rimba", mdpl: 1682, label: "Batas hutan", ket: "Titik masuk hutan belantara. Kebun teh berakhir di sini." },
      { nama: "Pos 1 Bangku Panjang", mdpl: 1890, label: "Pos 1 · Shelter", ket: "Tanah lapang dengan batu panjang. Jangan berhenti lama, area lintasan harimau." },
      { nama: "Pos 2 Batu Lumut", mdpl: 2010, label: "Pos 2", ket: "Tanah datar tanpa shelter. Setelah ini jalur dipenuhi akar pohon." },
      { nama: "Pos 3 Pondok Panorama", mdpl: 2225, label: "Pos 3", ket: "Akhir dari jalur berakar. Pendakian sesungguhnya dimulai setelah pos ini." },
      { nama: "Shelter 1", mdpl: 2505, label: "Camp · Sumber air", ket: "Ada pondok tua dan sumber air. Aman untuk mendirikan tenda." },
      { nama: "Shelter 2", mdpl: 3056, label: "Camp · Sumber air", ket: "Etape terpanjang di Kerinci. Ada lahan camp dan sumber air." },
      { nama: "Shelter 3", mdpl: 3291, label: "Camp terakhir", ket: "Batas vegetasi, area terbuka paling luas di jalur. Camp terakhir sebelum puncak." },
      { nama: "Tugu Yuda", mdpl: 3690, label: "Pos akhir", ket: "Medan batu cadas dan kerikil. Hampir tak ada pembatas antara jalur dan jurang." },
      { nama: "Puncak Indrapura", mdpl: 3805, label: "Puncak", ket: "Gunung berapi aktif tertinggi di Asia Tenggara. Waspadai arah angin belerang." },
    ],
  },
  {
    slug: "latimojong",
    nama: "Gunung Latimojong",
    wilayah: "Enrekang, Sulawesi Selatan",
    jalur: "Jalur Karangan",
    mdpl: 3478,
    durasi: "3-4 hari",
    level: "Sulit",
    foto: "./assets/rute/latimojong.webp",
    pos: [
      { nama: "Basecamp Dusun Karangan", mdpl: 1415, label: "Start · Registrasi", ket: "Desa terakhir di kaki Latimojong, dilalui Sungai Salu Karangan. Lapor di basecamp sebelum naik." },
      { nama: "Pos 1 Buntu Kaciling", mdpl: 1750, label: "Pos 1", ket: "Area terbuka sekitar 4 m². Jalur menanjak 50-70 derajat dari desa, sekitar 1,5 jam." },
      { nama: "Pos 2 Goa Sarung Pakpak", mdpl: 1864, label: "Pos 2 · Goa", ket: "Ada goa yang bisa dipakai bermalam. Jalur melipir tepi jurang." },
      { nama: "Pos 3 Lantang Nase", mdpl: 2020, label: "Pos 3 · Sumber air", ket: "Tempat istirahat populer karena ada sumber air." },
      { nama: "Pos 4 Buntu Lebu", mdpl: 2250, label: "Pos 4", ket: "Jalur dari Pos 3 bermiring 60-70 derajat dengan sedikit bagian datar." },
      { nama: "Pos 5 Soloh Tama", mdpl: 2600, label: "Pos 5 · Camp luas", ket: "Dataran luas di sisi punggungan. Area camp terbaik di jalur ini." },
      { nama: "Pos 6 Buntu Latimojong", mdpl: 2835, label: "Pos 6", ket: "Jajaran tujuh puncak Latimojong mulai terlihat dari sini." },
      { nama: "Pos 7 Kolong Buntu", mdpl: 3200, label: "Pos 7 · Terbuka", ket: "Tanah datar terbuka tanpa pohon. Pendakian sebenarnya dimulai dari sini." },
      { nama: "Danau Kecil", mdpl: 3260, label: "Sumber air", ket: "Genangan kecil di punggungan menuju puncak." },
      { nama: "Puncak Rantemario", mdpl: 3478, label: "Puncak", ket: "Titik tertinggi Sulawesi. Ditandai balok di atas batu bertuliskan Rante Mario 3478 MDPL." },
    ],
  },
  {
    slug: "binaiya",
    nama: "Gunung Binaiya",
    wilayah: "Pulau Seram, Maluku Tengah",
    jalur: "Jalur Piliana",
    mdpl: 3027,
    durasi: "5-6 hari",
    level: "Sangat Sulit",
    foto: "./assets/rute/binaiya.webp",
    pos: [
      { nama: "Desa Piliana", mdpl: 430, label: "Start · Upacara adat", ket: "Menginap di rumah kepala desa. Ada upacara adat sebelum berangkat. SIMAKSI diurus di Masohi." },
      { nama: "Pos 1 Yamitala", mdpl: 524, label: "Pos 1 · Shelter", ket: "2-3 jam dari Piliana lewat perkebunan dan beberapa penyeberangan sungai. Ada air terjun kecil." },
      { nama: "Pos 2 Aimoto", mdpl: 1160, label: "Pos 2 · Sumber air terakhir", ket: "Tiga pondok dan aliran sungai kecil. Sumber air andal terakhir di jalur." },
      { nama: "Pos 3 Highcamp", mdpl: 1920, label: "Pos 3 · Air kubangan", ket: "Tidak ada sungai lagi. Air ditampung di kubangan tanah beralas plastik." },
      { nama: "Pos 4 Isiali", mdpl: 2150, label: "Pos 4 · Camp", ket: "Dua pondok dan sistem penampung air. Camp paling nyaman di jalur." },
      { nama: "Puncak Bintang", mdpl: 2640, label: "Punggungan", ket: "Punggungan terbuka di atas hutan tropis sebelum turun ke Nasapeha." },
      { nama: "Pos 5 Nasapeha", mdpl: 2580, label: "Pos 5", ket: "Belum ada shelter permanen. Hanya titik istirahat dan makan siang." },
      { nama: "Pos 6 Waifuku", mdpl: 2970, label: "Camp terakhir", ket: "Lanskap palem dan batu hitam, terlindung angin. Ada kolam air yang bisa dipakai." },
      { nama: "Puncak Binaiya", mdpl: 3027, label: "Puncak bertanda", ket: "Puncak Waifuku, lokasi semua papan nama Binaiya. Tujuan hampir semua pendaki." },
      { nama: "Puncak Siale", mdpl: 3030, label: "Puncak sejati", ket: "Titik tertinggi Seram, 2 km ke barat laut. Umumnya tertutup untuk pendaki karena aturan konservasi." },
    ],
  },
  {
    slug: "bukit-raya",
    nama: "Gunung Bukit Raya",
    wilayah: "Serawai, Kalimantan Barat",
    jalur: "Jalur Rantau Malam",
    mdpl: 2278,
    durasi: "5-7 hari",
    level: "Sulit",
    foto: "./assets/rute/bukit-raya.webp",
    pos: [
      { nama: "Desa Rantau Malam", mdpl: 124, label: "Start · Ritual adat", ket: "Desa Dayak Ot Danum, tanpa sinyal. Ada ritual Ngukuih Hajat sebelum pendakian." },
      { nama: "Korong HP", mdpl: 434, label: "Titik awal trek", ket: "Dinamai begitu karena sinyal HP masih tertangkap di sini, tidak seperti di desa." },
      { nama: "Pos 3 Hulu Menyanoi", mdpl: 569, label: "Pos 3 · Camp", ket: "Sekitar 2 jam dari Korong HP. Area camp cukup lapang." },
      { nama: "Pos 4 Sungai Mangan", mdpl: null, label: "Pos 4 · Camp", ket: "Camp bermalam pertama bagi sebagian besar tim. Menyeberangi Sungai Mangan." },
      { nama: "Pos 5 Hulu Rabang", mdpl: null, label: "Pos 5", ket: "Tingkat kesulitan jalur mulai naik setelah pos ini." },
      { nama: "Pos 6 Hulu Jelundung", mdpl: 1381, label: "Pos 6 · Sempit", ket: "Tanah miring di tengah jalur, muat dua tenda. Setelah ini tanjakan curam tanpa bonus." },
      { nama: "Pos 7 Linang", mdpl: 1527, label: "Pos 7 · Camp", ket: "Camp utama untuk summit attack. Ruang tenda terbatas." },
      { nama: "Pos 8 Soa Tohotung", mdpl: 1580, label: "Pos 8 · Camp", ket: "Dekat Soa Badak. Alternatif camp terakhir sebelum puncak." },
      { nama: "Puncak Kakam", mdpl: 2278, label: "Puncak", ket: "Titik tertinggi Kalimantan, masuk wilayah Kalimantan Tengah. Sumber air sulit di area puncak." },
    ],
  },
  {
    slug: "carstensz",
    nama: "Carstensz Pyramid",
    wilayah: "Intan Jaya, Papua Tengah",
    jalur: "Jalur Sugapa",
    mdpl: 4884,
    durasi: "12-16 hari",
    level: "Teknis",
    foto: "./assets/rute/carstensz.webp",
    pos: [
      { nama: "Sugapa", mdpl: 2100, label: "Start · Bandara perintis", ket: "Dicapai dengan pesawat kecil dari Timika atau Nabire. Titik awal jalur darat." },
      { nama: "Kampung Ugimba", mdpl: null, label: "Desa terakhir", ket: "Desa terakhir di jalur. Porter dan pemandu direkrut dari sini." },
      { nama: "Jambusiga Camp", mdpl: 2181, label: "Camp", ket: "Sekitar 8 jam dari Suanggama, jalur melipir lembah dengan sungai di sisi kiri." },
      { nama: "Sungai Kemabu & Nabu", mdpl: null, label: "Penyeberangan", ket: "Dua sungai berarus deras. Curah hujan tinggi membuat debit berubah cepat." },
      { nama: "New Zealand Pass", mdpl: null, label: "Punggungan", ket: "Rangkaian naik-turun tebing yang menghubungkan jalur darat ke lembah puncak." },
      { nama: "Lembah Danau-Danau", mdpl: 4261, label: "Basecamp · Aklimatisasi", ket: "Puluhan danau gletser tepat di kaki piramida. Butiran es turun saat dini hari." },
      { nama: "Yellow Valley", mdpl: 4300, label: "Basecamp summit", ket: "Titik mulai pemanjatan teknis. Bisa dicapai langsung dengan helikopter dari Timika." },
      { nama: "Tyrolean Traverse", mdpl: null, label: "Crux", ket: "Celah sekitar 15 m diseberangi menggantung pada tali baja permanen." },
      { nama: "Puncak Carstensz", mdpl: 4884, label: "Puncak", ket: "Titik tertinggi Indonesia dan Oseania. Summit attack mulai pukul 02.00-03.00." },
    ],
  },
];

// ------------------------------------------------------------
// Tampilan
// ------------------------------------------------------------
const tabs = document.getElementById("route-tabs");
const detail = document.getElementById("route-detail");
const formatMdpl = (n) => (n == null ? "—" : `${n.toLocaleString("id-ID")} mdpl`);

// Satu tombol tab untuk tiap gunung
rute.forEach((r) => {
  const tab = document.createElement("button");
  tab.className = "route-tab";
  tab.setAttribute("role", "tab");
  tab.textContent = r.nama.replace("Gunung ", "");
  tab.onclick = () => {
    history.replaceState(null, "", `#${r.slug}`);
    tampilkan(r.slug);
  };
  tabs.append(tab);
});

function tampilkan(slug) {
  const r = rute.find((x) => x.slug === slug) || rute[0];

  [...tabs.children].forEach((t, i) => t.setAttribute("aria-selected", rute[i] === r));

  detail.innerHTML = `
    <div class="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-20">
      <!-- Kiri: foto + ringkasan jalur (menempel saat timeline di-scroll) -->
      <div class="space-y-8 lg:sticky lg:top-28 lg:self-start">
        <figure class="relative">
          <img src="${r.foto}" alt="${r.nama}" class="aspect-[606/389] w-full rounded-3xl object-cover" />
          <figcaption class="chip absolute bottom-5 left-5">${r.jalur}</figcaption>
        </figure>

        <div>
          <p class="label-small">${r.wilayah}</p>
          <h2 class="section-title">${r.nama}</h2>
        </div>

        <dl class="route-stats">
          <div><dt>mdpl</dt><dd>${r.mdpl.toLocaleString("id-ID")}</dd></div>
          <div><dt>Titik</dt><dd>${r.pos.length}</dd></div>
          <div><dt>Durasi</dt><dd>${r.durasi}</dd></div>
          <div><dt>Tingkat</dt><dd class="is-text">${r.level}</dd></div>
        </dl>
      </div>

      <!-- Kanan: urutan pos -->
      <ol class="timeline">
        ${r.pos
          .map(
            (p) => `
          <li>
            <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3>${p.nama}</h3>
              <span class="timeline-mdpl">${formatMdpl(p.mdpl)}</span>
            </div>
            <p class="timeline-meta">${p.label}</p>
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
