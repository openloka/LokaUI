import { TextInput, StyleSheet } from 'react-native'

interface TextareaProps {
  placeholder?: string
  rows?: number
  disabled?: boolean
  value?: string
  onChangeText?: (text: string) => void
}

const styles = StyleSheet.create({
  textarea: {
    borderWidth: 1,
    borderColor: '#374151',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: '#f9fafb',
    textAlignVertical: 'top',
  },
  disabled: {
    opacity: 0.5,
  },
})

export default function Textarea({
  placeholder = '',
  rows = 4,
  disabled = false,
  value,
  onChangeText,
}: TextareaProps) {
  return (
    <TextInput
      style={[styles.textarea, { minHeight: rows * 24 }, disabled && styles.disabled]}
      placeholder={placeholder}
      placeholderTextColor="#6b7280"
      multiline
      numberOfLines={rows}
      editable={!disabled}
      value={value}
      onChangeText={onChangeText}
    />
  )
}
