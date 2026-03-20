const keywords = [
  'Accessible', 'Dark-first', 'Copy & Paste', 'React Aria', 'Tailwind CSS',
  'TypeScript', 'Composable', 'Responsive', 'Animated', 'Themeable',
  'SSR Ready', 'Open Source',
]

export default function Marquee() {
  return (
    <section className="border-t border-b border-border py-4.5 overflow-hidden mb-20">
      <div className="flex animate-marquee w-max">
        {[...keywords, ...keywords].map((kw, i) => (
          <span
            key={i}
            className="flex items-center gap-2.5 px-6 font-mono text-xs font-semibold uppercase tracking-wide text-text-muted whitespace-nowrap"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
            {kw}
          </span>
        ))}
      </div>
    </section>
  )
}
