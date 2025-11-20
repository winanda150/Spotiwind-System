document.addEventListener('DOMContentLoaded', function() {
    toggleContent();
});

document.querySelector('.menu-icon').addEventListener('click', function() {
    document.getElementById('menuOverlay').classList.add('active');
});

document.getElementById('closeMenu').addEventListener('click', function() {
    document.getElementById('menuOverlay').classList.remove('active');
});

document.querySelectorAll('.album-list a').forEach(function(album) {
    album.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('playerOverlay').classList.add('active');
        // Isi overlay sesuai album yang diklik (opsional)
    });
});

window.addEventListener('resize', function() {
    toggleContent();
});

window.addEventListener('orientationchange', function() {
    toggleContent();
});

// Fungsi untuk mendeteksi perangkat mobile atau desktop
function Mobile() {
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 1025;
}

function toggleContent() {
    var desktop = document.getElementById('desktop-content');
    var mobile = document.getElementById('mobile-content');
    if (desktop && mobile) {
        if (Mobile()) {
        desktop.style.display = 'none';
        mobile.style.display = 'block';
        } else {
        desktop.style.display = 'block';
        mobile.style.display = 'none';
        }
    }
}

// Membuat semua klik kanan mouse di halaman dinonaktifkan
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});