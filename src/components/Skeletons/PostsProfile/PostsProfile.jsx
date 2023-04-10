import { Grid, Skeleton, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

const PostsProfile = () => {
   const theme = useTheme();
   const isMatch = useMediaQuery(theme.breakpoints.down("md"));

   return (
      <Grid container spacing={0.5}>
         <Grid item xs={4} sx={{ height: isMatch ? 100 : 250 }}>
            <Skeleton variant="rectangular" width="100%" height="100%" sx={{ backgroundColor: "#80808083" }} animation="pulse" />
         </Grid>
         <Grid item xs={4} sx={{ height: isMatch ? 100 : 250 }}>
            <Skeleton variant="rectangular" width="100%" height="100%" sx={{ backgroundColor: "#80808083" }} animation="pulse" />
         </Grid>
         <Grid item xs={4} sx={{ height: isMatch ? 100 : 250 }}>
            <Skeleton variant="rectangular" width="100%" height="100%" sx={{ backgroundColor: "#80808083" }} animation="pulse" />
         </Grid>
         <Grid item xs={4} sx={{ height: isMatch ? 100 : 250 }}>
            <Skeleton variant="rectangular" width="100%" height="100%" sx={{ backgroundColor: "#80808083" }} animation="pulse" />
         </Grid>
         <Grid item xs={4} sx={{ height: isMatch ? 100 : 250 }}>
            <Skeleton variant="rectangular" width="100%" height="100%" sx={{ backgroundColor: "#80808083" }} animation="pulse" />
         </Grid>
         <Grid item xs={4} sx={{ height: isMatch ? 100 : 250 }}>
            <Skeleton variant="rectangular" width="100%" height="100%" sx={{ backgroundColor: "#80808083" }} animation="pulse" />
         </Grid>
      </Grid>
   );
};

export default PostsProfile;
