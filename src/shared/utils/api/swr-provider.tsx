'use client'
import { SWRConfig } from 'swr'

type props = {
  children: React.ReactNode
}

export const SWRProvider = ({ children }: props) => {
  return <SWRConfig>{children}</SWRConfig>
}
