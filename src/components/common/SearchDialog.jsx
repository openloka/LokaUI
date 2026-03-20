import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Dialog from '@radix-ui/react-dialog'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { searchComponents } from '../../utils/fuzzy'
import { CATEGORIES } from '../../constants/Categories'

export default function SearchDialog() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const results = searchComponents(query, CATEGORIES)

  useEffect(() => {
    function handleKeyDown(e) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  function handleSelect(slug) {
    navigate(slug)
    setOpen(false)
    setQuery('')
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
        <Dialog.Content
          className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-lg bg-bg-card border border-border rounded-xl shadow-lg z-50"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <Dialog.Title className="sr-only">Search components</Dialog.Title>
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
            <MagnifyingGlassIcon className="w-5 h-5 text-text-muted shrink-0" />
            <input
              type="text"
              placeholder="Search components..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent text-text-primary text-sm outline-none placeholder:text-text-muted"
              autoFocus
            />
            <kbd className="hidden sm:inline-flex items-center gap-0.5 rounded border border-border px-1.5 py-0.5 text-xs text-text-muted">
              ESC
            </kbd>
          </div>

          <div className="max-h-64 overflow-y-auto">
            {query.trim() && results.length === 0 && (
              <p className="px-4 py-6 text-sm text-text-muted text-center">
                No results found.
              </p>
            )}
            {results.map((result) => (
              <button
                key={result.slug}
                onClick={() => handleSelect(result.slug)}
                className="w-full flex items-center justify-between px-4 py-2.5 text-left hover:bg-bg-hover transition-colors"
              >
                <span className="text-sm text-text-primary">{result.name}</span>
                <span className="text-xs text-text-muted">{result.category}</span>
              </button>
            ))}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
