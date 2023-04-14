import React, { useContext } from "react";
import GeneralInfoContext from "../../contexts/GeneralInfoContext";

const SavePostFilled = () => {
   const { templateTheme } = useContext(GeneralInfoContext);

   return (
      <svg
         aria-label="Remove"
         className="x1lliihq x1n2onr6"
         color={templateTheme === "white" ? "black" : "white"}
         fill={templateTheme === "white" ? "black" : "white"}
         height="24"
         role="img"
         viewBox="0 0 24 24"
         width="24"
      >
         <title>Remove</title>
         <path d="M20 22a.999.999 0 0 1-.687-.273L12 14.815l-7.313 6.912A1 1 0 0 1 3 21V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1Z"></path>
      </svg>
   );
};

export default SavePostFilled;
