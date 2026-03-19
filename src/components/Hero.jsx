import { useState } from 'react'

export default function Hero() {
  const [copied, setCopied] = useState(false)
  const cliCommand = 'npx loka-ui@latest init'

  const handleCopy = () => {
    navigator.clipboard.writeText(cliCommand).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '120px clamp(16px, 4vw, 48px) 80px',
      textAlign: 'center',
      overflow: 'hidden',
    }}>
      {/* Ambient glow orbs */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '20%',
        width: 500,
        height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, var(--glow) 0%, transparent 70%)',
        animation: 'loka-glow 4s ease-in-out infinite',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        top: '30%',
        right: '15%',
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(14,165,142,0.04) 0%, transparent 70%)',
        animation: 'loka-glow 5s ease-in-out infinite 1s',
        pointerEvents: 'none',
      }} />

      {/* Announcement badge */}
      <div data-anim style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '6px 16px',
        borderRadius: 50,
        background: 'var(--accent-muted)',
        border: '1px solid var(--border-accent)',
        fontSize: 12,
        fontWeight: 600,
        color: 'var(--accent)',
        marginBottom: 32,
        fontFamily: "'IBM Plex Mono', monospace",
      }}>
        <span style={{
          background: 'var(--accent)',
          color: 'var(--accent-text)',
          padding: '1px 6px',
          borderRadius: 4,
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: '0.5px',
        }}>NEW</span>
        50+ components now available
      </div>

      {/* Headline */}
      <h1 data-anim data-delay="0.1" style={{
        fontFamily: "'Fraunces', serif",
        fontSize: 'clamp(42px, 6.5vw, 78px)',
        fontWeight: 900,
        letterSpacing: '-2px',
        lineHeight: 1.05,
        maxWidth: 800,
        marginBottom: 24,
      }}>
        Components that feel{' '}
        <span style={{
          background: 'linear-gradient(135deg, var(--accent), var(--accent-hover))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>alive</span>
        , built for{' '}
        <span style={{ position: 'relative', display: 'inline-block' }}>
          <em style={{ fontStyle: 'italic' }}>real apps</em>
          <svg
            viewBox="0 0 200 12"
            preserveAspectRatio="none"
            style={{
              position: 'absolute',
              bottom: -4,
              left: 0,
              width: '100%',
              height: 10,
            }}
          >
            <path
              d="M2 8 Q50 2 100 6 Q150 10 198 4"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </h1>

      {/* Subtitle */}
      <p data-anim data-delay="0.2" style={{
        fontSize: 18,
        fontWeight: 400,
        lineHeight: 1.7,
        color: 'var(--text-secondary)',
        maxWidth: 560,
        marginBottom: 40,
      }}>
        A modern, accessible, themeable React UI design system.
        Dark-first. Copy & paste. No lock-in. Just beautiful components.
      </p>

      {/* CTA buttons */}
      <div data-anim data-delay="0.3" style={{
        display: 'flex',
        gap: 14,
        marginBottom: 32,
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        <button
          style={{
            fontSize: 14,
            fontWeight: 600,
            padding: '12px 28px',
            borderRadius: 12,
            background: 'linear-gradient(135deg, var(--accent), var(--accent-hover))',
            color: 'var(--accent-text)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            boxShadow: '0 4px 20px rgba(14,165,142,0.25)',
          }}
          onMouseDown={e => e.target.style.transform = 'scale(0.96)'}
          onMouseUp={e => e.target.style.transform = 'scale(1)'}
        >
          Browse components
        </button>
        <button
          style={{
            fontSize: 14,
            fontWeight: 600,
            padding: '12px 28px',
            borderRadius: 12,
            background: 'transparent',
            color: 'var(--text-primary)',
            border: '1px solid var(--border)',
            transition: 'transform 0.2s ease, border-color 0.2s ease, background 0.2s ease',
          }}
          onMouseEnter={e => {
            e.target.style.borderColor = 'var(--border-hover)'
            e.target.style.background = 'var(--bg-elevated)'
          }}
          onMouseLeave={e => {
            e.target.style.borderColor = 'var(--border)'
            e.target.style.background = 'transparent'
          }}
          onMouseDown={e => e.target.style.transform = 'scale(0.96)'}
          onMouseUp={e => e.target.style.transform = 'scale(1)'}
        >
          Documentation
        </button>
      </div>

      {/* CLI snippet */}
      <div data-anim data-delay="0.4" style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 12px 10px 18px',
        borderRadius: 12,
        background: 'var(--code-bg)',
        border: '1px solid var(--border)',
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: 13,
        color: 'var(--text-secondary)',
      }}>
        <span style={{ color: 'var(--text-tertiary)', userSelect: 'none' }}>$</span>
        <code>{cliCommand}</code>
        <button
          onClick={handleCopy}
          aria-label="Copy CLI command"
          style={{
            padding: '4px 10px',
            borderRadius: 6,
            background: 'var(--bg-hover)',
            color: copied ? 'var(--accent)' : 'var(--text-tertiary)',
            fontSize: 11,
            fontWeight: 600,
            fontFamily: "'IBM Plex Mono', monospace",
            transition: 'color 0.2s ease',
            border: '1px solid var(--border)',
          }}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </section>
  )
}
