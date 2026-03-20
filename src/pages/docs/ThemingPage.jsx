import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { useTheme } from '../../theme'
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

export default function ThemingPage() {
  const { mode, toggle } = useTheme()

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

      <h3 className="text-sm font-semibold text-text-primary mb-3">Accent</h3>
      <div className="rounded-xl border border-border p-4 bg-bg-card mb-4">
        <ColorSwatch name="accent" variable="--accent" description="Primary accent — buttons, links" />
        <ColorSwatch name="accent-hover" variable="--accent-hover" description="Accent hover state" />
        <ColorSwatch name="accent-muted" variable="--accent-muted" description="Accent backgrounds" />
      </div>

      <h3 className="text-sm font-semibold text-text-primary mb-3">Borders</h3>
      <div className="rounded-xl border border-border p-4 bg-bg-card mb-4">
        <ColorSwatch name="border" variable="--border" description="Default border" />
        <ColorSwatch name="border-hover" variable="--border-hover" description="Hover border" />
        <ColorSwatch name="border-accent" variable="--border-accent" description="Accent-tinted border" />
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
  /* Override the accent color */
  --accent: #6366f1;       /* Indigo */
  --accent-hover: #818cf8;
  --accent-muted: rgba(99, 102, 241, 0.12);
  --accent-text: #ffffff;

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
