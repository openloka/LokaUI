export const info = {
  name: 'Select',
  description: 'A dropdown selector for choosing from a list of options.',
  category: 'Forms',
  status: 'stable',
  tags: ['select', 'dropdown', 'picker', 'form'],
  install: 'npx shadcn@latest add @lokaui/select',
  props: [
    { name: 'placeholder', type: 'string', default: 'Select...', description: 'Placeholder text when no option is selected' },
    { name: 'disabled', type: 'boolean', default: false, description: 'Whether the select is disabled' },
    { name: 'size', type: 'enum', options: ['sm', 'md', 'lg'], default: 'md', description: 'Size of the select control' },
  ],
  usage: {
    'JS-CSS': `import { Select, SelectOption } from './components/ui/Select'

function App() {
  return (
    <Select placeholder="Choose a fruit" size="md">
      <SelectOption value="apple">Apple</SelectOption>
      <SelectOption value="banana">Banana</SelectOption>
      <SelectOption value="cherry">Cherry</SelectOption>
    </Select>
  )
}`,
    'JS-TW': `import { Select, SelectOption } from './components/ui/Select'

function App() {
  return (
    <Select placeholder="Choose a fruit" size="md">
      <SelectOption value="apple">Apple</SelectOption>
      <SelectOption value="banana">Banana</SelectOption>
      <SelectOption value="cherry">Cherry</SelectOption>
    </Select>
  )
}`,
    'TS-CSS': `import { Select, SelectOption } from './components/ui/Select'

function App(): JSX.Element {
  return (
    <Select placeholder="Choose a fruit" size="md">
      <SelectOption value="apple">Apple</SelectOption>
      <SelectOption value="banana">Banana</SelectOption>
      <SelectOption value="cherry">Cherry</SelectOption>
    </Select>
  )
}`,
    'TS-TW': `import { Select, SelectOption } from './components/ui/Select'

function App(): JSX.Element {
  return (
    <Select placeholder="Choose a fruit" size="md">
      <SelectOption value="apple">Apple</SelectOption>
      <SelectOption value="banana">Banana</SelectOption>
      <SelectOption value="cherry">Cherry</SelectOption>
    </Select>
  )
}`,
    'HTML-TW': `<x-select placeholder="Choose a fruit" size="md">
  <x-select-option value="apple">Apple</x-select-option>
  <x-select-option value="banana">Banana</x-select-option>
  <x-select-option value="cherry">Cherry</x-select-option>
</x-select>`,
    'RN-TW': `import { Select, SelectOption } from './components/ui/Select'

export default function Screen() {
  return (
    <Select placeholder="Choose a fruit" size="md">
      <SelectOption value="apple">Apple</SelectOption>
      <SelectOption value="banana">Banana</SelectOption>
      <SelectOption value="cherry">Cherry</SelectOption>
    </Select>
  )
}`,
    'RN-StyleSheet': `import { Select, SelectOption } from './components/ui/Select'

export default function Screen() {
  return (
    <Select placeholder="Choose a fruit" size="md">
      <SelectOption value="apple">Apple</SelectOption>
      <SelectOption value="banana">Banana</SelectOption>
      <SelectOption value="cherry">Cherry</SelectOption>
    </Select>
  )
}`,
  },
  sections: [
    {
      id: 'basic',
      title: 'Basic',
      description: 'A simple dropdown selector for choosing an option.',
      code: `import { Select, SelectOption } from './components/ui/Select'\n\n<Select placeholder="Choose a fruit">\n  <SelectOption value="apple">Apple</SelectOption>\n  <SelectOption value="banana">Banana</SelectOption>\n</Select>`,
      previews: [{}],
    },
    {
      id: 'size',
      title: 'Size',
      description: 'Use the size prop to change the select control size.',
      code: `<Select size="sm">...</Select>\n<Select size="md">...</Select>\n<Select size="lg">...</Select>`,
      previews: [
        { size: 'sm' },
        { size: 'md' },
        { size: 'lg' },
      ],
    },
    {
      id: 'disabled',
      title: 'Disabled',
      description: 'Set disabled to prevent user interaction.',
      code: `<Select disabled placeholder="Disabled select">...</Select>`,
      previews: [{ disabled: true, placeholder: 'Disabled select' }],
    },
  ],
}
