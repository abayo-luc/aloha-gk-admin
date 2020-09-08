import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  form: {
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));

const CategoryTitle = ({ record }) => {
  return record ? (
    <span>
      Category &quot;
      {record.name}&quot;
    </span>
  ) : null;
};
export default (props) => {
  const classes = useStyles();
  return (
    <Create title={<CategoryTitle />} {...props}>
      <SimpleForm className={classes.form}>
        <TextInput source="name" fullWidth variant="outlined" />
        <TextInput source="image" fullWidth variant="outlined" />
        <TextInput
          source="description"
          multiline
          rows={3}
          fullWidth
          variant="outlined"
        />
      </SimpleForm>
    </Create>
  );
};
