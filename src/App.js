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
import ProductList from "./resources/products/ProductList";
import ProductEdit from "./resources/products/ProductEdit";
import ProductCreate from "./resources/products/ProductCreate";
import CategoryList from "./resources/categories/CategoryList";
import CategoryEdit from "./resources/categories/CategoryEdit";

import UserList from "./resources/users/UserList";
import Layout from "./components/Layout";

export default () => {
  return (
    <Admin dataProvider={dataProvider} layout={Layout}>
      <Resource
        name="products"
        list={ProductList}
        edit={ProductEdit}
        create={ProductCreate}
        icon={Icons.products}
      />
      <Resource
        name="categories"
        list={CategoryList}
        edit={CategoryEdit}
        icon={Icons.categories}
      />
      <Resource name="users" list={UserList} icon={Icons.users} />
    </Admin>
  );
};
