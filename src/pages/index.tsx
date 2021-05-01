import { GetStaticProps } from 'next'

import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react'

import { usePlayer } from 'contexts/PlayerContext'

import BaseTemplate from 'templates/Base'

import Searchbar from 'components/Searchbar'
import Thumbnail from 'components/Thumbnail'

import api from 'services/api'

export type HomeProps = {
  albums?: AlbumType[]
}

const Home = ({ albums }: HomeProps) => {
  const { setSong } = usePlayer()

  return (
    <BaseTemplate>
      <Searchbar />

      <Box marginY="20px">
        <Flex justifyContent="space-between" marginBottom="20px">
          <Text fontSize="2xl" fontWeight="bold">
            Albums
          </Text>
        </Flex>

        <Grid templateColumns="repeat(auto-fit, minmax(150px, 1fr))" gap="10">
          {albums?.map((item: AlbumType) => (
            <GridItem overflow="hidden" key={item.id}>
              <Thumbnail {...item} onClick={() => setSong(item)} />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </BaseTemplate>
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
