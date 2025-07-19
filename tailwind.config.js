/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // For your pages in the root `pages` folder
    './src/**/*.{js,ts,jsx,tsx}',   // For components and other files inside your `src` folder
    // If you have any other specific files outside these, add them here
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};