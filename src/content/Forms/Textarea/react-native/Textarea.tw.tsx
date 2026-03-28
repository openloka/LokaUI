import { TextInput } from 'react-native'

interface TextareaProps {
  placeholder?: string
  rows?: number
  disabled?: boolean
  value?: string
  onChangeText?: (text: string) => void
}

export default function Textarea({
  placeholder = '',
  rows = 4,
  disabled = false,
  value,
  onChangeText,
}: TextareaProps) {
  return (
    <TextInput
      className={`rounded-lg border border-border px-3 py-2.5 text-sm text-text-primary ${disabled ? 'opacity-50' : ''}`}
      placeholder={placeholder}
      placeholderTextColor="#6b7280"
      multiline
      numberOfLines={rows}
      textAlignVertical="top"
      editable={!disabled}
      value={value}
      onChangeText={onChangeText}
      style={{ minHeight: rows * 24 }}
    />
  )
}
