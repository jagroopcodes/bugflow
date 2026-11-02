/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      },
      boxShadow: {
        premium: "0 24px 70px rgba(0, 0, 0, 0.35)"
      },
      colors: {
        white: "rgb(var(--white) / <alpha-value>)",
        black: "rgb(var(--black) / <alpha-value>)",
        zinc: {
          50: "rgb(var(--zinc-50) / <alpha-value>)",
          100: "rgb(var(--zinc-100) / <alpha-value>)",
          200: "rgb(var(--zinc-200) / <alpha-value>)",
          300: "rgb(var(--zinc-300) / <alpha-value>)",
          400: "rgb(var(--zinc-400) / <alpha-value>)",
          500: "rgb(var(--zinc-500) / <alpha-value>)",
          600: "rgb(var(--zinc-600) / <alpha-value>)",
          700: "rgb(var(--zinc-700) / <alpha-value>)",
          800: "rgb(var(--zinc-800) / <alpha-value>)",
          900: "rgb(var(--zinc-900) / <alpha-value>)",
          950: "rgb(var(--zinc-950) / <alpha-value>)"
        },
        indigo: {
          50: "rgb(var(--indigo-50) / <alpha-value>)",
          100: "rgb(var(--indigo-100) / <alpha-value>)",
          200: "rgb(var(--indigo-200) / <alpha-value>)",
          300: "rgb(var(--indigo-300) / <alpha-value>)",
          400: "rgb(var(--indigo-400) / <alpha-value>)",
          500: "rgb(var(--indigo-500) / <alpha-value>)",
          600: "rgb(var(--indigo-600) / <alpha-value>)",
          700: "rgb(var(--indigo-700) / <alpha-value>)",
          800: "rgb(var(--indigo-800) / <alpha-value>)",
          900: "rgb(var(--indigo-900) / <alpha-value>)",
          950: "rgb(var(--indigo-950) / <alpha-value>)"
        },
        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          hover: "rgb(var(--primary-hover) / <alpha-value>)",
          light: "rgb(var(--primary-light) / <alpha-value>)",
          border: "rgb(var(--primary-border) / <alpha-value>)",
          ring: "rgb(var(--primary-ring) / <alpha-value>)"
        }
      },
      borderRadius: {
        none: "0px",
        sm: "var(--radius-sm)",
        DEFAULT: "var(--radius-md)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        "3xl": "var(--radius-3xl)",
        full: "9999px"
      }
    }
  },
  plugins: []
};
