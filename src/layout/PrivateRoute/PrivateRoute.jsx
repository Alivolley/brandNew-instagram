import React from "react";
import { Outlet } from "react-router-dom";
import PagesTemplate from "../PagesTemplate/PagesTemplate";

const PrivateRoute = () => {
   return (
      <div>
         <PagesTemplate>
            <Outlet />
         </PagesTemplate>
      </div>
   );
};

export default PrivateRoute;
