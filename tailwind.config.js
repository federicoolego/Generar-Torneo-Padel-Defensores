/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta de Defensores: granate del escudo + blanco
        noche: '#3A0A06',   // granate muy oscuro: texto principal y encabezado
        cancha: {
          DEFAULT: '#8C1C13', // granate del escudo: botones, links, selección
          claro: '#A8322A',
          suave: '#F6E4E1',
        },
        vidrio: '#F8F3F2',  // fondo general, blanco con un toque granate
        pelota: '#E8B84A',  // dorado: acento (pasos completos, destacados)
        red: { DEFAULT: '#B42318' },
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'Arial Narrow', 'sans-serif'],
        sans: ['Barlow', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
