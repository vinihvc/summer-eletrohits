import { usePlayer } from 'contexts/PlayerContext'

import { Text } from '@chakra-ui/layout'

import SongItem from 'components/SongItem'
import SongList from 'components/SongList'

const Queue = () => {
  const { songList, currentSong } = usePlayer()

  return (
    <>
      {!!currentSong && (
        <>
          <Text>Now playing</Text>

          <SongItem song={currentSong} />
        </>
      )}

      <Text mt={10}>Next songs</Text>

      <SongList songs={songList} />
    </>
  )
}

export default Queue
