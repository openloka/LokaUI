export const info = {
  name: 'Avatar',
  description: 'A circular image or initials representing a user or entity.',
  category: 'DataDisplay',
  status: 'stable',
  tags: ['avatar', 'user', 'image', 'profile'],
  install: 'npx shadcn@latest add @lokaui/avatar',
  props: [
    { name: 'size', type: 'enum', options: ['sm', 'md', 'lg'], default: 'md', description: 'Size of the avatar' },
    { name: 'src', type: 'string', default: '', description: 'Image source URL' },
    { name: 'fallback', type: 'string', default: '', description: 'Fallback text or initials when image is unavailable' },
  ],
  usage: {
    'JS-CSS': `import Avatar from './components/ui/Avatar'

<Avatar size="md" fallback="JD" />`,
    'JS-TW': `import Avatar from './components/ui/Avatar'

<Avatar size="md" fallback="JD" />`,
    'TS-CSS': `import Avatar from './components/ui/Avatar'

<Avatar size="md" fallback="JD" />`,
    'TS-TW': `import Avatar from './components/ui/Avatar'

<Avatar size="md" fallback="JD" />`,
  },
}
