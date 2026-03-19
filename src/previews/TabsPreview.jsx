import { useState } from 'react'

export default function TabsPreview() {
  const [active, setActive] = useState('Overview')
  const tabs = ['Overview', 'Analytics', 'Settings']

  const content = {
    Overview: 'Project dashboard with key metrics and recent activity.',
    Analytics: 'Track user engagement, conversion rates, and growth.',
    Settings: 'Configure project preferences and team access.',
  }

  return (
    <div>
      <div style={{
        display: 'flex',
        gap: 2,
        borderBottom: '1px solid var(--border)',
        marginBottom: 12,
      }}>
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            style={{
              padding: '6px 14px',
              fontSize: 11,
              fontWeight: active === tab ? 600 : 400,
              color: active === tab ? 'var(--accent)' : 'var(--text-tertiary)',
              borderBottom: active === tab ? '2px solid var(--accent)' : '2px solid transparent',
              background: 'none',
              transition: 'color 0.2s ease',
              cursor: 'pointer',
              marginBottom: -1,
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      <p style={{ fontSize: 11, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
        {content[active]}
      </p>
    </div>
  )
}
