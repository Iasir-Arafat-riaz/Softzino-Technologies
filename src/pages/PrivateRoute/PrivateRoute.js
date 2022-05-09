import React from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import useContextAuth from "../customHooks/useContextAuth";


import Loader from "../Shared/Loader/Loader";

const PrivateRoute = ({ children }) => {
  const location=useLocation()
  const { user, isLoading } = useContextAuth();
  if (isLoading) {
    return <Loader/>
  }
  return <div>{user.email ? children : <Navigate state={{from:location}} to="/login"/>}</div>
};

export default PrivateRoute;
