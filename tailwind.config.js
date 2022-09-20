/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#FC4747",
        "dark-blue": "#10141E",
        "grayish-blue": "#5A698F",
        "semi-dark-blue": "#161D2F",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
