import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8FAFC",
        primary: "#2563EB",
        secondary: "#1E293B",
        accent: "#FACC15",
        "accent-hover": "#F8D900",
      },
      screens: {
        xs: '426px'
      }
    },
  },
  plugins: [require("tailwind-scrollbar")],
} satisfies Config;
