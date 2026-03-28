import { Pressable, View, Text, StyleSheet } from 'react-native'

interface CheckboxProps {
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
  box: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxUnchecked: {
    borderColor: '#374151',
    backgroundColor: 'transparent',
  },
  boxChecked: {
    borderColor: '#6366f1',
    backgroundColor: '#6366f1',
  },
  checkmark: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 14,
  },
  label: {
    fontSize: 14,
    color: '#f9fafb',
  },
})

export default function Checkbox({
  checked = false,
  disabled = false,
  label,
  onChange,
}: CheckboxProps) {
  return (
    <Pressable
      style={[styles.container, disabled && styles.disabled]}
      onPress={() => !disabled && onChange?.(!checked)}
      accessibilityRole="checkbox"
      accessibilityState={{ checked, disabled }}
    >
      <View style={[styles.box, checked ? styles.boxChecked : styles.boxUnchecked]}>
        {checked && <Text style={styles.checkmark}>✓</Text>}
      </View>
      {label && <Text style={styles.label}>{label}</Text>}
    </Pressable>
  )
}
