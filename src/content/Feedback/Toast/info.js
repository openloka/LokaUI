export const info = {
  name: 'Toast',
  description: 'A brief notification that appears temporarily to provide feedback.',
  category: 'Feedback',
  status: 'stable',
  tags: ['toast', 'notification', 'alert', 'snackbar'],
  install: 'npx @lokaui/cli add toast',
  props: [
    { name: 'variant', type: 'enum', options: ['default', 'success', 'error', 'warning'], default: 'default', description: 'Visual style variant of the toast' },
    { name: 'duration', type: 'number', default: 3000, description: 'Duration in milliseconds before auto-dismiss' },
  ],
  usage: {
    'JS-CSS': `import { toast } from './components/ui/Toast'

function App() {
  return (
    <button onClick={() => toast.success('Changes saved!', { duration: 3000 })}>
      Show Toast
    </button>
  )
}`,
    'JS-TW': `import { toast } from './components/ui/Toast'

function App() {
  return (
    <button onClick={() => toast.success('Changes saved!', { duration: 3000 })}>
      Show Toast
    </button>
  )
}`,
    'TS-CSS': `import { toast } from './components/ui/Toast'

function App(): JSX.Element {
  return (
    <button onClick={() => toast.success('Changes saved!', { duration: 3000 })}>
      Show Toast
    </button>
  )
}`,
    'TS-TW': `import { toast } from './components/ui/Toast'

function App(): JSX.Element {
  return (
    <button onClick={() => toast.success('Changes saved!', { duration: 3000 })}>
      Show Toast
    </button>
  )
}`,
    'HTML-TW': `<button onclick="toast.success('Changes saved!')">
  Show Toast
</button>`,
    'RN-TW': `import { toast } from './components/ui/Toast'

export default function Screen() {
  return (
    <Button onPress={() => toast.success('Changes saved!', { duration: 3000 })}>
      Show Toast
    </Button>
  )
}`,
    'RN-StyleSheet': `import { toast } from './components/ui/Toast'

export default function Screen() {
  return (
    <Button onPress={() => toast.success('Changes saved!', { duration: 3000 })}>
      Show Toast
    </Button>
  )
}`,
  },
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
