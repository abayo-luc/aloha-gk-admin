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
  //   SegmentInput,
} from "react-admin";
import ProductCategory from "./components/ProductCategory";

const ProductFilter = (props) => (
  <Filter {...props}>
    <SearchInput source="name" alwaysOn />
    <DateInput source="createdAt" />
  </Filter>
);

export default (props) => (
  <List
    filters={<ProductFilter />}
    sort={{ field: "createdAt", order: "DESC" }}
    perPage={25}
    {...props}
  >
    <Datagrid>
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="price" />
      <DateField source="createdAt" />
      <ProductCategory />
      {/* <TextField source="views" /> */}
      <EditButton basePath="/products" />
    </Datagrid>
  </List>
);
