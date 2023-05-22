import { Logo } from '@/components/logo'

export const Footer = () => {
  return (
    <footer className="container">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-t-neutral-200 py-4 dark:border-t-neutral-700 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-1 flex-col items-center gap-4 px-8 md:flex-row md:justify-between md:gap-2 md:px-0">
          <Logo />

          <p className="text-center text-sm leading-loose text-neutral-600 dark:text-neutral-400 md:text-left">
            Built by{' '}
            <a
              href="viniciusvicentini.com/twitter"
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
