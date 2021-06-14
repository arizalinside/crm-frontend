/* eslint-disable react/prop-types */
import React from "react";
import { Breadcrumb } from "react-bootstrap";
// import { Link } from "react-router-dom";

export const PageBreadcrumb = ({ page }) => {
  return (
    <Breadcrumb className="mt-2">
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item active>{page}</Breadcrumb.Item>
    </Breadcrumb>
  );
};
