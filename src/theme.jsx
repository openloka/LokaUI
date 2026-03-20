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
  '--text-primary': '#fafafa',
  '--text-secondary': '#a1a1aa',
  '--text-tertiary': '#71717a',
  '--text-muted': '#52525b',
  '--accent': '#0ea58e',
  '--accent-hover': '#10b99b',
  '--accent-muted': 'rgba(14,165,142,0.12)',
  '--accent-text': '#022c22',
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
  '--text-primary': '#18181b',
  '--text-secondary': '#52525b',
  '--text-tertiary': '#71717a',
  '--text-muted': '#a1a1aa',
  '--accent': '#0d9485',
  '--accent-hover': '#0ea58e',
  '--accent-muted': 'rgba(14,165,142,0.08)',
  '--accent-text': '#ffffff',
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

function applyTokens(tokens) {
  const style = document.documentElement.style
  for (const [key, value] of Object.entries(tokens)) {
    style.setProperty(key, value)
  }
}

function applyMode(mode) {
  const tokens = mode === 'dark' ? darkTokens : lightTokens
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

  useEffect(() => {
    applyMode(mode)
    localStorage.setItem(STORAGE_KEY, mode)
  }, [mode])

  const toggle = useCallback(() => {
    setMode(m => (m === 'dark' ? 'light' : 'dark'))
  }, [])

  const value = useMemo(() => ({ mode, toggle }), [mode, toggle])

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
