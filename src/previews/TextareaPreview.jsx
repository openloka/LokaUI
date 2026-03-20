import { useState } from 'react'

export default function TextareaPreview() {
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
      }}>Message</label>
      <textarea
        placeholder="Write your message..."
        value={value}
        onChange={e => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        rows={3}
        style={{
          width: '100%',
          padding: '8px 12px',
          borderRadius: 8,
          border: `1px solid ${focused ? 'var(--border-accent)' : 'var(--border)'}`,
          background: 'var(--bg-input)',
          color: 'var(--text-primary)',
          fontSize: 12,
          outline: 'none',
          resize: 'vertical',
          fontFamily: 'inherit',
          transition: 'border-color 0.2s ease',
        }}
      />
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 4,
      }}>
        <span style={{ fontSize: 10, color: 'var(--text-tertiary)' }}>Markdown supported</span>
        <span style={{ fontSize: 10, color: 'var(--text-tertiary)', fontFamily: "'IBM Plex Mono', monospace" }}>{value.length}/500</span>
      </div>
    </div>
  )
}
