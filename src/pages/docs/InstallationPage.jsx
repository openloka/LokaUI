import { useState } from 'react'
import DocsCodeBlock from '../../components/common/DocsCodeBlock'

const FRAMEWORKS = [
  { key: 'react', label: 'React' },
  { key: 'laravel', label: 'Laravel' },
  { key: 'react-native', label: 'React Native' },
]

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

function ReactGuide() {
  return (
    <>
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

      <Step number="3" title="Initialize LokaUI">
        <p className="text-sm text-text-secondary mb-3">
          Run the LokaUI CLI to set up your project. It will auto-detect your settings and add theme tokens:
        </p>
        <DocsCodeBlock
          title="Terminal"
          lang="bash"
          code={`npx @lokaui/cli init`}
        />
        <p className="text-sm text-text-secondary mt-3">
          This creates a <code className="font-mono text-accent bg-accent-muted px-1 py-0.5 rounded text-[11px]">lokaui.json</code> config file and optionally adds LokaUI CSS tokens to your stylesheet.
        </p>
      </Step>

      <Step number="4" title="Add components">
        <p className="text-sm text-text-secondary mb-3">
          Add a single component:
        </p>
        <DocsCodeBlock
          title="Terminal"
          lang="bash"
          code={`npx @lokaui/cli add button`}
        />
        <p className="text-sm text-text-secondary mt-4 mb-3">
          Add multiple components at once:
        </p>
        <DocsCodeBlock
          title="Terminal"
          lang="bash"
          code={`npx @lokaui/cli add button input badge dialog`}
        />
        <p className="text-sm text-text-secondary mt-4 mb-3">
          Or use the interactive picker to browse and select:
        </p>
        <DocsCodeBlock
          title="Terminal"
          lang="bash"
          code={`npx @lokaui/cli add`}
        />
        <p className="text-sm text-text-secondary mt-4 mb-3">
          Install all available components:
        </p>
        <DocsCodeBlock
          title="Terminal"
          lang="bash"
          code={`npx @lokaui/cli add --all`}
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
    </>
  )
}

function LaravelGuide() {
  return (
    <>
      <Step number="1" title="Create a Laravel project">
        <p className="text-sm text-text-secondary mb-3">
          If you're starting fresh, create a new Laravel project. Tailwind CSS comes pre-configured:
        </p>
        <DocsCodeBlock
          title="Terminal"
          lang="bash"
          code={`laravel new my-app
cd my-app`}
        />
      </Step>

      <Step number="2" title="Install LokaUI CLI">
        <p className="text-sm text-text-secondary mb-3">
          Install the LokaUI Composer package:
        </p>
        <DocsCodeBlock
          title="Terminal"
          lang="bash"
          code={`composer require lokaui/cli --dev`}
        />
      </Step>

      <Step number="3" title="Initialize LokaUI">
        <p className="text-sm text-text-secondary mb-3">
          Run the init command to configure LokaUI and add theme tokens:
        </p>
        <DocsCodeBlock
          title="Terminal"
          lang="bash"
          code={`php artisan lokaui:init`}
        />
        <p className="text-sm text-text-secondary mt-3">
          This creates a <code className="font-mono text-accent bg-accent-muted px-1 py-0.5 rounded text-[11px]">lokaui.json</code> config and optionally adds CSS tokens to your stylesheet.
        </p>
      </Step>

      <Step number="4" title="Add components">
        <p className="text-sm text-text-secondary mb-3">
          Add a single component:
        </p>
        <DocsCodeBlock
          title="Terminal"
          lang="bash"
          code={`php artisan lokaui:add button`}
        />
        <p className="text-sm text-text-secondary mt-4 mb-3">
          Add multiple components at once:
        </p>
        <DocsCodeBlock
          title="Terminal"
          lang="bash"
          code={`php artisan lokaui:add button input badge`}
        />
        <p className="text-sm text-text-secondary mt-4 mb-3">
          Or use the interactive picker:
        </p>
        <DocsCodeBlock
          title="Terminal"
          lang="bash"
          code={`php artisan lokaui:add`}
        />
        <p className="text-sm text-text-secondary mt-4 mb-3">
          Install all available components:
        </p>
        <DocsCodeBlock
          title="Terminal"
          lang="bash"
          code={`php artisan lokaui:add --all`}
        />
      </Step>

      <Step number="5" title="Use the component">
        <p className="text-sm text-text-secondary mb-3">
          Use LokaUI components as Blade components in your templates:
        </p>
        <DocsCodeBlock
          title="welcome.blade.php"
          lang="php"
          code={`<x-ui.button variant="primary" size="md">
    Click me
</x-ui.button>`}
        />
      </Step>
    </>
  )
}

