document.getElementById("recoverForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Validaciones adicionales con JavaScript
    const emailInput = document.getElementById("email");
    const cajatick = document.getElementById("terms");


    let valid = true;

    // Validar que el campo email no esté vacío
    if (emailInput.value === "") {
        alert("Por favor complete el campo email");
        valid = false;
    }


    if (!cajatick.checked) {
        alert("Por favor acepte el campo Quiero recuperar mi contraseña");
        valid = false;
    }

    

    if (valid) {
        let mensaje = "Recibirás un email con las instrucciones para recuperar tu contraseña";
        let seccionDemensaje = this.querySelector('.mensaje');
        seccionDemensaje.innerText = mensaje;
    
        // Mostrar el link
        let seccionDelLink = this.querySelector('.link-login');
        seccionDelLink.innerHTML = '<a href="./Log-in.html">Ir al login</a>';
    
         console.log("localstorage: ", localStorage)
    }
        
    


    
});