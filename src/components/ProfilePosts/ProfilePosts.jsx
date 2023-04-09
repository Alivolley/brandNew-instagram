import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import PostsCover from "../PostsCover/PostsCover";

const ProfilePosts = () => {
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
         </Grid>
      </Wrapper>
   );
};

export default ProfilePosts;

const Wrapper = styled.div`
   padding: 2rem;
   max-width: 100rem;
   margin: 0 auto;
`;
