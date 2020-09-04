import React from "react";
import {
  Create,
  FormTab,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TabbedForm,
  TextInput,
  required,
  ImageField,
  ImageInput,
} from "react-admin";
import { InputAdornment } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import RichTextInput from "ra-input-rich-text";

export const styles = {
  price: { width: "7em" },
  width: { width: "7em" },
  height: { width: "7em" },
  stock: { width: "7em" },
  widthFormGroup: { display: "inline-block" },
  heightFormGroup: { display: "inline-block", marginLeft: 32 },
};
const useStyles = makeStyles(styles);
const requiredValidate = [required()];

export default (props) => {
  const classes = useStyles();
  return (
    <Create {...props}>
      <TabbedForm>
        <FormTab label="Images">
          <ImageInput
            source="files"
            label="Product Images"
            accept="image/*"
            placeholder={<p>Drop your file here</p>}
            multiple
          >
            <ImageField source="src" title="title" />
          </ImageInput>
        </FormTab>
        <FormTab label="Details">
          <TextInput source="name" fullWidth validate={requiredValidate} />
          <NumberInput
            source="price"
            className={classes.price}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" fullWidth>
                  Rwf
                </InputAdornment>
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
        <FormTab label="Description">
          <RichTextInput
            source="description"
            label=""
            validate={requiredValidate}
          />
        </FormTab>
      </TabbedForm>
    </Create>
  );
};
