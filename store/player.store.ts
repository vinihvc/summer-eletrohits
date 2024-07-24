import { type RefObject, createRef } from 'react'
import type ReactPlayer from 'react-player/youtube'
import type { YouTubePlayerProps } from 'react-player/youtube'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface PlayerStoreProps {
  /**
   * Reference to the player
   */
  $player: RefObject<ReactPlayer>
  /**
   * Whether the player is playing
   */
  isPlaying: boolean
  /**
   * Volume of the player
   */
  volume: number
  /**
   * Volume to save when muting
   */
  saveVolume: number
  /**
   * Progress of the player
   */
  progress: number
  /**
   * Actions to control the player
   */
  actions: {
    /**
     * Play a list of songs
     */
    play: (list: SongType[], index?: number) => void
    /**
     * Play a random song from the list
     */
    playRandom: (list: SongType[]) => void
    /**
     * Handle the progress of the player
     */
    onProgress: ({ played }: YouTubePlayerProps) => void
    /**
     * Toggle the play state of the player
     */
    togglePlay: () => void
    /**
     * Play the next song in the playlist
     */
    playNext: (index: number, playlist: AlbumType[]) => void
    /**
     * Play the previous song in the playlist
     */
    playPrevious: (index: number) => void
    /**
     * Toggle the volume of the player
     */
    toggleVolume: () => void
    /**
     * Change the volume of the player
     */
    changeVolume: (volume: number) => void
    /**
     * Increase the volume of the player
     */
    volumeUp: () => void
    /**
     * Decrease the volume of the player
     */
    volumeDown: () => void
    /**
     * Handle the progress of the player
     */
    handleProgress: (progress: number) => void
  }
}

const usePlayerStore = create<PlayerStoreProps>()(
  persist(
    (set, get) => ({
      $player: createRef(),
      isPlaying: false,
      volume: 1,
      progress: 0,
      saveVolume: 0,
      actions: {
        play: (list, index = 0) => {
          set((state) => ({
            ...state,
            playlist: list,
            isPlaying: true,
            currentIndex: index,
          }))
        },
        playRandom: (list) => {
          const randomIndex = Math.floor(Math.random() * list.length)

          set((state) => ({
            ...state,
            playlist: list,
            isPlaying: true,
            currentIndex: randomIndex,
          }))
        },
        onProgress: ({ played }) => {
          set((state) => ({
            ...state,
            progress: played,
          }))
        },
        togglePlay: () => {
          set((state) => ({
            ...state,
            isPlaying: !get().isPlaying,
          }))
        },
        playNext: (index: number, playlist: AlbumType[]) => {
          const hasNext = index < playlist.length - 1

          if (hasNext) {
            set((state) => ({
              ...state,
              isPlaying: true,
              currentIndex: index + 1,
            }))
          }
        },
        playPrevious: (index: number) => {
          const hasPrevious = index > 0

          if (hasPrevious) {
            set((state) => ({
              ...state,
              isPlaying: true,
              currentIndex: index - 1,
            }))
          }
        },
        toggleVolume: () => {
          if (get().volume === 0) {
            set((state) => ({
              ...state,
              volume: get().saveVolume,
            }))
          } else {
            set((state) => ({
              ...state,
              saveVolume: get().volume,
              volume: 0,
            }))
          }
        },
        changeVolume: (volume: number) => {
          set((state) => ({
            ...state,
            volume,
          }))
        },
        volumeUp: () => {
          if (get().volume < 1) {
            set((state) => ({
              ...state,
              volume: get().volume + 0.1,
            }))
          }
        },
        volumeDown: () => {
          if (get().volume > 0) {
            set((state) => ({
              ...state,
              volume: get().volume - 0.1,
            }))
          }
        },
        handleProgress: (value: number) => {
          set((state) => ({
            ...state,
            progress: value,
          }))

          get().$player?.current?.seekTo(value)
        },
      },
    }),
    { name: 'bearStore' },
  ),
)

export const usePlayerState = () =>
  usePlayerStore((state) => {
    return {
      $player: state.$player,
      isPlaying: state.isPlaying,
      volume: state.volume,
      progress: state.progress,
    }
  })

export const usePlayerActions = () => usePlayerStore((state) => state.actions)
