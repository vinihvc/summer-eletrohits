import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { type MusicSlice, createMusicSlice } from './music.slice'
import { type PlayerSlice, createPlayerSlice } from './player.slice'

const useAppStore = create<MusicSlice & PlayerSlice>()(
  persist(
    (...state) => ({
      ...createMusicSlice(...state),
      ...createPlayerSlice(...state),
    }),
    {
      name: 'eletrohits-store',
      partialize: (state) => ({ liked: state.liked, volume: state.volume }),
      version: 1,
    },
  ),
)

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
 * Hook to get the player state
 */
export const usePlayerState = () =>
  useAppStore((state) => ({
    $player: state.$player,
    isPlaying: state.isPlaying,
    volume: state.volume,
    isMuted: state.isMuted,
    progress: state.progress,
  }))

/**
 * Hook to get the music actions
 */
export const useMusicActions = () => useAppStore((state) => state.musicActions)

/**
 * Hook to get the player actions
 */
export const usePlayerActions = () =>
  useAppStore((state) => state.playerActions)
