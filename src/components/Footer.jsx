import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer
      className="border-t border-border max-w-300 mx-auto"
      style={{ padding: '32px clamp(16px, 4vw, 48px)' }}
    >
      <div className="flex items-center justify-between flex-wrap gap-5">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded-[25%] flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-hover))' }}
          >
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
              <line x1="4" y1="3" x2="4" y2="15" stroke="var(--accent-text)" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="4" y1="15" x2="11" y2="15" stroke="var(--accent-text)" strokeWidth="2.2" strokeLinecap="round" />
              <circle cx="15" cy="11" r="3.5" stroke="var(--accent-text)" strokeWidth="2.2" fill="none" />
            </svg>
          </div>
          <span className="font-pixel font-extrabold text-sm">
            Loka<span className="text-accent">UI</span>
          </span>
        </div>

        {/* Links */}
        <nav className="flex gap-6">
          {[
            { label: 'Documentation', to: '/docs/getting-started' },
            { label: 'Components', to: '/foundations/button' },
          ].map(link => (
            <Link
              key={link.label}
              to={link.to}
              className="text-xs font-mono text-text-tertiary hover:text-text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          {[
            { label: 'GitHub', href: 'https://github.com/openloka/LokaUI' },
            { label: 'Twitter', href: 'https://twitter.com/lokaui' },
          ].map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-mono text-text-tertiary hover:text-text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <span className="text-[11px] text-text-muted font-mono">
          &copy; 2026 LokaUI. MIT License.
        </span>
      </div>
    </footer>
  )
}
