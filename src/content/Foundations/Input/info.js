export const info = {
  name: 'Input',
  description: 'A text input field with label support, focus states, and validation styling.',
  category: 'Foundations',
  status: 'stable',
  tags: ['input', 'text', 'form', 'field'],
  install: 'npx @lokaui/cli add input',
  props: [
    { name: 'type', type: 'enum', options: ['text', 'email', 'password'], default: 'text', description: 'The type of input field' },
    { name: 'placeholder', type: 'string', default: '', description: 'Placeholder text displayed when empty' },
    { name: 'disabled', type: 'boolean', default: false, description: 'Whether the input is disabled' },
    { name: 'error', type: 'boolean', default: false, description: 'Whether to show error styling' },
  ],
  usage: {
    'JS-CSS': `import Input from './components/ui/Input'

function App() {
  return (
    <Input type="text" placeholder="Enter your email..." />
  )
}`,
    'JS-TW': `import Input from './components/ui/Input'

function App() {
  return (
    <Input type="text" placeholder="Enter your email..." />
  )
}`,
    'TS-CSS': `import Input from './components/ui/Input'

function App(): JSX.Element {
  return (
    <Input type="text" placeholder="Enter your email..." />
  )
}`,
    'TS-TW': `import Input from './components/ui/Input'

function App(): JSX.Element {
  return (
    <Input type="text" placeholder="Enter your email..." />
  )
}`,
    'HTML-TW': `<x-input type="text" placeholder="Enter your email..." />`,
    'RN-TW': `import Input from './components/ui/Input'

export default function Screen() {
  return (
    <Input type="text" placeholder="Enter your email..." />
  )
}`,
    'RN-StyleSheet': `import Input from './components/ui/Input'

export default function Screen() {
  return (
    <Input type="text" placeholder="Enter your email..." />
  )
}`,
  },
  sections: [
    {
      id: 'basic',
      title: 'Basic',
      description: 'A simple text input field for user data entry.',
      code: `import Input from './components/ui/Input'\n\n<Input placeholder="Enter text..." />`,
      previews: [{}],
    },
    {
      id: 'type',
      title: 'Type',
      description: 'Use the type prop to change the input type for different data formats.',
      code: `<Input type="text" placeholder="Text" />\n<Input type="email" placeholder="Email" />\n<Input type="password" placeholder="Password" />`,
      previews: [
        { type: 'text', placeholder: 'Text' },
        { type: 'email', placeholder: 'Email' },
        { type: 'password', placeholder: 'Password' },
      ],
    },
    {
      id: 'disabled',
      title: 'Disabled',
      description: 'Set disabled to prevent user interaction.',
      code: `<Input disabled placeholder="Disabled input" />`,
      previews: [{ disabled: true, placeholder: 'Disabled input' }],
    },
    {
      id: 'error',
      title: 'Error',
      description: 'Set error to show validation error styling.',
      code: `<Input error placeholder="Invalid input" />`,
      previews: [{ error: true, placeholder: 'Invalid input' }],
    },
  ],
}
