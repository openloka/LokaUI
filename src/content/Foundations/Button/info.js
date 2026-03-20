export const info = {
  name: 'Button',
  description: 'A versatile button component with multiple variants, sizes, and states. Supports icons, loading state, and full accessibility.',
  category: 'Foundations',
  status: 'stable',
  tags: ['button', 'action', 'click', 'submit'],
  props: [
    { name: 'variant', type: 'enum', options: ['primary', 'secondary', 'ghost'], default: 'primary', description: 'Visual style of the button' },
    { name: 'size', type: 'enum', options: ['sm', 'md', 'lg'], default: 'md', description: 'Size of the button' },
    { name: 'disabled', type: 'boolean', default: false, description: 'Whether the button is disabled' },
    { name: 'loading', type: 'boolean', default: false, description: 'Shows spinner and disables interaction' },
  ],
}
