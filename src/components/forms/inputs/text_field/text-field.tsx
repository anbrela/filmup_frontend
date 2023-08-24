import { Field } from "formik";
import { FormError } from "@/components/forms/error/form-error";
import { XMarkIcon } from "@heroicons/react/24/outline";
import React, { useRef } from "react";
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
};

export const TextField = ({
  name,
  type,
  label,
  placeholder,
  clearable,
  required,
  className,
}: TextFieldProps) => {
  const [touched, setTouched] = React.useState<any>([]);

  return (
    <Field name={name} required={required} type={type}>
      {({ field, form: { setFieldValue, errors, ...props }, meta }: any) => {
        if ((placeholder || meta?.value) && !touched.includes(field?.name)) {
          setTouched([...touched, field?.name]);
        }

        return (
          <div className="flex flex-col h-full rounded relative">
            <div
              className="w-full h-full relative flex items-center"
              onBlur={() =>
                !meta?.value
                  ? setTouched(
                      touched.filter((el: string) => el !== field?.name),
                    )
                  : null
              }
            >
              <input
                onFocus={() => setTouched([...touched, field?.name])}
                id={name}
                placeholder={placeholder}
                className={`
              w-full h-full bg-transparent border-b-2 border-b-gray-100 text-lg outline-0 pr-12 truncate placeholder:text-gray-300
              ${className} 
             
               ${meta?.error && "text-red-500 border-b-red-500"}`}
                {...field}
              />
              {clearable && meta?.value && (
                <XMarkIcon
                  onClick={() => {
                    props.handleChange({
                      target: { id: field.name, value: "" },
                    });
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
                hasError={!!meta?.error}
              />

              <FormError error={meta?.error} />
            </div>
          </div>
        );
      }}
    </Field>
  );
};
