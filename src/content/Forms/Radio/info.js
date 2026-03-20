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
  usage: {
    'JS-CSS': `import { RadioGroup, Radio } from './components/ui/Radio'

<RadioGroup name="plan" value="pro">
  <Radio value="free" label="Free" />
  <Radio value="pro" label="Pro" />
</RadioGroup>`,
    'JS-TW': `import { RadioGroup, Radio } from './components/ui/Radio'

<RadioGroup name="plan" value="pro">
  <Radio value="free" label="Free" />
  <Radio value="pro" label="Pro" />
</RadioGroup>`,
    'TS-CSS': `import { RadioGroup, Radio } from './components/ui/Radio'

<RadioGroup name="plan" value="pro">
  <Radio value="free" label="Free" />
  <Radio value="pro" label="Pro" />
</RadioGroup>`,
    'TS-TW': `import { RadioGroup, Radio } from './components/ui/Radio'

<RadioGroup name="plan" value="pro">
  <Radio value="free" label="Free" />
  <Radio value="pro" label="Pro" />
</RadioGroup>`,
  },
}
