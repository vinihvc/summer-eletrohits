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

    const song = songs[index]

    const isSameSong = currentSong()?.id === song.id

    const handleClick = () => {
      isPlaying && isSameSong ? togglePlay() : play(songs, index)
    }

    return (
      <IconButton
        icon={isSameSong && isPlaying ? <BsPauseFill /> : <BsFillPlayFill />}
        title={isPlaying ? 'Pause' : 'Play'}
        variant={isSameSong ? 'solid' : 'ghost'}
        bg="whiteAlpha.200"
        _hover={{ bg: 'whiteAlpha.300' }}
        aria-label={isPlaying ? 'Pause' : 'Play'}
        onClick={handleClick}
        {...props}
      />
    )
  }
)
