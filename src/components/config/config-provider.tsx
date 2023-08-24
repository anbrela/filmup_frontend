'use client'
import React from 'react'
import { Montserrat } from '@next/font/google'

import { registerLocale, setDefaultLocale } from 'react-datepicker'
import es from 'date-fns/locale/es'
import en from 'date-fns/locale/en-GB'

registerLocale('es', es)
registerLocale('en', en)

setDefaultLocale('es')

export const ConfigContext = React.createContext({})

type Props = {
  children: React.ReactNode
}

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
})

export const ConfigProvider = ({ children }: Props) => {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = require('../../../config/mockedService/browser')
    worker.start()
  }

  return (
    <ConfigContext.Provider value={{}}>
      <div className={montserrat.className}>{children}</div>
    </ConfigContext.Provider>
  )
}
