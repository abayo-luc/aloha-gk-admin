import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  ReferenceManyField,
  Datagrid,
  NumberField,
  EditButton,
  TextField,
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
      <ReferenceManyField
        reference="products"
        target="categoryId"
        label="Associated Products"
        perPage={20}
        fullWidth
      >
        <Datagrid>
          <ThumbnailField />
          <TextField source="name" />
          <TextField source="description" />
          <NumberField
            source="price"
            options={{ style: "currency", currency: "Rwf" }}
          />
          <EditButton path="products" />
        </Datagrid>
      </ReferenceManyField>
    </SimpleForm>
  </Edit>
);
