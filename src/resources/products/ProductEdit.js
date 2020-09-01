import React from "react";
import { Edit, SimpleForm, TextInput, DateInput } from "react-admin";

const ProductTitle = ({ record }) => {
  return <span> {record ? `${record.name}` : ""}</span>;
};

export default (props) => (
  <Edit title={<ProductTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput source="description" options={{ multiLine: true }} />
      {/* <TextInput multiline source="body" /> */}
      {/* <DateInput label="Publication date" source="published_at" />
      <TextInput source="average_note" />
      <TextInput disabled label="Nb views" source="views" /> */}
    </SimpleForm>
  </Edit>
);
