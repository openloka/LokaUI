import { View, Text } from 'react-native'

interface ProgressProps {
  value?: number
  variant?: 'default' | 'success' | 'warning'
  showLabel?: boolean
}

const barClasses = {
  default: 'bg-accent',
  success: 'bg-green-500',
  warning: 'bg-yellow-500',
}

export default function Progress({ value = 0, variant = 'default', showLabel = false }: ProgressProps) {
  const clamped = Math.max(0, Math.min(100, Math.round(value)))

  return (
    <View className="flex-row items-center gap-3 w-full">
      <View className="flex-1 h-2 rounded-full bg-bg-subtle overflow-hidden">
        <View
          className={`h-full rounded-full ${barClasses[variant]}`}
          style={{ width: `${clamped}%` }}
          accessibilityRole="progressbar"
          accessibilityValue={{ min: 0, max: 100, now: clamped }}
        />
      </View>
      {showLabel && (
        <Text className="text-xs font-medium text-text-muted w-9 text-right shrink-0 tabular-nums">
          {clamped}%
        </Text>
      )}
    </View>
  )
}
