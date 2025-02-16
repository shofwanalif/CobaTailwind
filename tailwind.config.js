/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js}'], // Pastikan folder src dipantau
  theme: {
    extend: {
      keyframes: {
        'loop-marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'loop-marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
};
