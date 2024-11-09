import { usePlayerActions } from '@/store/app.store'
import React from 'react'

/**
 * Hook to listen for media keypresses
 */
export const useMediaKeyPress = () => {
  const { nextSong, togglePlay, previousSong, volumeUp, volumeDown } =
    usePlayerActions()

  React.useEffect(() => {
    const keyboardControl = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault()
        togglePlay()
      }

      if (e.code === 'ArrowRight') {
        e.preventDefault()
        nextSong()
      }

      if (e.code === 'ArrowLeft') {
        e.preventDefault()
        previousSong()
      }

      if (e.code === 'ArrowLeft') {
        e.preventDefault()
        previousSong()
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
  }, [nextSong, previousSong, togglePlay, volumeDown, volumeUp])
}
