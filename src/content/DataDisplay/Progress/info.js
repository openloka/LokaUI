export const info = {
  name: 'Progress',
  description: 'A bar indicator showing completion or loading progress.',
  category: 'DataDisplay',
  status: 'stable',
  tags: ['progress', 'loading', 'bar', 'percentage'],
  install: 'npx shadcn@latest add @lokaui/progress',
  props: [
    { name: 'value', type: 'number', default: 0, description: 'Current progress value (0-100)' },
    { name: 'variant', type: 'enum', options: ['default', 'success', 'warning'], default: 'default', description: 'Visual style variant of the progress bar' },
    { name: 'showLabel', type: 'boolean', default: false, description: 'Whether to display the percentage label' },
  ],
  usage: {
    'JS-CSS': `import Progress from './components/ui/Progress'

<Progress value={65} variant="success" showLabel />`,
    'JS-TW': `import Progress from './components/ui/Progress'

<Progress value={65} variant="success" showLabel />`,
    'TS-CSS': `import Progress from './components/ui/Progress'

<Progress value={65} variant="success" showLabel />`,
    'TS-TW': `import Progress from './components/ui/Progress'

<Progress value={65} variant="success" showLabel />`,
  },
}
