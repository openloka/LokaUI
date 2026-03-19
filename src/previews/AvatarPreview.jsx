export default function AvatarPreview() {
  const colors = ['#0ea58e', '#3b82f6', '#a855f7', '#ef4444', '#f59e0b']
  const initials = ['AJ', 'BS', 'CW', 'DK', 'EL']

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {initials.map((init, i) => (
        <div key={init} style={{
          width: 32,
          height: 32,
          borderRadius: '50%',
          background: colors[i],
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 10,
          fontWeight: 700,
          color: '#fff',
          border: '2px solid var(--bg)',
          marginLeft: i > 0 ? -8 : 0,
          position: 'relative',
          zIndex: initials.length - i,
        }}>{init}</div>
      ))}
      <div style={{
        width: 32,
        height: 32,
        borderRadius: '50%',
        background: 'var(--bg-hover)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 9,
        fontWeight: 600,
        color: 'var(--text-tertiary)',
        border: '2px solid var(--bg)',
        marginLeft: -8,
      }}>+12</div>
    </div>
  )
}
