/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        bricky: ["Bricolage Grotesque", "sans-serif"], // or any other font family
      },
      height: {
        "screen-minus-70": "calc(100vh - 70px)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom right, #1399FF, #0063EE, #4A20E3)",
      },
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
        slideUp: "slideUp 0.5s ease-in-out forwards", // Common slideUp animation
        slideDown: "slideDown 0.5s ease-in-out forwards",
        buttonSlide: "buttonSlide 0.5s ease-in-out forwards",
        buttonHide: "buttonHide 0.5s ease-in-out forwards",
      },
      animationDelay: {
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
        '600': '600ms',
        '700': '700ms',
        '800': '800ms',
        '900': '900ms',
        '1000': '1000ms',
      },
    },
  },
  variants: {
    extend: {
      animationDelay: ['responsive'],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {};
      for (let i = 100; i <= 1000; i += 100) {
        newUtilities[`.delay-${i}`] = {
          'animation-delay': `${i}ms`,
        };
      }
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
