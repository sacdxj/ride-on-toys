/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: '#FF6B35',
          blue: '#4ECDC4',
          yellow: '#FFE66D',
          dark: '#1A1A2E',
          purple: '#6C5CE7',
        },
        neutral: {
          cream: '#FFF8E7',
          light: '#F5F5F5',
          gray: '#E0E0E0',
        },
      },
      fontFamily: {
        heading: ['var(--font-nunito)', 'system-ui', 'sans-serif'],
        body: ['var(--font-open-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
