import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import React from 'react'
import { LayoutProps } from '@/shared/types/layout/layout-types'
import './globals.css'
import { ConfigProvider } from '@/components/config/config-provider'
import { SWRProvider } from '@/shared/utils/api/swr-provider'
import { NotificationsProvider } from '@/components/notifications/notifications-provider'
import { AppLayout } from '@/components/layout/AppLayout'

export function generateStaticParams() {
  return [{ locale: 'es' }, { locale: 'en' }]
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: LayoutProps) {
  let messages
  try {
    messages = (await import(`../../../config/locales/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body>
        <ConfigProvider>
          <SWRProvider>
            <NextIntlClientProvider locale={locale} messages={messages}>
              <AppLayout lang={locale}>
                <NotificationsProvider>{children}</NotificationsProvider>
              </AppLayout>
            </NextIntlClientProvider>
          </SWRProvider>
        </ConfigProvider>
      </body>
    </html>
  )
}
