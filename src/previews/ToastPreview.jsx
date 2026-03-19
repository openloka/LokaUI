import { useState, useEffect, useCallback } from 'react'

export default function ToastPreview() {
  const [visible, setVisible] = useState(true)

  const show = useCallback(() => {
    setVisible(true)
  }, [])

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => setVisible(false), 4000)
      return () => clearTimeout(timer)
    }
  }, [visible])

  return (
    <div style={{ minHeight: 60, position: 'relative' }}>
      {visible ? (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '10px 14px',
          borderRadius: 10,
          background: 'var(--green-muted)',
          border: '1px solid rgba(34,197,94,0.2)',
        }}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="7" stroke="var(--green)" strokeWidth="1.5" />
            <path d="M5 8l2 2 4-4" stroke="var(--green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--green)', flex: 1 }}>
            Changes saved successfully!
          </span>
          <button
            onClick={() => setVisible(false)}
            style={{
              color: 'var(--green)',
              opacity: 0.6,
              fontSize: 14,
              lineHeight: 1,
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              padding: 2,
            }}
          >&times;</button>
        </div>
      ) : (
        <button
          onClick={show}
          style={{
            padding: '8px 14px',
            borderRadius: 8,
            background: 'var(--bg-hover)',
            color: 'var(--text-secondary)',
            fontSize: 11,
            fontWeight: 500,
            cursor: 'pointer',
            border: '1px solid var(--border)',
          }}
        >Show toast</button>
      )}
    </div>
  )
}
