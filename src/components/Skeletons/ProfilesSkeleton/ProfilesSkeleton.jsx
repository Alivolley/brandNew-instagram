import { Grid, Skeleton } from "@mui/material";
import React from "react";
import styled from "styled-components";

const ProfilesSkeleton = () => {
   return (
      <Wrapper>
         <Grid container>
            <Grid item xs={12} sm={4} sx={{ display: "flex", justifyContent: "center" }}>
               <Skeleton variant="circular" width={150} height={150} sx={{ backgroundColor: "#80808083" }} animation="pulse" />
            </Grid>
            <Grid item xs={12} sm={8}>
               <Discribtion>
                  <Skeleton variant="text" width={150} height={30} sx={{ backgroundColor: "#80808083" }} animation="pulse" />

                  <FollowersWrapper>
                     <Skeleton variant="text" width={90} height={30} sx={{ backgroundColor: "#80808083" }} animation="pulse" />
                     <Skeleton variant="text" width={90} height={30} sx={{ backgroundColor: "#80808083" }} animation="pulse" />
                     <Skeleton variant="text" width={90} height={30} sx={{ backgroundColor: "#80808083" }} animation="pulse" />
                  </FollowersWrapper>

                  <Skeleton variant="text" width={150} height={30} sx={{ backgroundColor: "#80808083" }} animation="pulse" />
                  <Skeleton variant="text" width={150} height={30} sx={{ backgroundColor: "#80808083" }} animation="pulse" />
               </Discribtion>
            </Grid>
         </Grid>
      </Wrapper>
   );
};

export default ProfilesSkeleton;

const Wrapper = styled.div`
   padding: 3rem;
`;

const Discribtion = styled.div`
   display: flex;
   flex-direction: column;
   gap: 2rem;

   @media (max-width: 600px) {
      padding: 1.5rem;
      margin-top: 3rem;
      align-items: center;
   }
`;

const FollowersWrapper = styled.div`
   display: flex;
   gap: 4rem;

   @media (max-width: 400px) {
      gap: 0.5rem;
   }
`;
