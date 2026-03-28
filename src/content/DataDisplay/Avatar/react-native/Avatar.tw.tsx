import { useState } from 'react'
import { Image, View, Text, ImageSourcePropType } from 'react-native'

interface AvatarProps {
  size?: 'sm' | 'md' | 'lg'
  source?: ImageSourcePropType
  fallback?: string
}

const sizeClasses = {
  sm: { container: 'w-8 h-8', text: 'text-xs' },
  md: { container: 'w-10 h-10', text: 'text-sm' },
  lg: { container: 'w-14 h-14', text: 'text-base' },
}

export default function Avatar({ size = 'md', source, fallback = '' }: AvatarProps) {
  const [imageError, setImageError] = useState(false)
  const s = sizeClasses[size]

  return (
    <View
      className={`${s.container} rounded-full items-center justify-center overflow-hidden bg-bg-subtle border border-border shrink-0`}
    >
      {source && !imageError ? (
        <Image
          source={source}
          className="w-full h-full"
          onError={() => setImageError(true)}
          accessibilityLabel={fallback}
        />
      ) : (
        <Text className={`${s.text} font-medium text-text-primary`}>
          {fallback}
        </Text>
      )}
    </View>
  )
}
