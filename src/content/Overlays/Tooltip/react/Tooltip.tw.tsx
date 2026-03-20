interface TooltipProps {
  children?: React.ReactNode
}

export default function Tooltip(props: TooltipProps) {
  return (
    <div className="p-4 rounded-lg border border-border">
      Tooltip component
    </div>
  )
}
