import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          red: 'hsl(0, 100%, 68%)',
        },
        neutral: {
          'very-dark-blue': 'hsl(230, 29%, 20%)',
          'dark-grayish-blue': 'hsl(230, 11%, 40%)',
          'grayish-blue': 'hsl(231, 7%, 65%)',
          'light-grayish-blue': 'hsl(207, 33%, 95%)',
        },
      },
      fontFamily: {
        barlow: ["var(--font-barlow)", "sans-serif"],
        barlowCond: ["var(--font-barlow-condensed)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
