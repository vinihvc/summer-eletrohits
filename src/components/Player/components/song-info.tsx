import { usePlayer } from 'contexts/PlayerContext'

import { chakra } from '@chakra-ui/system'
import { Flex, Text } from '@chakra-ui/layout'

import FavoriteButton from 'components/FavoriteButton'

const SongInfo = ({ ...props }) => {
  const { currentSong } = usePlayer()

  return (
    <Flex align="center" {...props}>
      <Flex direction="column">
        <Text
          as="span"
          fontSize="sm"
          maxW={{ base: 150, md: 200 }}
          fontWeight="medium"
          isTruncated
        >
          {currentSong?.name}
        </Text>

        <Text as="span" fontSize="xs" maxW={{ base: 150, md: 200 }} isTruncated>
          {currentSong?.singer}
        </Text>
      </Flex>

      {currentSong && (
        <FavoriteButton song={currentSong} ml={{ base: 3, md: 5 }} />
      )}
    </Flex>
  )
}

export default chakra(SongInfo)
