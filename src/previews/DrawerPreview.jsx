import { useState } from 'react'

export default function DrawerPreview() {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ position: 'relative', minHeight: 120 }}>
      <button
        onClick={() => setOpen(true)}
        style={{
          padding: '8px 14px',
          borderRadius: 8,
          background: 'var(--accent)',
          color: 'var(--accent-text)',
          fontSize: 11,
          fontWeight: 600,
          cursor: 'pointer',
          border: 'none',
        }}
      >Open Drawer</button>

      {open && (
        <>
          <div
            onClick={() => setOpen(false)}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0,0,0,0.3)',
              borderRadius: 8,
            }}
          />
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            width: '60%',
            background: 'var(--bg-elevated)',
            borderLeft: '1px solid var(--border)',
            borderRadius: '0 8px 8px 0',
            padding: 14,
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            animation: 'loka-slide-in 0.2s ease',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-primary)' }}>Menu</span>
              <button
                onClick={() => setOpen(false)}
                style={{ background: 'none', border: 'none', color: 'var(--text-tertiary)', cursor: 'pointer', fontSize: 16 }}
              >&times;</button>
            </div>
            {['Dashboard', 'Settings', 'Profile'].map(item => (
              <div key={item} style={{
                padding: '6px 10px',
                borderRadius: 6,
                fontSize: 11,
                color: 'var(--text-secondary)',
                cursor: 'pointer',
              }}>{item}</div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
