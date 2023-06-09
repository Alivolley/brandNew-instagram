import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import GeneralInfoContext from "../contexts/GeneralInfoContext";
import Routes from "./Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
   const [templateTheme, setTemplateTheme] = useState("white");
   const [isLogin, setIsLogin] = useState(Cookies.get("accessToken"));
   const [userInfos, setUserInfos] = useState();

   useEffect(() => {
      setIsLogin(Cookies.get("accessToken"));
   }, [Cookies.get("accessToken")]);

   useEffect(() => {
      const foundedTheme = localStorage.getItem("theme");
      !foundedTheme && localStorage.setItem("theme", "white");

      foundedTheme && setTemplateTheme(foundedTheme);
   }, []);

   const router = useRoutes(Routes);
   return (
      <GeneralInfoContext.Provider value={{ templateTheme, setTemplateTheme, isLogin, userInfos, setUserInfos }}>
         <>
            {router}
            <ToastContainer />
         </>
      </GeneralInfoContext.Provider>
   );
};

export default App;
