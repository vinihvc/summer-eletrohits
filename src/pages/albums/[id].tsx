import { GetStaticPaths, GetStaticProps } from 'next'

import { NextSeo } from 'next-seo'

import { Box } from '@chakra-ui/react'

import SongList from 'components/SongList'
import AlbumInfo from 'components/AlbumInfo'

import api from 'services/api'

export type AlbumsProps = {
  album: AlbumType
}

function Albums({ album }: AlbumsProps) {
  return (
    <>
      <NextSeo
        title={album.name}
        description={`Album ${album.name}`}
        canonical={`https://summer-eletrohits.vercel.app/albums/${album.id}`}
        openGraph={{
          url: `https://summer-eletrohits.vercel.app/albums/${album.id}`,
          title: `${album.name} - Summer Eletrohits`,
          description: `Album ${album.name}`,
          images: [
            {
              url: album.thumb,
              alt: `${album.name}`
            }
          ]
        }}
      />
      <AlbumInfo album={album} mt={5} />

      <Box mt={10}>
        <SongList songs={album.songs} />
      </Box>
    </>
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
