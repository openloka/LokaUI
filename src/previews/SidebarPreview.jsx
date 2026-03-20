import { useState } from 'react'

export default function SidebarPreview() {
  const [active, setActive] = useState('Dashboard')
  const groups = [
    { label: 'Main', items: ['Dashboard', 'Analytics'] },
    { label: 'Settings', items: ['General', 'Team'] },
  ]

  return (
    <div style={{
      width: '100%',
      maxWidth: 180,
      background: 'var(--bg-elevated)',
      border: '1px solid var(--border)',
      borderRadius: 8,
      padding: 8,
    }}>
      {groups.map(group => (
        <div key={group.label} style={{ marginBottom: 8 }}>
          <div style={{
            fontSize: 9,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            color: 'var(--text-muted)',
            padding: '4px 8px',
          }}>{group.label}</div>
          {group.items.map(item => (
            <button
              key={item}
              onClick={() => setActive(item)}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                padding: '5px 8px',
                borderRadius: 5,
                fontSize: 11,
                fontWeight: active === item ? 600 : 400,
                color: active === item ? 'var(--accent)' : 'var(--text-secondary)',
                background: active === item ? 'var(--accent-muted)' : 'transparent',
                border: 'none',
                cursor: 'pointer',
                marginBottom: 1,
              }}
            >{item}</button>
          ))}
        </div>
      ))}
    </div>
  )
}
