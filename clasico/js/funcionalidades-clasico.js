const video = document.querySelector("video");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        video.play(); // Reproducir el video
      } else {
        video.pause(); // Pausar el video
      }
    });
  });

  observer.observe(video);

let verMas = document.querySelectorAll('.vermas');
let verMenos = document.querySelectorAll('.vermenos');
let textOculto = document.querySelectorAll('.oculto')
for (let i = 0; i < verMas.length; i ++){
       verMas[i].addEventListener('click', () =>{
        setTimeout(()=>{
            verMas[i].classList.toggle('hidden');
            textOculto[i].classList.toggle('hidden');    
        },300)
        
       })

       verMenos[i].addEventListener('click', () =>{
        setTimeout(()=>{
            verMas[i].classList.toggle('hidden');
            textOculto[i].classList.toggle('hidden');    
        },300)
       })

    }
