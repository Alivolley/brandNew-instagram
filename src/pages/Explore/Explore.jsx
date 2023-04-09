import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import PostsCover from "../../components/PostsCover/PostsCover";

const Explore = () => {
   return (
      <Wrapper>
         <Grid container spacing={0.5}>
            <Grid item xs={4}>
               <PostsCover />
            </Grid>
            <Grid item xs={4}>
               <PostsCover />
            </Grid>
            <Grid item xs={4}>
               <PostsCover />
            </Grid>
            <Grid item xs={4}>
               <PostsCover />
            </Grid>
            <Grid item xs={4}>
               <PostsCover />
            </Grid>
            <Grid item xs={4}>
               <PostsCover />
            </Grid>
            <Grid item xs={4}>
               <PostsCover />
            </Grid>
            <Grid item xs={4}>
               <PostsCover />
            </Grid>
            <Grid item xs={4}>
               <PostsCover />
            </Grid>
            <Grid item xs={4}>
               <PostsCover />
            </Grid>
            <Grid item xs={4}>
               <PostsCover />
            </Grid>
            <Grid item xs={4}>
               <PostsCover />
            </Grid>
            <Grid item xs={4}>
               <PostsCover />
            </Grid>
         </Grid>
      </Wrapper>
   );
};

export default Explore;

const Wrapper = styled.div`
   padding: 2rem;
   max-width: 100rem;
   margin: 0 auto;
`;
