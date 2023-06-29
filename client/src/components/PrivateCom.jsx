import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateCom = () => {
  const auth = localStorage.getItem("userAuth");

  return <>{auth ? <Outlet /> : <Navigate to="/" />}</>;
};

export default PrivateCom;
