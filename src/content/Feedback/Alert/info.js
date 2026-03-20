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
  usage: {
    'JS-CSS': `import Alert from './components/ui/Alert'

<Alert variant="warning" dismissible>
  Your trial expires in 3 days.
</Alert>`,
    'JS-TW': `import Alert from './components/ui/Alert'

<Alert variant="warning" dismissible>
  Your trial expires in 3 days.
</Alert>`,
    'TS-CSS': `import Alert from './components/ui/Alert'

<Alert variant="warning" dismissible>
  Your trial expires in 3 days.
</Alert>`,
    'TS-TW': `import Alert from './components/ui/Alert'

<Alert variant="warning" dismissible>
  Your trial expires in 3 days.
</Alert>`,
  },
}
