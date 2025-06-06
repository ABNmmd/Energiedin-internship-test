/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['var(--font-open-sans)', 'sans-serif'],
        'serif': ['var(--font-playfair-display)', 'serif'],
        'heading': ['var(--font-playfair-display)', 'serif'],
        'body': ['var(--font-open-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
