import React from "react";
import ChangeInfo from "../../components/ChangeInfo/ChangeInfo";
import styled from "styled-components";
import ChangePassword from "../../components/ChangePassword/ChangePassword";

const Setting = () => {
   return (
      <Wrapper>
         <ChangeInfo />
         <ChangePassword />
      </Wrapper>
   );
};

export default Setting;

const Wrapper = styled.div`
   background-color: ${({ templateTheme }) => templateTheme};
   margin: 0 auto;
`;
