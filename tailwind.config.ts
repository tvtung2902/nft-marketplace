import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'lg': '1200px',
        'md': '840px'
      },
      colors: {
        primary: "#A259FF",
        secondary: "#858584",
        tertiary: "#3B3B3B",
        background: "#2B2B2B",
        content: "#FFFFFF",
      },
      fontFamily: {
        'work-sans': "var(--font-main)",
        'space-mono': "var(--font-other)",
      },
    },
  },
  plugins: [],
} satisfies Config;
