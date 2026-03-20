const variantClasses = {
  primary: 'bg-accent text-white hover:bg-accent-hover',
  secondary: 'bg-secondary text-secondary-text hover:bg-secondary-hover',
  ghost: 'bg-transparent text-text-primary hover:bg-bg-hover',
}

const sizeClasses = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-2.5 text-base',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  children,
  ...props
}) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-colors border border-transparent disabled:opacity-50 disabled:cursor-not-allowed ${variantClasses[variant]} ${sizeClasses[size]}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <span className="w-[1em] h-[1em] border-2 border-current border-r-transparent rounded-full animate-spin" />
      )}
      {children}
    </button>
  )
}
