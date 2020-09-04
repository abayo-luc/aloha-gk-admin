import React from "react";
import {
  Edit,
  TextInput,
  FormTab,
  TabbedForm,
  NumberInput,
  required,
  ArrayInput,
  SimpleFormIterator,
  ImageInput,
  ImageField,
  RadioButtonGroupInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ArrayField,
  SingleFieldList,
  ChipField,
  SelectInput,
} from "react-admin";
import { InputAdornment } from "@material-ui/core";
import RichTextInput from "ra-input-rich-text";
import { makeStyles } from "@material-ui/core/styles";
import ImagePreview from "./components/ImagePreview";
import DeleteButton from "../../components/Buttons/DeleteButton";
import Category from "./components/Category";
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
});

export default (props) => {
  const classes = useStyles();
  console.log(props);
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
          <ArrayField label="Existing Categories" source="categories">
            <SingleFieldList>
              <ChipField
                source="name"
                varient="outlined"
                size="small"
                clickable={false}
              />
            </SingleFieldList>
          </ArrayField>
          <ReferenceArrayInput
            source="category_ids"
            label="New Categories"
            reference="categories"
            variant="outlined"
            fullWidth
          >
            <SelectArrayInput optionText="name" />
          </ReferenceArrayInput>

          <RadioButtonGroupInput
            source="status"
            label="status"
            className={classes.fullWidth}
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
            label="Full Description"
            variant="outlined"
            rows={7}
          />
        </FormTab>
      </TabbedForm>
    </Edit>
  );
};
