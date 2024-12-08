// Quedó en proceso! Subiré las actualizaciones pendientes a github. 


// bloque de intro
const intro = document.querySelector('#intro');
const iniciaJuego = document.querySelector('#btn-iniciar');

// bloques del juego
const juego = document.querySelector('#juego'); //principal
const frases = document.querySelectorAll('.frase');


// contadores
const tiempo = document.querySelectorAll('.temporizador');
const puntaje = document.querySelectorAll('.puntaje');


// Elementos donde se muestran las imágenes/info de los modelos
const cartas = document.querySelectorAll('.cartas');
const mostrarImagenes = document.querySelectorAll('.opcion');
const mostrarModelo = document.querySelector('#modelo-imagen');
const mostrarModeloMobile = document.querySelector('#modelo-texto');

// Imágenes de cada modelo para mostrar en la grilla
let abarajame = [
    { src: 'assets/img/juego/imagenes/abarajame-uno.jpeg', alt: 'remera ciudad gata' },
    { src: 'assets/img/juego/imagenes/abarajame-dos.jpeg', alt: 'remera ciudad gata' },
    { src: 'assets/img/juego/imagenes/abarajame-tres.jpeg', alt: 'Chicx rockerx usando remera Ciudad Gata' },
    { src: 'assets/img/juego/imagenes/abarajame-cuatro.jpg', alt: 'Chicx rockerx usando remera Ciudad Gata' },
    { src: 'assets/img/juego/imagenes/abarajame-cinco.jpeg', alt: 'Chicx rockerx usando remera Ciudad Gata' },
    { src: 'assets/img/juego/imagenes/abarajame-seis.jpg', alt: 'Chicx rockerx usando remera Ciudad Gata' },
    { src: 'assets/img/juego/imagenes/abarajame-siete.jpeg', alt: 'Chicx rockerx usando remera Ciudad Gata' },
  ];
  
  let tuBanda = [
    { src: 'assets/img/juego/imagenes/tubanda-uno.jpeg', alt: 'remera ciudad gata' },
    { src: 'assets/img/juego/imagenes/tubanda-dos.jpeg', alt: 'remera ciudad gata' },
    { src: 'assets/img/juego/imagenes/tubanda-tres.jpeg', alt: 'Chicx rockerx usando remera Ciudad Gata' },
    { src: 'assets/img/juego/imagenes/tubanda-cuatro.jpeg', alt: 'Chicx rockerx usando remera Ciudad Gata' },
    { src: 'assets/img/juego/imagenes/tubanda-cinco.jpeg', alt: 'Chicx rockerx usando remera Ciudad Gata' },
    { src: 'assets/img/juego/imagenes/tubanda-seis.jpeg', alt: 'Chicx rockerx usando remera Ciudad Gata' },
    { src: 'assets/img/juego/imagenes/tubanda-siete.jpeg', alt: 'Chicx rockerx usando remera Ciudad Gata' },
  ];
  
  let punkito = [
    { src: 'assets/img/juego/imagenes/punkito-uno.jpeg', alt: 'Chicx rockerx usando remera Ciudad Gata' },
    { src: 'assets/img/juego/imagenes/punkito-dos.jpg', alt: 'Chicx rockerx usando remera Ciudad Gata' },
    { src: 'assets/img/juego/imagenes/punkito-tres.jpeg', alt: 'Chicx rockerx usando remera Ciudad Gata' },
    { src: 'assets/img/juego/imagenes/punkito-cuatro.jpg', alt: 'Chicx rockerx usando remera Ciudad Gata' },
    { src: 'assets/img/juego/imagenes/punkito-cinco.jpeg', alt: 'Chicx rockerx usando remera Ciudad Gata' },
    { src: 'assets/img/juego/imagenes/punkito-seis.jpeg', alt: 'Chicx rockerx usando remera Ciudad Gata' },
    { src: 'assets/img/juego/imagenes/punkito-siete.jpeg', alt: 'Chicx rockerx usando remera Ciudad Gata' },
  ];
  
  let bocanada = [
    { src: 'assets/img/juego/imagenes/bocanada-uno.jpeg', alt: 'Chicx rockerx usando remera Ciudad Gata' },
    { src: 'assets/img/juego/imagenes/bocanada-dos.jpeg', alt: 'Chicx rockerx usando remera Ciudad Gata' },
    { src: 'assets/img/juego/imagenes/bocanada-tres.jpeg', alt: 'Chicx rockerx usando remera Ciudad Gata' },
    { src: 'assets/img/juego/imagenes/bocanada-cuatro.jpg', alt: 'Chicx rockerx usando remera Ciudad Gata' },
    { src: 'assets/img/juego/imagenes/bocanada-cinco.jpeg', alt: 'Chicx rockerx usando remera Ciudad Gata' },
    { src: 'assets/img/juego/imagenes/bocanada-seis.jpeg', alt: 'Chicx rockerx usando remera Ciudad Gata' },
    { src: 'assets/img/juego/imagenes/bocanada-siete.jpeg', alt: 'Chicx rockerx usando remera Ciudad Gata' },
  ];

