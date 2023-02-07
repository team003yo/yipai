import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ user, Permission }) => {
  return user.login &&
    user.permission.find((per) => Permission.includes(per)) ? (
    <Outlet />
  ) : (
    <Navigate to="/users" />
  );
};

export default ProtectedRoutes;
