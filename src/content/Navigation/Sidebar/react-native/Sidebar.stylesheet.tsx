import type { ReactNode } from 'react'
import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native'

interface SidebarProps {
  collapsed?: boolean
  width?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

interface SidebarGroupProps {
  label?: string
  children: ReactNode
}

interface SidebarItemProps {
  active?: boolean
  onPress?: () => void
  children: string
}

const widthValues = {
  sm: 192,
  md: 224,
  lg: 256,
}

export function Sidebar({ collapsed = false, width = 'md', children }: SidebarProps) {
  return (
    <ScrollView
      style={[styles.container, { width: collapsed ? 56 : widthValues[width] }]}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.inner}>{children}</View>
    </ScrollView>
  )
}

export function SidebarGroup({ label, children }: SidebarGroupProps) {
  return (
    <View style={styles.group}>
      {label && <Text style={styles.groupLabel}>{label}</Text>}
      {children}
    </View>
  )
}

export function SidebarItem({ active = false, onPress, children }: SidebarItemProps) {
  return (
    <Pressable
      style={[styles.item, active && styles.itemActive]}
      onPress={onPress}
    >
      <Text style={[styles.itemText, active && styles.itemTextActive]}>
        {children}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0f0f1a',
    borderRightWidth: 1,
    borderRightColor: '#2e2e3e',
  },
  inner: {
    paddingVertical: 8,
  },
  group: {
    marginBottom: 8,
  },
  groupLabel: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    fontSize: 11,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    color: '#6b7280',
  },
  item: {
    marginHorizontal: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  itemActive: {
    backgroundColor: '#6366f1',
  },
  itemText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#9ca3af',
  },
  itemTextActive: {
    color: '#ffffff',
  },
})
