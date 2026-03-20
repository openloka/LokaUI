export const info = {
  name: 'Input',
  description: 'A text input field with label support, focus states, and validation styling.',
  category: 'Foundations',
  status: 'stable',
  tags: ['input', 'text', 'form', 'field'],
  install: 'npx shadcn@latest add @lokaui/input',
  props: [
    { name: 'type', type: 'enum', options: ['text', 'email', 'password'], default: 'text', description: 'The type of input field' },
    { name: 'placeholder', type: 'string', default: '', description: 'Placeholder text displayed when empty' },
    { name: 'disabled', type: 'boolean', default: false, description: 'Whether the input is disabled' },
    { name: 'error', type: 'boolean', default: false, description: 'Whether to show error styling' },
  ],
  usage: {
    'JS-CSS': `import Input from './components/ui/Input'

<Input type="email" placeholder="Enter your email" />`,
    'JS-TW': `import Input from './components/ui/Input'

<Input type="email" placeholder="Enter your email" />`,
    'TS-CSS': `import Input from './components/ui/Input'

<Input type="email" placeholder="Enter your email" />`,
    'TS-TW': `import Input from './components/ui/Input'

<Input type="email" placeholder="Enter your email" />`,
  },
}
