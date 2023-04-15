import React from "react";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import RegisterCode from "../pages/RegisterCode/RegisterCode";
import Setting from "../pages/Setting/Setting";
import AuthRoute from "./AuthRoute/AuthRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Profile from "../pages/Profile/Profile";
import ProfileSaved from "../components/ProfileSaved/ProfileSaved";
import ProfilePosts from "../components/ProfilePosts/ProfilePosts";
import Explore from "../pages/Explore/Explore";
import Create from "../pages/Create/Create";
import Developers from "../pages/Developers/Developers";

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
         { path: "explore", element: <Explore /> },
         { path: "create", element: <Create /> },
         { path: "developers", element: <Developers /> },
         {
            path: "profile/",
            element: <Profile />,
            children: [
               { path: ":username/posts", element: <ProfilePosts /> },
               { path: ":username/saved", element: <ProfileSaved /> },
            ],
         },
      ],
   },
];

export default Routes;
