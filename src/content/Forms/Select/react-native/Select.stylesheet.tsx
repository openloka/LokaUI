import React, { useState } from 'react'
import { Pressable, View, Text, Modal, FlatList, StyleSheet } from 'react-native'

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

const sizeStyles = StyleSheet.create({
  sm: { paddingHorizontal: 12, paddingVertical: 6 },
  md: { paddingHorizontal: 12, paddingVertical: 10 },
  lg: { paddingHorizontal: 16, paddingVertical: 12 },
})

const textSizeStyles = StyleSheet.create({
  sm: { fontSize: 12 },
  md: { fontSize: 14 },
  lg: { fontSize: 16 },
})

const styles = StyleSheet.create({
  trigger: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#374151',
    borderRadius: 8,
  },
  triggerDisabled: {
    opacity: 0.5,
  },
  triggerText: {
    color: '#f9fafb',
  },
  placeholderText: {
    color: '#6b7280',
  },
  chevron: {
    color: '#6b7280',
    marginLeft: 8,
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: '#1f2937',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderTopWidth: 1,
    borderColor: '#374151',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#374151',
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#f9fafb',
  },
  doneText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6366f1',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: '#374151',
  },
  optionSelected: {
    backgroundColor: '#111827',
  },
  optionText: {
    fontSize: 14,
    color: '#f9fafb',
  },
  optionTextSelected: {
    color: '#6366f1',
    fontWeight: '500',
  },
  checkmark: {
    color: '#6366f1',
    fontSize: 14,
  },
})

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
        style={[styles.trigger, sizeStyles[size], disabled && styles.triggerDisabled]}
        onPress={() => !disabled && setOpen(true)}
        accessibilityRole="combobox"
        accessibilityState={{ expanded: open, disabled }}
      >
        <Text style={[textSizeStyles[size], selected ? styles.triggerText : styles.placeholderText]}>
          {selected ? selected.label : placeholder}
        </Text>
        <Text style={styles.chevron}>▾</Text>
      </Pressable>

      <Modal visible={open} transparent animationType="fade" onRequestClose={() => setOpen(false)}>
        <Pressable style={styles.backdrop} onPress={() => setOpen(false)}>
          <View style={styles.sheet}>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Select an option</Text>
              <Pressable onPress={() => setOpen(false)}>
                <Text style={styles.doneText}>Done</Text>
              </Pressable>
            </View>
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <Pressable
                  style={[styles.option, item.value === value && styles.optionSelected]}
                  onPress={() => { onValueChange?.(item.value); setOpen(false) }}
                >
                  <Text style={[styles.optionText, item.value === value && styles.optionTextSelected]}>
                    {item.label}
                  </Text>
                  {item.value === value && <Text style={styles.checkmark}>✓</Text>}
                </Pressable>
              )}
            />
          </View>
        </Pressable>
      </Modal>
    </>
  )
}
