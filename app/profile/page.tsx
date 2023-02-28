'use client'

import { signOut } from 'next-auth/react'

import { Button } from '@/components/ui/button'

const PlaylistPage = () => {
  return (
    <>
      <Button
        onClick={(e) => {
          e.preventDefault()
          signOut({
            callbackUrl: `${window.location.origin}/`,
          })
        }}
      >
        Logout
      </Button>
    </>
  )
}

export default PlaylistPage
