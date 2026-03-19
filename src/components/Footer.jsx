export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '32px clamp(16px, 4vw, 48px)',
      maxWidth: 1200,
      margin: '0 auto',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 20,
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            width: 24,
            height: 24,
            borderRadius: '25%',
            background: 'linear-gradient(135deg, var(--accent), var(--accent-hover))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
              <line x1="4" y1="3" x2="4" y2="15" stroke="var(--accent-text)" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="4" y1="15" x2="11" y2="15" stroke="var(--accent-text)" strokeWidth="2.2" strokeLinecap="round" />
              <circle cx="15" cy="11" r="3.5" stroke="var(--accent-text)" strokeWidth="2.2" fill="none" />
            </svg>
          </div>
          <span style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 800,
            fontSize: 14,
          }}>
            Loka<span style={{ color: 'var(--accent)' }}>UI</span>
          </span>
        </div>

        {/* Links */}
        <nav style={{
          display: 'flex',
          gap: 24,
        }}>
          {['Documentation', 'Components', 'GitHub', 'Twitter'].map(link => (
            <a
              key={link}
              href="#"
              style={{
                fontSize: 12,
                fontFamily: "'IBM Plex Mono', monospace",
                color: 'var(--text-tertiary)',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-tertiary)'}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <span style={{
          fontSize: 11,
          color: 'var(--text-muted)',
          fontFamily: "'IBM Plex Mono', monospace",
        }}>
          &copy; 2026 LokaUI. MIT License.
        </span>
      </div>
    </footer>
  )
}
