import React from "react";
import { FC, Fragment, useCallback, useEffect, useState } from "react";
import {
  AutocompleteInput,
  BooleanField,
  Datagrid,
  DateField,
  DateInput,
  Filter,
  List,
  NullableBooleanInput,
  NumberField,
  ReferenceInput,
  SearchInput,
  TextField,
  TextInput,
} from "react-admin";
import { useMediaQuery, Divider, Tabs, Tab, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MobileGrid from "./components/MobileGrid";

const useDatagridStyles = makeStyles({
  total: { fontWeight: "bold" },
});

const tabs = [
  { id: "ordered", name: "ordered" },
  { id: "delivered", name: "delivered" },
  { id: "cancelled", name: "cancelled" },
];

const UserFilter = (props) => (
  <Filter {...props}>
    <SearchInput source="customer.name" alwaysOn />
    <DateInput source="createdAt" />
    {/* <NullableBooleanInput source="has_ordered" />
    <NullableBooleanInput source="has_newsletter" defaultValue /> */}
    {/* <SegmentInput /> */}
  </Filter>
);

const TabbedDatagrid = ({
  ids,
  filterValues,
  setFilters,
  displayedFilters,
  ...rest
}) => {
  const classes = useDatagridStyles();
  const isXSmall = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  const [ordered, setOrdered] = useState([]);
  const [delivered, setDelivered] = useState([]);
  const [cancelled, setCancelled] = useState([]);

  useEffect(() => {
    if (ids && ids !== filterValues.status) {
      switch (filterValues.status) {
        case "ordered":
          setOrdered(ids);
          break;
        case "delivered":
          setDelivered(ids);
          break;
        case "cancelled":
          setCancelled(ids);
          break;
        default:
          break;
      }
    }
  }, [ids, filterValues.status]);

  const handleChange = useCallback(
    (event, value) => {
      setFilters &&
        setFilters({ ...filterValues, status: value }, displayedFilters);
    },
    [displayedFilters, filterValues, setFilters]
  );

  const selectedIds =
    filterValues.status === "ordered"
      ? ordered
      : filterValues.status === "delivered"
      ? delivered
      : cancelled;

  return (
    <Fragment>
      <Tabs
        variant="fullWidth"
        centered
        value={filterValues.status}
        indicatorColor="primary"
        onChange={handleChange}
      >
        {tabs.map((choice) => (
          <Tab key={choice.id} label={choice.name} value={choice.id} />
        ))}
      </Tabs>
      <Divider />
      {isXSmall ? (
        <MobileGrid {...rest} ids={selectedIds} />
      ) : (
        <div>
          {filterValues.status === "ordered" && (
            <Datagrid {...rest} ids={ordered} optimized rowClick="edit">
              <NumberField source="orderId" label="ID" />
              <DateField source="createdAt" showTime />
              <TextField source="customer.names" label="Customer" />
              <TextField source="customer.phone" label="Phone" />
              <NumberField
                source="totalAmount"
                options={{
                  style: "currency",
                  currency: "USD",
                }}
                className={classes.total}
              />
            </Datagrid>
          )}
          {filterValues.status === "delivered" && (
            <Datagrid {...rest} ids={delivered} rowClick="edit">
              <NumberField source="orderId" label="ID" />
              <DateField source="createdAt" showTime />
              <TextField source="customer.names" label="Customer" />
              <TextField source="customer.phone" label="Phone" />
              <NumberField
                source="totalAmount"
                options={{
                  style: "currency",
                  currency: "USD",
                }}
                className={classes.total}
              />
              <BooleanField source="returned" />
            </Datagrid>
          )}
          {filterValues.status === "cancelled" && (
            <Datagrid {...rest} ids={cancelled} rowClick="edit">
              <NumberField source="orderId" label="ID" />
              <DateField source="createdAt" showTime />
              <TextField source="customer.names" label="Customer" />
              <TextField source="customer.phone" label="Phone" />
              <NumberField
                source="totalAmount"
                options={{
                  style: "currency",
                  currency: "USD",
                }}
                className={classes.total}
              />
              <BooleanField source="returned" />
            </Datagrid>
          )}
        </div>
      )}
    </Fragment>
  );
};

export default (props) => (
  <List
    filters={<UserFilter />}
    filterDefaultValues={{ status: "ordered" }}
    sort={{ field: "createdAt", order: "DESC" }}
    perPage={25}
    {...props}
  >
    <TabbedDatagrid />
    {/* <Datagrid rowClick="edit">
      <TextField source="orderId" label="ID" />
      <TextField source="customer.names" label="Name" />
      <TextField source="customer.phone" label="Phone" />
      <TextField source="totalAmount" />
      <TextField source="status" />
      <DateField source="createdAt" label="Registered" />
    </Datagrid> */}
  </List>
);
