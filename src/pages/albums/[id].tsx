import { GetStaticProps } from 'next'

import { NextSeo } from 'next-seo'

import { Flex } from '@chakra-ui/react'

import { AlbumInfo } from 'components/album/album.info'
import { BackAlbums } from 'components/back-albums'
import { CustomBg } from 'components/custom-bg'
import { SongList } from 'components/song/song.list'

import api from 'services/api'

type AlbumsProps = {
  album: AlbumType
}

const AlbumsPage = ({ album }: AlbumsProps) => {
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

      <CustomBg image={album.thumb} />

      <Flex justify={{ base: 'center', md: 'initial' }}>
        <BackAlbums />
      </Flex>

      <AlbumInfo album={album} mt={5} />

      {album.songs && <SongList songs={album.songs} mt={10} />}
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

export default AlbumsPage
