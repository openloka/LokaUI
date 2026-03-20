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
  sections: [
    {
      id: 'basic',
      title: 'Basic',
      description: 'A simple card container for grouping content.',
      code: `import Card from './components/ui/Card'\n\n<Card>\n  <h3>Card Title</h3>\n  <p>Card content goes here.</p>\n</Card>`,
      previews: [{}],
    },
    {
      id: 'variant',
      title: 'Variant',
      description: 'Use the variant prop to change the card visual style.',
      code: `<Card variant="default">Default</Card>\n<Card variant="outlined">Outlined</Card>\n<Card variant="elevated">Elevated</Card>`,
      previews: [
        { variant: 'default' },
        { variant: 'outlined' },
        { variant: 'elevated' },
      ],
    },
    {
      id: 'padding',
      title: 'Padding',
      description: 'Use the padding prop to control the internal spacing.',
      code: `<Card padding="sm">Small padding</Card>\n<Card padding="md">Medium padding</Card>\n<Card padding="lg">Large padding</Card>`,
      previews: [
        { padding: 'sm' },
        { padding: 'md' },
        { padding: 'lg' },
      ],
    },
  ],
}
