export const info = {
  name: 'Tabs',
  description: 'A tabbed interface for switching between different views or content panels.',
  category: 'Navigation',
  status: 'stable',
  tags: ['tabs', 'navigation', 'panels'],
  install: 'npx shadcn@latest add @lokaui/tabs',
  props: [
    { name: 'defaultValue', type: 'string', default: '', description: 'The initially active tab value' },
    { name: 'variant', type: 'enum', options: ['default', 'pills', 'underline'], default: 'default', description: 'Visual style variant of the tabs' },
  ],
  usage: {
    'JS-CSS': `import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/Tabs'

function App() {
  return (
    <Tabs defaultValue="overview" variant="default">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">Overview content</TabsContent>
      <TabsContent value="analytics">Analytics content</TabsContent>
      <TabsContent value="settings">Settings content</TabsContent>
    </Tabs>
  )
}`,
    'JS-TW': `import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/Tabs'

function App() {
  return (
    <Tabs defaultValue="overview" variant="default">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">Overview content</TabsContent>
      <TabsContent value="analytics">Analytics content</TabsContent>
      <TabsContent value="settings">Settings content</TabsContent>
    </Tabs>
  )
}`,
    'TS-CSS': `import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/Tabs'

function App(): JSX.Element {
  return (
    <Tabs defaultValue="overview" variant="default">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">Overview content</TabsContent>
      <TabsContent value="analytics">Analytics content</TabsContent>
      <TabsContent value="settings">Settings content</TabsContent>
    </Tabs>
  )
}`,
    'TS-TW': `import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/Tabs'

function App(): JSX.Element {
  return (
    <Tabs defaultValue="overview" variant="default">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">Overview content</TabsContent>
      <TabsContent value="analytics">Analytics content</TabsContent>
      <TabsContent value="settings">Settings content</TabsContent>
    </Tabs>
  )
}`,
    'HTML-TW': `<x-tabs default-value="overview" variant="default">
  <x-tabs-list>
    <x-tabs-trigger value="overview">Overview</x-tabs-trigger>
    <x-tabs-trigger value="analytics">Analytics</x-tabs-trigger>
    <x-tabs-trigger value="settings">Settings</x-tabs-trigger>
  </x-tabs-list>
  <x-tabs-content value="overview">Overview content</x-tabs-content>
  <x-tabs-content value="analytics">Analytics content</x-tabs-content>
  <x-tabs-content value="settings">Settings content</x-tabs-content>
</x-tabs>`,
    'RN-TW': `import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/Tabs'

export default function Screen() {
  return (
    <Tabs defaultValue="overview" variant="default">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview"><Text>Overview content</Text></TabsContent>
      <TabsContent value="analytics"><Text>Analytics content</Text></TabsContent>
      <TabsContent value="settings"><Text>Settings content</Text></TabsContent>
    </Tabs>
  )
}`,
    'RN-StyleSheet': `import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/Tabs'

export default function Screen() {
  return (
    <Tabs defaultValue="overview" variant="default">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview"><Text>Overview content</Text></TabsContent>
      <TabsContent value="analytics"><Text>Analytics content</Text></TabsContent>
      <TabsContent value="settings"><Text>Settings content</Text></TabsContent>
    </Tabs>
  )
}`,
  },
  sections: [
    {
      id: 'basic',
      title: 'Basic',
      description: 'A simple tabbed interface for switching content.',
      code: `import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/Tabs'\n\n<Tabs defaultValue="tab1">\n  <TabsList>\n    <TabsTrigger value="tab1">Tab 1</TabsTrigger>\n    <TabsTrigger value="tab2">Tab 2</TabsTrigger>\n  </TabsList>\n  <TabsContent value="tab1">Content 1</TabsContent>\n</Tabs>`,
      previews: [{}],
    },
    {
      id: 'variant',
      title: 'Variant',
      description: 'Use the variant prop to change the visual style of the tabs.',
      code: `<Tabs variant="default">...</Tabs>\n<Tabs variant="pills">...</Tabs>\n<Tabs variant="underline">...</Tabs>`,
      previews: [
        { variant: 'default' },
        { variant: 'pills' },
        { variant: 'underline' },
      ],
    },
  ],
}
