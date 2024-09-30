/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        navbarSlideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        navbarSlideUp: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-100%)", opacity: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%)" },
        },
        buttonSlide: {
          "0%": { top: "100%" },
          "100%": { top: "0" },
        },
        buttonHide: {
          "0%": { top: "0", opacity: "1" },
          "100%": { top: "-100%", opacity: "0" },
        },
      },
      animation: {
        navbarSlideDown: "navbarSlideDown 0.5s ease-in-out forwards",
        navbarSlideUp: "navbarSlideUp 0.5s ease-in-out forwards",
        fadeIn: "fadeIn 1s ease-in-out forwards",
        slideUp: "slideUp 0.8s ease-in-out forwards", // Common slideUp animation
        slideDown: "slideDown 0.5s ease-in-out forwards",
        buttonSlide: "buttonSlide 0.5s ease-in-out forwards",
        buttonHide: "buttonHide 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
