import { useParams } from 'react-router-dom'

export default function CategoryPage() {
  const { category, component } = useParams()
  return (
    <div className="text-text-primary">
      <h1 className="text-2xl font-pixel mb-4 capitalize">{component || category}</h1>
      <p className="text-text-secondary">Component documentation coming soon.</p>
    </div>
  )
}
