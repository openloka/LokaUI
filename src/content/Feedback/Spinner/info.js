export const info = {
  name: 'Spinner',
  description: 'An animated loading indicator for async operations.',
  category: 'Feedback',
  status: 'stable',
  tags: ['spinner', 'loading', 'indicator'],
  install: 'npx shadcn@latest add @lokaui/spinner',
  props: [
    { name: 'size', type: 'enum', options: ['sm', 'md', 'lg'], default: 'md', description: 'Size of the spinner' },
    { name: 'color', type: 'enum', options: ['accent', 'white', 'current'], default: 'accent', description: 'Color of the spinner' },
  ],
  usage: {
    'JS-CSS': `import Spinner from './components/ui/Spinner'

<Spinner size="md" />`,
    'JS-TW': `import Spinner from './components/ui/Spinner'

<Spinner size="md" />`,
    'TS-CSS': `import Spinner from './components/ui/Spinner'

<Spinner size="md" />`,
    'TS-TW': `import Spinner from './components/ui/Spinner'

<Spinner size="md" />`,
  },
}
