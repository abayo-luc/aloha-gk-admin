import React from "react";
import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import Icons from "./components/icons";
import ProductList from "./resources/products/ProductList";
import ProductEdit from "./resources/products/ProductEdit";
import CategoryList from "./resources/categories/CategoryList";
import UserList from "./resources/users/UserList";
export default () => {
  return (
    <Admin
      dataProvider={simpleRestProvider("http://localhost:8080/api/v1/admin")}
    >
      <Resource
        name="products"
        list={ProductList}
        edit={ProductEdit}
        icon={Icons.products}
      />
      <Resource name="categories" list={CategoryList} icon={Icons.categories} />
      <Resource name="users" list={UserList} icon={Icons.users} />
    </Admin>
  );
};
