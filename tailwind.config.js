/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"GeistPixel"', 'monospace'],
        sans: ['"Geist"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', '"Fira Code"', 'monospace'],
      },
      colors: {
        accent: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
          muted: 'var(--accent-muted)',
          text: 'var(--accent-text)',
        },
        bg: {
          DEFAULT: 'var(--bg)',
          elevated: 'var(--bg-elevated)',
          hover: 'var(--bg-hover)',
          card: 'var(--bg-card)',
          input: 'var(--bg-input)',
          overlay: 'var(--bg-overlay)',
        },
        border: {
          DEFAULT: 'var(--border)',
          hover: 'var(--border-hover)',
          accent: 'var(--border-accent)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          tertiary: 'var(--text-tertiary)',
          muted: 'var(--text-muted)',
        },
        status: {
          green: 'var(--green)',
          'green-muted': 'var(--green-muted)',
          amber: 'var(--amber)',
          'amber-muted': 'var(--amber-muted)',
          red: 'var(--red)',
          'red-muted': 'var(--red-muted)',
          blue: 'var(--blue)',
          'blue-muted': 'var(--blue-muted)',
          purple: 'var(--purple)',
          'purple-muted': 'var(--purple-muted)',
        },
      },
      animation: {
        'spin-slow': 'loka-spin 1s linear infinite',
        marquee: 'loka-marquee 30s linear infinite',
        glow: 'loka-glow 4s ease-in-out infinite',
        float: 'loka-float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
