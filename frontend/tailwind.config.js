/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3490dc", // Color principal (Azul)
        secondary: "#ff9900", // Color secundario (Naranja)
        background: "#f3f4f6", // Color de fondo (Gris claro)
        accent: "#d53f8c", // Color de énfasis (Rosa)
        error: "#e3342f", // Color de error (Rojo)
      },
    },
  },
  plugins: [],
};
