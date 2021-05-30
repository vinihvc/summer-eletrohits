import { usePlayer } from 'contexts/PlayerContext'

import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'

import { chakra } from '@chakra-ui/system'
import { IconButton } from '@chakra-ui/button'

type PlayButtonProps = {
  song: SongType
}

const PlayButton = ({ song, ...props }: PlayButtonProps) => {
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
      borderRadius="full"
      onClick={handleClick}
      _hover={{ cursor: 'pointer' }}
      {...props}
    />
  )
}

export default chakra(PlayButton)
