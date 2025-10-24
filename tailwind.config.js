/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        'xs': '475px', // Extra small devices
        '3xl': '1600px', // Large desktop
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      colors: {
        border: "hsl(0 0% 89%)",
        input: "hsl(0 0% 96%)",
        ring: "hsl(0 84% 60%)",
        background: "hsl(0 0% 100%)",
        foreground: "hsl(0 0% 3.9%)",
        primary: {
          DEFAULT: "hsl(0 84% 60%)", // Vibrant red
          foreground: "hsl(0 0% 100%)",
          50: "hsl(0 84% 97%)",
          100: "hsl(0 84% 94%)",
          200: "hsl(0 84% 89%)",
          300: "hsl(0 84% 78%)",
          400: "hsl(0 84% 66%)",
          500: "hsl(0 84% 60%)",
          600: "hsl(0 84% 50%)",
          700: "hsl(0 84% 45%)",
          800: "hsl(0 84% 35%)",
          900: "hsl(0 84% 25%)",
          950: "hsl(0 84% 15%)",
        },
        secondary: {
          DEFAULT: "hsl(120 30% 96%)", // Soft green
          foreground: "hsl(0 84% 60%)",
          50: "hsl(120 30% 98%)",
          100: "hsl(120 30% 96%)",
          200: "hsl(120 30% 91%)",
          300: "hsl(120 30% 83%)",
          400: "hsl(120 30% 72%)",
          500: "hsl(120 30% 60%)",
          600: "hsl(120 30% 50%)",
          700: "hsl(120 30% 40%)",
          800: "hsl(120 30% 30%)",
          900: "hsl(120 30% 20%)",
        },
        accent: {
          DEFAULT: "hsl(0 84% 60% / 0.1)",
          foreground: "hsl(0 84% 60%)",
          green: "hsl(120 30% 60% / 0.1)",
        },
        muted: {
          DEFAULT: "hsl(0 0% 96.1%)",
          foreground: "hsl(0 0% 45%)",
        },
        destructive: {
          DEFAULT: "hsl(0 84.2% 60.2%)",
          foreground: "hsl(0 0% 98%)",
        },
        card: {
          DEFAULT: "hsl(0 0% 100%)",
          foreground: "hsl(0 0% 3.9%)",
        },
        popover: {
          DEFAULT: "hsl(0 0% 100%)",
          foreground: "hsl(0 0% 3.9%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["Georgia", "serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "fade-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        "slide-up": {
          from: { transform: "translateY(20px)", opacity: 0 },
          to: { transform: "translateY(0)", opacity: 1 },
        },
        "slide-in-right": {
          from: { transform: "translateX(20px)", opacity: 0 },
          to: { transform: "translateX(0)", opacity: 1 },
        },
        "scale-in": {
          from: { transform: "scale(0.95)", opacity: 0 },
          to: { transform: "scale(1)", opacity: 1 },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.6s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
        "bounce-subtle": "bounce-subtle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
