import React, { cloneElement } from "react";
import {
  useListContext,
  TopToolbar,
  CreateButton,
  sanitizeListRestProps,
} from "react-admin";

export default (props) => {
  const { className, exporter, filters, maxResults, ...rest } = props;
  const {
    resource,
    displayedFilters,
    filterValues,
    basePath,
    showFilter,
  } = useListContext();
  return (
    <TopToolbar className={className} {...sanitizeListRestProps(rest)}>
      {filters &&
        cloneElement(filters, {
          resource,
          showFilter,
          displayedFilters,
          filterValues,
          context: "button",
        })}
      <CreateButton basePath={basePath} />
    </TopToolbar>
  );
};
