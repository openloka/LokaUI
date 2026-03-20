interface SidebarProps {
  children?: React.ReactNode
}

export default function Sidebar(props: SidebarProps) {
  return (
    <div className="p-4 rounded-lg border border-border">
      Sidebar component
    </div>
  )
}
