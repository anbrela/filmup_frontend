import { Row } from "@/components/forms/row/row";
import { Column } from "@/components/forms/column/column";
import { TextField } from "@/components/forms/inputs/text_field/text-field";
import { ActionButton } from "@/components/content/action_button/action-button";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import React from "react";

export const EducationReadOnly = ({ values }: any) => {};

export const EducationTemplate = ({
  index,
  formatMessage,
  arrayHelpers,
  study,
}: any) => {
  return (
    <Row className="grid-cols-8 w-full">
      <Column size="large">
        <TextField
          clearable
          required
          placeholder="Ingeniería Civil Informática"
          name="title"
          label={formatMessage("resume.form.steps.studies.titleField")}
        />
      </Column>
      <Column size="medium">
        <TextField
          clearable
          required
          placeholder="Universidad de Chile"
          name="place"
          label={formatMessage("resume.form.steps.studies.place")}
        />
      </Column>
      <Column size="medium">
        <TextField
          clearable
          required
          placeholder="2013-2017"
          name="year"
          label={formatMessage("resume.form.steps.studies.year")}
        />
      </Column>
      <Column className="flex items-center justify-center">
        <ActionButton
          icon={PlusIcon}
          label=""
          type="button"
          onClick={() => arrayHelpers.push(study)}
        />
        <ActionButton
          icon={TrashIcon}
          label=""
          type="button"
          onClick={() => arrayHelpers.remove(index)}
        />
      </Column>
    </Row>
  );
};
