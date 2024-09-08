document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener valores del formulario
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Validar los campos (de manera simple)
    if (name === "" || email === "" || message === "") {
        alert("Por favor, completa todos los campos.");
    } else {
        alert(¡Gracias, ${name}! Hemos recibido tu mensaje.);
        
        // Aquí puedes agregar código para enviar los datos del formulario a un servidor
    }

    // Limpiar formulario
    document.getElementById("contactForm").reset();
});