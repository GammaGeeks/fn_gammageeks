export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'slow-pulse': 'slow-pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'slow-pulse': {
          '0%, 100%': { 
            opacity: '0.2',
            transform: 'scale(1)'
          },
          '50%': { 
            opacity: '0.3',
            transform: 'scale(1.05)'
          },
        },
      },
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        playfair: ['Playfair Display', 'serif'], // Headings
        sourceSans: ['"Source Sans Pro"', 'sans-serif'], // Body
        cormorant: ['"Cormorant Garamond"', 'serif'], // Headings
        montserrat: ['Montserrat', 'sans-serif'], // Body
        baskerville: ['Baskerville', 'serif'], // Headings
        workSans: ['"Work Sans"', 'sans-serif'], // Body
        libreBaskerville: ['"Libre Baskerville"', 'serif'], // Headings
        raleway: ['Raleway', 'sans-serif'], // Body
        lora: ['Lora', 'serif'], // Headings
        poppins: ['Poppins', 'sans-serif'], // Body
        sourceSans3: ['Source Sans 3', 'sans-serif']
      },
    },
  },
}
