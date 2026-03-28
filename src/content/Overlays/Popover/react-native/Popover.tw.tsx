import { useState, useRef } from 'react'
import { View, Text, Pressable, Modal } from 'react-native'

interface PopoverProps {
  open?: boolean
  side?: 'top' | 'bottom' | 'left' | 'right'
  trigger?: React.ReactNode
  children?: React.ReactNode
}

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
        return { bottom: undefined, top: position.y - offset, left: position.x, transform: [{ translateY: -100 }] }
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
        <Pressable className="flex-1" onPress={() => setVisible(false)}>
          <View style={[{ position: 'absolute' }, getPopoverPosition()]}>
            <View className="min-w-[200px] rounded-xl border border-border bg-bg-card p-4 shadow-lg">
              {children}
            </View>
          </View>
        </Pressable>
      </Modal>
    </>
  )
}
