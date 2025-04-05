document.getElementById("registerForm").addEventListener("submit", function(event) {
    // Validaciones adicionales con JavaScript
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const passwordConfirm = document.getElementById('confirm-password')
    const termsCheckbox = document.getElementById("terms");
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
// validar que la contraseãs coincidan 
    if (passwordInput.value !== passwordConfirm.value) {
        alert("Las contraseñas no coinciden");
        valid = false;

    }
//validar qu la caja de "aceptar los terminos y condiciones" este aceptada
    if (!termsCheckbox.checked) {
        alert("Por favor acepte los términos y condiciones");
        valid = false;
    }

    if (!valid) {
        // Prevenir el envío del formulario si no es válido
        event.preventDefault();
    } else {


        console.log("localstorage: ", localStorage)


    }
});