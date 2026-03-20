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

<Select placeholder="Choose a fruit">
  <SelectOption value="apple">Apple</SelectOption>
  <SelectOption value="banana">Banana</SelectOption>
</Select>`,
    'JS-TW': `import { Select, SelectOption } from './components/ui/Select'

<Select placeholder="Choose a fruit">
  <SelectOption value="apple">Apple</SelectOption>
  <SelectOption value="banana">Banana</SelectOption>
</Select>`,
    'TS-CSS': `import { Select, SelectOption } from './components/ui/Select'

<Select placeholder="Choose a fruit">
  <SelectOption value="apple">Apple</SelectOption>
  <SelectOption value="banana">Banana</SelectOption>
</Select>`,
    'TS-TW': `import { Select, SelectOption } from './components/ui/Select'

<Select placeholder="Choose a fruit">
  <SelectOption value="apple">Apple</SelectOption>
  <SelectOption value="banana">Banana</SelectOption>
</Select>`,
  },
}
