import { TextInput, View } from 'react-native'

interface InputProps {
  type?: 'text' | 'email' | 'password'
  placeholder?: string
  disabled?: boolean
  error?: boolean
  value?: string
  onChangeText?: (text: string) => void
}

export default function Input({
  type = 'text',
  placeholder = '',
  disabled = false,
  error = false,
  value,
  onChangeText,
}: InputProps) {
  return (
    <View
      className={`rounded-lg border px-3 py-2.5 ${
        error ? 'border-red-500' : 'border-border'
      } ${disabled ? 'opacity-50' : ''}`}
    >
      <TextInput
        className="text-sm text-text-primary"
        placeholder={placeholder}
        placeholderTextColor="#6b7280"
        secureTextEntry={type === 'password'}
        keyboardType={type === 'email' ? 'email-address' : 'default'}
        editable={!disabled}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  )
}
