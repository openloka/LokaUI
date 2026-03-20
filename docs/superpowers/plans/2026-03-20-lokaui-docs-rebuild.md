# LokaUI Docs Site Rebuild — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the LokaUI website from a Vite SPA landing page into a full documentation site with component docs, live previews, interactive props playground, multi-variant code display, and build-time SEO.

**Architecture:** Vite 6 + React 19 SPA with React Router v6. Tailwind CSS replaces inline styles. Docs pages use a split-view layout (preview left, code right) with platform-aware variant selector. Build-time SEO via generated sitemap and llms.txt.

**Tech Stack:** Vite 6, React 19, React Router v6, Tailwind CSS 4, Radix UI, Shiki, nuqs, @heroicons/react, GeistPixel/Geist Sans/Geist Mono fonts

**Spec:** `docs/superpowers/specs/2026-03-20-lokaui-docs-rebuild-design.md`

---

## Task 1: Install Dependencies & Configure Tailwind

**Files:**
- Modify: `package.json`
- Modify: `vite.config.js`
- Create: `tailwind.config.js`
- Create: `postcss.config.js`
- Modify: `src/styles.css`
- Modify: `index.html`

- [ ] **Step 1: Install core dependencies**

```bash
yarn add react-router-dom @radix-ui/react-dialog @radix-ui/react-tooltip @radix-ui/react-popover @radix-ui/react-toggle-group @heroicons/react shiki nuqs
```

- [ ] **Step 2: Install dev dependencies**

```bash
yarn add -D tailwindcss @tailwindcss/postcss postcss autoprefixer eslint prettier
```

- [ ] **Step 3: Create PostCSS config**

Create `postcss.config.js`:

```js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

- [ ] **Step 4: Create Tailwind config**

> **Note:** Tailwind v4 supports CSS-first config via `@theme` directives. If `tailwind.config.js` is not picked up, convert the config below to `@theme` blocks in `src/styles.css` instead. The `@tailwindcss/postcss` plugin supports both approaches.

Create `tailwind.config.js`:

```js
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
```

- [ ] **Step 5: Update `src/styles.css` with Tailwind directives**

Replace the top of `src/styles.css` (before the existing keyframes) with:

```css
@import 'tailwindcss';

/* Keep existing keyframes */
@keyframes loka-spin { /* ... existing ... */ }
@keyframes loka-marquee { /* ... existing ... */ }
@keyframes loka-glow { /* ... existing ... */ }
@keyframes loka-float { /* ... existing ... */ }
```

Keep the existing keyframe definitions and base resets. Remove any base element styles that Tailwind's preflight already handles (box-sizing, margin reset).

- [ ] **Step 6: Update `index.html` fonts**

Replace the existing Google Fonts links with GeistPixel, Geist Sans, and Geist Mono. GeistPixel is not on Google Fonts — download the woff2 from Vercel's release and place in `public/fonts/`. Add `@font-face` declarations to `src/styles.css`:

```css
@font-face {
  font-family: 'GeistPixel';
  src: url('/fonts/GeistPixel.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

For Geist Sans and Geist Mono, use the npm packages or CDN:
```html
<link rel="preconnect" href="https://cdn.jsdelivr.net" />
<link href="https://cdn.jsdelivr.net/npm/geist@1/dist/fonts/geist-sans/style.css" rel="stylesheet" />
<link href="https://cdn.jsdelivr.net/npm/geist@1/dist/fonts/geist-mono/style.css" rel="stylesheet" />
```

- [ ] **Step 7: Verify Tailwind works**

Run: `yarn dev`

Open the browser. The page should still render (existing inline styles are unaffected). Add a temporary `<p className="text-red-500">Tailwind works</p>` in `App.jsx` to confirm Tailwind classes compile.

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "feat: install dependencies and configure Tailwind CSS 4"
```

---

## Task 2: Theme System & Providers

**Files:**
- Modify: `src/theme.jsx` → refactor to use Tailwind dark mode (exports `useTheme` directly)
- Create: `src/components/common/ThemeToggle.jsx`
- Create: `src/components/layout/Providers.jsx`

- [ ] **Step 1: Refactor `src/theme.jsx` to Tailwind dark mode**

The existing `ThemeProvider` applies CSS variables via inline styles on a wrapper div. Refactor to:
1. Keep the CSS variable approach (Tailwind references them)
2. Toggle `.dark` class on `<html>` element instead of wrapper div
3. Store preference in `localStorage`

```jsx
import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

const darkTokens = {
  '--bg': '#09090b', '--bg-elevated': '#18181b', '--bg-hover': '#27272a',
  '--bg-card': '#111113', '--bg-input': '#1a1a1e', '--bg-overlay': 'rgba(0,0,0,0.6)',
  '--border': '#27272a', '--border-hover': '#3f3f46', '--border-accent': '#0ea58e33',
  '--text-primary': '#fafafa', '--text-secondary': '#a1a1aa',
  '--text-tertiary': '#71717a', '--text-muted': '#52525b',
  '--accent': '#0ea58e', '--accent-hover': '#10b99b',
  '--accent-muted': 'rgba(14,165,142,0.12)', '--accent-text': '#5eead4',
  '--green': '#22c55e', '--green-muted': 'rgba(34,197,94,0.12)',
  '--amber': '#f59e0b', '--amber-muted': 'rgba(245,158,11,0.12)',
  '--red': '#ef4444', '--red-muted': 'rgba(239,68,68,0.12)',
  '--blue': '#3b82f6', '--blue-muted': 'rgba(59,130,246,0.12)',
  '--purple': '#a855f7', '--purple-muted': 'rgba(168,85,247,0.12)',
  '--shadow': '0 1px 3px rgba(0,0,0,0.4)', '--glow': 'rgba(14,165,142,0.15)',
  '--toggle-bg': '#27272a', '--toggle-knob': '#fafafa', '--code-bg': '#0d0d12',
}

const lightTokens = {
  '--bg': '#fafaf9', '--bg-elevated': '#f5f5f4', '--bg-hover': '#e7e5e4',
  '--bg-card': '#ffffff', '--bg-input': '#f5f5f4', '--bg-overlay': 'rgba(0,0,0,0.3)',
  '--border': '#e7e5e4', '--border-hover': '#d6d3d1', '--border-accent': '#0d948533',
  '--text-primary': '#18181b', '--text-secondary': '#52525b',
  '--text-tertiary': '#71717a', '--text-muted': '#a1a1aa',
  '--accent': '#0d9485', '--accent-hover': '#0ea58e',
  '--accent-muted': 'rgba(13,148,133,0.1)', '--accent-text': '#0f766e',
  '--green': '#16a34a', '--green-muted': 'rgba(22,163,74,0.1)',
  '--amber': '#d97706', '--amber-muted': 'rgba(217,119,6,0.1)',
  '--red': '#dc2626', '--red-muted': 'rgba(220,38,38,0.1)',
  '--blue': '#2563eb', '--blue-muted': 'rgba(37,99,235,0.1)',
  '--purple': '#9333ea', '--purple-muted': 'rgba(147,51,234,0.1)',
  '--shadow': '0 1px 3px rgba(0,0,0,0.08)', '--glow': 'rgba(13,148,133,0.1)',
  '--toggle-bg': '#e7e5e4', '--toggle-knob': '#ffffff', '--code-bg': '#f5f5f4',
}

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('lokaui-theme') || 'dark'
    }
    return 'dark'
  })

  useEffect(() => {
    const root = document.documentElement
    const tokens = mode === 'dark' ? darkTokens : lightTokens

    if (mode === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }

    Object.entries(tokens).forEach(([key, value]) => {
      root.style.setProperty(key, value)
    })

    localStorage.setItem('lokaui-theme', mode)
  }, [mode])

  const toggle = () => setMode(m => m === 'dark' ? 'light' : 'dark')

  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
```

- [ ] **Step 2: Create `src/components/common/ThemeToggle.jsx`**

```jsx
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { useTheme } from '../../theme'

export default function ThemeToggle() {
  const { mode, toggle } = useTheme()

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-hover transition-colors"
      aria-label={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
    >
      {mode === 'dark' ? (
        <SunIcon className="w-5 h-5" />
      ) : (
        <MoonIcon className="w-5 h-5" />
      )}
    </button>
  )
}
```

- [ ] **Step 3: Create `src/components/layout/Providers.jsx`**

```jsx
import { BrowserRouter } from 'react-router-dom'
import { NuqsAdapter } from 'nuqs/adapters/react-router/v6'
import { ThemeProvider } from '../../theme'

