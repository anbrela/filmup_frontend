'use client'
import { useContext } from 'react'
import { NotificationContext } from '@/components/notifications/notifications-provider'

export const useNotifications = () => {
  return useContext(NotificationContext)
}
