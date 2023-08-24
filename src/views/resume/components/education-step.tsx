import { Form } from "@/components/forms/form/form";
import { Row } from "@/components/forms/row/row";
import { Column } from "@/components/forms/column/column";
import { ButtonGroup } from "@/components/content/button_group/button-group";
import { Button } from "@/components/content/button/button";
import React from "react";
import { ResumeStep } from "@/views/resume/components/types/resume-step.type";
import { ResumeStepProps } from "@/views/resume/components/resume-step";
import { TextField } from "@/components/forms/inputs/text_field/text-field";
import { ActionButton } from "@/components/content/action_button/action-button";
import { FieldArray } from "formik";

import { PlusIcon } from "@heroicons/react/24/outline";
import { EducationTemplate } from "@/views/resume/components/education-template";

interface PersonalStepProps extends ResumeStepProps {
  onGoBack: (data: ResumeStep) => void;
}

export const EducationStep = ({
  formatMessage,
  onGoBack,
  values,
  onGoNext,
}: PersonalStepProps) => {
  return (
    <div className="w-5/6">
      <Form
        className="w-full h-full flex flex-col justify-center items-center"
        defaultValues={values}
        onSubmit={(vals) => console.log("submit", vals)}
      >
        <FieldArray name="studies">
          {({ form: { values }, ...arrayHelpers }) => {
            console.log("values", values);
            return (
              <div className="flex flex-col space-y-4 w-full">
                <EducationTemplate
                  formatMessage={formatMessage}
                  arrayHelpers={arrayHelpers}
                  study={{
                    title: values?.title,
                    place: values?.place,
                    year: values?.year,
                  }}
                />
                {values?.studies?.map((study, index) => (
                  <EducationTemplate
                    key={index}
                    index={index}
                    formatMessage={formatMessage}
                    arrayHelpers={arrayHelpers}
                    study={study}
                  />
                ))}
              </div>
            );
          }}
        </FieldArray>
        <ButtonGroup align="right" className="absolute -bottom-14 right-0">
          <Button
            className="mr-4"
            kind="secondary"
            disabled={false}
            label={formatMessage("form.back")}
            onClick={onGoBack}
          />
          <Button label={formatMessage("form.next")} type="submit" />
        </ButtonGroup>
      </Form>
    </div>
  );
};
