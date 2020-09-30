import * as React from "react";
import {
  BooleanInput,
  DateInput,
  Edit,
  SelectInput,
  SimpleForm,
  NumberInput,
  TextInput,
  Toolbar,
  SaveButton,
} from "react-admin";
import { makeStyles } from "@material-ui/core/styles";
import OrderItems from "./components/OrderItems";

const useEditStyles = makeStyles({
  root: { alignItems: "flex-start" },
});

const CustomToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton />
  </Toolbar>
);
const OrderEdit = (props) => {
  console.log(props);
  const classes = useEditStyles();
  return (
    <Edit aside={<OrderItems />} classes={classes} {...props}>
      <SimpleForm toolbar={<CustomToolbar />}>
        <TextInput source="authCode" variant="outlined" disabled />
        <DateInput
          source="shippedOn"
          variant="outlined"
          label="Shipping Date"
        />
        <NumberInput
          source="deliveryFee"
          step={1}
          min={1000}
          variant="outlined"
        />
        <SelectInput
          source="status"
          choices={[
            { id: "delivered", name: "delivered" },
            { id: "ordered", name: "ordered" },
            { id: "cancelled", name: "cancelled" },
          ]}
          variant="outlined"
        />
        <BooleanInput source="returned" />
        <BooleanInput source="piad" />
      </SimpleForm>
    </Edit>
  );
};

export default OrderEdit;
