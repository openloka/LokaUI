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
  usage: {
    'JS-CSS': `import Skeleton from './components/ui/Skeleton'

<Skeleton variant="text" width="200px" />
<Skeleton variant="circular" width="40px" height="40px" />`,
    'JS-TW': `import Skeleton from './components/ui/Skeleton'

<Skeleton variant="text" width="200px" />
<Skeleton variant="circular" width="40px" height="40px" />`,
    'TS-CSS': `import Skeleton from './components/ui/Skeleton'

<Skeleton variant="text" width="200px" />
<Skeleton variant="circular" width="40px" height="40px" />`,
    'TS-TW': `import Skeleton from './components/ui/Skeleton'

<Skeleton variant="text" width="200px" />
<Skeleton variant="circular" width="40px" height="40px" />`,
  },
}
