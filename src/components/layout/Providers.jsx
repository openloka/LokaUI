import { BrowserRouter } from 'react-router-dom'
import { NuqsAdapter } from 'nuqs/adapters/react-router/v6'
import { ThemeProvider } from '../../theme'

export default function Providers({ children }) {
  return (
    <BrowserRouter>
      <NuqsAdapter>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </NuqsAdapter>
    </BrowserRouter>
  )
}
