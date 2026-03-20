import { Pressable, Text, ActivityIndicator, StyleSheet } from 'react-native'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  children: string
  onPress?: () => void
}

const variantStyles = StyleSheet.create({
  primary: { backgroundColor: '#6366f1' },
  secondary: { backgroundColor: 'transparent', borderWidth: 1, borderColor: '#374151' },
  ghost: { backgroundColor: 'transparent' },
})

const variantTextStyles = StyleSheet.create({
  primary: { color: '#ffffff' },
  secondary: { color: '#e5e7eb' },
  ghost: { color: '#e5e7eb' },
})

const sizeStyles = StyleSheet.create({
  sm: { paddingHorizontal: 12, paddingVertical: 6 },
  md: { paddingHorizontal: 16, paddingVertical: 8 },
  lg: { paddingHorizontal: 24, paddingVertical: 10 },
})

const sizeTextStyles = StyleSheet.create({
  sm: { fontSize: 12 },
  md: { fontSize: 14 },
  lg: { fontSize: 16 },
})

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderRadius: 8,
  },
  text: {
    fontWeight: '500',
  },
  disabled: {
    opacity: 0.5,
  },
})

export default function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  children,
  onPress,
}: ButtonProps) {
  return (
    <Pressable
      style={[
        styles.button,
        variantStyles[variant],
        sizeStyles[size],
        (disabled || loading) && styles.disabled,
      ]}
      disabled={disabled || loading}
      onPress={onPress}
    >
      {loading && <ActivityIndicator size="small" color={variant === 'primary' ? '#ffffff' : '#e5e7eb'} />}
      <Text style={[styles.text, variantTextStyles[variant], sizeTextStyles[size]]}>
        {children}
      </Text>
    </Pressable>
  )
}
