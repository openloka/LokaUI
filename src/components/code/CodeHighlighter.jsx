import { useState, useEffect } from 'react'
import { createHighlighter } from 'shiki'

let highlighterPromise = null

function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ['one-dark-pro'],
      langs: ['jsx', 'tsx', 'css', 'php', 'bash', 'javascript', 'json'],
    })
  }
  return highlighterPromise
}

export default function CodeHighlighter({ code, lang = 'jsx' }) {
  const [html, setHtml] = useState('')

  useEffect(() => {
    let cancelled = false
    getHighlighter().then((highlighter) => {
      if (cancelled) return
      const result = highlighter.codeToHtml(code, { lang, theme: 'one-dark-pro' })
      setHtml(result)
    })
    return () => { cancelled = true }
  }, [code, lang])

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
