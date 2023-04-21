import React from "react";
import styled from "styled-components";
import notfoundpic from "./../../assets/Images/not found.png";

const NotFound = () => {
   return <Wrapper src={notfoundpic} />;
};

export default NotFound;

const Wrapper = styled.img`
   display: block;
   margin: auto;
   max-width: 100%;
   max-height: 90vh;
`;
