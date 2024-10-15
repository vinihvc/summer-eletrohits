import React from 'react'

/**
 * useBypassFirstRender is a hook that allows you to bypass the first render of a component.
 *
 * @example
 * ```tsx
 * const isFirstRender = useBypassFirstRender()
 * if (isFirstRender) return // This will only run once
 * ```
 */
export const useBypassFirstRender = () => {
  const bypass = React.useRef(true)

  React.useEffect(() => {
    if (bypass.current) {
      bypass.current = false
    }
  }, [])

  return bypass.current
}
