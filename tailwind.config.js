/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['clasico/**/*.{html,js}',
    'informacion-compras/**/*.{html,js}',
    'nuevo/**/*.{html,js}',
    'about-ciudadgata.html',
    'clientes.html',
    'index.html',
    'juego.html',
    'contacto.html',
    'desarrollo-sitio.html',
    'js/*.js',
    'node_modules/flyonui/dist/js/carousel.js'
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
  plugins: [
    require("flyonui"),
    require("flyonui/plugin")
  ]
}

