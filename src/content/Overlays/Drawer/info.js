export const info = {
  name: 'Drawer',
  description: 'A slide-out panel from the edge of the screen for navigation or forms.',
  category: 'Overlays',
  status: 'stable',
  tags: ['drawer', 'panel', 'slide', 'overlay'],
  install: 'npx shadcn@latest add @lokaui/drawer',
  props: [
    { name: 'open', type: 'boolean', default: false, description: 'Whether the drawer is visible' },
    { name: 'side', type: 'enum', options: ['left', 'right'], default: 'right', description: 'Which side the drawer slides from' },
    { name: 'onClose', type: '() => void', default: '', description: 'Callback when the drawer is closed' },
  ],
  usage: {
    'JS-CSS': `import Drawer from './components/ui/Drawer'

<Drawer open={isOpen} side="right" onClose={() => setOpen(false)}>
  <nav>Menu items</nav>
</Drawer>`,
    'JS-TW': `import Drawer from './components/ui/Drawer'

<Drawer open={isOpen} side="right" onClose={() => setOpen(false)}>
  <nav>Menu items</nav>
</Drawer>`,
    'TS-CSS': `import Drawer from './components/ui/Drawer'

<Drawer open={isOpen} side="right" onClose={() => setOpen(false)}>
  <nav>Menu items</nav>
</Drawer>`,
    'TS-TW': `import Drawer from './components/ui/Drawer'

<Drawer open={isOpen} side="right" onClose={() => setOpen(false)}>
  <nav>Menu items</nav>
</Drawer>`,
  },
}
