import { NextSeo } from 'next-seo'

import { Grid, Heading } from '@chakra-ui/react'

import { AlbumItem } from 'components/album/album.item'

import api from 'services/api'
import { CustomBg } from 'components/custom-bg'

export type HomeProps = {
  albums?: AlbumType[]
}

const HomePage = ({ albums }: HomeProps) => {
  return (
    <>
      <NextSeo title="Home" />

      <CustomBg gradient={['pink.400', 'purple.700']} />

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

export default HomePage
