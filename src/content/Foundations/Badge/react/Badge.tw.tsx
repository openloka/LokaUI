interface BadgeProps {
  children?: React.ReactNode
}

export default function Badge(props: BadgeProps) {
  return (
    <div className="p-4 rounded-lg border border-border">
      Badge component
    </div>
  )
}
