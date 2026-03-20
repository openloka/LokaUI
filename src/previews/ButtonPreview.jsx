export default function ButtonPreview({ variant = 'primary', size = 'md', disabled = false, loading = false }) {
  const base = 'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-colors cursor-pointer border border-transparent disabled:opacity-50 disabled:cursor-not-allowed'
  const variants = {
    primary: 'bg-accent text-white hover:bg-accent-hover',
    secondary: 'bg-secondary text-secondary-text hover:bg-secondary-hover',
    ghost: 'bg-transparent text-text-primary hover:bg-bg-hover',
  }
  const sizes = { sm: 'px-3 py-1.5 text-xs', md: 'px-4 py-2 text-sm', lg: 'px-6 py-2.5 text-base' }

  return (
    <div className="flex flex-wrap gap-3 items-center justify-center">
      <button className={`${base} ${variants[variant]} ${sizes[size]}`} disabled={disabled || loading}>
        {loading && <span className="w-[1em] h-[1em] border-2 border-current border-r-transparent rounded-full animate-spin" />}
        {variant.charAt(0).toUpperCase() + variant.slice(1)}
      </button>
    </div>
  )
}
