/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#f9f9f9",
        hover: "#ececec",
        line: "#F3F3F4",
      },
    },
  },
  plugins: [],
};
