'use client'
import React, { createContext, useEffect } from 'react'
import { Toast } from '@/components/content/toast/toast'
import {
  Notification,
  Error,
  NotificationType,
} from '@/shared/types/notifications/notifications.types'
import {
  notificationTypes,
  NotificationTypesEnum,
} from '@/shared/consts/notifications'
import { useIntl } from '@/shared/hooks/intl/use-intl'

type NotificationsContextType = {
  notifications: Array<NotificationType>
  error: (error: Error) => void
  success: (error: Notification) => void
  removeNotification: (error: NotificationType) => void
}
export const NotificationContext = createContext<NotificationsContextType>({
  notifications: [],
  error: () => {},
  success: () => {},
  removeNotification: () => {},
} as NotificationsContextType)

export const NotificationsProvider = ({ children }: any) => {
  const { formatMessage } = useIntl()
  const [notifications, setNotifications] = React.useState<
    Array<NotificationType>
  >([])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (
        notifications?.length &&
        notifications[0].type !== notificationTypes.error
      ) {
        removeNotification(notifications[0])
      }
    }, 3000)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notifications])

  const error = ({ message }: Error) => {
    addNotification({
      id: Math.floor(Math.random() * 100),
      type: NotificationTypesEnum.error,
      message,
    })
  }

  const success = ({ message }: Error) => {
    addNotification({
      id: Math.floor(Math.random() * 100),
      type: NotificationTypesEnum.success,
      message,
    })
  }

  const addNotification = (error: NotificationType) => {
    setNotifications([...notifications, error])
  }

  const removeNotification = (error: NotificationType) => {
    setNotifications(
      notifications.filter((e: NotificationType) => e?.id !== error?.id)
    )
  }

  return (
    <NotificationContext.Provider
      value={{ notifications, removeNotification, error, success }}
    >
      <div className="absolute bottom-5 right-5 flex flex-col space-y-3 z-50">
        {notifications?.map((notification: NotificationType) => (
          <Toast
            key={notification?.id}
            notification={notification}
            formatMessage={formatMessage}
            removeNotification={() => removeNotification(notification)}
          />
        ))}
      </div>
      {children}
    </NotificationContext.Provider>
  )
}
