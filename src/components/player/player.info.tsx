import { Flex, Text } from '@chakra-ui/react'

import { useStore } from 'store'

import { LikeButton } from 'components/action-button/like'

export const PlayerSongInfo = ({ ...props }) => {
  const { currentSong } = useStore()

  return (
    <Flex align="center" {...props}>
      <Flex
        direction="column"
        maxW={{ base: 150, sm: 250, md: 170, lg: 'full' }}
      >
        <Text as="span" fontSize="sm" fontWeight="medium" isTruncated>
          {currentSong()?.name}
        </Text>

        <Text as="span" fontSize="xs" isTruncated>
          {currentSong()?.singer}
        </Text>
      </Flex>

      {currentSong && (
        <LikeButton song={currentSong()} ml={{ base: 3, md: 5 }} />
      )}
    </Flex>
  )
}
