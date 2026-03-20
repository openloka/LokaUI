export const info = {
  name: 'Toast',
  description: 'A brief notification that appears temporarily to provide feedback.',
  category: 'Feedback',
  status: 'stable',
  tags: ['toast', 'notification', 'alert', 'snackbar'],
  install: 'npx shadcn@latest add @lokaui/toast',
  props: [
    { name: 'variant', type: 'enum', options: ['default', 'success', 'error', 'warning'], default: 'default', description: 'Visual style variant of the toast' },
    { name: 'duration', type: 'number', default: 3000, description: 'Duration in milliseconds before auto-dismiss' },
  ],
  usage: {
    'JS-CSS': `import { toast } from './components/ui/Toast'

// Trigger a toast
toast.success('Changes saved!')
toast.error('Something went wrong')`,
    'JS-TW': `import { toast } from './components/ui/Toast'

// Trigger a toast
toast.success('Changes saved!')
toast.error('Something went wrong')`,
    'TS-CSS': `import { toast } from './components/ui/Toast'

// Trigger a toast
toast.success('Changes saved!')
toast.error('Something went wrong')`,
    'TS-TW': `import { toast } from './components/ui/Toast'

// Trigger a toast
toast.success('Changes saved!')
toast.error('Something went wrong')`,
  },
}
