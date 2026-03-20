interface DrawerProps {
  children?: React.ReactNode
}

export default function Drawer(props: DrawerProps) {
  return (
    <div className="p-4 rounded-lg border border-border">
      Drawer component
    </div>
  )
}
