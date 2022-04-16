import { createRef, RefObject } from 'react'

import ReactPlayer, { YouTubePlayerProps } from 'react-player/youtube'

import { StoreSlice } from 'store'

import { SongSlice } from './song'

export type PlayerSlice = {
  $player: RefObject<ReactPlayer>
  isPlaying: boolean
  volume: number
  saveVolume: number
  progress: number
  onProgress: ({ played }: YouTubePlayerProps) => void
  onEnded: () => void
  togglePlay: () => void
  toggleVolume: () => void
  changeVolume: (volume: number) => void
  volumeUp: () => void
  volumeDown: () => void
  handleProgress: (progress: number) => void
}

export const playerSlice: StoreSlice<PlayerSlice, SongSlice> = (set, get) => {
  return {
    $player: createRef(),
    isPlaying: false,
    volume: 1,
    progress: 0,
    saveVolume: 0,
    onProgress: ({ played }) => {
      set((state) => ({
        ...state,
        progress: played
      }))
    },
    onEnded: () => {
      get().playNext()
    },
    togglePlay: () => {
      set((state) => ({
        ...state,
        isPlaying: !get().isPlaying
      }))
    },
    toggleVolume: () => {
      if (get().volume === 0) {
        set((state) => ({
          ...state,
          volume: get().saveVolume
        }))
      } else {
        set((state) => ({
          ...state,
          saveVolume: get().volume,
          volume: 0
        }))
      }
    },
    changeVolume: (volume: number) => {
      set((state) => ({
        ...state,
        volume
      }))
    },
    volumeUp: () => {
      if (get().volume < 1) {
        set((state) => ({
          ...state,
          volume: get().volume + 0.1
        }))
      }
    },
    volumeDown: () => {
      if (get().volume > 0) {
        set((state) => ({
          ...state,
          volume: get().volume - 0.1
        }))
      }
    },
    handleProgress: (value: number) => {
      set((state) => ({
        ...state,
        progress: value
      }))

      get().$player?.current?.seekTo(value)
    }
  }
}
