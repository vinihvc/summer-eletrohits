import React from 'react'

/**
 * Hook to handle long press events.
 *
 * @example
 * ```tsx
 * const longpress = useLongPress(handleLongPress)
 * <button {...longpress}>Long press</button>
 * ```
 */
export const useLongPress = (callback: () => unknown, ms = 500) => {
  const [startLongPress, setStartLongPress] = React.useState(false)
  const timerRef = React.useRef<NodeJS.Timeout | null>(null)

  React.useEffect(() => {
    if (startLongPress) {
      timerRef.current = setTimeout(callback, ms)

      return () => {
        if (timerRef.current) {
          clearTimeout(timerRef.current)
        }
      }
    }
  }, [callback, ms, startLongPress])

  return {
    onMouseDown: () => setStartLongPress(true),
    onMouseUp: () => setStartLongPress(false),
    onMouseLeave: () => setStartLongPress(false),
    onTouchStart: () => setStartLongPress(true),
    onTouchEnd: () => setStartLongPress(false),
  }
}
