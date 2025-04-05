document.getElementById("loginForm").addEventListener("submit", function(event) {
    // Validaciones adicionales con JavaScript
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    let valid = true;

    // Validar que el campo email no esté vacío
    if (emailInput.value === "") {
        alert("Por favor complete el campo email");
        valid = false;
    }

    // Validar que el campo contraseña no esté vacío
    if (passwordInput.value === "") {
        alert("Por favor complete el campo contraseña");
        valid = false;
    }

    // Validar que la contraseña tenga al menos 6 caracteres
    if (passwordInput.value.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres");
        valid = false;
    }

    if (!valid) {
        // Prevenir el envío del formulario si no es válido
        event.preventDefault();
    } else {
        // Guardar el email del usuario en localStorage
        localStorage.setItem("userEmail", emailInput.value);

        console.log("localstorage: ", localStorage)


    }
});