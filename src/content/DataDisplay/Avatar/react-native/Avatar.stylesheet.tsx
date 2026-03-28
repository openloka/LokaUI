import { useState } from 'react'
import { Image, View, Text, StyleSheet, ImageSourcePropType } from 'react-native'

interface AvatarProps {
  size?: 'sm' | 'md' | 'lg'
  source?: ImageSourcePropType
  fallback?: string
}

const sizeStyles = StyleSheet.create({
  sm: { width: 32, height: 32 },
  md: { width: 40, height: 40 },
  lg: { width: 56, height: 56 },
})

const textSizeStyles = StyleSheet.create({
  sm: { fontSize: 12 },
  md: { fontSize: 14 },
  lg: { fontSize: 16 },
})

const styles = StyleSheet.create({
  container: {
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: '#1f2937',
    borderWidth: 1,
    borderColor: '#374151',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  fallback: {
    fontWeight: '500',
    color: '#f9fafb',
  },
})

export default function Avatar({ size = 'md', source, fallback = '' }: AvatarProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <View style={[styles.container, sizeStyles[size]]}>
      {source && !imageError ? (
        <Image
          source={source}
          style={styles.image}
          onError={() => setImageError(true)}
          accessibilityLabel={fallback}
        />
      ) : (
        <Text style={[styles.fallback, textSizeStyles[size]]}>{fallback}</Text>
      )}
    </View>
  )
}
