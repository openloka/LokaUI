import { useState } from 'react'

export default function PaginationPreview() {
  const [page, setPage] = useState(3)
  const total = 8

  const pages = []
  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= page - 1 && i <= page + 1)) {
      pages.push(i)
    } else if (pages[pages.length - 1] !== '...') {
      pages.push('...')
    }
  }

  const btnStyle = (active) => ({
    width: 28,
    height: 28,
    borderRadius: 6,
    fontSize: 11,
    fontWeight: active ? 600 : 400,
    background: active ? 'var(--accent)' : 'transparent',
    color: active ? 'var(--accent-text)' : 'var(--text-secondary)',
    border: active ? 'none' : '1px solid var(--border)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  })

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
      <button
        onClick={() => setPage(Math.max(1, page - 1))}
        disabled={page === 1}
        style={{ ...btnStyle(false), opacity: page === 1 ? 0.4 : 1 }}
      >
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
          <path d="M10 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {pages.map((p, i) => (
        <button
          key={i}
          onClick={() => typeof p === 'number' && setPage(p)}
          style={{
            ...btnStyle(p === page),
            cursor: typeof p === 'number' ? 'pointer' : 'default',
            border: typeof p === 'number' ? btnStyle(p === page).border : 'none',
          }}
        >{p}</button>
      ))}
      <button
        onClick={() => setPage(Math.min(total, page + 1))}
        disabled={page === total}
        style={{ ...btnStyle(false), opacity: page === total ? 0.4 : 1 }}
      >
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
          <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  )
}
