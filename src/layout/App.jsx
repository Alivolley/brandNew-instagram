import React from "react";
import { useRoutes } from "react-router-dom";
import PagesTemplate from "./PagesTemplate/PagesTemplate";
import Routes from "./Routes";

const App = () => {
   const router = useRoutes(Routes);
   return <PagesTemplate>{router}</PagesTemplate>;
};

export default App;
