/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,js,ts,jsx,tsx}" // Adapte ce chemin à ton projet
    ],
    theme: {
      extend: {
        colors: {
            'text': '#050315',
            'background': '#fbfbfe',
            'primary': '#2f27ce',
            'secondary': '#dedcff',
            'accent': '#433bff',
           },
      },
    },
    plugins: [],
  };
  