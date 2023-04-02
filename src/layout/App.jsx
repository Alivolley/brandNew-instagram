import React, { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import GeneralInfoContext from "../contexts/GeneralInfoContext";
import Routes from "./Routes";

const App = () => {
   const [templateTheme, setTemplateTheme] = useState("white");

   useEffect(() => {
      const foundedTheme = localStorage.getItem("theme");
      !foundedTheme && localStorage.setItem("theme", "white");

      foundedTheme && setTemplateTheme(foundedTheme);
   }, []);

   const router = useRoutes(Routes);
   return <GeneralInfoContext.Provider value={{ templateTheme: templateTheme, setTemplateTheme: setTemplateTheme }}>{router}</GeneralInfoContext.Provider>;
};

export default App;
