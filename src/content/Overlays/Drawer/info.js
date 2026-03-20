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

function App() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Menu</button>
      <Drawer open={open} side="right" onClose={() => setOpen(false)}>
        <nav>Menu items</nav>
      </Drawer>
    </>
  )
}`,
    'JS-TW': `import Drawer from './components/ui/Drawer'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Menu</button>
      <Drawer open={open} side="right" onClose={() => setOpen(false)}>
        <nav>Menu items</nav>
      </Drawer>
    </>
  )
}`,
    'TS-CSS': `import Drawer from './components/ui/Drawer'

function App(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Menu</button>
      <Drawer open={open} side="right" onClose={() => setOpen(false)}>
        <nav>Menu items</nav>
      </Drawer>
    </>
  )
}`,
    'TS-TW': `import Drawer from './components/ui/Drawer'

function App(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Menu</button>
      <Drawer open={open} side="right" onClose={() => setOpen(false)}>
        <nav>Menu items</nav>
      </Drawer>
    </>
  )
}`,
    'HTML-TW': `<x-drawer open side="right">
  <nav>Menu items</nav>
</x-drawer>`,
    'RN-TW': `import Drawer from './components/ui/Drawer'

export default function Screen() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onPress={() => setOpen(true)}>Open Menu</Button>
      <Drawer open={open} side="right" onClose={() => setOpen(false)}>
        <View><Text>Menu items</Text></View>
      </Drawer>
    </>
  )
}`,
    'RN-StyleSheet': `import Drawer from './components/ui/Drawer'

export default function Screen() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onPress={() => setOpen(true)}>Open Menu</Button>
      <Drawer open={open} side="right" onClose={() => setOpen(false)}>
        <View><Text>Menu items</Text></View>
      </Drawer>
    </>
  )
}`,
  },
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
