import React from "react";
import { isAuthenticated } from "../services/auth";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

const ProtectedRoute = (props) => {
  if (!isAuthenticated && !window.localStorage.getItem("BearerToken"))
    return <Redirect to="401" />;

  return <Route {...props} />;
};

export default ProtectedRoute;
