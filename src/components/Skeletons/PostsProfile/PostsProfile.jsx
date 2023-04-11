import { Grid, Skeleton, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

const PostsProfile = () => {
   const theme = useTheme();
   const isMatch = useMediaQuery(theme.breakpoints.down("md"));
   const testArray = [1, 2, 3, 4, 5, 6];

   return (
      <Grid container spacing={0.5}>
         {testArray.map((item) => (
            <Grid item xs={4} sx={{ height: isMatch ? 100 : 250 }} key={item}>
               <Skeleton variant="rectangular" width="100%" height="100%" sx={{ backgroundColor: "#80808083" }} animation="pulse" />
            </Grid>
         ))}
      </Grid>
   );
};

export default PostsProfile;
