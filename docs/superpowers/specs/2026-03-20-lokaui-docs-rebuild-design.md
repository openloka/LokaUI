# LokaUI Docs Site Rebuild — Design Spec

## Overview

Rebuild the LokaUI website from a Vite SPA landing page into a full documentation site with component docs, live previews, interactive props playground, multi-variant code display, and build-time SEO. The site stays on Vite (no SSR) and follows the react-bits architecture pattern with modern tooling.

## Goals

1. Add a `/docs` route with component documentation pages featuring split-view (preview + code)
2. Migrate from inline styles to Tailwind CSS
3. Support 7 code variants per component across 3 platforms
4. Implement build-time SEO (sitemap, meta tags, robots.txt, llms.txt)
5. Support dark and light themes (dark default)
6. Provide both copy-paste and shadcn-style CLI installation

## Tech Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Build | Vite 6 + `@vitejs/plugin-react` | Keep current tooling, fast DX |
| Framework | React 19 + React Router v6 | SPA routing, lazy loading |
| Styling | Tailwind CSS 4 + PostCSS | Utility-first, replaces inline styles |
| Accessibility | Radix UI (headless) | Accessible primitives, no visual lock-in |
| Icons | `@heroicons/react` | Outline for chrome, solid for emphasis |
| Fonts | GeistPixel (headings), Geist Sans (body), Geist Mono (code) | Distinctive pixel identity |
| Syntax highlighting | Shiki | Modern, supports JSX/TSX/PHP/CSS |
| URL state | `nuqs` | Props ↔ URL query string sync |
| CLI registry | shadcn registry (`public/r/`) | Copy-paste + CLI install |
| SEO | Build-time scripts | Sitemap, llms.txt generation |
| Linting | ESLint + Prettier | Code quality |

## Project Structure

```
src/
├── main.jsx
├── App.jsx                         # Router + providers
├── styles.css                      # Global styles + Tailwind directives
│
├── pages/
│   ├── LandingPage.jsx             # Marketing landing page (migrated to TW)
│   ├── CategoryPage.jsx            # Component doc page (split view)
│   └── FavoritesPage.jsx           # Saved components
│
├── components/
│   ├── layout/
│   │   ├── SidebarLayout.jsx       # Sidebar + content wrapper
│   │   └── Providers.jsx           # Context provider stack
│   ├── navs/
│   │   ├── Header.jsx              # Top nav bar
│   │   └── Sidebar.jsx             # Docs sidebar navigation
│   ├── code/
│   │   ├── CodeExample.jsx         # Split view container (preview + code)
│   │   ├── CodeHighlighter.jsx     # Shiki syntax highlighting
│   │   ├── CodeOptions.jsx         # Variant selector (platform + lang + style)
│   │   └── CliInstallation.jsx     # shadcn CLI install snippet
│   ├── common/
│   │   ├── SearchDialog.jsx        # Cmd+K component search
│   │   ├── PropsPlayground.jsx     # Interactive props controls
│   │   ├── PropTable.jsx           # API reference table
│   │   └── ThemeToggle.jsx         # Sun/moon theme switcher
│   └── landing/                    # Landing page section components
│
├── content/                        # Component source code (all variants)
│   ├── Foundations/
│   │   ├── Button/
│   │   │   ├── react/
│   │   │   │   ├── Button.jsx      # JS-CSS
│   │   │   │   ├── Button.css
│   │   │   │   ├── Button.tw.jsx   # JS-TW
│   │   │   │   ├── Button.tsx      # TS-CSS
│   │   │   │   └── Button.tw.tsx   # TS-TW
│   │   │   ├── laravel/
│   │   │   │   ├── button.blade.php  # HTML-TW
│   │   │   │   └── button.css
│   │   │   ├── react-native/
│   │   │   │   ├── Button.tw.tsx     # RN-TW (NativeWind)
│   │   │   │   └── Button.stylesheet.tsx  # RN-StyleSheet
│   │   │   ├── index.js            # Variant map + platform config
│   │   │   └── info.js             # Props, description, tags, metadata
│   │   ├── Input/
│   │   │   ├── react/              # 4 React variants only (initially)
│   │   │   ├── index.js
│   │   │   └── info.js
│   │   └── ...
│   ├── Overlays/
│   ├── DataDisplay/
│   ├── Navigation/
│   ├── Forms/
│   └── Feedback/
│
├── constants/
│   ├── Categories.js               # Sidebar nav structure + component list
│   ├── Information.js              # Component metadata registry
│   └── Site.js                     # Site-wide config (name, URL, socials)
│
├── hooks/
│   ├── useComponentProps.js        # Props ↔ URL query param sync
│   ├── useActiveRoute.js           # Current route detection
│   └── useTheme.js                 # Theme context hook
│
├── utils/
│   ├── codeGeneration.js           # Inject live props into code templates
│   └── registry.js                 # shadcn registry helpers
│
└── previews/                       # Live preview components
    ├── ButtonPreview.jsx
    ├── InputPreview.jsx
    └── ...

scripts/
├── generateSitemap.js              # Build-time: routes → sitemap.xml
├── generateLlmsText.js             # Build-time: component catalog → llms.txt
└── generateComponent.js            # Dev tool: scaffold new component + variants

public/
├── sitemap.xml                     # Generated at build
├── robots.txt                      # Crawler rules
├── llms.txt                        # Generated at build
├── og-image.png                    # Open Graph preview
└── r/                              # shadcn component registry output
```

