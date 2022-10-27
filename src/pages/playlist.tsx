import Link from 'next/link'

import { NextSeo } from 'next-seo'

import { Button, Heading, Text } from '@chakra-ui/react'

import { useStore } from 'store'

import { CustomBg } from 'components/custom-bg'
import { SongList } from 'components/song/song.list'

const PlaylistPage = () => {
  const { playlist } = useStore()

  return (
    <>
      <NextSeo title="Playlist" />

      <CustomBg gradient={['teal.200', 'purple.800']} />

      <Heading as="h1" mb={10}>
        Playlist
      </Heading>

      {playlist.length === 0 && (
        <>
          <Text my={5}>No music playing</Text>

          <Button as={Link} href="/">
            Discover
          </Button>
        </>
      )}

      {playlist.length > 0 && <SongList songs={playlist} />}
    </>
  )
}

export default PlaylistPage
