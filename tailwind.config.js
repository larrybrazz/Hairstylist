/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Add your custom colors here
      colors: {
        palevioletred: "palevioletred",
      },
    },
  },
  plugins: [],
};
