import { Pressable, View, Text } from 'react-native'

interface CheckboxProps {
  checked?: boolean
  disabled?: boolean
  label?: string
  onChange?: (checked: boolean) => void
}

export default function Checkbox({
  checked = false,
  disabled = false,
  label,
  onChange,
}: CheckboxProps) {
  return (
    <Pressable
      className={`flex-row items-center gap-3 ${disabled ? 'opacity-50' : ''}`}
      onPress={() => !disabled && onChange?.(!checked)}
      accessibilityRole="checkbox"
      accessibilityState={{ checked, disabled }}
    >
      <View
        className={`w-5 h-5 rounded items-center justify-center border ${
          checked
            ? 'bg-accent border-accent'
            : 'bg-transparent border-border'
        }`}
      >
        {checked && (
          <Text className="text-white text-xs font-bold leading-none">✓</Text>
        )}
      </View>
      {label && (
        <Text className="text-sm text-text-primary">{label}</Text>
      )}
    </Pressable>
  )
}
