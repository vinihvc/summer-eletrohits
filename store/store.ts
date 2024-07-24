import { create } from 'zustand'
import { type MusicSlice, createMusicSlice } from './music.slice'
import { type PlayerSlice, createPlayerSlice } from './player.slice'

const useAppStore = create<MusicSlice & PlayerSlice>()((...state) => ({
  ...createMusicSlice(...state),
  ...createPlayerSlice(...state),
}))

/**
 * Hook to get the music state
 */
export const useMusicState = () =>
  useAppStore((state) => ({
    playlist: state.playlist,
    liked: state.liked,
    currentIndex: state.currentIndex,
  }))

/**
 * Hook to get the music actions
 */
export const useMusicActions = () => useAppStore((state) => state.musicActions)

/**
 * Hook to get the player state
 */
export const usePlayerState = () =>
  useAppStore((state) => ({
    $player: state.$player,
    isPlaying: state.isPlaying,
    volume: state.volume,
    saveVolume: state.saveVolume,
    progress: state.progress,
  }))

/**
 * Hook to get the player actions
 */
export const usePlayerActions = () =>
  useAppStore((state) => state.playerActions)
