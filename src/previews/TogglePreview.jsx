import { useState } from 'react'

function Toggle({ label, defaultOn = false }) {
  const [on, setOn] = useState(defaultOn)

  return (
    <label style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      cursor: 'pointer',
    }}>
      <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{label}</span>
      <button
        role="switch"
        aria-checked={on}
        onClick={() => setOn(!on)}
        style={{
          width: 40,
          height: 22,
          borderRadius: 11,
          background: on ? 'var(--accent)' : 'var(--toggle-bg)',
          position: 'relative',
          transition: 'background 0.3s cubic-bezier(0.4,0,0.2,1)',
          border: 'none',
          cursor: 'pointer',
          flexShrink: 0,
        }}
      >
        <span style={{
          position: 'absolute',
          top: 2,
          left: on ? 20 : 2,
          width: 18,
          height: 18,
          borderRadius: '50%',
          background: 'var(--toggle-knob)',
          transition: 'left 0.3s cubic-bezier(0.4,0,0.2,1)',
          boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
        }} />
      </button>
    </label>
  )
}

export default function TogglePreview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Toggle label="Notifications" defaultOn={true} />
      <Toggle label="Dark mode" defaultOn={false} />
    </div>
  )
}
