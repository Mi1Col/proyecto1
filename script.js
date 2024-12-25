// Animación slide-right/left
document.addEventListener("DOMContentLoaded", () => {
    const elementos = document.querySelectorAll(".textos div");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = "running"; // Activa la animación
            }
            else {
                entry.target.style.animation = "none"; // Detiene la animación
                entry.target.offsetHeight; // Fuerza el reflow
                entry.target.style.animation = null; // Reinicia la animación
            }
        });
    });

    elementos.forEach((elemento) => {
        elemento.style.animationPlayState = "paused"; // Pausa la animación inicial
        observer.observe(elemento);
    });
});

// re-write

document.addEventListener("DOMContentLoaded", () => {
    // Diccionario con posibles palabras para reescribir el texto
    diccionario = [
        "niñaaa!",
        "amoooor!",
        "vida!",
        "corazón!",
        "mundo!",
        "luz!",
        "sol!",
        "TODO!",
        "alegria!",
        "universo!",
        "cielo!",
        "estrella!",
        "paz!",
    ];

    // Selecciona el span con id "rewrite"
    const rewriteSpan = document.getElementById("rewrite");

    // Función para seleccionar un valor aleatorio del diccionario
    const obtenerPalabraAleatoria = () => {
        const palabraAleatoria = diccionario[Math.floor(Math.random() * diccionario.length)];
        return palabraAleatoria;
    };

    // Reemplaza el contenido del span con una palabra aleatoria del diccionario
    rewriteSpan.textContent = obtenerPalabraAleatoria();

    const cambiarTexto = () => {
        rewriteSpan.classList.add("animacion"); // Activa la animación

        setTimeout(() => {
            // Cambia el contenido del span
            rewriteSpan.textContent = obtenerPalabraAleatoria();
            // Desactiva la animación para reiniciarla
            rewriteSpan.classList.remove("animacion");
        }, 1000); // Cambia el texto después de 1 segundo (duración de la animación)
    };

    // Cambia el texto continuamente cada 3 segundos
    setInterval(cambiarTexto, 3000);
});


