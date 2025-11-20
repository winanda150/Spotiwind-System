// ===================== INISIALISASI =====================
document.addEventListener('DOMContentLoaded', function() {
    toggleContent();
});

// ===================== EVENT NAVBAR =====================
document.querySelector('.menu-icon').addEventListener('click', function() {
    document.getElementById('menuOverlay').classList.add('active');
});

document.getElementById('closeMenu').addEventListener('click', function() {
    document.getElementById('menuOverlay').classList.remove('active');
});

// ===================== EVENT ALBUM =====================
document.querySelectorAll('.album-list a').forEach(function(album) {
    // Event klik album
    album.addEventListener('click', function(e) {
        e.preventDefault();
        var judulElem = album.querySelector('p');
        var judul = judulElem ? judulElem.textContent : '';
        var playerTitle = document.getElementById('Title');
        if (playerTitle) {
            playerTitle.textContent = judul;
        }
        document.getElementById('playerOverlay').classList.add('active');
    });
    // Blokir klik kanan (desktop)
    album.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
    // Blokir tekan lama (mobile)
    album.addEventListener('touchstart', function(e) {
        let touchTimer = setTimeout(function() {
            e.preventDefault();
        }, 600);
        album.addEventListener('touchend', function() {
            clearTimeout(touchTimer);
        }, { once: true });
    });
});

// ===================== EVENT PLAYER OVERLAY =====================
document.querySelector('#closePlayer .navbar-container1 svg').addEventListener('click', function() {
    document.getElementById('playerOverlay').classList.remove('active');
});

// ===================== RESPONSIF =====================
window.addEventListener('resize', function() {
    toggleContent();
});

window.addEventListener('orientationchange', function() {
    toggleContent();
});

// ===================== FUNGSI UTILITAS =====================
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

// ===================== BLOKIR KLIK KANAN GLOBAL =====================
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});