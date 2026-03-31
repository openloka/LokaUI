import { useEffect, useRef } from 'react'
import { Animated, StyleSheet } from 'react-native'

interface SkeletonProps {
  variant?: 'text' | 'circular' | 'rectangular'
  width?: number | string
  height?: number | string
}

export default function Skeleton({
  variant = 'text',
  width = '100%',
  height = variant === 'circular' ? width : variant === 'text' ? 16 : 120,
}: SkeletonProps) {
  const opacity = useRef(new Animated.Value(0.4)).current

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.4,
          duration: 800,
          useNativeDriver: true,
        }),
      ]),
    )
    animation.start()
    return () => animation.stop()
  }, [opacity])

  const borderRadius =
    variant === 'circular' ? 9999 : variant === 'text' ? 4 : 8

  return (
    <Animated.View
      accessibilityLabel="Loading"
      style={[
        styles.base,
        {
          width: width as number,
          height: height as number,
          borderRadius,
          opacity,
        },
      ]}
    />
  )
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: '#404040',
  },
})
