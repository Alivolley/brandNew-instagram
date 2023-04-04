import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import GeneralInfoContext from "../../contexts/GeneralInfoContext";
import PagesTemplate from "../PagesTemplate/PagesTemplate";

const PrivateRoute = () => {
   const { isLogin } = useContext(GeneralInfoContext);

   return (
      <>
         {isLogin ? (
            <PagesTemplate>
               <Outlet />
            </PagesTemplate>
         ) : (
            <Navigate to="/login" />
         )}
      </>
   );
};

export default PrivateRoute;
