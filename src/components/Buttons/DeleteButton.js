import React from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
  },
  button: {
    position: "absolute",
    // right: 5,
    // top: 10,
  },
}));
export default (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Button
        {...props}
        variant="contained"
        size="large"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
    </div>
  );
};
