import React, { useContext } from "react";
import styled from "styled-components";
import Grid from "@mui/material/Unstable_Grid2";
import LeftsideMenu from "../LeftsideMenu/LeftsideMenu";
import { useTheme } from "@mui/system";
import { useMediaQuery } from "@mui/material";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import GeneralInfoContext from "../../contexts/GeneralInfoContext";

const PagesTemplate = ({ children }) => {
   const { templateTheme } = useContext(GeneralInfoContext);
   const theme = useTheme();
   const isMatch = useMediaQuery(theme.breakpoints.down("md"));

   return (
      <Wrapper templateTheme={templateTheme}>
         <Grid container>
            <Grid sm={12} md={3} lg={2.5}>
               {isMatch ? (
                  <>
                     <Header />
                     <Footer />
                  </>
               ) : (
                  <LeftsideMenu />
               )}
            </Grid>
            <Grid sm={12} md={9} lg={9.5} sx={{ marginTop: isMatch && "8rem" }}>
               {children}
            </Grid>
         </Grid>
      </Wrapper>
   );
};

export default PagesTemplate;

const Wrapper = styled.div`
   position: relative;
   background-color: ${({ templateTheme }) => templateTheme};
`;
