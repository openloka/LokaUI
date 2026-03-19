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

const statusStyles = {
  Stable: { bg: 'var(--green-muted)', color: 'var(--green)' },
  New: { bg: 'var(--amber-muted)', color: 'var(--amber)' },
  Beta: { bg: 'var(--purple-muted)', color: 'var(--purple)' },
}

function Fallback({ name }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      minHeight: 80,
      border: '1.5px dashed var(--border)',
      borderRadius: 8,
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: 12,
      color: 'var(--text-muted)',
    }}>
      {'<'}{name}{' />'}
    </div>
  )
}

function ComponentCard({ comp }) {
  const [hovered, setHovered] = useState(false)
  const st = statusStyles[comp.status]

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 14,
        border: `1px solid ${hovered ? 'var(--border-accent)' : 'var(--border)'}`,
        background: hovered ? 'var(--bg-elevated)' : 'var(--bg-card)',
        overflow: 'hidden',
        transition: 'border-color 0.3s ease, background 0.3s ease',
      }}
    >
      {/* Preview area */}
      <div style={{
        padding: 20,
        minHeight: 110,
        display: 'flex',
        alignItems: 'center',
      }}>
        <div style={{ width: '100%' }}>
          {comp.Preview ? <comp.Preview /> : <Fallback name={comp.name} />}
        </div>
      </div>

      {/* Footer */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 16px',
        borderTop: '1px solid var(--border)',
      }}>
        <span style={{ fontSize: 12, fontWeight: 600 }}>{comp.name}</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{
            fontSize: 10,
            fontWeight: 600,
            padding: '2px 7px',
            borderRadius: 4,
            background: st.bg,
            color: st.color,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}>{comp.status}</span>
          <span style={{
            fontSize: 10,
            color: 'var(--text-muted)',
            fontFamily: "'IBM Plex Mono', monospace",
          }}>{comp.category}</span>
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
    <section id="components" style={{
      padding: '0 clamp(16px, 4vw, 48px) 100px',
      maxWidth: 1200,
      margin: '0 auto',
    }}>
      <div data-anim style={{ marginBottom: 40 }}>
        <h2 style={{
          fontFamily: "'Fraunces', serif",
          fontSize: 36,
          fontWeight: 800,
          letterSpacing: '-1px',
          textAlign: 'center',
          marginBottom: 8,
        }}>
          {filtered.length} Components
        </h2>
        <p style={{
          textAlign: 'center',
          fontSize: 14,
          color: 'var(--text-secondary)',
          marginBottom: 32,
        }}>Browse, preview, and copy. Every component is yours to own.</p>

        {/* Filter pills */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 6,
          flexWrap: 'wrap',
        }}>
          {categories.map(cat => {
            const isActive = filter === cat
            return (
              <button
                key={cat}
                onClick={() => setFilter(isActive && cat !== 'All' ? 'All' : cat)}
                style={{
                  padding: '6px 16px',
                  borderRadius: 8,
                  fontSize: 12,
                  fontWeight: 600,
                  background: isActive ? 'var(--accent-muted)' : 'transparent',
                  color: isActive ? 'var(--accent)' : 'var(--text-tertiary)',
                  border: `1px solid ${isActive ? 'var(--border-accent)' : 'var(--border)'}`,
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                }}
              >
                {cat}
              </button>
            )
          })}
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: 18,
      }}>
        {filtered.map(comp => (
          <ComponentCard key={comp.name} comp={comp} />
        ))}
      </div>
    </section>
  )
}
