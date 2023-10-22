/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: "#eee",
        darkGray: "#ccc",
        textColor: "#1e1d23",
        cartNumBg: "#e80013",
        primary: "#f5f3f3",
        yellow: "#ffc222",
        darkYellow: "#eeac00",
        lightGray: "#b0b0b0",
      },
    },
  },
  plugins: [],
};
