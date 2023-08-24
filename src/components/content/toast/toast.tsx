import { XMarkIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'

import React from 'react'
import { NotificationType } from '@/shared/types/notifications/notifications.types'

type NotificationProps = {
  notification: NotificationType
  formatMessage: (id: string) => string
  removeNotification: any
}

export const Toast = ({
  notification,
  formatMessage,
  removeNotification,
}: NotificationProps) => {
  const getStyle = (type: string) => {
    if (type === 'success') {
      return 'bg-green-200 text-gray-800'
    }

    return 'bg-secondary text-gray-200'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      className={`not-shadow ${getStyle(
        notification?.type
      )} p-4 max-w-lg rounded flex items-center space-x-2 justify-between`}
      key={notification?.id}
    >
      <div className="px-2">
        <span className="text-sm font-medium">
          {notification?.message || formatMessage('errors.unknown')}
        </span>
      </div>

      <XMarkIcon
        className="w-6 h-6 cursor-pointer"
        onClick={removeNotification}
      />
    </motion.div>
  )
}
