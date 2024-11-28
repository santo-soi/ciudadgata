let desplegable = document.querySelector('#desplegable');
let burguerMenu = document.querySelector('#burguer');
let divsBurguer = document.querySelectorAll('#burguer div')
let subdesplegable = document.querySelectorAll('.subdesplegable');
let submenus = document.querySelectorAll('li ul');


//despliega el menu
burguerMenu.addEventListener('click', () =>{
        desplegable.classList.toggle('translate-x-96');
        setTimeout(() => { 
            desplegable.classList.toggle('bg-azulOscuro');
            desplegable.classList.toggle('bg-opacity-70');
        },350);
        const ejecutado = desplegable.classList.contains('translate-x-96');
        if(ejecutado){
        divsBurguer[0].classList.add('rotate-45', 'translate-y-3');
        divsBurguer[1].classList.add('bg-opacity-0');
        divsBurguer[2].classList.add('-rotate-45', '-translate-y-3');
        } else{
        divsBurguer[0].classList.remove('rotate-45', 'translate-y-3');
        divsBurguer[1].classList.remove('bg-opacity-0');
        divsBurguer[2].classList.remove('-rotate-45', '-translate-y-3');
        }
       console.log('clickeó');
});

//guarda el menú con clickeand por fuera del desplegable
document.addEventListener('click', (event) => {
    if (
        desplegable.classList.contains('translate-x-96') && 
        !burguerMenu.contains(event.target) && 
        !desplegable.contains(event.target)   
    ) {
        divsBurguer[0].classList.remove('rotate-45', 'translate-y-3');
        divsBurguer[1].classList.remove('bg-opacity-0');
        divsBurguer[2].classList.remove('-rotate-45', '-translate-y-3');
        desplegable.classList.remove('translate-x-96'); 
        setTimeout(() => {
            desplegable.classList.remove('bg-azulOscuro', 'bg-opacity-70');
        }, 350);
    }
});

//despliega los submenús
for(let i = 0; i < subdesplegable.length; i ++){
    subdesplegable[i].addEventListener('click', () =>{
       submenus[i].classList.toggle('hidden');
    });
}

