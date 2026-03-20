export default function TablePreview() {
  const rows = [
    { name: 'Alice Johnson', role: 'Admin', status: 'Active' },
    { name: 'Bob Smith', role: 'Editor', status: 'Pending' },
    { name: 'Carol White', role: 'Viewer', status: 'Inactive' },
  ]

  const statusColor = {
    Active: { bg: 'var(--green-muted)', color: 'var(--green)' },
    Pending: { bg: 'var(--amber-muted)', color: 'var(--amber)' },
    Inactive: { bg: 'var(--red-muted)', color: 'var(--red)' },
  }

  const cellStyle = {
    padding: '8px 12px',
    fontSize: 11,
    borderBottom: '1px solid var(--border)',
    textAlign: 'left',
  }

  return (
    <div style={{ overflowX: 'auto' }}>
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          {['Name', 'Role', 'Status'].map(h => (
            <th key={h} style={{
              ...cellStyle,
              fontSize: 10,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              color: 'var(--text-tertiary)',
            }}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(r => (
          <tr key={r.name}>
            <td style={{ ...cellStyle, fontWeight: 500 }}>{r.name}</td>
            <td style={{ ...cellStyle, color: 'var(--text-secondary)' }}>{r.role}</td>
            <td style={cellStyle}>
              <span style={{
                padding: '2px 8px',
                borderRadius: 4,
                fontSize: 10,
                fontWeight: 600,
                background: statusColor[r.status].bg,
                color: statusColor[r.status].color,
              }}>{r.status}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}
