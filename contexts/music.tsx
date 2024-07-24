'use client'

import React, { createContext } from 'react'

import { createStore, useStore } from 'zustand'
import { persist } from 'zustand/middleware'

interface MusicState {
  /**
   * List of songs in the playlist
   */
  playlist: SongType[]
  /**
   * List of liked songs
   */
  liked: SongType[]
  /**
   * Index of the current song in the playlist
   */
  currentIndex: number
}

interface MusicActions {
  actions: {
    /**
     * Get the current song
     */
    currentSong: () => SongType
    /**
     * Like a song
     */
    like: (song: SongType) => void
    /**
     * Dislike a song
     */
    dislike: (song: SongType) => void
  }
}

interface MusicStore extends ReturnType<typeof musicStore> {}

interface MusicProps extends MusicState, MusicActions {}

const DEFAULT_PROPS: MusicState = {
  playlist: [],
  liked: [],
  currentIndex: 0,
}

const musicStore = (initProps?: Partial<MusicState>) => {
  return createStore<MusicProps>()(
    persist(
      (set, get) => ({
        ...DEFAULT_PROPS,
        ...initProps,
        actions: {
          currentSong: () => get().playlist[get().currentIndex],
          like: (song) => {
            set((state) => {
              const liked = state.liked.concat(song)

              return { ...state, liked }
            })
          },
          dislike: (song) => {
            set((state) => {
              const liked = state.liked.filter((s) => s.id !== song.id)

              return { ...state, liked }
            })
          },
        },
      }),
      {
        name: 'eletrohits-music',
        getStorage: () => localStorage,
      },
    ),
  )
}

const MusicContext = createContext<MusicStore | null>(null)

export const MusicProvider = ({ children }: React.PropsWithChildren) => {
  const storeRef = React.useRef<MusicStore>()

  if (!storeRef.current) {
    storeRef.current = musicStore()
  }

  return (
    <MusicContext.Provider value={storeRef.current}>
      {children}
    </MusicContext.Provider>
  )
}

const useMusicStore = <T,>(selector: (store: MusicProps) => T): T => {
  const store = React.useContext(MusicContext)

  if (!store) throw new Error('Missing MusicProvider in the tree')

  return useStore(store, selector)
}

export const useMusicState = () =>
  useMusicStore((state) => {
    return {
      playlist: state.playlist,
      liked: state.liked,
      currentIndex: state.currentIndex,
    }
  })

export const useMusicActions = () => useMusicStore((state) => state.actions)
