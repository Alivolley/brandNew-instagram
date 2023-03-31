import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Unstable_Grid2";
import LeftsideMenu from "../LeftsideMenu/LeftsideMenu";

const PagesTemplate = ({ children }) => {
   return (
      <Wrapper>
         <Grid container spacing={2}>
            <Grid sm={0} md={3} lg={2.5}>
               <LeftsideMenu />
            </Grid>
            <Grid sm={12} md={9} lg={9.5}>
               {children}
            </Grid>
         </Grid>
      </Wrapper>
   );
};

export default PagesTemplate;

const Wrapper = styled.div``;
