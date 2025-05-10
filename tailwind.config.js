/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B4F6C',  // azul petróleo (primária)
          50: '#E6F0F5',
          100: '#CCE0EB',
          200: '#99C1D7',
          300: '#66A3C2',
          400: '#3384AE',
          500: '#0B4F6C',
          600: '#094056',
          700: '#063041',
          800: '#04202B',
          900: '#021016',
        },
        secondary: {
          DEFAULT: '#00C2D1',  // ciano vibrante (secundária)
          50: '#E6FAFC',
          100: '#CCF5F8',
          200: '#99EBF1',
          300: '#66E0EA',
          400: '#33D6E3',
          500: '#00C2D1',
          600: '#009BA7',
          700: '#00747D',
          800: '#004D54',
          900: '#00272A',
        },
        accent: {
          DEFAULT: '#FFD166',  // amarelo dourado (destaque)
          50: '#FFF9E6',
          100: '#FFF3CC',
          200: '#FFE799',
          300: '#FFDB66',
          400: '#FFCE33',
          500: '#FFD166',
          600: '#CCA752',
          700: '#997D3D',
          800: '#665429',
          900: '#332A14',
        },
        background: '#F8F9FA',  // branco suave (fundo)
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
        opensans: ['var(--font-opensans)', 'Open Sans', 'sans-serif'],
      },
      animation: {
        'soft-bounce': 'soft-bounce 1.5s infinite',
      },
      keyframes: {
        'soft-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}