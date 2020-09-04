import React from "react";
import {
  Create,
  FormTab,
  NumberInput,
  TabbedForm,
  TextInput,
  required,
  ReferenceArrayInput,
  SelectArrayInput,
  ImageField,
  ImageInput,
  RadioButtonGroupInput,
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
  tab: {
    maxWidth: "50%",
    display: "block",
  },
  row: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfWidth: {
    width: "45%",
  },
  fullWidth: {
    width: "100%",
  },
};
const useStyles = makeStyles(styles);
const requiredValidate = [required()];

export default (props) => {
  const classes = useStyles();
  return (
    <Create {...props}>
      <TabbedForm>
        <FormTab label="Images" contentClassName={classes.tab}>
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
        <FormTab label="Product Details" contentClassName={classes.tab}>
          <TextInput
            source="name"
            fullWidth
            validate={requiredValidate}
            variant="outlined"
          />
          <div className={classes.row}>
            <NumberInput
              source="price"
              className={classes.halfWidth}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Rwf</InputAdornment>
                ),
              }}
              validate={requiredValidate}
              variant="outlined"
            />
            <NumberInput
              source="listPrice"
              className={classes.halfWidth}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Rwf</InputAdornment>
                ),
              }}
              variant="outlined"
            />
          </div>

          <div className={classes.row}>
            <NumberInput
              source="inStock"
              label="In Stock"
              validate={requiredValidate}
              fullWidth
              className={classes.halfWidth}
              variant="outlined"
            />
            <NumberInput
              source="discountRate"
              label="Discrount Rate"
              variant="outlined"
              fullWidth
              className={classes.halfWidth}
            />
          </div>
          <ReferenceArrayInput
            source="category_ids"
            label="Categories"
            reference="categories"
            validate={requiredValidate}
            variant="outlined"
            fullWidth
          >
            <SelectArrayInput optionText="name" />
          </ReferenceArrayInput>

          <RadioButtonGroupInput
            source="status"
            label="status"
            className={classes.fullWidth}
            defaultValue="hidden"
            choices={[
              { id: "active", name: "active" },
              { id: "hidden", name: "hidden" },
              { id: "disabled", name: "disabled" },
            ]}
          />
        </FormTab>
        <FormTab label="Description" contentClassName={classes.tab}>
          <TextInput
            source="shortDescription"
            label="Short Description"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
          />
          <RichTextInput
            source="fullDescription"
            label="Short Description"
            variant="outlined"
            rows={7}
          />
        </FormTab>
      </TabbedForm>
    </Create>
  );
};
