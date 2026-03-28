import { createContext, useContext } from 'react'
import type { ReactNode } from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'

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
      <View style={styles.container} accessibilityRole="header">
        {children}
      </View>
    </BreadcrumbContext.Provider>
  )
}

export function BreadcrumbItem({ active = false, onPress, children }: BreadcrumbItemProps) {
  const { separator } = useContext(BreadcrumbContext)

  return (
    <View style={styles.item}>
      {active ? (
        <Text style={styles.activeText}>{children}</Text>
      ) : (
        <>
          <Pressable onPress={onPress}>
            <Text style={styles.linkText}>{children}</Text>
          </Pressable>
          <Text style={styles.separator}>{separator}</Text>
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 4,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  activeText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#e5e7eb',
  },
  linkText: {
    fontSize: 14,
    color: '#9ca3af',
  },
  separator: {
    fontSize: 14,
    color: '#6b7280',
  },
})
