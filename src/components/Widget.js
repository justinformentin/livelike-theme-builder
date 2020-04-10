import React from "react";

export const Widget = ({ type, children, ...props }) =>
  React.createElement(type, props, children);