## Routing

| Route | Page | Layout |
|-------|------|--------|
| `/` | LandingPage | Header only (no sidebar) |
| `/docs/getting-started` | Getting started guide | SidebarLayout |
| `/docs/installation` | Installation guide | SidebarLayout |
| `/docs/theming` | Theming guide | SidebarLayout |
| `/docs/variants` | Variant system guide | SidebarLayout |
| `/:category/:component` | Component doc page | SidebarLayout |
| `/favorites` | Saved components | SidebarLayout |

React Router v6 with lazy loading via `React.lazy()` + `Suspense`. Static `/docs/*` routes are defined before the dynamic `/:category/:component` pattern to avoid route collisions.

## Sidebar Navigation

Constants-driven from `Categories.js`:

```
Get Started
  ├── Introduction
  ├── Installation
  ├── Theming
  └── Variants Guide

Foundations
  ├── Button
  ├── Input
  ├── Badge
  └── Toggle

Overlays
  ├── Dialog
  ├── Drawer
  ├── Tooltip
  └── Popover

Data Display
  ├── Table
  ├── Card
  ├── Avatar
  └── Progress

Navigation
  ├── Tabs
  ├── Breadcrumb
  ├── Sidebar
  └── Pagination

Forms
  ├── Select
  ├── Checkbox
  ├── Radio
  └── Textarea

Feedback
  ├── Toast
  ├── Alert
  ├── Skeleton
  └── Spinner
```

Features: collapsible sections, active item highlighting, NEW/UPDATED badges, favorites heart icon, mobile drawer.

## Component Doc Page (Split View)

Each component doc page has these sections, top to bottom:

### 1. Top Bar
- Breadcrumb with Heroicon chevron separator: `Category / ComponentName`
- Component status badge (Stable, Beta, New)
- Platform tabs: `[ React | Laravel | React Native ]`
  - Switching platform changes available variant options

### 2. Install Bar
- Terminal icon (Heroicon `command-line`)
- `npx shadcn@latest add @lokaui/component-name`
- Copy button (Heroicon `clipboard`)

### 3. Split View (main content area)
**Left panel — Live Preview:**
- "PREVIEW" header (GeistPixel font) with eye Heroicon
- Reset button (Heroicon `arrow-path`)
- Rendered component with current props applied
- Respects active theme (dark/light)

**Right panel — Code:**
- "CODE" header (GeistPixel font) with code-bracket Heroicon
- Variant selector: `[JS|TS]` toggle + `[CSS|TW]` toggle
- Copy button (Heroicon `clipboard`)
- Shiki-highlighted source code
- Code updates live when props change in playground

### 4. Props Playground
- "PROPS PLAYGROUND" header (GeistPixel font) with adjustments Heroicon
- Grid of interactive controls per prop
- Control types: toggle buttons (enums), boolean toggles, text inputs, color pickers, sliders
- Changing a prop updates both the preview and the code simultaneously
- Props sync to URL query params via `nuqs` for shareable states

### 5. API Reference
- "API REFERENCE" header (GeistPixel font) with bars Heroicon
- Table: Prop | Type | Default | Description
- Monospace font for prop names, types, defaults

## Variant System

### Variant Map per Component

Each component's `index.js` exports:

```js
export const variants = {
  'JS-CSS':         () => import('./react/Button.jsx?raw'),
  'JS-TW':          () => import('./react/Button.tw.jsx?raw'),
  'TS-CSS':         () => import('./react/Button.tsx?raw'),
  'TS-TW':          () => import('./react/Button.tw.tsx?raw'),
  'HTML-TW':        () => import('./laravel/button.blade.php?raw'),
  'RN-TW':          () => import('./react-native/Button.tw.tsx?raw'),
  'RN-StyleSheet':  () => import('./react-native/Button.stylesheet.tsx?raw'),
}

export const platforms = {
  react:          ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
  laravel:        ['HTML-TW'],
  'react-native': ['RN-TW', 'RN-StyleSheet'],
}
```

### Platform-Aware Variant Selector

