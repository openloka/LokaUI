import { Switch, View, Text } from 'react-native'

interface ToggleProps {
  checked?: boolean
  disabled?: boolean
  label?: string
  onChange?: (checked: boolean) => void
}

export default function Toggle({
  checked = false,
  disabled = false,
  label,
  onChange,
}: ToggleProps) {
  return (
    <View className={`flex-row items-center gap-3 ${disabled ? 'opacity-50' : ''}`}>
      <Switch
        value={checked}
        onValueChange={onChange}
        disabled={disabled}
        trackColor={{ false: '#374151', true: '#6366f1' }}
        thumbColor="#ffffff"
      />
      {label && (
        <Text className="text-sm text-text-primary">{label}</Text>
      )}
    </View>
  )
}
