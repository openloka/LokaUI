import { View, Text } from 'react-native'

interface BadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
  size?: 'sm' | 'md'
  children: string
}

const variantClasses: Record<string, { view: string; text: string }> = {
  default: { view: 'bg-secondary', text: 'text-secondary-text' },
  success: { view: 'bg-green-500/20', text: 'text-green-400' },
  warning: { view: 'bg-yellow-500/20', text: 'text-yellow-400' },
  error: { view: 'bg-red-500/20', text: 'text-red-400' },
  info: { view: 'bg-blue-500/20', text: 'text-blue-400' },
}

const sizeClasses: Record<string, { view: string; text: string }> = {
  sm: { view: 'px-1.5 py-0.5', text: 'text-xs' },
  md: { view: 'px-2.5 py-1', text: 'text-xs' },
}

export default function Badge({
  variant = 'default',
  size = 'md',
  children,
}: BadgeProps) {
  const v = variantClasses[variant]
  const s = sizeClasses[size]

  return (
    <View className={`self-start rounded-full ${v.view} ${s.view}`}>
      <Text className={`font-medium ${v.text} ${s.text}`}>{children}</Text>
    </View>
  )
}
