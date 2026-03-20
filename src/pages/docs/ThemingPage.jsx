import { useState } from 'react'
import { SunIcon, MoonIcon, SwatchIcon, ArrowPathIcon } from '@heroicons/react/24/outline'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { useTheme, colorSchemes } from '../../theme'
import DocsCodeBlock from '../../components/common/DocsCodeBlock'

function ColorSwatch({ name, variable, description }) {
  return (
    <div className="flex items-center gap-3 py-2">
      <div
        className="w-8 h-8 rounded-lg border border-border flex-shrink-0"
        style={{ backgroundColor: `var(${variable})` }}
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-text-primary">{variable}</span>
        </div>
        <span className="text-[11px] text-text-muted">{description}</span>
      </div>
    </div>
  )
}

function SchemeCard({ name, scheme, isActive, onSelect }) {
  const primaryDark = scheme.primary.dark
  const secondaryDark = scheme.secondary.dark

  return (
    <button
      onClick={() => onSelect(name)}
      className={`group relative flex flex-col gap-2.5 p-3.5 rounded-xl border transition-all cursor-pointer ${
        isActive
          ? 'border-accent bg-accent-muted'
          : 'border-border hover:border-border-hover bg-bg-card hover:bg-bg-hover'
      }`}
    >
      {isActive && (
        <CheckCircleIcon className="absolute top-2 right-2 w-4 h-4 text-accent" />
      )}
      <div className="flex gap-2">
        <div
          className="w-8 h-8 rounded-lg"
          style={{ backgroundColor: primaryDark }}
        />
        <div
          className="w-8 h-8 rounded-lg"
          style={{ backgroundColor: secondaryDark }}
        />
      </div>
      <span className="text-xs font-medium text-text-primary text-left">{name}</span>
    </button>
  )
}

function MiniPreview() {
  return (
    <div className="rounded-xl border border-border bg-bg-card p-5 space-y-4">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-accent" />
        <div>
          <div className="text-sm font-semibold text-text-primary">Live Preview</div>
          <div className="text-xs text-text-secondary">Components reflect your chosen scheme</div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <button className="px-4 py-2 text-sm font-medium rounded-lg bg-accent text-accent-text hover:bg-accent-hover transition-colors">
          Primary
        </button>
        <button className="px-4 py-2 text-sm font-medium rounded-lg bg-secondary text-secondary-text hover:bg-secondary-hover transition-colors">
          Secondary
        </button>
        <button className="px-4 py-2 text-sm font-medium rounded-lg bg-transparent text-text-primary hover:bg-bg-hover transition-colors border border-border">
          Ghost
        </button>
      </div>

      <div className="flex gap-3">
        <div className="flex-1 rounded-lg border border-border bg-bg-input px-3 py-2 text-xs text-text-muted">
          Input field...
        </div>
        <div className="px-3 py-2 rounded-lg bg-accent text-accent-text text-xs font-medium">
          Submit
        </div>
      </div>

      <div className="flex gap-2 items-center">
        <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-accent-muted text-accent">Primary tag</span>
        <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-secondary-muted text-secondary">Secondary tag</span>
        <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-status-green-muted text-status-green">Success</span>
        <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-status-red-muted text-status-red">Error</span>
      </div>

      <div className="rounded-lg border border-border overflow-hidden">
        <div className="flex items-center justify-between px-3 py-2 border-b border-border bg-bg-elevated">
          <span className="text-xs font-medium text-text-primary">Card Header</span>
          <span className="text-[10px] text-accent font-mono">v0.1</span>
        </div>
        <div className="px-3 py-3">
          <div className="flex gap-2 mb-2">
            <div className="h-2 rounded-full bg-accent flex-[3]" />
            <div className="h-2 rounded-full bg-secondary flex-[2]" />
          </div>
          <div className="text-xs text-text-secondary">
            Progress bars, charts, and indicators use both primary and secondary colors.
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <div className="w-8 h-8 rounded-full border-2 border-accent bg-accent-muted flex items-center justify-center">
          <span className="text-[10px] font-bold text-accent">A</span>
        </div>
        <div className="w-8 h-8 rounded-full border-2 border-secondary bg-secondary-muted flex items-center justify-center">
          <span className="text-[10px] font-bold text-secondary">B</span>
        </div>
        <div className="flex-1 flex items-center">
          <span className="text-xs text-text-muted">Avatar accents adapt to your scheme</span>
        </div>
      </div>
    </div>
  )
}

