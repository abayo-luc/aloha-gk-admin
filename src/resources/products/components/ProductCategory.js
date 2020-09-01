import React from "react";

export default ({ record }) => {
  console.log(record);
  return (
    <>
      {record.categories.map((category) => (
        <p key={category.id}>{category.name}</p>
      ))}
    </>
  );
};
