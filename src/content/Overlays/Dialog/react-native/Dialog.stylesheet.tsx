import { Modal, View, Text, Pressable, StyleSheet } from 'react-native'

interface DialogProps {
  open?: boolean
  title?: string
  onClose?: () => void
  children?: React.ReactNode
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: 24,
  },
  container: {
    width: '100%',
    maxWidth: 384,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#374151',
    backgroundColor: '#111827',
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#f9fafb',
  },
  closeButton: {
    padding: 4,
  },
  closeText: {
    color: '#6b7280',
    fontSize: 18,
  },
})

export default function Dialog({ open = false, title, onClose, children }: DialogProps) {
  return (
    <Modal
      visible={open}
      transparent
      animationType="fade"
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <Pressable style={styles.backdrop} onPress={onClose}>
        <Pressable style={styles.container} onPress={() => {}}>
          {title && (
            <View style={styles.header}>
              <Text style={styles.title}>{title}</Text>
              <Pressable style={styles.closeButton} onPress={onClose} accessibilityLabel="Close">
                <Text style={styles.closeText}>✕</Text>
              </Pressable>
            </View>
          )}
          <View>{children}</View>
        </Pressable>
      </Pressable>
    </Modal>
  )
}
