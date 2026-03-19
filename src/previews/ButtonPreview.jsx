import { useState } from 'react'

export default function ButtonPreview() {
  const [active, setActive] = useState(null)

  const buttons = [
    {
      label: 'Primary',
      style: {
        background: 'var(--accent)',
        color: 'var(--accent-text)',
        border: 'none',
      },
      hoverBg: 'var(--accent-hover)',
    },
    {
      label: 'Secondary',
      style: {
        background: 'var(--bg-elevated)',
        color: 'var(--text-primary)',
        border: '1px solid var(--border)',
      },
      hoverBg: 'var(--bg-hover)',
    },
    {
      label: 'Ghost',
      style: {
        background: 'transparent',
        color: 'var(--text-secondary)',
        border: '1px solid transparent',
      },
      hoverBg: 'var(--bg-hover)',
    },
  ]

  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
      {buttons.map(b => (
        <button
          key={b.label}
          onMouseDown={() => setActive(b.label)}
          onMouseUp={() => setActive(null)}
          onMouseLeave={() => setActive(null)}
          style={{
            ...b.style,
            padding: '8px 16px',
            borderRadius: 8,
            fontSize: 12,
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'transform 0.2s ease, background 0.2s ease',
            transform: active === b.label ? 'scale(0.96)' : 'scale(1)',
          }}
        >
          {b.label}
        </button>
      ))}
    </div>
  )
}
