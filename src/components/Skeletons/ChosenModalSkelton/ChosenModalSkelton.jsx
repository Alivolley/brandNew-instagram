import { Skeleton } from "@mui/material";
import React from "react";

const ChosenModalSkelton = () => {
   return (
      <Skeleton
         variant="rectangular"
         width="100%"
         height="100%"
         sx={{ backgroundColor: "#80808083", border: "0.1rem solid var(--border-color)" }}
         animation="pulse"
      />
   );
};

export default ChosenModalSkelton;
