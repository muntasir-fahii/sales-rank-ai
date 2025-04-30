/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans"],
        manrope: ["Manrope"],
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
