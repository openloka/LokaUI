import { View, Text, Pressable, StyleSheet } from 'react-native'

interface PaginationProps {
  total: number
  current: number
  siblingCount?: number
  onChange: (page: number) => void
}

function getPages(total: number, current: number, siblingCount: number): (number | '...')[] {
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
    <View style={styles.container}>
      <Pressable
        style={[styles.button, current === 1 && styles.buttonDisabled]}
        disabled={current === 1}
        onPress={() => onChange(current - 1)}
        accessibilityLabel="Previous page"
      >
        <Text style={styles.buttonText}>‹</Text>
      </Pressable>

      {pages.map((page, i) =>
        page === '...' ? (
          <View key={`dots-${i}`} style={styles.dots}>
            <Text style={styles.dotsText}>…</Text>
          </View>
        ) : (
          <Pressable
            key={page}
            style={[styles.button, page === current && styles.buttonActive]}
            onPress={() => onChange(page as number)}
            accessibilityLabel={`Page ${page}`}
          >
            <Text style={[styles.buttonText, page === current && styles.buttonTextActive]}>
              {page}
            </Text>
          </Pressable>
        )
      )}

      <Pressable
        style={[styles.button, current === total && styles.buttonDisabled]}
        disabled={current === total}
        onPress={() => onChange(current + 1)}
        accessibilityLabel="Next page"
      >
        <Text style={styles.buttonText}>›</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  button: {
    width: 36,
    height: 36,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#2e2e3e',
  },
  buttonActive: {
    backgroundColor: '#6366f1',
    borderColor: '#6366f1',
  },
  buttonDisabled: {
    opacity: 0.4,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#9ca3af',
  },
  buttonTextActive: {
    color: '#ffffff',
  },
  dots: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotsText: {
    fontSize: 14,
    color: '#6b7280',
  },
})
