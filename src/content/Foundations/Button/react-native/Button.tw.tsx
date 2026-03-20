import { Pressable, Text, ActivityIndicator } from 'react-native'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  children: string
  onPress?: () => void
}

const variantClasses: Record<string, { pressable: string; text: string }> = {
  primary: { pressable: 'bg-accent', text: 'text-white' },
  secondary: { pressable: 'bg-transparent border border-border', text: 'text-text-primary' },
  ghost: { pressable: 'bg-transparent', text: 'text-text-primary' },
}

const sizeClasses: Record<string, { pressable: string; text: string }> = {
  sm: { pressable: 'px-3 py-1.5', text: 'text-xs' },
  md: { pressable: 'px-4 py-2', text: 'text-sm' },
  lg: { pressable: 'px-6 py-2.5', text: 'text-base' },
}

export default function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  children,
  onPress,
}: ButtonProps) {
  const v = variantClasses[variant]
  const s = sizeClasses[size]

  return (
    <Pressable
      className={`flex-row items-center justify-center gap-2 rounded-lg ${v.pressable} ${s.pressable} ${disabled || loading ? 'opacity-50' : ''}`}
      disabled={disabled || loading}
      onPress={onPress}
    >
      {loading && <ActivityIndicator size="small" color="currentColor" />}
      <Text className={`font-medium ${v.text} ${s.text}`}>{children}</Text>
    </Pressable>
  )
}
