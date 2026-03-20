import Header from '../components/Header'
import Hero from '../components/Hero'
import Showcase from '../components/Showcase'
import Marquee from '../components/Marquee'
import Features from '../components/Features'
import ComponentBrowser from '../components/ComponentBrowser'
import CtaSection from '../components/CtaSection'
import Footer from '../components/Footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-bg text-text-primary">
      <Header />
      <Hero />
      <Showcase />
      <Marquee />
      <Features />
      <ComponentBrowser />
      <CtaSection />
      <Footer />
    </div>
  )
}
