export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
theme: {
    extend: {
      colors: {
        'brand-yellow': '#FBBF24', // main yellow
        'brand-black': '#000000',
        'brand-white': '#ffffff'
      },
      fontFamily: {
        header: ['Merriweather', 'serif'],
        body: ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        'scroll-anim': 'scroll 45s linear infinite'
      }
    }
  },
  plugins: [],
}