import {
  labelVariants,
  TextFieldProps,
} from "@/components/forms/inputs/text_field/text-field";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Label } from "@/components/forms/inputs/label/label";
import { FormError } from "@/components/forms/error/form-error";
import React from "react";
import { Field } from "formik";

interface TextAreaProps extends TextFieldProps {
  maxLength?: number;
}

export const TextArea = ({
  name,
  label,
  required,
  className,
  maxLength,
  onChange,
  clearable,
}: TextAreaProps) => {
  const [touched, setTouched] = React.useState<any>([]);

  return (
    <Field as name={name} required={required}>
      {({
        field,
        form: { errors, setFieldValue, setValues, ...props },
      }: any) => {
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
              <textarea
                draggable={false}
                onFocus={() => setTouched([...touched, field?.name])}
                id={name}
                rows={3}
                maxLength={maxLength}
                className={`
              w-full h-full resize-none bg-transparent border-b-2 text-lg border-gray-100 py-3  outline-0
              ${className}  ${
                !!errors[field?.name] && "text-red-500 border-b-red-500"
              }`}
                value={field?.value}
                onChange={(e) => {
                  setFieldValue(field.name, e.target.value, true);
                }}
              />
              {clearable && field.value && (
                <XMarkIcon
                  onClick={() => {
                    setFieldValue(field.name, "", true);
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
            </div>{" "}
          </div>
        );
      }}
    </Field>
  );
};
