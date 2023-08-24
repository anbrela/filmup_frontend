import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { Route } from '@/components/content/menu/components/menu-route'

type MenuChevronProps = {
  bigMenu: boolean
  expanded: number | null
  route: Route
  visible: boolean
  setExpanded: any
}

export const MenuChevron = ({
  bigMenu,
  expanded,
  route,
  setExpanded,
  visible,
}: MenuChevronProps) => {
  if (!visible) {
    return null
  }

  return (
    <div className={!bigMenu ? 'hidden' : ''}>
      {expanded === route?.id ? (
        <ChevronDownIcon
          className="w-5 h-5 cursor-pointer"
          onClick={() => setExpanded(null)}
        />
      ) : (
        <ChevronRightIcon
          className="w-5 h-5 cursor-pointer"
          onClick={() => setExpanded(route?.id)}
        />
      )}
    </div>
  )
}
