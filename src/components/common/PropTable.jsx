import { Bars3BottomLeftIcon } from '@heroicons/react/24/outline'

export default function PropTable({ propDefs = [] }) {
  return (
    <div className="rounded-xl border border-border bg-bg-card overflow-hidden">
      <div className="flex items-center gap-2 border-b border-border px-4 py-2">
        <Bars3BottomLeftIcon className="h-4 w-4 text-accent" />
        <span className="font-pixel text-xs uppercase tracking-wider text-text-secondary">
          API Reference
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-left">
              <th className="px-4 py-2 font-medium text-text-secondary">Prop</th>
              <th className="px-4 py-2 font-medium text-text-secondary">Type</th>
              <th className="px-4 py-2 font-medium text-text-secondary">Default</th>
              <th className="px-4 py-2 font-medium text-text-secondary">Description</th>
            </tr>
          </thead>
          <tbody>
            {propDefs.map((prop) => (
              <tr key={prop.name} className="border-b border-border last:border-b-0">
                <td className="px-4 py-2 font-mono text-code-red">{prop.name}</td>
                <td className="px-4 py-2 font-mono text-code-amber">
                  {prop.type === 'enum' ? prop.options?.join(' | ') : prop.type}
                </td>
                <td className="px-4 py-2 font-mono text-code-green">
                  {prop.default != null ? String(prop.default) : '—'}
                </td>
                <td className="px-4 py-2 text-text-muted">{prop.description ?? ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
