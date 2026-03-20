import { useState } from 'react'

function TooltipDemo({ label, tip }) {
  const [show, setShow] = useState(false)

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
        onClick={() => setShow(prev => !prev)}
        style={{
          padding: '6px 12px',
          borderRadius: 6,
          fontSize: 11,
          fontWeight: 500,
          background: 'var(--bg-hover)',
          border: '1px solid var(--border)',
          color: 'var(--text-secondary)',
          cursor: 'pointer',
        }}
      >{label}</button>
      {show && (
        <div style={{
          position: 'absolute',
          bottom: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          marginBottom: 6,
          padding: '4px 10px',
          borderRadius: 6,
          background: 'var(--text-primary)',
          color: 'var(--bg)',
          fontSize: 10,
          fontWeight: 500,
          whiteSpace: 'nowrap',
        }}>{tip}</div>
      )}
    </div>
  )
}

export default function TooltipPreview() {
  return (
    <div style={{ display: 'flex', gap: 12, justifyContent: 'center', paddingTop: 28 }}>
      <TooltipDemo label="Hover me" tip="Hello there!" />
      <TooltipDemo label="More info" tip="Extra details" />
    </div>
  )
}
