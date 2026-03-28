import { Modal, View, Text, Pressable } from 'react-native'

interface DialogProps {
  open?: boolean
  title?: string
  onClose?: () => void
  children?: React.ReactNode
}

export default function Dialog({ open = false, title, onClose, children }: DialogProps) {
  return (
    <Modal
      visible={open}
      transparent
      animationType="fade"
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <Pressable
        className="flex-1 items-center justify-center bg-black/60 px-6"
        onPress={onClose}
      >
        <Pressable
          className="w-full max-w-sm rounded-2xl border border-border bg-bg-card p-6 shadow-lg"
          onPress={() => {}}
        >
          {title && (
            <View className="mb-4 flex-row items-center justify-between">
              <Text className="text-lg font-semibold text-text-primary">{title}</Text>
              <Pressable onPress={onClose} accessibilityLabel="Close" className="p-1">
                <Text className="text-text-muted text-lg">✕</Text>
              </Pressable>
            </View>
          )}
          <View>{children}</View>
        </Pressable>
      </Pressable>
    </Modal>
  )
}
