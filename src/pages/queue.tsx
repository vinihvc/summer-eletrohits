import Link from 'next/link'

import { NextSeo } from 'next-seo'

import { Box, Button, Heading, Text } from '@chakra-ui/react'

import { usePlayer } from 'contexts/player'

import { SongItem } from 'components/song-item'

const Queue = () => {
  const { songList } = usePlayer()

  return (
    <>
      <NextSeo title="Queue" />

      <Heading as="h1" mb={10}>
        Songs in queue
      </Heading>

      {songList.length === 0 && (
        <Box>
          <Text my={5}>No music playing</Text>

          <Link href="/" passHref>
            <Button as="a" borderRadius="full" px={6}>
              Discover
            </Button>
          </Link>
        </Box>
      )}

      {songList?.map((song: SongType) => (
        <SongItem key={song.id} song={song} mb={3} />
      ))}
    </>
  )
}

export default Queue
