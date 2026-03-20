export default function BreadcrumbPreview() {
  const items = [
    { label: 'Home', active: false },
    { label: 'Components', active: false },
    { label: 'Breadcrumb', active: true },
  ]

  return (
    <nav style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
      {items.map((item, i) => (
        <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          {i > 0 && (
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M6 4l4 4-4 4" stroke="var(--text-muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
          <span style={{
            fontSize: 11,
            fontWeight: item.active ? 600 : 400,
            color: item.active ? 'var(--text-primary)' : 'var(--text-tertiary)',
            cursor: item.active ? 'default' : 'pointer',
          }}>{item.label}</span>
        </div>
      ))}
    </nav>
  )
}
