export const info = {
  name: 'Toggle',
  description: 'A switch control for toggling between on and off states.',
  category: 'Foundations',
  status: 'stable',
  tags: ['toggle', 'switch', 'on-off'],
  install: 'npx shadcn@latest add @lokaui/toggle',
  props: [
    { name: 'checked', type: 'boolean', default: false, description: 'Whether the toggle is on' },
    { name: 'disabled', type: 'boolean', default: false, description: 'Whether the toggle is disabled' },
    { name: 'label', type: 'string', default: '', description: 'Label text for the toggle' },
  ],
  usage: {
    'JS-CSS': `import Toggle from './components/ui/Toggle'

<Toggle label="Notifications" checked={true} onChange={() => {}} />`,
    'JS-TW': `import Toggle from './components/ui/Toggle'

<Toggle label="Notifications" checked={true} onChange={() => {}} />`,
    'TS-CSS': `import Toggle from './components/ui/Toggle'

<Toggle label="Notifications" checked={true} onChange={() => {}} />`,
    'TS-TW': `import Toggle from './components/ui/Toggle'

<Toggle label="Notifications" checked={true} onChange={() => {}} />`,
  },
}
