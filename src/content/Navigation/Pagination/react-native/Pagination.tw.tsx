import { View, Text, Pressable } from 'react-native'

interface PaginationProps {
  total: number
  current: number
  siblingCount?: number
  onChange: (page: number) => void
}

function getPages(total: number, current: number, siblingCount: number): (number | '...')[] {
  const delta = siblingCount + 2
  const range: number[] = []
  const pages: (number | '...')[] = []

  for (
    let i = Math.max(2, current - siblingCount);
    i <= Math.min(total - 1, current + siblingCount);
    i++
  ) {
    range.push(i)
  }

  if (range[0] > 2) range.unshift(-1)
  if (range[range.length - 1] < total - 1) range.push(-2)

  pages.push(1)
  range.forEach((r) => pages.push(r < 0 ? '...' : r))
  if (total > 1) pages.push(total)

  return pages
}

export default function Pagination({ total, current, siblingCount = 1, onChange }: PaginationProps) {
  const pages = getPages(total, current, siblingCount)

  return (
    <View className="flex-row items-center gap-1">
      <Pressable
        className={`w-9 h-9 rounded-lg items-center justify-center border border-border ${current === 1 ? 'opacity-40' : ''}`}
        disabled={current === 1}
        onPress={() => onChange(current - 1)}
        accessibilityLabel="Previous page"
      >
        <Text className="text-text-secondary text-sm">‹</Text>
      </Pressable>

      {pages.map((page, i) =>
        page === '...' ? (
          <View key={`dots-${i}`} className="w-9 h-9 items-center justify-center">
            <Text className="text-text-muted text-sm">…</Text>
          </View>
        ) : (
          <Pressable
            key={page}
            className={`w-9 h-9 rounded-lg items-center justify-center border ${
              page === current
                ? 'bg-accent border-accent'
                : 'border-border'
            }`}
            onPress={() => onChange(page as number)}
            accessibilityLabel={`Page ${page}`}
          >
            <Text
              className={`text-sm font-medium ${page === current ? 'text-white' : 'text-text-secondary'}`}
            >
              {page}
            </Text>
          </Pressable>
        )
      )}

      <Pressable
        className={`w-9 h-9 rounded-lg items-center justify-center border border-border ${current === total ? 'opacity-40' : ''}`}
        disabled={current === total}
        onPress={() => onChange(current + 1)}
        accessibilityLabel="Next page"
      >
        <Text className="text-text-secondary text-sm">›</Text>
      </Pressable>
    </View>
  )
}
