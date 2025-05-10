/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        primary: {
          DEFAULT: '#0B4F6C',  // azul petróleo (primária)
          foreground: "hsl(var(--primary-foreground))",
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
          foreground: "hsl(var(--secondary-foreground))",
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
          foreground: "#0B4F6C",
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
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
        opensans: ['var(--font-opensans)', 'Open Sans', 'sans-serif'],
      },
      animation: {
        'soft-bounce': 'soft-bounce 1.5s infinite',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        'soft-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}