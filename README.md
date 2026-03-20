<p align="center">
  <img src="public/og-image.svg" alt="LokaUI" width="600" />
</p>

<h1 align="center">LokaUI</h1>

<p align="center">
  Beautiful, accessible, and fully customizable UI components.<br />
  Copy & paste into your project. You own the code.
</p>

<p align="center">
  <a href="https://lokaui.dev">Website</a> ·
  <a href="https://lokaui.dev/docs/installation">Installation</a> ·
  <a href="https://lokaui.dev/foundations/button">Components</a>
</p>

<p align="center">
  <img src="https://img.shields.io/npm/v/@lokaui/cli?label=CLI&color=0ea58e" alt="npm" />
  <img src="https://img.shields.io/badge/components-24-0ea58e" alt="Components" />
  <img src="https://img.shields.io/badge/license-MIT-0ea58e" alt="License" />
</p>

---

## Why LokaUI?

- **Copy & paste** — Components are copied into your project. No dependency lock-in.
- **Multi-variant** — Each component ships in 4+ variants: JS/TS × CSS/Tailwind, Blade, React Native.
- **Multi-platform** — React, Laravel (Blade), and React Native from a single library.
- **Accessible** — Built on Radix UI primitives with full ARIA support.
- **Themeable** — Dark and light modes powered by CSS custom property tokens.
- **CLI install** — Interactive picker to browse, select, and install components instantly.

## Quick Start

### React

```bash
npx @lokaui/cli init
npx @lokaui/cli add button
```

```jsx
import Button from './components/ui/Button'

function App() {
  return <Button variant="primary">Click me</Button>
}
```

### Laravel

```bash
composer require lokaui/cli --dev
php artisan lokaui:init
php artisan lokaui:add button
```

```blade
<x-ui.button variant="primary">Click me</x-ui.button>
```

### React Native

```bash
npx @lokaui/cli init
npx @lokaui/cli add button
```

```tsx
import Button from './components/ui/Button'

export default function App() {
  return <Button variant="primary">Click me</Button>
}
```

Or browse [lokaui.dev](https://lokaui.dev), pick a component, choose your variant, and copy the code.

## Components (24)

| Category | Components |
|----------|-----------|
| **Foundations** | Button, Input, Badge, Toggle |
| **Overlays** | Dialog, Drawer, Tooltip, Popover |
| **Data Display** | Table, Card, Avatar, Progress |
| **Navigation** | Tabs, Breadcrumb, Sidebar, Pagination |
| **Forms** | Select, Checkbox, Radio, Textarea |
| **Feedback** | Toast, Alert, Skeleton, Spinner |

## CLI

The LokaUI CLI copies component source code directly into your project.

```bash
# Initialize project config and add theme tokens
npx @lokaui/cli init

# Add a single component
npx @lokaui/cli add button

# Add multiple components at once
npx @lokaui/cli add button input badge dialog

# Interactive picker — browse and select from all components
npx @lokaui/cli add

# Install all available components
npx @lokaui/cli add --all

# List all components and their availability
npx @lokaui/cli list
```

**Laravel CLI:**

```bash
php artisan lokaui:init
php artisan lokaui:add button
php artisan lokaui:add          # interactive picker
php artisan lokaui:add --all
php artisan lokaui:list
```

| Flag | Description |
|------|-------------|
| `--all` | Install all available components |
| `--overwrite` | Re-download existing components |
| `--dry-run` | Preview without writing files |

## Variants

Every component is available in multiple variants:

| Platform | Variants | Status |
|----------|----------|--------|
| React | JS-CSS, JS-TW, TS-CSS, TS-TW | All 24 components |
| Laravel | HTML-TW (Blade) | Button (more coming soon) |
| React Native | RN-TW, RN-StyleSheet | Button (more coming soon) |

## Theming

LokaUI uses CSS custom properties for theming. Dark mode is the default, with full light mode support.

```css
:root {
  --bg: #09090b;
  --accent: #0ea58e;
  --text-primary: #fafafa;
  --border: rgba(255,255,255,0.07);
  /* ... 30+ tokens for colors, status, code highlighting */
}
```

The `init` command automatically injects all theme tokens into your CSS file.

## Tech Stack

- **React 19** + **Vite 6**
- **Tailwind CSS 4** with CSS custom property tokens
- **Radix UI** for accessible primitives
- **Shiki** for syntax highlighting
- **React Router v7** for navigation
- **GeistPixel** font for headings

## Project Structure

```
src/
├── content/           # Component source code (React, Laravel, React Native)
│   ├── Foundations/    # Button, Input, Badge, Toggle
│   ├── Overlays/      # Dialog, Drawer, Tooltip, Popover
│   ├── DataDisplay/   # Table, Card, Avatar, Progress
│   ├── Navigation/    # Tabs, Breadcrumb, Sidebar, Pagination
│   ├── Forms/         # Select, Checkbox, Radio, Textarea
│   └── Feedback/      # Toast, Alert, Skeleton, Spinner
├── components/        # Docs site UI (Header, Sidebar, code display)
├── pages/             # Route pages (Landing, Category, Docs)
├── previews/          # Live component previews
├── constants/         # Categories, component registry
├── hooks/             # Custom React hooks
└── utils/             # Utilities (fuzzy search)

packages/
├── cli-npm/           # @lokaui/cli (React & React Native)
└── cli-composer/      # lokaui/cli (Laravel)

tokens/tokens.css      # Theme tokens (dark + light)
registry.json          # Component registry for CLI
scripts/
├── generateRegistry.js    # Auto-generate registry from source
├── generateSitemap.js     # Build-time sitemap
├── generateLlmsText.js    # AI discoverability
└── generateComponent.js   # Scaffold new components
```

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Generate component registry
node scripts/generateRegistry.js
```

## Contributing

Contributions are welcome! Whether it's adding Laravel/React Native variants, fixing bugs, or improving documentation.

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/my-feature`)
3. Make your changes
4. Run `npm run build` to verify
5. Commit and push
6. Open a Pull Request

## License

MIT License. See [LICENSE](LICENSE) for details.
