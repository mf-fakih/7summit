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
  toggle.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
  document.body.classList.toggle("menu-open", open);
}

toggle.onclick = () => (isOpen() ? setOpen(false) : openMenu());

// Klik link: menu tertutup, lalu halaman scroll ke section tujuan
links.forEach((link) => (link.onclick = () => setOpen(false)));

// Esc untuk menutup
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setOpen(false);
});

// Tandai menu yang sedang dilihat saat halaman di-scroll
const spy = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) =>
        link.toggleAttribute(
          "aria-current",
          link.getAttribute("href") === `#${entry.target.id}`
        )
      );
    }),
  { threshold: 0.5 }
);

document.querySelectorAll("main section[id]").forEach((s) => spy.observe(s));