import { useState } from 'react'

export default function InputPreview() {
  const [value, setValue] = useState('')
  const [focused, setFocused] = useState(false)

  return (
    <div>
      <label style={{
        display: 'block',
        fontSize: 11,
        fontWeight: 600,
        color: 'var(--text-secondary)',
        marginBottom: 5,
      }}>Email address</label>
      <input
        type="email"
        placeholder="you@example.com"
        value={value}
        onChange={e => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: '100%',
          padding: '8px 12px',
          borderRadius: 8,
          border: `1px solid ${focused ? 'var(--border-accent)' : 'var(--border)'}`,
          background: 'var(--bg-input)',
          color: 'var(--text-primary)',
          fontSize: 12,
          outline: 'none',
          transition: 'border-color 0.2s ease',
        }}
      />
      <p style={{
        fontSize: 10,
        color: 'var(--text-tertiary)',
        marginTop: 4,
      }}>We'll never share your email.</p>
    </div>
  )
}
