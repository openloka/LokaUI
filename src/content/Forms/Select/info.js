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
