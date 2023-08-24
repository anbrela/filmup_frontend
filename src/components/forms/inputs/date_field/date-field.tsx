import { Field } from 'formik'
import { FormError } from '@/components/forms/error/form-error'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import React from 'react'
import { Label } from '@/components/forms/inputs/label/label'
import { labelVariants } from '@/components/forms/inputs/text_field/text-field'

type DateFieldProps = {
  name: string
  type?: string
  className?: string
  label?: string
  clearable?: boolean
  locale: string
  required?: boolean
  disablePast?: boolean
}

export const DateField = ({
  required,
  name,
  type,
  label,
  locale,
  disablePast,
  clearable,
}: DateFieldProps) => {
  const [touched, setTouched] = React.useState<any>([])

  return (
    <Field name={name} required={required} type={type}>
      {({ field, form: { errors, setFieldValue } }: any) => {
        return (
          <div className="flex flex-col space-y-2 h-full relative items-center justify-center ">
            <Label
              label={label || name}
              required={required}
              variants={labelVariants}
              animate={touched.includes(field.name) ? 'up' : 'down'}
              htmlFor={name}
              hasError={errors[field?.name]}
            />
            <DatePicker
              id={name}
              name={name}
              locale={locale}
              minDate={disablePast ? new Date() : null}
              clearButtonClassName="bg-transparent"
              isClearable={clearable}
              dayClassName={() => 'text-white'}
              dateFormat={locale === 'es' ? 'dd/MM/yyyy' : 'MM/dd/yyyy'}
              showTimeSelect={false}
              onFocus={() => setTouched([...touched, field?.name])}
              onBlur={() =>
                !field?.value &&
                setTouched(touched.filter((t: any) => t !== name))
              }
              selected={field?.value}
              className="w-full outline-0 h-full min-h-full bg-transparent border-b-2 border-b-gray-200 flex items-center justify-center"
              wrapperClassName="w-full outline-0 h-full flex  justify-center items-center min-h-full"
              onChange={(date) => setFieldValue(field.name, date, true)}
            />
            <FormError error={errors[field.name]} />
          </div>
        )
      }}
    </Field>
  )
}
