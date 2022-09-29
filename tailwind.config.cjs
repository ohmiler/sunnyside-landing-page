/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('./src/assets/img/desktop/image-header.jpg')",
        'sec-three-left': "url('./src/assets/img/desktop/image-graphic-design.jpg')",
        'sec-three-right': "url('./src/assets/img/desktop/image-photography.jpg')",
      },
    },
  },
  plugins: [],
}
