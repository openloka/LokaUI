export const info = {
  name: 'Badge',
  description: 'A small status indicator for labels, counts, and categorical information.',
  category: 'Foundations',
  status: 'stable',
  tags: ['badge', 'status', 'label', 'tag'],
  install: 'npx shadcn@latest add @lokaui/badge',
  props: [
    { name: 'variant', type: 'enum', options: ['default', 'success', 'warning', 'error', 'info'], default: 'default', description: 'Visual style variant of the badge' },
    { name: 'size', type: 'enum', options: ['sm', 'md'], default: 'md', description: 'Size of the badge' },
  ],
  usage: {
    'JS-CSS': `import Badge from './components/ui/Badge'

<Badge variant="success">Active</Badge>`,
    'JS-TW': `import Badge from './components/ui/Badge'

<Badge variant="success">Active</Badge>`,
    'TS-CSS': `import Badge from './components/ui/Badge'

<Badge variant="success">Active</Badge>`,
    'TS-TW': `import Badge from './components/ui/Badge'

<Badge variant="success">Active</Badge>`,
  },
}
