import React from "react";
import {
  Edit,
  TextInput,
  FormTab,
  TabbedForm,
  NumberInput,
  required,
  ReferenceInput,
  SelectInput,
  ReferenceManyField,
  ArrayInput,
  SimpleFormIterator,
} from "react-admin";
import { InputAdornment } from "@material-ui/core";
import RichTextInput from "ra-input-rich-text";
import { makeStyles } from "@material-ui/core/styles";

const ProductTitle = ({ record }) => {
  return <span> {record ? `${record.name}` : ""}</span>;
};

const requiredValidate = [required()];

const useStyles = makeStyles({
  comment: {
    maxWidth: "20em",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  tab: {
    maxWidth: "40em",
    display: "block",
  },
});

export default (props) => {
  const classes = useStyles();
  return (
    <Edit title={<ProductTitle />} {...props}>
      <TabbedForm>
        <FormTab label="Images" contentClassName={classes.tab}>
          <ReferenceManyField
            reference="images"
            target="productId"
            addLabel={false}
            fullWidth
          >
            <ArrayInput source="images">
              <SimpleFormIterator>
                <TextInput source="url" label="Image Url" fullWidth />
              </SimpleFormIterator>
            </ArrayInput>
          </ReferenceManyField>
        </FormTab>

        <FormTab label="Product Details" contentClassName={classes.tab}>
          <TextInput source="name" fullWidth validate={requiredValidate} />
          <NumberInput
            source="price"
            className={classes.price}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Rwf</InputAdornment>
              ),
            }}
            validate={requiredValidate}
            fullWidth
          />
          <ReferenceInput
            source="categoryId"
            reference="categories"
            validate={requiredValidate}
          >
            <SelectInput source="name" />
          </ReferenceInput>
          <NumberInput
            source="totalItems"
            label="Available Items"
            validate={requiredValidate}
          />
          <NumberInput source="discountRate" label="Discrount Rate" />
        </FormTab>
        <FormTab
          label="Description"
          path="description"
          contentClassName={classes.tab}
        >
          <RichTextInput
            source="description"
            label=""
            validate={requiredValidate}
          />
        </FormTab>
      </TabbedForm>
    </Edit>
  );
};
