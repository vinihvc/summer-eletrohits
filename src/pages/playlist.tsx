import Link from 'next/link'

import { NextSeo } from 'next-seo'

import { Button, Heading, Text } from '@chakra-ui/react'

import { usePlayer } from 'contexts/player'

import { CustomBg } from 'components/custom-bg'
import { SongList } from 'components/song/song.list'

const PlaylistPage = () => {
  const { songList } = usePlayer()

  return (
    <>
      <NextSeo title="Playlist" />

      <CustomBg gradient={['teal.200', 'purple.800']} />

      <Heading as="h1" mb={10}>
        Playlist
      </Heading>

      {songList.length === 0 && (
        <>
          <Text my={5}>No music playing</Text>

          <Link href="/" passHref>
            <Button as="a">Discover</Button>
          </Link>
        </>
      )}

      {songList && <SongList songs={songList} />}
    </>
  )
}

export default PlaylistPage
