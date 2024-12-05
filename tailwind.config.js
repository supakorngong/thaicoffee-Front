/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "custom-yellow": "#b98c04", // Replace with your desired hex code
      },
    },
  },
  plugins: [daisyui],
};
