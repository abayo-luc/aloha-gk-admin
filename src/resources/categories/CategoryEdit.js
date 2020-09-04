import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  Datagrid,
  NumberField,
  EditButton,
  TextField,
  ArrayField,
} from "react-admin";
import ThumbnailField from "../products/components/ThumbnailField";

const CategoryTitle = ({ record }) => {
  return record ? (
    <span>
      Category &quot;
      {record.name}&quot;
    </span>
  ) : null;
};
export default (props) => (
  <Edit title={<CategoryTitle />} {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="image" />
      <ArrayField source="products" label="Associated Products" fullWidth>
        <Datagrid>
          <ThumbnailField />
          <TextField source="name" />
          <TextField source="fullDescription" />
          <NumberField
            source="price"
            options={{ style: "currency", currency: "Rwf" }}
          />
          <EditButton path="products" />
        </Datagrid>
      </ArrayField>
    </SimpleForm>
  </Edit>
);
