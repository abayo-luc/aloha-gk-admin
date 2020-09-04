import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: { width: 25, maxWidth: 25, maxHeight: 25 },
});

const ThumbnailField = ({ record }) => {
  const classes = useStyles();
  return record?.images ? (
    <img src={record.images[0]?.url} className={classes.root} alt="" />
  ) : (
    <p>hello</p>
  );
};

export default ThumbnailField;
