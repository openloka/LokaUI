import { Outlet } from 'react-router-dom'
import Sidebar from '../navs/Sidebar'
import SearchDialog from '../common/SearchDialog'

export default function SidebarLayout() {
  return (
    <>
      <SearchDialog />
      <div className="flex min-h-screen pt-16">
      <aside className="hidden md:block fixed top-16 left-0 bottom-0 w-64 bg-bg">
        <Sidebar />
      </aside>
      <main className="flex-1 md:ml-64 px-6 py-8 max-w-5xl">
        <Outlet />
      </main>
    </div>
    </>
  )
}
