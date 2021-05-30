import { usePlayer } from 'contexts/PlayerContext'

import useDevice from 'hooks/use-device'

import { Container, Grid } from '@chakra-ui/react'

import Player from 'components/Player'
import Navbar from 'components/Navbar'
import BottomNavigation from 'components/BottomNavigation'
import Sidebar from 'components/Sidebar'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const BaseTemplate = ({ children }: BaseTemplateProps) => {
  const { currentSong } = usePlayer()

  const { isMobile } = useDevice()

  return (
    <>
      <Grid
        templateAreas={{
          base: `
            'main'
          `,
          md: `
            'sidebar navbar'
            'sidebar main'
          `
        }}
        templateColumns={{ base: '1fr', md: 'auto 1fr' }}
        templateRows={{ base: '1fr', md: 'auto 1fr' }}
        minH="100vh"
      >
        {!isMobile && <Sidebar gridArea="sidebar" />}

        {!isMobile && <Navbar gridArea="navbar" />}

        <Container
          as="main"
          gridArea="main"
          maxW="full"
          flex="1"
          height="calc(100vh - 80px)"
          overflowY="auto"
          pt={5}
          pb={20}
        >
          {children}
        </Container>
      </Grid>

      <Player hidden={!currentSong} zIndex="sticky" />

      {isMobile && <BottomNavigation />}
    </>
  )
}

export default BaseTemplate
