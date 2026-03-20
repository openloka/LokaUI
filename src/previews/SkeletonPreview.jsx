export default function SkeletonPreview() {
  const shimmer = {
    background: 'linear-gradient(90deg, var(--bg-hover) 25%, var(--bg-elevated) 50%, var(--bg-hover) 75%)',
    backgroundSize: '200% 100%',
    animation: 'loka-shimmer 1.5s ease-in-out infinite',
    borderRadius: 6,
  }

  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
      <div style={{ ...shimmer, width: 40, height: 40, borderRadius: '50%', flexShrink: 0 }} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ ...shimmer, width: '60%', height: 12 }} />
        <div style={{ ...shimmer, width: '100%', height: 10 }} />
        <div style={{ ...shimmer, width: '80%', height: 10 }} />
      </div>
    </div>
  )
}
