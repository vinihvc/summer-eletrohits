import { Container, Grid } from '@chakra-ui/react'

import { usePlayer } from 'contexts/player'

import { useDevice } from 'hooks/use-device'

import { Player } from 'components/player'
import { Navbar } from 'components/navbar'
import { BottomNavigation } from 'components/bottom-navigation'
import { Sidebar } from 'components/sidebar'

type DefaultLayoutProps = {
  children: React.ReactNode
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
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
