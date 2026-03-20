export const info = {
  name: 'Breadcrumb',
  description: 'A navigation aid showing the current page location within a hierarchy.',
  category: 'Navigation',
  status: 'stable',
  tags: ['breadcrumb', 'navigation', 'path'],
  install: 'npx shadcn@latest add @lokaui/breadcrumb',
  props: [
    { name: 'separator', type: 'enum', options: ['chevron', 'slash', 'dot'], default: 'chevron', description: 'Separator character between breadcrumb items' },
  ],
  usage: {
    'JS-CSS': `import { Breadcrumb, BreadcrumbItem } from './components/ui/Breadcrumb'

function App() {
  return (
    <Breadcrumb separator="chevron">
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/docs">Docs</BreadcrumbItem>
      <BreadcrumbItem active>Current Page</BreadcrumbItem>
    </Breadcrumb>
  )
}`,
    'JS-TW': `import { Breadcrumb, BreadcrumbItem } from './components/ui/Breadcrumb'

function App() {
  return (
    <Breadcrumb separator="chevron">
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/docs">Docs</BreadcrumbItem>
      <BreadcrumbItem active>Current Page</BreadcrumbItem>
    </Breadcrumb>
  )
}`,
    'TS-CSS': `import { Breadcrumb, BreadcrumbItem } from './components/ui/Breadcrumb'

function App(): JSX.Element {
  return (
    <Breadcrumb separator="chevron">
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/docs">Docs</BreadcrumbItem>
      <BreadcrumbItem active>Current Page</BreadcrumbItem>
    </Breadcrumb>
  )
}`,
    'TS-TW': `import { Breadcrumb, BreadcrumbItem } from './components/ui/Breadcrumb'

function App(): JSX.Element {
  return (
    <Breadcrumb separator="chevron">
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/docs">Docs</BreadcrumbItem>
      <BreadcrumbItem active>Current Page</BreadcrumbItem>
    </Breadcrumb>
  )
}`,
    'HTML-TW': `<x-breadcrumb separator="chevron">
  <x-breadcrumb-item href="/">Home</x-breadcrumb-item>
  <x-breadcrumb-item href="/docs">Docs</x-breadcrumb-item>
  <x-breadcrumb-item active>Current Page</x-breadcrumb-item>
</x-breadcrumb>`,
    'RN-TW': `import { Breadcrumb, BreadcrumbItem } from './components/ui/Breadcrumb'

export default function Screen() {
  return (
    <Breadcrumb separator="chevron">
      <BreadcrumbItem onPress={() => navigate('/')}>Home</BreadcrumbItem>
      <BreadcrumbItem onPress={() => navigate('/docs')}>Docs</BreadcrumbItem>
      <BreadcrumbItem active>Current Page</BreadcrumbItem>
    </Breadcrumb>
  )
}`,
    'RN-StyleSheet': `import { Breadcrumb, BreadcrumbItem } from './components/ui/Breadcrumb'

export default function Screen() {
  return (
    <Breadcrumb separator="chevron">
      <BreadcrumbItem onPress={() => navigate('/')}>Home</BreadcrumbItem>
      <BreadcrumbItem onPress={() => navigate('/docs')}>Docs</BreadcrumbItem>
      <BreadcrumbItem active>Current Page</BreadcrumbItem>
    </Breadcrumb>
  )
}`,
  },
  sections: [
    {
      id: 'basic',
      title: 'Basic',
      description: 'A simple breadcrumb showing the navigation path.',
      code: `import { Breadcrumb, BreadcrumbItem } from './components/ui/Breadcrumb'\n\n<Breadcrumb>\n  <BreadcrumbItem href="/">Home</BreadcrumbItem>\n  <BreadcrumbItem href="/docs">Docs</BreadcrumbItem>\n  <BreadcrumbItem active>Current</BreadcrumbItem>\n</Breadcrumb>`,
      previews: [{}],
    },
    {
      id: 'separator',
      title: 'Separator',
      description: 'Use the separator prop to change the character between items.',
      code: `<Breadcrumb separator="chevron">...</Breadcrumb>\n<Breadcrumb separator="slash">...</Breadcrumb>\n<Breadcrumb separator="dot">...</Breadcrumb>`,
      previews: [
        { separator: 'chevron' },
        { separator: 'slash' },
        { separator: 'dot' },
      ],
    },
  ],
}
