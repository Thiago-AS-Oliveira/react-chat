/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    boxShadow: {
      simple: "1px 1px 3px #0004",
      around: "0 0 5px #0004",
      aroundSm: "0 0 3px #0004",
    },
    fontFamily: {
      Ubuntu: ["Ubuntu"],
    },
    extend: {
      keyframes: {
        slide: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        slide: "slide .4s ease-in-out",
      },
    },
  },
  plugins: [],
}
