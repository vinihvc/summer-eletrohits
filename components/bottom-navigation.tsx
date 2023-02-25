import React from 'react'

import { BOTTOM_NAVIGATION } from '@/constants/menu'
import { ActiveLink } from './active-link'

export const BottomNavigation = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 flex h-[50px] items-center justify-between bg-neutral-900 sm:hidden">
      {BOTTOM_NAVIGATION.map(({ label, href, icon }) => (
        <div className="flex flex-1 justify-center" key={href}>
          <ActiveLink
            href={href}
            className="text-neutral-400 aria-[current=page]:text-white"
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
