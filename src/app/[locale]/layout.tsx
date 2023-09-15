import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import React from "react";
import { LayoutProps } from "@/shared/types/layout/layout-types";
import "./globals.css";
import { ConfigProvider } from "@/components/config/config-provider";
import { SWRProvider } from "@/shared/utils/api/swr-provider";
import { NotificationsProvider } from "@/components/notifications/notifications-provider";
import { AuthProvider } from "@/components/config/session-provider";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { AppLayout } from "@/components/layout/app-layout";
import { MovieProvider } from "@/shared/utils/application/movie-reducer";

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }];
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: LayoutProps) {
  const session = await getServerSession(authOptions);

  let messages;
  try {
    messages = (await import(`../../../config/locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <ConfigProvider>
          <AuthProvider session={session}>
            <SWRProvider>
              <NextIntlClientProvider locale={locale} messages={messages}>
                <NotificationsProvider>
                  <MovieProvider>
                    <AppLayout>{children}</AppLayout>
                  </MovieProvider>
                </NotificationsProvider>
              </NextIntlClientProvider>
            </SWRProvider>
          </AuthProvider>
        </ConfigProvider>
      </body>
    </html>
  );
}
