import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import CodeExample from '../components/code/CodeExample'
import CliInstallation from '../components/code/CliInstallation'
import PropsPlayground from '../components/common/PropsPlayground'
import PropTable from '../components/common/PropTable'
import { useComponentProps } from '../hooks/useComponentProps'
import { COMPONENT_MAP, PREVIEW_MAP } from '../constants/Information'

export default function CategoryPage() {
  const { category, component, slug } = useParams()
  const componentSlug = component || slug || category

  const [componentData, setComponentData] = useState(null)
  const [PreviewComponent, setPreviewComponent] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const loader = COMPONENT_MAP[componentSlug]
    const previewLoader = PREVIEW_MAP[componentSlug]
    if (!loader) { setLoading(false); return }
    Promise.all([
      loader(),
      previewLoader ? previewLoader() : Promise.resolve(null),
    ]).then(([mod, previewMod]) => {
      setComponentData(mod)
      if (previewMod) setPreviewComponent(() => previewMod.default)
      setLoading(false)
    })
  }, [componentSlug])

  if (loading) return <div className="animate-pulse h-96 bg-bg-elevated rounded-xl" />
  if (!componentData) return (
    <div className="text-text-primary">
      <h1 className="text-2xl font-pixel mb-4 capitalize">{componentSlug}</h1>
      <p className="text-text-secondary">Documentation coming soon.</p>
    </div>
  )

  return <ComponentDocPage info={componentData.info} variants={componentData.variants} platforms={componentData.platforms} PreviewComponent={PreviewComponent} category={category} />
}

function ComponentDocPage({ info, variants, platforms, PreviewComponent, category }) {
  const defaultProps = {}
  info.props.forEach((p) => { defaultProps[p.name] = p.default })
  const { props: currentProps, updateProp, resetProps } = useComponentProps(defaultProps)

  const statusColors = {
    stable: 'text-status-green border-status-green/30 bg-status-green-muted',
    beta: 'text-status-purple border-status-purple/30 bg-status-purple-muted',
    new: 'text-status-amber border-status-amber/30 bg-status-amber-muted',
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-1.5 text-sm">
          <span className="text-text-muted capitalize">{category}</span>
          <ChevronRightIcon className="w-3.5 h-3.5 text-text-muted" />
          <span className="font-pixel text-text-primary">{info.name}</span>
          <span className={`ml-2 text-[10px] px-1.5 py-0.5 rounded border ${statusColors[info.status]}`}>{info.status}</span>
        </div>
      </div>
      <p className="text-text-secondary text-sm mb-4">{info.description}</p>
      <CliInstallation componentName={info.name.toLowerCase()} />
      <div className="mt-4">
        <CodeExample usage={info.usage || {}} platforms={platforms} preview={PreviewComponent} componentProps={currentProps} onResetProps={resetProps} />
      </div>
      <div className="mt-4 border border-border rounded-xl overflow-hidden bg-bg-card">
        <PropsPlayground propDefs={info.props} currentProps={currentProps} onUpdate={updateProp} />
        <PropTable propDefs={info.props} />
      </div>
    </div>
  )
}
