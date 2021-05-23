import { Container } from '@chakra-ui/react'

import Player from 'components/Player'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import BottomNavigation from 'components/BottomNavigation'

import { usePlayer } from 'contexts/PlayerContext'

import useDevice from 'hooks/useDevice'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const BaseTemplate = ({ children }: BaseTemplateProps) => {
  const { currentSong } = usePlayer()

  const { isMobile } = useDevice()

  return (
    <>
      <Navbar />

      <Container as="main" maxW="container.xl" pb={25}>
        {children}
      </Container>

      <Footer />

      <Player hidden={!currentSong} />

      {isMobile && <BottomNavigation />}
    </>
  )
}

export default BaseTemplate
