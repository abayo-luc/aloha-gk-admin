import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  large: {
    width: theme.spacing(14),
    height: theme.spacing(14),
  },
}));
export default ({ record }) => {
  const classes = useStyles();
  return (
    <Avatar
      alt="Remy Sharp"
      src={record.url}
      className={classes.large}
      variant="square"
    />
  );
};
