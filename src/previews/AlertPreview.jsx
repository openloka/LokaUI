export default function AlertPreview() {
  const alerts = [
    {
      variant: 'info',
      color: 'var(--blue)',
      bg: 'var(--blue-muted)',
      message: 'A new version is available.',
    },
    {
      variant: 'success',
      color: 'var(--green)',
      bg: 'var(--green-muted)',
      message: 'Your changes have been saved.',
    },
    {
      variant: 'warning',
      color: 'var(--amber)',
      bg: 'var(--amber-muted)',
      message: 'Your trial expires in 3 days.',
    },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {alerts.map(a => (
        <div key={a.variant} style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '8px 12px',
          borderRadius: 8,
          background: a.bg,
          border: `1px solid ${a.color}20`,
        }}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
            <circle cx="8" cy="8" r="7" stroke={a.color} strokeWidth="1.5" />
            <path d="M8 5v3" stroke={a.color} strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="8" cy="11" r="0.75" fill={a.color} />
          </svg>
          <span style={{ fontSize: 11, fontWeight: 500, color: a.color }}>{a.message}</span>
        </div>
      ))}
    </div>
  )
}
