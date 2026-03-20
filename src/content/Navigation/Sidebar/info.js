export const info = {
  name: 'Sidebar',
  description: 'A vertical navigation panel for app-level or section-level navigation.',
  category: 'Navigation',
  status: 'stable',
  tags: ['sidebar', 'navigation', 'menu', 'panel'],
  install: 'npx shadcn@latest add @lokaui/sidebar',
  props: [
    { name: 'collapsed', type: 'boolean', default: false, description: 'Whether the sidebar is collapsed to icon-only mode' },
    { name: 'width', type: 'enum', options: ['sm', 'md', 'lg'], default: 'md', description: 'Width of the sidebar' },
  ],
  usage: {
    'JS-CSS': `import { Sidebar, SidebarItem, SidebarGroup } from './components/ui/Sidebar'

<Sidebar>
  <SidebarGroup label="Main">
    <SidebarItem href="/dashboard">Dashboard</SidebarItem>
    <SidebarItem href="/settings">Settings</SidebarItem>
  </SidebarGroup>
</Sidebar>`,
    'JS-TW': `import { Sidebar, SidebarItem, SidebarGroup } from './components/ui/Sidebar'

<Sidebar>
  <SidebarGroup label="Main">
    <SidebarItem href="/dashboard">Dashboard</SidebarItem>
    <SidebarItem href="/settings">Settings</SidebarItem>
  </SidebarGroup>
</Sidebar>`,
    'TS-CSS': `import { Sidebar, SidebarItem, SidebarGroup } from './components/ui/Sidebar'

<Sidebar>
  <SidebarGroup label="Main">
    <SidebarItem href="/dashboard">Dashboard</SidebarItem>
    <SidebarItem href="/settings">Settings</SidebarItem>
  </SidebarGroup>
</Sidebar>`,
    'TS-TW': `import { Sidebar, SidebarItem, SidebarGroup } from './components/ui/Sidebar'

<Sidebar>
  <SidebarGroup label="Main">
    <SidebarItem href="/dashboard">Dashboard</SidebarItem>
    <SidebarItem href="/settings">Settings</SidebarItem>
  </SidebarGroup>
</Sidebar>`,
  },
}
