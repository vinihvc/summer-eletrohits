import { Box, Divider } from '@chakra-ui/layout'

import SongItem from 'components/SongItem'

export type SongListProps = {
  songs?: SongType[]
}

const SongList = ({ songs }: SongListProps) => {
  return (
    <>
      {songs?.map((song: SongType, index: number) => (
        <Box key={song.id} my="10px">
          <SongItem song={song} />

          {index < songs!.length - 1 && <Divider />}
        </Box>
      ))}
    </>
  )
}

export default SongList
