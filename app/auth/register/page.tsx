import Link from 'next/link'

import { Button } from '@/components/ui/button'

const RegisterPage = () => {
  return (
    <div className="flex flex-1 flex-col items-center space-y-8">
      <form className="w-full space-y-4">
        <div className="space-y-1">
          <label className="block text-sm" htmlFor="email">
            Email
          </label>
          <input className="w-full" type="email" id="email" />
        </div>

        <div className="space-y-1">
          <label className="block text-sm" htmlFor="password">
            Password
          </label>
          <input className="w-full" type="password" id="password" />
        </div>

        <div className="space-y-1">
          <label className="block text-sm" htmlFor="passwordConfirmation">
            Password Confirmation
          </label>
          <input className="w-full" type="password" id="passwordConfirmation" />
        </div>

        <Button className="w-full">Register</Button>
      </form>

      <Link className="text-sm underline" href="/auth/login">
        Already have an account?
      </Link>
    </div>
  )
}

export default RegisterPage
