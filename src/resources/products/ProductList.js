import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  Filter,
  SearchInput,
  DateInput,
  NumberField,
  RichTextField,
} from "react-admin";
import ListActions from "./components/ListActions";

const ProductFilter = (props) => (
  <Filter {...props}>
    <SearchInput source="name" alwaysOn />
    <DateInput source="createdAt" />
  </Filter>
);

export default (props) => {
  console.log(props);
  return (
    <List
      filters={<ProductFilter />}
      actions={<ListActions />}
      sort={{ field: "createdAt", order: "DESC" }}
      perPage={25}
      {...props}
    >
      <Datagrid>
        <TextField source="name" />
        <RichTextField source="description" />
        <NumberField
          source="price"
          options={{ style: "currency", currency: "Rwf" }}
        />
        <DateField source="createdAt" label="Date" />
        <TextField source="category.name" label="Category" />
        {/* <TextField source="views" /> */}
        <EditButton basePath="/products" />
      </Datagrid>
    </List>
  );
};
