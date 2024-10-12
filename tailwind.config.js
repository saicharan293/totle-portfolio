module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        tangering: '#FF6347',
        freeBlue: '#0073e6',  
      },
      backgroundImage: {
        'hero-image': "url('/images/test-image.jpg')", 
      },
    },
  },
  
  plugins: [],
}
