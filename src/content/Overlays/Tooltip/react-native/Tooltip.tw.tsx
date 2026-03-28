import { useState, useRef } from 'react'
import { View, Text, Pressable, Modal } from 'react-native'

interface TooltipProps {
  content?: string
  side?: 'top' | 'bottom' | 'left' | 'right'
  children: React.ReactNode
}

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
        return { bottom: position.y > 0 ? undefined : 0, top: position.y - offset, left: position.x, minWidth: position.width, alignItems: 'center' as const, transform: [{ translateY: -32 }] }
      case 'bottom':
        return { top: position.y + position.height + offset, left: position.x, minWidth: position.width, alignItems: 'center' as const }
      case 'left':
        return { top: position.y, right: undefined, left: position.x - offset, alignItems: 'flex-end' as const, transform: [{ translateY: position.height / 2 - 16 }] }
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
        <Pressable className="flex-1" onPress={() => setVisible(false)}>
          <View style={[{ position: 'absolute' }, getTooltipPosition()]}>
            <View className="rounded-lg bg-gray-800 px-3 py-2 shadow-lg">
              <Text className="text-xs font-medium text-white">{content}</Text>
            </View>
          </View>
        </Pressable>
      </Modal>
    </>
  )
}
