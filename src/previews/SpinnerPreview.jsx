function Spinner({ size = 20, strokeWidth = 2.5 }) {
  const r = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * r

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{ animation: 'loka-spin 1s linear infinite' }}
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="var(--border)"
        strokeWidth={strokeWidth}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="var(--accent)"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={circumference * 0.7}
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function SpinnerPreview() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <Spinner size={16} strokeWidth={2} />
      <Spinner size={24} strokeWidth={2.5} />
      <Spinner size={32} strokeWidth={3} />
    </div>
  )
}
