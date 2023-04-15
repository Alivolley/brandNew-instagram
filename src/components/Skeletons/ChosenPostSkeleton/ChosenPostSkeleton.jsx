import { Skeleton } from "@mui/material";
import React from "react";

const ChosenPostSkeleton = () => {
   return <Skeleton variant="rectangular" width="100%" height={500} sx={{ backgroundColor: "#80808083" }} animation="pulse" />;
};

export default ChosenPostSkeleton;
