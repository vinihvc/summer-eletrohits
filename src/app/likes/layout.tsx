'use client'

import { NextSeo } from 'next-seo'

import { Heading } from '@chakra-ui/react'

import { CustomBg } from '@/components/custom-bg'

type LikesLayoutProps = {
  children: React.ReactNode
}

const LikesLayout = ({ children }: LikesLayoutProps) => {
  return (
    <>
      <NextSeo title="Likes" />

      <CustomBg gradient={['red.500', 'yellow.300']} />

      <Heading as="h1">Your Likes</Heading>

      {children}
    </>
  )
}

export default LikesLayout
