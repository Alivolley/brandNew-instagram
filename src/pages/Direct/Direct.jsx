import React, { useContext } from "react";
import styled from "styled-components";
import LeftSideDirect from "../../components/LeftSideDirect/LeftSideDirect";
import RightSideDirect from "../../components/RightSideDirect/RightSideDirect";
import GeneralInfoContext from "../../contexts/GeneralInfoContext";

const Direct = () => {
   const { templateTheme } = useContext(GeneralInfoContext);

   return (
      <Wrapper templateTheme={templateTheme}>
         <LeftSideDirect templateTheme={templateTheme} />
         <RightSideDirect templateTheme={templateTheme} />
      </Wrapper>
   );
};

export default Direct;

const Wrapper = styled.div`
   position: relative;
   border: 0.1rem solid var(--border-color);
   height: 90vh;
   margin: 3rem auto 0 auto;
   width: fit-content;
   display: flex;
   background-color: ${({ templateTheme }) => templateTheme};

   * {
      color: ${({ templateTheme }) => (templateTheme === "white" ? "black" : "white")};
      box-sizing: border-box;
   }
`;
