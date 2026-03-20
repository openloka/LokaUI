import { useState, useEffect, useCallback } from 'react'
import {
  EyeIcon,
  CodeBracketIcon,
  ClipboardIcon,
  CheckIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline'
import CodeHighlighter from './CodeHighlighter'
import CodeOptions from './CodeOptions'

const PLATFORM_LABELS = {
  react: 'React',
  laravel: 'Laravel',
  'react-native': 'React Native',
}

function deriveVariantKey(platform, lang, style) {
  if (platform === 'laravel') return 'HTML-TW'
  if (platform === 'react-native') return style === 'tw' ? 'RN-TW' : 'RN-StyleSheet'
  return `${lang.toUpperCase()}-${style.toUpperCase()}`
}

function getLangForHighlighter(platform, lang) {
  if (platform === 'laravel') return 'php'
  if (platform === 'react-native') return 'jsx'
  return lang === 'ts' ? 'tsx' : 'jsx'
}

export default function CodeExample({
  variants = {},
  platforms = {},
  preview: PreviewComponent,
  componentProps = {},
  onResetProps,
}) {
  const platformKeys = Object.keys(platforms)
  const [platform, setPlatform] = useState(platformKeys[0] || 'react')
  const [lang, setLang] = useState('js')
  const [style, setStyle] = useState('tw')
  const [code, setCode] = useState('')
  const [copied, setCopied] = useState(false)

  const variantKey = deriveVariantKey(platform, lang, style)

  useEffect(() => {
    let cancelled = false
    const loader = variants[variantKey]
    if (!loader) {
      setCode(`// Variant "${variantKey}" not available`)
      return
    }
    loader()
      .then((mod) => {
        if (cancelled) return
        setCode(mod.default || mod)
      })
      .catch(() => {
        if (!cancelled) setCode(`// Failed to load variant "${variantKey}"`)
      })
    return () => { cancelled = true }
  }, [variantKey, variants])

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [code])

  return (
    <div className="border border-border rounded-xl overflow-hidden bg-bg-card">
      {/* Platform tabs */}
      {platformKeys.length > 1 && (
        <div className="flex border-b border-border">
          {platformKeys.map((key) => (
            <button
              key={key}
              onClick={() => setPlatform(key)}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                platform === key
                  ? 'text-accent border-b-2 border-accent'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {PLATFORM_LABELS[key] || key}
            </button>
          ))}
        </div>
      )}

      {/* Split view */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Preview panel */}
        <div className="border-b lg:border-b-0 lg:border-r border-border">
          <div className="flex items-center justify-between border-b border-border px-4 py-2">
            <div className="flex items-center gap-2">
              <EyeIcon className="h-4 w-4 text-accent" />
              <span className="font-pixel text-xs uppercase tracking-wider text-text-secondary">
                Preview
              </span>
            </div>
            {onResetProps && (
              <button
                onClick={onResetProps}
                className="text-text-secondary hover:text-accent transition-colors"
                aria-label="Reset props"
              >
                <ArrowPathIcon className="h-4 w-4" />
              </button>
            )}
          </div>
          <div className="p-6 flex items-center justify-center min-h-[200px]">
            {PreviewComponent && <PreviewComponent {...componentProps} />}
          </div>
        </div>

        {/* Code panel */}
        <div>
          <div className="flex items-center justify-between border-b border-border px-4 py-2">
            <div className="flex items-center gap-2">
              <CodeBracketIcon className="h-4 w-4 text-accent" />
              <span className="font-pixel text-xs uppercase tracking-wider text-text-secondary">
                Code
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CodeOptions
                platform={platform}
                lang={lang}
                style={style}
                onLangChange={setLang}
                onStyleChange={setStyle}
              />
              <button
                onClick={handleCopy}
                className="text-text-secondary hover:text-accent transition-colors"
                aria-label={copied ? 'Copied' : 'Copy code'}
              >
                {copied ? (
                  <CheckIcon className="h-4 w-4 text-green-400" />
                ) : (
                  <ClipboardIcon className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
          <div className="bg-code-bg max-h-[500px] overflow-auto">
            <CodeHighlighter code={code} lang={getLangForHighlighter(platform, lang)} />
          </div>
        </div>
      </div>
    </div>
  )
}
