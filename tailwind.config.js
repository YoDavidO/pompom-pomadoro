module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      // colors: {
      //   primary: "#F02D3A",
      //   lightGray: "#F3F4F6",
      //   gray: "#DCDEE5",
      //   black: "#273043",
      //   fbBlue: "#4267B2"
      // },
      width: {
        "px": '1px'
      }
    },
  },
  variants: {
    extend: {
      borderWidth: ['focus', 'last']
    },
  },
  plugins: [],
}