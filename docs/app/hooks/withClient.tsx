"use client";
import React from "react";

/* eslint-disable  */
// This ensures all components wrapped in it will run on the client side
const withClient =
  <T extends {}>(Component: React.ComponentType<T>) =>
  (props: T) => {
    Component.displayName = "withClient";
    return <Component {...props} />;
  };

export default withClient;
withClient.displayName = "withClient";
