import { Skeleton, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import styled from "styled-components";

const SettingChangeInfo = () => {
   const theme = useTheme();
   const isMatch = useMediaQuery(theme.breakpoints.down("md"));

   return (
      <Container>
         <Wrapper>
            <Skeleton variant="circular" width={50} height={50} sx={{ backgroundColor: "#80808083" }} animation="pulse" />
            <Skeleton variant="text" width={isMatch ? 152 : 223} height={45} sx={{ backgroundColor: "#80808083" }} animation="pulse" />
         </Wrapper>
         <Wrapper>
            <Skeleton variant="text" width={isMatch ? 40 : 50} height={45} sx={{ backgroundColor: "#80808083" }} animation="pulse" />
            <Skeleton variant="text" width={isMatch ? 152 : 223} height={45} sx={{ backgroundColor: "#80808083" }} animation="pulse" />
         </Wrapper>
         <Wrapper>
            <Skeleton variant="text" width={isMatch ? 40 : 50} height={45} sx={{ backgroundColor: "#80808083" }} animation="pulse" />
            <Skeleton variant="text" width={isMatch ? 152 : 223} height={45} sx={{ backgroundColor: "#80808083" }} animation="pulse" />
         </Wrapper>
         <Wrapper>
            <Skeleton variant="text" width={isMatch ? 40 : 50} height={45} sx={{ backgroundColor: "#80808083" }} animation="pulse" />
            <Skeleton variant="text" width={isMatch ? 152 : 223} height={170} sx={{ backgroundColor: "#80808083" }} animation="pulse" />
         </Wrapper>
         <Wrapper>
            <Skeleton variant="text" width={isMatch ? 40 : 50} height={45} sx={{ backgroundColor: "#80808083" }} animation="pulse" />
            <Skeleton variant="text" width={isMatch ? 152 : 223} height={45} sx={{ backgroundColor: "#80808083" }} animation="pulse" />
         </Wrapper>
         <Wrapper>
            <Skeleton variant="text" width={isMatch ? 40 : 50} height={45} sx={{ backgroundColor: "#80808083" }} animation="pulse" />
            <Skeleton variant="text" width={isMatch ? 152 : 223} height={45} sx={{ backgroundColor: "#80808083" }} animation="pulse" />
         </Wrapper>
         <Wrapper>
            <Skeleton variant="text" width={isMatch ? 40 : 50} height={45} sx={{ backgroundColor: "#80808083" }} animation="pulse" />
            <Skeleton variant="text" width={isMatch ? 152 : 223} height={45} sx={{ backgroundColor: "#80808083" }} animation="pulse" />
         </Wrapper>
      </Container>
   );
};

export default SettingChangeInfo;

const Container = styled.div`
   div:first-child {
      margin-bottom: 5rem;
   }
`;

const Wrapper = styled.div`
   display: flex;
   align-items: center;
   gap: 1rem;
`;
