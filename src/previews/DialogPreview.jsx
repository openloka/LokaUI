import { useState } from 'react'

export default function DialogPreview() {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ position: 'relative', minHeight: 120, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
      >Open Dialog</button>

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
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'var(--bg-elevated)',
            border: '1px solid var(--border)',
            borderRadius: 10,
            padding: 16,
            width: '75%',
            maxWidth: 240,
          }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6 }}>Confirm Action</div>
            <p style={{ fontSize: 11, color: 'var(--text-secondary)', marginBottom: 14, lineHeight: 1.5 }}>Are you sure you want to proceed? This action cannot be undone.</p>
            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
              <button
                onClick={() => setOpen(false)}
                style={{
                  padding: '5px 12px',
                  borderRadius: 6,
                  fontSize: 10,
                  fontWeight: 600,
                  background: 'transparent',
                  border: '1px solid var(--border)',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                }}
              >Cancel</button>
              <button
                onClick={() => setOpen(false)}
                style={{
                  padding: '5px 12px',
                  borderRadius: 6,
                  fontSize: 10,
                  fontWeight: 600,
                  background: 'var(--accent)',
                  color: 'var(--accent-text)',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >Confirm</button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