export default function ThemingPage() {
  const { mode, toggle, customColors, setColors } = useTheme()
  const [activeScheme, setActiveScheme] = useState(() => {
    if (!customColors) return 'Teal & Indigo'
    for (const [name, scheme] of Object.entries(colorSchemes)) {
      if (
        scheme.primary.dark === customColors.primary.dark &&
        scheme.secondary.dark === customColors.secondary.dark
      ) {
        return name
      }
    }
    return null
  })

  const handleSelectScheme = (name) => {
    setActiveScheme(name)
    const scheme = colorSchemes[name]
    setColors({
      primary: scheme.primary,
      secondary: scheme.secondary,
    })
  }

  const handleReset = () => {
    setActiveScheme('Teal & Indigo')
    setColors(null)
  }

  const currentPrimary = customColors?.primary?.[mode] || (mode === 'dark' ? '#0ea58e' : '#0d9485')
  const currentSecondary = customColors?.secondary?.[mode] || (mode === 'dark' ? '#6366f1' : '#4f46e5')

  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-pixel text-text-primary mb-3">Theming</h1>
      <p className="text-text-secondary text-base leading-relaxed mb-8">
        LokaUI uses CSS custom properties for theming, with built-in support for dark and light modes.
        All components automatically respond to theme changes.
      </p>

      <h2 className="text-xl font-pixel text-text-primary mb-4">Dark & Light Mode</h2>

      <p className="text-sm text-text-secondary mb-4">
        The theme is controlled by a React context provider. Toggle between dark and light mode — all components update instantly.
      </p>

      <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-bg-card mb-6">
        <span className="text-sm text-text-secondary">Current theme:</span>
        <button
          onClick={toggle}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-accent-text text-sm font-medium hover:bg-accent-hover transition-colors"
        >
          {mode === 'dark' ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />}
          Switch to {mode === 'dark' ? 'light' : 'dark'}
        </button>
        <span className="text-xs font-mono text-accent bg-accent-muted px-2 py-1 rounded">{mode}</span>
      </div>

      <DocsCodeBlock
        title="ThemeProvider setup"
        lang="jsx"
        code={`import { ThemeProvider } from './theme'

function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  )
}

// In any component:
import { useTheme } from './theme'

function MyComponent() {
  const { mode, toggle } = useTheme()
  // mode: 'dark' | 'light'
  // toggle: () => void
}`}
      />

      {/* Color Scheme Playground */}
      <h2 className="text-xl font-pixel text-text-primary mb-2 mt-10 flex items-center gap-2">
        <SwatchIcon className="w-5 h-5 text-accent" />
        Color Scheme Playground
      </h2>
      <p className="text-sm text-text-secondary mb-5">
        Choose a pre-defined color scheme and see it applied across the entire project in real-time.
        Both primary and secondary colors update instantly.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
        {Object.entries(colorSchemes).map(([name, scheme]) => (
          <SchemeCard
            key={name}
            name={name}
            scheme={scheme}
            isActive={activeScheme === name}
            onSelect={handleSelectScheme}
          />
        ))}
      </div>

      <div className="flex items-center gap-3 mb-5">
        <div className="flex items-center gap-2 text-xs text-text-secondary">
          <span>Active:</span>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-bg-card border border-border">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: currentPrimary }} />
            <span className="text-text-primary font-medium">Primary</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-bg-card border border-border">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: currentSecondary }} />
            <span className="text-text-primary font-medium">Secondary</span>
          </div>
        </div>
        {customColors && (
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-text-secondary hover:text-text-primary border border-border hover:border-border-hover transition-colors"
          >
            <ArrowPathIcon className="w-3.5 h-3.5" />
            Reset to default
          </button>
        )}
      </div>

      <MiniPreview />

      <DocsCodeBlock
        title="Custom color configuration"
        lang="jsx"
        code={`import { ThemeProvider } from './theme'

// Colors are persisted to localStorage automatically.
// Override via CSS variables in your stylesheet:

// Option 1: CSS override
:root {
  --accent: ${currentPrimary};
  --secondary: ${currentSecondary};
}

// Option 2: Use setColors from the theme hook
import { useTheme } from './theme'

function Settings() {
  const { setColors } = useTheme()

  const applyBrand = () => {
    setColors({
      primary: { dark: '${currentPrimary}', light: '${currentPrimary}' },
      secondary: { dark: '${currentSecondary}', light: '${currentSecondary}' },
    })
  }
}`}
      />

      <h2 className="text-xl font-pixel text-text-primary mb-4 mt-10">Color Tokens</h2>

      <p className="text-sm text-text-secondary mb-4">
        All colors are defined as CSS custom properties on <code className="font-mono text-accent bg-accent-muted px-1 py-0.5 rounded text-[11px]">:root</code>.
        The ThemeProvider swaps these values when the theme changes.
      </p>

      <h3 className="text-sm font-semibold text-text-primary mb-3 mt-6">Backgrounds</h3>
      <div className="rounded-xl border border-border p-4 bg-bg-card mb-4">
        <ColorSwatch name="bg" variable="--bg" description="Page background" />
        <ColorSwatch name="bg-elevated" variable="--bg-elevated" description="Elevated surfaces" />
        <ColorSwatch name="bg-card" variable="--bg-card" description="Card backgrounds" />
        <ColorSwatch name="bg-hover" variable="--bg-hover" description="Hover state backgrounds" />
        <ColorSwatch name="bg-input" variable="--bg-input" description="Input field backgrounds" />
      </div>

      <h3 className="text-sm font-semibold text-text-primary mb-3">Text</h3>
      <div className="rounded-xl border border-border p-4 bg-bg-card mb-4">
        <ColorSwatch name="text-primary" variable="--text-primary" description="Primary text — headings, body" />
        <ColorSwatch name="text-secondary" variable="--text-secondary" description="Secondary text — descriptions" />
        <ColorSwatch name="text-tertiary" variable="--text-tertiary" description="Tertiary text — subtle labels" />
        <ColorSwatch name="text-muted" variable="--text-muted" description="Muted text — placeholders, disabled" />
      </div>

      <h3 className="text-sm font-semibold text-text-primary mb-3">Primary (Accent)</h3>
      <div className="rounded-xl border border-border p-4 bg-bg-card mb-4">
        <ColorSwatch name="accent" variable="--accent" description="Primary accent — buttons, links" />
        <ColorSwatch name="accent-hover" variable="--accent-hover" description="Accent hover state" />
        <ColorSwatch name="accent-muted" variable="--accent-muted" description="Accent backgrounds" />
        <ColorSwatch name="accent-text" variable="--accent-text" description="Text on accent backgrounds" />
      </div>

      <h3 className="text-sm font-semibold text-text-primary mb-3">Secondary</h3>
      <div className="rounded-xl border border-border p-4 bg-bg-card mb-4">
        <ColorSwatch name="secondary" variable="--secondary" description="Secondary color — alternate actions" />
        <ColorSwatch name="secondary-hover" variable="--secondary-hover" description="Secondary hover state" />
        <ColorSwatch name="secondary-muted" variable="--secondary-muted" description="Secondary backgrounds" />
        <ColorSwatch name="secondary-text" variable="--secondary-text" description="Text on secondary backgrounds" />
      </div>

      <h3 className="text-sm font-semibold text-text-primary mb-3">Borders</h3>
      <div className="rounded-xl border border-border p-4 bg-bg-card mb-4">
        <ColorSwatch name="border" variable="--border" description="Default border" />
        <ColorSwatch name="border-hover" variable="--border-hover" description="Hover border" />
        <ColorSwatch name="border-accent" variable="--border-accent" description="Accent-tinted border" />
        <ColorSwatch name="border-secondary" variable="--border-secondary" description="Secondary-tinted border" />
      </div>

      <h3 className="text-sm font-semibold text-text-primary mb-3">Status</h3>
      <div className="rounded-xl border border-border p-4 bg-bg-card mb-6">
        <ColorSwatch name="green" variable="--green" description="Success, positive" />
        <ColorSwatch name="amber" variable="--amber" description="Warning, pending" />
        <ColorSwatch name="red" variable="--red" description="Error, destructive" />
        <ColorSwatch name="blue" variable="--blue" description="Info, links" />
        <ColorSwatch name="purple" variable="--purple" description="Beta, special" />
      </div>

      <h2 className="text-xl font-pixel text-text-primary mb-4">Customizing Colors</h2>

      <p className="text-sm text-text-secondary mb-4">
        Override any token in your CSS to match your brand. The entire component library will adapt automatically:
      </p>

      <DocsCodeBlock
        title="Custom theme override"
        lang="css"
        code={`:root {
  /* Override the primary color */
  --accent: #6366f1;       /* Indigo */
  --accent-hover: #818cf8;
  --accent-muted: rgba(99, 102, 241, 0.12);
  --accent-text: #ffffff;

  /* Override the secondary color */
  --secondary: #f43f5e;    /* Rose */
  --secondary-hover: #fb7185;
  --secondary-muted: rgba(244, 63, 94, 0.12);
  --secondary-text: #ffffff;

  /* Override backgrounds */
  --bg: #0f0f23;           /* Deeper dark */
  --bg-card: rgba(255, 255, 255, 0.03);
}`}
      />

      <div className="p-4 rounded-xl border border-border bg-bg-card mt-4">
        <p className="text-xs text-text-secondary">
          <span className="font-semibold text-accent">Tip:</span> When customizing, keep good contrast ratios between text and background tokens. Use{' '}
          <span className="font-mono text-[11px]">--text-primary</span> on{' '}
          <span className="font-mono text-[11px]">--bg</span> and{' '}
          <span className="font-mono text-[11px]">--text-secondary</span> on{' '}
          <span className="font-mono text-[11px]">--bg-card</span>.
        </p>
      </div>
    </div>
  )
}
