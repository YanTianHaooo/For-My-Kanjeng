$(document).ready(function () {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var backgroundMusic = $("#backgroundMusic")[0]; // Dapatkan elemen audio DOM asli

    envelope.click(function () {
        openEnvelope(); // Mengubah nama fungsi agar lebih jelas
    });

    btn_open.click(function () {
        openEnvelope(); // Mengubah nama fungsi agar lebih jelas
    });

    btn_reset.click(function () {
        closeEnvelope(); // Mengubah nama fungsi agar lebih jelas
    });

    function openEnvelope() {
        envelope.addClass("open").removeClass("close");
        // Putar lagu saat surat dibuka
        if (backgroundMusic.paused) { // Hanya putar jika belum diputar
            backgroundMusic.play();
        }
    }

    function closeEnvelope() {
        envelope.addClass("close").removeClass("open");
        // Hentikan lagu saat surat ditutup
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0; // Mengatur ulang waktu lagu ke awal
    }
});