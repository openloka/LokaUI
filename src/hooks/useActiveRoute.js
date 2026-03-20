import { useLocation } from 'react-router-dom'

export function useActiveRoute() {
  const { pathname } = useLocation()
  const segments = pathname.split('/').filter(Boolean)

  return {
    pathname,
    category: segments[0] || null,
    component: segments[1] || null,
    isActive: (path) => pathname === path,
    isInCategory: (slug) => segments[0] === slug,
  }
}
