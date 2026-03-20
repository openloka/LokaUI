export const info = {
  name: 'Alert',
  description: 'A prominent message banner for important information or status updates.',
  category: 'Feedback',
  status: 'stable',
  tags: ['alert', 'banner', 'message', 'notification'],
  install: 'npx shadcn@latest add @lokaui/alert',
  props: [
    { name: 'variant', type: 'enum', options: ['info', 'success', 'warning', 'error'], default: 'info', description: 'Visual style variant of the alert' },
    { name: 'dismissible', type: 'boolean', default: false, description: 'Whether the alert can be dismissed' },
  ],
  sections: [
    {
      id: 'basic',
      title: 'Basic',
      description: 'A simple alert banner for displaying important messages.',
      code: `import Alert from './components/ui/Alert'\n\n<Alert>This is an informational alert.</Alert>`,
      previews: [{}],
    },
    {
      id: 'variant',
      title: 'Variant',
      description: 'Use the variant prop to indicate different message types.',
      code: `<Alert variant="info">Info alert</Alert>\n<Alert variant="success">Success alert</Alert>\n<Alert variant="warning">Warning alert</Alert>\n<Alert variant="error">Error alert</Alert>`,
      previews: [
        { variant: 'info' },
        { variant: 'success' },
        { variant: 'warning' },
        { variant: 'error' },
      ],
    },
    {
      id: 'dismissible',
      title: 'Dismissible',
      description: 'Set dismissible to allow the user to close the alert.',
      code: `<Alert dismissible>This alert can be dismissed.</Alert>`,
      previews: [{ dismissible: true }],
    },
  ],
}
