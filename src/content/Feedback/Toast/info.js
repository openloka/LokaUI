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
  sections: [
    {
      id: 'basic',
      title: 'Basic',
      description: 'A simple toast notification for user feedback.',
      code: `import { toast } from './components/ui/Toast'\n\ntoast('Something happened')`,
      previews: [{}],
    },
    {
      id: 'variants',
      title: 'Variants',
      description: 'Use the variant prop to indicate different feedback types.',
      code: `toast.success('Changes saved!')\ntoast.error('Something went wrong')\ntoast.warning('Please review')`,
      previews: [
        { variant: 'success' },
        { variant: 'error' },
        { variant: 'warning' },
      ],
    },
    {
      id: 'duration',
      title: 'Duration',
      description: 'Use the duration prop to control how long the toast stays visible.',
      code: `toast('Quick message', { duration: 1500 })\ntoast('Long message', { duration: 5000 })`,
      previews: [
        { duration: 1500 },
        { duration: 5000 },
      ],
    },
  ],
}
