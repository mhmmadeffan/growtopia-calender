// Dapatkan modal
var modal = document.getElementById("imageModal");

// Dapatkan gambar dan masukkan ke dalam modal, dan gunakan atribut "alt" sebagai teks keterangan
var img = document.getElementById("calendarImage");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var overlay = document.getElementById("overlay"); // Dapatkan elemen overlay
var body = document.body; // Dapatkan elemen body

// --- Fungsi untuk membuka modal gambar kalender ---
function openCalendarModal() {
  modal.style.display = "flex"; // Gunakan flex agar posisi tengah bekerja
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  overlay.classList.add("active"); // Aktifkan overlay
  body.classList.add("modal-active"); // Tambahkan kelas untuk memblur container
}

// Setel event listener awal untuk gambar kalender
img.onclick = openCalendarModal;

// Dapatkan elemen <span> yang menutup modal
var span = document.getElementsByClassName("close")[0];

// Fungsi untuk menutup modal gambar kalender
function close_modal() {
  modal.style.display = "none";
  overlay.classList.remove("active"); // Nonaktifkan overlay
  body.classList.remove("modal-active"); // Hapus kelas untuk menghilangkan blur
}

// Ketika pengguna mengklik <span> (x), tutup modal
span.onclick = function() {
  close_modal();
}

// Ketika pengguna mengklik di luar gambar modal (pada area modal itu sendiri), tutup modal juga
modal.onclick = function(event) {
    if (event.target === modal) {
        close_modal();
    }
}

// ==========================================================
// Fitur Pop-up Discord
// ==========================================================
var discordPopup = document.getElementById("discordPopup");
var closePopupButton = document.getElementById("closePopupButton");
var countdownElement = document.getElementById("countdown");
var popupTimeout; // Untuk menyimpan ID timeout agar bisa dibersihkan

function showDiscordPopup() {
    discordPopup.style.display = "block";
    body.classList.add("discord-popup-active"); // Tambahkan kelas untuk blur background

    // --- Menonaktifkan klik pada gambar kalender saat pop-up Discord aktif ---
    img.onclick = null; // Hapus event listener
    img.style.cursor = "default"; // Ubah kursor menjadi default
    // --- Akhir penonaktifan ---

    startCountdown(9); // Mulai hitungan mundur 9 detik
}

function closeDiscordPopup() {
    discordPopup.style.display = "none";
    body.classList.remove("discord-popup-active"); // Hapus kelas blur background
    if (popupTimeout) {
        clearTimeout(popupTimeout); // Hentikan hitungan mundur jika ada
    }

    // --- Mengaktifkan kembali klik pada gambar kalender saat pop-up Discord ditutup ---
    img.onclick = openCalendarModal; // Tambahkan kembali event listener
    img.style.cursor = "pointer"; // Ubah kursor kembali menjadi pointer
    // --- Akhir pengaktifan kembali ---
}

function startCountdown(seconds) {
    let count = seconds;
    countdownElement.textContent = `Closes in ${count}s`;

    const countdownInterval = setInterval(() => {
        count--;
        if (count > 0) {
            countdownElement.textContent = `Closes in ${count}s`;
        } else {
            clearInterval(countdownInterval);
            closeDiscordPopup();
        }
    }, 1000);

    // Otomatis tutup setelah waktu yang ditentukan
    popupTimeout = setTimeout(() => {
        clearInterval(countdownInterval); // Pastikan interval juga berhenti jika ditutup otomatis
        closeDiscordPopup();
    }, seconds * 1000);
}

// Tampilkan pop-up saat halaman pertama kali dimuat
window.addEventListener('load', showDiscordPopup);

// Tutup pop-up ketika tombol "Close" diklik
closePopupButton.onclick = function() {
    closeDiscordPopup();
}