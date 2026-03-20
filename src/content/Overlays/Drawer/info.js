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
  sections: [
    {
      id: 'basic',
      title: 'Basic',
      description: 'A simple slide-out drawer panel.',
      code: `import Drawer from './components/ui/Drawer'\n\n<Drawer open={isOpen} onClose={() => setOpen(false)}>\n  <nav>Menu items</nav>\n</Drawer>`,
      previews: [{}],
    },
    {
      id: 'side',
      title: 'Side',
      description: 'Use the side prop to control which edge the drawer slides from.',
      code: `<Drawer side="left" open={isOpen} onClose={() => setOpen(false)}>\n  Left drawer\n</Drawer>\n<Drawer side="right" open={isOpen} onClose={() => setOpen(false)}>\n  Right drawer\n</Drawer>`,
      previews: [
        { side: 'left', open: true },
        { side: 'right', open: true },
      ],
    },
  ],
}
