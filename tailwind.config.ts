import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '580px',
        'tb': '1150px',
        'lg-': '950px',
      },
      boxShadow: {
        'custom-shadow': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        'custom-shadow-inp': '0 0 5px 1px rgba(68, 158, 232, 0.923)',
      },
      backgroundColor: {
        'custom-bg': 'rgba(0,0,0,0.6)',
      },
      scale: {
        '85': '0.85',
      },
    },
  },
  plugins: [],
} satisfies Config;
