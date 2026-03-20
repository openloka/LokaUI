import { useState, useEffect } from 'react'
import { createHighlighter } from 'shiki'
import { useTheme } from '../../theme'

let highlighterPromise = null

function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ['one-dark-pro', 'github-light'],
      langs: ['jsx', 'tsx', 'css', 'php', 'bash', 'javascript', 'json'],
    })
  }
  return highlighterPromise
}

export default function CodeHighlighter({ code, lang = 'jsx' }) {
  const { mode } = useTheme()
  const [html, setHtml] = useState('')

  const shikiTheme = mode === 'dark' ? 'one-dark-pro' : 'github-light'

  useEffect(() => {
    let cancelled = false
    getHighlighter().then((highlighter) => {
      if (cancelled) return
      const result = highlighter.codeToHtml(code, { lang, theme: shikiTheme })
      setHtml(result)
    })
    return () => { cancelled = true }
  }, [code, lang, shikiTheme])

  if (!html) {
    return (
      <pre className="p-4 bg-code-bg text-text-secondary font-mono text-sm overflow-x-auto">
        <code>{code}</code>
      </pre>
    )
  }

  return (
    <div
      className="p-4 overflow-x-auto text-sm [&_pre]:!bg-transparent [&_code]:font-mono"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
