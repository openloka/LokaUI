import { useState } from 'react'
import { CommandLineIcon, ClipboardIcon, CheckIcon } from '@heroicons/react/24/outline'

export default function CliInstallation({ componentName }) {
  const [copied, setCopied] = useState(false)
  const command = `npx shadcn@latest add @lokaui/${componentName}`

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex items-center gap-3 rounded-lg border border-border bg-code-bg px-4 py-3">
      <CommandLineIcon className="h-5 w-5 shrink-0 text-text-secondary" />
      <code className="flex-1 font-mono text-sm text-text-primary">{command}</code>
      <button
        onClick={handleCopy}
        className="shrink-0 text-text-secondary hover:text-accent transition-colors"
        aria-label={copied ? 'Copied' : 'Copy to clipboard'}
      >
        {copied ? (
          <CheckIcon className="h-5 w-5 text-green-400" />
        ) : (
          <ClipboardIcon className="h-5 w-5" />
        )}
      </button>
    </div>
  )
}
