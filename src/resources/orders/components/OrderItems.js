import * as React from "react";
import classnames from "classnames";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-admin";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: { minWidth: "35em", marginLeft: "1em" },
  rightAlignedCell: { textAlign: "right" },
  boldCell: { fontWeight: "bold" },
});

const Basket = ({ record }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.container} elevation={2}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell className={classes.rightAlignedCell}>
              Unit Price
            </TableCell>
            <TableCell className={classes.rightAlignedCell}>Quantity</TableCell>
            <TableCell className={classes.rightAlignedCell}>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {record?.items.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <Link to={`/products/${item.product.id}`}>
                  {item.product.name}
                </Link>
              </TableCell>
              <TableCell className={classes.rightAlignedCell}>
                {item.unitCost.toLocaleString(undefined, {
                  style: "currency",
                  currency: "Rwf",
                })}
              </TableCell>
              <TableCell className={classes.rightAlignedCell}>
                {item.quantity}
              </TableCell>
              <TableCell className={classes.rightAlignedCell}>
                {(item.unitCost * item.quantity).toLocaleString(undefined, {
                  style: "currency",
                  currency: "Rwf",
                })}
              </TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell colSpan={2} />
            <TableCell>Sum</TableCell>
            <TableCell className={classes.rightAlignedCell}>
              {record?.totalAmount.toLocaleString(undefined, {
                style: "currency",
                currency: "Rwf",
              })}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2} />
            <TableCell>Delivery fees</TableCell>
            <TableCell className={classes.rightAlignedCell}>
              {"1000".toLocaleString(undefined, {
                style: "currency",
                currency: "Rwf",
              })}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2} />
            <TableCell>Tax rate</TableCell>
            <TableCell className={classes.rightAlignedCell}>
              {"10".toLocaleString(undefined, {
                style: "percent",
              })}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2} />
            <TableCell className={classes.boldCell}>Total</TableCell>
            <TableCell
              className={classnames(classes.boldCell, classes.rightAlignedCell)}
            >
              {record?.totalAmount.toLocaleString(undefined, {
                style: "currency",
                currency: "Rwf",
              })}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Basket;
