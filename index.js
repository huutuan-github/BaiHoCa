document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('background-music');
    const toggleButton = document.getElementById('music-toggle');

    toggleButton.addEventListener('click', () => {
        if (music.paused) {
            music.play();
            toggleButton.textContent = 'Dừng Nhạc';
        } else {
            music.pause();
            toggleButton.textContent = 'Phát Nhạc';
        }
    });
});
