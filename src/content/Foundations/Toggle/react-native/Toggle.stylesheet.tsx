import { Switch, View, Text, StyleSheet } from 'react-native'

interface ToggleProps {
  checked?: boolean
  disabled?: boolean
  label?: string
  onChange?: (checked: boolean) => void
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  disabled: {
    opacity: 0.5,
  },
  label: {
    fontSize: 14,
    color: '#f9fafb',
  },
})

export default function Toggle({
  checked = false,
  disabled = false,
  label,
  onChange,
}: ToggleProps) {
  return (
    <View style={[styles.container, disabled && styles.disabled]}>
      <Switch
        value={checked}
        onValueChange={onChange}
        disabled={disabled}
        trackColor={{ false: '#374151', true: '#6366f1' }}
        thumbColor="#ffffff"
      />
      {label && <Text style={styles.label}>{label}</Text>}
    </View>
  )
}
