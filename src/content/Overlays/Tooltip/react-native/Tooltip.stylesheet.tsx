import { useState, useRef } from 'react'
import { View, Text, Pressable, Modal, StyleSheet } from 'react-native'

interface TooltipProps {
  content?: string
  side?: 'top' | 'bottom' | 'left' | 'right'
  children: React.ReactNode
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
  },
  tooltip: {
    position: 'absolute',
  },
  bubble: {
    backgroundColor: '#1f2937',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  text: {
    fontSize: 12,
    fontWeight: '500',
    color: '#ffffff',
  },
})

export default function Tooltip({ content = '', side = 'top', children }: TooltipProps) {
  const [visible, setVisible] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0, width: 0, height: 0 })
  const triggerRef = useRef<View>(null)

  const handlePress = () => {
    triggerRef.current?.measureInWindow((x, y, width, height) => {
      setPosition({ x, y, width, height })
      setVisible(true)
    })
  }

  const getTooltipPosition = () => {
    const offset = 8
    switch (side) {
      case 'top':
        return { top: position.y - offset, left: position.x, minWidth: position.width, alignItems: 'center' as const, transform: [{ translateY: -32 }] }
      case 'bottom':
        return { top: position.y + position.height + offset, left: position.x, minWidth: position.width, alignItems: 'center' as const }
      case 'left':
        return { top: position.y, left: position.x - offset, alignItems: 'flex-end' as const, transform: [{ translateY: position.height / 2 - 16 }] }
      case 'right':
        return { top: position.y, left: position.x + position.width + offset, alignItems: 'flex-start' as const, transform: [{ translateY: position.height / 2 - 16 }] }
    }
  }

  return (
    <>
      <Pressable ref={triggerRef} onPress={handlePress}>
        {children}
      </Pressable>
      <Modal visible={visible} transparent animationType="fade" onRequestClose={() => setVisible(false)} statusBarTranslucent>
        <Pressable style={styles.backdrop} onPress={() => setVisible(false)}>
          <View style={[styles.tooltip, getTooltipPosition()]}>
            <View style={styles.bubble}>
              <Text style={styles.text}>{content}</Text>
            </View>
          </View>
        </Pressable>
      </Modal>
    </>
  )
}
