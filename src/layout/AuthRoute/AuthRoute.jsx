import React from "react";
import { Outlet } from "react-router-dom";

const AuthRoute = () => {
   // const islogin  = Cookies.get('accessToken')

   return (
      <>
         <Outlet />
      </>
   );
};

export default AuthRoute;
