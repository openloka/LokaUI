import { useState, createContext, useContext } from 'react'
import type { ReactNode } from 'react'
import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native'

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
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View
        style={[
          styles.tabsList,
          variant === 'underline' ? styles.tabsListUnderline : styles.tabsListDefault,
        ]}
      >
        {children}
      </View>
    </ScrollView>
  )
}

export function TabsTrigger({ value, children }: TabsTriggerProps) {
  const { activeTab, setActiveTab, variant } = useContext(TabsContext)
  const isActive = activeTab === value

  const triggerStyle = [
    styles.trigger,
    variant === 'underline' && styles.triggerUnderline,
    variant === 'underline' && isActive && styles.triggerUnderlineActive,
    variant === 'pills' && isActive && styles.triggerPillsActive,
    variant === 'default' && isActive && styles.triggerDefaultActive,
  ]

  const textStyle = [
    styles.triggerText,
    isActive ? styles.triggerTextActive : styles.triggerTextInactive,
    variant === 'underline' && isActive && styles.triggerTextUnderlineActive,
    variant === 'pills' && isActive && styles.triggerTextPillsActive,
  ]

  return (
    <Pressable style={triggerStyle} onPress={() => setActiveTab(value)}>
      <Text style={textStyle}>{children}</Text>
    </Pressable>
  )
}

export function TabsContent({ value, children }: TabsContentProps) {
  const { activeTab } = useContext(TabsContext)
  if (activeTab !== value) return null
  return <View style={styles.content}>{children}</View>
}

const styles = StyleSheet.create({
  tabsList: {
    flexDirection: 'row',
    gap: 4,
    padding: 4,
    borderRadius: 8,
  },
  tabsListDefault: {
    backgroundColor: '#1e1e2e',
  },
  tabsListUnderline: {
    borderBottomWidth: 1,
    borderBottomColor: '#2e2e3e',
    borderRadius: 0,
    padding: 0,
    gap: 0,
  },
  trigger: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 6,
  },
  triggerDefaultActive: {
    backgroundColor: '#0f0f1a',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  triggerPillsActive: {
    backgroundColor: '#6366f1',
  },
  triggerUnderline: {
    borderRadius: 0,
    paddingVertical: 8,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
    marginBottom: -1,
  },
  triggerUnderlineActive: {
    borderBottomColor: '#6366f1',
  },
  triggerText: {
    fontSize: 14,
    fontWeight: '500',
  },
  triggerTextActive: {
    color: '#e5e7eb',
  },
  triggerTextInactive: {
    color: '#9ca3af',
  },
  triggerTextUnderlineActive: {
    color: '#6366f1',
  },
  triggerTextPillsActive: {
    color: '#ffffff',
  },
  content: {
    paddingTop: 16,
  },
})
