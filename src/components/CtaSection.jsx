export default function CtaSection() {
  return (
    <section
      className="max-w-225 mx-auto"
      style={{ padding: '0 clamp(16px, 4vw, 48px) 100px' }}
    >
      <div
        data-anim
        className="relative rounded-2.5xl bg-accent-muted border border-border-accent text-center overflow-hidden"
        style={{ padding: 'clamp(40px, 6vw, 64px)' }}
      >
        {/* Decorative glow */}
        <div
          className="absolute -top-[30%] -right-[10%] w-75 h-75 rounded-full pointer-events-none animate-glow"
          style={{ background: 'radial-gradient(circle, var(--glow) 0%, transparent 70%)' }}
        />

        <h2
          className="font-pixel font-extrabold tracking-tight mb-3.5 relative"
          style={{ fontSize: 'clamp(28px, 4vw, 40px)', letterSpacing: '-1px' }}
        >
          Ready to build something{' '}
          <em className="text-accent italic">beautiful</em>?
        </h2>
        <p className="text-[15px] text-text-secondary max-w-120 mx-auto mb-8 leading-relaxed relative">
          Start with our CLI, browse the docs, or jump straight into the component library. It's free and open source.
        </p>

        <div className="flex gap-3 justify-center flex-wrap relative">
          <button className="px-7 py-3 rounded-xl bg-accent text-accent-text text-sm font-semibold hover:bg-accent-hover active:scale-[0.96] transition-all">
            Get started free
          </button>
          <button className="flex items-center gap-2 px-7 py-3 rounded-xl bg-transparent border border-border text-text-primary text-sm font-semibold hover:border-border-hover hover:bg-bg-elevated active:scale-[0.96] transition-all">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </button>
        </div>
      </div>
    </section>
  )
}
