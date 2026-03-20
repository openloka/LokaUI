import { createContext, useContext, useState, useCallback, useEffect, useMemo } from 'react'

const darkTokens = {
  '--bg': '#09090b',
  '--bg-elevated': 'rgba(255,255,255,0.03)',
  '--bg-hover': 'rgba(255,255,255,0.055)',
  '--bg-card': 'rgba(255,255,255,0.025)',
  '--bg-input': 'rgba(255,255,255,0.04)',
  '--bg-overlay': 'rgba(0,0,0,0.25)',
  '--border': 'rgba(255,255,255,0.07)',
  '--border-hover': 'rgba(255,255,255,0.13)',
  '--border-accent': 'rgba(14,165,142,0.3)',
  '--border-secondary': 'rgba(99,102,241,0.3)',
  '--text-primary': '#fafafa',
  '--text-secondary': '#a1a1aa',
  '--text-tertiary': '#71717a',
  '--text-muted': '#52525b',
  '--accent': '#0ea58e',
  '--accent-hover': '#10b99b',
  '--accent-muted': 'rgba(14,165,142,0.12)',
  '--accent-text': '#022c22',
  '--secondary': '#6366f1',
  '--secondary-hover': '#818cf8',
  '--secondary-muted': 'rgba(99,102,241,0.12)',
  '--secondary-text': '#ffffff',
  '--green': '#22c55e',
  '--green-muted': 'rgba(34,197,94,0.12)',
  '--amber': '#f59e0b',
  '--amber-muted': 'rgba(245,158,11,0.12)',
  '--red': '#ef4444',
  '--red-muted': 'rgba(239,68,68,0.12)',
  '--blue': '#3b82f6',
  '--blue-muted': 'rgba(59,130,246,0.12)',
  '--purple': '#a855f7',
  '--purple-muted': 'rgba(168,85,247,0.12)',
  '--shadow': '0 1px 3px rgba(0,0,0,0.4)',
  '--glow': 'rgba(14,165,142,0.06)',
  '--toggle-bg': 'rgba(255,255,255,0.08)',
  '--toggle-knob': '#fff',
  '--code-bg': 'rgba(255,255,255,0.04)',
  '--code-red': '#f87171',
  '--code-amber': '#fbbf24',
  '--code-green': '#4ade80',
}

const lightTokens = {
  '--bg': '#fafaf9',
  '--bg-elevated': 'rgba(0,0,0,0.025)',
  '--bg-hover': 'rgba(0,0,0,0.05)',
  '--bg-card': 'rgba(0,0,0,0.02)',
  '--bg-input': 'rgba(0,0,0,0.03)',
  '--bg-overlay': 'rgba(0,0,0,0.06)',
  '--border': 'rgba(0,0,0,0.08)',
  '--border-hover': 'rgba(0,0,0,0.14)',
  '--border-accent': 'rgba(14,165,142,0.3)',
  '--border-secondary': 'rgba(99,102,241,0.3)',
  '--text-primary': '#18181b',
  '--text-secondary': '#52525b',
  '--text-tertiary': '#71717a',
  '--text-muted': '#a1a1aa',
  '--accent': '#0d9485',
  '--accent-hover': '#0ea58e',
  '--accent-muted': 'rgba(14,165,142,0.08)',
  '--accent-text': '#ffffff',
  '--secondary': '#4f46e5',
  '--secondary-hover': '#6366f1',
  '--secondary-muted': 'rgba(79,70,229,0.08)',
  '--secondary-text': '#ffffff',
  '--green': '#16a34a',
  '--green-muted': 'rgba(22,163,74,0.1)',
  '--amber': '#d97706',
  '--amber-muted': 'rgba(217,119,6,0.1)',
  '--red': '#dc2626',
  '--red-muted': 'rgba(220,38,38,0.1)',
  '--blue': '#2563eb',
  '--blue-muted': 'rgba(37,99,235,0.1)',
  '--purple': '#9333ea',
  '--purple-muted': 'rgba(147,51,234,0.1)',
  '--shadow': '0 1px 3px rgba(0,0,0,0.08)',
  '--glow': 'rgba(14,165,142,0.06)',
  '--toggle-bg': 'rgba(0,0,0,0.08)',
  '--toggle-knob': '#fff',
  '--code-bg': 'rgba(0,0,0,0.04)',
  '--code-red': '#dc2626',
  '--code-amber': '#d97706',
  '--code-green': '#16a34a',
}

const STORAGE_KEY = 'lokaui-theme'
const COLORS_STORAGE_KEY = 'lokaui-colors'

