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
  sections: [
    {
      id: 'basic',
      title: 'Basic',
      description: 'A simple spinning loader for async operations.',
      code: `import Spinner from './components/ui/Spinner'\n\n<Spinner />`,
      previews: [{}],
    },
    {
      id: 'size',
      title: 'Size',
      description: 'Use the size prop to change the spinner size.',
      code: `<Spinner size="sm" />\n<Spinner size="md" />\n<Spinner size="lg" />`,
      previews: [
        { size: 'sm' },
        { size: 'md' },
        { size: 'lg' },
      ],
    },
    {
      id: 'color',
      title: 'Color',
      description: 'Use the color prop to change the spinner color.',
      code: `<Spinner color="accent" />\n<Spinner color="white" />\n<Spinner color="current" />`,
      previews: [
        { color: 'accent' },
        { color: 'white' },
        { color: 'current' },
      ],
    },
  ],
}
