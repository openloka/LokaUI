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
