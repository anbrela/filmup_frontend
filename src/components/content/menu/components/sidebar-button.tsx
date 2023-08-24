import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline'
import React from 'react'

type SidebarButtonProps = {
  setBigMenu: any
  bigMenu: boolean
}

export const SidebarButton = ({ setBigMenu, bigMenu }: SidebarButtonProps) => {
  return (
    <div
      className="absolute top-5 -right-5 rounded-full bg-white shadow-xl p-2 flex items-center justify-center hover:scale-110 cursor-pointer"
      onClick={() => setBigMenu(!bigMenu)}
    >
      {React.createElement(!bigMenu ? ChevronRightIcon : ChevronLeftIcon, {
        className: 'w-5 h-5',
      })}
    </div>
  )
}
