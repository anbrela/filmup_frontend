import React from 'react'
import { BellIcon } from '@heroicons/react/24/outline'
type User = {
  name: string
  email: string
}

type AvatarProps = {
  user: User
  bigMenu: boolean
}

export const Avatar = ({ user, bigMenu }: AvatarProps) => {
  const initial = user?.name?.charAt(0) || ''

  return (
    <div
      className={`
      pt-6
      ${
        !bigMenu
          ? 'flex space-y-3 flex-col'
          : 'flex items-center justify-between '
      }`}
    >
      <div className={` flex items-center space-x-3 justify-center`}>
        <div
          className={`cursor-pointer hover:scale-110 w-10 h-10 rounded-full bg-yellow-200 flex items-center justify-center font-semibold`}
        >
          {initial}
        </div>
        <div className={`${!bigMenu ? 'hidden' : 'flex flex-col'}`}>
          <span className="font-bold text-white">{user.name}</span>
          <span className="text-xs text-gray-400">{user.email}</span>
        </div>
      </div>
      <div className={`flex items-center justify-center`}>
        <BellIcon className="w-8 h-8 hover:scale-110 cursor-pointer text-white" />
      </div>
    </div>
  )
}
