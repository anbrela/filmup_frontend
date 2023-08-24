import {
  MenuRoute,
  Route,
} from '@/components/content/menu/components/menu-route'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

type RouteChildrenProps = {
  routes: Route[] | undefined
  className?: string
  pathname?: string
  expanded: number | null
  route: Route
  hovered: number | null
  bigMenu?: boolean
  formatMessage: any
}

export const RouteChildren = ({
  routes,
  className,
  expanded,
  route,
  pathname,
  hovered,
  bigMenu,
  formatMessage,
}: RouteChildrenProps) => {
  if (!bigMenu && hovered === route?.id) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
        className="absolute z-20 w-64 rounded top-10 left-7 bg-white not-shadow border px-7 py-4 pb-6 flex flex-col space-y-2"
      >
        <Link className="hover:font-bold" href={route?.path}>
          {formatMessage(route?.label)}
        </Link>
        {routes?.map((route) => (
          <div
            key={route?.id}
            className="flex hover:font-semibold h-5 items-center space-x-2 pl-4 border-l border-b border-b-gray-100 border-l-gray-100"
          >
            <div className="bg-white p-2 px-3 w-full -mb-3">
              <Link href={route?.path}>{formatMessage(route?.label)}</Link>
            </div>
          </div>
        ))}
      </motion.div>
    )
  }

  if (expanded !== route?.id || !routes?.length || !bigMenu) {
    return null
  }

  return (
    <div className="pl-5">
      {routes?.map((route) => (
        <div key={route.id} className={className}>
          <MenuRoute
            bigMenu={bigMenu}
            childrenRoutes
            expanded={expanded}
            pathname={pathname}
            route={route}
            formatMessage={formatMessage}
          />
        </div>
      ))}
    </div>
  )
}
