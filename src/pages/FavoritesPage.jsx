import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HeartIcon } from '@heroicons/react/24/solid'
import { CATEGORIES } from '../constants/Categories'

export default function FavoritesPage() {
  const [favorites] = useState(() => {
    try { return JSON.parse(localStorage.getItem('lokaui-favorites') || '[]') }
    catch { return [] }
  })

  const components = CATEGORIES.flatMap((cat) =>
    cat.isDoc ? [] : cat.subcategories
      .filter((sub) => favorites.includes(sub.slug))
      .map((sub) => ({ ...sub, category: cat.name, categorySlug: cat.slug }))
  )

  return (
    <div>
      <h1 className="text-2xl font-pixel text-text-primary mb-2">Favorites</h1>
      <p className="text-sm text-text-secondary mb-6">Components you've saved for quick access.</p>
      {components.length === 0 ? (
        <div className="text-center py-16 text-text-muted">
          <HeartIcon className="w-8 h-8 mx-auto mb-3 opacity-30" />
          <p className="text-sm">No favorites yet. Click the heart icon in the sidebar to save components.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {components.map((comp) => (
            <Link key={comp.slug} to={`/${comp.categorySlug}/${comp.slug}`}
              className="p-4 bg-bg-card border border-border rounded-xl hover:border-border-hover transition-colors">
              <h3 className="text-sm font-medium text-text-primary">{comp.name}</h3>
              <p className="text-xs text-text-muted mt-1">{comp.category}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
