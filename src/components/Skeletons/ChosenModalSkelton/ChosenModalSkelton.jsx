import { Skeleton, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

const ChosenModalSkelton = () => {
   const theme = useTheme();
   const isMatch = useMediaQuery(theme.breakpoints.down("md"));

   return <Skeleton variant="rectangular" width="100%" height={isMatch ? "45vh" : 500} sx={{ backgroundColor: "#80808083" }} animation="pulse" />;
};

export default ChosenModalSkelton;
