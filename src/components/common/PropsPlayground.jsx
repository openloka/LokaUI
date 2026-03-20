import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'

function EnumControl({ prop, value, onUpdate }) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-medium text-text-secondary">{prop.name}</label>
      <div className="flex flex-wrap gap-1">
        {prop.options.map((option) => (
          <button
            key={option}
            onClick={() => onUpdate(prop.name, option)}
            className={`px-2.5 py-1 text-xs rounded-md transition-colors ${
              value === option
                ? 'bg-accent/20 text-accent border border-accent/30'
                : 'text-text-secondary border border-border hover:border-border-hover'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}

function BooleanControl({ prop, value, onUpdate }) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-medium text-text-secondary">{prop.name}</label>
      <div className="flex gap-1">
        {[true, false].map((option) => (
          <button
            key={String(option)}
            onClick={() => onUpdate(prop.name, option)}
            className={`px-2.5 py-1 text-xs rounded-md transition-colors ${
              value === option
                ? 'bg-accent/20 text-accent border border-accent/30'
                : 'text-text-secondary border border-border hover:border-border-hover'
            }`}
          >
            {String(option)}
          </button>
        ))}
      </div>
    </div>
  )
}

function StringControl({ prop, value, onUpdate }) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-medium text-text-secondary">{prop.name}</label>
      <input
        type="text"
        value={value ?? ''}
        onChange={(e) => onUpdate(prop.name, e.target.value)}
        className="w-full rounded-md border border-border bg-bg-elevated px-3 py-1.5 text-xs text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none"
        placeholder={prop.default ?? ''}
      />
    </div>
  )
}

export default function PropsPlayground({ propDefs = [], currentProps = {}, onUpdate }) {
  return (
    <div className="rounded-xl border border-border bg-bg-card overflow-hidden">
      <div className="flex items-center gap-2 border-b border-border px-4 py-2">
        <AdjustmentsHorizontalIcon className="h-4 w-4 text-accent" />
        <span className="font-pixel text-xs uppercase tracking-wider text-text-secondary">
          Props Playground
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {propDefs.map((prop) => {
          const value = currentProps[prop.name] ?? prop.default
          if (prop.type === 'enum') {
            return <EnumControl key={prop.name} prop={prop} value={value} onUpdate={onUpdate} />
          }
          if (prop.type === 'boolean') {
            return <BooleanControl key={prop.name} prop={prop} value={value} onUpdate={onUpdate} />
          }
          return <StringControl key={prop.name} prop={prop} value={value} onUpdate={onUpdate} />
        })}
      </div>
    </div>
  )
}
