export const info = {
  name: 'Checkbox',
  description: 'A check box control for selecting one or more options.',
  category: 'Forms',
  status: 'stable',
  tags: ['checkbox', 'check', 'form', 'selection'],
  install: 'npx shadcn@latest add @lokaui/checkbox',
  props: [
    { name: 'checked', type: 'boolean', default: false, description: 'Whether the checkbox is checked' },
    { name: 'disabled', type: 'boolean', default: false, description: 'Whether the checkbox is disabled' },
    { name: 'label', type: 'string', default: '', description: 'Label text for the checkbox' },
  ],
  usage: {
    'JS-CSS': `import Checkbox from './components/ui/Checkbox'

<Checkbox label="Accept terms" checked={false} onChange={() => {}} />`,
    'JS-TW': `import Checkbox from './components/ui/Checkbox'

<Checkbox label="Accept terms" checked={false} onChange={() => {}} />`,
    'TS-CSS': `import Checkbox from './components/ui/Checkbox'

<Checkbox label="Accept terms" checked={false} onChange={() => {}} />`,
    'TS-TW': `import Checkbox from './components/ui/Checkbox'

<Checkbox label="Accept terms" checked={false} onChange={() => {}} />`,
  },
}
