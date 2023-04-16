import React from "react";
import styled from "styled-components";
import { Skeleton, useMediaQuery, useTheme } from "@mui/material";

const HomePostsSkeleton = () => {
   const testArray = [1, 2, 3, 4, 5];
   const theme = useTheme();
   const isMatch = useMediaQuery(theme.breakpoints.down("md"));

   return (
      <>
         {testArray.map((item) => (
            <Wrapper key={item}>
               <Header>
                  <Skeleton variant="circular" width={40} height={40} sx={{ backgroundColor: "#80808083" }} animation="pulse" />
                  <Skeleton variant="text" width={150} height={25} sx={{ backgroundColor: "#80808083" }} animation="pulse" />
               </Header>
               <Skeleton variant="rectangular" width="100%" height={isMatch ? "45vh" : 500} sx={{ backgroundColor: "#80808083" }} animation="pulse" />
               <Skeleton variant="text" width="100%" height={25} sx={{ backgroundColor: "#80808083" }} animation="pulse" />
               <Skeleton variant="text" width="100%" height={25} sx={{ backgroundColor: "#80808083" }} animation="pulse" />
               <Skeleton variant="text" width={150} height={25} sx={{ backgroundColor: "#80808083" }} animation="pulse" />
            </Wrapper>
         ))}
      </>
   );
};

export default HomePostsSkeleton;

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1rem;
`;

const Header = styled.div`
   display: flex;
   align-items: center;
   gap: 1rem;
`;
