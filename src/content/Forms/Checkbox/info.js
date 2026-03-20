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
  sections: [
    {
      id: 'basic',
      title: 'Basic',
      description: 'A simple checkbox for toggling a selection.',
      code: `import Checkbox from './components/ui/Checkbox'\n\n<Checkbox label="Accept terms" />`,
      previews: [{}],
    },
    {
      id: 'checked',
      title: 'Checked',
      description: 'Set checked to control the checkbox state.',
      code: `<Checkbox checked={true} label="Checked" />\n<Checkbox checked={false} label="Unchecked" />`,
      previews: [
        { checked: true, label: 'Checked' },
        { checked: false, label: 'Unchecked' },
      ],
    },
    {
      id: 'disabled',
      title: 'Disabled',
      description: 'Set disabled to prevent user interaction.',
      code: `<Checkbox disabled label="Disabled checkbox" />`,
      previews: [{ disabled: true, label: 'Disabled checkbox' }],
    },
  ],
}
