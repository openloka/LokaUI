export const info = {
  name: 'Pagination',
  description: 'Controls for navigating between pages of content.',
  category: 'Navigation',
  status: 'stable',
  tags: ['pagination', 'navigation', 'pages'],
  install: 'npx shadcn@latest add @lokaui/pagination',
  props: [
    { name: 'total', type: 'number', default: 10, description: 'Total number of pages' },
    { name: 'current', type: 'number', default: 1, description: 'Currently active page' },
    { name: 'siblingCount', type: 'number', default: 1, description: 'Number of sibling pages shown around the current page' },
  ],
  usage: {
    'JS-CSS': `import Pagination from './components/ui/Pagination'

function App() {
  const [page, setPage] = useState(1)

  return (
    <Pagination
      total={10}
      current={page}
      siblingCount={1}
      onChange={setPage}
    />
  )
}`,
    'JS-TW': `import Pagination from './components/ui/Pagination'

function App() {
  const [page, setPage] = useState(1)

  return (
    <Pagination
      total={10}
      current={page}
      siblingCount={1}
      onChange={setPage}
    />
  )
}`,
    'TS-CSS': `import Pagination from './components/ui/Pagination'

function App(): JSX.Element {
  const [page, setPage] = useState<number>(1)

  return (
    <Pagination
      total={10}
      current={page}
      siblingCount={1}
      onChange={setPage}
    />
  )
}`,
    'TS-TW': `import Pagination from './components/ui/Pagination'

function App(): JSX.Element {
  const [page, setPage] = useState<number>(1)

  return (
    <Pagination
      total={10}
      current={page}
      siblingCount={1}
      onChange={setPage}
    />
  )
}`,
    'HTML-TW': `<x-pagination total="10" current="1" sibling-count="1" />`,
    'RN-TW': `import Pagination from './components/ui/Pagination'

export default function Screen() {
  const [page, setPage] = useState(1)

  return (
    <Pagination
      total={10}
      current={page}
      siblingCount={1}
      onChange={setPage}
    />
  )
}`,
    'RN-StyleSheet': `import Pagination from './components/ui/Pagination'

export default function Screen() {
  const [page, setPage] = useState(1)

  return (
    <Pagination
      total={10}
      current={page}
      siblingCount={1}
      onChange={setPage}
    />
  )
}`,
  },
  sections: [
    {
      id: 'basic',
      title: 'Basic',
      description: 'A simple pagination control for navigating pages.',
      code: `import Pagination from './components/ui/Pagination'\n\n<Pagination total={10} current={1} onChange={(page) => {}} />`,
      previews: [{}],
    },
    {
      id: 'sibling-count',
      title: 'Sibling Count',
      description: 'Use the siblingCount prop to control how many page numbers appear around the current page.',
      code: `<Pagination total={20} current={10} siblingCount={1} />\n<Pagination total={20} current={10} siblingCount={2} />`,
      previews: [
        { total: 20, current: 10, siblingCount: 1 },
        { total: 20, current: 10, siblingCount: 2 },
      ],
    },
  ],
}
