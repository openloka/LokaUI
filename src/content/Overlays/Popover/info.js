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
  sections: [
    {
      id: 'basic',
      title: 'Basic',
      description: 'A simple popover anchored to a trigger element.',
      code: `import Popover from './components/ui/Popover'\n\n<Popover trigger={<button>Open</button>}>\n  <div>Popover content</div>\n</Popover>`,
      previews: [{}],
    },
    {
      id: 'placement',
      title: 'Placement',
      description: 'Use the side prop to control the popover position.',
      code: `<Popover side="top" trigger={<button>Top</button>}>Content</Popover>\n<Popover side="bottom" trigger={<button>Bottom</button>}>Content</Popover>\n<Popover side="left" trigger={<button>Left</button>}>Content</Popover>\n<Popover side="right" trigger={<button>Right</button>}>Content</Popover>`,
      previews: [
        { side: 'top' },
        { side: 'bottom' },
        { side: 'left' },
        { side: 'right' },
      ],
    },
  ],
}
