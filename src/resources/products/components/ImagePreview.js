import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));
export default ({ record }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardMedia
        className={classes.media}
        image={record.url}
        title={record.etag}
      />
    </Card>
  );
};
