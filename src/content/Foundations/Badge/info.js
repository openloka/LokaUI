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
