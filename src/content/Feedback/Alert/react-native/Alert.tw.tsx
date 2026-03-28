import { useState } from 'react'
import { View, Text, Pressable } from 'react-native'

interface AlertProps {
  variant?: 'info' | 'success' | 'warning' | 'error'
  dismissible?: boolean
  children: string
}

const variantClasses = {
  info:    { container: 'bg-blue-950 border-blue-800',    icon: '●', iconColor: 'text-blue-400' },
  success: { container: 'bg-green-950 border-green-800',  icon: '●', iconColor: 'text-green-400' },
  warning: { container: 'bg-yellow-950 border-yellow-700',icon: '●', iconColor: 'text-yellow-400' },
  error:   { container: 'bg-red-950 border-red-800',      icon: '●', iconColor: 'text-red-400' },
}

export default function Alert({ variant = 'info', dismissible = false, children }: AlertProps) {
  const [visible, setVisible] = useState(true)
  if (!visible) return null

  const v = variantClasses[variant]

  return (
    <View
      className={`flex-row items-start gap-3 rounded-xl border p-4 ${v.container}`}
      accessibilityRole="alert"
    >
      <Text className={`${v.iconColor} mt-0.5`}>{v.icon}</Text>
      <Text className="flex-1 text-sm font-medium text-white">{children}</Text>
      {dismissible && (
        <Pressable onPress={() => setVisible(false)} accessibilityLabel="Dismiss" className="-mt-0.5 -mr-1 p-1">
          <Text className="text-white opacity-60 text-sm">✕</Text>
        </Pressable>
      )}
    </View>
  )
}
