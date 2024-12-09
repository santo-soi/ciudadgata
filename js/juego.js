// bloque de intro
const intro = document.querySelector('#intro');
const iniciaJuego = document.querySelector('#btn-iniciar');

// bloques del juego
const juego = document.querySelector('#juego'); //principal
const frases = document.querySelectorAll('.frase');
const reinicio = document.querySelector('#btn-reiniciar');
//desktop
const bloqueInfoDesktop =document.querySelector('#bloque-info');
//mobile
const bloqueInfoMobile = document.querySelector('#bloque-frase');
//grilla
const bloqueGrilla = document.querySelector('#bloque-grilla');

// contadores
const tiempo = document.querySelectorAll('.temporizador');
const puntaje = document.querySelectorAll('.puntaje');


// Elementos donde se muestran las imágenes/info de los modelos
const cartas = document.querySelectorAll('.carta');
const mostrarBotonImagenes = document.querySelectorAll('.boton-opcion');
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
    { src: 'assets/img/juego/imagenes/abarajame-siete.jpeg', alt: 'Chicx rockerx usando remera Ciudad Gata' }
  ];
  
  let tuBanda = [
    { src: 'assets/img/juego/imagenes/tubanda-uno.jpeg', alt: 'remera ciudad gata' },
    { src: 'assets/img/juego/imagenes/tubanda-dos.jpeg', alt: 'remera ciudad gata' },
    { src: 'assets/img/juego/imagenes/tubanda-tres.jpeg', alt: 'Chicx rockerx usando remera Ciudad Gata' },
    { src: 'assets/img/juego/imagenes/tubanda-cuatro.jpeg', alt: 'Chicx rockerx usando remera Ciudad Gata' },
    { src: 'assets/img/juego/imagenes/tubanda-cinco.jpeg', alt: 'Chicx rockerx usando remera Ciudad Gata' },
    { src: 'assets/img/juego/imagenes/tubanda-seis.jpeg', alt: 'Chicx rockerx usando remera Ciudad Gata' },
    { src: 'assets/img/juego/imagenes/tubanda-siete.jpeg', alt: 'Chicx rockerx usando remera Ciudad Gata' }
  ];
  
  let punkito = [
    { src: 'assets/img/juego/imagenes/punkito-uno.jpeg', alt: 'Chicx rockerx usando remera Ciudad Gata' },
    { src: 'assets/img/juego/imagenes/punkito-dos.jpg', alt: 'Chicx rockerx usando remera Ciudad Gata' },
    { src: 'assets/img/juego/imagenes/punkito-tres.jpeg', alt: 'Chicx rockerx usando remera Ciudad Gata' },
    { src: 'assets/img/juego/imagenes/punkito-cuatro.jpg', alt: 'Chicx rockerx usando remera Ciudad Gata' },
    { src: 'assets/img/juego/imagenes/punkito-cinco.jpeg', alt: 'Chicx rockerx usando remera Ciudad Gata' },
    { src: 'assets/img/juego/imagenes/punkito-seis.jpeg', alt: 'Chicx rockerx usando remera Ciudad Gata' },
    { src: 'assets/img/juego/imagenes/punkito-siete.jpeg', alt: 'Chicx rockerx usando remera Ciudad Gata' }
  ];
  
  let bocanada = [
    { src: 'assets/img/juego/imagenes/bocanada-uno.jpeg', alt: 'Chicx rockerx usando remera Ciudad Gata' },
    { src: 'assets/img/juego/imagenes/bocanada-dos.jpeg', alt: 'Chicx rockerx usando remera Ciudad Gata' },
    { src: 'assets/img/juego/imagenes/bocanada-tres.jpeg', alt: 'Chicx rockerx usando remera Ciudad Gata' },
    { src: 'assets/img/juego/imagenes/bocanada-cuatro.jpg', alt: 'Chicx rockerx usando remera Ciudad Gata' },
    { src: 'assets/img/juego/imagenes/bocanada-cinco.jpeg', alt: 'Chicx rockerx usando remera Ciudad Gata' },
    { src: 'assets/img/juego/imagenes/bocanada-seis.jpeg', alt: 'Chicx rockerx usando remera Ciudad Gata' },
    { src: 'assets/img/juego/imagenes/bocanada-siete.jpeg', alt: 'Chicx rockerx usando remera Ciudad Gata' }
  ];

