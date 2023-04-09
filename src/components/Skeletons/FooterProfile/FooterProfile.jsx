import { Skeleton } from "@mui/material";
import React from "react";
import styled from "styled-components";

const FooterProfile = () => {
   return (
      <Wrapper>
         <Skeleton variant="circular" width={24} height={24} sx={{ backgroundColor: "#80808083" }} animation="pulse" />
      </Wrapper>
   );
};

export default FooterProfile;

const Wrapper = styled.div``;
