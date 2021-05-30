import { NextSeo } from 'next-seo'

import { Box, Flex, Grid, Text } from '@chakra-ui/react'

import AlbumItem from 'components/AlbumItem'

import api from 'services/api'

export type HomeProps = {
  albums?: AlbumType[]
}

const Home = ({ albums }: HomeProps) => {
  return (
    <>
      <NextSeo title="Home" />

      <Box>
        <Flex justifyContent="space-between" mb={5}>
          <Text fontSize="2xl" fontWeight="bold">
            Albums
          </Text>
        </Flex>

        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(auto-fit, minmax(200px, 1fr))'
          }}
          gap="5"
        >
          {albums?.map((album: AlbumType) => (
            <AlbumItem key={album.id} album={album} />
          ))}
        </Grid>
      </Box>
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
