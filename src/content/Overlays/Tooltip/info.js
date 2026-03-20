export const info = {
  name: 'Tooltip',
  description: 'A small popup that displays information when hovering over an element.',
  category: 'Overlays',
  status: 'stable',
  tags: ['tooltip', 'hover', 'popup', 'info'],
  install: 'npx shadcn@latest add @lokaui/tooltip',
  props: [
    { name: 'content', type: 'string', default: '', description: 'Text content displayed in the tooltip' },
    { name: 'side', type: 'enum', options: ['top', 'bottom', 'left', 'right'], default: 'top', description: 'Position of the tooltip relative to the trigger' },
  ],
  usage: {
    'JS-CSS': `import Tooltip from './components/ui/Tooltip'

<Tooltip content="More info" side="top">
  <button>Hover me</button>
</Tooltip>`,
    'JS-TW': `import Tooltip from './components/ui/Tooltip'

<Tooltip content="More info" side="top">
  <button>Hover me</button>
</Tooltip>`,
    'TS-CSS': `import Tooltip from './components/ui/Tooltip'

<Tooltip content="More info" side="top">
  <button>Hover me</button>
</Tooltip>`,
    'TS-TW': `import Tooltip from './components/ui/Tooltip'

<Tooltip content="More info" side="top">
  <button>Hover me</button>
</Tooltip>`,
  },
}
