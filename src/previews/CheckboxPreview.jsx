import { useState } from 'react'

function Checkbox({ label, defaultChecked = false }) {
  const [checked, setChecked] = useState(defaultChecked)

  return (
    <label style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      cursor: 'pointer',
      fontSize: 12,
      color: checked ? 'var(--text-tertiary)' : 'var(--text-secondary)',
      textDecoration: checked ? 'line-through' : 'none',
      transition: 'color 0.2s ease',
    }}>
      <span
        onClick={(e) => { e.preventDefault(); setChecked(!checked) }}
        style={{
          width: 16,
          height: 16,
          borderRadius: 4,
          border: checked ? 'none' : '1.5px solid var(--border-hover)',
          background: checked ? 'var(--accent)' : 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background 0.2s ease, border-color 0.2s ease',
          flexShrink: 0,
        }}
      >
        {checked && (
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 6L5 8.5L9.5 3.5" stroke="var(--accent-text)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        style={{ display: 'none' }}
      />
      {label}
    </label>
  )
}

export default function CheckboxPreview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <Checkbox label="Design landing page" defaultChecked={true} />
      <Checkbox label="Build component library" defaultChecked={false} />
      <Checkbox label="Write documentation" defaultChecked={false} />
    </div>
  )
}
