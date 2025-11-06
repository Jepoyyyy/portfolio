/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // ⬅️ penting: aktifkan dark mode berbasis class
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // kalau pakai folder app (Next 13+)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
