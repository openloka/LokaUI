import { TextInput, View, StyleSheet } from 'react-native'

interface InputProps {
  type?: 'text' | 'email' | 'password'
  placeholder?: string
  disabled?: boolean
  error?: boolean
  value?: string
  onChangeText?: (text: string) => void
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#374151',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  containerError: {
    borderColor: '#ef4444',
  },
  containerDisabled: {
    opacity: 0.5,
  },
  input: {
    fontSize: 14,
    color: '#f9fafb',
    padding: 0,
  },
})

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
      style={[
        styles.container,
        error && styles.containerError,
        disabled && styles.containerDisabled,
      ]}
    >
      <TextInput
        style={styles.input}
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
