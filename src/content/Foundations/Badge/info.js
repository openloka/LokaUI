export const info = {
  name: 'Badge',
  description: 'A small status indicator for labels, counts, and categorical information.',
  category: 'Foundations',
  status: 'stable',
  tags: ['badge', 'status', 'label', 'tag'],
  install: 'npx @lokaui/cli add badge',
  props: [
    { name: 'variant', type: 'enum', options: ['default', 'success', 'warning', 'error', 'info'], default: 'default', description: 'Visual style variant of the badge' },
    { name: 'size', type: 'enum', options: ['sm', 'md'], default: 'md', description: 'Size of the badge' },
  ],
  usage: {
    'JS-CSS': `import Badge from './components/ui/Badge'

function App() {
  return (
    <Badge variant="success" size="md">
      Active
    </Badge>
  )
}`,
    'JS-TW': `import Badge from './components/ui/Badge'

function App() {
  return (
    <Badge variant="success" size="md">
      Active
    </Badge>
  )
}`,
    'TS-CSS': `import Badge from './components/ui/Badge'

function App(): JSX.Element {
  return (
    <Badge variant="success" size="md">
      Active
    </Badge>
  )
}`,
    'TS-TW': `import Badge from './components/ui/Badge'

function App(): JSX.Element {
  return (
    <Badge variant="success" size="md">
      Active
    </Badge>
  )
}`,
    'HTML-TW': `<x-badge variant="success" size="md">
  Active
</x-badge>`,
    'RN-TW': `import Badge from './components/ui/Badge'

export default function Screen() {
  return (
    <Badge variant="success" size="md">
      Active
    </Badge>
  )
}`,
    'RN-StyleSheet': `import Badge from './components/ui/Badge'

export default function Screen() {
  return (
    <Badge variant="success" size="md">
      Active
    </Badge>
  )
}`,
  },
  sections: [
    {
      id: 'basic',
      title: 'Basic',
      description: 'A simple badge for displaying short status text.',
      code: `import Badge from './components/ui/Badge'\n\n<Badge>Default</Badge>`,
      previews: [{}],
    },
    {
      id: 'variant',
      title: 'Variant',
      description: 'Use the variant prop to change the visual style for different statuses.',
      code: `<Badge variant="default">Default</Badge>\n<Badge variant="success">Success</Badge>\n<Badge variant="warning">Warning</Badge>\n<Badge variant="error">Error</Badge>\n<Badge variant="info">Info</Badge>`,
      previews: [
        { variant: 'default' },
        { variant: 'success' },
        { variant: 'warning' },
        { variant: 'error' },
        { variant: 'info' },
      ],
    },
    {
      id: 'size',
      title: 'Size',
      description: 'Use the size prop to change the badge size.',
      code: `<Badge size="sm">Small</Badge>\n<Badge size="md">Medium</Badge>`,
      previews: [
        { size: 'sm' },
        { size: 'md' },
      ],
    },
  ],
}
