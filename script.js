document.querySelectorAll(".card").forEach(card => {
    const video = card.querySelector(".video");
    const playPauseBtn = card.querySelector(".playPauseBtn");

    if (video && playPauseBtn) {
        // Mostrar el botón al cargar
        playPauseBtn.style.display = "block";

        // Manejar clics en el botón
        playPauseBtn.addEventListener("click", () => {
            if (video.paused) {
                pauseAllVideos(video); // Pausar todos los demás videos
                video.play();
                playPauseBtn.style.display = "none"; // Ocultar el botón al reproducir
            } else {
                video.pause();
                playPauseBtn.innerHTML = "▶ Reproduceme Kiara"; // Cambiar el texto del botón
            }
        });

        // Pausar video al tocar la pantalla
        video.addEventListener("click", () => {
            if (!video.paused) {
                video.pause();
                playPauseBtn.style.display = "block"; // Mostrar el botón al pausar
                playPauseBtn.innerHTML = "▶ Reproduceme Kiara"; // Actualizar texto
            } else {
                pauseAllVideos(video); // Pausar todos los demás videos
                video.play();
                playPauseBtn.style.display = "none"; // Ocultar el botón al reproducir
            }
        });

        // Mostrar el botón cuando el video se pausa
        video.addEventListener("pause", () => {
            playPauseBtn.style.display = "block";
        });

        // Esconder el botón cuando el video comienza a reproducirse
        video.addEventListener("play", () => {
            playPauseBtn.style.display = "none";
        });
    }
});

// Función para pausar todos los videos excepto el actual
function pauseAllVideos(currentVideo) {
    document.querySelectorAll(".video").forEach(video => {
        if (video !== currentVideo) {
            video.pause(); // Pausar todos los videos que no sean el actual
            const btn = video.closest(".card").querySelector(".playPauseBtn");
            if (btn) {
                btn.style.display = "block"; // Mostrar el botón del video pausado
                btn.innerHTML = "▶ Reproduceme Kiara"; // Resetear el texto del botón
            }
        }
    });
}

