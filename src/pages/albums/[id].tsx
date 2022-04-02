import { GetStaticProps } from 'next'

import { NextSeo } from 'next-seo'

import { Box } from '@chakra-ui/react'

import { AlbumInfo } from 'components/album/album.info'
import { SongItem } from 'components/song-item'
import { BackAlbums } from 'components/back-albums'

import api from 'services/api'

type AlbumsProps = {
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

      <Box h="full" minH="100vh" inset="0" pos="absolute" zIndex="-1">
        <Box
          transition="background-image 1s ease-in"
          backgroundSize="cover"
          transform="translateZ(0)"
          pos="fixed"
          backgroundPosition="center"
          w="full"
          h="100vh"
          top="0"
          filter="blur(50px)"
          backgroundImage={`url("${album.thumb}")`}
        />

        <Box
          bgGradient="linear(to-b, blackAlpha.800, black)"
          h="full"
          w="full"
          maxH="200vh"
          pos="sticky"
          top="-100vh"
        />
      </Box>

      <Box>
        <BackAlbums />

        <AlbumInfo album={album} mt={2} />

        <Box mt={10}>
          {album.songs?.map((song: SongType) => (
            <SongItem key={song.id} song={song} mb={3} />
          ))}
        </Box>
      </Box>
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
