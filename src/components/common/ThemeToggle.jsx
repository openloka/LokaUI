import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { useTheme } from '../../theme'

export default function ThemeToggle() {
  const { mode, toggle } = useTheme()

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-hover transition-colors"
      aria-label={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
    >
      {mode === 'dark' ? (
        <SunIcon className="w-5 h-5" />
      ) : (
        <MoonIcon className="w-5 h-5" />
      )}
    </button>
  )
}
