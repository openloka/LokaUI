import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Providers from './components/layout/Providers'

const LandingPage = lazy(() => import('./pages/LandingPage'))
const SidebarLayout = lazy(() => import('./components/layout/SidebarLayout'))
const CategoryPage = lazy(() => import('./pages/CategoryPage'))
const FavoritesPage = lazy(() => import('./pages/FavoritesPage'))

function ScrollAnimator({ children }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target
            const delay = el.dataset.delay || '0'
            el.style.transition = `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.12 }
    )
    document.querySelectorAll('[data-anim]').forEach((el) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(28px)'
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])
  return children
}

function AppRoutes() {
  return (
    <ScrollAnimator>
      <Suspense fallback={<div className="min-h-screen bg-bg" />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route element={<SidebarLayout />}>
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/docs/:slug" element={<CategoryPage />} />
            <Route path="/:category/:component" element={<CategoryPage />} />
          </Route>
        </Routes>
      </Suspense>
    </ScrollAnimator>
  )
}

export default function App() {
  return (
    <Providers>
      <AppRoutes />
    </Providers>
  )
}
