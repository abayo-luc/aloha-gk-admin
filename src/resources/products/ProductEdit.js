import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  FormTab,
  Poster,
  TabbedForm,
  required,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";
import { makeStyles } from "@material-ui/core/styles";

const ProductTitle = ({ record }) => {
  return <span> {record ? `${record.name}` : ""}</span>;
};

const requiredValidate = [required()];

const useStyles = makeStyles({
  // ...createStyles,
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
        {/* <FormTab label="Images" contentClassName={classes.tab}>
          <TextInput source="image" fullWidth validate={requiredValidate} />
          <TextInput source="thumbnail" fullWidth validate={requiredValidate} />
        </FormTab> */}

        <FormTab label="Product Details" contentClassName={classes.tab}>
          {/* <Poster /> */}
          <TextInput source="name" fullWidth validate={requiredValidate} />
          <TextInput source="price" fullWidth validate={requiredValidate} />
          <ReferenceInput
            source="categoryId"
            reference="categories"
            validate={requiredValidate}
          >
            <SelectInput source="name" />
          </ReferenceInput>
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
