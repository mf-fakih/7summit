// ============================================================
// Menu fullscreen 7Summit
// Satu tombol untuk buka dan tutup, dengan efek gelombang
// yang membesar dari posisi tombol.
// ============================================================

const menu = document.getElementById("menu");
const toggle = document.getElementById("menu-toggle");
const links = document.querySelectorAll(".menu-link");

const isOpen = () => menu.dataset.open === "true";

function openMenu() {
  // Titik pusat gelombang = tengah tombol
  const box = toggle.getBoundingClientRect();
  const x = box.left + box.width / 2;
  const y = box.top + box.height / 2;

  // Radius harus sampai ke sudut layar terjauh
  const r = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y)
  );

  menu.style.setProperty("--ripple-x", `${x}px`);
  menu.style.setProperty("--ripple-y", `${y}px`);
  menu.style.setProperty("--ripple-r", `${Math.ceil(r)}px`);

  // Cincin gold yang menyebar, lalu hapus dirinya sendiri
  const ring = document.createElement("span");
  ring.className = "ripple-ring";
  ring.style.left = `${x}px`;
  ring.style.top = `${y}px`;
  document.body.append(ring);
  ring.onanimationend = () => ring.remove();

  setOpen(true);
}

function setOpen(open) {
  menu.dataset.open = open;

  // Hentikan smooth scroll selama menu terbuka
  if (typeof lenis !== "undefined" && lenis) open ? lenis.stop() : lenis.start();

  toggle.setAttribute("aria-expanded", open);
  document.body.classList.toggle("menu-open", open);
}

toggle.onclick = () => (isOpen() ? setOpen(false) : openMenu());

// Klik link halaman yang sedang dibuka: cukup tutup menu.
// Link ke halaman lain dibiarkan pindah halaman seperti biasa.
// (Menu yang aktif ditandai aria-current="page" langsung di HTML tiap halaman.)
links.forEach((link) =>
  (link.onclick = (e) => {
    if (!link.hasAttribute("aria-current")) return;
    e.preventDefault();
    setOpen(false);
  })
);

// Esc untuk menutup
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setOpen(false);
});