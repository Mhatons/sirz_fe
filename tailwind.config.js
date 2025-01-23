// tailwind.config.js
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // This path should point to all your template files
    './index.html',
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ['Comfortaa', 'cursive'], // Add Comfortaa font
        exo: ['Exo', 'sans-serif'],
      },
      animation: {
        spinSlow: 'spin 3s linear infinite', // Customize speed
      },
      colors: {
        // primary
        primary: '#2A85A0',
        primary_light: '#39d0fe',
        primary_dark: '#1d5668',

        // secondary
        secondary: '#D4A657',
        secondary_light: '#ffb637',
        secondary_dark: '#8c6521', 

        // light mode
        background_light: '#F4F5F7', // Grayish blue

        // dark mode
        background_dark: '#1B1F23', // Grayish blue
        background_darker: '#000000', // Grayish blue

        accent: '#10B981', // Green
        background: '#F1F5F9', // Light background
        danger: '#EF4444', // Red for error messages or alerts
        button: '#162D46'
      },
      screens: {
        xxm: "950px",
        xxl: "500px",
        xxxm: "400px",
        xxxxm: "350px"
      },
    },
  },
  plugins: [],
}