/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        button: "var(--button-color)",
        "button-light": "var(--light-button-color)",
        "button-extra-light": "var(--extra-light-button)",
      }
    },
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    function ({ addVariant }) {
      addVariant('landscape', '@media (orientation: landscape)');
    },
  ],
};
