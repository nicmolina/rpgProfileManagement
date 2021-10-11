module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#8C1C13",
      danger: "#d9534f",
    }),
    colors: {
      red: {
        DEFAULT: "#8C1C13",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
