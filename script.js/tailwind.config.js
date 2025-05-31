
  module.exports = {
    theme: {
      extend: {
        fontFamily: {
          'greek-freak': ['Greek-Freak', 'sans-serif'], // Now you can use `font-greek-freak`
        },
      },
    },
  }
  // tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'custom-teal': '#326964',
      },
    },
  },
  variants: {},
  plugins: [],
}

// tailwind.config.js
module.exports = {
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

  module.exports = {
  content: ["./src/**/*.{html,js}"], // Paths to your HTML/JS files
  theme: {
    extend: {},
  },
  plugins: [],
}