import { createContext, useContext } from 'react'
import type { ReactNode } from 'react'
import { View, Text, Pressable } from 'react-native'

interface BreadcrumbProps {
  separator?: 'chevron' | 'slash' | 'dot'
  children: ReactNode
}

interface BreadcrumbItemProps {
  active?: boolean
  onPress?: () => void
  children: string
}

const separatorMap = {
  chevron: '›',
  slash: '/',
  dot: '·',
}

const BreadcrumbContext = createContext<{ separator: string }>({ separator: '›' })

export function Breadcrumb({ separator = 'chevron', children }: BreadcrumbProps) {
  return (
    <BreadcrumbContext.Provider value={{ separator: separatorMap[separator] }}>
      <View className="flex-row flex-wrap items-center gap-1" accessibilityRole="header">
        {children}
      </View>
    </BreadcrumbContext.Provider>
  )
}

export function BreadcrumbItem({ active = false, onPress, children }: BreadcrumbItemProps) {
  const { separator } = useContext(BreadcrumbContext)

  return (
    <View className="flex-row items-center gap-1">
      {active ? (
        <Text
          className="text-sm font-medium text-text-primary"
          accessibilityLabel={`Current page: ${children}`}
          accessibilityCurrentPage
        >
          {children}
        </Text>
      ) : (
        <>
          <Pressable onPress={onPress}>
            <Text className="text-sm text-text-secondary hover:text-text-primary">{children}</Text>
          </Pressable>
          <Text className="text-text-muted text-sm">{separator}</Text>
        </>
      )}
    </View>
  )
}
