import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import PostsCover from "../PostsCover/PostsCover";

const ProfileSaved = () => {
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
         </Grid>
      </Wrapper>
   );
};

export default ProfileSaved;

const Wrapper = styled.div`
   padding: 2rem;
`;
