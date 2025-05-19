/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideInLeft: {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        slideInRight: {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        slideInBottom: {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
        slideOutBottom: {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(100%)" },
        },
        slideOutLeft: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        borderGrow: {
          from: { width: "0%" },
          to: { width: "100%" },
        },
        borderGrowCircle: {
          "0%": { transform: "scale(0)", opacity: "1" },
          "100%": { transform: "scale(1.2)", opacity: "0" },
        },
        // borderColor: "#f97316",
      },
      animation: {
        slideInLeft: "slideInLeft 1s ease forwards",
        slideInRight: "slideInRight 1s ease forwards",
        slideInBottom: "slideInBottom 1s ease forwards",
        slideOutBottom: "slideOutBottom 1s ease forwards",
        slideOutLeft: "slideOutLeft 1s ease forwards",
        borderGrow: "borderGrow 5s linear forwards",
        borderGrowCircle: "borderGrowCircle 5s linear forwards",
      },
    },
  },
  plugins: [],
};
