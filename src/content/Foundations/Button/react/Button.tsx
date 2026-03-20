import './Button.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
}

export default function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  children,
  ...props
}: ButtonProps) {
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
