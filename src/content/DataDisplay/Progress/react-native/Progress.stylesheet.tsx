import { View, Text, StyleSheet } from 'react-native'

interface ProgressProps {
  value?: number
  variant?: 'default' | 'success' | 'warning'
  showLabel?: boolean
}

const barColors = {
  default: '#6366f1',
  success: '#22c55e',
  warning: '#eab308',
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    width: '100%',
  },
  track: {
    flex: 1,
    height: 8,
    borderRadius: 999,
    backgroundColor: '#1f2937',
    overflow: 'hidden',
  },
  bar: {
    height: '100%',
    borderRadius: 999,
  },
  label: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6b7280',
    width: 36,
    textAlign: 'right',
  },
})

export default function Progress({ value = 0, variant = 'default', showLabel = false }: ProgressProps) {
  const clamped = Math.max(0, Math.min(100, Math.round(value)))

  return (
    <View style={styles.row}>
      <View style={styles.track}>
        <View
          style={[styles.bar, { width: `${clamped}%`, backgroundColor: barColors[variant] }]}
          accessibilityRole="progressbar"
          accessibilityValue={{ min: 0, max: 100, now: clamped }}
        />
      </View>
      {showLabel && (
        <Text style={styles.label}>{clamped}%</Text>
      )}
    </View>
  )
}
