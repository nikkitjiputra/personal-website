/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "leaf-fall": {
          "0%": {
            transform: "translateY(-20vh) translateX(0)",
            opacity: "0",
          },
          "10%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateY(120vh) translateX(80px)",
            opacity: "0",
          },
        },
        "leaf-spin": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        "testing": {
          "0%": {
            transform: "rotate(360deg)"
          },
        },
      },
      animation: {
        "leaf-fall": "leaf-fall linear infinite",
        "leaf-spin": "leaf-spin 6s linear infinite",
        "fall-spin": "leaf-fall linear infinite, leaf-spin linear infinite"
      },
    },
  },
  plugins: [],
};
