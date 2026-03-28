import React, { useState } from 'react'
import { Pressable, View, Text, Modal, FlatList } from 'react-native'

interface SelectOption {
  value: string
  label: string
}

interface SelectProps {
  options?: SelectOption[]
  value?: string
  placeholder?: string
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg'
  onValueChange?: (value: string) => void
}

const sizeClasses = {
  sm: 'px-3 py-1.5',
  md: 'px-3 py-2.5',
  lg: 'px-4 py-3',
}

const textSizeClasses = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
}

export default function Select({
  options = [],
  value,
  placeholder = 'Select...',
  disabled = false,
  size = 'md',
  onValueChange,
}: SelectProps) {
  const [open, setOpen] = useState(false)
  const selected = options.find((o) => o.value === value)

  return (
    <>
      <Pressable
        className={`flex-row items-center justify-between rounded-lg border border-border ${sizeClasses[size]} ${disabled ? 'opacity-50' : ''}`}
        onPress={() => !disabled && setOpen(true)}
        accessibilityRole="combobox"
        accessibilityState={{ expanded: open, disabled }}
      >
        <Text className={`${textSizeClasses[size]} ${selected ? 'text-text-primary' : 'text-text-muted'}`}>
          {selected ? selected.label : placeholder}
        </Text>
        <Text className="text-text-muted ml-2">▾</Text>
      </Pressable>

      <Modal visible={open} transparent animationType="fade" onRequestClose={() => setOpen(false)}>
        <Pressable className="flex-1 bg-black/50 justify-end" onPress={() => setOpen(false)}>
          <View className="bg-bg-card rounded-t-2xl border-t border-border">
            <View className="px-4 py-3 border-b border-border flex-row justify-between items-center">
              <Text className="text-sm font-semibold text-text-primary">Select an option</Text>
              <Pressable onPress={() => setOpen(false)}>
                <Text className="text-sm text-accent font-medium">Done</Text>
              </Pressable>
            </View>
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <Pressable
                  className={`px-4 py-3.5 border-b border-border flex-row items-center justify-between ${item.value === value ? 'bg-bg-subtle' : ''}`}
                  onPress={() => { onValueChange?.(item.value); setOpen(false) }}
                >
                  <Text className={`text-sm ${item.value === value ? 'text-accent font-medium' : 'text-text-primary'}`}>
                    {item.label}
                  </Text>
                  {item.value === value && <Text className="text-accent text-sm">✓</Text>}
                </Pressable>
              )}
            />
          </View>
        </Pressable>
      </Modal>
    </>
  )
}
