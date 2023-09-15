import { FieldArray } from "formik";

import React from "react";

type ArrayFieldProps = {
  formatMessage: any;
  name: string;
  fieldTemplate: React.FunctionComponent;
  fieldItem: React.FunctionComponent;
};

export const ArrayField = ({
  formatMessage,
  name,
  fieldTemplate,
  fieldItem,
}: ArrayFieldProps) => {
  return (
    <FieldArray name={name}>
      {({
        form: { values, ...form },
        ...arrayHelpers
      }: {
        form: any;
        arrayHelpers: any;
      }) => {
        return (
          <div className="flex flex-col w-full pb-10">
            {React.createElement<any>(fieldTemplate, {
              formatMessage,
              arrayHelpers,
              form,
              values,
            })}
            {values?.[name]?.map((item: any, index: number, array: any) =>
              React.createElement<any>(fieldItem, {
                item,
                index,
                arrayHelpers,
                array,
              }),
            )}
          </div>
        );
      }}
    </FieldArray>
  );
};
