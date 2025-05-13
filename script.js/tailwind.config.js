// module.exports = {
//     content: ["./src/**/*.{html,js}"],
//     theme: {
//       extend: {
//         fontFamily: {
//           chekhovskoy: ['ChekhovskoyBook', 'sans-serif'],
//           'greek-freak': ['Greek-Freak', 'sans-serif']
//         },
//         colors: {
//           primary: '#3e96f3',
//           secondary: '#f89705',
//           accent: '#ffcc00',
//         },
//       },
//     },
//     plugins: [],
//   }
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

  /* For Tailwind Users: Add these to your tailwind.config.js */
  // module.exports = {
  //   theme: {
  //     extend: {
  //       transitionProperty: {
  //         'height': 'height',
  //         'opacity': 'opacity'
  //       }
  //     }
  //   }
  // }