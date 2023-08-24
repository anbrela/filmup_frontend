import React from "react";
import { useIntl } from "@/shared/hooks/intl/use-intl";
import { Formik, Form as FormikForm } from "formik";
import { useForm } from "@/shared/hooks/form/use-form";

type FormProps = {
  onValidate?: (values: any) => void;
  defaultValues: any;
  onSubmit: (values: any) => void;
  onChange?: (values: any) => void;
  validateOnChange?: boolean;
  className?: string;
  validateOnBlur?: boolean;
  children: React.ReactNode;
};

export const Form = ({
  onValidate,
  onSubmit,
  defaultValues,
  validateOnChange,
  className,
  onChange,
  validateOnBlur,
  children,
  ...props
}: FormProps) => {
  const { formatMessage } = useIntl();
  const { validationSchema } = useForm({ children, formatMessage });

  return (
    <Formik
      initialValues={defaultValues}
      validate={onValidate}
      validateOnMount={false}
      validationSchema={validationSchema}
      validateOnChange={false}
      validateOnBlur={validateOnBlur}
      onSubmit={onSubmit}
      {...props}
    >
      <FormikForm className={className}>{children}</FormikForm>
    </Formik>
  );
};
