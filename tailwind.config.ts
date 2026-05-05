import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy:      '#1B2428',
        blue: {
          DEFAULT: '#0092CB',
          light:   '#82CEF4',
          teal:    '#0081B3',
          sky:     '#37BDF2',
          deep:    '#025677',
        },
        'ice-blue': '#F9FDFF',
        neutral: {
          100: '#FFFFFF',
          200: '#F9FDFF',
          300: '#EFF4F7',
          400: '#D1DCE3',
          500: '#94A3AD',
          600: '#5C6F78',
          700: '#2E3E47',
          800: '#1B2428',
          900: '#0D1417',
        },
      },
      fontFamily: {
        sans:    ['CircularStd', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['EamesCenturyModern', 'Georgia', 'Times New Roman', 'serif'],
        mono:    ['SF Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '5xl': ['3rem',    { lineHeight: '1.15' }],
      },
      borderRadius: {
        sm:   '4px',
        base: '8px',
        md:   '12px',
        lg:   '16px',
        xl:   '24px',
        '2xl':'32px',
      },
      boxShadow: {
        sm:   '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)',
        md:   '0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)',
        lg:   '0 8px 24px rgba(0,0,0,0.10), 0 4px 8px rgba(0,0,0,0.04)',
        xl:   '0 16px 48px rgba(0,0,0,0.12), 0 8px 16px rgba(0,0,0,0.06)',
        blue: '0 8px 32px rgba(0,146,203,0.25)',
        navy: '0 8px 32px rgba(27,36,40,0.30)',
      },
      transitionTimingFunction: {
        spring:    'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'ease-out':'cubic-bezier(0, 0, 0.2, 1)',
      },
      transitionDuration: {
        fast:     '100ms',
        normal:   '200ms',
        moderate: '300ms',
        slow:     '500ms',
        icon:     '1700ms',
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
}

export default config
