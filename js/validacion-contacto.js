const campos = document.querySelectorAll(".form-control");
const botonEnvio = document.querySelector("#enviar");
const patronNombre = /^[a-zA-Z]{3,}(?:\s[a-zA-Z]{3,})+$/;
const patronEmail = /^(?=.{1,})(?=.{3,}@)(?=.{2,}\..{2,})[^\s@]+@[^\s@]+\.[a-zA-Z]{3,}$/;
const patronMensaje = /^(?=.*[a-zA-Z])(?=.*\s).{20,200}$/;

botonEnvio.addEventListener('click', (e) => {
    e.preventDefault();
    let comunicado = validaForm();
    if (comunicado) {
        console.log(`El usuario "${comunicado.nombre}", con correo electrónico "${comunicado.correo}", envío el siguiente mensaje: "${comunicado.mensaje}"`);
    } 

    // Limpiar los mensajes de éxito y error
    for (let i = 0; i < campos.length; i++) {
        const successMessage = campos[i].querySelector(".success-message");
        const errorMessage = campos[i].querySelector(".error-message");
        errorMessage.style.display = "none"; 
        successMessage.style.display = "none";
    }
});

// Función para validar el formulario
function validaForm() {
    let esValido = true; // Inicialmente se asume que es válido
    for (let i = 0; i < campos.length; i++) {
        const input = campos[i].querySelector("input, textarea");
        const successMessage = campos[i].querySelector(".success-message");
        const errorMessage = campos[i].querySelector(".error-message");

        switch (i) {
            case 0:
                if (!patronNombre.test(input.value)) {
                    errorMessage.style.display = "block"; 
                    successMessage.style.display = "none";
                    esValido = false; // Hay un error
                } else {
                    successMessage.style.display = "block"; 
                    errorMessage.style.display = "none";
                }
                break;
            case 1:
                if (!patronEmail.test(input.value)) {
                    errorMessage.style.display = "block"; 
                    successMessage.style.display = "none";
                    esValido = false; // Hay un error
                } else {
                    successMessage.style.display = "block"; 
                    errorMessage.style.display = "none";
                }
                break;
            case 2:
                if (!patronMensaje.test(input.value)) {
                    errorMessage.style.display = "block"; 
                    successMessage.style.display = "none";
                    esValido = false; // Hay un error
                } else {
                    successMessage.style.display = "block"; 
                    errorMessage.style.display = "none";
                }
                break;
        }
    }

    // Si es válido, se prepara el comunicado
    if (esValido) {
        const inputs = document.querySelectorAll('input');
        const textarea = document.querySelector('textarea');
        let comunicado = {
            nombre: inputs[0].value,
            correo: inputs[1].value,
            mensaje: textarea.value
        }
        inputs[0].value = '';
        inputs[1].value = '';
        textarea.value = '';
        return comunicado; 
    } else {
        return false; // Si no es válido
    }
}