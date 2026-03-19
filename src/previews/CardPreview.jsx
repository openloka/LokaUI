export default function CardPreview() {
  const bars = [30, 55, 42, 68, 50, 75, 60]

  return (
    <div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 12,
      }}>
        <div>
          <div style={{
            fontSize: 10,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            color: 'var(--text-tertiary)',
            marginBottom: 2,
          }}>Revenue</div>
          <div style={{
            fontSize: 22,
            fontWeight: 700,
            fontFamily: "'IBM Plex Mono', monospace",
          }}>$12.4K</div>
        </div>
        <span style={{
          fontSize: 11,
          fontWeight: 600,
          color: 'var(--green)',
          padding: '2px 8px',
          borderRadius: 4,
          background: 'var(--green-muted)',
        }}>+18.2%</span>
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'flex-end',
        gap: 4,
        height: 48,
      }}>
        {bars.map((h, i) => (
          <div key={i} style={{
            flex: 1,
            height: `${h}%`,
            borderRadius: '3px 3px 0 0',
            background: i === bars.length - 2 ? 'var(--accent)' : 'var(--accent-muted)',
          }} />
        ))}
      </div>
    </div>
  )
}
