import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import LeftsideMenu from "../LeftsideMenu/LeftsideMenu";
import { useTheme } from "@mui/system";
import { useMediaQuery } from "@mui/material";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import GeneralInfoContext from "../../contexts/GeneralInfoContext";
import useUserInfo from "../../api/userInfo/useUserInfo";
import { useLocation } from "react-router-dom";

const PagesTemplate = ({ children }) => {
   const { templateTheme } = useContext(GeneralInfoContext);
   const theme = useTheme();
   const isMatch = useMediaQuery(theme.breakpoints.down("md"));
   const [userInfoRequest, loading] = useUserInfo();
   const { pathname } = useLocation();

   useEffect(() => {
      userInfoRequest();
   }, []);

   useEffect(() => {
      document.documentElement.scrollTo({
         top: 0,
         left: 0,
         behavior: "instant",
      });
   }, [pathname]);

   return (
      <Wrapper templateTheme={templateTheme}>
         <Grid container>
            <Grid item xs={12} md={3} lg={2.5}>
               {isMatch ? (
                  <>
                     <Header />
                     <Footer userInfoLoading={loading} />
                  </>
               ) : (
                  <LeftsideMenu userInfoLoading={loading} />
               )}
            </Grid>
            <Grid item xs={12} md={9} lg={9.5} sx={{ marginTop: isMatch && "8rem", marginBottom: isMatch && "8rem" }}>
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
   min-height: 100vh;
`;
