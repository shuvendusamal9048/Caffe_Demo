/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF6EF',
          200: '#F4ECE1',
          300: '#EBDDCB',
          400: '#DEC9B0',
          500: '#D0B495',
        },
        espresso: {
          50: '#F4EFEB',
          100: '#E6D9D0',
          200: '#C7ADA0',
          300: '#A47F6E',
          400: '#7B5948',
          500: '#5A3E31',
          600: '#462F24',
          700: '#38251C',
          800: '#2A1A13',
          900: '#1F130D',
          950: '#140C08',
        },
        sage: {
          50: '#F3F6F2',
          100: '#E3EAE1',
          200: '#C7D7C3',
          300: '#A7C0A1',
          400: '#84A57C',
          500: '#64885B',
          600: '#4F6E47',
          700: '#3F5639',
          800: '#344530',
          900: '#2C3A29',
        },
        warmAmber: {
          50: '#FCF8EE',
          100: '#F7EDD3',
          200: '#EDD6A4',
          300: '#E1BB6F',
          400: '#D5A242',
          500: '#B88228',
          600: '#94631C',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(42, 26, 19, 0.06)',
        'soft': '0 8px 24px -4px rgba(42, 26, 19, 0.08), 0 2px 6px -1px rgba(42, 26, 19, 0.04)',
        'soft-lg': '0 20px 40px -10px rgba(42, 26, 19, 0.12), 0 4px 12px -2px rgba(42, 26, 19, 0.06)',
        'soft-xl': '0 30px 60px -12px rgba(42, 26, 19, 0.18)',
      },
      letterSpacing: {
        widest: '.2em',
        relaxed: '.05em',
      }
    },
  },
  plugins: [],
}

