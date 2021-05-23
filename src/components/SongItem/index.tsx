import { Box, Flex } from '@chakra-ui/layout'

import { FiPauseCircle, FiPlayCircle } from 'react-icons/fi'

import { usePlayer } from 'contexts/PlayerContext'

export type SongItemProps = {
  song: SongType
}

const SongItem = ({ song }: SongItemProps) => {
  const { playSong, currentSong, isPlaying, togglePlay } = usePlayer()

  return (
    <Flex mb={2}>
      <Flex flex="6 1 0" mr={5} fontWeight="medium">
        {song.name}
      </Flex>

      <Flex flex="9 1 0">{song.singer}</Flex>

      <Box
        onClick={
          isPlaying && currentSong?.id === song.id
            ? togglePlay
            : () => playSong(song)
        }
        _hover={{ cursor: 'pointer' }}
      >
        {currentSong?.id === song.id && isPlaying ? (
          <FiPauseCircle size="20px" />
        ) : (
          <FiPlayCircle size="20px" />
        )}
      </Box>
    </Flex>
  )
}

export default SongItem
