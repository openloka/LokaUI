import type { ReactNode } from 'react'
import { View, Text, Pressable, ScrollView } from 'react-native'

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

const widthClasses = {
  sm: 'w-48',
  md: 'w-56',
  lg: 'w-64',
}

export function Sidebar({ collapsed = false, width = 'md', children }: SidebarProps) {
  return (
    <ScrollView
      className={`${collapsed ? 'w-14' : widthClasses[width]} bg-bg-card border-r border-border h-full`}
      showsVerticalScrollIndicator={false}
    >
      <View className="py-2">{children}</View>
    </ScrollView>
  )
}

export function SidebarGroup({ label, children }: SidebarGroupProps) {
  return (
    <View className="mb-2">
      {label && (
        <Text className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-text-muted">
          {label}
        </Text>
      )}
      {children}
    </View>
  )
}

export function SidebarItem({ active = false, onPress, children }: SidebarItemProps) {
  return (
    <Pressable
      className={`mx-2 px-3 py-2 rounded-lg ${active ? 'bg-accent' : ''}`}
      onPress={onPress}
    >
      <Text
        className={`text-sm font-medium ${active ? 'text-white' : 'text-text-secondary'}`}
      >
        {children}
      </Text>
    </Pressable>
  )
}
