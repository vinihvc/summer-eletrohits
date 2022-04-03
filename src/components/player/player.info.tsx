import { usePlayer } from 'contexts/player'

import { Flex, Text } from '@chakra-ui/react'

import { FavoriteButton } from 'components/action-button/favorite'

export const SongInfo = ({ ...props }) => {
  const { currentSong } = usePlayer()

  return (
    <Flex align="center" {...props}>
      <Flex
        direction="column"
        maxW={{ base: 150, sm: 250, md: 170, lg: 'full' }}
      >
        <Text as="span" fontSize="sm" fontWeight="medium" isTruncated>
          {currentSong?.name}
        </Text>

        <Text as="span" fontSize="xs" isTruncated>
          {currentSong?.singer}
        </Text>
      </Flex>

      {currentSong && (
        <FavoriteButton song={currentSong} ml={{ base: 3, md: 5 }} />
      )}
    </Flex>
  )
}
