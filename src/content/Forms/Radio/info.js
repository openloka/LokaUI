export const info = {
  name: 'Radio',
  description: 'A radio button for selecting one option from a group.',
  category: 'Forms',
  status: 'stable',
  tags: ['radio', 'form', 'selection', 'option'],
  install: 'npx shadcn@latest add @lokaui/radio',
  props: [
    { name: 'checked', type: 'boolean', default: false, description: 'Whether the radio button is selected' },
    { name: 'disabled', type: 'boolean', default: false, description: 'Whether the radio button is disabled' },
    { name: 'label', type: 'string', default: '', description: 'Label text for the radio button' },
    { name: 'name', type: 'string', default: '', description: 'Group name for the radio button' },
  ],
  sections: [
    {
      id: 'basic',
      title: 'Basic',
      description: 'A simple radio button group for selecting one option.',
      code: `import { RadioGroup, Radio } from './components/ui/Radio'\n\n<RadioGroup name="plan">\n  <Radio value="free" label="Free" />\n  <Radio value="pro" label="Pro" />\n</RadioGroup>`,
      previews: [{}],
    },
    {
      id: 'controlled',
      title: 'Controlled',
      description: 'Use the checked prop to control the radio button state programmatically.',
      code: `<RadioGroup name="plan" value={selected} onChange={setSelected}>\n  <Radio value="free" label="Free" />\n  <Radio value="pro" label="Pro" />\n</RadioGroup>`,
      previews: [
        { checked: true, label: 'Selected', name: 'demo' },
        { checked: false, label: 'Unselected', name: 'demo' },
      ],
    },
  ],
}
