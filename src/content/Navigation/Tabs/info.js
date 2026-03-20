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
