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

<Pagination total={10} current={1} onChange={(page) => {}} />`,
    'JS-TW': `import Pagination from './components/ui/Pagination'

<Pagination total={10} current={1} onChange={(page) => {}} />`,
    'TS-CSS': `import Pagination from './components/ui/Pagination'

<Pagination total={10} current={1} onChange={(page) => {}} />`,
    'TS-TW': `import Pagination from './components/ui/Pagination'

<Pagination total={10} current={1} onChange={(page) => {}} />`,
  },
}
