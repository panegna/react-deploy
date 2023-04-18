/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'strikeforce': "url('assets/hero.png')",
        'orange': "url('assets/bandeau.png')",
        'field': "url('assets/field-bg.jpg')",
      }),
      backgroundColor: theme => ({
        'secondary': '#2A47AC',
      }),
      colors: {
        'bleu': '#2A47AC',
      },
    },
  },
  plugins: [],
}

