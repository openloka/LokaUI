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
  sections: [
    {
      id: 'basic',
      title: 'Basic',
      description: 'A simple toggle switch for binary choices.',
      code: `import Toggle from './components/ui/Toggle'\n\n<Toggle label="Notifications" />`,
      previews: [{}],
    },
    {
      id: 'checked',
      title: 'Checked',
      description: 'Set checked to control the toggle state.',
      code: `<Toggle checked={true} label="Enabled" />\n<Toggle checked={false} label="Disabled" />`,
      previews: [
        { checked: true, label: 'Enabled' },
        { checked: false, label: 'Disabled' },
      ],
    },
    {
      id: 'disabled',
      title: 'Disabled',
      description: 'Set disabled to prevent user interaction.',
      code: `<Toggle disabled label="Disabled toggle" />`,
      previews: [{ disabled: true, label: 'Disabled toggle' }],
    },
  ],
}
