export const getPageName = ({
  path,
  messages,
}: {
  path: string
  messages: any
}) => {
  return `${path} - ${messages['app']['name']}`
}
