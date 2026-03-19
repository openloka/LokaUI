import { useState, useEffect } from 'react'
import { useTheme } from '../theme'

function Logo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{
        width: 34,
        height: 34,
        borderRadius: '25%',
        background: 'linear-gradient(135deg, var(--accent), var(--accent-hover))',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <line x1="4" y1="3" x2="4" y2="15" stroke="var(--accent-text)" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="4" y1="15" x2="11" y2="15" stroke="var(--accent-text)" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="15" cy="11" r="3.5" stroke="var(--accent-text)" strokeWidth="2.2" fill="none" />
        </svg>
      </div>
      <span style={{
        fontFamily: "'Fraunces', serif",
        fontWeight: 800,
        fontSize: 17,
        letterSpacing: '-0.3px',
      }}>
        Loka<span style={{ color: 'var(--accent)' }}>UI</span>
      </span>
      <span style={{
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: 10,
        fontWeight: 600,
        padding: '2px 6px',
        borderRadius: 4,
        background: 'var(--accent-muted)',
        color: 'var(--accent)',
        letterSpacing: '0.5px',
      }}>v0.1</span>
    </div>
  )
}

function ThemeToggle() {
  const { mode, toggle } = useTheme()
  const isDark = mode === 'dark'

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      style={{
        width: 40,
        height: 40,
        borderRadius: 10,
        background: 'var(--toggle-bg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background 0.2s ease',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Sun */}
      <svg
        width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-primary)"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        style={{
          position: 'absolute',
          transform: isDark ? 'scale(0) rotate(-90deg)' : 'scale(1) rotate(0deg)',
          transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)',
          opacity: isDark ? 0 : 1,
        }}
      >
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
      {/* Moon */}
      <svg
        width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-primary)"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        style={{
          position: 'absolute',
          transform: isDark ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(90deg)',
          transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)',
          opacity: isDark ? 1 : 0,
        }}
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  )
}

const navLinks = ['Docs', 'Components', 'Blocks', 'Themes']

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { mode } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollBg = mode === 'dark' ? 'rgba(9,9,11,0.72)' : 'rgba(250,250,249,0.72)'

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: 64,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 clamp(16px, 4vw, 48px)',
      background: scrolled ? scrollBg : 'transparent',
      backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'background 0.3s ease, border-bottom 0.3s ease, backdrop-filter 0.3s ease',
    }}>
      <Logo />

      <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        {navLinks.map(link => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            style={{
              fontSize: 13,
              fontWeight: 500,
              color: 'var(--text-secondary)',
              padding: '6px 14px',
              borderRadius: 8,
              transition: 'color 0.2s ease, background 0.2s ease',
            }}
            onMouseEnter={e => {
              e.target.style.color = 'var(--text-primary)'
              e.target.style.background = 'var(--bg-hover)'
            }}
            onMouseLeave={e => {
              e.target.style.color = 'var(--text-secondary)'
              e.target.style.background = 'transparent'
            }}
          >
            {link}
          </a>
        ))}
      </nav>

      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <ThemeToggle />
        <button style={{
          fontSize: 13,
          fontWeight: 600,
          padding: '8px 18px',
          borderRadius: 10,
          background: 'var(--accent)',
          color: 'var(--accent-text)',
          transition: 'background 0.2s ease, transform 0.2s ease',
        }}
          onMouseEnter={e => e.target.style.background = 'var(--accent-hover)'}
          onMouseLeave={e => e.target.style.background = 'var(--accent)'}
          onMouseDown={e => e.target.style.transform = 'scale(0.96)'}
          onMouseUp={e => e.target.style.transform = 'scale(1)'}
        >
          Get started
        </button>
      </div>
    </header>
  )
}
