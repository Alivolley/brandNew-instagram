import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import GeneralInfoContext from "../../contexts/GeneralInfoContext";

const AuthRoute = () => {
   const { isLogin } = useContext(GeneralInfoContext);

   return <>{isLogin ? <Navigate to="/" /> : <Outlet />}</>;
};

export default AuthRoute;
