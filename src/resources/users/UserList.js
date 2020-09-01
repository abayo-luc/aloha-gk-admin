import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  Filter,
  SearchInput,
  DateInput,
  //   SegmentInput,
} from "react-admin";

const UserFilter = (props) => (
  <Filter {...props}>
    <SearchInput source="names" alwaysOn />
    <DateInput source="createdAt" />
    {/* <NullableBooleanInput source="has_ordered" />
    <NullableBooleanInput source="has_newsletter" defaultValue /> */}
    {/* <SegmentInput /> */}
  </Filter>
);

export default (props) => (
  <List
    filters={<UserFilter />}
    sort={{ field: "createdAt", order: "DESC" }}
    perPage={25}
    {...props}
  >
    <Datagrid>
      <TextField source="names" />
      <TextField source="email" />
      <TextField source="phone" />
      <TextField source="address" />
      <DateField source="createdAt" label="Registered" />
    </Datagrid>
  </List>
);
