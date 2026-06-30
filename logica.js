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
//buscar
document.getElementById("btnBuscar").addEventListener("click", buscarModelo);

function buscarModelo() {

    try {
        const texto = document.getElementById("buscador").value.toLowerCase().trim();

        if (texto === "") {
            throw new Error("Escribí un modelo para buscar");
        }

        const existe = modelos.some(m => m.toLowerCase() === texto);

        if (!existe) {
            throw new Error("El modelo no existe en la lista");
        }

        const personajes = document.querySelectorAll("#personajes > div");

        personajes.forEach(personaje => {
            const nombre = personaje.querySelector("h4")?.textContent.toLowerCase() || "";

            personaje.style.display = nombre.includes(texto) ? "" : "none";
        });

    } catch (error) {
        console.error(error.message);
        alert(error.message);
    }
}
    //fin buscar
    //array modelos
    const modelos = [
    "Duende navideño",
    "Mono",
    "Oso",
    "Krampus",
    "Galleta de jengibre",
    "Pajaro",
    "Barco 1",
    "Barco 2"
];

function mostrarModelos() {

    let lista = "Modelos disponibles:\n\n";

    modelos.forEach(modelo => {
        lista += "- " + modelo + "\n";
    });

    alert(lista);
}

document
    .getElementById("btnModelos")
    .addEventListener("click", mostrarModelos);
//fin array
function cambiarTema() {

    const check = document.getElementById("modoClaro");

    if (check.checked) {
        document.body.classList.add("claro");
    } else {
        document.body.classList.remove("claro");
    }
}

document
    .getElementById("modoClaro")
    .addEventListener("change", cambiarTema);