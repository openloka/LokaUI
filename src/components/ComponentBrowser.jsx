import { useState } from 'react'
import ButtonPreview from '../previews/ButtonPreview'
import InputPreview from '../previews/InputPreview'
import BadgePreview from '../previews/BadgePreview'
import TogglePreview from '../previews/TogglePreview'
import TablePreview from '../previews/TablePreview'
import CardPreview from '../previews/CardPreview'
import AvatarPreview from '../previews/AvatarPreview'
import ProgressPreview from '../previews/ProgressPreview'
import TabsPreview from '../previews/TabsPreview'
import CheckboxPreview from '../previews/CheckboxPreview'
import ToastPreview from '../previews/ToastPreview'
import SpinnerPreview from '../previews/SpinnerPreview'

const components = [
  { name: 'Button', category: 'Foundations', status: 'Stable', Preview: ButtonPreview },
  { name: 'Input', category: 'Foundations', status: 'Stable', Preview: InputPreview },
  { name: 'Badge', category: 'Foundations', status: 'Stable', Preview: BadgePreview },
  { name: 'Toggle', category: 'Foundations', status: 'Stable', Preview: TogglePreview },
  { name: 'Dialog', category: 'Overlays', status: 'Stable', Preview: null },
  { name: 'Drawer', category: 'Overlays', status: 'New', Preview: null },
  { name: 'Tooltip', category: 'Overlays', status: 'Stable', Preview: null },
  { name: 'Popover', category: 'Overlays', status: 'New', Preview: null },
  { name: 'Table', category: 'Data Display', status: 'Stable', Preview: TablePreview },
  { name: 'Card', category: 'Data Display', status: 'Stable', Preview: CardPreview },
  { name: 'Avatar', category: 'Data Display', status: 'Stable', Preview: AvatarPreview },
  { name: 'Progress', category: 'Data Display', status: 'Beta', Preview: ProgressPreview },
  { name: 'Tabs', category: 'Navigation', status: 'Stable', Preview: TabsPreview },
  { name: 'Breadcrumb', category: 'Navigation', status: 'Stable', Preview: null },
  { name: 'Sidebar', category: 'Navigation', status: 'New', Preview: null },
  { name: 'Pagination', category: 'Navigation', status: 'Beta', Preview: null },
  { name: 'Select', category: 'Forms', status: 'Stable', Preview: null },
  { name: 'Checkbox', category: 'Forms', status: 'Stable', Preview: CheckboxPreview },
  { name: 'Radio', category: 'Forms', status: 'Stable', Preview: null },
  { name: 'Textarea', category: 'Forms', status: 'Stable', Preview: null },
  { name: 'Toast', category: 'Feedback', status: 'New', Preview: ToastPreview },
  { name: 'Alert', category: 'Feedback', status: 'Stable', Preview: null },
  { name: 'Skeleton', category: 'Feedback', status: 'Stable', Preview: null },
  { name: 'Spinner', category: 'Feedback', status: 'Stable', Preview: SpinnerPreview },
]

const categories = ['All', 'Foundations', 'Overlays', 'Data Display', 'Navigation', 'Forms', 'Feedback']

const statusClasses = {
  Stable: 'bg-status-green-muted text-status-green',
  New: 'bg-status-amber-muted text-status-amber',
  Beta: 'bg-status-purple-muted text-status-purple',
}

function Fallback({ name }) {
  return (
    <div className="flex items-center justify-center h-full min-h-20 border-[1.5px] border-dashed border-border rounded-lg font-mono text-xs text-text-muted">
      {'<'}{name}{' />'}
    </div>
  )
}

function ComponentCard({ comp }) {
  const cls = statusClasses[comp.status]

  return (
    <div className="rounded-[14px] border border-border bg-bg-card overflow-hidden transition-colors duration-300 hover:border-border-accent hover:bg-bg-elevated">
      {/* Preview area */}
      <div className="p-5 min-h-27.5 flex items-center">
        <div className="w-full">
          {comp.Preview ? <comp.Preview /> : <Fallback name={comp.name} />}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-2.5 border-t border-border">
        <span className="text-xs font-semibold">{comp.name}</span>
        <div className="flex items-center gap-2">
          <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded uppercase tracking-wide ${cls}`}>
            {comp.status}
          </span>
          <span className="text-[10px] text-text-muted font-mono">{comp.category}</span>
        </div>
      </div>
    </div>
  )
}

export default function ComponentBrowser() {
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All'
    ? components
    : components.filter(c => c.category === filter)

  return (
    <section
      id="components"
      className="max-w-300 mx-auto"
      style={{ padding: '0 clamp(16px, 4vw, 48px) 100px' }}
    >
      <div data-anim className="mb-10">
        <h2 className="font-pixel text-4xl font-extrabold tracking-tight text-center mb-2">
          {filtered.length} Components
        </h2>
        <p className="text-center text-sm text-text-secondary mb-8">
          Browse, preview, and copy. Every component is yours to own.
        </p>

        {/* Filter pills */}
        <div className="flex justify-center gap-1.5 flex-wrap">
          {categories.map(cat => {
            const isActive = filter === cat
            return (
              <button
                key={cat}
                onClick={() => setFilter(isActive && cat !== 'All' ? 'All' : cat)}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold border cursor-pointer transition-all ${
                  isActive
                    ? 'bg-accent-muted text-accent border-border-accent'
                    : 'bg-transparent text-text-tertiary border-border hover:text-text-secondary'
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>
      </div>

      <div className="grid gap-4.5" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
        {filtered.map(comp => (
          <ComponentCard key={comp.name} comp={comp} />
        ))}
      </div>
    </section>
  )
}
