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

<Table>
  <TableHead>
    <TableRow>
      <TableCell>Name</TableCell>
      <TableCell>Role</TableCell>
    </TableRow>
  </TableHead>
</Table>`,
    'JS-TW': `import { Table, TableHead, TableBody, TableRow, TableCell } from './components/ui/Table'

<Table>
  <TableHead>
    <TableRow>
      <TableCell>Name</TableCell>
      <TableCell>Role</TableCell>
    </TableRow>
  </TableHead>
</Table>`,
    'TS-CSS': `import { Table, TableHead, TableBody, TableRow, TableCell } from './components/ui/Table'

<Table>
  <TableHead>
    <TableRow>
      <TableCell>Name</TableCell>
      <TableCell>Role</TableCell>
    </TableRow>
  </TableHead>
</Table>`,
    'TS-TW': `import { Table, TableHead, TableBody, TableRow, TableCell } from './components/ui/Table'

<Table>
  <TableHead>
    <TableRow>
      <TableCell>Name</TableCell>
      <TableCell>Role</TableCell>
    </TableRow>
  </TableHead>
</Table>`,
  },
}
