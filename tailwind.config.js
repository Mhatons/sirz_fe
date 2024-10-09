// tailwind.config.js
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // This path should point to all your template files
    './index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ['Comfortaa', 'cursive'], // Add Comfortaa font
        exo: ['Exo', 'sans-serif'],
      },
      colors: {
        primary: '#00597A', // Deep blue
        secondary: '#F97316', // Bright orange
        accent: '#10B981', // Green
        neutral: '#64748B', // Grayish blue
        background: '#F1F5F9', // Light background
        danger: '#EF4444', // Red for error messages or alerts
        button: '#162D46'
      },
    },
  },
  plugins: [],
}