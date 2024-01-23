import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          // Text
          "very-dark-desat-blue": "hsl(238, 29%, 16%)",
          "soft-red": "hsl(14, 88%, 65%)",
          // Gradient
          "soft-violet": "hsl(273, 75%, 66%)",
          "soft-blue": "hsl(240, 73%, 65%)",
        },
        neutral: {
          // Text
          "very-dark-grayish-blue": "hsl(237, 12%, 33%)",
          "dark-grayish-blue": "hsl(240, 6%, 50%)",
          // Dividers
          "light-grayish-blue": "hsl(240, 5%, 91%)",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
