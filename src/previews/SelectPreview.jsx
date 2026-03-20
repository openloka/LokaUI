import { useState } from 'react'

export default function SelectPreview() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)
  const options = ['Apple', 'Banana', 'Cherry', 'Mango']

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 200 }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          padding: '8px 12px',
          borderRadius: 8,
          border: `1px solid ${open ? 'var(--border-accent)' : 'var(--border)'}`,
          background: 'var(--bg-input)',
          color: selected ? 'var(--text-primary)' : 'var(--text-muted)',
          fontSize: 12,
          textAlign: 'left',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {selected || 'Select a fruit...'}
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
          <path d="M4 6l4 4 4-4" stroke="var(--text-tertiary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          marginTop: 4,
          background: 'var(--bg-elevated)',
          border: '1px solid var(--border)',
          borderRadius: 8,
          overflow: 'hidden',
          zIndex: 10,
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        }}>
          {options.map(opt => (
            <button
              key={opt}
              onClick={() => { setSelected(opt); setOpen(false) }}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                padding: '7px 12px',
                fontSize: 11,
                color: selected === opt ? 'var(--accent)' : 'var(--text-secondary)',
                background: selected === opt ? 'var(--accent-muted)' : 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
            >{opt}</button>
          ))}
        </div>
      )}
    </div>
  )
}
