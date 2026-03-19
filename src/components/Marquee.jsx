const keywords = [
  'Accessible', 'Dark-first', 'Copy & Paste', 'React Aria', 'Tailwind CSS',
  'TypeScript', 'Composable', 'Responsive', 'Animated', 'Themeable',
  'SSR Ready', 'Open Source',
]

export default function Marquee() {
  return (
    <section style={{
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      padding: '18px 0',
      overflow: 'hidden',
      margin: '0 0 80px',
    }}>
      <div style={{
        display: 'flex',
        animation: 'loka-marquee 30s linear infinite',
        width: 'max-content',
      }}>
        {[...keywords, ...keywords].map((kw, i) => (
          <span key={i} style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '0 24px',
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 12,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            color: 'var(--text-muted)',
            whiteSpace: 'nowrap',
          }}>
            <span style={{
              width: 5,
              height: 5,
              borderRadius: '50%',
              background: 'var(--accent)',
              flexShrink: 0,
            }} />
            {kw}
          </span>
        ))}
      </div>
    </section>
  )
}
