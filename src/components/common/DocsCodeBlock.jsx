import { useState } from 'react'
import { ClipboardIcon, CheckIcon } from '@heroicons/react/24/outline'
import CodeHighlighter from '../code/CodeHighlighter'

export default function DocsCodeBlock({ title, code, lang = 'bash' }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="rounded-xl border border-border overflow-hidden mb-4">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-bg-card">
        <span className="text-xs font-mono text-text-muted">{title}</span>
        <button onClick={handleCopy} className="text-text-muted hover:text-text-secondary transition-colors">
          {copied ? <CheckIcon className="w-4 h-4 text-status-green" /> : <ClipboardIcon className="w-4 h-4" />}
        </button>
      </div>
      <div className="bg-code-bg">
        <CodeHighlighter code={code} lang={lang} />
      </div>
    </div>
  )
}
