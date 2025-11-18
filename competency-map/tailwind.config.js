/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#CFB991",
        ebony: "#000000",
        "warm-gray": "#F5F4F2",
        "accent-blue": "#2E5A88",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 25px rgba(46, 90, 136, 0.35)",
      },
    },
  },
  plugins: [],
}

