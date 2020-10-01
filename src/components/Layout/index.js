import * as React from "react";
import { Layout, Sidebar } from "react-admin";
import AppBar from "./AppBar";
import theme from "../../config/theme";

const CustomSidebar = (props) => {
  return <Sidebar {...props} size={200} />;
};

export default (props) => {
  return (
    <Layout {...props} appBar={AppBar} sidebar={CustomSidebar} theme={theme} />
  );
};
