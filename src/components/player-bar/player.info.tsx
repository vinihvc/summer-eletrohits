import { chakra, HStack, Stack, Text } from '@chakra-ui/react'

import { useStore } from 'store'

import { LikeButton } from 'components/action-button/like'
import { BlurImage } from 'components/blur-image'

export const PlayerSongInfo = chakra(({ ...props }) => {
  const { currentSong } = useStore()

  return (
    <HStack align="center" spacing={{ md: 4 }} {...props}>
      <BlurImage
        src={`https://img.youtube.com/vi/${currentSong()?.youtubeId}/0.jpg`}
        alt={`${currentSong()?.name} album cover`}
        boxSize={10}
        minW={10}
        minH={10}
        borderRadius="full"
        objectFit="cover"
        display={{ base: 'none', md: 'block' }}
      />

      <Stack spacing={0} maxW={{ base: 150, sm: 250, md: 170, lg: 'full' }}>
        <Text as="span" fontSize="sm" fontWeight="medium" noOfLines={1}>
          {currentSong()?.name}
        </Text>

        <Text as="span" fontSize="xs" noOfLines={1}>
          {currentSong()?.singer}
        </Text>
      </Stack>

      <LikeButton song={currentSong()} />
    </HStack>
  )
})
