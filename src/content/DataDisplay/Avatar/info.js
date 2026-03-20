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

function App() {
  return (
    <Avatar
      size="md"
      src="/avatar.jpg"
      fallback="JD"
    />
  )
}`,
    'JS-TW': `import Avatar from './components/ui/Avatar'

function App() {
  return (
    <Avatar
      size="md"
      src="/avatar.jpg"
      fallback="JD"
    />
  )
}`,
    'TS-CSS': `import Avatar from './components/ui/Avatar'

function App(): JSX.Element {
  return (
    <Avatar
      size="md"
      src="/avatar.jpg"
      fallback="JD"
    />
  )
}`,
    'TS-TW': `import Avatar from './components/ui/Avatar'

function App(): JSX.Element {
  return (
    <Avatar
      size="md"
      src="/avatar.jpg"
      fallback="JD"
    />
  )
}`,
    'HTML-TW': `<x-avatar size="md" src="/avatar.jpg" fallback="JD" />`,
    'RN-TW': `import Avatar from './components/ui/Avatar'

export default function Screen() {
  return (
    <Avatar
      size="md"
      source={{ uri: 'https://example.com/avatar.jpg' }}
      fallback="JD"
    />
  )
}`,
    'RN-StyleSheet': `import Avatar from './components/ui/Avatar'

export default function Screen() {
  return (
    <Avatar
      size="md"
      source={{ uri: 'https://example.com/avatar.jpg' }}
      fallback="JD"
    />
  )
}`,
  },
  sections: [
    {
      id: 'basic',
      title: 'Basic',
      description: 'A simple avatar displaying user initials or an image.',
      code: `import Avatar from './components/ui/Avatar'\n\n<Avatar fallback="JD" />`,
      previews: [{}],
    },
    {
      id: 'size',
      title: 'Size',
      description: 'Use the size prop to change the avatar size.',
      code: `<Avatar size="sm" fallback="SM" />\n<Avatar size="md" fallback="MD" />\n<Avatar size="lg" fallback="LG" />`,
      previews: [
        { size: 'sm', fallback: 'SM' },
        { size: 'md', fallback: 'MD' },
        { size: 'lg', fallback: 'LG' },
      ],
    },
    {
      id: 'fallback',
      title: 'Fallback',
      description: 'Use the fallback prop to display initials when no image is available.',
      code: `<Avatar fallback="AB" />\n<Avatar fallback="CD" />`,
      previews: [
        { fallback: 'AB' },
        { fallback: 'CD' },
      ],
    },
  ],
}
