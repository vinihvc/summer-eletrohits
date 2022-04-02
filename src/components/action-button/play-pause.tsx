import { usePlayer } from 'contexts/player'

import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'

import { chakra, IconButton } from '@chakra-ui/react'

type PlayButtonProps = {
  song: SongType
}

export const PlayButton = chakra(({ song, ...props }: PlayButtonProps) => {
  const { isPlaying, togglePlay, currentSong, handleClickSongItem } =
    usePlayer()

  const isSameSong = currentSong?.id === song.id

  const handleClick = () => {
    isPlaying && isSameSong ? togglePlay() : handleClickSongItem(song)
  }

  return (
    <IconButton
      icon={isSameSong && isPlaying ? <BsPauseFill /> : <BsFillPlayFill />}
      variant={isSameSong ? 'solid' : 'ghost'}
      aria-label={isPlaying ? 'Pause' : 'Play'}
      bg="whiteAlpha.200"
      _hover={{ bg: 'whiteAlpha.300' }}
      cursor="pointer"
      borderRadius="full"
      onClick={handleClick}
      {...props}
    />
  )
})
