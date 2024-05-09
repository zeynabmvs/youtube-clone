/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
      },
    },
    colors: {
      black: {
        47: "#474747",
        18: "#181818",
        21: "#212121",
        32: "#323232",
        38: "#383838",
        12: "#121212",
      },
      white: "#ffffff",
      "gray-aa": "#aaaaaa",
      blue: "#3DA6FF",
    },
  },
  plugins: [],
};
