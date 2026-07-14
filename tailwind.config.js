/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-base':       '#FAFCFF',
        'surface':       '#FFFFFF',
        'text-base':     '#0F172A',
        'text-muted':    '#64748B',
        'accent':        '#4DA8DA',
        'accent-light':  '#B8DDEF',
        'accent-dark':   '#2A7FAD',
        'border-subtle': '#E2EAF0',
      },
      fontFamily: {
        sans:  ['"Inter"', 'system-ui', 'sans-serif'],
        serif: ['"Manrope"', 'system-ui', 'sans-serif'],  /* repurposed as display/heading */
      },
    },
  },
  plugins: [],
}

