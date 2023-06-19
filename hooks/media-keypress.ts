import { useEffect } from 'react'
import { useStore } from 'store'

/**
 * Hook to listen for media keypresses
 */
export const useMediaKeyPress = () => {
  const { playNext, togglePlay, playPrevious, volumeUp, volumeDown } =
    useStore()

  useEffect(() => {
    const keyboardControl = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault()
        togglePlay()
      }

      if (e.code === 'ArrowRight') {
        e.preventDefault()
        playNext()
      }

      if (e.code === 'ArrowLeft') {
        e.preventDefault()
        playPrevious()
      }

      if (e.code === 'ArrowLeft') {
        e.preventDefault()
        playPrevious()
      }

      if (e.code === 'ArrowUp') {
        e.preventDefault()
        volumeUp()
      }

      if (e.code === 'ArrowDown') {
        e.preventDefault()
        volumeDown()
      }
    }

    document.addEventListener('keydown', keyboardControl)

    return () => {
      document.removeEventListener('keydown', keyboardControl)
    }
  }, [togglePlay, playNext, playPrevious, volumeUp, volumeDown])
}
