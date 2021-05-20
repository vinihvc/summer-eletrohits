import { usePlayer } from 'contexts/PlayerContext'

import { Text } from '@chakra-ui/layout'

import Base from 'templates/Base'

import SongItem from 'components/SongItem'
import SongList from 'components/SongList'

const Queue = () => {
  const { songList, currentSong } = usePlayer()

  return (
    <Base>
      {!!currentSong && (
        <>
          <Text>Now playing</Text>

          <SongItem song={currentSong} />
        </>
      )}

      <Text mt="50px">Next songs</Text>

      <SongList songs={songList} />
    </Base>
  )
}

export default Queue
