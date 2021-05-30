import SongItem from 'components/SongItem'

export type SongListProps = {
  songs?: SongType[]
}

const SongList = ({ songs }: SongListProps) => {
  return (
    <>
      {songs?.map((song: SongType, index: number) => (
        <SongItem key={song.id} song={song} index={index} mb={3} />
      ))}
    </>
  )
}

export default SongList
