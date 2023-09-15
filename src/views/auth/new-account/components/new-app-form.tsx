import { Form } from "@/components/forms/form/form";
import { TextField } from "@/components/forms/inputs/text_field/text-field";
import { Row } from "@/components/forms/row/row";
import { Column } from "@/components/forms/column/column";
import { Button } from "@/components/content/button/button";
import React from "react";

type NewAppFormProps = {
  values: any;
  setValues: any;
  onSubmit: any;
};
export const NewAppForm = ({
  values,
  setValues,
  onSubmit,
}: NewAppFormProps) => {
  return (
    <Form
      onChange={setValues}
      defaultValues={values}
      onSubmit={onSubmit}
      className="w-4/6 p-4 flex-col space-y-4 bg-white rounded "
    >
      <Row>
        <div className=" w-full">
          Añade un nombre de usuario y
          <span className="italic text-primary font-bold"> mola aún más</span>
        </div>
      </Row>
      <Row>
        <Column>
          <TextField label="Correo electrónico" name="email" type="email" />
        </Column>
      </Row>
      <Row>
        <Column>
          <TextField label="Nombre de usuario" name="username" type="text" />
        </Column>
      </Row>
      <Row className="flex justify-end space-x-2">
        <Button type="submit" label="enviar" kind="primary" />
      </Row>
    </Form>
  );
};
