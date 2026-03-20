import { useCallback } from 'react'
import { useQueryStates, parseAsString, parseAsBoolean, parseAsInteger } from 'nuqs'

function createParser(defaultValue) {
  if (typeof defaultValue === 'boolean') return parseAsBoolean.withDefault(defaultValue)
  if (typeof defaultValue === 'number') return parseAsInteger.withDefault(defaultValue)
  return parseAsString.withDefault(defaultValue)
}

export function useComponentProps(defaultProps) {
  const parsers = {}
  for (const [key, value] of Object.entries(defaultProps)) {
    parsers[key] = createParser(value)
  }

  const [queryState, setQueryState] = useQueryStates(parsers)
  const props = { ...defaultProps, ...queryState }

  const updateProp = useCallback((key, value) => {
    setQueryState({ [key]: value === defaultProps[key] ? null : value })
  }, [defaultProps, setQueryState])

  const resetProps = useCallback(() => {
    const nulled = {}
    for (const key of Object.keys(defaultProps)) nulled[key] = null
    setQueryState(nulled)
  }, [defaultProps, setQueryState])

  return { props, updateProp, resetProps }
}
