import { useState, useEffect } from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'

interface ToastProps {
  variant?: 'default' | 'success' | 'error' | 'warning'
  duration?: number
  children: string
}

const borderColors: Record<string, string> = {
  default: '#374151',
  success: '#15803d',
  error:   '#b91c1c',
  warning: '#a16207',
}

const iconColors: Record<string, string> = {
  default: '#6b7280',
  success: '#4ade80',
  error:   '#f87171',
  warning: '#facc15',
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    maxWidth: 384,
    width: '100%',
    borderRadius: 12,
    borderWidth: 1,
    backgroundColor: '#111827',
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  icon: {
    marginTop: 2,
  },
  message: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    color: '#f9fafb',
  },
  dismiss: {
    padding: 4,
    marginTop: -2,
    marginRight: -4,
  },
  dismissText: {
    color: '#6b7280',
    fontSize: 14,
  },
})

export default function Toast({ variant = 'default', duration = 3000, children }: ToastProps) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration)
    return () => clearTimeout(timer)
  }, [duration])

  if (!visible) return null

  return (
    <View
      style={[styles.container, { borderColor: borderColors[variant] }]}
      accessibilityRole="status"
      accessibilityLiveRegion="polite"
    >
      <Text style={[styles.icon, { color: iconColors[variant] }]}>●</Text>
      <Text style={styles.message}>{children}</Text>
      <Pressable style={styles.dismiss} onPress={() => setVisible(false)} accessibilityLabel="Dismiss">
        <Text style={styles.dismissText}>✕</Text>
      </Pressable>
    </View>
  )
}
