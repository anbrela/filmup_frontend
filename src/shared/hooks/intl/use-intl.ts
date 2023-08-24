import { useTranslations, useFormatter } from 'next-intl'

export const useIntl = () => {
  const formatMessage = useTranslations()
  const formatter = useFormatter()

  return {
    formatMessage,
    formatDate: formatter.dateTime,
  }
}
