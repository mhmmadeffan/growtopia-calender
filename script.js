// Dapatkan modal
var modal = document.getElementById("imageModal");

// Dapatkan gambar dan masukkan ke dalam modal, dan gunakan atribut "alt" sebagai teks keterangan
var img = document.getElementById("calendarImage");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var overlay = document.getElementById("overlay"); // Dapatkan elemen overlay
var body = document.body; // Dapatkan elemen body

img.onclick = function(){
  modal.style.display = "flex"; // Gunakan flex agar posisi tengah bekerja
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  overlay.classList.add("active"); // Aktifkan overlay
  body.classList.add("modal-active"); // Tambahkan kelas untuk memblur container
}

// Dapatkan elemen <span> yang menutup modal
var span = document.getElementsByClassName("close")[0];

// Fungsi untuk menutup modal
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
