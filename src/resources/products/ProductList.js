import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  // EditButton,
  Filter,
  SearchInput,
  DateInput,
  NumberField,
  RichTextField,
  SingleFieldList,
  ChipField,
  ArrayField,
} from "react-admin";
import ListActions from "./components/ListActions";

const ProductFilter = (props) => (
  <Filter {...props}>
    <SearchInput source="name" alwaysOn />
    <DateInput source="createdAt" />
  </Filter>
);

export default (props) => {
  return (
    <List
      filters={<ProductFilter />}
      actions={<ListActions />}
      sort={{ field: "createdAt", order: "DESC" }}
      perPage={25}
      {...props}
    >
      <Datagrid rowClick="edit">
        <TextField source="name" />
        <NumberField source="price" label="Price(Rwf)" />
        <NumberField source="listPrice" label="List Price(Rwf)" />
        <NumberField source="inStock" label="Stock" />
        <TextField source="status" />
        <RichTextField source="shortDescription" label="Descrption" />

        <ArrayField label="Categories" source="categories">
          <SingleFieldList linkType={false}>
            <ChipField
              source="name"
              varient="outlined"
              size="small"
              clickable={false}
            />
          </SingleFieldList>
        </ArrayField>
        <DateField source="createdAt" label="Date" />
      </Datagrid>
    </List>
  );
};
