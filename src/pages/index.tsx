import { NextSeo } from 'next-seo'

import { Grid, Heading } from '@chakra-ui/react'

import { AlbumItem } from 'components/album/album.item'

import api from 'services/api'

export type HomeProps = {
  albums?: AlbumType[]
}

const Home = ({ albums }: HomeProps) => {
  return (
    <>
      <NextSeo title="Home" />

      <Heading as="h1" mb={10}>
        Albums
      </Heading>

      <Grid
        templateColumns={{
          base: 'repeat(auto-fit, minmax(150px, 1fr))',
          sm: 'repeat(auto-fit, minmax(200px, 1fr))'
        }}
        gap={{ base: 5, sm: 10 }}
      >
        {albums?.map((album: AlbumType) => (
          <AlbumItem key={album.id} album={album} />
        ))}
      </Grid>
    </>
  )
}

export const getStaticProps = async () => {
  const { data } = await api('albums')

  return {
    props: {
      albums: data
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}

export default Home
