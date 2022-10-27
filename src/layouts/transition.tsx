import { Router } from 'next/router'

import { Container } from '@chakra-ui/react'

import { AnimatePresence, motion } from 'framer-motion'

type TransitionLayoutProps = {
  router: Router
  children: React.ReactNode
}

export const TransitionLayout = ({
  router,
  children
}: TransitionLayoutProps) => {
  return (
    <AnimatePresence>
      <motion.div
        key={router.route}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Container as="main" maxW="container.xl" minH="100vh" pt={10}>
          {children}
        </Container>
      </motion.div>
    </AnimatePresence>
  )
}
