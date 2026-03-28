import { View, Text, StyleSheet } from 'react-native'

interface BadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
  size?: 'sm' | 'md'
  children: string
}

const variantViewStyles = StyleSheet.create({
  default: { backgroundColor: 'rgba(107, 114, 128, 0.2)' },
  success: { backgroundColor: 'rgba(34, 197, 94, 0.2)' },
  warning: { backgroundColor: 'rgba(234, 179, 8, 0.2)' },
  error: { backgroundColor: 'rgba(239, 68, 68, 0.2)' },
  info: { backgroundColor: 'rgba(59, 130, 246, 0.2)' },
})

const variantTextStyles = StyleSheet.create({
  default: { color: '#9ca3af' },
  success: { color: '#4ade80' },
  warning: { color: '#facc15' },
  error: { color: '#f87171' },
  info: { color: '#60a5fa' },
})

const sizeViewStyles = StyleSheet.create({
  sm: { paddingHorizontal: 6, paddingVertical: 2 },
  md: { paddingHorizontal: 10, paddingVertical: 4 },
})

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    borderRadius: 9999,
  },
  text: {
    fontSize: 12,
    fontWeight: '500',
  },
})

export default function Badge({
  variant = 'default',
  size = 'md',
  children,
}: BadgeProps) {
  return (
    <View style={[styles.container, variantViewStyles[variant], sizeViewStyles[size]]}>
      <Text style={[styles.text, variantTextStyles[variant]]}>{children}</Text>
    </View>
  )
}
