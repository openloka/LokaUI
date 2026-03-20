import { Link } from 'react-router-dom'
import {
  SwatchIcon,
  ClipboardDocumentIcon,
  CubeTransparentIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  CommandLineIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    icon: ShieldCheckIcon,
    title: 'Accessible by Default',
    description: 'Built on Radix UI primitives with full ARIA support, keyboard navigation, and screen reader compatibility out of the box.',
  },
  {
    icon: SwatchIcon,
    title: 'Tailwind Native',
    description: 'Styled with Tailwind CSS utilities. Every component integrates seamlessly with your existing Tailwind setup.',
  },
  {
    icon: ClipboardDocumentIcon,
    title: 'Copy & Paste',
    description: 'No npm dependency lock-in. Copy the component source directly into your project and customize it however you want.',
  },
  {
    icon: CubeTransparentIcon,
    title: 'Multi-Variant',
    description: 'Each component ships in 4 variants — JS-CSS, JS-TW, TS-CSS, TS-TW — so you get exactly the stack you prefer.',
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'Multi-Platform',
    description: 'React today, with Laravel (Blade) and React Native support coming soon. One design system, every platform.',
  },
  {
    icon: CommandLineIcon,
    title: 'CLI Install',
    description: 'Use the shadcn CLI to scaffold components directly into your project with the right variant for your stack.',
  },
]

export default function IntroductionPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-pixel text-text-primary mb-3">Introduction</h1>
      <p className="text-text-secondary text-base leading-relaxed mb-8">
        LokaUI is an open-source collection of beautifully designed, accessible, and fully customizable UI components.
        Built for developers who want complete ownership of their component code — no black-box dependencies, no version lock-in.
      </p>

      <div className="p-5 rounded-xl border border-accent/20 bg-accent-muted mb-8">
        <p className="text-sm text-text-primary">
          <span className="font-semibold text-accent">Quick start →</span>{' '}
          Install your first component in under 30 seconds.{' '}
          <Link to="/docs/installation" className="text-accent underline underline-offset-2 hover:text-accent-hover">
            Go to Installation
          </Link>
        </p>
      </div>

      <h2 className="text-xl font-pixel text-text-primary mb-4">Why LokaUI?</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {features.map((f) => (
          <div key={f.title} className="p-4 rounded-xl border border-border bg-bg-card hover:border-border-hover transition-colors">
            <f.icon className="w-5 h-5 text-accent mb-2" />
            <h3 className="text-sm font-semibold text-text-primary mb-1">{f.title}</h3>
            <p className="text-xs text-text-secondary leading-relaxed">{f.description}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-pixel text-text-primary mb-4">How It Works</h2>

      <div className="space-y-4 mb-10">
        <div className="flex gap-4">
          <span className="flex-shrink-0 w-7 h-7 rounded-full bg-accent text-accent-text text-xs font-bold flex items-center justify-center">1</span>
          <div>
            <h3 className="text-sm font-semibold text-text-primary">Browse components</h3>
            <p className="text-xs text-text-secondary mt-0.5">Find the component you need in the sidebar. Each component has a live preview, interactive props playground, and full source code.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <span className="flex-shrink-0 w-7 h-7 rounded-full bg-accent text-accent-text text-xs font-bold flex items-center justify-center">2</span>
          <div>
            <h3 className="text-sm font-semibold text-text-primary">Choose your variant</h3>
            <p className="text-xs text-text-secondary mt-0.5">Pick from JS or TypeScript, vanilla CSS or Tailwind. Switch between variants with the toggle in the code panel.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <span className="flex-shrink-0 w-7 h-7 rounded-full bg-accent text-accent-text text-xs font-bold flex items-center justify-center">3</span>
          <div>
            <h3 className="text-sm font-semibold text-text-primary">Copy or CLI install</h3>
            <p className="text-xs text-text-secondary mt-0.5">Copy the code directly, or use the shadcn CLI: <code className="font-mono text-accent bg-accent-muted px-1.5 py-0.5 rounded text-[11px]">npx shadcn@latest add @lokaui/button</code></p>
          </div>
        </div>
        <div className="flex gap-4">
          <span className="flex-shrink-0 w-7 h-7 rounded-full bg-accent text-accent-text text-xs font-bold flex items-center justify-center">4</span>
          <div>
            <h3 className="text-sm font-semibold text-text-primary">Customize freely</h3>
            <p className="text-xs text-text-secondary mt-0.5">The component lives in your codebase. Modify styles, add features, remove what you don't need. It's your code.</p>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-pixel text-text-primary mb-4">Component Variants</h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 pr-4 text-xs font-semibold text-text-muted">Platform</th>
              <th className="text-left py-2 pr-4 text-xs font-semibold text-text-muted">Variants</th>
              <th className="text-left py-2 text-xs font-semibold text-text-muted">Status</th>
            </tr>
          </thead>
          <tbody className="text-text-secondary">
            <tr className="border-b border-border/50">
              <td className="py-2.5 pr-4 font-medium text-text-primary">React</td>
              <td className="py-2.5 pr-4 font-mono text-xs">JS-CSS, JS-TW, TS-CSS, TS-TW</td>
              <td className="py-2.5"><span className="text-[10px] px-1.5 py-0.5 rounded bg-status-green-muted text-status-green font-mono">Available</span></td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-2.5 pr-4 font-medium text-text-primary">Laravel</td>
              <td className="py-2.5 pr-4 font-mono text-xs">HTML-TW</td>
              <td className="py-2.5"><span className="text-[10px] px-1.5 py-0.5 rounded bg-status-amber-muted text-status-amber font-mono">Button only</span></td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4 font-medium text-text-primary">React Native</td>
              <td className="py-2.5 pr-4 font-mono text-xs">RN-TW, RN-StyleSheet</td>
              <td className="py-2.5"><span className="text-[10px] px-1.5 py-0.5 rounded bg-status-amber-muted text-status-amber font-mono">Button only</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex gap-3">
        <Link to="/docs/installation" className="px-5 py-2.5 bg-accent text-accent-text text-sm font-semibold rounded-lg hover:bg-accent-hover transition-colors">
          Get Started
        </Link>
        <Link to="/foundations/button" className="px-5 py-2.5 border border-border text-text-primary text-sm font-semibold rounded-lg hover:bg-bg-hover transition-colors">
          Browse Components
        </Link>
      </div>
    </div>
  )
}
