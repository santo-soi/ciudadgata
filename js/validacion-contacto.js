// Elementos del dom capturados
const campos = document.querySelectorAll(".form-control");
const botonEnvio = document.querySelector("#enviar");

// Expresiones regulares
const patronNombre = /^[a-zA-Z]{3,}(?:\s[a-zA-Z]{3,})+$/;
const patronEmail =  /^[a-zA-Z0-9]+([._%+-][a-zA-Z0-9]+)*@(gmail|yahoo|outlook|hotmail|icloud)\.(com|net|org)(\.[a-zA-Z]{2,10})?$/;
const patronTelefono = /^11\d{8}$/;
const patronMensaje = /^(?=.*[aeiouáéíóú])(?=.*[bcdfghjklmnpqrstvwxyzñ])[a-zA-Z0-9áéíóúñ\s\?\.,;!¡¿'"\-]{40,300}$/;


botonEnvio.addEventListener('click', function(e) {
    e.preventDefault();
    let comunicado = validaForm();
    if (comunicado) {
        console.log(`El usuario "${comunicado.nombre}", con correo electrónico "${comunicado.correo}", envío el siguiente mensaje: "${comunicado.mensaje}"`);
       
        // Referencia al formulario
        const form = document.querySelector("#contacto");
        
        // Crear objeto FormData con los datos del formulario
        const formData = new FormData(form);

        // Enviar los datos a Netlify Forms
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
        .then(() => {
            alert("Formulario enviado con éxito");
            // Limpiar campos después del envío
            form.reset();
            campos.forEach(campo => {
                campo.querySelector(".validado").classList.add("hidden");
                campo.querySelector(".error").classList.add("hidden");
            });
        })
        .catch(error => {
            console.error("Error al enviar formulario:", error);
            alert("Hubo un error al enviar el formulario.");
        });
    } 
    
});

// Función para validar el formulario
function validaForm() {
    let esValido = true; // Inicialmente se asume que es válido
    let comunicado = {}; // Objeto para recopilar datos válidos

    campos.forEach((campo, index) => {                                                  //recorre el array con método foreach()

        //busca capturar el input, y de no tenerlo, el text-area, dentro del contenedor
        const input = campo.querySelector("input") || campo.querySelector("textarea");  

        //Captura los contenedores con mensajes de validación
        const mensajePositivo = campo.querySelector(".validado");                 
        const mensajeError = campo.querySelector(".error");
    
        if (input) {                                /*Una vez capturado el campo de datos evalua s/ el órden del html el tipo de campo,
                                                     y aplica su regexp correspondiente*/
            let regex = null;
            
            switch (index) {
                case 0: regex = patronNombre; break;
                case 1: regex = patronEmail; break;
                case 2: regex = patronTelefono; break;
                case 3: regex = patronMensaje; break;
            }
            
            //Si no se cumple la regexp muestra mensaje de error y termina retorna false, si no muestra mensaje correcto.
            if (!regex || !regex.test(input.value)) {
                mensajeError.classList.remove("hidden");
                mensajePositivo.classList.add("hidden");
                esValido = false;
            } else {
                mensajeError.classList.add("hidden");
                mensajePositivo.classList.remove("hidden");
                // Guarda los datos válidos en comunicado
                switch (index) {
                    case 0: comunicado.nombre = input.value; break;
                    case 1: comunicado.correo = input.value; break;
                    case 2: comunicado.telefono = input.value; break;
                    case 3: comunicado.mensaje = input.value; break;
                }
            }
    
        } 
        
    });

    if (esValido) {
        return comunicado; // Si es válido, retorna el objeto comunicado
    } else {
        return false; // Si no es válido, retorna false
    }; 
    
      
}


/* 
    for (let i = 0; i < campos.length; i++) {
        const input = campos[i].querySelector("input, textarea");
        const successMessage = campos[i].querySelector(".validado");
        const errorMessage = campos[i].querySelector(".error");
        console.log(input)
        console.log(successMessage, errorMessage)
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
                if (!patronTelefono.test(input.value)) {
                    errorMessage.style.display = "block"; 
                    successMessage.style.display = "none";
                    esValido = false; // Hay un error
                } else {
                    successMessage.style.display = "block"; 
                    errorMessage.style.display = "none";
                }
                break;
            case 3:
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
    } */