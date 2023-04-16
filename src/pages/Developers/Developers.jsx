import React from "react";
import styled from "styled-components";
import { Grid, useMediaQuery, useTheme } from "@mui/material";

const Developers = () => {
   return (
      <Container>
         <Wrapper>
            <Grid container sx={{ height: "100%" }}>
               <Grid item xs={12} md={6} sx={{ backgroundColor: "red" }}></Grid>
               <Grid item xs={12} md={6} sx={{ backgroundColor: "yellow" }}></Grid>
            </Grid>
         </Wrapper>
      </Container>
   );
};

export default Developers;

const Container = styled.div`
   position: fixed;
   top: 0;
   bottom: 0;
   right: 0;
   left: 0;
   z-index: 5;
   background-color: rgba(0, 0, 0, 0.4);
   padding: 7rem 13rem;

   @media (max-width: 900px) {
      padding: 5rem 2rem;
   }
`;

const Wrapper = styled.div`
   background-color: white;
   width: 100%;
   height: 100%;
`;
