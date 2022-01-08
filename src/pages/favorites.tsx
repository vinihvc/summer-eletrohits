import { NextSeo } from 'next-seo'

import { usePlayer } from 'contexts/PlayerContext'

import { Button, Heading } from '@chakra-ui/react'

import SongItem from 'components/SongItem'

const Favorites = () => {
  const { favoriteSongs, playPlayList } = usePlayer()

  return (
    <>
      <NextSeo title="Favorites" />

      <Heading>Favorite songs</Heading>

      <Button onClick={() => playPlayList(favoriteSongs)} my={5}>
        Play
      </Button>

      {favoriteSongs?.map((song: SongType) => (
        <SongItem key={song.id} song={song} mb={3} />
      ))}
    </>
  )
}

export default Favorites
