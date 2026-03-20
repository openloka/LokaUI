interface SkeletonProps {
  children?: React.ReactNode
}

export default function Skeleton(props: SkeletonProps) {
  return (
    <div className="p-4 rounded-lg border border-border">
      Skeleton component
    </div>
  )
}
