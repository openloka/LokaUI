import { useEffect, useRef } from 'react'
import { Modal, View, Text, Pressable, Animated, StyleSheet, useWindowDimensions } from 'react-native'

interface DrawerProps {
  open?: boolean
  side?: 'left' | 'right'
  onClose?: () => void
  children?: React.ReactNode
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  drawer: {
    height: '100%',
    backgroundColor: '#111827',
    borderLeftWidth: 1,
    borderColor: '#374151',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#374151',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  closeButton: {
    padding: 4,
  },
  closeText: {
    color: '#6b7280',
    fontSize: 18,
  },
  content: {
    flex: 1,
    padding: 16,
  },
})

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
      <View style={styles.root}>
        {side === 'right' && (
          <Pressable style={styles.backdrop} onPress={onClose} />
        )}
        <Animated.View
          style={[styles.drawer, { width: drawerWidth, transform: [{ translateX }] }]}
        >
          <View style={styles.header}>
            <View />
            <Pressable style={styles.closeButton} onPress={onClose} accessibilityLabel="Close drawer">
              <Text style={styles.closeText}>✕</Text>
            </Pressable>
          </View>
          <View style={styles.content}>{children}</View>
        </Animated.View>
        {side === 'left' && (
          <Pressable style={styles.backdrop} onPress={onClose} />
        )}
      </View>
    </Modal>
  )
}
