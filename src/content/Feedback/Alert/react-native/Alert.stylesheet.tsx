import { useState } from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'

interface AlertProps {
  variant?: 'info' | 'success' | 'warning' | 'error'
  dismissible?: boolean
  children: string
}

const variantStyles = StyleSheet.create({
  info:    { backgroundColor: '#0c1e38', borderColor: '#1e40af' },
  success: { backgroundColor: '#052e16', borderColor: '#166534' },
  warning: { backgroundColor: '#1c1400', borderColor: '#854d0e' },
  error:   { backgroundColor: '#200a0a', borderColor: '#991b1b' },
})

const iconColors = {
  info:    '#60a5fa',
  success: '#4ade80',
  warning: '#facc15',
  error:   '#f87171',
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    borderRadius: 12,
    borderWidth: 1,
    padding: 16,
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
    color: '#f9fafb',
    opacity: 0.6,
    fontSize: 14,
  },
})

export default function Alert({ variant = 'info', dismissible = false, children }: AlertProps) {
  const [visible, setVisible] = useState(true)
  if (!visible) return null

  return (
    <View style={[styles.container, variantStyles[variant]]} accessibilityRole="alert">
      <Text style={[styles.icon, { color: iconColors[variant] }]}>●</Text>
      <Text style={styles.message}>{children}</Text>
      {dismissible && (
        <Pressable style={styles.dismiss} onPress={() => setVisible(false)} accessibilityLabel="Dismiss">
          <Text style={styles.dismissText}>✕</Text>
        </Pressable>
      )}
    </View>
  )
}
