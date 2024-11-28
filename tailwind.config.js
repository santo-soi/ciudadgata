/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['clasico/**/*.{html,js}',
    'informacion-compras/**/*.{html,js}',
    'nuevo/**/*.{html,js}',
    'about-ciudadgata',
    'clientes.html',
    'index.html',
    'juego.html',
    'js/*.js'
  ],
  theme: {
    fontFamily: {
      rubikE: ['Rubik'],
      rubikO: ['Rubik One'], 
      rubikMO: ["Rubik Mono One", 'serif']
    },
    extend: {
      colors: {
        azulOscuro : '#011E40',
        beige: '#F5F5DC'
      },
      margin: {
        cinco: '5%'
      },
     
      
    },
  },
  plugins: [],
}

