import type { ReactNode } from 'react'
import { View } from 'react-native'

interface CardProps {
  variant?: 'default' | 'outlined' | 'elevated'
  padding?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

const variantClasses = {
  default:  'bg-bg-card border border-border',
  outlined: 'bg-transparent border border-border',
  elevated: 'bg-bg-card border border-border shadow-lg',
}

const paddingClasses = {
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
}

export default function Card({ variant = 'default', padding = 'md', children }: CardProps) {
  return (
    <View className={`rounded-xl ${variantClasses[variant]} ${paddingClasses[padding]}`}>
      {children}
    </View>
  )
}
