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

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
</Tabs>`,
    'JS-TW': `import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/Tabs'

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
</Tabs>`,
    'TS-CSS': `import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/Tabs'

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
</Tabs>`,
    'TS-TW': `import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/Tabs'

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
</Tabs>`,
  },
}
