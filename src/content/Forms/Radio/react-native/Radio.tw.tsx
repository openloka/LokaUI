import React from 'react'
import { Pressable, View, Text } from 'react-native'

interface RadioProps {
  value: string
  label?: string
  checked?: boolean
  disabled?: boolean
  onPress?: (value: string) => void
}

interface RadioGroupProps {
  value?: string
  children: React.ReactNode
  onChange?: (value: string) => void
}

export function Radio({
  value,
  label,
  checked = false,
  disabled = false,
  onPress,
}: RadioProps) {
  return (
    <Pressable
      className={`flex-row items-center gap-3 ${disabled ? 'opacity-50' : ''}`}
      onPress={() => !disabled && onPress?.(value)}
      accessibilityRole="radio"
      accessibilityState={{ checked, disabled }}
    >
      <View
        className={`w-5 h-5 rounded-full border-2 items-center justify-center ${
          checked ? 'border-accent' : 'border-border'
        }`}
      >
        {checked && <View className="w-2.5 h-2.5 rounded-full bg-accent" />}
      </View>
      {label && (
        <Text className="text-sm text-text-primary">{label}</Text>
      )}
    </Pressable>
  )
}

export function RadioGroup({ value, children, onChange }: RadioGroupProps) {
  return (
    <View className="gap-3">
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child
        return React.cloneElement(child as React.ReactElement<RadioProps>, {
          checked: child.props.value === value,
          onPress: onChange,
        })
      })}
    </View>
  )
}
