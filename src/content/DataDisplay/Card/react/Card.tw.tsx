interface CardProps {
  children?: React.ReactNode
}

export default function Card(props: CardProps) {
  return (
    <div className="p-4 rounded-lg border border-border">
      Card component
    </div>
  )
}
