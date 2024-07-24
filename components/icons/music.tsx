import { cn } from '@/lib/cn'

export const Music = (props: React.SVGProps<SVGSVGElement>) => {
  const { className, ...rest } = props

  return (
    <svg
      className={cn(className)}
      viewBox="0 0 48 48"
      width="1rem"
      height="1rem"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>Music</title>

      <path
        fill="#ed3675"
        d="M20,24c-5.523,0-10,4.477-10,10s4.477,10,10,10s10-4.477,10-10S25.523,24,20,24z"
      />
      <linearGradient
        id="thMIbMD7~VnYoyixFJ5D6a_p6vT9rfwUGw6_gr1"
        x1="30"
        x2="41"
        y1="8"
        y2="8"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#bd1949" />
        <stop offset=".108" stopColor="#c31a4b" />
        <stop offset=".38" stopColor="#ca1b4d" />
        <stop offset="1" stopColor="#cc1b4e" />
      </linearGradient>
      <path
        fill="url(#thMIbMD7~VnYoyixFJ5D6a_p6vT9rfwUGw6_gr1)"
        d="M39,12h-9V4h9c1.105,0,2,0.895,2,2v4C41,11.105,40.105,12,39,12z"
      />
      <path fill="#ed3675" d="M30,4h-2c-2.209,0-4,1.791-4,4v26h6V4z" />
    </svg>
  )
}
