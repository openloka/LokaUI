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
  sections: [
    {
      id: 'basic',
      title: 'Basic',
      description: 'A simple tooltip that appears on hover.',
      code: `import Tooltip from './components/ui/Tooltip'\n\n<Tooltip content="More info">\n  <button>Hover me</button>\n</Tooltip>`,
      previews: [{}],
    },
    {
      id: 'placement',
      title: 'Placement',
      description: 'Use the side prop to control the tooltip position.',
      code: `<Tooltip content="Top" side="top"><button>Top</button></Tooltip>\n<Tooltip content="Bottom" side="bottom"><button>Bottom</button></Tooltip>\n<Tooltip content="Left" side="left"><button>Left</button></Tooltip>\n<Tooltip content="Right" side="right"><button>Right</button></Tooltip>`,
      previews: [
        { side: 'top', content: 'Top' },
        { side: 'bottom', content: 'Bottom' },
        { side: 'left', content: 'Left' },
        { side: 'right', content: 'Right' },
      ],
    },
  ],
}
