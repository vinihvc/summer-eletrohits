import { useCallback, useMemo } from 'react'

import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'

import { chakra, IconButton } from '@chakra-ui/react'

import { useStore } from 'store'

type PlayButtonProps = {
  songs: SongType[]
  index: number
}

export const PlayButton = chakra(
  ({ songs, index, ...props }: PlayButtonProps) => {
    const { isPlaying, togglePlay, currentSong, play } = useStore()

    const song = useMemo(() => songs[index], [songs, index])

    const isSameSong = currentSong()?.id === song.id

    const handleClick = useCallback(() => {
      if (isPlaying && isSameSong) {
        togglePlay()
      } else {
        play(songs, index)
      }
    }, [isPlaying, isSameSong, togglePlay, play, songs, index])

    const title = useMemo(() => (isPlaying ? 'Pause' : 'Play'), [isPlaying])

    return (
      <IconButton
        icon={isSameSong && isPlaying ? <BsPauseFill /> : <BsFillPlayFill />}
        variant={isSameSong ? 'solid' : 'ghost'}
        title={title}
        aria-label={title}
        bg="whiteAlpha.200"
        _hover={{ bg: 'whiteAlpha.400' }}
        onClick={handleClick}
        {...props}
      />
    )
  }
)
