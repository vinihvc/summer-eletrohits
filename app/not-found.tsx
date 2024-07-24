import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'

const NotFoundPage = () => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="max-w-md space-y-3">
        <div className="font-dark text-5xl font-bold">
          Uppsss...
          <strong> 404 </strong>
        </div>

        <p className="text-2xl font-light leading-normal md:text-3xl">
          <strong>Page Not Found</strong>
        </p>

        <p className="mb-8">
          Check if the search term is correct. If you think this is an error,
          send me a tweet{' '}
          <a
            href="https://vini.one/twitter"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-blue-500 underline underline-offset-2"
          >
            @vinihvc
          </a>
          {', '}
          <strong>Thanks!</strong>
        </p>

        <Link href="/" className={buttonVariants()}>
          Back to home
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage
