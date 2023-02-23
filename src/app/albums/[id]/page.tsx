import { getData } from './fetch'
import { ClientAlbumPage } from './client-page'
import { DataParams } from './types'

type AlbumsProps = DataParams

const AlbumsPage = async ({ params }: AlbumsProps) => {
  const album = await getData({ params })

  return <ClientAlbumPage album={album} />
}

export default AlbumsPage
