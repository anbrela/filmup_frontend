import { Field } from 'formik'
import { FormError } from '@/components/forms/error/form-error'
import { XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { labelVariants, TextFieldProps } from '../text_field/text-field'
import { Label } from '@/components/forms/inputs/label/label'

export const NumberField = ({
  name,
  type,
  label,
  clearable,
  required,
  className,
}: TextFieldProps) => {
  const [touched, setTouched] = React.useState(false)

  return (
    <Field as name={name} required={required} type={type}>
      {({ field, form: { errors, setFieldValue } }: any) => {
        return (
          <div className="flex flex-col h-full relative">
            <div className="w-full h-full relative flex items-center">
              <input
                type="number"
                onFocus={() => setTouched(true)}
                onBlur={() => (!field?.value ? setTouched(false) : null)}
                id={name}
                className={`
              w-full h-full bg-transparent border-b-2 border-gray-200 outline-0
              ${className}  ${
                !!errors[field?.name] && 'text-red-500 border border-red-500'
              }`}
                onChange={(e) => {
                  setFieldValue(field.name, e.target.value, true)
                }}
              />
              {clearable && field.value && (
                <XMarkIcon
                  onClick={() => {
                    setFieldValue(field.name, '', false)
                    setTouched(false)
                  }}
                  className="absolute w-6 h-6 right-4 top-4 cursor-pointer text-gray-400 hover:text-secondary"
                />
              )}
              <Label
                label={label || name}
                required={required}
                htmlFor={name}
                animate={touched ? 'up' : 'down'}
                variants={labelVariants}
                hasError={errors[field?.name]}
              />

              <FormError error={errors[field.name]} />
            </div>
          </div>
        )
      }}
    </Field>
  )
}
