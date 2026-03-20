import { useState } from 'react'

export default function Hero() {
  const [copied, setCopied] = useState(false)
  const cliCommand = 'npx loka-ui@latest init'

  const handleCopy = () => {
    navigator.clipboard.writeText(cliCommand).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ padding: '120px clamp(16px, 4vw, 48px) 80px' }}
    >
      {/* Ambient glow orbs */}
      <div
        className="absolute top-[10%] left-[20%] w-125 h-125 rounded-full pointer-events-none animate-glow"
        style={{ background: 'radial-gradient(circle, var(--glow) 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-[30%] right-[15%] w-100 h-100 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(14,165,142,0.04) 0%, transparent 70%)',
          animation: 'loka-glow 5s ease-in-out infinite 1s',
        }}
      />

      {/* Announcement badge */}
      <div
        data-anim
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-muted border border-border-accent text-xs font-semibold text-accent mb-8 font-mono"
      >
        <span className="bg-accent text-accent-text px-1.5 py-px rounded text-[10px] font-bold tracking-wide">
          NEW
        </span>
        50+ components now available
      </div>

      {/* Headline */}
      <h1
        data-anim
        data-delay="0.1"
        className="font-pixel font-black tracking-tight leading-[1.05] max-w-200 mb-6"
        style={{ fontSize: 'clamp(42px, 6.5vw, 78px)', letterSpacing: '-2px' }}
      >
        Components that feel{' '}
        <span
          className="bg-clip-text"
          style={{
            background: 'linear-gradient(135deg, var(--accent), var(--accent-hover))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          alive
        </span>
        , built for{' '}
        <span className="relative inline-block">
          <em className="italic">real apps</em>
          <svg
            viewBox="0 0 200 12"
            preserveAspectRatio="none"
            className="absolute -bottom-1 left-0 w-full h-2.5"
          >
            <path
              d="M2 8 Q50 2 100 6 Q150 10 198 4"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </h1>

      {/* Subtitle */}
      <p
        data-anim
        data-delay="0.2"
        className="text-lg font-normal leading-relaxed text-text-secondary max-w-140 mb-10"
      >
        A modern, accessible, themeable React UI design system.
        Dark-first. Copy & paste. No lock-in. Just beautiful components.
      </p>

      {/* CTA buttons */}
      <div
        data-anim
        data-delay="0.3"
        className="flex gap-3.5 mb-8 flex-wrap justify-center"
      >
        <button
          className="text-sm font-semibold px-7 py-3 rounded-xl text-accent-text active:scale-[0.96] transition-all"
          style={{
            background: 'linear-gradient(135deg, var(--accent), var(--accent-hover))',
            boxShadow: '0 4px 20px rgba(14,165,142,0.25)',
          }}
        >
          Browse components
        </button>
        <button className="text-sm font-semibold px-7 py-3 rounded-xl bg-transparent text-text-primary border border-border hover:border-border-hover hover:bg-bg-elevated active:scale-[0.96] transition-all">
          Documentation
        </button>
      </div>

      {/* CLI snippet */}
      <div
        data-anim
        data-delay="0.4"
        className="flex items-center gap-3 py-2.5 pl-4.5 pr-3 rounded-xl bg-code-bg border border-border font-mono text-[13px] text-text-secondary"
      >
        <span className="text-text-tertiary select-none">$</span>
        <code>{cliCommand}</code>
        <button
          onClick={handleCopy}
          aria-label="Copy CLI command"
          className={`px-2.5 py-1 rounded-md bg-bg-hover text-[11px] font-semibold font-mono border border-border transition-colors ${
            copied ? 'text-accent' : 'text-text-tertiary'
          }`}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </section>
  )
}
