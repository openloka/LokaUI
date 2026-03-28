import { useState } from 'react'
import type { ReactNode } from 'react'
import { View, Text, Pressable, ScrollView } from 'react-native'

interface TabsProps {
  defaultValue?: string
  variant?: 'default' | 'pills' | 'underline'
  children: ReactNode
}

interface TabsListProps {
  children: ReactNode
}

interface TabsTriggerProps {
  value: string
  children: string
}

interface TabsContentProps {
  value: string
  children: ReactNode
}

interface TabsContextValue {
  activeTab: string
  setActiveTab: (value: string) => void
  variant: 'default' | 'pills' | 'underline'
}

import { createContext, useContext } from 'react'

const TabsContext = createContext<TabsContextValue>({
  activeTab: '',
  setActiveTab: () => {},
  variant: 'default',
})

export function Tabs({ defaultValue = '', variant = 'default', children }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue)
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab, variant }}>
      <View>{children}</View>
    </TabsContext.Provider>
  )
}

export function TabsList({ children }: TabsListProps) {
  const { variant } = useContext(TabsContext)
  const containerClass =
    variant === 'underline'
      ? 'flex-row border-b border-border'
      : 'flex-row bg-bg-subtle rounded-lg p-1 gap-1'

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View className={containerClass}>{children}</View>
    </ScrollView>
  )
}

export function TabsTrigger({ value, children }: TabsTriggerProps) {
  const { activeTab, setActiveTab, variant } = useContext(TabsContext)
  const isActive = activeTab === value

  const triggerClass = (() => {
    if (variant === 'pills') {
      return isActive
        ? 'px-4 py-1.5 rounded-md bg-accent'
        : 'px-4 py-1.5 rounded-md'
    }
    if (variant === 'underline') {
      return isActive
        ? 'px-4 py-2 border-b-2 border-accent -mb-px'
        : 'px-4 py-2 border-b-2 border-transparent -mb-px'
    }
    return isActive
      ? 'px-4 py-1.5 rounded-md bg-bg-card shadow-sm'
      : 'px-4 py-1.5 rounded-md'
  })()

  const textClass = (() => {
    if (variant === 'pills') {
      return isActive ? 'text-sm font-medium text-white' : 'text-sm font-medium text-text-secondary'
    }
    if (variant === 'underline') {
      return isActive ? 'text-sm font-medium text-accent' : 'text-sm font-medium text-text-secondary'
    }
    return isActive ? 'text-sm font-medium text-text-primary' : 'text-sm font-medium text-text-secondary'
  })()

  return (
    <Pressable className={triggerClass} onPress={() => setActiveTab(value)}>
      <Text className={textClass}>{children}</Text>
    </Pressable>
  )
}

export function TabsContent({ value, children }: TabsContentProps) {
  const { activeTab } = useContext(TabsContext)
  if (activeTab !== value) return null
  return <View className="pt-4">{children}</View>
}
