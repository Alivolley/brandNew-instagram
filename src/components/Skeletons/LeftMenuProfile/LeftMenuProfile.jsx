import { Skeleton } from "@mui/material";
import React from "react";
import styled from "styled-components";

const LeftMenuProfile = () => {
   return (
      <Wrapper>
         <Skeleton variant="circular" width={30} height={30} />
         <Skeleton variant="text" width={70} height={50} />
      </Wrapper>
   );
};

export default LeftMenuProfile;

const Wrapper = styled.div`
   display: flex;
   align-items: center;
   gap: 1.5rem;
`;
