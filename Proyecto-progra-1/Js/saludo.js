(function() {
    // Obtener el email del usuario desde el localStorage
    const userEmail = localStorage.getItem("userEmail");

    // Obtener el elemento donde se mostrará la información del usuario
    const userInfoDiv = document.querySelector(".registro");

    // Verificar si el email existe en el localStorage
    if (userEmail) {
        // Crear el mensaje de bienvenida y el enlace de logout
        userInfoDiv.innerHTML = `<p class="saludo">Bienvenido: ${userEmail} <a href="#" id="logout-link">Logout</a></p>`;

        // Agregar evento para el enlace de logout
        document.getElementById("logout-link").addEventListener("click", function() {
            // Eliminar el email del localStorage y recargar la página
            localStorage.removeItem("userEmail");
            location.reload();
        });
    } else {
        // Crear el enlace de registro
        userInfoDiv.innerHTML = '<a href="./register.html">Registrate</a>';
    }
})();