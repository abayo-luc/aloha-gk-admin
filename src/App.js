import React from "react";
import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import Icons from "./components/icons";
import ProductList from "./resources/products/ProductList";
import ProductEdit from "./resources/products/ProductEdit";
import ProductCreate from "./resources/products/ProductCreate";
import CategoryList from "./resources/categories/CategoryList";
import CategoryEdit from "./resources/categories/CategoryEdit";

import UserList from "./resources/users/UserList";
const { REACT_APP_API_BASE_URL } = process.env;
export default () => {
  return (
    <Admin dataProvider={simpleRestProvider(REACT_APP_API_BASE_URL)}>
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
