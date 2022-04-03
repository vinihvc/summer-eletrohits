import Link from 'next/link'

import { NextSeo } from 'next-seo'

import { Box, Button, Heading, Text } from '@chakra-ui/react'

import { MdPlayArrow } from 'react-icons/md'

import { usePlayer } from 'contexts/player'

import { SongItem } from 'components/song-item'
import { CustomBg } from 'components/custom-bg'

const FavoritesPage = () => {
  const { favoriteSongs, playPlayList } = usePlayer()

  return (
    <>
      <NextSeo title="Favorites" />

      <CustomBg gradient={['red.500', 'yellow.300']} />

      <Heading as="h1">Favorites</Heading>

      {favoriteSongs.length === 0 ? (
        <Box>
          <Text my={5}>No favorite yet.</Text>

          <Link href="/" passHref>
            <Button as="a">Discover</Button>
          </Link>
        </Box>
      ) : (
        <Button
          leftIcon={<MdPlayArrow />}
          mt={5}
          my={5}
          onClick={() => playPlayList(favoriteSongs)}
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

export default FavoritesPage
