/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#ef8742",
        second: "#333333",
      },
    },
  },
  plugins: [require("daisyui")],
};