// Pre-defined color schemes
export const colorSchemes = {
  'Teal & Indigo': {
    primary: { dark: '#0ea58e', light: '#0d9485' },
    secondary: { dark: '#6366f1', light: '#4f46e5' },
  },
  'Blue & Orange': {
    primary: { dark: '#3b82f6', light: '#2563eb' },
    secondary: { dark: '#f97316', light: '#ea580c' },
  },
  'Purple & Amber': {
    primary: { dark: '#8b5cf6', light: '#7c3aed' },
    secondary: { dark: '#f59e0b', light: '#d97706' },
  },
  'Rose & Cyan': {
    primary: { dark: '#f43f5e', light: '#e11d48' },
    secondary: { dark: '#06b6d4', light: '#0891b2' },
  },
  'Emerald & Violet': {
    primary: { dark: '#10b981', light: '#059669' },
    secondary: { dark: '#a78bfa', light: '#8b5cf6' },
  },
  'Sky & Rose': {
    primary: { dark: '#0ea5e9', light: '#0284c7' },
    secondary: { dark: '#fb7185', light: '#f43f5e' },
  },
  'Lime & Fuchsia': {
    primary: { dark: '#84cc16', light: '#65a30d' },
    secondary: { dark: '#d946ef', light: '#c026d3' },
  },
  'Amber & Indigo': {
    primary: { dark: '#f59e0b', light: '#d97706' },
    secondary: { dark: '#6366f1', light: '#4f46e5' },
  },
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  } : { r: 0, g: 0, b: 0 }
}

function lightenHex(hex, amount = 20) {
  const { r, g, b } = hexToRgb(hex)
  const lighten = (c) => Math.min(255, c + amount)
  return `#${lighten(r).toString(16).padStart(2, '0')}${lighten(g).toString(16).padStart(2, '0')}${lighten(b).toString(16).padStart(2, '0')}`
}

function darkenHex(hex, amount = 20) {
  const { r, g, b } = hexToRgb(hex)
  const darken = (c) => Math.max(0, c - amount)
  return `#${darken(r).toString(16).padStart(2, '0')}${darken(g).toString(16).padStart(2, '0')}${darken(b).toString(16).padStart(2, '0')}`
}

function isLightColor(hex) {
  const { r, g, b } = hexToRgb(hex)
  return (r * 299 + g * 587 + b * 114) / 1000 > 150
}

function buildColorTokens(primaryHex, secondaryHex, isDark) {
  const { r: pr, g: pg, b: pb } = hexToRgb(primaryHex)
  const { r: sr, g: sg, b: sb } = hexToRgb(secondaryHex)
  const primaryHover = isDark ? lightenHex(primaryHex, 18) : darkenHex(primaryHex, 18)
  const secondaryHover = isDark ? lightenHex(secondaryHex, 18) : darkenHex(secondaryHex, 18)
  const mutedOpacity = isDark ? 0.12 : 0.08
  const borderOpacity = 0.3

  return {
    '--accent': primaryHex,
    '--accent-hover': primaryHover,
    '--accent-muted': `rgba(${pr},${pg},${pb},${mutedOpacity})`,
    '--accent-text': isLightColor(primaryHex) ? '#09090b' : '#ffffff',
    '--border-accent': `rgba(${pr},${pg},${pb},${borderOpacity})`,
    '--glow': `rgba(${pr},${pg},${pb},0.06)`,
    '--secondary': secondaryHex,
    '--secondary-hover': secondaryHover,
    '--secondary-muted': `rgba(${sr},${sg},${sb},${mutedOpacity})`,
    '--secondary-text': isLightColor(secondaryHex) ? '#09090b' : '#ffffff',
    '--border-secondary': `rgba(${sr},${sg},${sb},${borderOpacity})`,
  }
}

function applyTokens(tokens) {
  const style = document.documentElement.style
  for (const [key, value] of Object.entries(tokens)) {
    style.setProperty(key, value)
  }
}

function applyMode(mode, customColors) {
  const tokens = mode === 'dark' ? { ...darkTokens } : { ...lightTokens }

  if (customColors) {
    const isDark = mode === 'dark'
    const primaryHex = isDark ? customColors.primary.dark : customColors.primary.light
    const secondaryHex = isDark ? customColors.secondary.dark : customColors.secondary.light
    Object.assign(tokens, buildColorTokens(primaryHex, secondaryHex, isDark))
  }

  applyTokens(tokens)
  if (mode === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    if (globalThis.window !== undefined) {
      return localStorage.getItem(STORAGE_KEY) || 'dark'
    }
    return 'dark'
  })

  const [customColors, setCustomColors] = useState(() => {
    if (globalThis.window !== undefined) {
      const saved = localStorage.getItem(COLORS_STORAGE_KEY)
      return saved ? JSON.parse(saved) : null
    }
    return null
  })

  useEffect(() => {
    applyMode(mode, customColors)
    localStorage.setItem(STORAGE_KEY, mode)
  }, [mode, customColors])

  const toggle = useCallback(() => {
    setMode(m => (m === 'dark' ? 'light' : 'dark'))
  }, [])

  const setColors = useCallback((colors) => {
    setCustomColors(colors)
    if (colors) {
      localStorage.setItem(COLORS_STORAGE_KEY, JSON.stringify(colors))
    } else {
      localStorage.removeItem(COLORS_STORAGE_KEY)
    }
  }, [])

  const value = useMemo(() => ({ mode, toggle, customColors, setColors }), [mode, toggle, customColors, setColors])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
