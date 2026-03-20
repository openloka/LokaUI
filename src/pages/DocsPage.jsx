import { useParams } from 'react-router-dom'
import IntroductionPage from './docs/IntroductionPage'
import InstallationPage from './docs/InstallationPage'
import ThemingPage from './docs/ThemingPage'
import VariantsGuidePage from './docs/VariantsGuidePage'

const DOCS_PAGES = {
  'getting-started': IntroductionPage,
  'installation': InstallationPage,
  'theming': ThemingPage,
  'variants': VariantsGuidePage,
}

export default function DocsPage() {
  const { slug } = useParams()
  const Page = DOCS_PAGES[slug]

  if (!Page) {
    return (
      <div className="text-text-primary">
        <h1 className="text-2xl font-pixel mb-4">Page not found</h1>
        <p className="text-text-secondary">The page "/docs/{slug}" does not exist.</p>
      </div>
    )
  }

  return <Page />
}
