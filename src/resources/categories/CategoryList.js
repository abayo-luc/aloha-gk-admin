import React from "react";
import { List, Datagrid, TextField, DateField, EditButton } from "react-admin";

export default (props) => (
  <List sort={{ field: "createdAt", order: "DESC" }} perPage={25} {...props}>
    <Datagrid>
      <TextField source="name" />
      <TextField source="description" />
      {/* <TextField source="price" /> */}
      <DateField source="createdAt" />
      {/* <TextField source="views" /> */}
      <EditButton basePath="/categories" />
    </Datagrid>
  </List>
);
