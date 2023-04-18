import { Skeleton } from "@mui/material";
import React from "react";
import styled from "styled-components";

const SuggestionsSkeleton = () => {
   const testArray = [1, 2, 3, 4, 5];

   return (
      <>
         {testArray.map((item) => (
            <Wrapper key={item}>
               <Skeleton variant="circular" width={31} height={31} sx={{ backgroundColor: "#80808083" }} animation="pulse" />
               <Container>
                  <Skeleton variant="text" width={90} height={21} sx={{ backgroundColor: "#80808083" }} animation="pulse" />
               </Container>
            </Wrapper>
         ))}
      </>
   );
};

export default SuggestionsSkeleton;

const Wrapper = styled.div`
   display: flex;
   align-items: center;
   gap: 2rem;
`;

const Container = styled.div``;
