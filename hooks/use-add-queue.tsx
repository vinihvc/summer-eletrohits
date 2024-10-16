import { useMusicActions, useMusicState } from '@/store/app.store'

export const useAddQueue = (data: SongType) => {
  const { playlist } = useMusicState()
  const { addToPlaylist, removeFromPlaylist } = useMusicActions()

  const isInQueue = playlist.find((item) => item.id === data.id)

  const handleAddToQueue = (position: 'next' | 'last') => {
    addToPlaylist(data, position)
  }

  const handleRemoveFromQueue = () => {
    removeFromPlaylist(data.id)
  }

  return {
    isInQueue,
    handleAddToQueue,
    handleRemoveFromQueue,
  }
}
