import * as React from 'react'

export const useDevice = () => {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const userAgent =
      typeof window.navigator === 'undefined' ? '' : navigator.userAgent
    const mobile = Boolean(
      userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i,
      ),
    )
    setIsMobile(mobile)
  }, [])

  return { isMobile }
}
