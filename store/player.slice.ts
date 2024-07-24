import type ReactPlayer from 'react-player/youtube'
import type { YouTubePlayerProps } from 'react-player/youtube'

import React from 'react'
import type { StateCreator } from 'zustand'
import type { MusicSlice } from './music.slice'

export interface PlayerSlice {
  /**
   * Reference to the player
   */
  $player: React.RefObject<ReactPlayer>
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
   *  Actions to manage the player
   */
  playerActions: {
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
    playNext: () => void
    /**
     * Play the previous song in the playlist
     */
    playPrevious: () => void
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

export const createPlayerSlice: StateCreator<
  PlayerSlice & MusicSlice,
  [],
  [],
  PlayerSlice
> = (set, get) => {
  return {
    $player: React.createRef(),
    isPlaying: false,
    volume: 1,
    progress: 0,
    saveVolume: 0,
    playerActions: {
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
      playNext: () => {
        const hasNext = get().currentIndex < get().playlist.length - 1

        if (hasNext) {
          set((state) => ({
            ...state,
            isPlaying: true,
            currentIndex: get().currentIndex + 1,
          }))
        }
      },
      playPrevious: () => {
        const hasPrevious = get().currentIndex > 0

        if (hasPrevious) {
          set((state) => ({
            ...state,
            isPlaying: true,
            currentIndex: get().currentIndex - 1,
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
  }
}
