import React from 'react'
import { createStore, useStore } from 'zustand'

interface SongProps {
  isContextOpen?: boolean
  isDropdownOpen?: boolean
}

interface SongState extends SongProps {
  onChangeContext: (value: boolean) => void
  onChangeDropdown: (value: boolean) => void
}

type SongStore = ReturnType<typeof createSongStore>

const createSongStore = (initProps?: Partial<SongProps>) => {
  const DEFAULT_PROPS: SongProps = {
    isContextOpen: false,
    isDropdownOpen: false,
  }

  return createStore<SongState>()((set) => ({
    ...DEFAULT_PROPS,
    ...initProps,
    onChangeContext: (value) => set({ isContextOpen: value }),
    onChangeDropdown: (value) => set({ isDropdownOpen: value }),
  }))
}

export const SongContext = React.createContext<SongStore | null>(null)

type SongProviderProps = React.PropsWithChildren<SongProps>

export const SongProvider = ({ children, ...props }: SongProviderProps) => {
  const storeRef = React.useRef<SongStore | null>(null)
  if (!storeRef.current) {
    storeRef.current = createSongStore(props)
  }

  return (
    <SongContext.Provider value={storeRef.current}>
      {children}
    </SongContext.Provider>
  )
}

function useSongContext<T>(selector: (state: SongState) => T): T {
  const store = React.useContext(SongContext)
  if (!store) throw new Error('Missing SongContext.Provider in the tree')

  return useStore(store, selector)
}

export const useSong = () => useSongContext((state) => state)
