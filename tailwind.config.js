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
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-down": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-up": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
        "tracking-in-contract-bck-bottom": {
          "0%": {
            "letter-spacing": "1em",
            transform: "translateZ(400px) translateY(300px)",
            opacity: "0",
          },
          "40%": {
            opacity: ".6",
          },
          to: {
            transform: "translateZ(0) translateY(0)",
            opacity: "1",
          },
        },
        "tracking-in-expand-fwd-top": {
          "0%": {
            "letter-spacing": "-.5em",
            transform: "translateZ(-700px) translateY(-500px)",
            opacity: "0",
          },
          "40%": {
            opacity: ".6",
          },
          to: {
            transform: "translateZ(0) translateY(0)",
            opacity: "1",
          },
        },
        "scale-in-center": {
          "0%": {
            transform: "scale(0)",
            opacity: "1",
          },
          to: {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        "roll-in-blurred-left": {
          "0%": {
            transform: "translateX(-1000px) rotate(-720deg)",
            filter: "blur(50px)",
            opacity: "0",
          },
          to: {
            transform: "translateX(0) rotate(0deg)",
            filter: "blur(0)",
            opacity: "1",
          },
        },
        "slide-in-elliptic-top-fwd": {
          "0%": {
            transform: "translateY(-600px) rotateX(-30deg) scale(0)",
            "transform-origin": "50% 100%",
            opacity: "0",
          },
          to: {
            transform: "translateY(0) rotateX(0) scale(1)",
            "transform-origin": "50% 1400px",
            opacity: "1",
          },
        },
        "tilt-in-fwd-tr": {
          "0%": {
            transform:
              "rotateY(20deg) rotateX(35deg) translate(300px, -300px) skew(-35deg, 10deg)",
            opacity: "0",
          },
          "100%": {
            transform:
              "rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg)",
            opacity: "1",
          },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        "fade-in-down": "fade-in-down 0.5s ease-out",
        "fade-out-down": "fade-out-down 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.5s ease-out",
        "fade-out-up": "fade-out-up 0.5s ease-out",
        "tracking-in-contract-bck-bottom":
          "tracking-in-contract-bck-bottom 1s cubic-bezier(0.215, 0.610, 0.355, 1.000)   both",
        "tracking-in-expand-fwd-top":
          "tracking-in-expand-fwd-top 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000)   both",
        "scale-in-center":
          "scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "roll-in-blurred-left":
          "roll-in-blurred-left 0.65s cubic-bezier(0.230, 1.000, 0.320, 1.000)   both",
        "tilt-in-fwd-tr":
          "tilt-in-fwd-tr 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "slide-in-elliptic-top-fwd":
          "slide-in-elliptic-top-fwd 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
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
      blue: colors.blue,
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
      animation: ["hover", "focus"],
    },
  },
  plugins: [],
};
