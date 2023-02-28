'use client'

import React from 'react'

import { signIn } from 'next-auth/react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

type ModalLoginProps = {
  children: React.ReactNode
}

export const ModalLogin = ({ children }: ModalLoginProps) => {
  const [loading, setLoading] = React.useState(false)

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)

    try {
      signIn('google')
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription>
            Enter your credentials to login.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleLogin} className="space-y-4">
          <DialogFooter>
            <Button type="submit">
              {loading ? 'Loading' : 'Login with Google'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
