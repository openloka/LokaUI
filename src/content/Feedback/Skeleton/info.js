export const info = {
  name: 'Skeleton',
  description: 'A placeholder loading animation that mimics the shape of content.',
  category: 'Feedback',
  status: 'stable',
  tags: ['skeleton', 'loading', 'placeholder'],
  install: 'npx shadcn@latest add @lokaui/skeleton',
  props: [
    { name: 'variant', type: 'enum', options: ['text', 'circular', 'rectangular'], default: 'text', description: 'Shape variant of the skeleton' },
    { name: 'width', type: 'string', default: '100%', description: 'Width of the skeleton element' },
    { name: 'height', type: 'string', default: '1rem', description: 'Height of the skeleton element' },
  ],
  sections: [
    {
      id: 'basic',
      title: 'Basic',
      description: 'A simple skeleton placeholder for loading states.',
      code: `import Skeleton from './components/ui/Skeleton'\n\n<Skeleton width="200px" />`,
      previews: [{}],
    },
    {
      id: 'variant',
      title: 'Variant',
      description: 'Use the variant prop to change the skeleton shape.',
      code: `<Skeleton variant="text" width="200px" />\n<Skeleton variant="circular" width="40px" height="40px" />\n<Skeleton variant="rectangular" width="200px" height="100px" />`,
      previews: [
        { variant: 'text', width: '200px' },
        { variant: 'circular', width: '40px', height: '40px' },
        { variant: 'rectangular', width: '200px', height: '100px' },
      ],
    },
  ],
}