The variant selector UI adapts based on selected platform:
- **React**: Two toggles — `[JS|TS]` × `[CSS|TW]`
- **Laravel**: No toggles (single variant: HTML-TW)
- **React Native**: One toggle — `[TW|StyleSheet]`

### Initial Scope

- **Button** component: all 7 variants (React + Laravel + React Native)
- **All other components**: 4 React variants only (JS-CSS, JS-TW, TS-CSS, TS-TW)
- Laravel and React Native folders empty/placeholder for non-Button components

## Theme System

- Dark and light theme support, **dark is default**
- Tailwind `class` strategy: `.dark` class on `<html>` element
- `ThemeProvider` context with `useTheme()` hook
- Toggle in Header using Heroicons (sun outline / moon solid)
- Preference stored in `localStorage`
- Component previews in docs respect active theme
- CSS custom properties for semantic color tokens

## Typography

| Usage | Font | Fallback |
|-------|------|----------|
| Headings (h1-h6), section headers, logo | GeistPixel | monospace |
| Body text, labels, descriptions | Geist Sans | Inter, system sans-serif |
| Code blocks, CLI, prop types | Geist Mono | Fira Code, monospace |

GeistPixel applied to: page titles, sidebar section headers, component name in breadcrumb, section labels (PREVIEW, CODE, PROPS PLAYGROUND, API REFERENCE).

## Icons

All icons from `@heroicons/react`:
- **Outline** variant for UI chrome (nav, sidebar, action buttons)
- **Solid** variant for active/emphasis states (theme toggle moon, favorite heart)

Key icon mappings:
- Preview section → `EyeIcon`
- Code section → `CodeBracketIcon`
- Copy → `ClipboardIcon`
- Reset → `ArrowPathIcon`
- Props playground → `AdjustmentsHorizontalIcon`
- API reference → `Bars3BottomLeftIcon`
- Install → `CommandLineIcon`
- Search → `MagnifyingGlassIcon`
- Theme toggle → `SunIcon` / `MoonIcon`
- Breadcrumb separator → `ChevronRightIcon`
- Favorites → `HeartIcon`

## Search (Cmd+K)

Client-side fuzzy search over `Categories.js` component entries. No server or build-time index needed — the search dialog filters the component registry in-memory using a fuzzy matching utility (similar to react-bits' approach). Matches on component name, category, and tags from `Information.js`.

## Favorites

Users can favorite components via the heart icon in the sidebar. Favorites stored in `localStorage`. The `/favorites` page renders a filtered grid of saved components.

## Build-time SEO

### 1. Static Meta Tags (`index.html`)
- UTF-8 charset, responsive viewport
- Title, description, keywords
- Open Graph tags (title, description, image, URL)
- Twitter Card tags
- JSON-LD structured data (SoftwareApplication schema)
- Canonical URL
- `<meta name="robots" content="index, follow">`

### 2. Sitemap Generation (`scripts/generateSitemap.js`)
- Runs at build time
- Reads `Categories.js` to extract all component routes
- Adds hardcoded pages (`/`, `/docs/*`, `/favorites`)
- Outputs `public/sitemap.xml` with `lastmod`, `changefreq`, `priority`

### 3. robots.txt
```
User-agent: *
Allow: /
Sitemap: https://lokaui.dev/sitemap.xml
```

### 4. LLM Discoverability (`scripts/generateLlmsText.js`)
- Generates `public/llms.txt`
- Lists all components with URLs, descriptions, variant support
- CLI install instructions
- Prevents AI hallucination about available components

### 5. Build Script Chain
```json
"build": "node scripts/generateSitemap.js && node scripts/generateLlmsText.js && vite build"
```

## Migration Plan (High Level)

1. **Phase 1**: Set up new project structure — Tailwind, React Router, providers, layout components
2. **Phase 2**: Migrate landing page from inline styles to Tailwind
3. **Phase 3**: Build docs infrastructure — sidebar, search, category page, code display
4. **Phase 4**: Build component doc page — split view, variant selector, code highlighter
5. **Phase 5**: Build interactive props playground with URL sync
6. **Phase 6**: Create Button component with all 7 variants as reference implementation
7. **Phase 7**: Port remaining 23 components (24 total) with 4 React variants each
8. **Phase 8**: SEO scripts, registry, CLI support
9. **Phase 9**: Polish — theme toggle, search, favorites, responsive design

## Reference Projects

- **react-bits** (github.com/DavidHDev/react-bits) — SPA docs architecture, variant system, SEO strategy, constants-driven navigation
- **IntentUI** (github.com/intentui/intentui) — Component structure, shadcn registry, accessible component patterns
- **UI Layouts** (github.com/ui-layouts/uilayouts) — Custom MDX pipeline, preview system reference
