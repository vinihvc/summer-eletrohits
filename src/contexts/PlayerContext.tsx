import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect
} from 'react'

type PlayerContextData = {
  song?: AlbumType
  setSong?: (song?: AlbumType) => void
  isPlaying: boolean
  togglePlay: () => void
}

export const PlayerContext = createContext({} as PlayerContextData)

type PlayerProviderProps = {
  children: ReactNode
}

export function PlayerProvider({ children }: PlayerProviderProps) {
  const [song, setSong] = useState<AlbumType>()
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    setIsPlaying(true)
  }, [song])

  function togglePlay() {
    setIsPlaying(!isPlaying)
  }

  return (
    <PlayerContext.Provider
      value={{
        isPlaying,
        togglePlay,
        song,
        setSong
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}

export const usePlayer = () => {
  return useContext(PlayerContext)
}
