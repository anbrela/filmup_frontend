import Link from 'next/link'
import React from 'react'
import { RouteChildren } from '@/components/content/menu/components/route-children'
import { MenuChevron } from '@/components/content/menu/components/menu-chevron'

export type Route = {
  id: number
  path: string
  icon?: any
  children?: Route[]
  label: string
}

type MenuRouteProps = {
  route: Route
  formatMessage: any
  childrenRoutes?: boolean
  pathname?: string
  expanded: number | null
  bigMenu: boolean
  setExpanded?: any
  className?: string
}

export const MenuRoute = ({
  route,
  pathname,
  bigMenu,
  childrenRoutes,
  setExpanded,
  expanded,
  formatMessage,
}: MenuRouteProps) => {
  const [hovered, setHovered] = React.useState<number | null>(null)

  return (
    <div
      className="flex flex-col space-y-2 relative"
      onMouseEnter={() => (!childrenRoutes ? setHovered(route?.id) : null)}
      onMouseLeave={() => (!childrenRoutes ? setHovered(null) : null)}
    >
      <div
        className={`w-full text-white flex items-center px-3 justify-between ${
          pathname === route?.path ? 'bg-gray-700 rounded-lg' : ''
        }`}
      >
        <Link
          key={route?.id}
          href={route?.path}
          className={`flex items-center justify-between space-x-2 font-medium text-white p-2 rounded px-4
        }`}
        >
          <div
            className={`flex items-center space-x-2 ${
              !bigMenu && 'w-full justify-center'
            }`}
          >
            {route?.icon &&
              React.createElement(route?.icon, {
                className: bigMenu
                  ? 'w-5 h-5'
                  : ` ${hovered === route?.id ? 'text-secondary' : ''} w-7 h-7`,
              })}

            <span className={`${!bigMenu && 'hidden'}`}>
              {formatMessage(route?.label)}
            </span>
          </div>
        </Link>
        <MenuChevron
          bigMenu={bigMenu}
          expanded={expanded}
          route={route}
          visible={!!route?.children?.length}
          setExpanded={setExpanded}
        />
      </div>
      <RouteChildren
        hovered={hovered}
        route={route}
        bigMenu={bigMenu}
        pathname={pathname}
        expanded={expanded}
        routes={route?.children}
        formatMessage={formatMessage}
      />
    </div>
  )
}