// Imágenes para mostrar en "Encontrá el modelo:"
  let modelos = [
    { src: 'assets/img/juego/portadas/portada-bocanada.png', alt: '"Bocanada" dibujado manualmente', nombre: 'Bocanada', array: bocanada},
    { src: 'assets/img/juego/portadas/portada-punkito.png', alt: '"Punkito" dibujado manualmente', nombre: 'Punkito', array: punkito },
    { src: 'assets/img/juego/portadas/portada-abarajame.png', alt: '"Abarajame" dibujado manualmente', nombre: 'Abarajame', array: abarajame},
    { src: 'assets/img/juego/portadas/portada-tubanda.png', alt: '"Tu Banda" dibujado manualmente', nombre: 'Tu Banda', array: tuBanda}
  ];
  
// cuando se clickea el botón inicia el juego
  iniciaJuego.addEventListener('click', () =>{
    iniciarJuego();
  })

  
  // Variables para el estado del juego
  let puntos = 0;
  let rondasGanadas = 0;
  let rondasJugadas = 0;
  let rondasFallidas = 0;
  let seleccionMultiple = false;

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
    let tiempoRestante = 3;
    tiempo.forEach(temporizador => {
        temporizador.innerText = `Tiempo restante: ${tiempoRestante} segundos`;
    });
   
    const contador = setInterval(() => {
    if (tiempoRestante <= 0) {
            clearInterval(contador);
            iniciarRondaJuego();
        } else{
            tiempoRestante--;
            tiempo.forEach(temporizador => {
                temporizador.innerText = `Tiempo restante: ${tiempoRestante} segundos`;
            });
        }
    }, 1000);
  
}



  function iniciarRondaJuego() {
    // 1.Sortea modelos
    const modelosPosibles = ['Punkito', 'Bocanada', 'Abarajame', 'Tu Banda'];
    let modeloSorteado = modelosPosibles[Math.floor(Math.random() * modelosPosibles.length)]; // Elegir modelo objetivo al azar 
    let posicionVerdadera = Math.floor(Math.random() * mostrarImagenes.length); //Defino posición de la grilla donde se va a mostrar la imagen verdadera
    console.log(`posición verdadera:${posicionVerdadera}`);
   
    
    let modeloSeleccionado;
    let modelosRestantes = [];   // Hago un array nuevo de los modelos, excluyedno al sorteado
    for (let i = 0; i < modelos.length; i++) {  // Busco el modelo sorteado en el array modelos
          if (modelos[i].nombre == modeloSorteado) {
              modeloSeleccionado = modelos[i];
          } else{ 
            modelosRestantes.push(modelos[i]);
          }
      }
     
    

    if (!modeloSeleccionado) {
        console.error(`No se encontró el modelo: ${modeloSorteado}`);
        return; // Detener ejecución si no se encuentra el modelo
    } 
        
    
    // Defino cuál va ser la imagen del modelo a encontrar en la grilla
    let imagenAleatoriaVerdadera = modeloSeleccionado.array[Math.floor(Math.random() * modeloSeleccionado.array.length)];

    // 2.Ya definido lo sorteado comienzo a mostrar todos los elementos en sus respectivos bloques

    mostrarModeloMobile.innerText = modeloSeleccionado.nombre; //muestra el nombre del modelo a encontrar en mobile
    mostrarModelo.src = modeloSeleccionado.src; // muestra imagen portada del modelo a encontrar en desktop
    mostrarModelo.alt = modeloSeleccionado.alt; // muestra la descripción de la imagen portada del modelo a encontrar en desktop          
    
    
    for(let i = 0; i < mostrarImagenes.length; i ++){  //recorro las posiciones de la grilla
        cartas[i].classList.add('hidden');
        if(i !== posicionVerdadera){ //si la posición no es la definida como verdadera, se le coloca una imagen random del resto de modelos
            let indiceModeloImagenRandom = Math.floor(Math.random() * modelosRestantes.length);
            let imagenRandom = modelosRestantes[indiceModeloImagenRandom].array[Math.floor(Math.random() * modelosRestantes[indiceModeloImagenRandom].array.length)];
          //  let imagenRandom = modelosRestantes[indiceModeloImagenRandom].array[Math.floor(Math.random() * array.length)];
            mostrarImagenes[i].src = imagenRandom.src;
            mostrarImagenes[i].alt = imagenRandom.alt;
        } else{                                     // si no, se coloca la imagen del modelo sorteado 
            mostrarImagenes[posicionVerdadera].src = imagenAleatoriaVerdadera.src; //mostrar imagen del modelo en la grilla
            mostrarImagenes[posicionVerdadera].alt = imagenAleatoriaVerdadera.alt; //mostrar descripición de la imagen del modelo en la grilla
        }
        mostrarBotonImagenes[i].classList.remove('hidden');
        mostrarImagenes[i].classList.remove('hidden');
    }

    //Actualizo la frase para guiar al usuario
    frases.forEach(frase => {
        frase.innerText = '¡Busca la remera solicitada!';
    });

     // 3. Activo el temporizador de 5 segundos
     let tiempoRestante = 5;
     const temporizador = setInterval(() => {
         if (tiempoRestante <= 0) {
             clearInterval(temporizador);
             terminarRondaXtiempo(); // Terminar ronda si no se selecciona nada
         } else{
         tiempo.forEach(temporizador => {
            temporizador.innerText = `Tiempo restante: ${tiempoRestante} segundos`;
        }); // Función para mostrar el tiempo en pantalla
         tiempoRestante--;
        }
     }, 1000);

   
        // 4. Manejar selección de bloques
        mostrarImagenes.forEach((imagen, indice) => {
        mostrarBotonImagenes[indice].addEventListener('click', () => {
            clearInterval(temporizador); // Detener el temporizador
            manejarSeleccion(indice, posicionVerdadera); // Evaluar selección
        });
    });
   

  }
  

   

  

    // Función para evaluar selección
    function manejarSeleccion(bloqueSeleccionado, bloqueObjetivo) {
        const esCorrecto = bloqueSeleccionado === bloqueObjetivo;
        console.log('Se procesa la elección');
        if (rondasGanadas > 3 && rondasJugadas % 2 == 0 && esCorrecto) {
            console.log('está jugando por más puntos');
            // Manejamos lógica para selección múltiple (dos bloques)
            puntos += 2;
            rondasGanadas++;
            frases.forEach(frase => {
                    frase.innerText = '¡Genial, estás en racha!';
            });
        } else {
            // Manejamos lógica para selección simple (un bloque)
            if (esCorrecto) {
                puntos++;
                rondasGanadas++;
                frases.forEach(frase => {
                    frase.innerText = '¡Genial, ganaste un punto!';
                });
            } else {
                rondasFallidas++;
                frases.forEach(frase => {
                    frase.innerText = 'Uu, le pifiaste. O no llegaste con el tiempo';
                });
            }
    
        }

            puntaje.forEach(contador => {
            contador.innerText = `Puntos: ${puntos}`;
           });

            rondasJugadas ++;

            document.body.style.pointerEvents = 'none';
            setTimeout(() => {
                avanzarSiguientePaso();
            }, 4000);
        
    }


    // Función para terminar la ronda sin selección
    function terminarRondaXtiempo() {
        console.log('Tiempo agotado. Fin de la ronda.');
      
        rondasFallidas++;
        rondasJugadas++;
        frases.forEach(frase => {
            frase.innerText = 'Uu, le pifiaste. O no llegaste con el tiempo';
        });

        puntaje.forEach(contador => {
            contador.innerText = `Puntos: ${puntos}`;
        });
        
        document.body.style.pointerEvents = 'none';
        setTimeout(() =>{
            avanzarSiguientePaso();
        },4000);
          
       
    }


    // Función para avanzar al siguiente paso
    function avanzarSiguientePaso() {
        document.body.style.pointerEvents = 'auto';
        // Evaluar condiciones de fin del juego o avanzar a la siguiente ronda
        if (rondasGanadas >= 10) {
            console.log('ganó');
            frases.forEach(frase => {
                frase.innerText = 'Ganaste. ¡Gracias por jugar!';
              });
            finalizarJuego();
            
        } else if (rondasFallidas === 3) {
            console.log('perdió')
            frases.forEach(frase => {
                frase.innerText = 'Perdiste. Será la próxima, gatx 😊';
              });
              finalizarJuego();
         ;
        } else{
               mostrarImagenes.forEach((imagen, indice) => {
               imagen.classList.add('hidden');
               mostrarBotonImagenes[indice].classList.add('hidden');
               imagen.src = ``;
               imagen.alt = ``;
               });
               
               cartas.forEach(carta => {
                carta.classList.remove('hidden');
               });
               
               frases.forEach(frase => {
                frase.innerText = 'Preparate para jugar como un gato...';
               });
               
               mostrarModeloMobile.innerText = '-'; 
               mostrarModelo.src =`#`; 
               mostrarModelo.alt = ``; 

               let tiempoRestante = 3;
               tiempo.forEach(temporizador => {
                    temporizador.innerText = `Tiempo restante: ${tiempoRestante} segundos`;
                });
                
                const contador = setInterval(() => {
                    if (tiempoRestante <= 0) {
                        clearInterval(contador);
                        iniciarRondaJuego();
                    } else {
                        tiempoRestante--;
                        tiempo.forEach(temporizador => {
                            temporizador.innerText = `Tiempo restante: ${tiempoRestante} segundos`;
                        });
                    }
                }, 1000);
        }
       
        
        
        
    }

       
    function finalizarJuego() {
      //Reestablecimiento de valores
      console.log('finalizó');
      rondasGanadas = 0;
      rondasFallidas = 0;
      rondasJugadas = 0;
      puntos = 0;

    
    //Reestablecimiento de puntos y tiempo mostrados
      puntaje.forEach((contador,indice) => {
        contador.innerText =` Puntos: ${puntos}`;
        tiempo[indice] = `Tiempo restante: -`;
      });

      mostrarImagenes.forEach((imagen, indice) => {
        imagen.classList.add('hidden');
        mostrarBotonImagenes[indice].classList.add('hidden');
        cartas[indice].classList.remove('hidden');
        imagen.src = `#`;
        imagen.alt = ``;
      });

      mostrarModeloMobile.innerText = '-'; 
      mostrarModelo.src =`#`; 
      mostrarModelo.alt = ``; 
      

      //oculto data desktop
      bloqueInfoDesktop.classList.remove('lg:flex');

      

      //oculto data mobile
      bloqueInfoMobile.classList.add('hidden');
      
      //oculto grilla
      bloqueGrilla.classList.add('hidden');

      //muestro botón para reiniciar el juego
      reinicio.classList.remove('hidden');
      
      
    }

   
    reinicio.addEventListener('click', () =>{
        reinicio.classList.add('hidden');
        intro.classList.remove('hidden');
        iniciaJuego.classList.remove('hidden');
        juego.classList.remove('flex');
        juego.classList.add('hidden');

     //dejo lista la data en desktop para ser mostrada en el próximo juego
      bloqueInfoDesktop.classList.add('lg:flex');

      //dejo lista la data en mobile para ser mostrada en el próximo juego
      bloqueInfoMobile.classList.remove('hidden');

      //dejo lista la grilla para ser mostrada en el próximo juego
      bloqueGrilla.classList.remove('hidden');

    });