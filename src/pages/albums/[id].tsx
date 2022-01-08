import { GetStaticProps } from 'next'

import { NextSeo } from 'next-seo'

import { Box, SlideFade } from '@chakra-ui/react'

import AlbumInfo from 'components/AlbumInfo'
import SongItem from 'components/SongItem'

import api from 'services/api'

export type AlbumsProps = {
  album: AlbumType
}

const Albums = ({ album }: AlbumsProps) => {
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
      <SlideFade in>
        <AlbumInfo album={album} />

        <Box mt={10}>
          {album.songs?.map((song: SongType) => (
            <SongItem key={song.id} song={song} mb={3} />
          ))}
        </Box>
      </SlideFade>
    </>
  )
}

export const getStaticPaths = async () => {
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
