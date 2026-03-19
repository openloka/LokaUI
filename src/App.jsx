import { useEffect } from 'react'
import { ThemeProvider } from './theme'
import Header from './components/Header'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Marquee from './components/Marquee'
import Features from './components/Features'
import ComponentBrowser from './components/ComponentBrowser'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'

function ScrollAnimator({ children }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
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

    const elements = document.querySelectorAll('[data-anim]')
    elements.forEach(el => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(28px)'
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return children
}

export default function App() {
  return (
    <ThemeProvider>
      <ScrollAnimator>
        <Header />
        <Hero />
        <Showcase />
        <Marquee />
        <Features />
        <ComponentBrowser />
        <CtaSection />
        <Footer />
      </ScrollAnimator>
    </ThemeProvider>
  )
}
