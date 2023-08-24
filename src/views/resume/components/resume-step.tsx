import { Form } from "@/components/forms/form/form";
import { TextField } from "@/components/forms/inputs/text_field/text-field";
import { Row } from "@/components/forms/row/row";
import { Column } from "@/components/forms/column/column";
import { ButtonGroup } from "@/components/content/button_group/button-group";
import { Button } from "@/components/content/button/button";
import React from "react";
import { ResumeStep } from "@/views/resume/components/types/resume-step.type";

export type ResumeStepProps = {
  formatMessage: (id: string) => string;
  values: any;
  onGoNext: (data: ResumeStep) => void;
};

export const ResumeStepForm = ({
  formatMessage,
  values,
  onGoNext,
}: ResumeStepProps) => {
  return (
    <div className="w-4/6">
      <Form
        className="w-full h-full flex flex-col justify-center items-center"
        defaultValues={values}
        onSubmit={onGoNext}
      >
        <Row className="grid-cols-3 w-full">
          <Column size="large">
            <TextField
              clearable
              required
              name="title"
              label={formatMessage("resume.form.steps.resume.titleField")}
            />
          </Column>
        </Row>
        <Row className="grid-cols-3 w-full">
          <Column size="large">
            <TextField
              clearable
              name="description"
              label={formatMessage("resume.form.steps.resume.description")}
            />
          </Column>
        </Row>
        <ButtonGroup align="right" className="absolute -bottom-14 right-0">
          <Button label={formatMessage("form.next")} type="submit" />
        </ButtonGroup>
      </Form>
    </div>
  );
};
