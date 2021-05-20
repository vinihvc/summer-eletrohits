import { GetStaticPaths, GetStaticProps } from 'next'

import { Box } from '@chakra-ui/react'

import Base from 'templates/Base'

import SongList from 'components/SongList'
import AlbumInfo from 'components/AlbumInfo'

import api from 'services/api'

export type AlbumsProps = {
  album: AlbumType
}

function Albums({ album }: AlbumsProps) {
  return (
    <Base>
      <AlbumInfo album={album} />

      <Box mt="50px">
        <SongList songs={album.songs} />
      </Box>
    </Base>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api('albums')

  const paths = data.map((album: AlbumType) => {
    return {
      params: { id: String(album.id) }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await api(`albums/${params?.id}`)

  return {
    props: {
      album: data
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}

export default Albums
