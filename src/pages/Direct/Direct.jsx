import React, { useContext } from "react";
import styled from "styled-components";
import LeftSideDirect from "../../components/LeftSideDirect/LeftSideDirect";
import GeneralInfoContext from "../../contexts/GeneralInfoContext";
import { Outlet, useParams } from "react-router-dom";
import DirectIntroduce from "../../components/DirectIntroduce/DirectIntroduce";
import { useMediaQuery, useTheme } from "@mui/material";

const Direct = () => {
   const { username } = useParams();
   const { templateTheme } = useContext(GeneralInfoContext);
   const theme = useTheme();
   const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

   return (
      <Wrapper templateTheme={templateTheme}>
         {!isMatch ? (
            <>
               <LeftSideDirect templateTheme={templateTheme} />
               <Outlet />
            </>
         ) : isMatch && username ? (
            <Outlet />
         ) : isMatch && !username ? (
            <LeftSideDirect templateTheme={templateTheme} />
         ) : null}

         {!username && !isMatch && <DirectIntroduce />}
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
