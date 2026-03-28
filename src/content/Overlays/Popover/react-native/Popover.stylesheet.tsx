import { useState, useRef } from 'react'
import { View, Text, Pressable, Modal, StyleSheet } from 'react-native'

interface PopoverProps {
  open?: boolean
  side?: 'top' | 'bottom' | 'left' | 'right'
  trigger?: React.ReactNode
  children?: React.ReactNode
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
  },
  popover: {
    position: 'absolute',
  },
  content: {
    minWidth: 200,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#374151',
    backgroundColor: '#111827',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
})

export default function Popover({ side = 'bottom', trigger, children }: PopoverProps) {
  const [visible, setVisible] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0, width: 0, height: 0 })
  const triggerRef = useRef<View>(null)

  const handleOpen = () => {
    triggerRef.current?.measureInWindow((x, y, width, height) => {
      setPosition({ x, y, width, height })
      setVisible(true)
    })
  }

  const getPopoverPosition = () => {
    const offset = 8
    switch (side) {
      case 'top':
        return { top: position.y - offset, left: position.x, transform: [{ translateY: -100 }] }
      case 'bottom':
        return { top: position.y + position.height + offset, left: position.x }
      case 'left':
        return { top: position.y, left: position.x - offset, alignItems: 'flex-end' as const, transform: [{ translateX: -200 }] }
      case 'right':
        return { top: position.y, left: position.x + position.width + offset }
    }
  }

  return (
    <>
      <Pressable ref={triggerRef} onPress={handleOpen}>
        {trigger}
      </Pressable>
      <Modal visible={visible} transparent animationType="fade" onRequestClose={() => setVisible(false)} statusBarTranslucent>
        <Pressable style={styles.backdrop} onPress={() => setVisible(false)}>
          <View style={[styles.popover, getPopoverPosition()]}>
            <View style={styles.content}>
              {children}
            </View>
          </View>
        </Pressable>
      </Modal>
    </>
  )
}
