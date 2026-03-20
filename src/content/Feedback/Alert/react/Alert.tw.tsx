interface AlertProps {
  children?: React.ReactNode
}

export default function Alert(props: AlertProps) {
  return (
    <div className="p-4 rounded-lg border border-border">
      Alert component
    </div>
  )
}
