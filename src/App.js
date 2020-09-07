import React from "react";
import { Admin, Resource } from "react-admin";

/**
 * middlewares imports
 */
import dataProvider from "./dataProvider";
/**
 * components imports
 */
import Icons from "./components/icons";
import * as orders from "./resources/orders";
import * as products from "./resources/products";
import * as categories from "./resources/categories";
import * as users from "./resources/users";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";

export default () => {
  return (
    <Admin dataProvider={dataProvider} dashboard={Dashboard} layout={Layout}>
      <Resource name="orders" {...orders} icon={Icons.orders} />
      <Resource name="products" icon={Icons.products} {...products} />
      <Resource name="categories" icon={Icons.categories} {...categories} />
      <Resource name="users" icon={Icons.users} {...users} />
      <Resource name="productcategories" />
    </Admin>
  );
};
