import { Field } from "formik";
import { FormError } from "@/components/forms/error/form-error";
import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Label } from "@/components/forms/inputs/label/label";

export type TextFieldProps = {
  name: string;
  type?: string;
  placeholder?: string;
  className?: string;
  label?: string;
  inputProps?: any;
  clearable?: boolean;
  onChange?: any;
  value?: any;
  required?: boolean;
};

export const labelVariants = {
  up: {
    y: 4,
    background: "white",
    marginLeft: 10,
    paddingLeft: 10,
    transition: {
      duration: 0.2,
    },
  },
  down: {
    y: 29,
    marginLeft: 10,
    paddingLeft: 15,
  },
};

export const TextField = ({
  name,
  type,
  label,
  onChange,
  clearable,
  required,
  className,
}: TextFieldProps) => {
  const [touched, setTouched] = React.useState<any>([]);

  return (
    <Field as name={name} required={required} type={type}>
      {({ field, form: { errors, setFieldValue } }: any) => {
        if (field?.value && !touched.includes(field?.name)) {
          setTouched([...touched, field?.name]);
        }

        return (
          <div className="flex flex-col h-full rounded relative">
            <div
              className="w-full h-full relative flex items-center"
              onBlur={() =>
                !field?.value
                  ? setTouched(
                      touched.filter((el: string) => el !== field?.name),
                    )
                  : null
              }
            >
              <input
                onFocus={() => setTouched([...touched, field?.name])}
                id={name}
                className={`
              w-full h-full border-2 border-gray-100 rounded-lg px-5 outline-0
              ${className}  ${
                !!errors[field?.name] && "text-red-500 border-b-red-500"
              }`}
                onChange={(e) => {
                  setFieldValue(field.name, e.target.value, true);
                  onChange && onChange(e);
                }}
              />
              {clearable && field.value && (
                <XMarkIcon
                  onClick={() => {
                    setFieldValue(field.name, "", false);
                    setTouched(
                      touched.filter((el: string) => el !== field?.name),
                    );
                  }}
                  className="absolute w-5 h-5 right-1 top-4 cursor-pointer text-gray-400 hover:text-secondary"
                />
              )}
              <Label
                label={label || name}
                required={required}
                animate={touched.includes(field?.name) ? "up" : "down"}
                variants={labelVariants}
                htmlFor={name}
                hasError={!!errors[field?.name]}
              />

              <FormError error={errors[field.name]} />
            </div>
          </div>
        );
      }}
    </Field>
  );
};
