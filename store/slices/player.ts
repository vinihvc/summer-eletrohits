import { type RefObject, createRef } from 'react'
import type ReactPlayer from 'react-player/youtube'
import type { YouTubePlayerProps } from 'react-player/youtube'
import type { StateCreator } from 'zustand'

import type { SongSlice } from './song'

export type PlayerSlice = {
  $player: RefObject<ReactPlayer>
  isPlaying: boolean
  volume: number
  saveVolume: number
  progress: number
  play: (list: SongType[], index?: number) => void
  playRandom: (list: SongType[]) => void
  onProgress: ({ played }: YouTubePlayerProps) => void
  togglePlay: () => void
  playNext: () => void
  playPrevious: () => void
  toggleVolume: () => void
  changeVolume: (volume: number) => void
  volumeUp: () => void
  volumeDown: () => void
  handleProgress: (progress: number) => void
}

export const playerSlice: StateCreator<
  PlayerSlice & SongSlice,
  [],
  [],
  PlayerSlice
> = (set, get) => {
  return {
    $player: createRef(),
    isPlaying: false,
    volume: 1,
    progress: 0,
    saveVolume: 0,
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
  }
}
