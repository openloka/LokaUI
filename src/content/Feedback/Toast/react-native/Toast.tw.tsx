import { useState, useEffect } from 'react'
import { View, Text, Pressable } from 'react-native'

interface ToastProps {
  variant?: 'default' | 'success' | 'error' | 'warning'
  duration?: number
  children: string
}

const variantClasses = {
  default: 'border-border',
  success: 'border-green-700',
  error:   'border-red-700',
  warning: 'border-yellow-600',
}

const iconColors = {
  default: 'text-text-muted',
  success: 'text-green-400',
  error:   'text-red-400',
  warning: 'text-yellow-400',
}

export default function Toast({ variant = 'default', duration = 3000, children }: ToastProps) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration)
    return () => clearTimeout(timer)
  }, [duration])

  if (!visible) return null

  return (
    <View
      className={`flex-row items-start gap-3 w-full max-w-sm rounded-xl border bg-bg-card px-4 py-3 shadow-lg ${variantClasses[variant]}`}
      accessibilityRole="status"
      accessibilityLiveRegion="polite"
    >
      <Text className={`${iconColors[variant]} mt-0.5`}>●</Text>
      <Text className="flex-1 text-sm font-medium text-text-primary">{children}</Text>
      <Pressable onPress={() => setVisible(false)} accessibilityLabel="Dismiss" className="-mt-0.5 -mr-1 p-1">
        <Text className="text-text-muted text-sm">✕</Text>
      </Pressable>
    </View>
  )
}
