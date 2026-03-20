import { useState, useRef, useEffect } from 'react'
import { SwatchIcon, CheckIcon, ArrowPathIcon } from '@heroicons/react/24/outline'
import { useTheme, colorSchemes } from '../../theme'

export default function ColorSchemeDropdown() {
  const { customColors, setColors } = useTheme()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  const activeScheme = (() => {
    if (!customColors) return 'Teal & Indigo'
    for (const [name, scheme] of Object.entries(colorSchemes)) {
      if (
        scheme.primary.dark === customColors.primary.dark &&
        scheme.secondary.dark === customColors.secondary.dark
      ) {
        return name
      }
    }
    return null
  })()

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    if (open) document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    if (open) document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [open])

  const handleSelect = (name) => {
    const scheme = colorSchemes[name]
    setColors({ primary: scheme.primary, secondary: scheme.secondary })
    setOpen(false)
  }

  const handleReset = () => {
    setColors(null)
    setOpen(false)
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 py-1.5 px-2.5 rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-hover transition-colors"
        aria-label="Change color scheme"
      >
        <SwatchIcon className="w-5 h-5" />
        <div className="flex items-center gap-1">
          <div className="w-3.5 h-3.5 rounded-full ring-1 ring-white/15" style={{ backgroundColor: 'var(--accent)' }} />
          <div className="w-3.5 h-3.5 rounded-full ring-1 ring-white/15" style={{ backgroundColor: 'var(--secondary)' }} />
        </div>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-64 rounded-xl border border-border bg-bg/95 backdrop-blur-xl shadow-lg overflow-hidden animate-[loka-slide-down_0.15s_ease-out]">
          <div className="px-3.5 py-2.5 border-b border-border">
            <span className="text-xs font-semibold text-text-primary">Color Scheme</span>
          </div>

          <div className="p-1.5 max-h-[340px] overflow-y-auto">
            {Object.entries(colorSchemes).map(([name, scheme]) => {
              const isActive = activeScheme === name
              return (
                <button
                  key={name}
                  onClick={() => handleSelect(name)}
                  className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-left transition-colors ${
                    isActive
                      ? 'bg-accent-muted'
                      : 'hover:bg-bg-hover'
                  }`}
                >
                  <div className="flex gap-1">
                    <div
                      className="w-4.5 h-4.5 rounded-full border border-white/10"
                      style={{ backgroundColor: scheme.primary.dark }}
                    />
                    <div
                      className="w-4.5 h-4.5 rounded-full border border-white/10"
                      style={{ backgroundColor: scheme.secondary.dark }}
                    />
                  </div>
                  <span className={`text-xs font-medium flex-1 ${isActive ? 'text-accent' : 'text-text-primary'}`}>
                    {name}
                  </span>
                  {isActive && <CheckIcon className="w-3.5 h-3.5 text-accent" />}
                </button>
              )
            })}
          </div>

          {customColors && (
            <div className="px-1.5 pb-1.5 pt-0">
              <button
                onClick={handleReset}
                className="w-full flex items-center justify-center gap-1.5 px-2.5 py-2 rounded-lg text-xs text-text-secondary hover:text-text-primary hover:bg-bg-hover border border-border transition-colors"
              >
                <ArrowPathIcon className="w-3.5 h-3.5" />
                Reset to default
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
