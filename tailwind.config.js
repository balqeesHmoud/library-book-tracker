module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './contexts/**/*.{js,ts,jsx,tsx}', // Ensure context files are included
  ],
  theme: {
    extend: {
      // Customizing colors for dark mode
      colors: {
        background: {
          light: '#ffffff', // Light mode background color
          dark: '#1a1a1a',  // Dark mode background color
        },
        text: {
          light: '#000000', // Light mode text color
          dark: '#ffffff',  // Dark mode text color
        },
      },
    },
  },
  plugins: [],
};
