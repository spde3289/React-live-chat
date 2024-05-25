/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "rgb(3, 54, 61)",
        msg: "rgb(244, 244, 244)",
        hover: "#ececec",
        line: "#F3F3F4",
        customGray: "rgb(216, 220, 222)",
      },
    },
  },
  plugins: [],
};
