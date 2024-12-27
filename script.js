const fecha = new Date(2024, 10, 15); // Año, mes, día, hora, minuto, segundo, milisegundo
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

    // El juego.
    const p3 = document.getElementById("p3");
    Math.random() < 0.01 ? p3.textContent = "EL JUEGO" : null; // Hay 1% de probabilidad de que aparezca "EL JUEGO" en lugar de "-Tu cosita preciosa".

    const actualizarContador = () => {
        const tiempoTranscurrido = Date.now() - fecha;
        const dias = Math.floor(tiempoTranscurrido / (1000 * 60 * 60 * 24));
        const horas = Math.floor((tiempoTranscurrido % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((tiempoTranscurrido % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((tiempoTranscurrido % (1000 * 60)) / 1000);
        document.getElementById("contador").textContent = `${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
    };

    actualizarContador(); // Actualiza inmediatamente al cargar la página
    setInterval(actualizarContador, 1000); // Actualiza cada segundo

});
