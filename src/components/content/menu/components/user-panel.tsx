import { Avatar } from '@/components/content/menu/components/avatar'
import { SidebarButton } from '@/components/content/menu/components/sidebar-button'
import React from 'react'

const mockedUser = {
  name: 'John Doe',
  email: 'john.doedoe@plexus.es',
}

type UserPanelProps = {
  bigMenu: boolean
  setBigMenu: any
}

export const UserPanel = ({ bigMenu, setBigMenu }: UserPanelProps) => {
  return (
    <div className="px-8 py-10  relative">
      <SidebarButton setBigMenu={setBigMenu} bigMenu={bigMenu} />
      <Avatar user={mockedUser} bigMenu={bigMenu} />
    </div>
  )
}
