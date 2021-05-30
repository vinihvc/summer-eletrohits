import { NextSeo } from 'next-seo'

import { usePlayer } from 'contexts/PlayerContext'

import { Button } from '@chakra-ui/button'

import SongList from 'components/SongList'
import { Heading } from '@chakra-ui/layout'

const Favorites = () => {
  const { favoriteSongs, playPlayList } = usePlayer()

  return (
    <>
      <NextSeo title="Favorites" />

      <Heading>Favorite songs</Heading>

      <Button onClick={() => playPlayList(favoriteSongs)} my={5}>
        Play
      </Button>

      <SongList songs={favoriteSongs} />
    </>
  )
}

export default Favorites
