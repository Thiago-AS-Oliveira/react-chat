/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    boxShadow: {
      around: "0 0 5px #0004",
      aroundSm: "0 0 3px #0004",
    },
    fontFamily: {
      Ubuntu: ["Ubuntu"],
    },
    extend: {},
  },
  plugins: [],
}
