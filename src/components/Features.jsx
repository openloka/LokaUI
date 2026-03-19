const features = [
  {
    icon: '\u26A1',
    title: 'Accessible by default',
    desc: 'Built on React Aria primitives. WCAG 2.1 AA compliant with keyboard navigation and screen reader support included.',
  },
  {
    icon: '\u25D1',
    title: 'Dark-first design',
    desc: 'Every component designed in dark mode first, then adapted for light. Both themes feel intentional and polished.',
  },
  {
    icon: '\u2702',
    title: 'Copy & paste ready',
    desc: 'No npm install lock-in. Browse, copy source code, and own your components. Zero dependency lock-in.',
  },
  {
    icon: '\u2726',
    title: 'Fully composable',
    desc: 'Mix and match components freely. Predictable APIs that compose naturally for complex interfaces.',
  },
  {
    icon: '\u2B22',
    title: 'Tailwind native',
    desc: 'Styled with Tailwind CSS utilities. Integrates seamlessly into your existing Tailwind workflow.',
  },
  {
    icon: '\u2728',
    title: 'Motion built in',
    desc: 'Smooth micro-interactions and scroll-triggered reveals. CSS transitions with Framer Motion for complex orchestration.',
  },
]

export default function Features() {
  return (
    <section style={{
      padding: '0 clamp(16px, 4vw, 48px) 100px',
      maxWidth: 1100,
      margin: '0 auto',
    }}>
      <div data-anim style={{ textAlign: 'center', marginBottom: 56 }}>
        <h2 style={{
          fontFamily: "'Fraunces', serif",
          fontSize: 36,
          fontWeight: 800,
          letterSpacing: '-1px',
        }}>
          Designed for <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>developers</em>
        </h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: 20,
      }}>
        {features.map((f, i) => (
          <div
            key={f.title}
            data-anim
            data-delay={String(i * 0.08)}
            style={{
              padding: 28,
              borderRadius: 14,
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              transition: 'border-color 0.3s ease, background 0.3s ease',
              cursor: 'default',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--border-accent)'
              e.currentTarget.style.background = 'var(--bg-elevated)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.background = 'var(--bg-card)'
            }}
          >
            <div style={{ fontSize: 24, marginBottom: 14 }}>{f.icon}</div>
            <h3 style={{
              fontSize: 16,
              fontWeight: 700,
              marginBottom: 8,
            }}>{f.title}</h3>
            <p style={{
              fontSize: 13,
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
            }}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
