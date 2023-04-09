import { Skeleton } from "@mui/material";
import React from "react";
import styled from "styled-components";

const LeftMenuProfile = () => {
   return (
      <Wrapper>
         <Skeleton variant="circular" width={24} height={24} sx={{ backgroundColor: "#80808083" }} animation="pulse" />
         <Skeleton variant="text" width={70} height={21} sx={{ backgroundColor: "#80808083" }} animation="pulse" />
      </Wrapper>
   );
};

export default LeftMenuProfile;

const Wrapper = styled.div`
   display: flex;
   align-items: center;
   gap: 1.5rem;
`;
