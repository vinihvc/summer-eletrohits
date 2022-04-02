import Link from 'next/link'

import { NextSeo } from 'next-seo'

import { Box, Button, Heading, Text } from '@chakra-ui/react'

import { MdPlayArrow } from 'react-icons/md'

import { usePlayer } from 'contexts/player'

import { SongItem } from 'components/song-item'

const Favorites = () => {
  const { favoriteSongs, playPlayList } = usePlayer()

  return (
    <>
      <NextSeo title="Favorites" />

      <Heading as="h1">Favorites</Heading>

      {favoriteSongs.length === 0 ? (
        <Box>
          <Text my={5}>No favorite yet.</Text>

          <Link href="/" passHref>
            <Button as="a" borderRadius="full" px={6}>
              Discover
            </Button>
          </Link>
        </Box>
      ) : (
        <Button
          leftIcon={<MdPlayArrow />}
          borderRadius="full"
          px={6}
          mt={5}
          onClick={() => playPlayList(favoriteSongs)}
          my={5}
        >
          Play
        </Button>
      )}

      <Box mt={10}>
        {favoriteSongs?.map((song: SongType) => (
          <SongItem key={song.id} song={song} mb={3} />
        ))}
      </Box>
    </>
  )
}

export default Favorites
