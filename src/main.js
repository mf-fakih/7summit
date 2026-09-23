// Inisialisasi Lenis dengan setelan meluncur tinggi (Super Smooth)
const lenis = new Lenis({
  autoRaf: true,         // Otomatis menjalankan animasi tanpa fungsi loop manual
  lerp: 0.05,            // Nilai kecil (0.05) membuat efek rem/meluncur terasa sangat lembut
  wheelMultiplier: 0.9,  // Mengurangi sedikit kecepatan agar transisinya terasa anggun
  smoothWheel: true,     // Memastikan fitur aktif untuk mouse wheel
});

// SENSOR DIAGNOSTIK: Buka inspect element (F12) -> Console. 
// Jika tulisan ini muncul saat di-scroll, berarti Lenis berhasil bekerja!
lenis.on('scroll', (e) => {
  console.log('Lenis aktif! Posisi scroll:', e.scroll);
});
