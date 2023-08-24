import { Form } from "@/components/forms/form/form";
import { TextField } from "@/components/forms/inputs/text_field/text-field";
import { Row } from "@/components/forms/row/row";
import { Column } from "@/components/forms/column/column";
import { ButtonGroup } from "@/components/content/button_group/button-group";
import { Button } from "@/components/content/button/button";
import React from "react";
import { ResumeStep } from "@/views/resume/components/types/resume-step.type";
import { ResumeStepProps } from "@/views/resume/components/resume-step";
import { TextArea } from "@/components/forms/inputs/text_area/text-area";

interface PersonalStepProps extends ResumeStepProps {
  onGoBack: (data: ResumeStep) => void;
}

export const PersonalStep = ({
  formatMessage,
  values,
  onGoBack,
  onGoNext,
}: PersonalStepProps) => {
  return (
    <div className="w-4/6">
      <Form
        className="w-full h-full flex flex-col justify-center items-center"
        defaultValues={values}
        onSubmit={onGoNext}
      >
        <Row className="grid-cols-4 w-full">
          <Column size="medium">
            <TextField
              clearable
              required
              name="name"
              label={formatMessage("resume.form.steps.personal.name")}
            />
          </Column>
          <Column size="medium">
            <TextField
              clearable
              required
              name="surname"
              label={formatMessage("resume.form.steps.personal.surname")}
            />
          </Column>
        </Row>
        <Row className="grid-cols-4 w-full">
          <Column size="large">
            <TextField
              clearable
              type="email"
              name="email"
              label={formatMessage("resume.form.steps.personal.email")}
            />
          </Column>
          <Column>
            <TextField
              clearable
              name="phone"
              label={formatMessage("resume.form.steps.personal.phone")}
            />
          </Column>
        </Row>
        <Row className="w-full">
          <TextArea
            name="description"
            label={formatMessage("resume.form.steps.personal.description")}
          />
        </Row>
        <ButtonGroup align="right" className="absolute -bottom-14 right-0">
          <Button
            className="mr-4"
            kind="secondary"
            label={formatMessage("form.back")}
            onClick={onGoBack}
          />
          <Button label={formatMessage("form.next")} type="submit" />
        </ButtonGroup>
      </Form>
    </div>
  );
};
