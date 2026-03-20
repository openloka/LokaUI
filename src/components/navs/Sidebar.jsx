import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRightIcon, HeartIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid'
import { useActiveRoute } from '../../hooks/useActiveRoute'
import { CATEGORIES, NEW, UPDATED } from '../../constants/Categories'

export default function Sidebar() {
  const { isActive } = useActiveRoute()
  const [collapsed, setCollapsed] = useState({})
  const [favorites, setFavorites] = useState(() => {
    try { return JSON.parse(localStorage.getItem('lokaui-favorites') || '[]') }
    catch { return [] }
  })

  const toggleSection = (name) => {
    setCollapsed(prev => ({ ...prev, [name]: !prev[name] }))
  }

  const toggleFavorite = (slug) => {
    setFavorites(prev => {
      const next = prev.includes(slug) ? prev.filter(f => f !== slug) : [...prev, slug]
      localStorage.setItem('lokaui-favorites', JSON.stringify(next))
      return next
    })
  }

  return (
    <nav className="w-64 h-full overflow-y-auto py-4 pr-4 border-r border-border">
      {CATEGORIES.map((cat) => (
        <div key={cat.name} className="mb-2">
          <button
            onClick={() => toggleSection(cat.name)}
            className="flex items-center justify-between w-full px-3 py-3 text-xs font-pixel uppercase tracking-wider text-text-muted hover:text-text-secondary transition-colors"
          >
            {cat.name}
            <ChevronRightIcon className={`w-3 h-3 transition-transform ${collapsed[cat.name] ? '' : 'rotate-90'}`} />
          </button>
          {!collapsed[cat.name] && (
            <ul className="mt-1 space-y-0.5">
              {cat.subcategories.map((sub) => {
                const path = cat.isDoc ? `/docs/${sub.slug}` : `/${cat.slug}/${sub.slug}`
                const active = isActive(path)
                const isFav = favorites.includes(sub.slug)
                return (
                  <li key={sub.slug}>
                    <Link to={path} className={`group flex items-center justify-between px-3 py-2.5 rounded-md text-sm transition-colors ${active ? 'bg-accent-muted text-accent border-l-2 border-accent' : 'text-text-secondary hover:text-text-primary hover:bg-bg-hover'}`}>
                      <span className="flex items-center gap-2">
                        {sub.name}
                        {NEW.includes(sub.name) && <span className="text-[10px] px-1.5 py-0.5 rounded bg-status-green-muted text-status-green font-mono">NEW</span>}
                        {UPDATED.includes(sub.name) && <span className="text-[10px] px-1.5 py-0.5 rounded bg-status-blue-muted text-status-blue font-mono">UPD</span>}
                      </span>
                      {!cat.isDoc && (
                        <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleFavorite(sub.slug) }} className="p-1.5 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                          {isFav ? <HeartSolidIcon className="w-3.5 h-3.5 text-red-400" /> : <HeartIcon className="w-3.5 h-3.5 text-text-muted" />}
                        </button>
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      ))}
    </nav>
  )
}
