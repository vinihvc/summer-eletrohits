import { GetStaticProps } from 'next'

import { Box, Flex, Grid, Text } from '@chakra-ui/react'

import AlbumItem from 'components/AlbumItem'

import api from 'services/api'

export type HomeProps = {
  albums?: AlbumType[]
}

const Home = ({ albums }: HomeProps) => {
  return (
    <Box marginY="20px">
      <Flex justifyContent="space-between" marginBottom="20px">
        <Text fontSize="2xl" fontWeight="bold">
          Albums
        </Text>
      </Flex>

      <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap="5">
        {albums?.map((album: AlbumType) => (
          <AlbumItem key={album.id} album={album} />
        ))}
      </Grid>
    </Box>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api('albums')

  return {
    props: {
      albums: data
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}

export default Home
