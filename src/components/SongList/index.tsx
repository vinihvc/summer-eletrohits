import SongItem from 'components/SongItem'

export type SongListProps = {
  songs?: SongType[]
}

const SongList = ({ songs }: SongListProps) => {
  return (
    <>
      {songs?.map((song: SongType) => (
        <SongItem key={song.id} song={song} mb={3} />
      ))}
    </>
  )
}

export default SongList
