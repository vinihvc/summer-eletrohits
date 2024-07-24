import { Logo } from '@/components/logo'

export const Footer = () => {
  return (
    <footer className="container">
      <div className="flex flex-col items-center justify-between gap-4 border-t py-4 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-1 flex-col items-center gap-4 px-8 md:flex-row md:justify-between md:gap-2 md:px-0">
          <Logo />

          <p className="text-center text-sm leading-loose md:text-left">
            Built by{' '}
            <a
              href="https://vini.one/twitter"
              target="_blank"
              rel="noreferrer noopener"
              className="underline-offset-3 font-medium text-white underline"
            >
              vinihvc
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
