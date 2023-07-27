/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./main/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fill, minmax(20rem, 2fr))",
      },
    },
  },
  plugins: [],
};
