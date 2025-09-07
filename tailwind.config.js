/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cake-pink': '#FFB6C1',
        'cake-cream': '#FFF8DC',
        'cake-chocolate': '#8B4513',
        'cake-vanilla': '#F5F5DC',
        'cake-strawberry': '#FF69B4',
        'cake-caramel': '#DAA520',
        'cake-mint': '#98FB98',
        'cake-lavender': '#E6E6FA',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-cake': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      fontFamily: {
        'display': ['Pacifico', 'cursive'],
        'body': ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
