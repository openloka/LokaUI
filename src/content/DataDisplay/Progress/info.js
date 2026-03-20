export const info = {
  name: 'Progress',
  description: 'A bar indicator showing completion or loading progress.',
  category: 'DataDisplay',
  status: 'stable',
  tags: ['progress', 'loading', 'bar', 'percentage'],
  install: 'npx @lokaui/cli add progress',
  props: [
    { name: 'value', type: 'number', default: 0, description: 'Current progress value (0-100)' },
    { name: 'variant', type: 'enum', options: ['default', 'success', 'warning'], default: 'default', description: 'Visual style variant of the progress bar' },
    { name: 'showLabel', type: 'boolean', default: false, description: 'Whether to display the percentage label' },
  ],
  usage: {
    'JS-CSS': `import Progress from './components/ui/Progress'

function App() {
  return (
    <Progress value={65} variant="default" showLabel />
  )
}`,
    'JS-TW': `import Progress from './components/ui/Progress'

function App() {
  return (
    <Progress value={65} variant="default" showLabel />
  )
}`,
    'TS-CSS': `import Progress from './components/ui/Progress'

function App(): JSX.Element {
  return (
    <Progress value={65} variant="default" showLabel />
  )
}`,
    'TS-TW': `import Progress from './components/ui/Progress'

function App(): JSX.Element {
  return (
    <Progress value={65} variant="default" showLabel />
  )
}`,
    'HTML-TW': `<x-progress value="65" variant="default" show-label />`,
    'RN-TW': `import Progress from './components/ui/Progress'

export default function Screen() {
  return (
    <Progress value={65} variant="default" showLabel />
  )
}`,
    'RN-StyleSheet': `import Progress from './components/ui/Progress'

export default function Screen() {
  return (
    <Progress value={65} variant="default" showLabel />
  )
}`,
  },
  sections: [
    {
      id: 'basic',
      title: 'Basic',
      description: 'A simple progress bar showing completion status.',
      code: `import Progress from './components/ui/Progress'\n\n<Progress value={50} />`,
      previews: [{}],
    },
    {
      id: 'variant',
      title: 'Variant',
      description: 'Use the variant prop to change the progress bar color.',
      code: `<Progress value={50} variant="default" />\n<Progress value={75} variant="success" />\n<Progress value={30} variant="warning" />`,
      previews: [
        { variant: 'default', value: 50 },
        { variant: 'success', value: 75 },
        { variant: 'warning', value: 30 },
      ],
    },
    {
      id: 'with-label',
      title: 'With Label',
      description: 'Set showLabel to display the percentage alongside the bar.',
      code: `<Progress value={65} showLabel />`,
      previews: [{ showLabel: true, value: 65 }],
    },
  ],
}