export default function Providers({ children }) {
  return (
    <BrowserRouter>
      <NuqsAdapter>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </NuqsAdapter>
    </BrowserRouter>
  )
}
```

- [ ] **Step 4: Verify theme toggle works**

Run: `yarn dev`

Temporarily render `<ThemeToggle />` in the header. Click it — the page should switch between dark and light. CSS variables should update on `<html>`.

- [ ] **Step 5: Commit**

```bash
git add src/theme.jsx src/hooks/ src/components/common/ThemeToggle.jsx src/components/layout/Providers.jsx
git commit -m "feat: refactor theme system for Tailwind dark mode + add ThemeToggle"
```

---

## Task 3: Router & Layout Shell

**Files:**
- Modify: `src/main.jsx`
- Modify: `src/App.jsx`
- Create: `src/components/layout/SidebarLayout.jsx`
- Create: `src/components/navs/Sidebar.jsx`
- Create: `src/constants/Categories.js`
- Create: `src/constants/Site.js`
- Create: `src/pages/LandingPage.jsx`
- Create: `src/pages/CategoryPage.jsx`
- Create: `src/hooks/useActiveRoute.js`

- [ ] **Step 1: Create `src/constants/Site.js`**

```js
export const SITE = {
  name: 'LokaUI',
  description: 'An open source collection of high quality, accessible, and fully customizable UI components.',
  url: 'https://lokaui.dev',
  github: 'https://github.com/lokaui/lokaui',
  twitter: 'https://twitter.com/lokaui',
}
```

- [ ] **Step 2: Create `src/constants/Categories.js`**

```js
export const CATEGORIES = [
  {
    name: 'Get Started',
    slug: 'docs',
    isDoc: true,
    subcategories: [
      { name: 'Introduction', slug: 'getting-started' },
      { name: 'Installation', slug: 'installation' },
      { name: 'Theming', slug: 'theming' },
      { name: 'Variants Guide', slug: 'variants' },
    ],
  },
  {
    name: 'Foundations',
    slug: 'foundations',
    subcategories: [
      { name: 'Button', slug: 'button' },
      { name: 'Input', slug: 'input' },
      { name: 'Badge', slug: 'badge' },
      { name: 'Toggle', slug: 'toggle' },
    ],
  },
  {
    name: 'Overlays',
    slug: 'overlays',
    subcategories: [
      { name: 'Dialog', slug: 'dialog' },
      { name: 'Drawer', slug: 'drawer' },
      { name: 'Tooltip', slug: 'tooltip' },
      { name: 'Popover', slug: 'popover' },
    ],
  },
  {
    name: 'Data Display',
    slug: 'data-display',
    subcategories: [
      { name: 'Table', slug: 'table' },
      { name: 'Card', slug: 'card' },
      { name: 'Avatar', slug: 'avatar' },
      { name: 'Progress', slug: 'progress' },
    ],
  },
  {
    name: 'Navigation',
    slug: 'navigation',
    subcategories: [
      { name: 'Tabs', slug: 'tabs' },
      { name: 'Breadcrumb', slug: 'breadcrumb' },
      { name: 'Sidebar', slug: 'sidebar' },
      { name: 'Pagination', slug: 'pagination' },
    ],
  },
  {
    name: 'Forms',
    slug: 'forms',
    subcategories: [
      { name: 'Select', slug: 'select' },
      { name: 'Checkbox', slug: 'checkbox' },
      { name: 'Radio', slug: 'radio' },
      { name: 'Textarea', slug: 'textarea' },
    ],
  },
  {
    name: 'Feedback',
    slug: 'feedback',
    subcategories: [
      { name: 'Toast', slug: 'toast' },
      { name: 'Alert', slug: 'alert' },
      { name: 'Skeleton', slug: 'skeleton' },
      { name: 'Spinner', slug: 'spinner' },
    ],
  },
]

export const NEW = []
export const UPDATED = []
```

- [ ] **Step 3: Create `src/hooks/useActiveRoute.js`**

```js
import { useLocation } from 'react-router-dom'

export function useActiveRoute() {
  const { pathname } = useLocation()
  const segments = pathname.split('/').filter(Boolean)

  return {
    pathname,
    category: segments[0] || null,
    component: segments[1] || null,
    isActive: (path) => pathname === path,
    isInCategory: (slug) => segments[0] === slug,
  }
}
```

- [ ] **Step 4: Create `src/components/navs/Sidebar.jsx`**

```jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRightIcon, HeartIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid'
import { useActiveRoute } from '../../hooks/useActiveRoute'
import { CATEGORIES, NEW, UPDATED } from '../../constants/Categories'

