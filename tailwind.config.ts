import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

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
        dark: {
          1: "#1C1F2E",
          2: "#161925",
          3: "#252A41",
          4: "#1E2757",
          5: "#030711",
        },
        grey: {
          1: "#141619",
          2: "#2c2e3a",
          3: "#b3b4bd",
          4: "#F8F8F8",
          5: "#F5F5DC",
        },
        light: {
          1: "#F5F5F5",
          2: "#FBFBFB",
          3: "#FDFCEF",
        },
        blue: {
          1: "#335CFF",
          2: "#3175FF",
          3: "#80A2FF",
          4: "#FFFFFF",
          5: "#3870FF",
          6: "#050a44",
          7: "#0a21c0",
        },
        sky: {
          1: "#C9DDFF",
          2: "#ECF0FF",
          3: "#F5FCFF",
          4: "#F9FBFF",
        },
        orange: {
          1: "#FF742E",
          2: "#FFA774",
          3: "#FFFFFF",
        },
        purple: {
          1: "#830EF9",
          2: "#B37BFA",
          3: "#FFFFFF",
        },
        yellow: {
          1: "#F9A90E",
          2: "#FFD96C",
          3: "#FFFFFF",
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
      backgroundImage: {
        hero: "url('/images/hero-background.png')",
        'orange-gradient': 'radial-gradient(circle 500px, #FFA774 0%, #FF742E 40%, #FF742E10 100%)',
        'purple-gradient': 'radial-gradient(circle 500px, #B37BFA 0%, #830EF9 40%, #830EF910 100%)',
        'yellow-gradient': 'radial-gradient(circle 500px, #FFD96C 0%, #F9A90E 40%, #F9A90E10 100%)',
        'blue-gradient': 'radial-gradient(circle 500px, #80A2FF 0%, #335CFF 40%, #335CFF10 100%)',
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;

export default config;
