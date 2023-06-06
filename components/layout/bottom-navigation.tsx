import React from 'react'

import { BOTTOM_NAVIGATION } from '@/constants/menu'

import { ActiveLink } from '@/components/ui/active-link'

export const BottomNavigation = () => {
  return (
    <div className="sticky inset-x-0 bottom-0 z-50 flex items-center justify-between border-t border-t-gray-200 bg-white px-4 py-3 shadow dark:border-t-neutral-700 dark:bg-neutral-900 sm:hidden">
      {BOTTOM_NAVIGATION.map(({ label, href, icon }) => (
        <div className="flex flex-1 justify-center" key={href}>
          <ActiveLink
            href={href}
            className="text-neutral-400 aria-[current=page]:text-neutral-900 dark:aria-[current=page]:text-white"
          >
            {React.createElement(icon, {
              size: 20,
            })}

            <span className="sr-only">{label}</span>
          </ActiveLink>
        </div>
      ))}
    </div>
  )
}
