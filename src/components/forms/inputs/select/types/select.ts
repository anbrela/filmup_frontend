import colors from 'tailwindcss/colors'

type option = {
  value: number
  label: string
  disabled?: boolean
}

export type SelectProps = {
  name: string
  isLoading?: boolean
  label: string
  required?: boolean
  onChange?: any
  value?: any
  multiSelect?: boolean
  withSearch?: boolean
  onSearch?: any
  onInputChange?: any
  labelComponent?: {
    className?: string
    errorClasses?: string
  }
  inputValue?: any
  searchable?: boolean
  noOptionsMessage?: any
  type?: string
  options?: option[]
}

export const SelectStyles = (errors: any, field: any) => {
  return {
    container: (provided: any) => ({
      ...provided,
      outline: 'none',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    control: (provided: any) => ({
      ...provided,
      backgroundColor: 'transparent !important',
      borderTop: 'none',
      boxShadow: '0 !important',
      '&:hover': {
        border: provided.border,
      },
      outline: 'none',
      borderLeft: 'none',
      borderRight: 'none',
      borderRadius: 0,
      borderBottom: errors[field.name]
        ? '1px solid #e53e3e'
        : `2px solid ${colors.gray[200]}`,
    }),

    menu: (provided: any) => ({
      ...provided,
      zIndex: 20,
    }),
  }
}
