export default function ProgressPreview() {
  const bars = [
    { label: 'Uploading...', value: 65, color: 'var(--accent)' },
    { label: 'Processing', value: 40, color: 'var(--amber)' },
    { label: 'Complete', value: 100, color: 'var(--green)' },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {bars.map(b => (
        <div key={b.label}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 4,
          }}>
            <span style={{ fontSize: 10, fontWeight: 500, color: 'var(--text-secondary)' }}>{b.label}</span>
            <span style={{ fontSize: 10, fontWeight: 600, color: 'var(--text-tertiary)', fontFamily: "'IBM Plex Mono', monospace" }}>{b.value}%</span>
          </div>
          <div style={{
            height: 5,
            borderRadius: 3,
            background: 'var(--bg-hover)',
            overflow: 'hidden',
          }}>
            <div style={{
              width: `${b.value}%`,
              height: '100%',
              borderRadius: 3,
              background: b.color,
              transition: 'width 0.6s ease',
            }} />
          </div>
        </div>
      ))}
    </div>
  )
}
