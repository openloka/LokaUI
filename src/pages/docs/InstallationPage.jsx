import DocsCodeBlock from '../../components/common/DocsCodeBlock'

function Step({ number, title, children }) {
  return (
    <div className="flex gap-4 mb-8">
      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-accent text-accent-text text-xs font-bold flex items-center justify-center mt-0.5">{number}</span>
      <div className="flex-1">
        <h3 className="text-base font-semibold text-text-primary mb-3">{title}</h3>
        {children}
      </div>
    </div>
  )
}

export default function InstallationPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-pixel text-text-primary mb-3">Installation</h1>
      <p className="text-text-secondary text-base leading-relaxed mb-8">
        Get started with LokaUI in your project. You can install components via the shadcn CLI or copy the source code directly.
      </p>

      <h2 className="text-xl font-pixel text-text-primary mb-5">Method 1: CLI (Recommended)</h2>

      <Step number="1" title="Initialize your project">
        <p className="text-sm text-text-secondary mb-3">
          Make sure you have a React project with Tailwind CSS configured. If you're starting fresh:
        </p>
        <DocsCodeBlock
          title="Terminal"
          lang="bash"
          code={`npm create vite@latest my-app -- --template react
cd my-app
npm install`}
        />
      </Step>

      <Step number="2" title="Set up Tailwind CSS">
        <p className="text-sm text-text-secondary mb-3">
          Install and configure Tailwind CSS v4:
        </p>
        <DocsCodeBlock
          title="Terminal"
          lang="bash"
          code={`npm install tailwindcss @tailwindcss/postcss postcss`}
        />
        <DocsCodeBlock
          title="postcss.config.js"
          lang="javascript"
          code={`export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}`}
        />
        <DocsCodeBlock
          title="src/styles.css"
          lang="css"
          code={`@import 'tailwindcss';`}
        />
      </Step>

      <Step number="3" title="Add LokaUI theme tokens">
        <p className="text-sm text-text-secondary mb-3">
          Add the LokaUI color tokens to your CSS. These CSS custom properties power all component styling:
        </p>
        <DocsCodeBlock
          title="src/styles.css"
          lang="css"
          code={`:root {
  --bg: #09090b;
  --bg-elevated: rgba(255,255,255,0.03);
  --bg-hover: rgba(255,255,255,0.055);
  --bg-card: rgba(255,255,255,0.025);
  --bg-input: rgba(255,255,255,0.04);
  --border: rgba(255,255,255,0.07);
  --border-hover: rgba(255,255,255,0.13);
  --text-primary: #fafafa;
  --text-secondary: #a1a1aa;
  --text-muted: #52525b;
  --accent: #0ea58e;
  --accent-hover: #10b99b;
  --accent-muted: rgba(14,165,142,0.12);
}`}
        />
      </Step>

      <Step number="4" title="Install a component">
        <p className="text-sm text-text-secondary mb-3">
          Use the shadcn CLI to add components to your project:
        </p>
        <DocsCodeBlock
          title="Terminal"
          lang="bash"
          code={`npx shadcn@latest add @lokaui/button`}
        />
        <p className="text-sm text-text-secondary mt-3">
          This copies the component source code into your project. You own the code — customize it however you want.
        </p>
      </Step>

      <Step number="5" title="Use the component">
        <DocsCodeBlock
          title="App.jsx"
          lang="jsx"
          code={`import Button from './components/ui/Button'

export default function App() {
  return (
    <div>
      <Button variant="primary" size="md">
        Click me
      </Button>
    </div>
  )
}`}
        />
      </Step>

      <div className="border-t border-border pt-8 mt-4">
        <h2 className="text-xl font-pixel text-text-primary mb-5">Method 2: Manual Copy</h2>

        <p className="text-sm text-text-secondary mb-4">
          Prefer to copy manually? Every component page shows the full source code. Just:
        </p>

        <ol className="list-decimal list-inside space-y-2 text-sm text-text-secondary mb-6">
          <li>Navigate to the component you want (e.g., <span className="text-accent font-mono text-xs">/foundations/button</span>)</li>
          <li>Select your preferred variant (JS/TS × CSS/TW)</li>
          <li>Click the copy button in the code panel</li>
          <li>Paste into your project</li>
        </ol>

        <div className="p-4 rounded-xl border border-border bg-bg-card">
          <p className="text-xs text-text-secondary">
            <span className="font-semibold text-status-amber">Note:</span> When copying the CSS variant, make sure to also copy the companion <code className="font-mono text-accent bg-accent-muted px-1 py-0.5 rounded text-[11px]">.css</code> file.
          </p>
        </div>
      </div>
    </div>
  )
}
