export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gd-services': 'linear-gradient(to right bottom, #1b435d, #325f7d, #497c9f, #609bc2, #78bbe6)',
        'gd-cta': 'linear-gradient(to left top, #efeeea, #b9c0b8, #82948f, #4e696e, #273f4f)',
      },
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
      colors: {
        black: "#212b36",
        "dark-700": "#090e34b3",
        dark: {
          DEFAULT: "#111928",
          2: "#1F2A37",
          3: "#374151",
          4: "#4B5563",
          5: "#6B7280",
          6: "#9CA3AF",
          7: "#D1D5DB",
          8: "#E5E7EB",
        },
        primary: "#3758F9",
        "blue-dark": "#1B44C8",
        secondary: "#13C296",
        "body-color": "#637381",
        "body-secondary": "#8899A8",
        warning: "#FBBF24",
        stroke: "#DFE4EA",
        "gray-1": "#F9FAFB",
        "gray-2": "#F3F4F6",
        "gray-7": "#CED4DA",
      },
      boxShadow: {
        input: "0px 7px 20px rgba(0, 0, 0, 0.03)",
        form: "0px 1px 55px -11px rgba(0, 0, 0, 0.01)",
        pricing: "0px 0px 40px 0px rgba(0, 0, 0, 0.08)",
        "switch-1": "0px 0px 5px rgba(0, 0, 0, 0.15)",
        testimonial: "0px 10px 20px 0px rgba(92, 115, 160, 0.07)",
        "testimonial-btn": "0px 8px 15px 0px rgba(72, 72, 138, 0.08)",
        1: "0px 1px 3px 0px rgba(166, 175, 195, 0.40)",
        2: "0px 5px 12px 0px rgba(0, 0, 0, 0.10)",
      },
    },
  },
}
