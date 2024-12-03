

let desplegable = document.querySelector('nav');
let burguerMenu = document.querySelector('#burguer');
let divsBurguer = document.querySelectorAll('#burguer div')
let subdesplegable = document.querySelectorAll('.subdesplegable');
let submenus = document.querySelectorAll('li ul');

let links = document.querySelectorAll('#desplegable a');

// Itera por cada enlace y añade la clase 'hover:underline'
links.forEach(link => {
  link.classList.add('hover:underline');
});

//despliega el menu
burguerMenu.addEventListener('click', () =>{
     
        desplegable.classList.toggle('-translate-x-full');
        
        if(!desplegable.classList.contains('-translate-x-full')){
        divsBurguer[0].classList.add('rotate-45', 'translate-y-3');
        divsBurguer[1].classList.add('bg-opacity-0');
        divsBurguer[2].classList.add('-rotate-45', '-translate-y-3');
        } else{
        divsBurguer[0].classList.remove('rotate-45', 'translate-y-3');
        divsBurguer[1].classList.remove('bg-opacity-0');
        divsBurguer[2].classList.remove('-rotate-45', '-translate-y-3');
        }
       
});

//guarda el menú con clickeand por fuera del desplegable
document.addEventListener('click', (event) => {
   
    if (
        !desplegable.classList.contains('-translate-x-full') && 
        !burguerMenu.contains(event.target) &&
        !desplegable.contains(event.target)   
    ) {
        console.log("pasó el condicional")
        divsBurguer[0].classList.remove('rotate-45', 'translate-y-3');
        divsBurguer[1].classList.remove('bg-opacity-0');
        divsBurguer[2].classList.remove('-rotate-45', '-translate-y-3');
        desplegable.classList.toggle('-translate-x-full'); 
        for(let i = 0; i < subdesplegable.length; i ++){
            if(!submenus[i].classList.contains('hidden')){
             submenus[i].classList.toggle('hidden');
             subdesplegable[i].classList.toggle('rotate-45');
             submenus[i].classList.toggle('opacity-0');
             submenus[i].classList.toggle('opacity-100');
            }
        }
    }
});

//despliega los submenús
for(let i = 0; i < subdesplegable.length; i ++){
    subdesplegable[i].addEventListener('click', () =>{
        subdesplegable[i].classList.toggle('rotate-45');
        setTimeout(() => {
        submenus[i].classList.toggle('hidden');
        },175);
       setTimeout(() => {
        submenus[i].classList.toggle('opacity-0');
        submenus[i].classList.toggle('opacity-100');
       },200);
    });
}

