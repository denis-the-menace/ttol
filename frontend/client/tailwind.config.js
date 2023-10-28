/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      colors: {
        color1: "#f5efe7",
        color2: "#e7dacf",
        color3: "#d8c4b6",
        color4: "#4f709c",
        color5: "#213555",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeInTopToBottom: {
          "0%": { opacity: 0, transform: "translateY(-10%)" },
          "100%": { opacity: 1, transform: "translateY(0%)" },
        },
        moveBottomToTop: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(5%)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 5s ease-out",
        "fade-in-top-to-bottom": "fadeInTopToBottom 0.5s ease-out",
        "move-bottom-to-top": "moveBottomToTop 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
