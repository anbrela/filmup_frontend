import { State } from '@/shared/types/states/states'
import { Priority } from '@/shared/types/priorities/priorities'

export type Request = {
  id: string
  title: string
  state: State
  priority: Priority
  skills: string[]
  client: string
  department: string
  description?: string
  quantity: number
  expiryDate: string
}
