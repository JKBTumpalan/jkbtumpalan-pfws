const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      emerald: colors.emerald,
      coolgray: colors.coolGray,
      truegray: colors.trueGray,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      teal: colors.teal,
      lime: colors.lime,
      green: colors.green,
      cyan: colors.cyan,
      lightblue: colors.lightBlue,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      padding: ["hover"],
      display: ["hover", "group-hover"],
      transitionProperty: ["hover", "focus"],
    },
  },
  plugins: [],
};
