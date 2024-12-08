// bloque de intro
const intro = document.querySelector('#intro');
const iniciaJuego = document.querySelector('#btn-iniciar');

// bloques del juego
const juego = document.querySelector('#juego'); //principal
const frase = document.querySelector('#frase');

// contadores
const tiempo = document.querySelectorAll('.temporizador');
const puntaje = documen.querySelectorAll('.puntaje');


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
  


mostrarImagenes[0].src = abarajame[0].src;
mostrarImagenes[0].alt = abarajame[0].alt;
