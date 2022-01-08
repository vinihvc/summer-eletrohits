import { NextSeo } from 'next-seo'

import { usePlayer } from 'contexts/PlayerContext'

import { Text } from '@chakra-ui/layout'

import SongItem from 'components/SongItem'

const Queue = () => {
  const { songList, currentSong } = usePlayer()

  return (
    <>
      <NextSeo title="Queue" />

      {!!currentSong && (
        <>
          <Text>Now playing</Text>

          <SongItem song={currentSong} />
        </>
      )}

      <Text mt={10}>Next songs</Text>

      {songList?.map((song: SongType) => (
        <SongItem key={song.id} song={song} mb={3} />
      ))}
    </>
  )
}

export default Queue
