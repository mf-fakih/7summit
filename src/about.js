// ============================================================
// Halaman About
// 1. Reveal: judul & isi section muncul saat masuk layar
// 2. Crew: kartu foto mengikuti kursor saat nama di-hover
// (Angka statistik menghitung naik sudah diurus site.js)
// ============================================================

// ---------- 1. REVEAL ----------
// Section ber-atribut data-reveal dapat class .is-in sekali saja,
// lalu CSS (.line & .fade) yang menjalankan animasinya.
(() => {
  const sections = document.querySelectorAll("[data-reveal]");
  const hemat = matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (hemat || !("IntersectionObserver" in window)) {
    sections.forEach((s) => s.classList.add("is-in"));
    return;
  }

  const pengamat = new IntersectionObserver(
    (entri) =>
      entri.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("is-in");
        pengamat.unobserve(e.target);
      }),
    { threshold: 0.18 }
  );
  sections.forEach((s) => pengamat.observe(s));
})();

// ---------- 2. KARTU FOTO CREW ----------
// Cuma di desktop (ada mouse & layar lebar). Kartunya mengejar kursor
// pelan-pelan dan sedikit miring ke arah gerakan.
(() => {
  const list = document.querySelector("[data-roster]");
  const follow = document.querySelector("[data-roster-follow]");
  if (!list || !follow) return;
  if (!matchMedia("(hover: hover) and (min-width: 1024px)").matches) return;

  const kartu = [...follow.querySelectorAll("[data-card]")];
  let tx = innerWidth / 2; // posisi kursor (tujuan)
  let ty = innerHeight / 2;
  let cx = tx; // posisi kartu sekarang
  let cy = ty;
  let jalan = false;

  function loop() {
    // 0.12 = kecepatan mengejar. Makin besar makin nempel ke kursor.
    cx += (tx - cx) * 0.12;
    cy += (ty - cy) * 0.12;
    const miring = Math.max(-14, Math.min(14, (tx - cx) * 0.22));
    follow.style.transform = `translate3d(${cx.toFixed(1)}px, ${cy.toFixed(1)}px, 0) rotate(${miring.toFixed(2)}deg)`;

    // Berhenti sendiri kalau kartu sudah sampai, biar tidak boros
    if (Math.abs(tx - cx) > 0.1 || Math.abs(ty - cy) > 0.1) requestAnimationFrame(loop);
    else jalan = false;
  }

  addEventListener(
    "pointermove",
    (e) => {
      tx = e.clientX;
      ty = e.clientY;
      if (jalan) return;
      jalan = true;
      requestAnimationFrame(loop);
    },
    { passive: true }
  );

  list.querySelectorAll("[data-member]").forEach((baris) =>
    baris.addEventListener("pointerenter", () => {
      const i = Number(baris.dataset.member);
      kartu.forEach((k, n) => k.classList.toggle("is-active", n === i));
    })
  );

  list.addEventListener("pointerleave", () => kartu.forEach((k) => k.classList.remove("is-active")));
})();
