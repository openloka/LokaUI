export const info = {
  name: 'Dialog',
  description: 'A modal dialog overlay for confirmations, forms, and important content.',
  category: 'Overlays',
  status: 'stable',
  tags: ['dialog', 'modal', 'overlay', 'popup'],
  install: 'npx shadcn@latest add @lokaui/dialog',
  props: [
    { name: 'open', type: 'boolean', default: false, description: 'Whether the dialog is visible' },
    { name: 'title', type: 'string', default: '', description: 'Title text for the dialog header' },
    { name: 'onClose', type: '() => void', default: '', description: 'Callback when the dialog is closed' },
  ],
  usage: {
    'JS-CSS': `import Dialog from './components/ui/Dialog'

<Dialog open={isOpen} title="Confirm" onClose={() => setOpen(false)}>
  <p>Are you sure?</p>
</Dialog>`,
    'JS-TW': `import Dialog from './components/ui/Dialog'

<Dialog open={isOpen} title="Confirm" onClose={() => setOpen(false)}>
  <p>Are you sure?</p>
</Dialog>`,
    'TS-CSS': `import Dialog from './components/ui/Dialog'

<Dialog open={isOpen} title="Confirm" onClose={() => setOpen(false)}>
  <p>Are you sure?</p>
</Dialog>`,
    'TS-TW': `import Dialog from './components/ui/Dialog'

<Dialog open={isOpen} title="Confirm" onClose={() => setOpen(false)}>
  <p>Are you sure?</p>
</Dialog>`,
  },
}