// Imágenes para mostrar en "Encontrá el modelo:"
  let modelos = [
    { src: 'assets/img/juego/portadas/portada-bocanada.png', alt: '"Bocanada" dibujado manualmente', nombre: 'Bocanada' },
    { src: 'assets/img/juego/portadas/portada-punkito.png', alt: '"Punkito" dibujado manualmente', nombre: 'Punkito' },
    { src: 'assets/img/juego/portadas/portada-abarajame.png', alt: '"Abarajame" dibujado manualmente', nombre: 'Abarajame' },
    { src: 'assets/img/juego/portadas/portada-tubanda.png', alt: '"Tu Banda" dibujado manualmente', nombre: 'Tu Banda' },
  ];
  
// cuando se clickea el botón inicia el juego
  iniciaJuego.addEventListener('click', () =>{
    iniciarJuego();
  })

  function iniciarJuego() {
    
    intro.classList.add('hidden');
    iniciaJuego.classList.add('hidden');
    juego.classList.remove('hidden');
    juego.classList.add('flex');


    // Mostrar frase de preparación
    frases.forEach(frase => {
        frase.innerText = 'Preparate para jugar como un gato...';
    });
    
  
    // Configurar puntaje inicial
    puntaje.textContent = '-';
  
    // Ocultar modelo o texto del modelo
    mostrarModeloMobile.innerText = '-';
    
  
    // Iniciar temporizador regresivo
    let tiempoRestante = 4;
    tiempo.forEach(temporizador => {
        temporizador.innerText = String(tiempoRestante);
    });
   
    const contador = setInterval(() => {
      tiempoRestante--;
      tiempo.forEach(temporizador => {
        temporizador.innerText = String(tiempoRestante);
    });
  
      if (tiempoRestante < 0) {
        clearInterval(contador);
        // Continuar con el siguiente paso del juego aquí
        console.log('El temporizador ha terminado, listo para la siguiente fase.');
      }
    }, 1000);
  }



  function iniciarRondaJuego() {
    // 1. Sortea modelos
    const modelos = ['Punkito', 'Bocanada', 'Abarajame', 'Tu Banda'];
    let modeloSorteado = modelos[Math.floor(Math.random() * modelos.length)]; // Elegir modelo objetivo al azar
    
    const esMobile = window.innerWidth <= 768; // Definir si es mobile

    // Asignar la imagen o texto del modelo sorteado
    if (esMobile) {
        modeloTexto.innerText = modeloSorteado;
    } else {
        modelos.forEach(modelo => {
            if(modelo.nombre == modeloSorteado){
                mostrarModelo.src = `${src}`; // Cambiar ruta según dónde guardes las imágenes
                mostrarModelo.alt = `${alt}`; // Asignarle el alt correspondiente
            }
        });
        
    }

    // 2. Asignar fotos a los bloques de la grilla
    mostrarImagenes.forEach(imagen => {
        const imagenVerdadera = mostrarImagenes[Math.floor(Math.random() * modelos.length)];
        
        imagen.style.backgroundImage = `url(imagenes/${modeloAleatorio}.jpg)`;
        imagen.dataset.modelo = modeloAleatorio; // Guardar el modelo asociado
    });

    // Seleccionar un bloque al azar para que contenga el modelo objetivo
    const indiceObjetivo = Math.floor(Math.random() * bloques.length);
    const bloqueObjetivo = bloques[indiceObjetivo];
    bloqueObjetivo.style.backgroundImage = `url(imagenes/${modeloGrilla}.jpg)`;
    bloqueObjetivo.dataset.modelo = modeloGrilla;

    // 3. Activar el temporizador de 5 segundos
    let tiempoRestante = 5;
    const temporizador = setInterval(() => {
        actualizarTemporizador(tiempoRestante); // Función para mostrar el tiempo en pantalla
        tiempoRestante--;

        if (tiempoRestante < 0) {
            clearInterval(temporizador);
            terminarRonda(); // Terminar ronda si no se selecciona nada
        }
    }, 1000);

    // 4. Manejar selección de bloques
    bloques.forEach(bloque => {
        bloque.addEventListener('click', () => {
            clearInterval(temporizador); // Detener el temporizador
            manejarSeleccion(bloque, bloqueObjetivo); // Evaluar selección
        });
    });

    // Función para evaluar selección
    function manejarSeleccion(bloqueSeleccionado, bloqueObjetivo) {
        const esCorrecto = bloqueSeleccionado === bloqueObjetivo;
        if (esCorrecto) {
            console.log('¡Correcto! Encontraste el modelo objetivo.');
        } else {
            console.log('Incorrecto. Intenta de nuevo.');
        }
        bloquearInterfazPorUnSegundo(() => {
            avanzarSiguientePaso();
        });
    }

    // Función para bloquear la interfaz
    function bloquearInterfazPorUnSegundo(callback) {
        document.body.style.pointerEvents = 'none'; // Bloquear clics
        setTimeout(() => {
            document.body.style.pointerEvents = 'auto'; // Restaurar clics
            callback();
        }, 1000);
    }

    // Función para terminar la ronda sin selección
    function terminarRonda() {
        console.log('Tiempo agotado. Fin de la ronda.');
        bloquearInterfazPorUnSegundo(() => {
            avanzarSiguientePaso();
        });
    }

    // Función para actualizar temporizador en pantalla
    function actualizarTemporizador(tiempo) {
        const temporizadorElemento = document.querySelector('#temporizador'); // Ajustar ID según el HTML
        temporizadorElemento.textContent = `Tiempo restante: ${tiempo}s`;
    }

    // Función para avanzar al siguiente paso
    function avanzarSiguientePaso() {
        console.log('Avanzando a la siguiente etapa...');
        // Aquí iría la lógica para avanzar al siguiente paso del juego
    }
}
