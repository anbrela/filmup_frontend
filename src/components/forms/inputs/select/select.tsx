import {
  SelectProps,
  SelectStyles,
} from '@/components/forms/inputs/select/types/select'
import { default as SelectField } from 'react-select'
import { Field } from 'formik'
import { FormError } from '@/components/forms/error/form-error'
import { useIntl } from '@/shared/hooks/intl/use-intl'
import AsyncSelect from 'react-select/async'
import React from 'react'
import { Label } from '@/components/forms/inputs/label/label'

export type Option = {
  value: string
  label: string
  disabled?: boolean
}

export const selectVariant = {
  up: {
    y: 0,
    marginLeft: 0,
    transition: {
      duration: 0.2,
    },
  },
  down: {
    y: 30,
    marginLeft: 0,
  },
}

export const Select = ({
  name,
  label,
  isLoading,
  withSearch,
  onSearch,
  onInputChange,
  inputValue,
  multiSelect,
  required,
  labelComponent,
  noOptionsMessage,
  searchable,
  type,
  options,
}: SelectProps) => {
  const { formatMessage } = useIntl()
  const [touched, setTouched] = React.useState<any>([])

  if (withSearch) {
    return (
      <Field name={name} required={required} type={type}>
        {({ field, form: { errors, setFieldValue } }: any) => {
          if (
            field.value &&
            field.value.value &&
            !touched.includes(field.name)
          ) {
            setTouched([...touched, field?.name])
          }

          return (
            <div className="flex flex-col h-full relative">
              <Label
                label={label}
                required={required}
                className={labelComponent?.className}
                errorClasses={labelComponent?.errorClasses}
                hasError={errors[field.name]}
                variants={selectVariant}
                animate={touched.includes(field.name) ? 'up' : 'down'}
                htmlFor={name}
              />
              <AsyncSelect
                name={name}
                inputId={name}
                onFocus={() => setTouched([...touched, field?.name])}
                onBlur={() =>
                  !field?.value
                    ? setTouched(
                        touched.filter((el: any) => el !== field?.name)
                      )
                    : null
                }
                cacheOptions
                defaultOptions
                isMulti={multiSelect}
                isSearchable={searchable}
                noOptionsMessage={
                  noOptionsMessage
                    ? () => noOptionsMessage
                    : () => formatMessage('select.noOptions')
                }
                inputValue={inputValue}
                onInputChange={onInputChange}
                loadOptions={onSearch}
                loadingMessage={() => 'Cargando...'}
                isLoading={isLoading}
                isClearable
                placeholder={''}
                styles={SelectStyles(errors, field)}
                classNames={{
                  container: () => 'h-full',
                  control: () => ' h-full',
                }}
                theme={(theme) => ({
                  ...theme,
                  outline: 'none',
                  border: 'none',
                })}
                onChange={(option) => setFieldValue(field.name, option, true)}
              />
              <FormError error={errors[field.name]} />
            </div>
          )
        }}
      </Field>
    )
  }

  return (
    <Field name={name} required={required} type={type}>
      {({ field, form: { errors, setFieldValue } }: any) => {
        return (
          <div className="flex flex-col space-y-2 h-full relative">
            <Label
              label={label}
              required={required}
              className={labelComponent?.className}
              errorClasses={labelComponent?.errorClasses}
              hasError={errors[field.name]}
              variants={selectVariant}
              animate={touched.includes(field.name) ? 'up' : 'down'}
              htmlFor={name}
            />
            <SelectField
              name={name}
              inputId={name}
              isSearchable={searchable}
              onFocus={() => setTouched([...touched, field?.name])}
              onBlur={() =>
                !field?.value
                  ? setTouched(touched.filter((el: any) => el !== field?.name))
                  : null
              }
              noOptionsMessage={
                noOptionsMessage ?? formatMessage('select.noOptions')
              }
              isLoading={isLoading}
              placeholder={' '}
              isClearable
              styles={SelectStyles(errors, field)}
              classNames={{
                container: () => 'h-full',
                control: () => ' h-full',
              }}
              theme={(theme) => ({
                ...theme,
                outline: 'none',
                border: 'none',
              })}
              options={options}
              onChange={(option) => setFieldValue(field.name, option, true)}
            />
            <FormError error={errors[field.name]} />
          </div>
        )
      }}
    </Field>
  )
}
