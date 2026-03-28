import { useEffect, useRef } from 'react'
import { Modal, View, Text, Pressable, Animated, Dimensions, useWindowDimensions } from 'react-native'

interface DrawerProps {
  open?: boolean
  side?: 'left' | 'right'
  onClose?: () => void
  children?: React.ReactNode
}

export default function Drawer({ open = false, side = 'right', onClose, children }: DrawerProps) {
  const { width: screenWidth } = useWindowDimensions()
  const drawerWidth = Math.min(screenWidth * 0.8, 320)
  const translateX = useRef(new Animated.Value(side === 'right' ? drawerWidth : -drawerWidth)).current

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: open ? 0 : side === 'right' ? drawerWidth : -drawerWidth,
      duration: 250,
      useNativeDriver: true,
    }).start()
  }, [open, side, drawerWidth])

  return (
    <Modal
      visible={open}
      transparent
      animationType="fade"
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <View className="flex-1 flex-row">
        {side === 'right' && (
          <Pressable className="flex-1 bg-black/50" onPress={onClose} />
        )}
        <Animated.View
          style={{ width: drawerWidth, transform: [{ translateX }] }}
          className="bg-bg-card border-border h-full border-l"
        >
          <View className="flex-row items-center justify-between border-b border-border px-4 py-3">
            <View />
            <Pressable onPress={onClose} accessibilityLabel="Close drawer" className="p-1">
              <Text className="text-text-muted text-lg">✕</Text>
            </Pressable>
          </View>
          <View className="flex-1 p-4">{children}</View>
        </Animated.View>
        {side === 'left' && (
          <Pressable className="flex-1 bg-black/50" onPress={onClose} />
        )}
      </View>
    </Modal>
  )
}