function ReactNativeGuide() {
  return (
    <>
      <Step number="1" title="Create an Expo project">
        <p className="text-sm text-text-secondary mb-3">
          If you're starting fresh, create a new Expo project:
        </p>
        <DocsCodeBlock
          title="Terminal"
          lang="bash"
          code={`npx create-expo-app my-app
cd my-app`}
        />
      </Step>

      <Step number="2" title="Install NativeWind">
        <p className="text-sm text-text-secondary mb-3">
          Set up NativeWind for Tailwind CSS support in React Native:
        </p>
        <DocsCodeBlock
          title="Terminal"
          lang="bash"
          code={`npx nativewind@latest init`}
        />
      </Step>

      <Step number="3" title="Initialize LokaUI">
        <p className="text-sm text-text-secondary mb-3">
          Run the LokaUI CLI — it will auto-detect React Native:
        </p>
        <DocsCodeBlock
          title="Terminal"
          lang="bash"
          code={`npx @lokaui/cli init`}
        />
      </Step>

      <Step number="4" title="Add components">
        <p className="text-sm text-text-secondary mb-3">
          Add a single component:
        </p>
        <DocsCodeBlock
          title="Terminal"
          lang="bash"
          code={`npx @lokaui/cli add button`}
        />
        <p className="text-sm text-text-secondary mt-4 mb-3">
          Add multiple components at once:
        </p>
        <DocsCodeBlock
          title="Terminal"
          lang="bash"
          code={`npx @lokaui/cli add button input badge`}
        />
        <p className="text-sm text-text-secondary mt-4 mb-3">
          Or use the interactive picker:
        </p>
        <DocsCodeBlock
          title="Terminal"
          lang="bash"
          code={`npx @lokaui/cli add`}
        />
      </Step>

      <Step number="5" title="Use the component">
        <DocsCodeBlock
          title="App.tsx"
          lang="tsx"
          code={`import Button from './components/ui/Button'

export default function App() {
  return (
    <Button variant="primary" size="md">
      Click me
    </Button>
  )
}`}
        />
      </Step>
    </>
  )
}

export default function InstallationPage() {
  const [framework, setFramework] = useState('react')

  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-pixel text-text-primary mb-3">Installation</h1>
      <p className="text-text-secondary text-base leading-relaxed mb-8">
        Get started with LokaUI in your project. Install components via the CLI or copy the source code directly.
      </p>

      {/* Framework tabs */}
      <div className="flex gap-1 mb-8 border-b border-border">
        {FRAMEWORKS.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setFramework(key)}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              framework === key
                ? 'text-accent border-b-2 border-accent'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <h2 className="text-xl font-pixel text-text-primary mb-5">Method 1: CLI (Recommended)</h2>

      {framework === 'react' && <ReactGuide />}
      {framework === 'laravel' && <LaravelGuide />}
      {framework === 'react-native' && <ReactNativeGuide />}

      <div className="border-t border-border pt-8 mt-4">
        <h2 className="text-xl font-pixel text-text-primary mb-5">Method 2: Manual Copy</h2>

        <p className="text-sm text-text-secondary mb-4">
          Prefer to copy manually? Every component page shows the full source code. Just:
        </p>

        <ol className="list-decimal list-inside space-y-2 text-sm text-text-secondary mb-6">
          <li>Navigate to the component you want (e.g., <span className="text-accent font-mono text-xs">/foundations/button</span>)</li>
          <li>Select your preferred variant ({framework === 'laravel' ? 'Blade + Tailwind' : framework === 'react-native' ? 'RN + Tailwind/StyleSheet' : 'JS/TS × CSS/TW'})</li>
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
