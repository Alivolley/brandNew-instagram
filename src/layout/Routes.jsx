import React from "react";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Setting from "../pages/Setting/Setting";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const Routes = [
   { path: "/login", element: <Login /> },
   { path: "/register", element: <Register /> },

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
