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
        // blue
        colorBlueDeep: '#3752E9',
        colorBlueLight: '#CED7FE',

        // green
        colorGreen: "#3ACBCC",
        colorGreenLight: "#71D9DA",
        colorGreenDeeper: "#001F3E",

        colorNeutra: "#EBE6E6",

        // light mode
        colorLight: '#F4FAFA',
        colorDefaultLight: '#FFFFFF',

        // dark mode
        colorDark: '#1B1F23',
        colorDefaultDark: '#000000',
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