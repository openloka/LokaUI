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
  sections: [
    {
      id: 'basic',
      title: 'Basic',
      description: 'A simple vertical sidebar for navigation.',
      code: `import { Sidebar, SidebarItem, SidebarGroup } from './components/ui/Sidebar'\n\n<Sidebar>\n  <SidebarGroup label="Main">\n    <SidebarItem href="/dashboard">Dashboard</SidebarItem>\n    <SidebarItem href="/settings">Settings</SidebarItem>\n  </SidebarGroup>\n</Sidebar>`,
      previews: [{}],
    },
    {
      id: 'collapsed',
      title: 'Collapsed',
      description: 'Set collapsed to show icon-only mode.',
      code: `<Sidebar collapsed>\n  <SidebarItem href="/dashboard">Dashboard</SidebarItem>\n</Sidebar>`,
      previews: [{ collapsed: true }],
    },
  ],
}
