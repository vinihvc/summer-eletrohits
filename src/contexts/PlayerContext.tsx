import { createContext, useState, ReactNode, useContext } from 'react'

type PlayerContextData = {
  songList: SongType[]
  currentIndex: number
  isPlaying: boolean
  isLooping: boolean
  isShuffling: boolean
  playSong: (song: SongType) => void
  playPlayList: (list: SongType[]) => void
  setIsPlaying: (state: boolean) => void
  togglePlay: () => void
  toggleLoop: () => void
  toggleShuffle: () => void
  playNext: () => void
  playPrevious: () => void
  clearPlayerState: () => void
  currentSong: SongType
  hasNext: boolean
  hasPrevious: boolean
}

export const PlayerContext = createContext({} as PlayerContextData)

type PlayerContextProviderProps = {
  children: ReactNode
}

export function PlayerProvider({ children }: PlayerContextProviderProps) {
  const [songList, setSongList] = useState<SongType[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLooping, setIsLooping] = useState(false)
  const [isShuffling, setIsShuffling] = useState(false)

  function playSong(song: SongType) {
    setSongList([song])
    setCurrentIndex(0)
    setIsPlaying(true)
  }

  function playPlayList(list: SongType[]) {
    setSongList(list)
    setIsPlaying(true)
  }

  function togglePlay() {
    setIsPlaying(!isPlaying)
  }

  function toggleLoop() {
    setIsLooping(!isLooping)
  }

  function toggleShuffle() {
    setIsShuffling(!isShuffling)
  }

  function clearPlayerState() {
    setSongList([])
    setCurrentIndex(0)
  }

  const currentSong = songList[currentIndex]

  const hasPrevious = currentIndex > 0
  const hasNext = isShuffling || currentIndex + 1 < songList.length

  function playNext() {
    if (isShuffling) {
      const nextRandomSongIndex = Math.floor(Math.random() * songList.length)

      setCurrentIndex(nextRandomSongIndex)
    } else if (hasNext) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  function playPrevious() {
    if (hasPrevious) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <PlayerContext.Provider
      value={{
        songList,
        currentIndex,
        playSong,
        playPlayList,
        playNext,
        playPrevious,
        isPlaying,
        isLooping,
        isShuffling,
        togglePlay,
        setIsPlaying,
        hasNext,
        hasPrevious,
        toggleLoop,
        toggleShuffle,
        clearPlayerState,
        currentSong
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}

export const usePlayer = () => {
  return useContext(PlayerContext)
}
