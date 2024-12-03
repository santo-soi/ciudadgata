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
