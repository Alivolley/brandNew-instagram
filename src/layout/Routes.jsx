import React from "react";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import RegisterCode from "../pages/RegisterCode/RegisterCode";
import Setting from "../pages/Setting/Setting";
import AuthRoute from "./AuthRoute/AuthRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const Routes = [
   {
      path: "/*",
      element: <AuthRoute />,
      children: [
         { path: "login", element: <Login /> },
         { path: "register", element: <Register /> },
         { path: "registerCode", element: <RegisterCode /> },
      ],
   },

   {
      path: "/*",
      element: <PrivateRoute />,
      children: [
         { path: "", element: <Home /> },
         { path: "setting", element: <Setting /> },
      ],
   },
];

export default Routes;
