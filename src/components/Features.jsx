import {
  ShieldCheckIcon,
  MoonIcon,
  ClipboardDocumentIcon,
  CubeTransparentIcon,
  SwatchIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    Icon: ShieldCheckIcon,
    title: 'Accessible by default',
    desc: 'Built on React Aria primitives. WCAG 2.1 AA compliant with keyboard navigation and screen reader support included.',
  },
  {
    Icon: MoonIcon,
    title: 'Dark-first design',
    desc: 'Every component designed in dark mode first, then adapted for light. Both themes feel intentional and polished.',
  },
  {
    Icon: ClipboardDocumentIcon,
    title: 'Copy & paste ready',
    desc: 'No npm install lock-in. Browse, copy source code, and own your components. Zero dependency lock-in.',
  },
  {
    Icon: CubeTransparentIcon,
    title: 'Fully composable',
    desc: 'Mix and match components freely. Predictable APIs that compose naturally for complex interfaces.',
  },
  {
    Icon: SwatchIcon,
    title: 'Tailwind native',
    desc: 'Styled with Tailwind CSS utilities. Integrates seamlessly into your existing Tailwind workflow.',
  },
  {
    Icon: SparklesIcon,
    title: 'Motion built in',
    desc: 'Smooth micro-interactions and scroll-triggered reveals. CSS transitions with Framer Motion for complex orchestration.',
  },
]

export default function Features() {
  return (
    <section
      className="max-w-275 mx-auto"
      style={{ padding: '0 clamp(16px, 4vw, 48px) 100px' }}
    >
      <div data-anim className="text-center mb-14">
        <h2 className="font-pixel text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
          Designed for <em className="text-accent italic">developers</em>
        </h2>
      </div>

      <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))' }}>
        {features.map((f, i) => (
          <div
            key={f.title}
            data-anim
            data-delay={String(i * 0.08)}
            className="p-7 rounded-[14px] bg-bg-card border border-border cursor-default transition-colors duration-300 hover:border-border-accent hover:bg-bg-elevated"
          >
            <f.Icon className="w-6 h-6 text-accent mb-3.5" />
            <h3 className="text-base font-bold mb-2">{f.title}</h3>
            <p className="text-[13px] leading-relaxed text-text-secondary">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
