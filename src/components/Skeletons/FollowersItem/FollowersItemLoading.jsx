import { Skeleton } from "@mui/material";
import React from "react";
import styled from "styled-components";

const FollowersItemLoading = () => {
   const testArray = [1, 2, 3, 4, 5, 6, 7];

   return (
      <>
         {testArray.map((item) => (
            <Wrapper key={item}>
               <Skeleton variant="circular" width={46} height={46} sx={{ backgroundColor: "#80808083" }} animation="pulse" />
               <Container>
                  <Skeleton variant="text" width={90} height={21} sx={{ backgroundColor: "#80808083" }} animation="pulse" />
                  <Skeleton variant="text" width={90} height={21} sx={{ backgroundColor: "#80808083" }} animation="pulse" />
               </Container>
            </Wrapper>
         ))}
      </>
   );
};

export default FollowersItemLoading;

const Wrapper = styled.div`
   display: flex;
   align-items: center;
   gap: 1.5rem;
`;

const Container = styled.div``;
