import { CircularProgress } from "@mui/material";
import React from "react";
import styled from "styled-components";

const LoadingSpinner = () => {
   return (
      <Wrapper>
         <CircularProgress />
      </Wrapper>
   );
};

export default LoadingSpinner;

const Wrapper = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
`;
