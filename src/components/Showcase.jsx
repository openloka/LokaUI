import { useState } from 'react'

function SignInCard() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [focusedField, setFocusedField] = useState(null)

  const inputStyle = (field) => ({
    width: '100%',
    padding: '10px 14px',
    borderRadius: 10,
    border: `1px solid ${focusedField === field ? 'var(--border-accent)' : 'var(--border)'}`,
    background: 'var(--bg-input)',
    color: 'var(--text-primary)',
    fontSize: 13,
    fontWeight: 400,
    outline: 'none',
    transition: 'border-color 0.2s ease',
  })

  return (
    <div style={{
      padding: 28,
      borderRadius: 16,
      background: 'var(--bg-card)',
      border: '1px solid var(--border)',
      transition: 'border-color 0.3s ease',
    }}>
      <h3 style={{
        fontFamily: "'Fraunces', serif",
        fontSize: 18,
        fontWeight: 700,
        marginBottom: 4,
      }}>Welcome back</h3>
      <p style={{
        fontSize: 13,
        color: 'var(--text-secondary)',
        marginBottom: 24,
      }}>Sign in to your account to continue</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div>
          <label style={{
            display: 'block',
            fontSize: 12,
            fontWeight: 600,
            color: 'var(--text-secondary)',
            marginBottom: 6,
          }}>Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField(null)}
            style={inputStyle('email')}
          />
        </div>
        <div>
          <label style={{
            display: 'block',
            fontSize: 12,
            fontWeight: 600,
            color: 'var(--text-secondary)',
            marginBottom: 6,
          }}>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onFocus={() => setFocusedField('password')}
            onBlur={() => setFocusedField(null)}
            style={inputStyle('password')}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <label style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            fontSize: 12,
            color: 'var(--text-tertiary)',
            cursor: 'pointer',
          }}>
            <input type="checkbox" style={{ accentColor: 'var(--accent)' }} />
            Remember me
          </label>
          <a href="#" style={{
            fontSize: 12,
            color: 'var(--accent)',
            fontWeight: 500,
          }}>Forgot password?</a>
        </div>
        <button style={{
          width: '100%',
          padding: '10px 0',
          borderRadius: 10,
          background: 'var(--accent)',
          color: 'var(--accent-text)',
          fontSize: 13,
          fontWeight: 600,
          transition: 'background 0.2s ease, transform 0.2s ease',
        }}
          onMouseEnter={e => e.target.style.background = 'var(--accent-hover)'}
          onMouseLeave={e => e.target.style.background = 'var(--accent)'}
          onMouseDown={e => e.target.style.transform = 'scale(0.96)'}
          onMouseUp={e => e.target.style.transform = 'scale(1)'}
        >
          Sign in
        </button>
      </div>
    </div>
  )
}

function AnalyticsDashboard() {
  const metrics = [
    { label: 'Revenue', value: '$48.2K', change: '+12.5%', positive: true },
    { label: 'Users', value: '2,847', change: '+8.2%', positive: true },
    { label: 'Growth', value: '23.1%', change: '-2.4%', positive: false },
  ]

  const barData = [35, 58, 42, 70, 55, 85, 62]

  return (
    <div style={{
      padding: 28,
      borderRadius: 16,
      background: 'var(--bg-card)',
      border: '1px solid var(--border)',
    }}>
      <h3 style={{
        fontFamily: "'Fraunces', serif",
        fontSize: 18,
        fontWeight: 700,
        marginBottom: 4,
      }}>Analytics</h3>
      <p style={{
        fontSize: 13,
        color: 'var(--text-secondary)',
        marginBottom: 20,
      }}>Your performance this month</p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 12,
        marginBottom: 20,
      }}>
        {metrics.map(m => (
          <div key={m.label} style={{
            padding: 14,
            borderRadius: 10,
            background: 'var(--bg-elevated)',
            border: '1px solid var(--border)',
          }}>
            <div style={{
              fontSize: 10,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              color: 'var(--text-tertiary)',
              marginBottom: 4,
            }}>{m.label}</div>
            <div style={{
              fontSize: 18,
              fontWeight: 700,
              fontFamily: "'IBM Plex Mono', monospace",
              marginBottom: 2,
            }}>{m.value}</div>
            <div style={{
              fontSize: 11,
              fontWeight: 600,
              color: m.positive ? 'var(--green)' : 'var(--red)',
            }}>{m.change}</div>
          </div>
        ))}
      </div>

      {/* Bar chart */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-end',
        gap: 6,
        height: 80,
        padding: '12px 0',
      }}>
        {barData.map((h, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: `${h}%`,
              borderRadius: '4px 4px 0 0',
              background: i === barData.length - 2
                ? 'var(--accent)'
                : 'var(--accent-muted)',
              transition: 'height 0.3s ease',
            }}
          />
        ))}
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 10,
        color: 'var(--text-muted)',
        fontFamily: "'IBM Plex Mono', monospace",
      }}>
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => (
          <span key={d}>{d}</span>
        ))}
      </div>
    </div>
  )
}

export default function Showcase() {
  return (
    <section style={{
      padding: '0 clamp(16px, 4vw, 48px) 80px',
      maxWidth: 1100,
      margin: '0 auto',
    }}>
      <div data-anim style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: 24,
      }}>
        <SignInCard />
        <AnalyticsDashboard />
      </div>
    </section>
  )
}
