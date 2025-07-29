// tailwind.config.js
export default {
  darkMode: 'class', // ✔️ This is correct
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // ✔️ Covers all source files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
