interface ToastProps {
  children?: React.ReactNode
}

export default function Toast(props: ToastProps) {
  return (
    <div className="p-4 rounded-lg border border-border">
      Toast component
    </div>
  )
}
