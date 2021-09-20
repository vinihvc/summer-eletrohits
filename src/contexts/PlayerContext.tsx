import {
  createContext,
  useState,
  ReactNode,
  useContext,
  RefObject,
  useRef,
  useEffect
} from 'react'

import ReactPlayer, { ReactPlayerProps } from 'react-player/lazy'

import storage from 'services/storage'

type PlayerContextData = {
  songList: SongType[]
  currentIndex: number
  isPlaying: boolean
  isLooping: boolean
  isShuffling: boolean
  playSong: (song: SongType) => void
  playPlayList: (list: SongType[]) => void
  handleClickSongItem: (song: SongType) => void
  favoriteSongs: SongType[]
  handleFavoriteSong: (song: SongType) => void
  handleUnfavoriteSong: (song: SongType) => void
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
  volume: number
  setVolume: (volume: number) => void
  toggleVolume: () => void
  $player: RefObject<ReactPlayer>
  progress: number
  onProgress: (progress: ReactPlayerProps) => void
  handleProgress: (progress: number) => void
}

export const PlayerContext = createContext({} as PlayerContextData)

type PlayerContextProviderProps = {
  children: ReactNode
}

export const PlayerProvider = ({ children }: PlayerContextProviderProps) => {
  const [favoriteSongs, setFavoriteSongs] = useState<SongType[]>([])
  const [songList, setSongList] = useState<SongType[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLooping, setIsLooping] = useState(false)
  const [isShuffling, setIsShuffling] = useState(false)
  const [volume, setVolume] = useState(1)
  const [saveVolume, setSaveVolume] = useState(0)
  const [progress, setProgress] = useState(0)
  const $player = useRef() as RefObject<ReactPlayer>

  useEffect(() => {
    const getFavoriteSongs = async () => {
      const songs = await storage.getSongs()

      setFavoriteSongs(songs)
    }

    getFavoriteSongs()
  }, [])

  const playSong = (song: SongType) => {
    setSongList([song])
    setCurrentIndex(0)
    setIsPlaying(true)
  }

  const playPlayList = (list: SongType[]) => {
    setCurrentIndex(0)
    setSongList(list)
    setIsPlaying(true)
  }

  const handleClickSongItem = (song: SongType) => {
    if (songList.find((item) => item.id === song.id)) {
      const songIndex = songList.findIndex((item) => item.id === song.id)

      setCurrentIndex(songIndex)
    } else {
      setSongList([song])
    }

    setIsPlaying(true)
  }

  const handleFavoriteSong = async (song: SongType) => {
    await storage.setSong(song)

    const songs = await storage.getSongs()

    setFavoriteSongs(songs)
  }

  const handleUnfavoriteSong = async (song: SongType) => {
    await storage.removeSong(song)

    const songs = await storage.getSongs()

    setFavoriteSongs(songs)
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleLoop = () => {
    setIsLooping(!isLooping)
  }

  const toggleShuffle = () => {
    setIsShuffling(!isShuffling)
  }

  const clearPlayerState = () => {
    setSongList([])
    setCurrentIndex(0)
  }

  const toggleVolume = () => {
    if (volume === 0) {
      setVolume(saveVolume)
    } else {
      setSaveVolume(volume)
      setVolume(0)
    }
  }

  const onProgress = ({ played }: ReactPlayerProps) => {
    setProgress(played)
  }

  const handleProgress = (value: number) => {
    setProgress(value)

    $player.current?.seekTo(value)
  }

  const currentSong = songList[currentIndex]

  const hasPrevious = currentIndex > 0
  const hasNext = isShuffling || currentIndex + 1 < songList.length

  const playNext = () => {
    if (isShuffling) {
      const nextRandomSongIndex = Math.floor(Math.random() * songList.length)

      setCurrentIndex(nextRandomSongIndex)
    } else if (hasNext) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const playPrevious = () => {
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
        handleClickSongItem,
        favoriteSongs,
        handleFavoriteSong,
        handleUnfavoriteSong,
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
        currentSong,
        volume,
        setVolume,
        toggleVolume,
        $player,
        progress,
        onProgress,
        handleProgress
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}

export const usePlayer = () => {
  return useContext(PlayerContext)
}
