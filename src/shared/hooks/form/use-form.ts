import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'

export const useForm = ({
  children,
  formatMessage,
}: {
  children: any
  formatMessage: (id: string, values?: any) => string
}) => {
  const [validationSchema, setValidationSchema] = useState({})

  const formFieldNames = [
    'TextField',
    'NumberField',
    'DateField',
    'Select',
    'CheckboxField',
    'RadioField',
  ]

  useEffect(() => {
    let sch: any = {}

    const formatElements = (element: any) => {
      const formFields = findFormFields(element)

      formFields.forEach((element) => {
        const { props } = element

        if (
          props?.type === 'select' &&
          !props?.multiSelect &&
          props?.required
        ) {
          sch = { ...sch, [props.name]: Yup.object() }
        } else if (props?.type === 'select' && props?.multiSelect) {
          sch = { ...sch, [props.name]: Yup.array() }
        } else if (props?.required) {
          sch = { ...sch, [props.name]: Yup.string() }
        }

        if (props?.type === 'email') {
          sch[props.name] = sch[props.name].email(formatMessage('form.email'))
        }

        if (props?.required) {
          sch[props.name] = sch[props.name].required(
            formatMessage('form.required', {
              name: props.name,
            })
          )
        }
      })
    }

    const findFormFields = (element: any) => {
      const formFields = []

      if (formFieldNames.includes(element?.type?.name)) {
        formFields.push(element)
      } else if (element.props && element.props.children) {
        React.Children.forEach(element.props.children, (child) => {
          formFields.push(...findFormFields(child)) // Llamada recursiva para los hijos
        })
      }

      return formFields
    }

    if (Array.isArray(children)) {
      children.forEach((element) => {
        formatElements(element)
      })
    } else {
      formatElements(children)
    }

    setValidationSchema(Yup.object().shape({ ...sch }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    validationSchema,
  }
}
