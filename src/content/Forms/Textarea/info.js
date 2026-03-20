export const info = {
  name: 'Textarea',
  description: 'A multi-line text input for longer form content.',
  category: 'Forms',
  status: 'stable',
  tags: ['textarea', 'text', 'form', 'multiline'],
  install: 'npx @lokaui/cli add textarea',
  props: [
    { name: 'placeholder', type: 'string', default: '', description: 'Placeholder text displayed when empty' },
    { name: 'rows', type: 'number', default: 4, description: 'Number of visible text rows' },
    { name: 'disabled', type: 'boolean', default: false, description: 'Whether the textarea is disabled' },
    { name: 'resize', type: 'enum', options: ['none', 'vertical', 'both'], default: 'vertical', description: 'Resize behavior of the textarea' },
  ],
  usage: {
    'JS-CSS': `import Textarea from './components/ui/Textarea'

function App() {
  return (
    <Textarea
      placeholder="Write your message..."
      rows={4}
      resize="vertical"
    />
  )
}`,
    'JS-TW': `import Textarea from './components/ui/Textarea'

function App() {
  return (
    <Textarea
      placeholder="Write your message..."
      rows={4}
      resize="vertical"
    />
  )
}`,
    'TS-CSS': `import Textarea from './components/ui/Textarea'

function App(): JSX.Element {
  return (
    <Textarea
      placeholder="Write your message..."
      rows={4}
      resize="vertical"
    />
  )
}`,
    'TS-TW': `import Textarea from './components/ui/Textarea'

function App(): JSX.Element {
  return (
    <Textarea
      placeholder="Write your message..."
      rows={4}
      resize="vertical"
    />
  )
}`,
    'HTML-TW': `<x-textarea placeholder="Write your message..." rows="4" resize="vertical" />`,
    'RN-TW': `import Textarea from './components/ui/Textarea'

export default function Screen() {
  return (
    <Textarea
      placeholder="Write your message..."
      rows={4}
    />
  )
}`,
    'RN-StyleSheet': `import Textarea from './components/ui/Textarea'

export default function Screen() {
  return (
    <Textarea
      placeholder="Write your message..."
      rows={4}
    />
  )
}`,
  },
  sections: [
    {
      id: 'basic',
      title: 'Basic',
      description: 'A simple multi-line text input.',
      code: `import Textarea from './components/ui/Textarea'\n\n<Textarea placeholder="Write your message..." />`,
      previews: [{}],
    },
    {
      id: 'rows',
      title: 'Rows',
      description: 'Use the rows prop to control the visible height of the textarea.',
      code: `<Textarea rows={2} placeholder="2 rows" />\n<Textarea rows={6} placeholder="6 rows" />`,
      previews: [
        { rows: 2, placeholder: '2 rows' },
        { rows: 6, placeholder: '6 rows' },
      ],
    },
    {
      id: 'resize',
      title: 'Resize',
      description: 'Use the resize prop to control the resize behavior.',
      code: `<Textarea resize="none" placeholder="No resize" />\n<Textarea resize="vertical" placeholder="Vertical resize" />\n<Textarea resize="both" placeholder="Both directions" />`,
      previews: [
        { resize: 'none', placeholder: 'No resize' },
        { resize: 'vertical', placeholder: 'Vertical resize' },
        { resize: 'both', placeholder: 'Both directions' },
      ],
    },
    {
      id: 'disabled',
      title: 'Disabled',
      description: 'Set disabled to prevent user interaction.',
      code: `<Textarea disabled placeholder="Disabled textarea" />`,
      previews: [{ disabled: true, placeholder: 'Disabled textarea' }],
    },
  ],
}
