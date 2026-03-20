export const info = {
  name: 'Popover',
  description: 'A floating content panel anchored to a trigger element.',
  category: 'Overlays',
  status: 'stable',
  tags: ['popover', 'floating', 'dropdown', 'overlay'],
  install: 'npx shadcn@latest add @lokaui/popover',
  props: [
    { name: 'open', type: 'boolean', default: false, description: 'Whether the popover is visible' },
    { name: 'side', type: 'enum', options: ['top', 'bottom', 'left', 'right'], default: 'bottom', description: 'Position of the popover relative to the trigger' },
  ],
  usage: {
    'JS-CSS': `import Popover from './components/ui/Popover'

<Popover trigger={<button>Open</button>}>
  <div>Popover content</div>
</Popover>`,
    'JS-TW': `import Popover from './components/ui/Popover'

<Popover trigger={<button>Open</button>}>
  <div>Popover content</div>
</Popover>`,
    'TS-CSS': `import Popover from './components/ui/Popover'

<Popover trigger={<button>Open</button>}>
  <div>Popover content</div>
</Popover>`,
    'TS-TW': `import Popover from './components/ui/Popover'

<Popover trigger={<button>Open</button>}>
  <div>Popover content</div>
</Popover>`,
  },
}
