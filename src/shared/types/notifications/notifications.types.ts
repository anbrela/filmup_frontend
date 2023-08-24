import { NotificationTypesEnum } from '@/shared/consts/notifications'

export type Error = {
  message: string
}

export interface Notification extends Error {
  id: number
}

export interface NotificationType extends Notification {
  type: NotificationTypesEnum
}
