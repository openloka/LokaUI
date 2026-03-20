export const info = {
  name: 'Table',
  description: 'A data table for displaying structured information in rows and columns.',
  category: 'DataDisplay',
  status: 'stable',
  tags: ['table', 'data', 'grid', 'rows'],
  install: 'npx shadcn@latest add @lokaui/table',
  props: [
    { name: 'striped', type: 'boolean', default: false, description: 'Whether to alternate row background colors' },
    { name: 'bordered', type: 'boolean', default: false, description: 'Whether to show cell borders' },
  ],
  usage: {
    'JS-CSS': `import { Table, TableHead, TableBody, TableRow, TableCell } from './components/ui/Table'

function App() {
  return (
    <Table striped>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Role</TableCell>
          <TableCell>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Alice</TableCell>
          <TableCell>Engineer</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bob</TableCell>
          <TableCell>Designer</TableCell>
          <TableCell>Away</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}`,
    'JS-TW': `import { Table, TableHead, TableBody, TableRow, TableCell } from './components/ui/Table'

function App() {
  return (
    <Table striped>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Role</TableCell>
          <TableCell>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Alice</TableCell>
          <TableCell>Engineer</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bob</TableCell>
          <TableCell>Designer</TableCell>
          <TableCell>Away</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}`,
    'TS-CSS': `import { Table, TableHead, TableBody, TableRow, TableCell } from './components/ui/Table'

function App(): JSX.Element {
  return (
    <Table striped>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Role</TableCell>
          <TableCell>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Alice</TableCell>
          <TableCell>Engineer</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}`,
    'TS-TW': `import { Table, TableHead, TableBody, TableRow, TableCell } from './components/ui/Table'

function App(): JSX.Element {
  return (
    <Table striped>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Role</TableCell>
          <TableCell>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Alice</TableCell>
          <TableCell>Engineer</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}`,
    'HTML-TW': `<x-table striped>
  <x-table-head>
    <x-table-row>
      <x-table-cell>Name</x-table-cell>
      <x-table-cell>Role</x-table-cell>
    </x-table-row>
  </x-table-head>
  <x-table-body>
    <x-table-row>
      <x-table-cell>Alice</x-table-cell>
      <x-table-cell>Engineer</x-table-cell>
    </x-table-row>
  </x-table-body>
</x-table>`,
    'RN-TW': `import { Table, TableHead, TableBody, TableRow, TableCell } from './components/ui/Table'

export default function Screen() {
  return (
    <Table striped>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Role</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Alice</TableCell>
          <TableCell>Engineer</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}`,
    'RN-StyleSheet': `import { Table, TableHead, TableBody, TableRow, TableCell } from './components/ui/Table'

export default function Screen() {
  return (
    <Table striped>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Role</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Alice</TableCell>
          <TableCell>Engineer</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}`,
  },
  sections: [
    {
      id: 'basic',
      title: 'Basic',
      description: 'A simple data table for displaying tabular content.',
      code: `import { Table, TableHead, TableBody, TableRow, TableCell } from './components/ui/Table'\n\n<Table>\n  <TableHead>\n    <TableRow>\n      <TableCell>Name</TableCell>\n      <TableCell>Role</TableCell>\n    </TableRow>\n  </TableHead>\n</Table>`,
      previews: [{}],
    },
    {
      id: 'striped',
      title: 'Striped',
      description: 'Set striped to alternate row background colors for readability.',
      code: `<Table striped>\n  <TableBody>\n    <TableRow><TableCell>Row 1</TableCell></TableRow>\n    <TableRow><TableCell>Row 2</TableCell></TableRow>\n  </TableBody>\n</Table>`,
      previews: [{ striped: true }],
    },
    {
      id: 'bordered',
      title: 'Bordered',
      description: 'Set bordered to show cell borders.',
      code: `<Table bordered>\n  <TableBody>\n    <TableRow><TableCell>Row 1</TableCell></TableRow>\n  </TableBody>\n</Table>`,
      previews: [{ bordered: true }],
    },
  ],
}
