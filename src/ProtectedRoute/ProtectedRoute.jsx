import React from "react";
import Login from "../Login/Login";

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("access_token");

  if (!user) {
    return <Login />;
  }
  return children;
};

export default ProtectedRoute;
