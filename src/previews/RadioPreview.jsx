import { useState } from 'react'

export default function RadioPreview() {
  const [selected, setSelected] = useState('free')
  const plans = [
    { value: 'free', label: 'Free', desc: 'Basic features' },
    { value: 'pro', label: 'Pro', desc: 'Advanced tools' },
    { value: 'enterprise', label: 'Enterprise', desc: 'Unlimited access' },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {plans.map(plan => (
        <label
          key={plan.value}
          onClick={() => setSelected(plan.value)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            cursor: 'pointer',
            padding: '10px',
            borderRadius: 8,
            border: `1px solid ${selected === plan.value ? 'var(--accent)' : 'var(--border)'}`,
            background: selected === plan.value ? 'var(--accent-muted)' : 'transparent',
            transition: 'all 0.15s ease',
          }}
        >
          <span style={{
            width: 16,
            height: 16,
            borderRadius: '50%',
            border: `2px solid ${selected === plan.value ? 'var(--accent)' : 'var(--border-hover)'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            {selected === plan.value && (
              <span style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: 'var(--accent)',
              }} />
            )}
          </span>
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-primary)' }}>{plan.label}</div>
            <div style={{ fontSize: 10, color: 'var(--text-tertiary)' }}>{plan.desc}</div>
          </div>
        </label>
      ))}
    </div>
  )
}
