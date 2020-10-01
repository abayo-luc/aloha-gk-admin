import * as React from "react";
// import { useSelector } from 'react-redux';
import { Layout, Sidebar } from "react-admin";
import AppBar from "./AppBar";
// import Menu from './Menu';
import theme from "../../config/theme";
// import { AppState } from '../types';

const CustomSidebar = (props) => <Sidebar {...props} size={200} />;

export default (props) => {
  return (
    <Layout
      {...props}
      appBar={AppBar}
      sidebar={CustomSidebar}
      // menu={Menu}
      theme={theme}
    />
  );
};