export default function Sidebar() {
  const { isActive } = useActiveRoute()
  const [collapsed, setCollapsed] = useState({})
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('lokaui-favorites') || '[]')
    } catch { return [] }
  })

  const toggleSection = (name) => {
    setCollapsed(prev => ({ ...prev, [name]: !prev[name] }))
  }

  const toggleFavorite = (slug) => {
    setFavorites(prev => {
      const next = prev.includes(slug)
        ? prev.filter(f => f !== slug)
        : [...prev, slug]
      localStorage.setItem('lokaui-favorites', JSON.stringify(next))
      return next
    })
  }

  return (
    <nav className="w-64 h-full overflow-y-auto py-4 pr-4 border-r border-border">
      {CATEGORIES.map((cat) => (
        <div key={cat.name} className="mb-2">
          <button
            onClick={() => toggleSection(cat.name)}
            className="flex items-center justify-between w-full px-3 py-2 text-xs font-pixel uppercase tracking-wider text-text-muted hover:text-text-secondary transition-colors"
          >
            {cat.name}
            <ChevronRightIcon
              className={`w-3 h-3 transition-transform ${
                collapsed[cat.name] ? '' : 'rotate-90'
              }`}
            />
          </button>

          {!collapsed[cat.name] && (
            <ul className="mt-1 space-y-0.5">
              {cat.subcategories.map((sub) => {
                const path = cat.isDoc
                  ? `/docs/${sub.slug}`
                  : `/${cat.slug}/${sub.slug}`
                const active = isActive(path)
                const isFav = favorites.includes(sub.slug)

                return (
                  <li key={sub.slug}>
                    <Link
                      to={path}
                      className={`group flex items-center justify-between px-3 py-1.5 rounded-md text-sm transition-colors ${
                        active
                          ? 'bg-accent-muted text-accent border-l-2 border-accent'
                          : 'text-text-secondary hover:text-text-primary hover:bg-bg-hover'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {sub.name}
                        {NEW.includes(sub.name) && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-status-green-muted text-status-green font-mono">
                            NEW
                          </span>
                        )}
                        {UPDATED.includes(sub.name) && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-status-blue-muted text-status-blue font-mono">
                            UPD
                          </span>
                        )}
                      </span>
                      {!cat.isDoc && (
                        <button
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            toggleFavorite(sub.slug)
                          }}
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          {isFav ? (
                            <HeartSolidIcon className="w-3.5 h-3.5 text-red-400" />
                          ) : (
                            <HeartIcon className="w-3.5 h-3.5 text-text-muted" />
                          )}
                        </button>
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      ))}
    </nav>
  )
}
```

- [ ] **Step 5: Create `src/components/layout/SidebarLayout.jsx`**

```jsx
import { Outlet } from 'react-router-dom'
import Sidebar from '../navs/Sidebar'

export default function SidebarLayout() {
  return (
    <div className="flex min-h-screen pt-16">
      <aside className="hidden md:block fixed top-16 left-0 bottom-0 w-64 bg-bg">
        <Sidebar />
      </aside>
      <main className="flex-1 md:ml-64 px-6 py-8 max-w-5xl">
        <Outlet />
      </main>
    </div>
  )
}
```

- [ ] **Step 6: Extract landing page into `src/pages/LandingPage.jsx`**

Move the component tree from the current `App.jsx` (Header, Hero, Showcase, Marquee, Features, ComponentBrowser, CtaSection, Footer) into a new `LandingPage.jsx`:

```jsx
import Header from '../components/Header'
import Hero from '../components/Hero'
import Showcase from '../components/Showcase'
import Marquee from '../components/Marquee'
import Features from '../components/Features'
import ComponentBrowser from '../components/ComponentBrowser'
import CtaSection from '../components/CtaSection'
import Footer from '../components/Footer'

export default function LandingPage() {
  return (
    <>
      <Header />
      <Hero />
      <Showcase />
      <Marquee />
      <Features />
      <ComponentBrowser />
      <CtaSection />
      <Footer />
    </>
  )
}
```

- [ ] **Step 7: Create placeholder `src/pages/CategoryPage.jsx`**

```jsx
import { useParams } from 'react-router-dom'

export default function CategoryPage() {
  const { category, component } = useParams()

  return (
    <div className="text-text-primary">
      <h1 className="text-2xl font-pixel mb-4 capitalize">{component}</h1>
      <p className="text-text-secondary">Component documentation coming soon.</p>
    </div>
  )
}
```

- [ ] **Step 8: Rewrite `src/App.jsx` with router**

```jsx
import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Providers from './components/layout/Providers'

const LandingPage = lazy(() => import('./pages/LandingPage'))
const SidebarLayout = lazy(() => import('./components/layout/SidebarLayout'))
const CategoryPage = lazy(() => import('./pages/CategoryPage'))

function ScrollAnimator({ children }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target
            const delay = el.getAttribute('data-delay') || '0'
            el.style.transition = `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.12 }
    )

    document.querySelectorAll('[data-anim]').forEach((el) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(28px)'
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return children
}

function AppRoutes() {
  return (
    <ScrollAnimator>
      <Suspense fallback={<div className="min-h-screen bg-bg" />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route element={<SidebarLayout />}>
            <Route path="/docs/:slug" element={<CategoryPage />} />
            <Route path="/:category/:component" element={<CategoryPage />} />
          </Route>
        </Routes>
      </Suspense>
    </ScrollAnimator>
  )
}

export default function App() {
  return (
    <Providers>
      <AppRoutes />
    </Providers>
  )
}
```

- [ ] **Step 9: Update `src/main.jsx`**

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
```

- [ ] **Step 10: Verify routing works**

Run: `yarn dev`

- Visit `/` — landing page should render (still with inline styles)
- Visit `/foundations/button` — should show sidebar + placeholder CategoryPage
- Visit `/docs/getting-started` — should show sidebar + placeholder

- [ ] **Step 11: Commit**

```bash
git add -A
git commit -m "feat: add React Router, sidebar navigation, and layout shell"
```

---

## Task 4: Migrate Header to Tailwind

**Files:**
- Modify: `src/components/Header.jsx`

- [ ] **Step 1: Rewrite Header with Tailwind classes**

Replace all inline styles with Tailwind utility classes. Key changes:
- Fixed position → `fixed top-0 left-0 right-0 z-50`
- Backdrop blur on scroll → `backdrop-blur-md bg-bg/80` (conditional)
- Logo gradient → keep inline for complex gradient
- Nav links → `text-sm text-text-secondary hover:text-text-primary transition-colors`
- CTA button → `px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors`
- Import and use `ThemeToggle` component instead of inline sun/moon
- Import and use Heroicons instead of inline SVGs
- Replace `onMouseEnter`/`onMouseLeave` style mutations with Tailwind hover classes
- Use `font-pixel` for the logo text

```jsx
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from './common/ThemeToggle'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/80 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-teal-400 flex items-center justify-center">
            {/* Logo SVG icon */}
          </div>
          <span className="font-pixel text-text-primary text-sm">LokaUI</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/docs/getting-started" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
            Docs
          </Link>
          <Link to="/foundations/button" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
            Components
          </Link>
          <span className="text-sm text-text-muted cursor-not-allowed">Blocks</span>
          <span className="text-sm text-text-muted cursor-not-allowed">Themes</span>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            to="/docs/getting-started"
            className="px-4 py-2 bg-accent text-white text-sm rounded-lg hover:bg-accent-hover transition-colors font-medium"
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  )
}
```

- [ ] **Step 2: Verify header renders correctly**

Run: `yarn dev`

Check: Header renders with correct styling in both dark and light themes. Logo text uses pixel font. Theme toggle works. Nav links point to correct routes.

- [ ] **Step 3: Commit**

```bash
git add src/components/Header.jsx
git commit -m "refactor: migrate Header component to Tailwind CSS"
```

---

## Task 5: Migrate Landing Page Components to Tailwind

**Files:**
- Modify: `src/components/Hero.jsx`
- Modify: `src/components/Showcase.jsx`
- Modify: `src/components/Marquee.jsx`
- Modify: `src/components/Features.jsx`
- Modify: `src/components/ComponentBrowser.jsx`
- Modify: `src/components/CtaSection.jsx`
- Modify: `src/components/Footer.jsx`

This is a large task but mechanical — convert inline styles to Tailwind classes. Each component follows the same pattern.

- [ ] **Step 1: Migrate Hero.jsx**

Key conversions:
- `paddingTop: 'clamp(120px, 15vh, 200px)'` → keep as inline style (Tailwind can't do clamp with custom values easily)
- `textAlign: 'center'` → `text-center`
- `fontSize: 'clamp(...)'` → keep as inline for responsive clamp
- Gradient text → `bg-gradient-to-r from-accent to-teal-300 bg-clip-text text-transparent`
- Glow orbs → keep inline for absolute positioning with complex gradients
- CTA buttons → Tailwind button classes
- CLI snippet → `font-mono bg-code-bg rounded-lg`
- Replace emoji icons with Heroicons where applicable
- Use `font-pixel` for any heading text

- [ ] **Step 2: Migrate Showcase.jsx**

Key conversions:
- Grid layout → `grid grid-cols-1 lg:grid-cols-2 gap-6`
- Card styles → `bg-bg-card border border-border rounded-xl`
- Input focus states → Tailwind `focus:border-accent focus:ring-1 focus:ring-accent`
- Replace `onMouseEnter`/`onMouseLeave` handlers with `hover:` classes

- [ ] **Step 3: Migrate Marquee.jsx**

Key conversions:
- Container → `overflow-hidden`
- Keyword text → `font-mono text-xs uppercase tracking-wider text-text-muted`
- Animation → `animate-marquee` (custom animation from tailwind.config.js)
- Dot separator → `text-accent`

- [ ] **Step 4: Migrate Features.jsx**

Key conversions:
- Grid → `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`
- Feature card → `p-6 bg-bg-card border border-border rounded-xl hover:border-accent transition-colors`
- Replace emoji icons with Heroicons:
  - Accessible → `ShieldCheckIcon`
  - Dark-first → `MoonIcon`
  - Copy & paste → `ClipboardDocumentIcon`
  - Composable → `CubeTransparentIcon`
  - Tailwind → `SwatchIcon`
  - Motion → `SparklesIcon`

- [ ] **Step 5: Migrate ComponentBrowser.jsx**

Key conversions:
- Filter pills → `px-3 py-1.5 text-sm rounded-full` with active variant
- Component grid → `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`
- Component card → `bg-bg-card border border-border rounded-xl overflow-hidden hover:border-border-hover transition-colors`
- Status badges → badge utility classes with status colors
- Placeholder fallback → `border-2 border-dashed border-border`

- [ ] **Step 6: Migrate CtaSection.jsx and Footer.jsx**

CtaSection:
- Background → `bg-accent-muted`
- Glow → keep inline for absolute positioned gradient
- Buttons → same as Hero CTA buttons

Footer:
- Layout → `max-w-7xl mx-auto px-6 py-8 flex flex-wrap justify-between items-center`
- Links → `text-sm text-text-secondary hover:text-text-primary transition-colors`
- Copyright → `text-xs text-text-muted font-mono`

- [ ] **Step 7: Verify all landing page components render correctly**

Run: `yarn dev`

Check each section: Header, Hero, Showcase, Marquee, Features, ComponentBrowser, CtaSection, Footer. Both dark and light themes. Scroll animations still work.

- [ ] **Step 8: Commit**

```bash
git add src/components/
git commit -m "refactor: migrate all landing page components to Tailwind CSS"
```

---

## Task 6: Code Display System (Shiki + Variant Selector)

**Files:**
- Create: `src/components/code/CodeHighlighter.jsx`
- Create: `src/components/code/CodeOptions.jsx`
- Create: `src/components/code/CliInstallation.jsx`
- Create: `src/components/code/CodeExample.jsx`

- [ ] **Step 1: Create `src/components/code/CodeHighlighter.jsx`**

```jsx
import { useState, useEffect } from 'react'
import { createHighlighter } from 'shiki'

let highlighterPromise = null

function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ['one-dark-pro'],
      langs: ['jsx', 'tsx', 'css', 'php', 'bash'],
    })
  }
  return highlighterPromise
}

export default function CodeHighlighter({ code, lang = 'jsx' }) {
  const [html, setHtml] = useState('')

  useEffect(() => {
    let cancelled = false
    getHighlighter().then((highlighter) => {
      if (cancelled) return
      const result = highlighter.codeToHtml(code, {
        lang,
        theme: 'one-dark-pro',
      })
      setHtml(result)
    })
    return () => { cancelled = true }
  }, [code, lang])

  if (!html) {
    return (
      <pre className="p-4 bg-code-bg text-text-secondary font-mono text-sm overflow-x-auto">
        <code>{code}</code>
      </pre>
    )
  }

  return (
    <div
      className="p-4 overflow-x-auto text-sm [&_pre]:!bg-transparent [&_code]:font-mono"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
```

- [ ] **Step 2: Create `src/components/code/CodeOptions.jsx`**

```jsx
export default function CodeOptions({ platform, lang, style, onLangChange, onStyleChange }) {
  if (platform === 'laravel') {
    return (
      <span className="text-xs text-text-muted font-mono px-2 py-1 bg-bg-elevated rounded">
        HTML-TW
      </span>
    )
  }

  if (platform === 'react-native') {
    return (
      <div className="flex gap-1 bg-bg-elevated rounded-md p-0.5">
        {['TW', 'StyleSheet'].map((s) => (
          <button
            key={s}
            onClick={() => onStyleChange(s === 'TW' ? 'tw' : 'stylesheet')}
            className={`px-2 py-0.5 text-xs rounded transition-colors ${
              (s === 'TW' && style === 'tw') || (s === 'StyleSheet' && style === 'stylesheet')
                ? 'bg-accent/20 text-accent'
                : 'text-text-muted hover:text-text-secondary'
            }`}
          >
            {s}
          </button>
        ))}
      </div>
    )
  }

  // React platform: [JS|TS] × [CSS|TW]
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1 bg-bg-elevated rounded-md p-0.5">
        {['JS', 'TS'].map((l) => (
          <button
            key={l}
            onClick={() => onLangChange(l.toLowerCase())}
            className={`px-2 py-0.5 text-xs rounded transition-colors ${
              lang === l.toLowerCase()
                ? 'bg-accent/20 text-accent'
                : 'text-text-muted hover:text-text-secondary'
            }`}
          >
            {l}
          </button>
        ))}
      </div>
      <div className="flex gap-1 bg-bg-elevated rounded-md p-0.5">
        {['CSS', 'TW'].map((s) => (
          <button
            key={s}
            onClick={() => onStyleChange(s.toLowerCase())}
            className={`px-2 py-0.5 text-xs rounded transition-colors ${
              style === s.toLowerCase()
                ? 'bg-accent/20 text-accent'
                : 'text-text-muted hover:text-text-secondary'
            }`}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  )
}
```

- [ ] **Step 3: Create `src/components/code/CliInstallation.jsx`**

```jsx
import { useState } from 'react'
import { CommandLineIcon, ClipboardIcon, CheckIcon } from '@heroicons/react/24/outline'

export default function CliInstallation({ componentName }) {
  const [copied, setCopied] = useState(false)
  const command = `npx shadcn@latest add @lokaui/${componentName}`

  const copy = () => {
    navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex items-center gap-3 px-5 py-2 bg-code-bg border-y border-border">
      <CommandLineIcon className="w-4 h-4 text-text-muted flex-shrink-0" />
      <code className="text-accent text-sm font-mono flex-1">{command}</code>
      <button
        onClick={copy}
        className="flex items-center gap-1.5 text-text-muted hover:text-text-secondary transition-colors"
      >
        {copied ? (
          <CheckIcon className="w-4 h-4 text-status-green" />
        ) : (
          <ClipboardIcon className="w-4 h-4" />
        )}
        <span className="text-xs">{copied ? 'Copied' : 'Copy'}</span>
      </button>
    </div>
  )
}
```

- [ ] **Step 4: Create `src/components/code/CodeExample.jsx`**

This is the main split-view component:

```jsx
import { useState, useEffect } from 'react'
import { EyeIcon, CodeBracketIcon, ClipboardIcon, CheckIcon, ArrowPathIcon } from '@heroicons/react/24/outline'
import CodeHighlighter from './CodeHighlighter'
import CodeOptions from './CodeOptions'

export default function CodeExample({ variants, platforms, preview: PreviewComponent, componentProps, onResetProps }) {
  const [platform, setPlatform] = useState('react')
  const [lang, setLang] = useState('js')
  const [style, setStyle] = useState('tw')
  const [code, setCode] = useState('')
  const [copied, setCopied] = useState(false)

  // Determine current variant key
  const getVariantKey = () => {
    if (platform === 'laravel') return 'HTML-TW'
    if (platform === 'react-native') {
      return style === 'tw' ? 'RN-TW' : 'RN-StyleSheet'
    }
    return `${lang.toUpperCase()}-${style.toUpperCase()}`
  }

  // Load code for current variant
  useEffect(() => {
    const key = getVariantKey()
    if (variants[key]) {
      variants[key]().then((mod) => setCode(mod.default || mod))
    } else {
      setCode(`// Variant "${key}" not available yet`)
    }
  }, [platform, lang, style])

  const getLang = () => {
    if (platform === 'laravel') return 'php'
    if (lang === 'ts' || platform === 'react-native') return 'tsx'
    return 'jsx'
  }

  const copyCode = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const availablePlatforms = Object.keys(platforms)

  return (
    <div className="border border-border rounded-xl overflow-hidden bg-bg-card">
      {/* Platform tabs */}
      {availablePlatforms.length > 1 && (
        <div className="flex items-center justify-end px-5 py-2 border-b border-border">
          <div className="flex gap-0.5 bg-bg-elevated rounded-md p-0.5">
            {availablePlatforms.map((p) => (
              <button
                key={p}
                onClick={() => setPlatform(p)}
                className={`px-3 py-1 text-xs rounded capitalize transition-colors ${
                  platform === p
                    ? 'bg-accent/20 text-accent font-semibold'
                    : 'text-text-muted hover:text-text-secondary'
                }`}
              >
                {p === 'react-native' ? 'React Native' : p.charAt(0).toUpperCase() + p.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Split view */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[280px]">
        {/* Left: Preview */}
        <div className="border-b lg:border-b-0 lg:border-r border-border flex flex-col">
          <div className="flex items-center justify-between px-4 py-2 border-b border-border">
            <div className="flex items-center gap-1.5">
              <EyeIcon className="w-3.5 h-3.5 text-text-muted" />
              <span className="text-[8px] font-pixel uppercase tracking-widest text-text-muted">
                Preview
              </span>
            </div>
            {onResetProps && (
              <button
                onClick={onResetProps}
                className="flex items-center gap-1 text-text-muted hover:text-text-secondary transition-colors"
              >
                <ArrowPathIcon className="w-3.5 h-3.5" />
                <span className="text-xs">Reset</span>
              </button>
            )}
          </div>
          <div className="flex-1 flex items-center justify-center p-6 bg-bg">
            {PreviewComponent && <PreviewComponent {...componentProps} />}
          </div>
        </div>

        {/* Right: Code */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between px-4 py-2 border-b border-border">
            <div className="flex items-center gap-1.5">
              <CodeBracketIcon className="w-3.5 h-3.5 text-text-muted" />
              <span className="text-[8px] font-pixel uppercase tracking-widest text-text-muted">
                Code
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CodeOptions
                platform={platform}
                lang={lang}
                style={style}
                onLangChange={setLang}
                onStyleChange={setStyle}
              />
              <button
                onClick={copyCode}
                className="text-text-muted hover:text-text-secondary transition-colors"
              >
                {copied ? (
                  <CheckIcon className="w-4 h-4 text-status-green" />
                ) : (
                  <ClipboardIcon className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-auto bg-code-bg">
            <CodeHighlighter code={code} lang={getLang()} />
          </div>
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 5: Verify code display renders**

Temporarily import `CodeHighlighter` in `CategoryPage` with a hardcoded code string. Check that Shiki highlights correctly.

- [ ] **Step 6: Commit**

```bash
git add src/components/code/
git commit -m "feat: add code display system with Shiki highlighting and variant selector"
```

---

## Task 7: Props Playground & API Reference

**Files:**
- Create: `src/components/common/PropsPlayground.jsx`
- Create: `src/components/common/PropTable.jsx`
- Create: `src/hooks/useComponentProps.js`

- [ ] **Step 1: Create `src/hooks/useComponentProps.js`**

```js
import { useState, useCallback } from 'react'
import { useQueryStates, parseAsString, parseAsBoolean, parseAsInteger } from 'nuqs'

function createParser(defaultValue) {
  if (typeof defaultValue === 'boolean') return parseAsBoolean.withDefault(defaultValue)
  if (typeof defaultValue === 'number') return parseAsInteger.withDefault(defaultValue)
  return parseAsString.withDefault(defaultValue)
}

export function useComponentProps(defaultProps) {
  const parsers = {}
  for (const [key, value] of Object.entries(defaultProps)) {
    parsers[key] = createParser(value)
  }

  const [queryState, setQueryState] = useQueryStates(parsers)

  const props = { ...defaultProps, ...queryState }

  const updateProp = useCallback((key, value) => {
    setQueryState({ [key]: value === defaultProps[key] ? null : value })
  }, [defaultProps, setQueryState])

  const resetProps = useCallback(() => {
    const nulled = {}
    for (const key of Object.keys(defaultProps)) {
      nulled[key] = null
    }
    setQueryState(nulled)
  }, [defaultProps, setQueryState])

  return { props, updateProp, resetProps }
}
```

- [ ] **Step 2: Create `src/components/common/PropsPlayground.jsx`**

```jsx
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'

export default function PropsPlayground({ propDefs, currentProps, onUpdate }) {
  return (
    <div className="border-t border-border">
      <div className="flex items-center gap-1.5 px-5 py-2 border-b border-border">
        <AdjustmentsHorizontalIcon className="w-3.5 h-3.5 text-text-muted" />
        <span className="text-[8px] font-pixel uppercase tracking-widest text-text-muted">
          Props Playground
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
        {propDefs.map((prop) => (
          <div key={prop.name}>
            <label className="block text-xs text-text-muted mb-1.5 font-mono">
              {prop.name}
            </label>
            {prop.type === 'enum' && (
              <div className="flex flex-wrap gap-1">
                {prop.options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => onUpdate(prop.name, opt)}
                    className={`px-2.5 py-1 text-xs rounded transition-colors ${
                      currentProps[prop.name] === opt
                        ? 'bg-accent/20 text-accent border border-accent/30'
                        : 'text-text-secondary border border-border hover:border-border-hover'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
            {prop.type === 'boolean' && (
              <div className="flex gap-1">
                {[true, false].map((val) => (
                  <button
                    key={String(val)}
                    onClick={() => onUpdate(prop.name, val)}
                    className={`px-2.5 py-1 text-xs rounded transition-colors ${
                      currentProps[prop.name] === val
                        ? 'bg-accent/20 text-accent border border-accent/30'
                        : 'text-text-secondary border border-border hover:border-border-hover'
                    }`}
                  >
                    {String(val)}
                  </button>
                ))}
              </div>
            )}
            {prop.type === 'string' && (
              <input
                type="text"
                value={currentProps[prop.name] || ''}
                onChange={(e) => onUpdate(prop.name, e.target.value)}
                className="w-full px-2 py-1 text-xs bg-bg-input border border-border rounded text-text-primary focus:border-accent focus:outline-none"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
```

- [ ] **Step 3: Create `src/components/common/PropTable.jsx`**

```jsx
import { Bars3BottomLeftIcon } from '@heroicons/react/24/outline'

export default function PropTable({ propDefs }) {
  return (
    <div className="border-t border-border">
      <div className="flex items-center gap-1.5 px-5 py-2 border-b border-border">
        <Bars3BottomLeftIcon className="w-3.5 h-3.5 text-text-muted" />
        <span className="text-[8px] font-pixel uppercase tracking-widest text-text-muted">
          API Reference
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left px-5 py-3 text-xs font-semibold text-text-muted">Prop</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-text-muted">Type</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-text-muted">Default</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-text-muted">Description</th>
            </tr>
          </thead>
          <tbody>
            {propDefs.map((prop) => (
              <tr key={prop.name} className="border-b border-border/50">
                <td className="px-5 py-2.5 font-mono text-xs text-red-400">{prop.name}</td>
                <td className="px-5 py-2.5 font-mono text-xs text-amber-400">
                  {prop.type === 'enum' ? prop.options.map(o => `'${o}'`).join(' | ') : prop.type}
                </td>
                <td className="px-5 py-2.5 font-mono text-xs text-green-400">
                  {typeof prop.default === 'string' ? `'${prop.default}'` : String(prop.default)}
                </td>
                <td className="px-5 py-2.5 text-xs text-text-muted">{prop.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
```

- [ ] **Step 4: Commit**

```bash
git add src/components/common/PropsPlayground.jsx src/components/common/PropTable.jsx src/hooks/useComponentProps.js
git commit -m "feat: add interactive props playground and API reference table"
```

---

## Task 8: Button Component — All 7 Variants (Reference Implementation)

**Files:**
- Create: `src/content/Foundations/Button/react/Button.jsx`
- Create: `src/content/Foundations/Button/react/Button.css`
- Create: `src/content/Foundations/Button/react/Button.tw.jsx`
- Create: `src/content/Foundations/Button/react/Button.tsx`
- Create: `src/content/Foundations/Button/react/Button.tw.tsx`
- Create: `src/content/Foundations/Button/laravel/button.blade.php`
- Create: `src/content/Foundations/Button/react-native/Button.tw.tsx`
- Create: `src/content/Foundations/Button/react-native/Button.stylesheet.tsx`
- Create: `src/content/Foundations/Button/index.js`
- Create: `src/content/Foundations/Button/info.js`
- Create: `src/previews/ButtonPreview.jsx` (update existing)

- [ ] **Step 1: Create `src/content/Foundations/Button/info.js`**

```js
export const info = {
  name: 'Button',
  description: 'A versatile button component with multiple variants, sizes, and states. Supports icons, loading state, and full accessibility.',
  category: 'Foundations',
  status: 'stable',
  tags: ['button', 'action', 'click', 'submit'],
  props: [
    {
      name: 'variant',
      type: 'enum',
      options: ['primary', 'secondary', 'ghost'],
      default: 'primary',
      description: 'Visual style of the button',
    },
    {
      name: 'size',
      type: 'enum',
      options: ['sm', 'md', 'lg'],
      default: 'md',
      description: 'Size of the button',
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: false,
      description: 'Whether the button is disabled',
    },
    {
      name: 'loading',
      type: 'boolean',
      default: false,
      description: 'Shows spinner and disables interaction',
    },
  ],
}
```

- [ ] **Step 2: Create `src/content/Foundations/Button/index.js`**

```js
export const variants = {
  'JS-CSS':        () => import('./react/Button.jsx?raw'),
  'JS-TW':         () => import('./react/Button.tw.jsx?raw'),
  'TS-CSS':        () => import('./react/Button.tsx?raw'),
  'TS-TW':         () => import('./react/Button.tw.tsx?raw'),
  'HTML-TW':       () => import('./laravel/button.blade.php?raw'),
  'RN-TW':         () => import('./react-native/Button.tw.tsx?raw'),
  'RN-StyleSheet': () => import('./react-native/Button.stylesheet.tsx?raw'),
}

export const platforms = {
  react:          ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
  laravel:        ['HTML-TW'],
  'react-native': ['RN-TW', 'RN-StyleSheet'],
}

export { info } from './info'
```

- [ ] **Step 3: Create JS-CSS variant `src/content/Foundations/Button/react/Button.jsx`**

```jsx
import './Button.css'

export default function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  children,
  ...props
}) {
  return (
    <button
      className={`loka-btn loka-btn--${variant} loka-btn--${size}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <span className="loka-btn__spinner" />}
      {children}
    </button>
  )
}
```

- [ ] **Step 4: Create CSS for JS-CSS variant `src/content/Foundations/Button/react/Button.css`**

```css
.loka-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 500;
  border-radius: 0.5rem;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s;
  cursor: pointer;
  border: 1px solid transparent;
}
.loka-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Variants */
.loka-btn--primary {
  background-color: var(--accent);
  color: #fff;
}
.loka-btn--primary:hover:not(:disabled) {
  background-color: var(--accent-hover);
}
.loka-btn--secondary {
  background-color: transparent;
  border-color: var(--border);
  color: var(--text-primary);
}
.loka-btn--secondary:hover:not(:disabled) {
  background-color: var(--bg-hover);
  border-color: var(--border-hover);
}
.loka-btn--ghost {
  background-color: transparent;
  color: var(--text-primary);
}
.loka-btn--ghost:hover:not(:disabled) {
  background-color: var(--bg-hover);
}

/* Sizes */
.loka-btn--sm { padding: 0.375rem 0.75rem; font-size: 0.75rem; }
.loka-btn--md { padding: 0.5rem 1rem; font-size: 0.875rem; }
.loka-btn--lg { padding: 0.625rem 1.5rem; font-size: 1rem; }

/* Spinner */
.loka-btn__spinner {
  width: 1em;
  height: 1em;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: loka-spin 0.6s linear infinite;
}
```

- [ ] **Step 5: Create JS-TW variant `src/content/Foundations/Button/react/Button.tw.jsx`**

```jsx
export default function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  children,
  ...props
}) {
  const base = 'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-colors cursor-pointer border border-transparent disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-accent text-white hover:bg-accent-hover',
    secondary: 'bg-transparent border-border text-text-primary hover:bg-bg-hover hover:border-border-hover',
    ghost: 'bg-transparent text-text-primary hover:bg-bg-hover',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-2.5 text-base',
  }

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <span className="w-[1em] h-[1em] border-2 border-current border-r-transparent rounded-full animate-spin" />
      )}
      {children}
    </button>
  )
}
```

- [ ] **Step 6: Create TS-CSS variant `src/content/Foundations/Button/react/Button.tsx`**

Same as `Button.jsx` but with TypeScript types:

```tsx
import './Button.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
}

export default function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`loka-btn loka-btn--${variant} loka-btn--${size}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <span className="loka-btn__spinner" />}
      {children}
    </button>
  )
}
```

- [ ] **Step 7: Create TS-TW variant `src/content/Foundations/Button/react/Button.tw.tsx`**

Same as `Button.tw.jsx` but with TypeScript types (add `ButtonProps` interface).

- [ ] **Step 8: Create Laravel variant `src/content/Foundations/Button/laravel/button.blade.php`**

```php
@props([
    'variant' => 'primary',
    'size' => 'md',
    'disabled' => false,
    'loading' => false,
])

@php
$base = 'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-colors cursor-pointer border border-transparent disabled:opacity-50 disabled:cursor-not-allowed';

$variants = [
    'primary' => 'bg-accent text-white hover:bg-accent-hover',
    'secondary' => 'bg-transparent border-border text-text-primary hover:bg-bg-hover hover:border-border-hover',
    'ghost' => 'bg-transparent text-text-primary hover:bg-bg-hover',
];

$sizes = [
    'sm' => 'px-3 py-1.5 text-xs',
    'md' => 'px-4 py-2 text-sm',
    'lg' => 'px-6 py-2.5 text-base',
];
@endphp

<button
    {{ $attributes->merge(['class' => "$base {$variants[$variant]} {$sizes[$size]}"]) }}
    @disabled($disabled || $loading)
>
    @if($loading)
        <span class="w-[1em] h-[1em] border-2 border-current border-r-transparent rounded-full animate-spin"></span>
    @endif
    {{ $slot }}
</button>
```

- [ ] **Step 9: Create RN-TW variant `src/content/Foundations/Button/react-native/Button.tw.tsx`**

```tsx
import { Pressable, Text, ActivityIndicator } from 'react-native'
import { styled } from 'nativewind'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  children: string
  onPress?: () => void
}

export default function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  children,
  onPress,
}: ButtonProps) {
  const variants = {
    primary: 'bg-teal-600 border-transparent',
    secondary: 'bg-transparent border-zinc-700',
    ghost: 'bg-transparent border-transparent',
  }

  const textVariants = {
    primary: 'text-white',
    secondary: 'text-zinc-100',
    ghost: 'text-zinc-100',
  }

  const sizes = {
    sm: 'px-3 py-1.5',
    md: 'px-4 py-2',
    lg: 'px-6 py-3',
  }

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  }

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      className={`flex-row items-center justify-center gap-2 rounded-lg border ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50' : ''}`}
    >
      {loading && <ActivityIndicator size="small" color="currentColor" />}
      <Text className={`font-medium ${textVariants[variant]} ${textSizes[size]}`}>
        {children}
      </Text>
    </Pressable>
  )
}
```

- [ ] **Step 10: Create RN-StyleSheet variant `src/content/Foundations/Button/react-native/Button.stylesheet.tsx`**

```tsx
import { Pressable, Text, ActivityIndicator, StyleSheet } from 'react-native'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  children: string
  onPress?: () => void
}

export default function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  children,
  onPress,
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        styles.base,
        styles[`variant_${variant}`],
        styles[`size_${size}`],
        disabled && styles.disabled,
      ]}
    >
      {loading && <ActivityIndicator size="small" color="currentColor" />}
      <Text style={[styles.text, styles[`text_${variant}`], styles[`textSize_${size}`]]}>
        {children}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  disabled: { opacity: 0.5 },
  variant_primary: { backgroundColor: '#0ea58e' },
  variant_secondary: { backgroundColor: 'transparent', borderColor: '#27272a' },
  variant_ghost: { backgroundColor: 'transparent' },
  text: { fontWeight: '500' },
  text_primary: { color: '#ffffff' },
  text_secondary: { color: '#fafafa' },
  text_ghost: { color: '#fafafa' },
  size_sm: { paddingHorizontal: 12, paddingVertical: 6 },
  size_md: { paddingHorizontal: 16, paddingVertical: 8 },
  size_lg: { paddingHorizontal: 24, paddingVertical: 12 },
  textSize_sm: { fontSize: 12 },
  textSize_md: { fontSize: 14 },
  textSize_lg: { fontSize: 16 },
})
```

- [ ] **Step 11: Update `src/previews/ButtonPreview.jsx`**

Refactor the existing `ButtonPreview` to accept props from the playground:

```jsx
export default function ButtonPreview({ variant = 'primary', size = 'md', disabled = false, loading = false }) {
  const base = 'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-colors cursor-pointer border border-transparent disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-accent text-white hover:bg-accent-hover',
    secondary: 'bg-transparent border-border text-text-primary hover:bg-bg-hover',
    ghost: 'bg-transparent text-text-primary hover:bg-bg-hover',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-2.5 text-base',
  }

  return (
    <div className="flex flex-wrap gap-3 items-center justify-center">
      <button
        className={`${base} ${variants[variant]} ${sizes[size]}`}
        disabled={disabled || loading}
      >
        {loading && (
          <span className="w-[1em] h-[1em] border-2 border-current border-r-transparent rounded-full animate-spin" />
        )}
        {variant.charAt(0).toUpperCase() + variant.slice(1)}
      </button>
    </div>
  )
}
```

- [ ] **Step 12: Commit**

```bash
git add src/content/ src/previews/ButtonPreview.jsx
git commit -m "feat: add Button component with all 7 variants (reference implementation)"
```

---

## Task 9: Wire Up CategoryPage (Full Component Doc Page)

**Files:**
- Modify: `src/pages/CategoryPage.jsx`
- Create: `src/constants/Information.js`

- [ ] **Step 1: Create `src/constants/Information.js`**

Registry mapping component slugs to their content modules:

```js
export const COMPONENT_MAP = {
  button: () => import('../content/Foundations/Button'),
}

export const PREVIEW_MAP = {
  button: () => import('../previews/ButtonPreview'),
}
```

This will grow as more components are added.

- [ ] **Step 2: Rewrite `src/pages/CategoryPage.jsx`**

```jsx
import { useState, useEffect, lazy, Suspense } from 'react'
import { useParams } from 'react-router-dom'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import CodeExample from '../components/code/CodeExample'
import CliInstallation from '../components/code/CliInstallation'
import PropsPlayground from '../components/common/PropsPlayground'
import PropTable from '../components/common/PropTable'
import { useComponentProps } from '../hooks/useComponentProps'
import { COMPONENT_MAP, PREVIEW_MAP } from '../constants/Information'

export default function CategoryPage() {
  const { category, component } = useParams()
  const slug = component || category

  const [componentData, setComponentData] = useState(null)
  const [PreviewComponent, setPreviewComponent] = useState(null)
  const [loading, setLoading] = useState(true)

  // Load component data
  useEffect(() => {
    setLoading(true)
    const loader = COMPONENT_MAP[slug]
    const previewLoader = PREVIEW_MAP[slug]

    if (!loader) {
      setLoading(false)
      return
    }

    Promise.all([
      loader(),
      previewLoader ? previewLoader() : Promise.resolve(null),
    ]).then(([mod, previewMod]) => {
      setComponentData(mod)
      if (previewMod) {
        setPreviewComponent(() => previewMod.default)
      }
      setLoading(false)
    })
  }, [slug])

  if (loading) {
    return <div className="animate-pulse h-96 bg-bg-elevated rounded-xl" />
  }

  if (!componentData) {
    return (
      <div className="text-text-primary">
        <h1 className="text-2xl font-pixel mb-4 capitalize">{slug}</h1>
        <p className="text-text-secondary">Documentation coming soon.</p>
      </div>
    )
  }

  const { variants, platforms, info } = componentData

  return <ComponentDocPage
    info={info}
    variants={variants}
    platforms={platforms}
    PreviewComponent={PreviewComponent}
    category={category}
  />
}

function ComponentDocPage({ info, variants, platforms, PreviewComponent, category }) {
  const defaultProps = {}
  info.props.forEach((p) => { defaultProps[p.name] = p.default })

  const { props: currentProps, updateProp, resetProps } = useComponentProps(defaultProps)

  const statusColors = {
    stable: 'text-status-green border-status-green/30 bg-status-green-muted',
    beta: 'text-status-purple border-status-purple/30 bg-status-purple-muted',
    new: 'text-status-amber border-status-amber/30 bg-status-amber-muted',
  }

  return (
    <div>
      {/* Breadcrumb + status */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-1.5 text-sm">
          <span className="text-text-muted capitalize">{category}</span>
          <ChevronRightIcon className="w-3.5 h-3.5 text-text-muted" />
          <span className="font-pixel text-text-primary">{info.name}</span>
          <span className={`ml-2 text-[10px] px-1.5 py-0.5 rounded border ${statusColors[info.status]}`}>
            {info.status}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-text-secondary text-sm mb-4">{info.description}</p>

      {/* CLI install */}
      <CliInstallation componentName={info.name.toLowerCase()} />

      {/* Split view */}
      <div className="mt-4">
        <CodeExample
          variants={variants}
          platforms={platforms}
          preview={PreviewComponent}
          componentProps={currentProps}
          onResetProps={resetProps}
        />
      </div>

      {/* Props playground */}
      <div className="mt-4 border border-border rounded-xl overflow-hidden bg-bg-card">
        <PropsPlayground
          propDefs={info.props}
          currentProps={currentProps}
          onUpdate={updateProp}
        />
        <PropTable propDefs={info.props} />
      </div>
    </div>
  )
}
```

- [ ] **Step 3: Verify full component doc page works**

Run: `yarn dev`

Navigate to `/foundations/button`. Should see:
- Breadcrumb: Foundations > Button (stable)
- CLI install bar
- Split view: Preview on left, code on right
- Variant selector: JS/TS × CSS/TW toggles
- Platform tabs: React / Laravel / React Native
- Props playground with interactive controls
- API reference table

- [ ] **Step 4: Commit**

```bash
git add src/pages/CategoryPage.jsx src/constants/Information.js
git commit -m "feat: wire up full component doc page with split view and props playground"
```

---

## Task 10: Port Remaining 23 Components (React Variants Only)

**Files:**
- Create: `src/content/<Category>/<Component>/react/` (4 files each)
- Create: `src/content/<Category>/<Component>/index.js`
- Create: `src/content/<Category>/<Component>/info.js`
- Modify: `src/constants/Information.js`
- Modify: `src/previews/` (update existing previews to accept props)

For each component, follow the Button pattern but with only 4 React variants (JS-CSS, JS-TW, TS-CSS, TS-TW). No Laravel or React Native variants yet.

Components to port (grouped by category):

**Foundations:** Input, Badge, Toggle
**Overlays:** Dialog, Drawer, Tooltip, Popover
**Data Display:** Table, Card, Avatar, Progress
**Navigation:** Tabs, Breadcrumb, Sidebar, Pagination
**Forms:** Select, Checkbox, Radio, Textarea
**Feedback:** Toast, Alert, Skeleton, Spinner

- [ ] **Step 1: Create a scaffold script `scripts/generateComponent.js`**

```js
import { writeFileSync, mkdirSync } from 'fs'

const name = process.argv[2]
const category = process.argv[3]
if (!name || !category) {
  console.error('Usage: node scripts/generateComponent.js <ComponentName> <Category>')
  process.exit(1)
}

const dir = `src/content/${category}/${name}`
mkdirSync(`${dir}/react`, { recursive: true })

// info.js
writeFileSync(`${dir}/info.js`, `export const info = {
  name: '${name}',
  description: 'TODO: Add description',
  category: '${category}',
  status: 'stable',
  tags: ['${name.toLowerCase()}'],
  props: [],
}
`)

// index.js
writeFileSync(`${dir}/index.js`, `export const variants = {
  'JS-CSS':  () => import('./react/${name}.jsx?raw'),
  'JS-TW':   () => import('./react/${name}.tw.jsx?raw'),
  'TS-CSS':  () => import('./react/${name}.tsx?raw'),
  'TS-TW':   () => import('./react/${name}.tw.tsx?raw'),
}

export const platforms = {
  react: ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
}

export { info } from './info'
`)

// Placeholder component files
const placeholder = `export default function ${name}() {\n  return <div>${name} component</div>\n}\n`
writeFileSync(`${dir}/react/${name}.jsx`, placeholder)
writeFileSync(`${dir}/react/${name}.tw.jsx`, placeholder)
writeFileSync(`${dir}/react/${name}.tsx`, placeholder)
writeFileSync(`${dir}/react/${name}.tw.tsx`, placeholder)

console.log(`Created ${dir}/`)
```

- [ ] **Step 2: Scaffold all 23 remaining components**

Run the script for each component:

```bash
node scripts/generateComponent.js Input Foundations
node scripts/generateComponent.js Badge Foundations
node scripts/generateComponent.js Toggle Foundations
node scripts/generateComponent.js Dialog Overlays
node scripts/generateComponent.js Drawer Overlays
node scripts/generateComponent.js Tooltip Overlays
node scripts/generateComponent.js Popover Overlays
node scripts/generateComponent.js Table DataDisplay
node scripts/generateComponent.js Card DataDisplay
node scripts/generateComponent.js Avatar DataDisplay
node scripts/generateComponent.js Progress DataDisplay
node scripts/generateComponent.js Tabs Navigation
node scripts/generateComponent.js Breadcrumb Navigation
node scripts/generateComponent.js Sidebar Navigation
node scripts/generateComponent.js Pagination Navigation
node scripts/generateComponent.js Select Forms
node scripts/generateComponent.js Checkbox Forms
node scripts/generateComponent.js Radio Forms
node scripts/generateComponent.js Textarea Forms
node scripts/generateComponent.js Toast Feedback
node scripts/generateComponent.js Alert Feedback
node scripts/generateComponent.js Skeleton Feedback
node scripts/generateComponent.js Spinner Feedback
```

- [ ] **Step 3: Update `src/constants/Information.js` with all components**

Add entries for all 24 components:

```js
export const COMPONENT_MAP = {
  button: () => import('../content/Foundations/Button'),
  input: () => import('../content/Foundations/Input'),
  badge: () => import('../content/Foundations/Badge'),
  toggle: () => import('../content/Foundations/Toggle'),
  dialog: () => import('../content/Overlays/Dialog'),
  drawer: () => import('../content/Overlays/Drawer'),
  tooltip: () => import('../content/Overlays/Tooltip'),
  popover: () => import('../content/Overlays/Popover'),
  table: () => import('../content/DataDisplay/Table'),
  card: () => import('../content/DataDisplay/Card'),
  avatar: () => import('../content/DataDisplay/Avatar'),
  progress: () => import('../content/DataDisplay/Progress'),
  tabs: () => import('../content/Navigation/Tabs'),
  breadcrumb: () => import('../content/Navigation/Breadcrumb'),
  sidebar: () => import('../content/Navigation/Sidebar'),
  pagination: () => import('../content/Navigation/Pagination'),
  select: () => import('../content/Forms/Select'),
  checkbox: () => import('../content/Forms/Checkbox'),
  radio: () => import('../content/Forms/Radio'),
  textarea: () => import('../content/Forms/Textarea'),
  toast: () => import('../content/Feedback/Toast'),
  alert: () => import('../content/Feedback/Alert'),
  skeleton: () => import('../content/Feedback/Skeleton'),
  spinner: () => import('../content/Feedback/Spinner'),
}

export const PREVIEW_MAP = {
  button: () => import('../previews/ButtonPreview'),
  input: () => import('../previews/InputPreview'),
  badge: () => import('../previews/BadgePreview'),
  toggle: () => import('../previews/TogglePreview'),
  table: () => import('../previews/TablePreview'),
  card: () => import('../previews/CardPreview'),
  avatar: () => import('../previews/AvatarPreview'),
  progress: () => import('../previews/ProgressPreview'),
  tabs: () => import('../previews/TabsPreview'),
  checkbox: () => import('../previews/CheckboxPreview'),
  toast: () => import('../previews/ToastPreview'),
  spinner: () => import('../previews/SpinnerPreview'),
}
```

- [ ] **Step 4: Implement each component's 4 variants and info.js**

For each of the 23 components, implement proper component code in all 4 React variants (JS-CSS, JS-TW, TS-CSS, TS-TW), update `info.js` with correct props/description, and update the preview component to accept props from the playground. Follow the Button pattern.

This is the largest step — implement one category at a time:
1. Foundations (Input, Badge, Toggle) → commit
2. Overlays (Dialog, Drawer, Tooltip, Popover) → commit
3. Data Display (Table, Card, Avatar, Progress) → commit
4. Navigation (Tabs, Breadcrumb, Sidebar, Pagination) → commit
5. Forms (Select, Checkbox, Radio, Textarea) → commit
6. Feedback (Toast, Alert, Skeleton, Spinner) → commit

- [ ] **Step 5: Verify all component doc pages render**

Navigate to each component route and confirm:
- Split view shows preview and code
- Variant selector switches between JS/TS × CSS/TW
- Props playground works if props are defined

- [ ] **Step 6: Commit (one per category)**

```bash
git add src/content/Foundations/ src/previews/
git commit -m "feat: add Foundations components (Input, Badge, Toggle) with 4 variants"
# ... repeat for each category
```

---

## Task 11: Search Dialog (Cmd+K)

**Files:**
- Create: `src/components/common/SearchDialog.jsx`
- Create: `src/utils/fuzzy.js`
- Modify: `src/components/layout/SidebarLayout.jsx` (add keyboard listener)

- [ ] **Step 1: Create `src/utils/fuzzy.js`**

```js
export function fuzzyMatch(query, text) {
  const q = query.toLowerCase()
  const t = text.toLowerCase()
  if (t.includes(q)) return { match: true, score: t.indexOf(q) === 0 ? 2 : 1 }

  let qi = 0
  for (let ti = 0; ti < t.length && qi < q.length; ti++) {
    if (t[ti] === q[qi]) qi++
  }
  return { match: qi === q.length, score: 0 }
}

export function searchComponents(query, categories) {
  if (!query.trim()) return []

  const results = []
  for (const cat of categories) {
    if (cat.isDoc) continue
    for (const sub of cat.subcategories) {
      const nameMatch = fuzzyMatch(query, sub.name)
      const catMatch = fuzzyMatch(query, cat.name)
      if (nameMatch.match || catMatch.match) {
        results.push({
          name: sub.name,
          category: cat.name,
          slug: `/${cat.slug}/${sub.slug}`,
          score: nameMatch.score + catMatch.score,
        })
      }
    }
  }

  return results.sort((a, b) => b.score - a.score)
}
```

- [ ] **Step 2: Create `src/components/common/SearchDialog.jsx`**

Use Radix Dialog for accessibility:

```jsx
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Dialog from '@radix-ui/react-dialog'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { searchComponents } from '../../utils/fuzzy'
import { CATEGORIES } from '../../constants/Categories'

export default function SearchDialog() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const results = searchComponents(query, CATEGORIES)

  useEffect(() => {
    const handleKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen(true)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  const select = (slug) => {
    navigate(slug)
    setOpen(false)
    setQuery('')
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
        <Dialog.Content className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-lg bg-bg-card border border-border rounded-xl shadow-lg z-50 overflow-hidden">
          <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
            <MagnifyingGlassIcon className="w-5 h-5 text-text-muted" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search components..."
              className="flex-1 bg-transparent text-text-primary text-sm outline-none placeholder:text-text-muted"
              autoFocus
            />
            <kbd className="text-[10px] text-text-muted border border-border rounded px-1.5 py-0.5">ESC</kbd>
          </div>
          {results.length > 0 && (
            <ul className="max-h-64 overflow-y-auto py-2">
              {results.map((r) => (
                <li key={r.slug}>
                  <button
                    onClick={() => select(r.slug)}
                    className="w-full text-left px-4 py-2 hover:bg-bg-hover flex items-center justify-between"
                  >
                    <span className="text-sm text-text-primary">{r.name}</span>
                    <span className="text-xs text-text-muted">{r.category}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
          {query && results.length === 0 && (
            <div className="px-4 py-8 text-center text-sm text-text-muted">
              No components found for "{query}"
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
```

- [ ] **Step 3: Add SearchDialog to SidebarLayout**

```jsx
import SearchDialog from '../common/SearchDialog'

// Inside SidebarLayout return:
<>
  <SearchDialog />
  <div className="flex min-h-screen pt-16">
    {/* ... existing layout ... */}
  </div>
</>
```

- [ ] **Step 4: Verify search works**

Run: `yarn dev`. Press Cmd+K. Type "button" — should see Button result. Click it — should navigate to `/foundations/button`.

- [ ] **Step 5: Commit**

```bash
git add src/components/common/SearchDialog.jsx src/utils/fuzzy.js src/components/layout/SidebarLayout.jsx
git commit -m "feat: add Cmd+K search dialog with fuzzy matching"
```

---

## Task 12: Favorites Page

**Files:**
- Create: `src/pages/FavoritesPage.jsx`
- Modify: `src/App.jsx` (add route)

- [ ] **Step 1: Create `src/pages/FavoritesPage.jsx`**

```jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HeartIcon } from '@heroicons/react/24/solid'
import { CATEGORIES } from '../constants/Categories'

export default function FavoritesPage() {
  const [favorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('lokaui-favorites') || '[]')
    } catch { return [] }
  })

  const components = CATEGORIES.flatMap((cat) =>
    cat.isDoc ? [] : cat.subcategories
      .filter((sub) => favorites.includes(sub.slug))
      .map((sub) => ({ ...sub, category: cat.name, categorySlug: cat.slug }))
  )

  return (
    <div>
      <h1 className="text-2xl font-pixel text-text-primary mb-2">Favorites</h1>
      <p className="text-sm text-text-secondary mb-6">Components you've saved for quick access.</p>

      {components.length === 0 ? (
        <div className="text-center py-16 text-text-muted">
          <HeartIcon className="w-8 h-8 mx-auto mb-3 opacity-30" />
          <p className="text-sm">No favorites yet. Click the heart icon in the sidebar to save components.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {components.map((comp) => (
            <Link
              key={comp.slug}
              to={`/${comp.categorySlug}/${comp.slug}`}
              className="p-4 bg-bg-card border border-border rounded-xl hover:border-border-hover transition-colors"
            >
              <h3 className="text-sm font-medium text-text-primary">{comp.name}</h3>
              <p className="text-xs text-text-muted mt-1">{comp.category}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
```

- [ ] **Step 2: Add `/favorites` route in `src/App.jsx`**

Inside the `SidebarLayout` route group:

```jsx
const FavoritesPage = lazy(() => import('./pages/FavoritesPage'))

// Inside Routes:
<Route element={<SidebarLayout />}>
  <Route path="/docs/:slug" element={<CategoryPage />} />
  <Route path="/favorites" element={<FavoritesPage />} />
  <Route path="/:category/:component" element={<CategoryPage />} />
</Route>
```

- [ ] **Step 3: Verify favorites page**

Favorite a component via sidebar heart icon. Navigate to `/favorites`. Confirm it appears.

- [ ] **Step 4: Commit**

```bash
git add src/pages/FavoritesPage.jsx src/App.jsx
git commit -m "feat: add favorites page with localStorage persistence"
```

---

## Task 13: Build-time SEO Scripts

**Files:**
- Create: `scripts/generateSitemap.js`
- Create: `scripts/generateLlmsText.js`
- Create: `public/robots.txt`
- Modify: `index.html` (meta tags)
- Modify: `package.json` (build script)

- [ ] **Step 1: Create `public/robots.txt`**

```
User-agent: *
Allow: /
Sitemap: https://lokaui.dev/sitemap.xml
```

- [ ] **Step 2: Create `scripts/generateSitemap.js`**

```js
import { writeFileSync } from 'fs'

// Import categories manually (can't use ESM import from constants without bundler)
const CATEGORIES = [
  { slug: 'docs', isDoc: true, subcategories: [
    { slug: 'getting-started' }, { slug: 'installation' },
    { slug: 'theming' }, { slug: 'variants' },
  ]},
  { slug: 'foundations', subcategories: [
    { slug: 'button' }, { slug: 'input' }, { slug: 'badge' }, { slug: 'toggle' },
  ]},
  { slug: 'overlays', subcategories: [
    { slug: 'dialog' }, { slug: 'drawer' }, { slug: 'tooltip' }, { slug: 'popover' },
  ]},
  { slug: 'data-display', subcategories: [
    { slug: 'table' }, { slug: 'card' }, { slug: 'avatar' }, { slug: 'progress' },
  ]},
  { slug: 'navigation', subcategories: [
    { slug: 'tabs' }, { slug: 'breadcrumb' }, { slug: 'sidebar' }, { slug: 'pagination' },
  ]},
  { slug: 'forms', subcategories: [
    { slug: 'select' }, { slug: 'checkbox' }, { slug: 'radio' }, { slug: 'textarea' },
  ]},
  { slug: 'feedback', subcategories: [
    { slug: 'toast' }, { slug: 'alert' }, { slug: 'skeleton' }, { slug: 'spinner' },
  ]},
]

const BASE_URL = 'https://lokaui.dev'
const today = new Date().toISOString().split('T')[0]

const urls = [
  { loc: '/', priority: '1.0', changefreq: 'weekly' },
  { loc: '/favorites', priority: '0.3', changefreq: 'monthly' },
]

for (const cat of CATEGORIES) {
  for (const sub of cat.subcategories) {
    const path = cat.isDoc ? `/docs/${sub.slug}` : `/${cat.slug}/${sub.slug}`
    urls.push({
      loc: path,
      priority: cat.isDoc ? '0.7' : '0.8',
      changefreq: 'weekly',
    })
  }
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${BASE_URL}${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`

writeFileSync('public/sitemap.xml', xml)
console.log(`Sitemap generated with ${urls.length} URLs`)
```

- [ ] **Step 3: Create `scripts/generateLlmsText.js`**

```js
import { writeFileSync } from 'fs'

const COMPONENTS = [
  { name: 'Button', category: 'foundations', slug: 'button' },
  { name: 'Input', category: 'foundations', slug: 'input' },
  { name: 'Badge', category: 'foundations', slug: 'badge' },
  { name: 'Toggle', category: 'foundations', slug: 'toggle' },
  { name: 'Dialog', category: 'overlays', slug: 'dialog' },
  { name: 'Drawer', category: 'overlays', slug: 'drawer' },
  { name: 'Tooltip', category: 'overlays', slug: 'tooltip' },
  { name: 'Popover', category: 'overlays', slug: 'popover' },
  { name: 'Table', category: 'data-display', slug: 'table' },
  { name: 'Card', category: 'data-display', slug: 'card' },
  { name: 'Avatar', category: 'data-display', slug: 'avatar' },
  { name: 'Progress', category: 'data-display', slug: 'progress' },
  { name: 'Tabs', category: 'navigation', slug: 'tabs' },
  { name: 'Breadcrumb', category: 'navigation', slug: 'breadcrumb' },
  { name: 'Sidebar', category: 'navigation', slug: 'sidebar' },
  { name: 'Pagination', category: 'navigation', slug: 'pagination' },
  { name: 'Select', category: 'forms', slug: 'select' },
  { name: 'Checkbox', category: 'forms', slug: 'checkbox' },
  { name: 'Radio', category: 'forms', slug: 'radio' },
  { name: 'Textarea', category: 'forms', slug: 'textarea' },
  { name: 'Toast', category: 'feedback', slug: 'toast' },
  { name: 'Alert', category: 'feedback', slug: 'alert' },
  { name: 'Skeleton', category: 'feedback', slug: 'skeleton' },
  { name: 'Spinner', category: 'feedback', slug: 'spinner' },
]

const text = `# LokaUI
> An open source collection of high quality, accessible, and fully customizable UI components.

## Installation
npx shadcn@latest add @lokaui/<component-name>

## Available Components (${COMPONENTS.length})
${COMPONENTS.map(c => `- ${c}: https://lokaui.dev/${c.category}/${c.slug}`).join('\n')}

## Variants
Each component supports multiple variants:
- React: JS-CSS, JS-TW, TS-CSS, TS-TW
- Laravel: HTML-TW (Button only, more coming)
- React Native: RN-TW, RN-StyleSheet (Button only, more coming)

## Links
- Website: https://lokaui.dev
- GitHub: https://github.com/lokaui/lokaui
- Documentation: https://lokaui.dev/docs/getting-started
`

writeFileSync('public/llms.txt', text)
console.log('llms.txt generated')
```

- [ ] **Step 4: Update `index.html` meta tags**

Add comprehensive meta tags to the `<head>` of `index.html`:

```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>LokaUI — Beautiful, Accessible React Components</title>
<meta name="description" content="An open source collection of high quality, accessible, and fully customizable UI components for React, Laravel, and React Native." />
<meta name="keywords" content="React, UI components, Tailwind CSS, component library, open source, accessible, TypeScript, Laravel, React Native" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://lokaui.dev" />

<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:title" content="LokaUI — Beautiful, Accessible React Components" />
<meta property="og:description" content="An open source collection of high quality, accessible, and fully customizable UI components." />
<meta property="og:image" content="https://lokaui.dev/og-image.png" />
<meta property="og:url" content="https://lokaui.dev" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="LokaUI" />
<meta name="twitter:description" content="Beautiful, accessible React components." />
<meta name="twitter:image" content="https://lokaui.dev/og-image.png" />

<!-- JSON-LD -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "LokaUI",
  "description": "An open source collection of high quality, accessible, and fully customizable UI components.",
  "url": "https://lokaui.dev",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Web"
}
</script>
```

- [ ] **Step 5: Update `package.json` build script**

```json
"scripts": {
  "dev": "vite",
  "build": "node scripts/generateSitemap.js && node scripts/generateLlmsText.js && vite build",
  "preview": "vite preview"
}
```

- [ ] **Step 6: Test build**

```bash
yarn build
```

Verify `dist/sitemap.xml` and `dist/llms.txt` exist and have correct content.

- [ ] **Step 7: Commit**

```bash
git add scripts/ public/robots.txt index.html package.json
git commit -m "feat: add build-time SEO (sitemap, llms.txt, meta tags, robots.txt)"
```

---

## Task 14: Responsive Design & Mobile Sidebar

**Files:**
- Modify: `src/components/layout/SidebarLayout.jsx`
- Modify: `src/components/navs/Header.jsx`

- [ ] **Step 1: Add mobile sidebar drawer to SidebarLayout**

Use Radix Dialog for the mobile sidebar:

```jsx
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import * as Dialog from '@radix-ui/react-dialog'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Sidebar from '../navs/Sidebar'
import SearchDialog from '../common/SearchDialog'

export default function SidebarLayout() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <SearchDialog />
      <div className="flex min-h-screen pt-16">
        {/* Desktop sidebar */}
        <aside className="hidden md:block fixed top-16 left-0 bottom-0 w-64 bg-bg overflow-y-auto">
          <Sidebar />
        </aside>

        {/* Mobile sidebar toggle */}
        <button
          onClick={() => setMobileOpen(true)}
          className="fixed bottom-4 right-4 md:hidden z-40 p-3 bg-accent text-white rounded-full shadow-lg"
        >
          <Bars3Icon className="w-6 h-6" />
        </button>

        {/* Mobile sidebar drawer */}
        <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40 md:hidden" />
            <Dialog.Content className="fixed top-0 left-0 bottom-0 w-72 bg-bg z-50 md:hidden overflow-y-auto">
              <div className="flex justify-end p-4">
                <Dialog.Close className="p-1 text-text-muted hover:text-text-primary">
                  <XMarkIcon className="w-5 h-5" />
                </Dialog.Close>
              </div>
              <Sidebar />
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>

        <main className="flex-1 md:ml-64 px-4 sm:px-6 py-8 max-w-5xl">
          <Outlet />
        </main>
      </div>
    </>
  )
}
```

- [ ] **Step 2: Add mobile menu to Header**

Add a hamburger menu button for mobile that appears only on the landing page (docs pages have the sidebar toggle):

```jsx
// In Header, add mobile nav toggle for landing page navigation
<button className="md:hidden p-2 text-text-secondary">
  <Bars3Icon className="w-5 h-5" />
</button>
```

- [ ] **Step 3: Test responsive layout**

Resize browser to mobile widths. Confirm:
- Sidebar hides on mobile, FAB appears
- FAB opens mobile drawer
- Search dialog works on mobile
- Split view stacks vertically on mobile (already handled by `grid-cols-1 lg:grid-cols-2`)

- [ ] **Step 4: Commit**

```bash
git add src/components/layout/SidebarLayout.jsx src/components/navs/Header.jsx
git commit -m "feat: add responsive mobile sidebar drawer and mobile nav"
```

---

## Task 15: Final Polish & Verification

**Files:**
- Various cleanup and polish

- [ ] **Step 1: Remove old inline style patterns**

Search for any remaining `style={{` patterns in migrated components and convert to Tailwind. Some complex values (gradients, clamp) can stay inline.

- [ ] **Step 2: Verify dark/light theme across all pages**

Toggle theme on:
- Landing page (all sections)
- Component doc pages
- Favorites page
- Search dialog
- Mobile sidebar

- [ ] **Step 3: Verify all routes**

- `/` — Landing page
- `/docs/getting-started` — Sidebar + placeholder
- `/foundations/button` — Full component doc with all 7 variants
- `/foundations/input` — Component doc with 4 React variants
- `/favorites` — Empty state or populated
- Cmd+K search → navigate to component

- [ ] **Step 4: Run production build**

```bash
yarn build && yarn preview
```

Verify:
- No build errors
- `dist/sitemap.xml` exists with correct URLs
- `dist/llms.txt` exists
- All pages render correctly in preview mode

- [ ] **Step 5: Final commit**

```bash
git add -A
git commit -m "chore: final polish and cleanup for docs site rebuild"
```
