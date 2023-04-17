import { Skeleton, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import styled from "styled-components";

const SearchSkeleton = () => {
   const theme = useTheme();
   const isMatch = useMediaQuery(theme.breakpoints.down("md"));
   const testArray = [1, 2, 3, 4, 5];

   return (
      <>
         {testArray.map((item) => (
            <Wrapper key={item}>
               <Skeleton
                  variant="circular"
                  width={isMatch ? 30 : 46}
                  height={isMatch ? 30 : 46}
                  sx={{ backgroundColor: "#80808083" }}
                  animation="pulse"
               />
               <Container>
                  <Skeleton
                     variant="text"
                     width={isMatch ? 80 : 90}
                     height={isMatch ? 15 : 21}
                     sx={{ backgroundColor: "#80808083" }}
                     animation="pulse"
                  />
                  <Skeleton
                     variant="text"
                     width={isMatch ? 80 : 90}
                     height={isMatch ? 15 : 21}
                     sx={{ backgroundColor: "#80808083" }}
                     animation="pulse"
                  />
               </Container>
            </Wrapper>
         ))}
      </>
   );
};

export default SearchSkeleton;

const Wrapper = styled.div`
   display: flex;
   align-items: center;
   gap: 1.5rem;

   @media (max-width: 900px) {
      gap: 0.8rem;
   }
`;

const Container = styled.div``;
