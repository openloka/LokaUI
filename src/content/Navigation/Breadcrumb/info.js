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

<Breadcrumb>
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/docs">Docs</BreadcrumbItem>
  <BreadcrumbItem active>Current</BreadcrumbItem>
</Breadcrumb>`,
    'JS-TW': `import { Breadcrumb, BreadcrumbItem } from './components/ui/Breadcrumb'

<Breadcrumb>
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/docs">Docs</BreadcrumbItem>
  <BreadcrumbItem active>Current</BreadcrumbItem>
</Breadcrumb>`,
    'TS-CSS': `import { Breadcrumb, BreadcrumbItem } from './components/ui/Breadcrumb'

<Breadcrumb>
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/docs">Docs</BreadcrumbItem>
  <BreadcrumbItem active>Current</BreadcrumbItem>
</Breadcrumb>`,
    'TS-TW': `import { Breadcrumb, BreadcrumbItem } from './components/ui/Breadcrumb'

<Breadcrumb>
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/docs">Docs</BreadcrumbItem>
  <BreadcrumbItem active>Current</BreadcrumbItem>
</Breadcrumb>`,
  },
}
