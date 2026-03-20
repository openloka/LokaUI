import './Button.css'

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
      className={`loka-btn loka-btn--${variant} loka-btn--${size}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <span className="loka-btn__spinner" />}
      {children}
    </button>
  )
}
