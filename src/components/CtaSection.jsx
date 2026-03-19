export default function CtaSection() {
  return (
    <section style={{
      padding: '0 clamp(16px, 4vw, 48px) 100px',
      maxWidth: 900,
      margin: '0 auto',
    }}>
      <div data-anim style={{
        position: 'relative',
        padding: 'clamp(40px, 6vw, 64px)',
        borderRadius: 20,
        background: 'var(--accent-muted)',
        border: '1px solid var(--border-accent)',
        textAlign: 'center',
        overflow: 'hidden',
      }}>
        {/* Decorative glow */}
        <div style={{
          position: 'absolute',
          top: '-30%',
          right: '-10%',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--glow) 0%, transparent 70%)',
          animation: 'loka-glow 5s ease-in-out infinite',
          pointerEvents: 'none',
        }} />

        <h2 style={{
          fontFamily: "'Fraunces', serif",
          fontSize: 'clamp(28px, 4vw, 40px)',
          fontWeight: 800,
          letterSpacing: '-1px',
          marginBottom: 14,
          position: 'relative',
        }}>
          Ready to build something{' '}
          <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>beautiful</em>?
        </h2>
        <p style={{
          fontSize: 15,
          color: 'var(--text-secondary)',
          marginBottom: 32,
          maxWidth: 480,
          margin: '0 auto 32px',
          lineHeight: 1.7,
          position: 'relative',
        }}>
          Start with our CLI, browse the docs, or jump straight into the component library. It's free and open source.
        </p>

        <div style={{
          display: 'flex',
          gap: 12,
          justifyContent: 'center',
          flexWrap: 'wrap',
          position: 'relative',
        }}>
          <button
            style={{
              padding: '12px 28px',
              borderRadius: 12,
              background: 'var(--accent)',
              color: 'var(--accent-text)',
              fontSize: 14,
              fontWeight: 600,
              transition: 'transform 0.2s ease, background 0.2s ease',
            }}
            onMouseEnter={e => e.target.style.background = 'var(--accent-hover)'}
            onMouseLeave={e => e.target.style.background = 'var(--accent)'}
            onMouseDown={e => e.target.style.transform = 'scale(0.96)'}
            onMouseUp={e => e.target.style.transform = 'scale(1)'}
          >
            Get started free
          </button>
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '12px 28px',
              borderRadius: 12,
              background: 'transparent',
              border: '1px solid var(--border)',
              color: 'var(--text-primary)',
              fontSize: 14,
              fontWeight: 600,
              transition: 'border-color 0.2s ease, background 0.2s ease, transform 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--border-hover)'
              e.currentTarget.style.background = 'var(--bg-elevated)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.background = 'transparent'
            }}
            onMouseDown={e => e.currentTarget.style.transform = 'scale(0.96)'}
            onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </button>
        </div>
      </div>
    </section>
  )
}
