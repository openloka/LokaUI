export const info = {
  name: 'Button',
  description: 'A versatile button component with multiple variants, sizes, and states. Supports icons, loading state, and full accessibility.',
  category: 'Foundations',
  status: 'stable',
  tags: ['button', 'action', 'click', 'submit'],
  install: 'npx shadcn@latest add @lokaui/button',
  props: [
    { name: 'variant', type: 'enum', options: ['primary', 'secondary', 'ghost'], default: 'primary', description: 'Visual style of the button' },
    { name: 'size', type: 'enum', options: ['sm', 'md', 'lg'], default: 'md', description: 'Size of the button' },
    { name: 'disabled', type: 'boolean', default: false, description: 'Whether the button is disabled' },
    { name: 'loading', type: 'boolean', default: false, description: 'Shows spinner and disables interaction' },
  ],
  usage: {
    'JS-CSS': `import Button from './components/ui/Button'

function App() {
  return (
    <Button variant="primary" size="md">
      Click me
    </Button>
  )
}`,
    'JS-TW': `import Button from './components/ui/Button'

function App() {
  return (
    <Button variant="primary" size="md">
      Click me
    </Button>
  )
}`,
    'TS-CSS': `import Button from './components/ui/Button'

function App() {
  return (
    <Button variant="primary" size="md">
      Click me
    </Button>
  )
}`,
    'TS-TW': `import Button from './components/ui/Button'

function App() {
  return (
    <Button variant="primary" size="md">
      Click me
    </Button>
  )
}`,
    'HTML-TW': `<x-button variant="primary" size="md">
  Click me
</x-button>`,
    'RN-TW': `import Button from './components/ui/Button'

export default function Screen() {
  return (
    <Button variant="primary" size="md" onPress={() => {}}>
      Click me
    </Button>
  )
}`,
    'RN-StyleSheet': `import Button from './components/ui/Button'

export default function Screen() {
  return (
    <Button variant="primary" size="md" onPress={() => {}}>
      Click me
    </Button>
  )
}`,
  },
}
