// ============================================================
// Kartu Expeditions bergeser ke samping mengikuti scroll halaman
// ============================================================

const section = document.getElementById("expeditions");
const cards = document.getElementById("cards");
const bar = document.getElementById("cards-bar");
const pelan = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let posisi = 0; // posisi kartu sekarang (dianimasikan)
let tujuan = 0; // posisi yang seharusnya, dihitung dari scroll

function hitungTujuan() {
  // 0 saat section mulai menempel, 1 saat section selesai
  const jatahScroll = section.offsetHeight - innerHeight;
  const sudahScroll = -section.getBoundingClientRect().top;
  const progres = Math.min(Math.max(sudahScroll / jatahScroll, 0), 1);

  // Jarak geser = lebar semua kartu dikurangi lebar layar yang terlihat
  const jarak = cards.scrollWidth - cards.parentElement.clientWidth;

  tujuan = progres * Math.max(jarak, 0);
  bar.style.setProperty("--p", `${progres * 100}%`);
}

function animasi() {
  hitungTujuan();

  // Angka 0.08 bikin gerakannya pelan dan halus.
  // Makin kecil makin pelan, makin besar makin cepat mengejar scroll.
  posisi += (tujuan - posisi) * 0.08;
  cards.style.transform = `translateX(${-posisi.toFixed(1)}px)`;

  requestAnimationFrame(animasi);
}

if (section && !pelan) animasi();