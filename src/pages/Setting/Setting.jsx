import React from "react";
import ChangeInfo from "../../components/ChangeInfo/ChangeInfo";
import styled from "styled-components";
import ChangePassword from "../../components/ChangePassword/ChangePassword";
import { Backdrop, CircularProgress, useMediaQuery, useTheme } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import useLogout from "../../api/logout/useLogout";

const Setting = () => {
   const theme = useTheme();
   const isMatch = useMediaQuery(theme.breakpoints.down("md"));
   const [logoutRequest, loading] = useLogout();

   const logoutHandler = () => {
      logoutRequest();
   };

   return (
      <Wrapper>
         <ChangeInfo />
         <ChangePassword />
         {isMatch && (
            <Container>
               <LogoutButton variant="contained" color="error" loading={loading} onClick={logoutHandler}>
                  logout
               </LogoutButton>
            </Container>
         )}

         <Backdrop open={loading}>
            <CircularProgress color="inherit" />
         </Backdrop>
      </Wrapper>
   );
};

export default Setting;

const Wrapper = styled.div`
   background-color: ${({ templateTheme }) => templateTheme};
   margin: 0 auto;
`;

const Container = styled.div`
   padding: 2.5rem 1.5rem;
   margin-top: 3rem;
   border-top: 0.1rem solid var(--border-color);
`;

const LogoutButton = styled(LoadingButton)`
   font-size: 1.5rem !important;
   text-transform: none !important;
   width: 100%;
   max-width: 28rem;
   display: block !important;
   margin: 0 auto !important;
`;
