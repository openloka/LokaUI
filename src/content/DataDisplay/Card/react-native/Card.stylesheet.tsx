import type { ReactNode } from 'react'
import { View, StyleSheet } from 'react-native'

interface CardProps {
  variant?: 'default' | 'outlined' | 'elevated'
  padding?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

const variantStyles = StyleSheet.create({
  default:  { backgroundColor: '#111827', borderWidth: 1, borderColor: '#374151' },
  outlined: { backgroundColor: 'transparent', borderWidth: 1, borderColor: '#374151' },
  elevated: { backgroundColor: '#111827', borderWidth: 1, borderColor: '#374151', elevation: 4, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 4 },
})

const paddingStyles = StyleSheet.create({
  sm: { padding: 12 },
  md: { padding: 16 },
  lg: { padding: 24 },
})

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
  },
})

export default function Card({ variant = 'default', padding = 'md', children }: CardProps) {
  return (
    <View style={[styles.card, variantStyles[variant], paddingStyles[padding]]}>
      {children}
    </View>
  )
}
