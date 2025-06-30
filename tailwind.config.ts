import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    // Ensure these paths cover all your component and page files
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./screens/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}", // Crucial if you have a 'src' directory
    "*.{js,ts,jsx,tsx,mdx}", // Covers files at the root like next.config.mjs if they contain classes
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        clinical: {
          blue: {
            50: "#f0f7ff",
            100: "#e0eefe",
            200: "#bae0fd",
            300: "#7cc8fb",
            400: "#36aaf5",
            500: "#0d8dde",
            600: "#0070bd",
            700: "#015999",
            800: "#064a7f",
            900: "#0a3e6a",
            950: "#07284a",
          },
          green: {
            50: "#f0fdf6",
            100: "#dcfce9",
            200: "#bbf7d6",
            300: "#86ebb6",
            400: "#4cd58a",
            500: "#24b866",
            600: "#16954f",
            700: "#157541",
            800: "#165c38",
            900: "#144c30",
            950: "#062a19",
          },
          orange: {
            50: "#fff8ed",
            100: "#ffefd4",
            200: "#ffdba8",
            300: "#ffc070",
            400: "#ff9a36",
            500: "#ff7d10",
            600: "#f05e06",
            700: "#c74208",
            800: "#9e330f",
            900: "#802c10",
            950: "#451306",
          },
          gray: {
            50: "#f7f8f9",
            100: "#eef0f2",
            200: "#d9dde3",
            300: "#b9c2cb",
            400: "#94a1af",
            500: "#768595",
            600: "#5f6c7b",
            700: "#4d5765",
            800: "#424a55",
            900: "#393f48",
            950: "#24282e",
          },
        },
        success: "hsl(var(--success))",
        warning: "hsl(var(--warning))",
        info: "hsl(var(--info))",
        error: "hsl(var(--error))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
