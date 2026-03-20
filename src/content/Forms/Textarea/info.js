export const info = {
  name: 'Textarea',
  description: 'A multi-line text input for longer form content.',
  category: 'Forms',
  status: 'stable',
  tags: ['textarea', 'text', 'form', 'multiline'],
  install: 'npx shadcn@latest add @lokaui/textarea',
  props: [
    { name: 'placeholder', type: 'string', default: '', description: 'Placeholder text displayed when empty' },
    { name: 'rows', type: 'number', default: 4, description: 'Number of visible text rows' },
    { name: 'disabled', type: 'boolean', default: false, description: 'Whether the textarea is disabled' },
    { name: 'resize', type: 'enum', options: ['none', 'vertical', 'both'], default: 'vertical', description: 'Resize behavior of the textarea' },
  ],
  usage: {
    'JS-CSS': `import Textarea from './components/ui/Textarea'

<Textarea placeholder="Write your message..." rows={4} />`,
    'JS-TW': `import Textarea from './components/ui/Textarea'

<Textarea placeholder="Write your message..." rows={4} />`,
    'TS-CSS': `import Textarea from './components/ui/Textarea'

<Textarea placeholder="Write your message..." rows={4} />`,
    'TS-TW': `import Textarea from './components/ui/Textarea'

<Textarea placeholder="Write your message..." rows={4} />`,
  },
}
