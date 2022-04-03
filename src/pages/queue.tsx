import Link from 'next/link'

import { NextSeo } from 'next-seo'

import { Button, Heading, Text } from '@chakra-ui/react'

import { usePlayer } from 'contexts/player'

import { SongItem } from 'components/song-item'
import { CustomBg } from 'components/custom-bg'

const QueuePage = () => {
  const { songList } = usePlayer()

  return (
    <>
      <NextSeo title="Queue" />

      <CustomBg gradient={['teal.200', 'purple.800']} />

      <Heading as="h1" mb={10}>
        Songs in queue
      </Heading>

      {songList.length === 0 && (
        <>
          <Text my={5}>No music playing</Text>

          <Link href="/" passHref>
            <Button as="a">Discover</Button>
          </Link>
        </>
      )}

      {songList?.map((song: SongType) => (
        <SongItem key={song.id} song={song} />
      ))}
    </>
  )
}

export default QueuePage
