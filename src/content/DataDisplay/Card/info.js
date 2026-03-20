export const info = {
  name: 'Card',
  description: 'A container for grouping related content with optional header and footer.',
  category: 'DataDisplay',
  status: 'stable',
  tags: ['card', 'container', 'panel'],
  install: 'npx shadcn@latest add @lokaui/card',
  props: [
    { name: 'variant', type: 'enum', options: ['default', 'outlined', 'elevated'], default: 'default', description: 'Visual style variant of the card' },
    { name: 'padding', type: 'enum', options: ['sm', 'md', 'lg'], default: 'md', description: 'Internal padding size' },
  ],
  usage: {
    'JS-CSS': `import Card from './components/ui/Card'

<Card variant="outlined" padding="md">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</Card>`,
    'JS-TW': `import Card from './components/ui/Card'

<Card variant="outlined" padding="md">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</Card>`,
    'TS-CSS': `import Card from './components/ui/Card'

<Card variant="outlined" padding="md">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</Card>`,
    'TS-TW': `import Card from './components/ui/Card'

<Card variant="outlined" padding="md">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</Card>`,
  },
}
