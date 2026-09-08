/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#08090C",
        cardBg: "rgba(18, 20, 29, 0.7)",
        accentGold: "#D4AF37",
        accentEmerald: "#10B981",
      },
    },
  },
  plugins: [],
}
