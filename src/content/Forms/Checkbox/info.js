export const info = {
  name: 'Checkbox',
  description: 'A check box control for selecting one or more options.',
  category: 'Forms',
  status: 'stable',
  tags: ['checkbox', 'check', 'form', 'selection'],
  install: 'npx @lokaui/cli add checkbox',
  props: [
    { name: 'checked', type: 'boolean', default: false, description: 'Whether the checkbox is checked' },
    { name: 'disabled', type: 'boolean', default: false, description: 'Whether the checkbox is disabled' },
    { name: 'label', type: 'string', default: '', description: 'Label text for the checkbox' },
  ],
  usage: {
    'JS-CSS': `import Checkbox from './components/ui/Checkbox'

function App() {
  const [checked, setChecked] = useState(false)

  return (
    <Checkbox
      checked={checked}
      onChange={setChecked}
      label="Accept terms and conditions"
    />
  )
}`,
    'JS-TW': `import Checkbox from './components/ui/Checkbox'

function App() {
  const [checked, setChecked] = useState(false)

  return (
    <Checkbox
      checked={checked}
      onChange={setChecked}
      label="Accept terms and conditions"
    />
  )
}`,
    'TS-CSS': `import Checkbox from './components/ui/Checkbox'

function App(): JSX.Element {
  const [checked, setChecked] = useState<boolean>(false)

  return (
    <Checkbox
      checked={checked}
      onChange={setChecked}
      label="Accept terms and conditions"
    />
  )
}`,
    'TS-TW': `import Checkbox from './components/ui/Checkbox'

function App(): JSX.Element {
  const [checked, setChecked] = useState<boolean>(false)

  return (
    <Checkbox
      checked={checked}
      onChange={setChecked}
      label="Accept terms and conditions"
    />
  )
}`,
    'HTML-TW': `<x-checkbox label="Accept terms and conditions" />`,
    'RN-TW': `import Checkbox from './components/ui/Checkbox'

export default function Screen() {
  const [checked, setChecked] = useState(false)

  return (
    <Checkbox
      checked={checked}
      onChange={setChecked}
      label="Accept terms and conditions"
    />
  )
}`,
    'RN-StyleSheet': `import Checkbox from './components/ui/Checkbox'

export default function Screen() {
  const [checked, setChecked] = useState(false)

  return (
    <Checkbox
      checked={checked}
      onChange={setChecked}
      label="Accept terms and conditions"
    />
  )
}`,
  },
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
