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

function App() {
  return (
    <div>
      <Skeleton variant="circular" width="40px" height="40px" />
      <Skeleton variant="text" width="200px" />
      <Skeleton variant="rectangular" width="100%" height="120px" />
    </div>
  )
}`,
    'JS-TW': `import Skeleton from './components/ui/Skeleton'

function App() {
  return (
    <div>
      <Skeleton variant="circular" width="40px" height="40px" />
      <Skeleton variant="text" width="200px" />
      <Skeleton variant="rectangular" width="100%" height="120px" />
    </div>
  )
}`,
    'TS-CSS': `import Skeleton from './components/ui/Skeleton'

function App(): JSX.Element {
  return (
    <div>
      <Skeleton variant="circular" width="40px" height="40px" />
      <Skeleton variant="text" width="200px" />
      <Skeleton variant="rectangular" width="100%" height="120px" />
    </div>
  )
}`,
    'TS-TW': `import Skeleton from './components/ui/Skeleton'

function App(): JSX.Element {
  return (
    <div>
      <Skeleton variant="circular" width="40px" height="40px" />
      <Skeleton variant="text" width="200px" />
      <Skeleton variant="rectangular" width="100%" height="120px" />
    </div>
  )
}`,
    'HTML-TW': `<x-skeleton variant="circular" width="40px" height="40px" />
<x-skeleton variant="text" width="200px" />
<x-skeleton variant="rectangular" width="100%" height="120px" />`,
    'RN-TW': `import Skeleton from './components/ui/Skeleton'

export default function Screen() {
  return (
    <View>
      <Skeleton variant="circular" width="40px" height="40px" />
      <Skeleton variant="text" width="200px" />
      <Skeleton variant="rectangular" width="100%" height="120px" />
    </View>
  )
}`,
    'RN-StyleSheet': `import Skeleton from './components/ui/Skeleton'

export default function Screen() {
  return (
    <View>
      <Skeleton variant="circular" width="40px" height="40px" />
      <Skeleton variant="text" width="200px" />
      <Skeleton variant="rectangular" width="100%" height="120px" />
    </View>
  )
}`,
  },
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
