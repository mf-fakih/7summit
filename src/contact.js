// ============================================================
// Halaman Contact
// 1. Status jam kerja (online / di luar jam kerja), patokan WIB
// 2. Tombol "Salin" email
// 3. Form: cek isian, tampilkan pesan error di bawah kolomnya,
//    lalu "kirim" (belum ada server, jadi cuma tampilan)
// ============================================================

// ---------- 1. STATUS JAM KERJA ----------
// Senin–Sabtu 08.00–20.00 WIB. Dihitung pakai zona Asia/Jakarta,
// jadi tetap benar walau pengunjung di luar WIB.
(() => {
  const status = document.querySelector("[data-status]");
  if (!status) return;

  const bagian = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Jakarta",
    weekday: "short",
    hour: "numeric",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const hari = bagian.find((b) => b.type === "weekday").value;
  const jam = Number(bagian.find((b) => b.type === "hour").value);

  const online = hari !== "Sun" && jam >= 8 && jam < 20;
  status.classList.toggle("is-online", online);
  status.querySelector("[data-status-text]").textContent = online
    ? "Tim sedang online · biasanya dibalas dalam 1 jam"
    : "Di luar jam kerja · pesanmu dibalas besok pagi";
  status.hidden = false;
})();

// ---------- 2. SALIN EMAIL ----------
document.querySelectorAll("[data-copy]").forEach((tombol) =>
  tombol.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(tombol.dataset.copy);
      tombol.textContent = "Tersalin ✓";
    } catch {
      tombol.textContent = "Gagal, salin manual";
    }
    setTimeout(() => (tombol.textContent = "Salin"), 2000);
  })
);

// ---------- 3. FORM ----------
(() => {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;
  const catatan = form.querySelector("[data-form-note]");

  const pesanError = {
    nama: "Nama belum diisi.",
    email: "Email belum diisi atau formatnya salah.",
    pesan: "Tulis sedikit rencana pendakianmu.",
  };

  // Tampilkan / hapus error di bawah satu kolom
  function cek(kolom) {
    const salah = !kolom.checkValidity();
    kolom.setAttribute("aria-invalid", salah);
    let teks = kolom.parentElement.querySelector(".field-error");
    if (salah && !teks) {
      teks = document.createElement("p");
      teks.className = "field-error";
      teks.id = `${kolom.id}-error`;
      kolom.parentElement.append(teks);
      kolom.setAttribute("aria-describedby", teks.id);
    }
    if (teks) teks.textContent = salah ? pesanError[kolom.name] : "";
    return !salah;
  }

  const kolomWajib = [...form.querySelectorAll("[required]")];

  // Error dicek ulang saat kolom ditinggalkan, bukan tiap ketikan
  kolomWajib.forEach((k) =>
    k.addEventListener("blur", () => k.hasAttribute("aria-invalid") && cek(k))
  );

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const semuaBenar = kolomWajib.map(cek).every(Boolean);

    if (!semuaBenar) {
      form.querySelector('[aria-invalid="true"]').focus();
      catatan.textContent = "";
      return;
    }

    const nama = form.nama.value.trim().split(" ")[0];
    form.reset();
    kolomWajib.forEach((k) => k.removeAttribute("aria-invalid"));
    catatan.textContent = `Terima kasih, ${nama}! Pesanmu sudah kami terima. Cek email dalam 1×24 jam.`;
  });
})();
