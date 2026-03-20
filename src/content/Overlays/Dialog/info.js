export const info = {
  name: 'Dialog',
  description: 'A modal dialog overlay for confirmations, forms, and important content.',
  category: 'Overlays',
  status: 'stable',
  tags: ['dialog', 'modal', 'overlay', 'popup'],
  install: 'npx @lokaui/cli add dialog',
  props: [
    { name: 'open', type: 'boolean', default: false, description: 'Whether the dialog is visible' },
    { name: 'title', type: 'string', default: '', description: 'Title text for the dialog header' },
    { name: 'onClose', type: '() => void', default: '', description: 'Callback when the dialog is closed' },
  ],
  usage: {
    'JS-CSS': `import Dialog from './components/ui/Dialog'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Dialog</button>
      <Dialog open={open} title="Confirm Action" onClose={() => setOpen(false)}>
        <p>Are you sure you want to proceed?</p>
      </Dialog>
    </>
  )
}`,
    'JS-TW': `import Dialog from './components/ui/Dialog'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Dialog</button>
      <Dialog open={open} title="Confirm Action" onClose={() => setOpen(false)}>
        <p>Are you sure you want to proceed?</p>
      </Dialog>
    </>
  )
}`,
    'TS-CSS': `import Dialog from './components/ui/Dialog'

function App(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Dialog</button>
      <Dialog open={open} title="Confirm Action" onClose={() => setOpen(false)}>
        <p>Are you sure you want to proceed?</p>
      </Dialog>
    </>
  )
}`,
    'TS-TW': `import Dialog from './components/ui/Dialog'

function App(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Dialog</button>
      <Dialog open={open} title="Confirm Action" onClose={() => setOpen(false)}>
        <p>Are you sure you want to proceed?</p>
      </Dialog>
    </>
  )
}`,
    'HTML-TW': `<x-dialog open title="Confirm Action">
  <p>Are you sure you want to proceed?</p>
</x-dialog>`,
    'RN-TW': `import Dialog from './components/ui/Dialog'

export default function Screen() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onPress={() => setOpen(true)}>Open Dialog</Button>
      <Dialog open={open} title="Confirm Action" onClose={() => setOpen(false)}>
        <Text>Are you sure you want to proceed?</Text>
      </Dialog>
    </>
  )
}`,
    'RN-StyleSheet': `import Dialog from './components/ui/Dialog'

export default function Screen() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onPress={() => setOpen(true)}>Open Dialog</Button>
      <Dialog open={open} title="Confirm Action" onClose={() => setOpen(false)}>
        <Text>Are you sure you want to proceed?</Text>
      </Dialog>
    </>
  )
}`,
  },
  sections: [
    {
      id: 'basic',
      title: 'Basic',
      description: 'A simple dialog overlay for displaying important content.',
      code: `import Dialog from './components/ui/Dialog'\n\n<Dialog open={isOpen} onClose={() => setOpen(false)}>\n  <p>Dialog content</p>\n</Dialog>`,
      previews: [{}],
    },
    {
      id: 'with-title',
      title: 'With Title',
      description: 'Use the title prop to add a header to the dialog.',
      code: `<Dialog open={isOpen} title="Confirm Action" onClose={() => setOpen(false)}>\n  <p>Are you sure?</p>\n</Dialog>`,
      previews: [{ title: 'Confirm Action', open: true }],
    },
    {
      id: 'controlled',
      title: 'Controlled',
      description: 'Use the open prop to control the dialog visibility programmatically.',
      code: `const [isOpen, setOpen] = useState(false)\n\n<Button onClick={() => setOpen(true)}>Open</Button>\n<Dialog open={isOpen} title="Controlled" onClose={() => setOpen(false)}>\n  <p>Controlled dialog</p>\n</Dialog>`,
      previews: [{ open: true, title: 'Controlled' }],
    },
  ],
}
