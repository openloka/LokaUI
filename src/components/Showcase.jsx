import { useState } from 'react'

function SignInCard() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="p-7 rounded-2xl bg-bg-card border border-border transition-colors">
      <h3 className="font-pixel text-lg font-bold mb-1">Welcome back</h3>
      <p className="text-[13px] text-text-secondary mb-6">Sign in to your account to continue</p>

      <div className="flex flex-col gap-4">
        <div>
          <label className="block text-xs font-semibold text-text-secondary mb-1.5">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-[10px] border border-border bg-bg-input text-text-primary text-[13px] font-normal outline-none focus:border-border-accent transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-text-secondary mb-1.5">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-[10px] border border-border bg-bg-input text-text-primary text-[13px] font-normal outline-none focus:border-border-accent transition-colors"
          />
        </div>
        <div className="flex justify-between items-center">
          <label className="flex items-center gap-1.5 text-xs text-text-tertiary cursor-pointer">
            <input type="checkbox" style={{ accentColor: 'var(--accent)' }} />
            Remember me
          </label>
          <a href="#" className="text-xs text-accent font-medium">Forgot password?</a>
        </div>
        <button className="w-full py-2.5 rounded-[10px] bg-accent text-accent-text text-[13px] font-semibold hover:bg-accent-hover active:scale-[0.96] transition-all">
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
    <div className="p-7 rounded-2xl bg-bg-card border border-border">
      <h3 className="font-pixel text-lg font-bold mb-1">Analytics</h3>
      <p className="text-[13px] text-text-secondary mb-5">Your performance this month</p>

      <div className="grid grid-cols-3 gap-3 mb-5">
        {metrics.map(m => (
          <div key={m.label} className="p-3.5 rounded-[10px] bg-bg-elevated border border-border">
            <div className="text-[10px] font-semibold uppercase tracking-wide text-text-tertiary mb-1">
              {m.label}
            </div>
            <div className="text-lg font-bold font-mono mb-0.5">{m.value}</div>
            <div className={`text-[11px] font-semibold ${m.positive ? 'text-status-green' : 'text-status-red'}`}>
              {m.change}
            </div>
          </div>
        ))}
      </div>

      {/* Bar chart */}
      <div className="flex items-end gap-1.5 h-20 py-3">
        {barData.map((h, i) => (
          <div
            key={i}
            className={`flex-1 rounded-t transition-all duration-300 ${
              i === barData.length - 2 ? 'bg-accent' : 'bg-accent-muted'
            }`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="flex justify-between text-[10px] text-text-muted font-mono">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => (
          <span key={d}>{d}</span>
        ))}
      </div>
    </div>
  )
}

export default function Showcase() {
  return (
    <section
      className="max-w-275 mx-auto pb-20"
      style={{ padding: '0 clamp(16px, 4vw, 48px) 80px' }}
    >
      <div data-anim className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))' }}>
        <SignInCard />
        <AnalyticsDashboard />
      </div>
    </section>
  )
}
