import { useState } from 'react'

export default function PopoverPreview() {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          padding: '6px 14px',
          borderRadius: 6,
          fontSize: 11,
          fontWeight: 500,
          background: 'var(--bg-hover)',
          border: '1px solid var(--border)',
          color: 'var(--text-secondary)',
          cursor: 'pointer',
        }}
      >Open Popover</button>
      {open && (
        <div style={{
          position: 'absolute',
          top: '100%',
          right: 0,
          marginTop: 6,
          padding: 12,
          borderRadius: 8,
          background: 'var(--bg-elevated)',
          border: '1px solid var(--border)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          minWidth: 160,
          zIndex: 10,
        }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 6 }}>Quick Actions</div>
          {['Edit profile', 'View analytics', 'Export data'].map(item => (
            <div key={item} style={{
              padding: '5px 8px',
              borderRadius: 4,
              fontSize: 10,
              color: 'var(--text-secondary)',
              cursor: 'pointer',
            }}>{item}</div>
          ))}
        </div>
      )}
    </div>
  )
}
