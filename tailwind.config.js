/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: "#eee",
        textColor: "#515151",
        cartNumBg: "#e80013",
        primary: "#f5f3f3",
        yellow: "#F8B602",
      },
    },
  },
  plugins: [],
};
