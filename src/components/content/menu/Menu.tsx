import Logo from '@/assets/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { useIntl } from '@/shared/hooks/intl/use-intl'
import { menuRoutes } from '@/components/content/menu/components/utils'
import {
  MenuRoute,
  Route,
} from '@/components/content/menu/components/menu-route'
import React, { useEffect } from 'react'
import { UserPanel } from '@/components/content/menu/components/user-panel'

type MenuProps = {
  visible: boolean
  lang: string
  bigMenu: boolean
  setBigMenu: any
  pathname?: string
}
export const Menu = ({
  visible,
  lang,
  pathname,
  bigMenu,
  setBigMenu,
}: MenuProps) => {
  const { formatMessage } = useIntl()
  const [expanded, setExpanded] = React.useState<number | null>(null)
  const [routes, setRoutes] = React.useState<any[]>([])

  useEffect(() => {
    setRoutes(
      menuRoutes({
        lang,
      })
    )
    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (routes && routes?.length) {
      const findExpandedRoute = (route: Route) => {
        if (route.children?.length) {
          for (const child of route.children) {
            if (child.path === pathname) {
              return true
            }
          }
        }
        return false
      }

      const expandedRoute = routes.find(
        (route) => route.path === pathname || findExpandedRoute(route)
      )
      if (expandedRoute) {
        setExpanded(expandedRoute.id)
      }
    }
  }, [routes, pathname])

  if (!visible) {
    return null
  }
  return (
    <div className={`${bigMenu ? ' w-3/12' : 'w-28'} h-screen bg-gray-800`}>
      <div className="h-full w-full flex flex-col justify-between">
        <div>
          <div className="w-full flex items-center justify-center">
            <Link href="/" className="relative h-full w-40 ">
              <Image src={Logo} alt="Plexus logo" className="p-3" />
            </Link>
          </div>
          <div className="flex items-center justify-center mt-5">
            <div className="flex flex-col space-y-5 w-5/6 ">
              {menuRoutes({
                lang,
              })?.map((route) => (
                <MenuRoute
                  bigMenu={bigMenu}
                  pathname={pathname}
                  key={route.id}
                  route={route}
                  expanded={expanded}
                  setExpanded={setExpanded}
                  formatMessage={formatMessage}
                />
              ))}
            </div>
          </div>
        </div>
        <UserPanel bigMenu={bigMenu} setBigMenu={setBigMenu} />
      </div>
    </div>
  )
}
