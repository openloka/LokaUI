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

function App() {
  return (
    <Sidebar width="md">
      <SidebarGroup label="Main">
        <SidebarItem href="/dashboard">Dashboard</SidebarItem>
        <SidebarItem href="/settings">Settings</SidebarItem>
      </SidebarGroup>
    </Sidebar>
  )
}`,
    'JS-TW': `import { Sidebar, SidebarItem, SidebarGroup } from './components/ui/Sidebar'

function App() {
  return (
    <Sidebar width="md">
      <SidebarGroup label="Main">
        <SidebarItem href="/dashboard">Dashboard</SidebarItem>
        <SidebarItem href="/settings">Settings</SidebarItem>
      </SidebarGroup>
    </Sidebar>
  )
}`,
    'TS-CSS': `import { Sidebar, SidebarItem, SidebarGroup } from './components/ui/Sidebar'

function App(): JSX.Element {
  return (
    <Sidebar width="md">
      <SidebarGroup label="Main">
        <SidebarItem href="/dashboard">Dashboard</SidebarItem>
        <SidebarItem href="/settings">Settings</SidebarItem>
      </SidebarGroup>
    </Sidebar>
  )
}`,
    'TS-TW': `import { Sidebar, SidebarItem, SidebarGroup } from './components/ui/Sidebar'

function App(): JSX.Element {
  return (
    <Sidebar width="md">
      <SidebarGroup label="Main">
        <SidebarItem href="/dashboard">Dashboard</SidebarItem>
        <SidebarItem href="/settings">Settings</SidebarItem>
      </SidebarGroup>
    </Sidebar>
  )
}`,
    'HTML-TW': `<x-sidebar width="md">
  <x-sidebar-group label="Main">
    <x-sidebar-item href="/dashboard">Dashboard</x-sidebar-item>
    <x-sidebar-item href="/settings">Settings</x-sidebar-item>
  </x-sidebar-group>
</x-sidebar>`,
    'RN-TW': `import { Sidebar, SidebarItem, SidebarGroup } from './components/ui/Sidebar'

export default function Screen() {
  return (
    <Sidebar width="md">
      <SidebarGroup label="Main">
        <SidebarItem onPress={() => navigate('/dashboard')}>Dashboard</SidebarItem>
        <SidebarItem onPress={() => navigate('/settings')}>Settings</SidebarItem>
      </SidebarGroup>
    </Sidebar>
  )
}`,
    'RN-StyleSheet': `import { Sidebar, SidebarItem, SidebarGroup } from './components/ui/Sidebar'

export default function Screen() {
  return (
    <Sidebar width="md">
      <SidebarGroup label="Main">
        <SidebarItem onPress={() => navigate('/dashboard')}>Dashboard</SidebarItem>
        <SidebarItem onPress={() => navigate('/settings')}>Settings</SidebarItem>
      </SidebarGroup>
    </Sidebar>
  )
}`,
  },
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
