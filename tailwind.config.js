module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        pomRed: "#F35C5F",
        pomOrangeDark: "#F3722C",
        pomOrangeLight: "#F8961E",
        pomYellow: "#F9C74F",
        PomGreen: "#90BE6D",
        pomBlueGreen: "#7FD1B9",
        pomBlue: "#57759",
        pomDark: "#353131",
        pomDarkBg: "#4A4545",
        pomGrayDark: "#A7A0A0",
        pomGray: "#D7D5D5",
        pomGrayLight: "#EBEAEA",
        pomWhite: "#F9F9F9",
      },
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