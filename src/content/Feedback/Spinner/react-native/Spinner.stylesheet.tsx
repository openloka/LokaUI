import { ActivityIndicator, StyleSheet } from 'react-native'

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  color?: 'accent' | 'white' | 'current'
}

const nativeSizes = {
  sm: 'small',
  md: 'small',
  lg: 'large',
} as const

const colorValues: Record<string, string | undefined> = {
  accent:  '#6366f1',
  white:   '#ffffff',
  current: undefined,
}

export default function Spinner({ size = 'md', color = 'accent' }: SpinnerProps) {
  return (
    <ActivityIndicator
      size={nativeSizes[size]}
      color={colorValues[color]}
      accessibilityLabel="Loading"
    />
  )
}
