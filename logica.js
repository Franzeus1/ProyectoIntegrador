function validarFormulario(evento) {
    evento.preventDefault();

    const nombre = document.querySelector('input[name="nombre"]').value.trim();
    const correo = document.querySelector('input[name="correo"]').value.trim();
    const mensaje = document.querySelector('textarea[name="mensaje"]').value.trim();

    try {

        if (nombre === "") {
            throw new Error("Debe ingresar un nombre.");
        }

        if (correo === "") {
            throw new Error("Debe ingresar un correo.");
        }

        if (mensaje === "") {
            throw new Error("Debe escribir un mensaje.");
        }

        alert("Mensaje enviado correctamente.");

        document.getElementById("form_contact").reset();

    } catch(error) {

        alert(error.message);

    }
}

document
    .getElementById("form_contact")
    .addEventListener("submit", validarFormulario);
//fin formulario

