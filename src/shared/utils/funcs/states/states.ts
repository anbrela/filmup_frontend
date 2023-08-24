import { states } from '@/shared/consts/states/states'

export const getColorState = (state: string) => {
  switch (state) {
    case states.status_pending_approval:
      return 'orange-300'
    case states.status_approved:
      return 'green-200'
    case states.status_rejected:
      return 'red-400 text-gray-100'
    default:
      return 'gray-100'
  }
}
