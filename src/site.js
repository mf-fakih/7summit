// ============================================================
// 1. Layar pembuka saat halaman dimuat
// 2. Smooth scroll (Lenis)
// 3. Navbar jadi kaca saat halaman di-scroll
// ============================================================

const hematAnimasi = matchMedia("(prefers-reduced-motion: reduce)").matches;

// Saat refresh, browser biasanya mengembalikan posisi scroll terakhir.
// Untuk halaman berloader, itu bikin kita mendarat di tengah section.
// Jadi posisinya dipaksa kembali ke atas.
history.scrollRestoration = "manual";
scrollTo(0, 0);

// ---------- 2. SMOOTH SCROLL ----------
let lenis = null;

if (window.Lenis && !hematAnimasi) {
  lenis = new Lenis({ duration: 1.1 }); // makin besar = makin "meluncur"
  document.documentElement.classList.add("pakai-lenis");

  (function jalan(waktu) {
    lenis.raf(waktu);
    requestAnimationFrame(jalan);
  })();

  // Semua link #anchor dibuat scroll halus lewat Lenis
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const tujuan = document.querySelector(link.getAttribute("href"));
      if (!tujuan) return;
      e.preventDefault();
      lenis.scrollTo(tujuan);
    });
  });
}

// ---------- 1. LAYAR PEMBUKA ----------
const loader = document.getElementById("loader");
const angka = document.getElementById("loader-count");
let persen = 0;

lenis?.stop(); // kunci scroll selama layar pembuka tampil

// Pengaman: apa pun yang terjadi, loader wajib hilang setelah 5 detik
setTimeout(selesai, 5000);

const hitung = setInterval(() => {
  persen = Math.min(persen + Math.random() * 10, 100);
  // Progres ditampilkan sebagai ketinggian, puncaknya Everest 8.848 mdpl
  angka.textContent = Math.round((persen / 100) * 8848).toLocaleString("id-ID");
  loader.style.setProperty("--n", persen);

  if (persen === 100) {
    clearInterval(hitung);
    setTimeout(() => loader.classList.add("is-summit"), 250); // bendera berkibar
    setTimeout(selesai, 1000);
  }
}, 90);

let sudahSelesai = false;

function selesai() {
  if (sudahSelesai) return; // jangan jalan dua kali
  sudahSelesai = true;

  clearInterval(hitung);
  document.body.classList.add("is-loaded"); // loader terangkat + hero muncul
  lenis?.start();
  setTimeout(() => loader?.remove(), 1200);
}

// ---------- 3. NAVBAR KACA ----------
const navbar = document.getElementById("navbar");

addEventListener(
  "scroll",
  () => navbar.classList.toggle("is-scrolled", scrollY > 40),
  { passive: true }
);
// ---------- 4. ANGKA STATISTIK MENGHITUNG ----------
// Angka di About Us naik cepat dari 0 saat pertama kali terlihat.
// Teks akhirnya tetap ditulis di HTML, jadi kalau JS mati angkanya tetap benar.
function hitungNaik(el) {
  const target = Number(el.dataset.count);
  const akhiran = el.dataset.suffix || "";
  const durasi = 1600;
  let mulai = null;

  function langkah(waktu) {
    mulai ??= waktu;
    const t = Math.min((waktu - mulai) / durasi, 1);
    const halus = 1 - Math.pow(1 - t, 3); // cepat di awal, melambat di akhir
    el.textContent = Math.round(halus * target).toLocaleString("id-ID") + akhiran;

    if (t < 1) requestAnimationFrame(langkah);
    else if (el.dataset.final) el.textContent = el.dataset.final; // 10.000+ -> 10K+
  }
  requestAnimationFrame(langkah);
}

const angkaStat = document.querySelectorAll("[data-count]");

if (!hematAnimasi && "IntersectionObserver" in window) {
  angkaStat.forEach((el) => (el.textContent = "0" + (el.dataset.suffix || "")));

  const pengamat = new IntersectionObserver(
    (entri) =>
      entri.forEach((e) => {
        if (!e.isIntersecting) return;
        hitungNaik(e.target);
        pengamat.unobserve(e.target); // cukup sekali
      }),
    { threshold: 0.6 }
  );
  angkaStat.forEach((el) => pengamat.observe(el));
}
