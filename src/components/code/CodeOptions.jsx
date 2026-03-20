export default function CodeOptions({ platform, lang, style, onLangChange, onStyleChange }) {
  if (platform === 'laravel') {
    return (
      <div className="flex items-center gap-2">
        <span className="bg-bg-elevated rounded-md px-3 py-1 text-xs font-medium text-text-secondary">
          HTML-TW
        </span>
      </div>
    )
  }

  if (platform === 'react-native') {
    return (
      <div className="flex items-center gap-1 bg-bg-elevated rounded-md p-0.5">
        <button
          onClick={() => onStyleChange('tw')}
          className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
            style === 'tw'
              ? 'bg-accent/20 text-accent'
              : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          TW
        </button>
        <button
          onClick={() => onStyleChange('stylesheet')}
          className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
            style === 'stylesheet'
              ? 'bg-accent/20 text-accent'
              : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          StyleSheet
        </button>
      </div>
    )
  }

  // React platform
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1 bg-bg-elevated rounded-md p-0.5">
        <button
          onClick={() => onLangChange('js')}
          className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
            lang === 'js'
              ? 'bg-accent/20 text-accent'
              : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          JS
        </button>
        <button
          onClick={() => onLangChange('ts')}
          className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
            lang === 'ts'
              ? 'bg-accent/20 text-accent'
              : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          TS
        </button>
      </div>
      <div className="flex items-center gap-1 bg-bg-elevated rounded-md p-0.5">
        <button
          onClick={() => onStyleChange('css')}
          className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
            style === 'css'
              ? 'bg-accent/20 text-accent'
              : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          CSS
        </button>
        <button
          onClick={() => onStyleChange('tw')}
          className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
            style === 'tw'
              ? 'bg-accent/20 text-accent'
              : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          TW
        </button>
      </div>
    </div>
  )
}
