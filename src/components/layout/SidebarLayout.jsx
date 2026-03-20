import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import * as Dialog from '@radix-ui/react-dialog'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Sidebar from '../navs/Sidebar'
import SearchDialog from '../common/SearchDialog'

export default function SidebarLayout() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <SearchDialog />
      <div className="flex min-h-screen pt-16 bg-bg text-text-primary">
        {/* Desktop sidebar */}
        <aside className="hidden md:block fixed top-16 left-0 bottom-0 w-64 bg-bg overflow-y-auto">
          <Sidebar />
        </aside>

        {/* Mobile sidebar FAB */}
        <button
          onClick={() => setMobileOpen(true)}
          className="fixed bottom-4 right-4 md:hidden z-40 p-3 bg-accent text-white rounded-full shadow-lg"
        >
          <Bars3Icon className="w-6 h-6" />
        </button>

        {/* Mobile sidebar drawer */}
        <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40 md:hidden" />
            <Dialog.Content className="fixed top-0 left-0 bottom-0 w-72 bg-bg z-50 md:hidden overflow-y-auto">
              <div className="flex justify-end p-4">
                <Dialog.Close className="p-1 text-text-muted hover:text-text-primary">
                  <XMarkIcon className="w-5 h-5" />
                </Dialog.Close>
              </div>
              <Sidebar />
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>

        <main className="flex-1 md:ml-64 px-4 sm:px-6 py-8 max-w-5xl">
          <Outlet />
        </main>
      </div>
    </>
  )
}
