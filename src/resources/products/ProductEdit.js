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
  ArrayInput,
  SimpleFormIterator,
  ImageInput,
  ImageField,
} from "react-admin";
import { InputAdornment } from "@material-ui/core";
import RichTextInput from "ra-input-rich-text";
import { makeStyles } from "@material-ui/core/styles";
import ImagePreview from "./components/ImagePreview";
import DeleteButton from "../../components/Buttons/DeleteButton";

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
          <ImageInput
            source="files"
            label="Product Images"
            accept="image/*"
            placeholder={<p>Drop your file here</p>}
            multiple
          >
            <ImageField source="src" title="title" />
          </ImageInput>

          <ArrayInput source="images" label="Product Images">
            <SimpleFormIterator disableAdd removeButton={<DeleteButton />}>
              <ImagePreview />
              <TextInput
                source="url"
                label="Image Url"
                fullWidth
                disabled
                variant="outlined"
              />
            </SimpleFormIterator>
          </ArrayInput>
        </FormTab>

        <FormTab label="Product Details" contentClassName={classes.tab}>
          <TextInput
            source="name"
            fullWidth
            validate={requiredValidate}
            variant="outlined"
          />
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
            variant="outlined"
          />
          <ReferenceInput
            source="categoryId"
            reference="categories"
            validate={requiredValidate}
            variant="outlined"
          >
            <SelectInput source="name" />
          </ReferenceInput>
          <NumberInput
            source="totalItems"
            label="Available Items"
            validate={requiredValidate}
            variant="outlined"
          />
          <NumberInput
            source="discountRate"
            label="Discrount Rate"
            variant="outlined"
          />
        </FormTab>
        <FormTab
          label="Description"
          path="description"
          contentClassName={classes.tab}
        >
          <TextInput
            source="summary"
            label="Product Summary"
            validate={requiredValidate}
            variant="outlined"
            fullWidth
            multiline
            rows={3}
          />
          <RichTextInput
            source="description"
            label="Product Description"
            variant="outlined"
            validate={requiredValidate}
            rows={7}
          />
        </FormTab>
      </TabbedForm>
    </Edit>
  );
};
