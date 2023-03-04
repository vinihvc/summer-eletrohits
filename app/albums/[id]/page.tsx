import { DataParams } from '@/models/params'
import { getAlbum } from '@/services/requests'

import { ClientAlbumPage } from './client-page'

const AlbumsPage = async ({ params }: DataParams) => {
  const album = await getAlbum({ params })

  return <ClientAlbumPage album={album} />
}

export default AlbumsPage
