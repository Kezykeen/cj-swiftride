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
      extend: {
        animation: {
          "scroll-x": "scroll-x 40s linear infinite",
        },
        keyframes: {
          "scroll-x": {
            from: { transform: "translateX(0)" },
            to: { transform: "translateX(calc(-100% - 1.25rem))" },
          },
        },
      },
    },
  },
  plugins: [],
};
