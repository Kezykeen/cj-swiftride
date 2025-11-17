/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          white: "#FFFFFF",
          gray: "##F6F6F6",
        }, //primary color
        secondary: {
          blue: "#072C59",
        },
      },
      fontFamily: {
        plusJakarta: ["Plus Jakarta Sans", "sans-serif"],
        syne: ["Syne", "sans-serif"],
      },
    },
  },
  plugins: [],
};
