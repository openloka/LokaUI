export default function BadgePreview() {
  const badges = [
    { label: 'Active', bg: 'var(--green-muted)', color: 'var(--green)' },
    { label: 'Pending', bg: 'var(--amber-muted)', color: 'var(--amber)' },
    { label: 'Error', bg: 'var(--red-muted)', color: 'var(--red)' },
    { label: 'Info', bg: 'var(--blue-muted)', color: 'var(--blue)' },
    { label: 'Neutral', bg: 'var(--bg-hover)', color: 'var(--text-secondary)' },
  ]

  return (
    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
      {badges.map(b => (
        <span key={b.label} style={{
          padding: '3px 10px',
          borderRadius: 6,
          background: b.bg,
          color: b.color,
          fontSize: 10,
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
        }}>{b.label}</span>
      ))}
    </div>
  )
}
