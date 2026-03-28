import React from 'react'
import { Pressable, View, Text, StyleSheet } from 'react-native'

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

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  disabled: {
    opacity: 0.5,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleUnchecked: {
    borderColor: '#374151',
  },
  circleChecked: {
    borderColor: '#6366f1',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#6366f1',
  },
  label: {
    fontSize: 14,
    color: '#f9fafb',
  },
  group: {
    gap: 12,
  },
})

export function Radio({
  value,
  label,
  checked = false,
  disabled = false,
  onPress,
}: RadioProps) {
  return (
    <Pressable
      style={[styles.row, disabled && styles.disabled]}
      onPress={() => !disabled && onPress?.(value)}
      accessibilityRole="radio"
      accessibilityState={{ checked, disabled }}
    >
      <View style={[styles.circle, checked ? styles.circleChecked : styles.circleUnchecked]}>
        {checked && <View style={styles.dot} />}
      </View>
      {label && <Text style={styles.label}>{label}</Text>}
    </Pressable>
  )
}

export function RadioGroup({ value, children, onChange }: RadioGroupProps) {
  return (
    <View style={styles.group}>
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
