type formattedOptionsParams = {
  array: any[]
  valueKey: string
  labelKey: string
}

export const formattedOptions = ({
  array,
  valueKey,
  labelKey,
}: formattedOptionsParams) => {
  if (!array?.length || !Array.isArray(array)) {
    return []
  }

  return array.map((item) => {
    return {
      value: item[valueKey],
      label: item[labelKey],
      disabled: false,
    }
  })
}

export const formatTranslatedCode = ({
  array,
  prefix,
  formatMessage,
}: {
  array: any[]
  prefix?: string
  formatMessage: any
}) => {
  if (!array?.length || !Array.isArray(array)) {
    return []
  }

  return array.map((item) => {
    return {
      value: item?.id,
      label: formatMessage(`${prefix ? `${prefix}.` : null}${item?.code}`),
      disabled: false,
    }
  })
}
