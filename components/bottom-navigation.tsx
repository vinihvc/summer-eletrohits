import React from 'react'

import { BOTTOM_NAVIGATION } from '@/constants/menu'

import { ActiveLink } from './active-link'

export const BottomNavigation = () => {
  return (
    <div className="fixed flex md:hidden h-[50px] bg-gray-900 bottom-0 inset-x-0 items-center justify-between">
      {BOTTOM_NAVIGATION.map(({ label, href, icon }) => (
        <div className="flex justify-center flex-1" key={href}>
          <ActiveLink
            href={href}
            className="text-gray-400 aria-[current=page]:text-white"
          >
            {React.createElement(icon, {
              className: 'h-4 w-4',
              'aria-hidden': true,
            })}

            <span className="sr-only">{label}</span>
          </ActiveLink>
        </div>
      ))}
    </div>
  )
}
