import React from "react";
import { useDelete, useRefresh, useNotify } from "react-admin";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    position: "relative",
  },
  delete: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 2,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));
export default ({ record }) => {
  const classes = useStyles();
  const notify = useNotify();
  const refresh = useRefresh();
  const [deleteImage, { loading }] = useDelete("images", record.id, record);
  const handleDelete = async () => {
    await deleteImage();
    refresh();
    notify("Email successuflly deleted!", "info");
  };
  return (
    <div className={classes.root}>
      <IconButton
        className={classes.delete}
        size="small"
        disabled={loading}
        onClick={handleDelete}
      >
        <DeleteIcon color="secondary" fontSize="inherit" />
      </IconButton>
      <Avatar
        alt="Remy Sharp"
        src={record.url}
        className={classes.large}
        variant="square"
      />
    </div>
  );
};
