// ============================================================
// Slider 7 Summits
// Tinggal ubah daftar di bawah ini kalau mau ganti isi slide.
// ============================================================

const puncak = [
  {
    bayangan: "Puncak Jaya",
    nama: "Carstensz Pyramid",
    tag: ["Papua", "4.884 mdpl", "Sangat Sulit"],
    foto: "./assets/summits/carstensz.jpg",
    cerita:
      "Carstensz Pyramid atau Puncak Jaya adalah gunung tertinggi di Indonesia dengan ketinggian sekitar 4.884 mdpl. Terletak di Papua, gunung ini terkenal dengan medan berbatu yang ekstrem dan menjadi salah satu tujuan pendakian paling menantang di Indonesia.",
  },
  {
    bayangan: "Rinjani",
    nama: "Gunung Rinjani",
    tag: ["Lombok", "3.726 mdpl", "Sulit"],
    foto: "./assets/summits/rinjani.jpg",
    cerita:
      "Rinjani terkenal dengan keindahan Danau Segara Anak di tengah kalderanya. Jalur ikoniknya disebut Letter of Credit, jalur pasir dan kerikil labil yang sangat menguras fisik, di mana melangkah dua kali akan merosot sekali. Angin kencang di punggungan tipis menuju puncak juga menjadi tantangan berat.",
  },
  {
    bayangan: "Kerinci",
    nama: "Gunung Kerinci",
    tag: ["Sumatra Barat", "3.805 mdpl", "Sedang"],
    foto: "./assets/summits/kerinci.jpg",
    cerita:
      "Kerinci adalah gunung berapi aktif tertinggi di Indonesia. Jalurnya didominasi hutan hujan tropis lebat berakar besar, lalu bebatuan dan pasir terjal menjelang Puncak Indrapura. Tantangan utamanya adalah kemiringan yang konstan tanpa bonus jalan datar, serta jalur sempit Terowongan Harimau.",
  },
  {
    bayangan: "Semeru",
    nama: "Gunung Semeru",
    tag: ["Malang", "3.676 mdpl", "Sulit"],
    foto: "./assets/summits/semeru.jpg",
    cerita:
      "Gunung tertinggi di Pulau Jawa dengan ikon Danau Ranu Kumbolo. Bagian tersulitnya adalah Kalimati menuju Puncak Mahameru, berupa tebing pasir yang sangat curam dan gembur. Aktivitas kawah Jonggring Saloko yang kerap mengeluarkan abu panas menuntut kewaspadaan tinggi.",
  },
  {
    bayangan: "Bukit Raya",
    nama: "Gunung Bukit Raya",
    tag: ["Kalimantan", "2.278 mdpl", "Sangat Sulit"],
    foto: "./assets/summits/bukit-raya.jpg",
    cerita:
      "Meski paling rendah di daftar Seven Summits, Bukit Raya sering dianggap paling berat ditaklukkan. Letaknya jauh di jantung hutan Borneo, jalurnya hutan hujan primer yang lembap dan penuh pacet, serta butuh waktu berhari-hari menembus vegetasi liar.",
  },
  {
    bayangan: "Latimojong",
    nama: "Gunung Latimojong",
    tag: ["Sulawesi", "3.478 mdpl", "Sedang"],
    foto: "./assets/summits/latimojong.jpg",
    cerita:
      "Puncak tertingginya bernama Rantemario. Ciri khas pendakian ini adalah hutan lumut yang sangat lebat dan lembap karena curah hujan tinggi. Jalurnya panjang melewati tujuh pos dengan medan akar bersilang dan beberapa titik batuan yang harus dipanjat dengan bantuan tali.",
  },
  {
    bayangan: "Binaiya",
    nama: "Gunung Binaiya",
    tag: ["Maluku", "3.027 mdpl", "Sulit"],
    foto: "./assets/summits/binaiya.jpg",
    cerita:
      "Dijuluki salah satu jalur paling melelahkan karena pendakian benar-benar dimulai dari 0 mdpl di tepi pantai Desa Piliana. Jalurnya melintasi ekosistem lengkap, dari hutan pesisir, hutan hujan tropis, hingga pegunungan karst berbatu tajam menjelang puncak.",
  },
];

const bg = document.getElementById("summit-bg");
const dots = document.getElementById("summit-dots");
const kartu = document.querySelector(".summit-card");
let aktif = 0;

// Siapkan satu <img> latar dan satu titik indikator untuk tiap puncak
puncak.forEach((p, i) => {
  bg.insertAdjacentHTML(
    "beforeend",
    `<img src="${p.foto}" alt="" class="summit-bg-img" />`
  );

  const dot = document.createElement("button");
  dot.className = "dot";
  dot.setAttribute("aria-label", `Ke ${p.nama}`);
  dot.onclick = () => tampilkan(i);
  dots.append(dot);
});

function tampilkan(i) {
  aktif = (i + puncak.length) % puncak.length; // biar bisa muter terus
  const p = puncak[aktif];

  // Ganti foto latar: yang aktif dimunculkan, sisanya disembunyikan
  [...bg.children].forEach((img, n) => img.classList.toggle("is-active", n === aktif));

  // Ganti isi teks
  document.getElementById("summit-no").textContent = String(aktif + 1).padStart(2, "0");
  document.getElementById("summit-ghost").textContent = p.bayangan;
  document.getElementById("summit-name").textContent = p.nama;
  document.getElementById("summit-text").textContent = p.cerita;
  document.getElementById("summit-tags").innerHTML = p.tag
    .map((t) => `<span class="chip">${t}</span>`)
    .join("");

  [...dots.children].forEach((d, n) => d.classList.toggle("is-active", n === aktif));

  // Ulangi animasi masuk pada kartu
  kartu.classList.remove("is-new");
  void kartu.offsetWidth; // paksa browser menghitung ulang
  kartu.classList.add("is-new");
}

document.getElementById("summit-next").onclick = () => tampilkan(aktif + 1);
document.getElementById("summit-prev").onclick = () => tampilkan(aktif - 1);

tampilkan(0);