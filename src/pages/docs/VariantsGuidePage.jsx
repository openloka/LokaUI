import { Link } from 'react-router-dom'
import DocsCodeBlock from '../../components/common/DocsCodeBlock'

const variantData = [
  {
    key: 'JS-CSS',
    lang: 'JavaScript',
    style: 'Vanilla CSS',
    file: 'Button.jsx + Button.css',
    description: 'Standard React component with a companion CSS file. Uses BEM-style class names. No build tool dependencies beyond a CSS loader.',
    bestFor: 'Projects without Tailwind, or teams that prefer traditional CSS.',
  },
  {
    key: 'JS-TW',
    lang: 'JavaScript',
    style: 'Tailwind CSS',
    file: 'Button.tw.jsx',
    description: 'Single-file component with Tailwind utility classes. No separate CSS file needed.',
    bestFor: 'Most React + Tailwind projects. The default choice.',
  },
  {
    key: 'TS-CSS',
    lang: 'TypeScript',
    style: 'Vanilla CSS',
    file: 'Button.tsx + Button.css',
    description: 'TypeScript version with full prop type definitions and a companion CSS file.',
    bestFor: 'TypeScript projects without Tailwind.',
  },
  {
    key: 'TS-TW',
    lang: 'TypeScript',
    style: 'Tailwind CSS',
    file: 'Button.tw.tsx',
    description: 'TypeScript + Tailwind. Full type safety with utility-first styling.',
    bestFor: 'TypeScript + Tailwind projects. Most type-safe option.',
  },
]

const futureVariants = [
  {
    key: 'HTML-TW',
    platform: 'Laravel',
    file: 'button.blade.php',
    description: 'Blade component with Tailwind classes. Uses @props directive for type-safe prop defaults.',
    status: 'Button only',
  },
  {
    key: 'RN-TW',
    platform: 'React Native',
    file: 'Button.tw.tsx',
    description: 'React Native component using NativeWind for Tailwind-style className support.',
    status: 'Button only',
  },
  {
    key: 'RN-StyleSheet',
    platform: 'React Native',
    file: 'Button.stylesheet.tsx',
    description: 'React Native component using StyleSheet.create() for all styles. No Tailwind dependency.',
    status: 'Button only',
  },
]

export default function VariantsGuidePage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-pixel text-text-primary mb-3">Variants Guide</h1>
      <p className="text-text-secondary text-base leading-relaxed mb-8">
        Every LokaUI component ships in multiple variants so you can use the exact tech stack you prefer.
        No compromises — pick your language and styling approach, and get production-ready code.
      </p>

      <h2 className="text-xl font-pixel text-text-primary mb-4">React Variants</h2>
      <p className="text-sm text-text-secondary mb-4">
        Each React component has 4 variants — a 2×2 matrix of language (JS/TS) and styling (CSS/Tailwind):
      </p>

      <div className="space-y-4 mb-10">
        {variantData.map((v) => (
          <div key={v.key} className="p-4 rounded-xl border border-border bg-bg-card">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-accent-muted text-accent">{v.key}</span>
              <span className="text-xs text-text-muted">{v.lang} + {v.style}</span>
            </div>
            <p className="text-sm text-text-secondary mb-1.5">{v.description}</p>
            <p className="text-xs text-text-muted">
              <span className="font-semibold">Files:</span> <code className="font-mono text-text-tertiary">{v.file}</code>
            </p>
            <p className="text-xs text-text-muted mt-0.5">
              <span className="font-semibold">Best for:</span> {v.bestFor}
            </p>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-pixel text-text-primary mb-4">Using the Variant Selector</h2>

      <p className="text-sm text-text-secondary mb-4">
        On each component page, the code panel has a variant selector in the top-right corner:
      </p>

      <div className="p-4 rounded-xl border border-border bg-bg-card mb-6">
        <div className="flex items-center gap-4">
          <div>
            <span className="text-xs text-text-muted block mb-1">Language</span>
            <div className="flex gap-1 bg-bg-elevated rounded-md p-0.5">
              <span className="px-2.5 py-1 text-xs rounded bg-accent/20 text-accent font-medium">JS</span>
              <span className="px-2.5 py-1 text-xs rounded text-text-muted">TS</span>
            </div>
          </div>
          <div>
            <span className="text-xs text-text-muted block mb-1">Styling</span>
            <div className="flex gap-1 bg-bg-elevated rounded-md p-0.5">
              <span className="px-2.5 py-1 text-xs rounded text-text-muted">CSS</span>
              <span className="px-2.5 py-1 text-xs rounded bg-accent/20 text-accent font-medium">TW</span>
            </div>
          </div>
        </div>
        <p className="text-xs text-text-muted mt-3">Your selection is remembered in the URL — share a link and others see the same variant.</p>
      </div>

      <h2 className="text-xl font-pixel text-text-primary mb-4">File Naming Convention</h2>

      <DocsCodeBlock
        title="Component folder structure"
        lang="bash"
        code={`src/content/Foundations/Button/
├── react/
│   ├── Button.jsx          # JS-CSS
│   ├── Button.css           # Styles for CSS variants
│   ├── Button.tw.jsx        # JS-TW
│   ├── Button.tsx           # TS-CSS
│   └── Button.tw.tsx        # TS-TW
├── laravel/
│   └── button.blade.php     # HTML-TW
├── react-native/
│   ├── Button.tw.tsx        # RN-TW
│   └── Button.stylesheet.tsx # RN-StyleSheet
├── index.js                  # Variant map
└── info.js                   # Component metadata`}
      />

      <p className="text-sm text-text-secondary mb-6">
        The pattern: <code className="font-mono text-accent bg-accent-muted px-1 py-0.5 rounded text-[11px]">Component.tw.tsx</code> = Tailwind variant,
        <code className="font-mono text-accent bg-accent-muted px-1 py-0.5 rounded text-[11px] ml-1">Component.tsx</code> = CSS variant.
        The <code className="font-mono text-[11px] text-text-tertiary">.tw</code> suffix indicates Tailwind styling.
      </p>

      <h2 className="text-xl font-pixel text-text-primary mb-4">Platform Variants (Coming Soon)</h2>

      <p className="text-sm text-text-secondary mb-4">
        Beyond React, LokaUI is expanding to other platforms. Currently only the Button component has these variants — more are coming.
      </p>

      <div className="space-y-4 mb-8">
        {futureVariants.map((v) => (
          <div key={v.key} className="p-4 rounded-xl border border-border bg-bg-card">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-status-amber-muted text-status-amber">{v.key}</span>
              <span className="text-xs text-text-muted">{v.platform}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-status-amber-muted text-status-amber font-mono ml-auto">{v.status}</span>
            </div>
            <p className="text-sm text-text-secondary mb-1">{v.description}</p>
            <p className="text-xs text-text-muted">
              <span className="font-semibold">File:</span> <code className="font-mono text-text-tertiary">{v.file}</code>
            </p>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <Link to="/foundations/button" className="px-5 py-2.5 bg-accent text-accent-text text-sm font-semibold rounded-lg hover:bg-accent-hover transition-colors">
          See Button Variants
        </Link>
        <Link to="/docs/theming" className="px-5 py-2.5 border border-border text-text-primary text-sm font-semibold rounded-lg hover:bg-bg-hover transition-colors">
          Theming Guide
        </Link>
      </div>
    </div>
  )
}
