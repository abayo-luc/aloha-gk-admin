import * as React from "react";
import {
  // AutocompleteInput,
  BooleanInput,
  DateInput,
  Edit,
  // ReferenceInput,
  SelectInput,
  SimpleForm,
  useTranslate,
} from "react-admin";
import { makeStyles } from "@material-ui/core/styles";
import OrderItems from "./components/OrderItems";
// import Basket from "./Basket";

const OrderTitle = ({ record }) => {
  const translate = useTranslate();
  return record ? (
    <span>
      {translate("resources.commands.title", {
        reference: record.reference,
      })}
    </span>
  ) : null;
};

const useEditStyles = makeStyles({
  root: { alignItems: "flex-start" },
});

const OrderEdit = (props) => {
  const classes = useEditStyles();
  return (
    <Edit
      title={<OrderTitle />}
      aside={<OrderItems />}
      classes={classes}
      {...props}
    >
      <SimpleForm>
        <DateInput source="shippedOn" label="shipedOn" />
        {/* <ReferenceInput source="customerId" reference="users">
          <AutocompleteInput optionText={(choice) => choice.name} />
        </ReferenceInput> */}
        <SelectInput
          source="status"
          choices={[
            { id: "delivered", name: "delivered" },
            { id: "ordered", name: "ordered" },
            { id: "cancelled", name: "cancelled" },
          ]}
        />
        <BooleanInput source="returned" />
      </SimpleForm>
    </Edit>
  );
};

export default OrderEdit;
